// Token addresses on BSC Mainnet
export const TOKEN_ADDRESSES = {
  WBNB: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
  BNB: "BNB", // Native BNB
  USDT: "0x55d398326f99059fF775485246999027B3197955",
  ODC: "0x018cf072def5e8075294b019fceccbd49c224444", // OBE CAT Token
} as const;

// PancakeSwap Router addresses
export const PANCAKESWAP_ADDRESSES = {
  ROUTER_V2: "0x10ED43C718714eb63d5aA57B78B54704E256024E",
  FACTORY_V2: "0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73",
} as const;

// Chain configuration
export const BSC_CHAIN_ID = 56;
export const BSC_RPC_URL = "https://bsc-dataseed1.binance.org/";

// Token configurations
export const SUPPORTED_TOKENS = [
  {
    symbol: "ODC",
    name: "OBE CAT Token",
    address: TOKEN_ADDRESSES.ODC,
    decimals: 18,
    logo: "/tokens/odc.png",
  },
  {
    symbol: "BNB",
    name: "BNB",
    address: TOKEN_ADDRESSES.BNB,
    decimals: 18,
    logo: "/tokens/bnb.png",
  },
  {
    symbol: "WBNB",
    name: "Wrapped BNB",
    address: TOKEN_ADDRESSES.WBNB,
    decimals: 18,
    logo: "/tokens/wbnb.png",
  },
  {
    symbol: "USDT",
    name: "Tether USD",
    address: TOKEN_ADDRESSES.USDT,
    decimals: 18,
    logo: "/tokens/usdt.png",
  },
] as const;

// Default slippage tolerance (in basis points)
export const DEFAULT_SLIPPAGE = 50; // 0.5%

// Gas limits
export const GAS_LIMITS = {
  SWAP: 300000,
  APPROVE: 60000,
} as const;
