import React, { useState, useCallback } from "react";
import { Token } from "../../types";
import TokenSelector from "./TokenSelector";
import SwapButton from "./SwapButton";
import ErrorMessage from "../common/ErrorMessage";

const SwapInterface: React.FC = () => {
  const [tokenIn, setTokenIn] = useState<Token | null>(null);
  const [tokenOut, setTokenOut] = useState<Token | null>(null);
  const [amountIn, setAmountIn] = useState("");
  const [amountOut, setAmountOut] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSwapTokens = useCallback(() => {
    setTokenIn(tokenOut);
    setTokenOut(tokenIn);
    setAmountIn(amountOut);
    setAmountOut(amountIn);
  }, [tokenIn, tokenOut, amountIn, amountOut]);

  const handleAmountInChange = useCallback((value: string) => {
    setAmountIn(value);
    // TODO: Calculate amountOut based on current rates
    setAmountOut(""); // Placeholder
  }, []);

  const handleSwap = useCallback(async () => {
    if (!tokenIn || !tokenOut || !amountIn) return;

    setIsLoading(true);
    setError(null);

    try {
      // TODO: Implement actual swap logic
      console.log("Swapping:", { tokenIn, tokenOut, amountIn });

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Reset form on success
      setAmountIn("");
      setAmountOut("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Swap failed");
    } finally {
      setIsLoading(false);
    }
  }, [tokenIn, tokenOut, amountIn]);

  const canSwap = tokenIn && tokenOut && amountIn && parseFloat(amountIn) > 0;

  return (
    <div className="w-full max-w-[450px]">
      {/* Exact Cat Glassmorphism Card */}
      <div className="bg-[linear-gradient(104.08deg,rgba(1,7,14,0.18)_34.14%,rgba(255,255,255,0.18)_100.82%)] border border-[rgba(97,97,97,0.5)] backdrop-blur-[15px] rounded-[7px] p-[20px] shadow-[inset_0px_4px_34px_0px_#00FFDD40]">
        {/* Header */}
        <div className="flex items-center justify-between mb-[20px]">
          <h2 className="text-[20px] font-bold text-white font-inter">
            Swap Tokens
          </h2>
          <button className="p-[6px] text-[#0FEDBE] hover:bg-[rgba(15,237,190,0.1)] rounded-[4px] transition-all duration-300">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 1C11.866 1 15 4.134 15 8C15 11.866 11.866 15 8 15C4.134 15 1 11.866 1 8C1 4.134 4.134 1 8 1Z"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              <path
                d="M6.5 6.5C6.5 5.39543 7.39543 4.5 8.5 4.5C9.60457 4.5 10.5 5.39543 10.5 6.5"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
              <path
                d="M8 8V12"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {error && (
          <ErrorMessage
            message={error}
            onDismiss={() => setError(null)}
            className="mb-[20px]"
          />
        )}

        {/* Input Section */}
        <div className="space-y-[12px]">
          <div className="bg-[linear-gradient(174.51deg,rgba(36,45,58,0.3)_9.58%,rgba(15,237,190,0.3)_101.94%)] border border-[#283442] rounded-[16px] p-[16px]">
            <div className="flex items-center justify-between mb-[12px]">
              <span className="text-[14px] text-[#0FEDBE] font-medium">
                You Pay
              </span>
              <span className="text-[12px] text-white/60">Balance: 0.00</span>
            </div>
            <div className="flex items-center justify-between gap-[12px]">
              <div className="flex-1">
                <input
                  type="number"
                  placeholder="0.0"
                  value={amountIn}
                  onChange={(e) => handleAmountInChange(e.target.value)}
                  className="w-full bg-transparent text-[24px] text-white placeholder-white/40 outline-none font-inter font-semibold"
                  disabled={isLoading}
                />
              </div>
              <div className="min-w-[120px]">
                <TokenSelector
                  selectedToken={tokenIn}
                  onTokenSelect={setTokenIn}
                  disabled={isLoading}
                />
              </div>
            </div>
          </div>

          {/* Swap Arrow - Exact Cat Style */}
          <div className="flex justify-center">
            <button
              onClick={handleSwapTokens}
              disabled={isLoading}
              className="p-[12px] bg-[linear-gradient(174.51deg,rgba(36,45,58,0.3)_9.58%,rgba(15,237,190,0.1)_101.94%)] border border-[#283442] rounded-[12px] hover:bg-[rgba(15,237,190,0.2)] hover:border-[#0FEDBE] hover:shadow-[0px_0px_15px_rgba(15,237,190,0.3)] transition-all duration-300 disabled:opacity-50"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.5 6.75L9 2.25L4.5 6.75"
                  stroke="#0FEDBE"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.5 11.25L9 15.75L13.5 11.25"
                  stroke="#0FEDBE"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* Output Section */}
          <div className="bg-[linear-gradient(174.51deg,rgba(36,45,58,0.3)_9.58%,rgba(15,237,190,0.3)_101.94%)] border border-[#283442] rounded-[16px] p-[16px]">
            <div className="flex items-center justify-between mb-[12px]">
              <span className="text-[14px] text-[#0FEDBE] font-medium">
                You Receive
              </span>
              <span className="text-[12px] text-white/60">Balance: 0.00</span>
            </div>
            <div className="flex items-center justify-between gap-[12px]">
              <div className="flex-1">
                <input
                  type="number"
                  placeholder="0.0"
                  value={amountOut}
                  readOnly
                  className="w-full bg-transparent text-[24px] text-white placeholder-white/40 outline-none font-inter font-semibold"
                />
              </div>
              <div className="min-w-[120px]">
                <TokenSelector
                  selectedToken={tokenOut}
                  onTokenSelect={setTokenOut}
                  disabled={isLoading}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Swap Details - Exact Cat Style */}
        {canSwap && (
          <div className="mt-[16px] p-[12px] bg-[linear-gradient(174.51deg,rgba(15,237,190,0.05)_9.58%,rgba(66,189,221,0.05)_101.94%)] rounded-[8px] border border-[rgba(15,237,190,0.2)]">
            <div className="flex justify-between text-[14px] mb-[8px]">
              <span className="text-white/70">Exchange Rate</span>
              <span className="text-white font-medium">
                1 {tokenIn?.symbol} ≈ 0.00 {tokenOut?.symbol}
              </span>
            </div>
            <div className="flex justify-between text-[14px] mb-[8px]">
              <span className="text-white/70">Price Impact</span>
              <span className="text-[#0FEDBE] font-medium"> 0.1%</span>
            </div>
            <div className="flex justify-between text-[14px]">
              <span className="text-white/70">Est. Gas Fee</span>
              <span className="text-[#FFFF00] font-medium">~$0.50</span>
            </div>
          </div>
        )}

        {/* Swap Button - Exact Cat Style */}
        <div className="mt-[20px]">
          <SwapButton
            onSwap={handleSwap}
            isLoading={isLoading}
            disabled={!canSwap}
            amountIn={amountIn}
            tokenInSymbol={tokenIn?.symbol}
            tokenOutSymbol={tokenOut?.symbol}
          />
        </div>

        {/* Powered by Notice */}
        <div className="mt-[16px] text-center">
          <p className="text-[12px] text-white/50">
            Powered by{" "}
            <span className="text-[#0FEDBE] font-medium">
              AI Portfolio Management
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SwapInterface;
