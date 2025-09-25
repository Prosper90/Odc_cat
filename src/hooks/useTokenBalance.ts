import { useState, useEffect, useCallback } from 'react';
import { useAccount } from 'wagmi';
import { useSwapLogic } from './useSwap';
import { Token, TokenBalance } from '../types';

export const useTokenBalance = (token: Token | null) => {
  const { address, isConnected } = useAccount();
  const { getTokenBalance } = useSwapLogic();

  const [balance, setBalance] = useState<string>('0');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchBalance = useCallback(async () => {
    if (!token || !address || !isConnected) {
      setBalance('0');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const tokenBalance = await getTokenBalance(token);
      setBalance(tokenBalance);
    } catch (err) {
      console.error('Error fetching balance:', err);
      setError('Failed to fetch balance');
      setBalance('0');
    } finally {
      setIsLoading(false);
    }
  }, [token, address, isConnected, getTokenBalance]);

  // Fetch balance when dependencies change
  useEffect(() => {
    fetchBalance();
  }, [fetchBalance]);

  // Format balance for display
  const formatBalance = useCallback((balance: string, decimals: number = 4): string => {
    const balanceNum = parseFloat(balance);
    if (balanceNum === 0) return '0.00';
    if (balanceNum < 0.0001) return '< 0.0001';
    return balanceNum.toFixed(decimals);
  }, []);

  return {
    balance,
    formattedBalance: formatBalance(balance),
    isLoading,
    error,
    refetch: fetchBalance,
  };
};

// Hook for multiple token balances
export const useTokenBalances = (tokens: Token[]) => {
  const { address, isConnected } = useAccount();
  const { getTokenBalance } = useSwapLogic();

  const [balances, setBalances] = useState<TokenBalance[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchBalances = useCallback(async () => {
    if (!address || !isConnected || tokens.length === 0) {
      setBalances([]);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const balancePromises = tokens.map(async (token) => {
        const balance = await getTokenBalance(token);
        const balanceNum = parseFloat(balance);
        const formattedBalance = balanceNum === 0
          ? '0.00'
          : balanceNum < 0.0001
            ? '< 0.0001'
            : balanceNum.toFixed(4);

        return {
          token,
          balance,
          formattedBalance,
        };
      });

      const results = await Promise.all(balancePromises);
      setBalances(results);
    } catch (err) {
      console.error('Error fetching balances:', err);
      setError('Failed to fetch balances');
      setBalances([]);
    } finally {
      setIsLoading(false);
    }
  }, [tokens, address, isConnected, getTokenBalance]);

  // Fetch balances when dependencies change
  useEffect(() => {
    fetchBalances();
  }, [fetchBalances]);

  // Get balance for specific token
  const getBalanceForToken = useCallback((tokenAddress: string): TokenBalance | null => {
    return balances.find(b => b.token.address === tokenAddress) || null;
  }, [balances]);

  return {
    balances,
    isLoading,
    error,
    refetch: fetchBalances,
    getBalanceForToken,
  };
};