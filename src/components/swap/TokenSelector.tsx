import React, { useState, useRef, useEffect } from 'react';
import { Token } from '../../types';
import { SUPPORTED_TOKENS } from '../../utils/constants';

interface TokenSelectorProps {
  selectedToken: Token | null;
  onTokenSelect: (token: Token) => void;
  disabled?: boolean;
  placeholder?: string;
}

const TokenSelector: React.FC<TokenSelectorProps> = ({
  selectedToken,
  onTokenSelect,
  disabled = false,
  placeholder = "Select token"
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleTokenSelect = (token: Token) => {
    onTokenSelect(token);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        className={`
          w-full flex items-center justify-between p-3 rounded-xl border transition-all duration-200 font-inter
          ${disabled
            ? 'bg-[rgba(42,31,26,0.2)] border-[#443828] cursor-not-allowed opacity-50'
            : 'bg-[rgba(42,31,26,0.3)] border-[#443828] hover:border-[#FF8800]/50 hover:bg-[rgba(42,31,26,0.4)]'
          }
          ${isOpen ? 'border-[#FF8800] bg-[rgba(42,31,26,0.4)]' : ''}
        `}
      >
        {selectedToken ? (
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-[#FF8800] to-[#FF6600] rounded-full flex items-center justify-center">
              <span className="text-[#00070F] font-bold text-sm">
                {selectedToken.symbol.charAt(0)}
              </span>
            </div>
            <div className="text-left">
              <div className="text-white font-medium text-sm">{selectedToken.symbol}</div>
              <div className="text-gray-300 text-xs">{selectedToken.name}</div>
            </div>
          </div>
        ) : (
          <span className="text-gray-400 font-medium text-sm">{placeholder}</span>
        )}

        {!disabled && (
          <svg
            className={`w-4 h-4 text-[#FF8800] transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        )}
      </button>

      {isOpen && !disabled && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-[rgba(42,31,26,0.9)] border border-[#443828] rounded-xl shadow-xl z-50 backdrop-blur-md">
          <div className="p-2">
            {SUPPORTED_TOKENS.map((token) => (
              <button
                key={token.address}
                onClick={() => handleTokenSelect(token)}
                className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-[rgba(255,136,0,0.1)] hover:border-[rgba(255,136,0,0.3)] transition-all duration-200 border border-transparent"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-[#FF8800] to-[#FF6600] rounded-full flex items-center justify-center">
                  <span className="text-[#00070F] font-bold text-sm">
                    {token.symbol.charAt(0)}
                  </span>
                </div>
                <div className="text-left flex-1">
                  <div className="text-white font-medium text-sm">{token.symbol}</div>
                  <div className="text-gray-300 text-xs">{token.name}</div>
                </div>
                {selectedToken?.address === token.address && (
                  <svg className="w-4 h-4 text-[#FF8800]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TokenSelector;