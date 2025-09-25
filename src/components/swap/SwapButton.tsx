import React from 'react';
import { useAccount } from 'wagmi';
import LoadingSpinner from '../common/LoadingSpinner';

interface SwapButtonProps {
  onSwap: () => void;
  isLoading: boolean;
  disabled: boolean;
  amountIn: string;
  tokenInSymbol?: string;
  tokenOutSymbol?: string;
}

const SwapButton: React.FC<SwapButtonProps> = ({
  onSwap,
  isLoading,
  disabled,
  amountIn,
  tokenInSymbol,
  tokenOutSymbol,
}) => {
  const { isConnected } = useAccount();

  const getButtonText = () => {
    if (!isConnected) return 'Connect Wallet First';
    if (isLoading) return 'Swapping...';
    if (!tokenInSymbol) return 'Select input token';
    if (!tokenOutSymbol) return 'Select output token';
    if (!amountIn || parseFloat(amountIn) <= 0) return 'Enter amount';
    return `Swap ${tokenInSymbol} → ${tokenOutSymbol}`;
  };

  const isButtonDisabled = disabled || isLoading || (!isConnected && false);

  return (
    <div className="relative">
      <button
        onClick={onSwap}
        disabled={isButtonDisabled}
        className={`
          w-full h-[48px] min-w-[166px] font-medium font-inter flex items-center cursor-pointer transition duration-300 ease-in-out justify-center gap-2.5
          !font-semibold max-sm:!text-[14px] max-sm:!h-[40px] max-sm:w-full !border-none rounded-[60px] text-[#00070F]
          px-[50px] relative z-10
          ${isButtonDisabled
            ? 'bg-gray-600 text-gray-300 cursor-not-allowed opacity-50'
            : 'bg-[#FFFF00] hover:bg-none hover:border-[#FFFF00] hover:shadow-lg active:scale-[0.98] btn-glow'
          }
        `}
        aria-label="swap button"
      >
        {isLoading && <LoadingSpinner size="sm" className="text-[#00070F]" />}
        <span className="text-[14px] font-semibold">{getButtonText()}</span>
      </button>

      {/* Gradient background for hover effect */}
      {!isButtonDisabled && (
        <div className="absolute inset-0 rounded-[60px] bg-gradient-to-r from-[#eff869df] to-[#fdb100] opacity-0 hover:opacity-100 transition-opacity duration-300 -z-10"></div>
      )}
    </div>
  );
};

export default SwapButton;