import React, { useState } from "react";
import { ConnectKitButton } from "connectkit";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../common/LanguageSwitcher";

const Header: React.FC = () => {
  const { t } = useTranslation("common");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex items-center flex-col justify-between border-b transition-all duration-400 ease-in-out w-full fixed top-0 z-[1000] max-sm:h-auto bg-[rgba(2,9,37,0.2)] border-b-[#b3ecfa9d]">
      <div className="py-1 w-full bg-gradient-to-r from-[var(--primary-amber)] to-[var(--secondary-amber)] transition-transform duration-300 translate-y-0">
        <div className="overflow-hidden whitespace-nowrap">
          <span className="inline-block animate-marquee">
            <p className="text-center text-[13px] max-[380px]:text-[12px] text-black font-medium capitalize">
              {t("header.banner")}
            </p>
          </span>
        </div>
      </div>

      <div className="py-1 w-full transition-all duration-500">
        <div className="flex items-center w-full px-5 container mx-auto relative">
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
                    src="/logoSuncat.png"
                  />
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
                    className="text-white font-medium hover:text-amber-400 transition-colors duration-200"
                    href="/#swap-interface"
                  >
                    {t("header.nav.trade")}
                  </a>
                </div>
              </li>
              <li className="flex items-center justify-center">
                <div className="opacity-100">
                  <a
                    rel="noreferrer"
                    aria-label="link"
                    className="text-white font-medium hover:text-amber-400 transition-colors duration-200"
                    href="/#corefeatures"
                  >
                    {t("header.nav.features")}
                  </a>
                </div>
              </li>
              <li className="flex items-center justify-center">
                <div className="opacity-100">
                  <a
                    rel="noreferrer"
                    aria-label="link"
                    className="text-white font-medium hover:text-amber-400 transition-colors duration-200"
                    href="/#roadmap"
                  >
                    {t("header.nav.roadmap")}
                  </a>
                </div>
              </li>
              <li className="flex items-center justify-center">
                <div className="opacity-100">
                  <a
                    rel="noreferrer"
                    aria-label="link"
                    target="_blank"
                    className="text-white font-medium hover:text-amber-400 transition-colors duration-200"
                    href="https://codeum.org/kyc/uni-labs"
                  >
                    {t("header.nav.audit")}
                  </a>
                </div>
              </li>
              <li>
                <div className="opacity-100">
                  <button
                    type="button"
                    className="outline-none text-white font-medium text-base cursor-pointer hover:text-amber-400 transition-colors duration-200"
                  >
                    {t("header.nav.whitepaper")}
                  </button>
                </div>
              </li>
            </ul>
          </div>

          <div className="flex justify-end ml-5 max-xl:ml-2">
            <div className="opacity-100">
              <div className="flex items-center justify-between gap-5 max-xl:gap-2">
                <LanguageSwitcher />
                <ConnectKitButton.Custom>
                  {({ isConnected, show, truncatedAddress, ensName }) => {
                    return (
                      <button
                        onClick={show}
                        className="font-medium flex items-center transition duration-300 ease-in-out justify-center gap-2.5 font-semibold max-sm:text-sm max-sm:h-10 max-sm:w-full bg-gradient-to-r from-[var(--primary-amber)] to-[var(--accent-golden)] rounded-[60px] text-[#00070F] hover:from-yellow-400 hover:to-yellow-400 cursor-pointer max-lg:h-10 max-xl:gap-1 w-fit text-sm min-w-[132px] max-xl:min-w-auto px-3 h-[39px] max-[389px]:gap-0 max-[389px]:justify-center z-40"
                        aria-label="button"
                      >
                        {isConnected
                          ? ensName ?? truncatedAddress
                          : t("header.connectWallet")}
                      </button>
                    );
                  }}
                </ConnectKitButton.Custom>

                <div className="lg:hidden flex items-center gap-8">
                  <button
                    onClick={toggleMobileMenu}
                    aria-label="Toggle mobile menu"
                  >
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
      <div
        className={`fixed inset-0 z-[1001] lg:hidden transition-all duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>

        {/* Sidebar */}
        <div
          className={`absolute right-0 top-0 h-full w-80 max-w-[90vw] bg-[rgba(2,9,37,0.95)] border-l border-[#b3ecfa9d] transform transition-transform duration-300 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-[#b3ecfa9d]">
            <h2 className="text-white font-bold text-lg">{t("header.menu")}</h2>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white hover:text-amber-400 transition-colors"
              aria-label="Close menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M6 6l12 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col p-6 space-y-4">
            <a
              href="/#swap-interface"
              className="text-white font-medium hover:text-amber-400 transition-colors duration-200 py-3 border-b border-white/10"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t("header.nav.trade")}
            </a>
            <a
              href="/#corefeatures"
              className="text-white font-medium hover:text-amber-400 transition-colors duration-200 py-3 border-b border-white/10"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t("header.nav.features")}
            </a>
            <a
              href="/#roadmap"
              className="text-white font-medium hover:text-amber-400 transition-colors duration-200 py-3 border-b border-white/10"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t("header.nav.roadmap")}
            </a>
            <a
              href="https://codeum.org/kyc/uni-labs"
              target="_blank"
              rel="noreferrer"
              className="text-white font-medium hover:text-amber-400 transition-colors duration-200 py-3 border-b border-white/10"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t("header.nav.audit")}
            </a>
            <button
              type="button"
              className="text-left text-white font-medium hover:text-amber-400 transition-colors duration-200 py-3"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t("header.nav.whitepaper")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
