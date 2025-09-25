import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { SwapState, Token } from '../types';

// Initial state
const initialState: SwapState = {
  tokenIn: null,
  tokenOut: null,
  amountIn: '',
  amountOut: '',
  slippage: 50, // 0.5%
  isLoading: false,
  error: null,
  priceImpact: 0,
};

// Action types
type SwapAction =
  | { type: 'SET_TOKEN_IN'; payload: Token | null }
  | { type: 'SET_TOKEN_OUT'; payload: Token | null }
  | { type: 'SET_AMOUNT_IN'; payload: string }
  | { type: 'SET_AMOUNT_OUT'; payload: string }
  | { type: 'SET_SLIPPAGE'; payload: number }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null }
  | { type: 'SET_PRICE_IMPACT'; payload: number }
  | { type: 'SWAP_TOKENS' }
  | { type: 'RESET_AMOUNTS' }
  | { type: 'RESET_STATE' };

// Reducer function
const swapReducer = (state: SwapState, action: SwapAction): SwapState => {
  switch (action.type) {
    case 'SET_TOKEN_IN':
      return { ...state, tokenIn: action.payload };
    case 'SET_TOKEN_OUT':
      return { ...state, tokenOut: action.payload };
    case 'SET_AMOUNT_IN':
      return { ...state, amountIn: action.payload };
    case 'SET_AMOUNT_OUT':
      return { ...state, amountOut: action.payload };
    case 'SET_SLIPPAGE':
      return { ...state, slippage: action.payload };
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    case 'SET_PRICE_IMPACT':
      return { ...state, priceImpact: action.payload };
    case 'SWAP_TOKENS':
      return {
        ...state,
        tokenIn: state.tokenOut,
        tokenOut: state.tokenIn,
        amountIn: state.amountOut,
        amountOut: state.amountIn,
      };
    case 'RESET_AMOUNTS':
      return { ...state, amountIn: '', amountOut: '' };
    case 'RESET_STATE':
      return initialState;
    default:
      return state;
  }
};

// Context type
interface SwapContextType {
  state: SwapState;
  dispatch: React.Dispatch<SwapAction>;
  setTokenIn: (token: Token | null) => void;
  setTokenOut: (token: Token | null) => void;
  setAmountIn: (amount: string) => void;
  setAmountOut: (amount: string) => void;
  setSlippage: (slippage: number) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  setPriceImpact: (impact: number) => void;
  swapTokens: () => void;
  resetAmounts: () => void;
  resetState: () => void;
}

// Create context
const SwapContext = createContext<SwapContextType | undefined>(undefined);

// Hook to use swap context
export const useSwap = () => {
  const context = useContext(SwapContext);
  if (!context) {
    throw new Error('useSwap must be used within a SwapProvider');
  }
  return context;
};

// Provider component
interface SwapProviderProps {
  children: ReactNode;
}

export const SwapProvider: React.FC<SwapProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(swapReducer, initialState);

  // Action creators
  const setTokenIn = (token: Token | null) => {
    dispatch({ type: 'SET_TOKEN_IN', payload: token });
  };

  const setTokenOut = (token: Token | null) => {
    dispatch({ type: 'SET_TOKEN_OUT', payload: token });
  };

  const setAmountIn = (amount: string) => {
    dispatch({ type: 'SET_AMOUNT_IN', payload: amount });
  };

  const setAmountOut = (amount: string) => {
    dispatch({ type: 'SET_AMOUNT_OUT', payload: amount });
  };

  const setSlippage = (slippage: number) => {
    dispatch({ type: 'SET_SLIPPAGE', payload: slippage });
  };

  const setLoading = (loading: boolean) => {
    dispatch({ type: 'SET_LOADING', payload: loading });
  };

  const setError = (error: string | null) => {
    dispatch({ type: 'SET_ERROR', payload: error });
  };

  const setPriceImpact = (impact: number) => {
    dispatch({ type: 'SET_PRICE_IMPACT', payload: impact });
  };

  const swapTokens = () => {
    dispatch({ type: 'SWAP_TOKENS' });
  };

  const resetAmounts = () => {
    dispatch({ type: 'RESET_AMOUNTS' });
  };

  const resetState = () => {
    dispatch({ type: 'RESET_STATE' });
  };

  const value: SwapContextType = {
    state,
    dispatch,
    setTokenIn,
    setTokenOut,
    setAmountIn,
    setAmountOut,
    setSlippage,
    setLoading,
    setError,
    setPriceImpact,
    swapTokens,
    resetAmounts,
    resetState,
  };

  return <SwapContext.Provider value={value}>{children}</SwapContext.Provider>;
};