import { ethers } from 'ethers';
import { PANCAKESWAP_ADDRESSES, TOKEN_ADDRESSES, GAS_LIMITS } from './constants';

// PancakeSwap Router V2 ABI (simplified)
const ROUTER_ABI = [
  'function getAmountsOut(uint amountIn, address[] calldata path) external view returns (uint[] memory amounts)',
  'function swapExactTokensForTokens(uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline) external returns (uint[] memory amounts)',
  'function swapExactETHForTokens(uint amountOutMin, address[] calldata path, address to, uint deadline) external payable returns (uint[] memory amounts)',
  'function swapExactTokensForETH(uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline) external returns (uint[] memory amounts)',
  'function WETH() external pure returns (address)',
];

// ERC20 ABI (simplified)
const ERC20_ABI = [
  'function balanceOf(address owner) view returns (uint256)',
  'function decimals() view returns (uint8)',
  'function symbol() view returns (string)',
  'function transfer(address to, uint amount) returns (bool)',
  'function allowance(address owner, address spender) view returns (uint256)',
  'function approve(address spender, uint256 amount) returns (bool)',
];

export class PancakeSwapService {
  private provider: ethers.BrowserProvider;
  private routerContract: ethers.Contract;

  constructor(provider: ethers.BrowserProvider) {
    this.provider = provider;
    this.routerContract = new ethers.Contract(
      PANCAKESWAP_ADDRESSES.ROUTER_V2,
      ROUTER_ABI,
      provider
    );
  }

  // Get quote for token swap
  async getQuote(
    amountIn: string,
    tokenInAddress: string,
    tokenOutAddress: string
  ): Promise<string> {
    try {
      const amountInWei = ethers.parseEther(amountIn);

      // Create path for swap
      const path = this.getSwapPath(tokenInAddress, tokenOutAddress);

      // Get amounts out
      const amounts = await this.routerContract.getAmountsOut(amountInWei, path);

      // Return the output amount
      return ethers.formatEther(amounts[amounts.length - 1]);
    } catch (error) {
      console.error('Error getting quote:', error);
      throw new Error('Failed to get quote');
    }
  }

  // Execute token swap
  async executeSwap(
    amountIn: string,
    amountOutMin: string,
    tokenInAddress: string,
    tokenOutAddress: string,
    userAddress: string,
    slippagePercent: number = 0.5
  ): Promise<ethers.ContractTransactionResponse> {
    try {
      const signer = await this.provider.getSigner();
      const routerWithSigner = this.routerContract.connect(signer);

      const amountInWei = ethers.parseEther(amountIn);
      const amountOutMinWei = ethers.parseEther(amountOutMin);

      // Apply slippage tolerance
      const slippageMultiplier = (100 - slippagePercent) / 100;
      const amountOutMinWithSlippage = amountOutMinWei * BigInt(Math.floor(slippageMultiplier * 100)) / BigInt(100);

      // Set deadline (20 minutes from now)
      const deadline = Math.floor(Date.now() / 1000) + 60 * 20;

      const path = this.getSwapPath(tokenInAddress, tokenOutAddress);

      // Handle different swap types
      if (tokenInAddress === 'BNB') {
        // BNB to Token
        return await (routerWithSigner as any).swapExactETHForTokens(
          amountOutMinWithSlippage,
          path,
          userAddress,
          deadline,
          { value: amountInWei, gasLimit: GAS_LIMITS.SWAP }
        );
      } else if (tokenOutAddress === 'BNB') {
        // Token to BNB
        return await (routerWithSigner as any).swapExactTokensForETH(
          amountInWei,
          amountOutMinWithSlippage,
          path,
          userAddress,
          deadline,
          { gasLimit: GAS_LIMITS.SWAP }
        );
      } else {
        // Token to Token
        return await (routerWithSigner as any).swapExactTokensForTokens(
          amountInWei,
          amountOutMinWithSlippage,
          path,
          userAddress,
          deadline,
          { gasLimit: GAS_LIMITS.SWAP }
        );
      }
    } catch (error) {
      console.error('Error executing swap:', error);
      throw new Error('Swap transaction failed');
    }
  }

  // Check token allowance
  async checkAllowance(
    tokenAddress: string,
    userAddress: string
  ): Promise<string> {
    if (tokenAddress === 'BNB') return ethers.MaxUint256.toString();

    try {
      const tokenContract = new ethers.Contract(tokenAddress, ERC20_ABI, this.provider);
      const allowance = await tokenContract.allowance(userAddress, PANCAKESWAP_ADDRESSES.ROUTER_V2);
      return ethers.formatEther(allowance);
    } catch (error) {
      console.error('Error checking allowance:', error);
      return '0';
    }
  }

  // Approve token spending
  async approveToken(
    tokenAddress: string,
    amount: string
  ): Promise<ethers.ContractTransactionResponse> {
    if (tokenAddress === 'BNB') {
      throw new Error('BNB does not require approval');
    }

    try {
      const signer = await this.provider.getSigner();
      const tokenContract = new ethers.Contract(tokenAddress, ERC20_ABI, signer);
      const amountWei = ethers.parseEther(amount);

      return await tokenContract.approve(
        PANCAKESWAP_ADDRESSES.ROUTER_V2,
        amountWei,
        { gasLimit: GAS_LIMITS.APPROVE }
      );
    } catch (error) {
      console.error('Error approving token:', error);
      throw new Error('Token approval failed');
    }
  }

  // Get token balance
  async getTokenBalance(tokenAddress: string, userAddress: string): Promise<string> {
    try {
      if (tokenAddress === 'BNB') {
        const balance = await this.provider.getBalance(userAddress);
        return ethers.formatEther(balance);
      } else {
        const tokenContract = new ethers.Contract(tokenAddress, ERC20_ABI, this.provider);
        const balance = await tokenContract.balanceOf(userAddress);
        return ethers.formatEther(balance);
      }
    } catch (error) {
      console.error('Error getting token balance:', error);
      return '0';
    }
  }

  // Helper function to create swap path
  private getSwapPath(tokenInAddress: string, tokenOutAddress: string): string[] {
    const WBNB = TOKEN_ADDRESSES.WBNB;

    if (tokenInAddress === 'BNB') {
      if (tokenOutAddress === TOKEN_ADDRESSES.WBNB) {
        return [WBNB, tokenOutAddress];
      } else {
        return [WBNB, tokenOutAddress];
      }
    } else if (tokenOutAddress === 'BNB') {
      if (tokenInAddress === TOKEN_ADDRESSES.WBNB) {
        return [tokenInAddress, WBNB];
      } else {
        return [tokenInAddress, WBNB];
      }
    } else {
      // Token to Token via WBNB
      if (tokenInAddress === TOKEN_ADDRESSES.WBNB || tokenOutAddress === TOKEN_ADDRESSES.WBNB) {
        return [tokenInAddress, tokenOutAddress];
      } else {
        return [tokenInAddress, WBNB, tokenOutAddress];
      }
    }
  }

  // Calculate price impact
  calculatePriceImpact(_amountIn: string, expectedOut: string, actualOut: string): number {
    try {
      const expected = parseFloat(expectedOut);
      const actual = parseFloat(actualOut);

      if (expected === 0) return 0;

      const impact = ((expected - actual) / expected) * 100;
      return Math.max(0, impact);
    } catch (error) {
      console.error('Error calculating price impact:', error);
      return 0;
    }
  }
}