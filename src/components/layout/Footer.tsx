import React from "react";

const Footer: React.FC = () => {
  return (
    <section className="flex w-full relative pb-[40px] max-md:pb-[60px] pt-[80px] max-lg:pt-[40px] max-md:pt-[30px] overflow-hidden footerBG">
      <div className="container mx-auto flex-col flex w-full px-14 max-md:px-5">
        <div className="relative z-10 flex items-center justify-between w-full flex-col">
          <div className="flex w-full justify-between items-start pb-[60px] max-md:pb-[40px] max-sm:pb-[20px] mb-[25px] max-md:mb-[15px] flex-wrap  gap-4 max-sm:justify-center ftrTopWrap">
            <div className="max-sm:w-full flex items-center justify-center">
              <div className="relative flex items-center  ">
                <div style={{ transform: "rotate(3.096deg)" }}>
                  <img
                    alt="globe"
                    loading="lazy"
                    width={97}
                    height={100}
                    decoding="async"
                    data-nimg={1}
                    className="max-sm:w-[80px]"
                    style={{ color: "transparent" }}
                    srcSet="/_next/image?url=%2Fwebp%2Fearth.webp&w=128&q=75 1x, /_next/image?url=%2Fwebp%2Fearth.webp&w=256&q=75 2x"
                    src="/_next/image?url=%2Fwebp%2Fearth.webp&w=256&q=75"
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 59 40"
                    className="w-[76px] max-sm:w-[50px]"
                  >
                    <g filter="url(#logo_svg__a)">
                      <path
                        fill="#42BDDD"
                        d="M6.795 1.773H1v30.909h23.955v-6.568H6.794z"
                      />
                    </g>
                    <g filter="url(#logo_svg__b)">
                      <path
                        fill="#0FEDBE"
                        d="M21.863 1v30.91h5.796V7.181h18.159v24.727H52V1z"
                      />
                    </g>
                    <defs>
                      <filter
                        id="logo_svg__a"
                        width="31.955"
                        height="38.909"
                        x={0}
                        y="0.773"
                        colorInterpolationFilters="sRGB"
                        filterUnits="userSpaceOnUse"
                      >
                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                        <feColorMatrix
                          in="SourceAlpha"
                          result="hardAlpha"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        />
                        <feOffset dx={3} dy={3} />
                        <feGaussianBlur stdDeviation={2} />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix values="0 0 0 0 0.290196 0 0 0 0 0.227451 0 0 0 0 1 0 0 0 1 0" />
                        <feBlend
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_17_17372"
                        />
                        <feBlend
                          in="SourceGraphic"
                          in2="effect1_dropShadow_17_17372"
                          result="shape"
                        />
                      </filter>
                      <filter
                        id="logo_svg__b"
                        width="38.136"
                        height="38.909"
                        x="20.863"
                        y={0}
                        colorInterpolationFilters="sRGB"
                        filterUnits="userSpaceOnUse"
                      >
                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                        <feColorMatrix
                          in="SourceAlpha"
                          result="hardAlpha"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        />
                        <feOffset dx={3} dy={3} />
                        <feGaussianBlur stdDeviation={2} />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix values="0 0 0 0 0.290196 0 0 0 0 0.227451 0 0 0 0 1 0 0 0 1 0" />
                        <feBlend
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_17_17372"
                        />
                        <feBlend
                          in="SourceGraphic"
                          in2="effect1_dropShadow_17_17372"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex flex-col max-md:w-[40%] max-sm:w-[47%] max-sm:text-center">
              <p className="text-white text-[20px] max-md:text-[18px] max-sm:text-[16px] font-[700] mb-[32px] max-md:mb-[20px] max-sm:mb-[10px] capitalize">
                Quick Links
              </p>
              <ul className="flex flex-col gap-[17px] items-start max-sm:items-center flex-wrap max-md:gap-y-2">
                <li className="flex items-center justify-center ">
                  <a
                    rel="noreferrer"
                    aria-label="link"
                    className="hover:text-[#0FEDBE] text-[16px] max-md:text-[14px] max-sm:text-[12px] font-normal font-inter"
                    href="/how-to-buy"
                  >
                    How to Buy
                  </a>
                </li>
                <li className="flex items-center justify-center ">
                  <a
                    rel="noreferrer"
                    aria-label="link"
                    className="hover:text-[#0FEDBE] text-[16px] max-md:text-[14px] max-sm:text-[12px] font-normal font-inter"
                    href="/core-features"
                  >
                    Core Features
                  </a>
                </li>
                <li className="flex items-center justify-center ">
                  <a
                    rel="noreferrer"
                    aria-label="link"
                    className="hover:text-[#0FEDBE] text-[16px] max-md:text-[14px] max-sm:text-[12px] font-normal font-inter"
                    href="/roadmap"
                  >
                    Cat Roadmap
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col max-md:w-[40%] max-sm:w-[45%] max-sm:items-center">
              <p className="text-white text-[20px] max-md:text-[18px] max-sm:text-[16px] font-[700] mb-[32px] max-md:mb-[20px] max-sm:mb-[10px] capitalize">
                Privacy
              </p>
              <ul className="flex flex-col  gap-[17px] items-start flex-wrap max-md:gap-y-2 max-sm:items-center">
                <li className="flex items-center justify-center  max-md:justify-start max-sm:items-center">
                  <a
                    rel="noreferrer"
                    aria-label="link"
                    className="hover:text-[#0FEDBE] text-[16px] max-md:text-[14px] max-sm:text-[12px] font-normal font-inter"
                    href="/terms-and-conditions"
                  >
                    Terms and Conditions
                  </a>
                </li>
                <li className="flex items-center justify-center  max-md:justify-start max-sm:items-center">
                  <a
                    rel="noreferrer"
                    aria-label="link"
                    className="hover:text-[#0FEDBE] text-[16px] max-md:text-[14px] max-sm:text-[12px] font-normal font-inter"
                    href="/privacy-policy"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col max-md:w-[40%] max-sm:w-full max-sm:items-center">
              <p className="text-white text-[20px] max-md:text-[18px] max-sm:text-[16px] font-[700] mb-[32px] max-md:mb-[20px] max-sm:mb-[10px] capitalize">
                Follow us on
              </p>
              <ul className="flex flex-col max-sm:flex-row  gap-[17px] items-start flex-wrap max-md:gap-y-2 max-sm:items-center">
                <li className="flex items-center justify-center  max-md:justify-start">
                  <a
                    rel="noreferrer"
                    aria-label="link"
                    className="hover:text-[#0FEDBE] inline-flex items-center gap-[7px] text-[18px] max-md:text-[16px] max-sm:text-[14px] font-normal font-inter"
                    href="https://x.com/unilabsofficial?t=2PTvQ5XFm-PeT209o7om7A&s=09"
                  >
                    <i className="size-[25px] max-md:size-[20px] max-sm:size-[16px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 23 23"
                      >
                        <path
                          fill="currentColor"
                          d="m2.269 2.875 6.8 9.718-6.443 7.532h2.53l5.045-5.913 4.137 5.913h6.622L13.847 9.943l6.03-7.068h-2.492l-4.667 5.45-3.807-5.45zm3.68 1.917h1.963l9.37 13.416h-1.947z"
                        />
                      </svg>
                    </i>
                    Twitter
                  </a>
                </li>
                <li className="flex items-center justify-center  max-md:justify-start">
                  <a
                    rel="noreferrer"
                    aria-label="link"
                    className="hover:text-[#0FEDBE] inline-flex items-center gap-[7px] text-[18px] max-md:text-[16px] max-sm:text-[14px] font-normal font-inter"
                    href="https://t.me/unilabsofficial"
                  >
                    <i className="size-[25px] max-md:size-[20px] max-sm:size-[16px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M17.75 4.26 3.55 9.94c-.71.355-.71.71-.71 1.065s.355.71.71 1.065l3.195 1.065 8.52-7.1-7.1 7.81-.355 3.195c0 .71.355 1.065 1.065.71l2.485-2.13 3.905 1.775c.71.355 1.065 0 1.065-.71l1.775-11.36c0-.71-.355-1.065-.355-1.065"
                        />
                      </svg>
                    </i>
                    Telegram
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="flex items-center max-xl:flex-col justify-between w-full pb-[15px] max-md:pb-[5px]"
            style={{ opacity: 0 }}
          >
            <div className="flex gap-[32px] items-center">
              <div className="flex flex-col gap-4 max-md:gap-3 max-sm:gap-2 ">
                <p className="text-[16px] font-inter font-bold text-white text-center">
                  Disclaimer:
                </p>
                <p className="text-[16px] max-md:text-[14px] font-normal font-inter text-white text-center">
                  Digital currencies may be unregulated in your jurisdiction.
                  The value of digital currencies may go down as well as up.
                  Profits may be subject to capital gains or other taxes
                  applicable in your jurisdiction.
                </p>
              </div>
            </div>
          </div>
          <p className=" text-[16px] max-md:text-[14px] text-white text-center ">
            CATABS © 2025, All rights reserved
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
