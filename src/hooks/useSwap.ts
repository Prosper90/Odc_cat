import { useState, useCallback, useEffect } from 'react';
import { useAccount, useWalletClient } from 'wagmi';
import { ethers } from 'ethers';
import { PancakeSwapService } from '../utils/pancakeSwap';
import { Token } from '../types';

export const useSwapLogic = () => {
  const { address, isConnected } = useAccount();
  const { data: walletClient } = useWalletClient();

  const [pancakeSwapService, setPancakeSwapService] = useState<PancakeSwapService | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Initialize PancakeSwap service
  useEffect(() => {
    if (walletClient && window.ethereum) {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const service = new PancakeSwapService(provider);
      setPancakeSwapService(service);
    }
  }, [walletClient]);

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
  };
};