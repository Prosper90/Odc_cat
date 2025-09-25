export interface Token {
  symbol: string;
  name: string;
  address: string;
  decimals: number;
  logo: string;
}

export interface SwapParams {
  tokenIn: Token;
  tokenOut: Token;
  amountIn: string;
  amountOutMin: string;
  slippage: number;
  deadline: number;
}

export interface SwapState {
  tokenIn: Token | null;
  tokenOut: Token | null;
  amountIn: string;
  amountOut: string;
  slippage: number;
  isLoading: boolean;
  error: string | null;
  priceImpact: number;
}

export interface TransactionStatus {
  hash: string | null;
  status: 'idle' | 'pending' | 'confirmed' | 'failed';
  error: string | null;
}

export interface TokenBalance {
  token: Token;
  balance: string;
  formattedBalance: string;
}