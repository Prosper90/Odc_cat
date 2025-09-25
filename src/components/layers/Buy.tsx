import { useState, useCallback, useEffect } from "react";
import { Token } from "../../types";
import { useSwapLogic } from "../../hooks/useSwap";
import { SUPPORTED_TOKENS } from "../../utils/constants";
import ErrorMessage from "../common/ErrorMessage";

export default function Buy() {
  // Swap state
  const [tokenIn, setTokenIn] = useState<Token | null>(SUPPORTED_TOKENS.find(t => t.symbol === 'BNB') || null);
  const [tokenOut] = useState<Token | null>(SUPPORTED_TOKENS.find(t => t.symbol === 'USDT') || null);
  const [amountIn, setAmountIn] = useState("");
  const [amountOut, setAmountOut] = useState("");
  const [isSwapLoading, setIsSwapLoading] = useState(false);
  const [swapError, setSwapError] = useState<string | null>(null);

  // Selected currency for presale (default to BNB)
  const [selectedCurrency, setSelectedCurrency] = useState<'BNB' | 'WBNB' | 'USDT'>('BNB');

  // Swap logic hook
  const { getQuote, executeSwap, isLoading: hookLoading, error: hookError, clearError } = useSwapLogic();

  // Update tokenIn when currency selection changes
  useEffect(() => {
    const newTokenIn = SUPPORTED_TOKENS.find(t => t.symbol === selectedCurrency);
    if (newTokenIn) {
      setTokenIn(newTokenIn);
    }
  }, [selectedCurrency]);

  // Get quote when amount changes
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
      }
    } catch (err) {
      setSwapError(err instanceof Error ? err.message : "Swap failed");
    } finally {
      setIsSwapLoading(false);
    }
  }, [tokenIn, tokenOut, amountIn, amountOut, executeSwap]);

  const canSwap = tokenIn && tokenOut && amountIn && parseFloat(amountIn) > 0 && amountOut;
  const isLoading = isSwapLoading || hookLoading;
  return (
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

      <div className="container relative z-20">
        <div className="flex gap-[68px] max-[1400px]:flex-wrap max-[1500px]:gap-4 max-[1400px]:justify-center">
          {/* Presale Card */}
          <div className="flex-shrink-0 flex flex-col border border-[#283442] max-sm:p-2 max-sm:rounded-[10px] rounded-[20px] backdrop-blur-[90px] bg-gradient-to-b from-[rgba(36,45,58,0.3)] to-[rgba(15,237,190,0.3)] shadow-[inset_0px_4px_20px_0px_#00FFDD] px-[35px] py-[30px] max-w-[615px] max-[1200px]:max-w-none w-full max-lg:p-5 max-[640px]:p-[15px] max-[900px]:border-[#30ddaf] max-[900px]:bg-gradient-to-br max-[900px]:from-black max-[900px]:to-[rgb(29,84,73)] max-[900px]:shadow-[inset_0px_4px_8px_0px_#267068] animate-fade-in-up hover-lift">
            {/* Stage and Progress */}
            <div className="flex flex-col">
              <p className="font-bold text-center text-white font-inter">
                Stage 8
              </p>
              <p className="text-center bg-gradient-to-r from-[#42BDDD] to-[#0FEDBE] bg-clip-text text-transparent font-semibold">
                Before Price Rises
              </p>

              <div className="mt-4 overflow-hidden w-full relative h-4 bg-gray-700 rounded-full">
                <span className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-[1000] font-bold text-[11px] text-white">
                  15.09% Sold
                </span>
                <div
                  className="bg-gradient-to-r from-[#42BDDD] to-[#0FEDBE] h-full rounded-full"
                  style={{ width: "15.0857%" }}
                ></div>
              </div>
            </div>

            {/* Price Information */}
            <div className="mt-4 flex items-center justify-between gap-3 max-md:gap-2 max-sm:flex-wrap max-sm:justify-evenly text-center font-normal text-white">
              <div className="text-center">
                <p>Current Price:</p>
                <p className="text-[#0FEDBE] font-bold">$0.012</p>
              </div>
              <div>
                <p>USDT RAISED:</p>
                <p className="text-[#FFFB00] font-bold">$18,523,207.0522</p>
              </div>
              <div>
                <p>Tokens Sold:</p>
                <p className="text-[#00CAFF] font-bold">2,381,571,390.8802</p>
              </div>
            </div>

            {/* Price Details */}
            <div className="flex flex-col mt-4">
              <div className="rounded-[11px] bg-white/10 py-2 text-white flex backdrop-blur-[90px] items-center px-[15px] border border-[#04EEE2] max-sm:flex-col w-full justify-between">
                <p className="font-normal max-md:text-xs">
                  1 $CAT = <span className="text-[#0FEDBE]">$0.012</span>
                </p>
                <p className="font-normal max-md:text-xs">
                  Launch Price: <span className="text-[#0FEDBE]">$0.05</span>
                </p>
                <p className="font-semibold max-md:text-xs">
                  Next Price: <span className="text-[#0FEDBE]">$0.0131</span>
                </p>
              </div>

              {/* Currency Selection */}
              <div className="flex items-center gap-2 w-full justify-center mt-5 animate-fade-in animate-delay-300">
                <button
                  onClick={() => setSelectedCurrency('BNB')}
                  className={`rounded-[9px] cursor-pointer text-sm gap-[5px] border justify-center transition duration-300 ease-in-out h-10 backdrop-blur-[60px] flex items-center px-[34px] max-md:px-3 flex-1 w-full hover-scale ${
                    selectedCurrency === 'BNB'
                      ? 'bg-[#0FEDBE] text-black animate-glow'
                      : 'border-0 bg-[#394B5D] text-white hover:bg-[#0FEDBE] hover:text-black'
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    fill="none"
                  >
                    <g fill="currentColor" clipPath="url(#bnb_svg__a)">
                      <path d="m11.038 7.5 1.521 1.522L14.082 7.5 12.56 5.98zM.916 7.502l1.521 1.521 1.521-1.521-1.52-1.521zM7.5 3.959 4.978 6.481 3.457 4.96 7.5.917l4.043 4.043-1.521 1.52zm0 7.083L10.02 8.52l1.522 1.521L7.5 14.084l-4.043-4.043 1.52-1.521z"></path>
                      <path d="m5.994 7.5 1.502 1.503L8.998 7.5 7.496 5.999z"></path>
                    </g>
                    <defs>
                      <clipPath id="bnb_svg__a">
                        <path fill="#fff" d="M0 15h15V0H0z"></path>
                      </clipPath>
                    </defs>
                  </svg>
                  <p>BNB</p>
                </button>

                <button
                  onClick={() => setSelectedCurrency('WBNB')}
                  className={`rounded-[9px] cursor-pointer text-sm gap-[5px] justify-center transition duration-300 ease-in-out h-10 backdrop-blur-[60px] flex items-center px-[34px] max-md:px-3 flex-1 w-full hover-scale ${
                    selectedCurrency === 'WBNB'
                      ? 'bg-[#0FEDBE] text-black border animate-glow'
                      : 'border-0 bg-[#394B5D] text-white hover:bg-[#0FEDBE] hover:text-black'
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    fill="none"
                  >
                    <g fill="currentColor" clipPath="url(#wbnb_svg__a)">
                      <path d="m11.038 7.5 1.521 1.522L14.082 7.5 12.56 5.98zM.916 7.502l1.521 1.521 1.521-1.521-1.52-1.521zM7.5 3.959 4.978 6.481 3.457 4.96 7.5.917l4.043 4.043-1.521 1.52zm0 7.083L10.02 8.52l1.522 1.521L7.5 14.084l-4.043-4.043 1.52-1.521z"></path>
                      <path d="m5.994 7.5 1.502 1.503L8.998 7.5 7.496 5.999z"></path>
                    </g>
                    <defs>
                      <clipPath id="wbnb_svg__a">
                        <path fill="#fff" d="M0 15h15V0H0z"></path>
                      </clipPath>
                    </defs>
                  </svg>
                  <p>WBNB</p>
                </button>

                <button
                  onClick={() => setSelectedCurrency('USDT')}
                  className={`rounded-[9px] cursor-pointer text-sm gap-[5px] justify-center transition duration-300 ease-in-out h-10 backdrop-blur-[60px] flex items-center px-[34px] max-md:px-3 flex-1 w-full hover-scale ${
                    selectedCurrency === 'USDT'
                      ? 'bg-[#0FEDBE] text-black border animate-glow'
                      : 'border-0 bg-[#394B5D] text-white hover:bg-[#0FEDBE] hover:text-black'
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="none"
                  >
                    <path
                      fill="url(#usdt_svg__a)"
                      fillRule="evenodd"
                      d="m8.395 15.505-.007.002-.047.023-.014.003-.009-.003-.047-.023q-.011-.004-.016.003l-.003.007-.011.285.003.013.007.009.07.05.01.002.007-.003.07-.049.007-.01.003-.012-.011-.285q-.003-.01-.012-.012m.177-.075-.009.001-.123.062-.007.007-.002.007.012.287.004.008.005.005.134.062q.013.003.02-.006l.002-.009-.023-.41q-.003-.01-.013-.014m-.477.001a.013.013 0 0 0-.018.004l-.004.01-.022.409q0 .012.011.016l.01-.001.134-.062.007-.006.002-.007.012-.287-.002-.008-.007-.006z"
                      clipRule="evenodd"
                    ></path>
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M11.613 2a1.33 1.33 0 0 1 1.1.579l.058.093 2.222 3.888a1.33 1.33 0 0 1-.138 1.522l-.076.082-6.189 6.189a.833.833 0 0 1-1.11.06l-.069-.06-6.188-6.189a1.33 1.33 0 0 1-.267-1.505l.052-.1L3.23 2.671a1.33 1.33 0 0 1 1.048-.667L4.387 2zm0 1.333H4.387L2.165 7.222 8 13.057l5.835-5.835zM10 4a.667.667 0 1 1 0 1.333H8.667v1.03a5.3 5.3 0 0 1 1.336.284c.263.099.499.224.675.381s.322.371.322.639c0 .267-.146.482-.322.638a2.1 2.1 0 0 1-.675.38 5.3 5.3 0 0 1-1.438.294c.066.106.102.229.102.354v1.334a.667.667 0 0 1-1.334 0V9.333c0-.13.038-.252.102-.354a5.3 5.3 0 0 1-1.438-.294 2.1 2.1 0 0 1-.675-.38C5.146 8.15 5 7.934 5 7.667c0-.268.146-.483.322-.639s.412-.282.675-.38c.371-.14.83-.238 1.336-.285v-1.03H6A.667.667 0 1 1 6 4zM8.666 7.033a.667.667 0 0 1-1.332 0 4.5 4.5 0 0 0-1.103.238c-.22.083-.373.173-.467.256-.078.069-.093.114-.097.132v.008c0 .008.003.056.097.14.094.083.248.173.467.254.437.164 1.062.272 1.769.272s1.332-.108 1.769-.272a1.5 1.5 0 0 0 .466-.254.3.3 0 0 0 .094-.119l.004-.021-.004-.022a.3.3 0 0 0-.094-.118 1.5 1.5 0 0 0-.466-.255 4.5 4.5 0 0 0-1.103-.239"
                      clipRule="evenodd"
                    ></path>
                    <defs>
                      <linearGradient
                        id="usdt_svg__a"
                        x1="8.275"
                        x2="8.699"
                        y1="15.539"
                        y2="15.723"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0.12" stopColor="#42BDDD"></stop>
                        <stop offset="1" stopColor="#0FEDBE"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                  <p>USDT</p>
                </button>
              </div>

              {/* Error Display */}
              {(swapError || hookError) && (
                <div className="mt-4">
                  <ErrorMessage
                    message={swapError || hookError || ''}
                    onDismiss={() => {
                      setSwapError(null);
                      clearError();
                    }}
                  />
                </div>
              )}

              {/* Input Fields */}
              <div className="flex items-center w-full gap-6 my-6 max-md:flex-col">
                <div className="w-1/2 max-md:w-full">
                  <p className="text-white mb-2">{selectedCurrency} You Pay:</p>
                  <div className="w-full flex items-center px-3 rounded-lg backdrop-blur-[60px] bg-[#1C6360] h-10">
                    <input
                      type="number"
                      placeholder="Enter Amount"
                      value={amountIn}
                      onChange={(e) => handleAmountInChange(e.target.value)}
                      disabled={isLoading}
                      className="appearance-none h-full outline-none p-2 w-[85%] bg-transparent text-white placeholder-gray-400 disabled:opacity-50"
                    />
                    <span className="flex items-center gap-2 text-white">
                      <div className="w-4 h-4 bg-gradient-to-br from-[#0FEDBE] to-[#42BDDD] rounded-full flex items-center justify-center">
                        <span className="text-[#00070F] font-bold text-[10px]">
                          {selectedCurrency.charAt(0)}
                        </span>
                      </div>
                      <p>{selectedCurrency}</p>
                    </span>
                  </div>
                </div>

                {/* Swap Arrow */}
                <div className="flex justify-center max-md:my-2">
                  <div className="p-2 bg-[linear-gradient(174.51deg,rgba(36,45,58,0.3)_9.58%,rgba(15,237,190,0.1)_101.94%)] border border-[#283442] rounded-lg">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M12 6L8 2L4 6" stroke="#0FEDBE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M4 10L8 14L12 10" stroke="#0FEDBE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>

                <div className="w-1/2 max-md:w-full">
                  <p className="text-white mb-2">{tokenOut?.symbol || 'USDT'} You Will Receive:</p>
                  <div className="w-full flex items-center px-3 rounded-lg backdrop-blur-[60px] bg-[#1C6360] h-10">
                    <input
                      type="number"
                      readOnly
                      placeholder="0.0"
                      value={amountOut}
                      className="appearance-none h-full outline-none p-2 w-[85%] bg-transparent text-white placeholder-gray-400"
                    />
                    <span className="flex items-center gap-2 text-white">
                      <div className="w-4 h-4 bg-gradient-to-br from-[#0FEDBE] to-[#42BDDD] rounded-full flex items-center justify-center">
                        <span className="text-[#00070F] font-bold text-[10px]">
                          {tokenOut?.symbol.charAt(0) || 'U'}
                        </span>
                      </div>
                      <p>{tokenOut?.symbol || 'USDT'}</p>
                    </span>
                  </div>
                </div>
              </div>

              {/* Swap Details */}
              {canSwap && (
                <div className="mb-4 p-3 bg-[linear-gradient(174.51deg,rgba(15,237,190,0.05)_9.58%,rgba(66,189,221,0.05)_101.94%)] rounded-lg border border-[rgba(15,237,190,0.2)]">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-white/70">Exchange Rate</span>
                    <span className="text-white font-medium">
                      1 {tokenIn?.symbol} ≈ {amountOut && amountIn ? (parseFloat(amountOut) / parseFloat(amountIn)).toFixed(4) : '0.00'} {tokenOut?.symbol}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/70">Est. Gas Fee</span>
                    <span className="text-[#FFFF00] font-medium">~$2-5</span>
                  </div>
                </div>
              )}

              {/* Buy/Swap Buttons */}
              <div className="space-y-3 animate-fade-in-up animate-delay-500">
                {/* Presale Buy Button */}
                <button
                  className="w-full min-w-[166px] flex items-center cursor-pointer transition duration-300 ease-in-out justify-center gap-2.5 font-semibold max-sm:text-sm max-sm:h-10 bg-gradient-to-r from-yellow-300 to-orange-400 rounded-[60px] text-[#00070F] hover:from-yellow-400 hover:to-orange-500 h-12 font-bold hover-lift animate-pulse-soft"
                  aria-label="Buy Presale"
                >
                  Buy $CAT Presale
                </button>

                {/* Swap Button */}
                {canSwap && (
                  <button
                    onClick={handleSwap}
                    disabled={isLoading}
                    className={`w-full min-w-[166px] flex items-center cursor-pointer transition duration-300 ease-in-out justify-center gap-2.5 font-semibold max-sm:text-sm max-sm:h-10 rounded-[60px] h-12 font-bold hover-lift ${
                      isLoading
                        ? 'bg-gray-600 text-gray-300 cursor-not-allowed'
                        : 'bg-gradient-to-r from-cyan-400 to-emerald-400 text-[#00070F] hover:from-cyan-500 hover:to-emerald-500 animate-glow'
                    }`}
                    aria-label="Swap Tokens"
                  >
                    {isLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-gray-300 border-t-gray-600"></div>
                        Swapping...
                      </>
                    ) : (
                      <>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M12 6L8 2L4 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M4 10L8 14L12 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Swap {tokenIn?.symbol} for {tokenOut?.symbol}
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>

            {/* Other Payment Methods */}
            <div className="mt-auto flex cursor-pointer items-center justify-center pt-6 max-sm:flex-col max-sm:gap-2 max-sm:pt-2 group">
              <p className="text-sm text-white mr-3 transition-all group-hover:text-[#04EEE2]">
                Pay With Other Cryptos
              </p>
              <img
                alt="coins img"
                loading="lazy"
                width="161"
                height="34"
                className="object-contain"
                src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FpresaleCoinsImg.1ba26a75.png&w=384&q=75&dpl=dpl_EWAS8ZF1SPz1gvd3Hgrceu9TqG7t"
              />
            </div>
          </div>

          {/* How To Buy Section */}
          <div className="animate-slide-in-right animate-delay-200">
            <h2 className="mb-3 text-3xl font-bold text-white max-lg:text-2xl max-md:text-xl animate-fade-in">
              How To Buy
            </h2>
            <p className="mb-2 text-base font-inter font-normal text-white">
              Join the Cat Presale to get exclusive benefits. Holders
              receive USDT yields, staking rewards, and early access to trading
              tools.
            </p>

            <div>
              <div className="mb-[30px] max-md:mb-5">
                {/* Accordion Items */}
                <div className="border-b border-b-white/15">
                  <button className="flex cursor-pointer text-left w-full justify-between py-[18px] px-0 font-inter font-bold text-xl max-md:text-base max-sm:text-sm text-white hover:opacity-70 transition-opacity">
                    1. Connect Wallet
                  </button>
                </div>

                <div className="border-b border-b-white/15">
                  <button className="flex cursor-pointer text-left w-full justify-between py-[18px] px-0 font-inter font-bold text-xl max-md:text-base max-sm:text-sm text-white hover:opacity-70 transition-opacity">
                    2. Choose Payment Methods
                  </button>
                </div>

                <div className="border-b border-b-white/15">
                  <button className="flex cursor-pointer text-left w-full justify-between py-[18px] px-0 font-inter font-bold text-xl max-md:text-base max-sm:text-sm text-white hover:opacity-70 transition-opacity">
                    3. Enter Amount and Confirm
                  </button>
                </div>

                <div className="border-b border-b-white/15">
                  <button className="flex cursor-pointer text-left w-full justify-between py-[18px] px-0 font-inter font-bold text-xl max-md:text-base max-sm:text-sm text-white hover:opacity-70 transition-opacity">
                    4. Earn Rewards Instantly
                  </button>
                </div>
              </div>
            </div>

            <div className="mb-5">
              <p className="font-bold text-[#0FEDBE] text-xl">
                Earn up to 440% APY
              </p>
              <p className="text-white">by staking $CAT during presale</p>
            </div>

            <button
              className="min-w-[166px] flex items-center cursor-pointer transition duration-300 ease-in-out justify-center gap-2.5 font-semibold max-sm:h-10 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-lg text-[#00070F] hover:from-emerald-500 hover:to-teal-500 h-[50px] px-5 text-xl font-bold max-[1600px]:text-sm max-sm:text-xs max-sm:w-full"
              aria-label="button"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.59 13.51L15.42 17.49M15.41 6.51L8.59 10.49M21 5C21 6.65685 19.6569 8 18 8C16.3431 8 15 6.65685 15 5C15 3.34315 16.3431 2 18 2C19.6569 2 21 3.34315 21 5ZM9 12C9 13.6569 7.65685 15 6 15C4.34315 15 3 13.6569 3 12C3 10.3431 4.34315 9 6 9C7.65685 9 9 10.3431 9 12ZM21 19C21 20.6569 19.6569 22 18 22C16.3431 22 15 20.6569 15 19C15 17.3431 16.3431 16 18 16C19.6569 16 21 17.3431 21 19Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              Invite & Earn 10% USDT + Bonus Tokens
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
