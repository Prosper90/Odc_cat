import { useState, useCallback, useEffect } from 'react';
import { useAccount, useWalletClient } from 'wagmi';
import { ethers } from 'ethers';
import { PancakeSwapService } from '../utils/pancakeSwap';
import { priceService } from '../utils/priceService';
import { Token, TokenBalance } from '../types';

export const useSwapLogic = () => {
  const { address, isConnected } = useAccount();
  const { data: walletClient } = useWalletClient();

  const [pancakeSwapService, setPancakeSwapService] = useState<PancakeSwapService | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [tokenBalances, setTokenBalances] = useState<Record<string, string>>({});
  const [tokenPrices, setTokenPrices] = useState<Record<string, number>>({});

  // Initialize PancakeSwap service
  useEffect(() => {
    if (walletClient && window.ethereum) {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const service = new PancakeSwapService(provider);
      setPancakeSwapService(service);
    }
  }, [walletClient]);

  // Fetch token prices
  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const symbols = ['ODC', 'BNB', 'WBNB', 'USDT'];
        const prices = await priceService.getTokenPrices(symbols);
        setTokenPrices(prices);
      } catch (error) {
        console.error('Error fetching prices:', error);
      }
    };

    fetchPrices();
    // Update prices every 30 seconds
    const interval = setInterval(fetchPrices, 30000);
    return () => clearInterval(interval);
  }, []);

  // Fetch token balances when wallet is connected
  useEffect(() => {
    const fetchBalances = async () => {
      if (!pancakeSwapService || !address || !isConnected) return;

      try {
        const symbols = ['ODC', 'BNB', 'WBNB', 'USDT'];
        const addresses = {
          'ODC': '0x018cF072DEF5e8075294B019FcECCbD49C224444',
          'BNB': 'BNB',
          'WBNB': '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
          'USDT': '0x55d398326f99059fF775485246999027B3197955'
        };

        const balances: Record<string, string> = {};

        await Promise.all(
          symbols.map(async (symbol) => {
            try {
              const balance = await pancakeSwapService.getTokenBalance(addresses[symbol as keyof typeof addresses], address);
              balances[symbol] = balance;
            } catch (error) {
              console.error(`Error fetching ${symbol} balance:`, error);
              balances[symbol] = '0';
            }
          })
        );

        setTokenBalances(balances);
      } catch (error) {
        console.error('Error fetching balances:', error);
      }
    };

    fetchBalances();
  }, [pancakeSwapService, address, isConnected]);

  // Get quote for swap
  const getQuote = useCallback(async (
    amountIn: string,
    tokenIn: Token,
    tokenOut: Token
  ): Promise<string | null> => {
    if (!pancakeSwapService || !amountIn || parseFloat(amountIn) <= 0) {
      return null;
    }

    try {
      setError(null);
      const quote = await pancakeSwapService.getQuote(
        amountIn,
        tokenIn.address,
        tokenOut.address
      );
      return quote;
    } catch (err) {
      console.error('Error getting quote:', err);
      setError('Failed to get quote');
      return null;
    }
  }, [pancakeSwapService]);

  // Execute swap
  const executeSwap = useCallback(async (
    amountIn: string,
    amountOutMin: string,
    tokenIn: Token,
    tokenOut: Token,
    slippage: number
  ): Promise<boolean> => {
    if (!pancakeSwapService || !address || !isConnected) {
      setError('Wallet not connected');
      return false;
    }

    setIsLoading(true);
    setError(null);

    try {
      // Check if token approval is needed
      if (tokenIn.address !== 'BNB') {
        const allowance = await pancakeSwapService.checkAllowance(tokenIn.address, address);
        if (parseFloat(allowance) < parseFloat(amountIn)) {
          // Need approval
          const approvalTx = await pancakeSwapService.approveToken(tokenIn.address, amountIn);
          await approvalTx.wait();
        }
      }

      // Execute swap
      const swapTx = await pancakeSwapService.executeSwap(
        amountIn,
        amountOutMin,
        tokenIn.address,
        tokenOut.address,
        address,
        slippage / 100 // Convert basis points to percentage
      );

      // Wait for transaction confirmation
      await swapTx.wait();
      return true;

    } catch (err) {
      console.error('Swap error:', err);
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Swap failed');
      }
      return false;
    } finally {
      setIsLoading(false);
    }
  }, [pancakeSwapService, address, isConnected]);

  // Get token balance
  const getTokenBalance = useCallback(async (token: Token): Promise<string> => {
    if (!pancakeSwapService || !address) return '0';

    try {
      const balance = await pancakeSwapService.getTokenBalance(token.address, address);
      return balance;
    } catch (err) {
      console.error('Error getting balance:', err);
      return '0';
    }
  }, [pancakeSwapService, address]);

  // Check token allowance
  const checkTokenAllowance = useCallback(async (token: Token): Promise<string> => {
    if (!pancakeSwapService || !address || token.address === 'BNB') return ethers.MaxUint256.toString();

    try {
      const allowance = await pancakeSwapService.checkAllowance(token.address, address);
      return allowance;
    } catch (err) {
      console.error('Error checking allowance:', err);
      return '0';
    }
  }, [pancakeSwapService, address]);

  // Calculate price impact
  const calculatePriceImpact = useCallback((
    amountIn: string,
    expectedOut: string,
    actualOut: string
  ): number => {
    if (!pancakeSwapService) return 0;
    return pancakeSwapService.calculatePriceImpact(amountIn, expectedOut, actualOut);
  }, [pancakeSwapService]);

  return {
    getQuote,
    executeSwap,
    getTokenBalance,
    checkTokenAllowance,
    calculatePriceImpact,
    isLoading,
    error,
    clearError: () => setError(null),
    isServiceReady: !!pancakeSwapService,
    tokenBalances,
    tokenPrices,
    refreshBalances: () => {
      if (pancakeSwapService && address && isConnected) {
        // Re-fetch balances
        setTokenBalances({});
      }
    },
  };
};