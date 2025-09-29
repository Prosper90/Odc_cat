import { useState, useCallback, useEffect } from "react";
import { useAccount } from "wagmi";
import { Token } from "../../types";
import { useSwapLogic } from "../../hooks/useSwap";
import { SUPPORTED_TOKENS } from "../../utils/constants";
import { priceService } from "../../utils/priceService";
import ErrorMessage from "../common/ErrorMessage";
import TokenSelector from "../swap/TokenSelector";
import { ConnectKitButton } from "connectkit";
import SectionDivider from "../common/SectionDivider";

export default function Buy() {
  const { isConnected } = useAccount();

  // Swap state - Default to ODC trading
  const [tokenIn, setTokenIn] = useState<Token | null>(
    SUPPORTED_TOKENS.find((t) => t.symbol === "BNB") || null
  );
  const [tokenOut, setTokenOut] = useState<Token | null>(
    SUPPORTED_TOKENS.find((t) => t.symbol === "ODC") || null
  );
  const [amountIn, setAmountIn] = useState("");
  const [amountOut, setAmountOut] = useState("");
  const [isSwapLoading, setIsSwapLoading] = useState(false);
  const [swapError, setSwapError] = useState<string | null>(null);
  const [currentPrice, setCurrentPrice] = useState<number>(0);
  const [priceChange24h, setPriceChange24h] = useState<number>(0);

  // Swap logic hook
  const {
    getQuote,
    executeSwap,
    isLoading: hookLoading,
    error: hookError,
    clearError,
    tokenBalances,
    refreshBalances,
  } = useSwapLogic();

  // Update current price and change when tokenOut changes
  useEffect(() => {
    const updatePrice = async () => {
      if (tokenOut) {
        try {
          const price = await priceService.getTokenPrice(tokenOut.symbol);
          const change = priceService.getPriceChange24h(tokenOut.symbol);
          setCurrentPrice(price);
          setPriceChange24h(change);
        } catch (error) {
          console.error("Error fetching price:", error);
        }
      }
    };

    updatePrice();
  }, [tokenOut]);

  // Get quote when amount or tokens change
  useEffect(() => {
    const getQuoteAsync = async () => {
      if (tokenIn && tokenOut && amountIn && parseFloat(amountIn) > 0) {
        const quote = await getQuote(amountIn, tokenIn, tokenOut);
        if (quote) {
          setAmountOut(quote);
        }
      } else {
        setAmountOut("");
      }
    };

    getQuoteAsync();
  }, [amountIn, tokenIn, tokenOut, getQuote]);

  const handleAmountInChange = useCallback((value: string) => {
    setAmountIn(value);
  }, []);

  const handleSwap = useCallback(async () => {
    if (!tokenIn || !tokenOut || !amountIn || !amountOut) return;

    setIsSwapLoading(true);
    setSwapError(null);

    try {
      const success = await executeSwap(
        amountIn,
        amountOut,
        tokenIn,
        tokenOut,
        50 // 0.5% slippage
      );

      if (success) {
        // Reset form on success
        setAmountIn("");
        setAmountOut("");
        // Refresh balances after successful swap
        refreshBalances();
      }
    } catch (err) {
      setSwapError(err instanceof Error ? err.message : "Swap failed");
    } finally {
      setIsSwapLoading(false);
    }
  }, [tokenIn, tokenOut, amountIn, amountOut, executeSwap]);

  const handleSwapTokens = useCallback(() => {
    setTokenIn(tokenOut);
    setTokenOut(tokenIn);
    setAmountIn(amountOut);
    setAmountOut(amountIn);
  }, [tokenIn, tokenOut, amountIn, amountOut]);

  const canSwap =
    isConnected &&
    tokenIn &&
    tokenOut &&
    amountIn &&
    parseFloat(amountIn) > 0 &&
    amountOut;
  const isLoading = isSwapLoading || hookLoading;
  return (
    <>
      <SectionDivider variant="gradient" />
      <div
        className="py-[85px] max-[1200px]:py-[60px] max-[900px]:py-10 relative z-[2] bg-cover overflow-hidden scroll-mt-10"
        id="how-to-buy"
        style={{
          backgroundImage: "url(/_next/static/media/howToBuyBack.5c428fb1.png)",
        }}
      >
      <canvas
        className="absolute bottom-[-16px] left-0 w-full h-full -z-[1]"
        width="1920"
        height="768"
      ></canvas>

      <div className="container relative z-20 px-4 max-sm:px-2">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-[68px] max-lg:items-center">
          {/* Swap Card */}
          <div className="w-full lg:flex-[1.5] flex flex-col border border-[#443828] rounded-[20px] max-sm:rounded-[16px] backdrop-blur-[90px] bg-gradient-to-b from-[rgba(58,45,36,0.3)] to-[rgba(237,134,15,0.3)] shadow-[inset_0px_4px_20px_0px_#FF8800] px-6 py-6 lg:px-[35px] lg:py-[30px] max-sm:px-4 max-sm:py-5 max-[900px]:border-[#dd7730] max-[900px]:bg-gradient-to-br max-[900px]:from-[rgba(42,31,26,0.9)] max-[900px]:to-[rgba(42,31,26,0.6)] max-[900px]:shadow-[inset_0px_4px_8px_0px_#d67b26] animate-fade-in-up hover:shadow-[inset_0px_4px_25px_0px_#FF8800] transition-all duration-300">
            {/* Swap Header */}
            <div className="flex flex-col">
              <p className="font-bold text-center text-white font-inter">
                Token Swap
              </p>
              <p className="text-center bg-gradient-to-r from-[#FF8800] to-[#FF6600] bg-clip-text text-transparent font-semibold">
                Trade Instantly
              </p>
            </div>

            {/* Live Trading Stats */}
            <div className="mt-4 flex items-center justify-between gap-3 max-md:gap-2 max-sm:flex-wrap max-sm:justify-evenly text-center font-normal text-white">
              <div className="text-center">
                <p>24h Volume:</p>
                <p className="text-[#FF8800] font-bold">$847,291</p>
              </div>
              <div>
                <p>Total Liquidity:</p>
                <p className="text-[#FF6600] font-bold">$2,456,832</p>
              </div>
              <div>
                <p>Active Pairs:</p>
                <p className="text-[#FF9933] font-bold">12</p>
              </div>
            </div>

            {/* Price Info */}
            <div className="flex flex-col mt-4">
              <div className="rounded-[11px] bg-white/10 py-2 text-white flex backdrop-blur-[90px] items-center px-[15px] border border-[#FF8800] max-sm:flex-col w-full justify-between">
                <p className="font-normal max-md:text-xs">
                  1 {tokenOut?.symbol || "ODC"} ={" "}
                  <span className="text-[#FF8800]">
                    ${currentPrice.toFixed(8)}
                  </span>
                </p>
                <p className="font-normal max-md:text-xs">
                  24h Change:{" "}
                  <span
                    className={`${
                      priceChange24h >= 0 ? "text-green-400" : "text-red-400"
                    }`}
                  >
                    {priceChange24h >= 0 ? "+" : ""}
                    {priceChange24h.toFixed(2)}%
                  </span>
                </p>
                <p className="font-semibold max-md:text-xs">
                  Slippage: <span className="text-[#FF8800]">0.5%</span>
                </p>
              </div>

              {/* Token Selection Info */}
              <div className="mt-5 text-center animate-fade-in animate-delay-300">
                <p className="text-[#FF8800] text-sm font-medium">
                  Select tokens below to start swapping
                </p>
              </div>

              {/* Error Display */}
              {(swapError || hookError) && (
                <div className="mt-4">
                  <ErrorMessage
                    message={swapError || hookError || ""}
                    onDismiss={() => {
                      setSwapError(null);
                      clearError();
                    }}
                  />
                </div>
              )}

              {/* Swap Input Fields */}
              <div className="flex items-center w-full gap-6 my-6 max-md:flex-col">
                {/* From Token */}
                <div className="w-1/2 max-md:w-full">
                  <p className="text-white mb-2">You Pay:</p>
                  <div className="bg-[linear-gradient(174.51deg,rgba(58,45,36,0.3)_9.58%,rgba(237,134,15,0.3)_101.94%)] border border-[#443828] rounded-[16px] p-[16px]">
                    <div className="flex items-center justify-between mb-[12px]">
                      <span className="text-[12px] text-white/60">
                        Balance:{" "}
                        {tokenIn
                          ? tokenBalances[tokenIn.symbol]
                            ? parseFloat(tokenBalances[tokenIn.symbol]).toFixed(
                                4
                              )
                            : "0.00"
                          : "0.00"}
                      </span>
                      {tokenIn &&
                        tokenBalances[tokenIn.symbol] &&
                        parseFloat(tokenBalances[tokenIn.symbol]) > 0 && (
                          <button
                            onClick={() =>
                              setAmountIn(tokenBalances[tokenIn.symbol])
                            }
                            className="text-[10px] text-[#FF8800] hover:text-[#FF6600] transition-colors"
                          >
                            MAX
                          </button>
                        )}
                    </div>
                    <div className="flex items-center justify-between gap-[12px]">
                      <div className="flex-1">
                        <input
                          type="number"
                          placeholder="0.0"
                          value={amountIn}
                          onChange={(e) => handleAmountInChange(e.target.value)}
                          disabled={isLoading}
                          className="w-full bg-transparent text-[20px] text-white placeholder-white/40 outline-none font-inter font-semibold disabled:opacity-50"
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
                </div>

                {/* Swap Arrow */}
                <div className="flex justify-center max-md:my-2">
                  <button
                    onClick={handleSwapTokens}
                    disabled={isLoading}
                    className="p-[12px] bg-[linear-gradient(174.51deg,rgba(58,45,36,0.3)_9.58%,rgba(237,134,15,0.1)_101.94%)] border border-[#443828] rounded-[12px] hover:bg-[rgba(237,134,15,0.2)] hover:border-[#FF8800] hover:shadow-[0px_0px_15px_rgba(255,136,0,0.3)] transition-all duration-300 disabled:opacity-50"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M12 6L8 2L4 6"
                        stroke="#FF8800"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4 10L8 14L12 10"
                        stroke="#FF8800"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>

                {/* To Token */}
                <div className="w-1/2 max-md:w-full">
                  <p className="text-white mb-2">You Receive:</p>
                  <div className="bg-[linear-gradient(174.51deg,rgba(58,45,36,0.3)_9.58%,rgba(237,134,15,0.3)_101.94%)] border border-[#443828] rounded-[16px] p-[16px]">
                    <div className="flex items-center justify-between mb-[12px]">
                      <span className="text-[12px] text-white/60">
                        Balance:{" "}
                        {tokenOut
                          ? tokenBalances[tokenOut.symbol]
                            ? parseFloat(
                                tokenBalances[tokenOut.symbol]
                              ).toFixed(4)
                            : "0.00"
                          : "0.00"}
                      </span>
                    </div>
                    <div className="flex items-center justify-between gap-[12px]">
                      <div className="flex-1">
                        <input
                          type="number"
                          placeholder="0.0"
                          value={amountOut}
                          readOnly
                          className="w-full bg-transparent text-[20px] text-white placeholder-white/40 outline-none font-inter font-semibold"
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
              </div>

              {/* Swap Details */}
              {canSwap && (
                <div className="mb-4 p-3 bg-[linear-gradient(174.51deg,rgba(237,134,15,0.05)_9.58%,rgba(255,136,0,0.05)_101.94%)] rounded-lg border border-[rgba(255,136,0,0.2)]">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-white/70">Exchange Rate</span>
                    <span className="text-white font-medium">
                      1 {tokenIn?.symbol} ≈{" "}
                      {amountOut && amountIn
                        ? (
                            parseFloat(amountOut) / parseFloat(amountIn)
                          ).toFixed(4)
                        : "0.00"}{" "}
                      {tokenOut?.symbol}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/70">Est. Gas Fee</span>
                    <span className="text-[#FF9933] font-medium">~$2-5</span>
                  </div>
                </div>
              )}

              {/* Swap Button */}
              <div className="animate-fade-in-up animate-delay-500">
                {!isConnected ? (
                  <ConnectKitButton.Custom>
                    {({ isConnected, show, truncatedAddress, ensName }) => {
                      return (
                        <button
                          onClick={show}
                          className="w-full min-w-[166px] flex items-center cursor-pointer transition duration-300 ease-in-out justify-center gap-2.5 font-semibold max-sm:text-sm max-sm:h-10 rounded-[60px] h-12 font-bold hover-lift bg-gradient-to-r from-[var(--primary-amber)] to-[var(--accent-golden)] text-[#00070F] hover:from-yellow-400 hover:to-yellow-400"
                          aria-label="Connect Wallet"
                        >
                          {isConnected
                            ? ensName ?? truncatedAddress
                            : "Connect Wallet"}
                        </button>
                      );
                    }}
                  </ConnectKitButton.Custom>
                ) : (
                  <button
                    onClick={handleSwap}
                    disabled={!canSwap || isLoading}
                    className={`w-full min-w-[166px] flex items-center cursor-pointer transition duration-300 ease-in-out justify-center gap-2.5 font-semibold max-sm:text-sm max-sm:h-10 rounded-[60px] h-12 font-bold hover-lift ${
                      !canSwap || isLoading
                        ? "bg-gray-600 text-gray-300 cursor-not-allowed"
                        : "bg-gradient-to-r from-orange-400 to-orange-600 text-[#00070F] hover:from-orange-500 hover:to-orange-700 animate-glow"
                    }`}
                    aria-label="Swap Tokens"
                  >
                    {isLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-gray-300 border-t-gray-600"></div>
                        Swapping...
                      </>
                    ) : !tokenIn || !tokenOut ? (
                      "Select Tokens"
                    ) : !amountIn ? (
                      "Enter Amount"
                    ) : (
                      <>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M12 6L8 2L4 6"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M4 10L8 14L12 10"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        Swap {tokenIn?.symbol} for {tokenOut?.symbol}
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>

            {/* Supported Tokens */}
            <div className="mt-auto flex cursor-pointer items-center justify-center pt-6 max-sm:flex-col max-sm:gap-2 max-sm:pt-2 group">
              <p className="text-sm text-white mr-3 transition-all group-hover:text-[#FF8800]">
                Supported Tokens: ODC, BNB, WBNB, USDT
              </p>
            </div>
          </div>

          {/* How To Swap Section */}
          <div className="w-full lg:flex-[1] max-lg:mt-8">
            <div className="text-center lg:text-left">
              <h2 className="mb-6 text-4xl lg:text-3xl font-bold text-white max-md:text-2xl max-sm:text-xl">
                How To Swap
              </h2>
              <p className="mb-8 text-lg lg:text-base font-inter font-normal text-gray-300 max-w-2xl lg:max-w-none mx-auto lg:mx-0">
                Trade tokens instantly with our decentralized exchange. Get the
                best rates with minimal slippage and low fees.
              </p>
            </div>

            <div className="space-y-1">
              {[
                {
                  step: "1",
                  title: "Connect Your Wallet",
                  desc: "Link your Web3 wallet to start trading",
                },
                {
                  step: "2",
                  title: "Select Token Pair",
                  desc: "Choose the tokens you want to swap",
                },
                {
                  step: "3",
                  title: "Enter Amount & Review",
                  desc: "Set your trade amount and review details",
                },
                {
                  step: "4",
                  title: "Confirm Transaction",
                  desc: "Approve and execute your swap",
                },
              ].map((item, index) => (
                <div key={index} className="group relative">
                  <div className="flex items-center py-4 px-4 lg:px-0 rounded-lg lg:rounded-none hover:bg-white/5 lg:hover:bg-transparent transition-all duration-300 cursor-default">
                    <div className="flex items-center w-full">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-[#FF8800] to-[#FF6600] text-white font-bold text-sm mr-4 group-hover:scale-110 transition-transform duration-300">
                        {item.step}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-white text-lg lg:text-xl max-md:text-base max-sm:text-sm group-hover:text-[#FF8800] transition-colors duration-300">
                          {item.title}
                        </h3>
                        <p className="text-gray-400 text-sm lg:hidden group-hover:text-gray-300 transition-colors duration-300">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                  {index < 3 && (
                    <div className="hidden lg:block h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-[rgba(255,136,0,0.1)] to-[rgba(255,102,0,0.1)] border border-[rgba(255,136,0,0.2)] backdrop-blur-sm">
              <div className="text-center lg:text-left">
                <h3 className="font-bold text-[#FF8800] text-xl lg:text-lg mb-2">
                  Best Rates Guaranteed
                </h3>
                <p className="text-gray-300 text-base lg:text-sm mb-4">
                  Lightning fast swaps with minimal fees
                </p>
                <button
                  className="w-full lg:w-auto min-w-[200px] flex items-center cursor-pointer transition-all duration-300 ease-in-out justify-center gap-2.5 font-semibold bg-gradient-to-r from-[#FF8800] to-[#FF6600] rounded-xl text-white hover:from-[#FF9900] hover:to-[#FF7700] hover:shadow-lg hover:scale-105 h-12 px-6 text-base font-bold"
                  aria-label="View All Trading Pairs"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2L2 7L12 12L22 7L12 2Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 17L12 22L22 17"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 12L12 17L22 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  View All Trading Pairs
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
