import React, { useState } from "react";
import { ConnectKitButton } from "connectkit";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex items-center flex-col justify-between border-b transition-all duration-400 ease-in-out w-full fixed top-0 z-[1000] max-sm:h-auto bg-[rgba(2,9,37,0.2)] border-b-[#b3ecfa9d]">
      <div className="py-1 w-full bg-gradient-to-r from-cyan-400 to-emerald-400 transition-transform duration-300 translate-y-0">
        <div className="overflow-hidden whitespace-nowrap">
          <span className="inline-block animate-marquee">
            <p className="text-center text-[13px] max-[380px]:text-[12px] text-black font-medium capitalize">
              CELEBRATING 10,000 PRESALE INVESTORS: WE ARE OFFERING A 100% BONUS
              ON ANY DEPOSIT! USE CODE{" "}
              <span className="text-white bg-black rounded-[5px] px-1">
                'BUY10K'
              </span>{" "}
              FOR ADDITIONAL TOKENS. OFFER IS FOR A LIMITED TIME ONLY
            </p>
          </span>
        </div>
      </div>

      <div className="py-2 w-full transition-all duration-500">
        <div className="flex items-center w-full p-5 container mx-auto relative">
          <div className="w-[150px] max-md:w-[50px] flex items-center max-xl:w-[80px]">
            <div className="opacity-100">
              <a
                className="relative w-[58px] h-[58px] block max-sm:w-[50px] max-sm:h-[50px]"
                rel="noreferrer"
                aria-label="link"
                href="/"
              >
                <div className="absolute inset-0 animate-spin-slow">
                  <img
                    alt="globe"
                    loading="lazy"
                    width="58"
                    height="58"
                    decoding="async"
                    className="w-full h-full object-cover"
                    src="/_next/image?url=%2Fwebp%2Fearth.webp&w=128&q=75"
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 59 40"
                    className="w-[44px]"
                  >
                    <g filter="url(#logo_svg__a)">
                      <path
                        fill="#42BDDD"
                        d="M6.795 1.773H1v30.909h23.955v-6.568H6.794z"
                      ></path>
                    </g>
                    <g filter="url(#logo_svg__b)">
                      <path
                        fill="#0FEDBE"
                        d="M21.863 1v30.91h5.796V7.181h18.159v24.727H52V1z"
                      ></path>
                    </g>
                    <defs>
                      <filter
                        id="logo_svg__a"
                        width="31.955"
                        height="38.909"
                        x="0"
                        y="0.773"
                        colorInterpolationFilters="sRGB"
                        filterUnits="userSpaceOnUse"
                      >
                        <feFlood
                          floodOpacity="0"
                          result="BackgroundImageFix"
                        ></feFlood>
                        <feColorMatrix
                          in="SourceAlpha"
                          result="hardAlpha"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        ></feColorMatrix>
                        <feOffset dx="3" dy="3"></feOffset>
                        <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                        <feComposite
                          in2="hardAlpha"
                          operator="out"
                        ></feComposite>
                        <feColorMatrix values="0 0 0 0 0.290196 0 0 0 0 0.227451 0 0 0 0 1 0 0 0 1 0"></feColorMatrix>
                        <feBlend
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_17_17372"
                        ></feBlend>
                        <feBlend
                          in="SourceGraphic"
                          in2="effect1_dropShadow_17_17372"
                          result="shape"
                        ></feBlend>
                      </filter>
                      <filter
                        id="logo_svg__b"
                        width="38.136"
                        height="38.909"
                        x="20.863"
                        y="0"
                        colorInterpolationFilters="sRGB"
                        filterUnits="userSpaceOnUse"
                      >
                        <feFlood
                          floodOpacity="0"
                          result="BackgroundImageFix"
                        ></feFlood>
                        <feColorMatrix
                          in="SourceAlpha"
                          result="hardAlpha"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        ></feColorMatrix>
                        <feOffset dx="3" dy="3"></feOffset>
                        <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                        <feComposite
                          in2="hardAlpha"
                          operator="out"
                        ></feComposite>
                        <feColorMatrix values="0 0 0 0 0.290196 0 0 0 0 0.227451 0 0 0 0 1 0 0 0 1 0"></feColorMatrix>
                        <feBlend
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_17_17372"
                        ></feBlend>
                        <feBlend
                          in="SourceGraphic"
                          in2="effect1_dropShadow_17_17372"
                          result="shape"
                        ></feBlend>
                      </filter>
                    </defs>
                  </svg>
                </div>
              </a>
            </div>
          </div>

          <div className="flex-1 flex justify-center">
            <ul className="flex items-center justify-center gap-5 max-xl:gap-3 max-lg:hidden">
              <li className="flex items-center justify-center">
                <div className="opacity-100">
                  <a
                    rel="noreferrer"
                    aria-label="link"
                    className="text-white font-medium hover:text-[#0FEDBE] transition-colors duration-200"
                    href="/#how-to-buy"
                  >
                    How to Buy
                  </a>
                </div>
              </li>
              <li className="flex items-center justify-center">
                <div className="opacity-100">
                  <a
                    rel="noreferrer"
                    aria-label="link"
                    className="text-white font-medium hover:text-[#0FEDBE] transition-colors duration-200"
                    href="/#corefeatures"
                  >
                    Core Features
                  </a>
                </div>
              </li>
              <li className="flex items-center justify-center">
                <div className="opacity-100">
                  <a
                    rel="noreferrer"
                    aria-label="link"
                    className="text-white font-medium hover:text-[#0FEDBE] transition-colors duration-200"
                    href="/#roadmap"
                  >
                    Roadmap
                  </a>
                </div>
              </li>
              <li className="flex items-center justify-center">
                <div className="opacity-100">
                  <a
                    rel="noreferrer"
                    aria-label="link"
                    target="_blank"
                    className="text-white font-medium hover:text-[#0FEDBE] transition-colors duration-200"
                    href="https://codeum.org/kyc/uni-labs"
                  >
                    Audit
                  </a>
                </div>
              </li>
              <li>
                <div className="opacity-100">
                  <button
                    type="button"
                    className="outline-none text-white font-medium text-base cursor-pointer hover:text-[#0FEDBE] transition-colors duration-200"
                  >
                    White Paper
                  </button>
                </div>
              </li>
            </ul>
          </div>

          <div className="flex justify-end ml-5 max-xl:ml-2">
            <div className="opacity-100">
              <div className="flex items-center justify-between gap-5 max-xl:gap-2">
                <ConnectKitButton.Custom>
                  {({ isConnected, show, truncatedAddress, ensName }) => {
                    return (
                      <button
                        onClick={show}
                        className="font-medium flex items-center transition duration-300 ease-in-out justify-center gap-2.5 font-semibold max-sm:text-sm max-sm:h-10 max-sm:w-full bg-gradient-to-r from-cyan-300 to-emerald-300 rounded-[60px] text-[#00070F] hover:from-yellow-400 hover:to-yellow-400 cursor-pointer max-lg:h-10 max-xl:gap-1 w-fit text-sm min-w-[132px] max-xl:min-w-auto px-3 h-[39px] max-[389px]:gap-0 max-[389px]:justify-center z-40"
                        aria-label="button"
                      >
                        {isConnected
                          ? ensName ?? truncatedAddress
                          : "Connect Wallet"}
                      </button>
                    );
                  }}
                </ConnectKitButton.Custom>

                <div className="lg:hidden flex items-center gap-8">
                  <button onClick={toggleMobileMenu} aria-label="Toggle mobile menu">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      className="fill-white"
                    >
                      <path d="M1 5a2 2 0 0 1 2-2h18a2 2 0 1 1 0 4H3a2 2 0 0 1-2-2zM1 12a2 2 0 0 1 2-2h18a2 2 0 1 1 0 4H3a2 2 0 0 1-2-2zM3 17a2 2 0 1 0 0 4h18a2 2 0 1 0 0-4z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Slide Sidebar */}
      <div className={`fixed inset-0 z-[1001] lg:hidden transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>

        {/* Sidebar */}
        <div className={`absolute right-0 top-0 h-full w-80 max-w-[90vw] bg-[rgba(2,9,37,0.95)] border-l border-[#b3ecfa9d] transform transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-[#b3ecfa9d]">
            <h2 className="text-white font-bold text-lg">Menu</h2>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white hover:text-[#0FEDBE] transition-colors"
              aria-label="Close menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col p-6 space-y-4">
            <a
              href="/#how-to-buy"
              className="text-white font-medium hover:text-[#0FEDBE] transition-colors duration-200 py-3 border-b border-white/10"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              How to Buy
            </a>
            <a
              href="/#corefeatures"
              className="text-white font-medium hover:text-[#0FEDBE] transition-colors duration-200 py-3 border-b border-white/10"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Core Features
            </a>
            <a
              href="/#roadmap"
              className="text-white font-medium hover:text-[#0FEDBE] transition-colors duration-200 py-3 border-b border-white/10"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Roadmap
            </a>
            <a
              href="https://codeum.org/kyc/uni-labs"
              target="_blank"
              rel="noreferrer"
              className="text-white font-medium hover:text-[#0FEDBE] transition-colors duration-200 py-3 border-b border-white/10"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Audit
            </a>
            <button
              type="button"
              className="text-left text-white font-medium hover:text-[#0FEDBE] transition-colors duration-200 py-3"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              White Paper
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
