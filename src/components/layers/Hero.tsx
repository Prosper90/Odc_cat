export default function Hero() {
  return (
    <div className="relative pt-[120px] max-md:pt-[110px] max-sm:pt-[120px] pb-10 bg-[#0a0a0a] before:absolute before:inset-x-0 before:bottom-0 before:w-full before:h-[75px] before:z-[2] before:bg-gradient-to-t before:from-[#0a0a0a] before:via-[rgba(0,7,15,0.33)] before:to-transparent before:content-['']">
      <img
        alt="bannerMain"
        loading="lazy"
        width="1600"
        height="730"
        decoding="async"
        className="absolute top-0 left-0 w-full h-full z-[1] object-cover object-[40%] max-[1600px]:object-[60%] max-[1400px]:object-[70%] max-md:object-[30%]"
        src="/bannerOriginalOverlay.png"
      />

      <div className="container relative z-20">
        <div className="ml-auto max-w-[472px] flex flex-col max-[1200px]:max-w-none">
          <h1 className="leading-[1.1] text-5xl max-lg:text-[40px] max-md:text-[32px] font-inter font-semibold text-white animate-fade-in-up">
            Freedom Through
            <span className="text-amber-400 animate-glow"> Innovation </span>
            Sun God Lab
          </h1>

          <p className="mt-[10px] text-white animate-fade-in-up animate-delay-200">
            Empowering communities through disciplined systems that serve
            everyone fairly. Trade OBE CAT Token ($ODC) and join our mission of
            freedom and community empowerment.
          </p>

          <ul className="mt-4 flex flex-col gap-4 bg-gradient-to-r from-amber-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent">
            <li className="flex items-start gap-3">
              <i className="inline-flex">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_640_721)">
                    <path
                      d="M3.53008 7.90165C3.39628 7.29897 3.41682 6.67226 3.5898 6.07963C3.76278 5.487 4.08259 4.94765 4.51959 4.51157C4.95658 4.07549 5.49661 3.7568 6.0896 3.58507C6.68259 3.41333 7.30934 3.3941 7.91174 3.52915C8.24331 3.0106 8.70008 2.58385 9.23995 2.28825C9.77982 1.99265 10.3854 1.83771 11.0009 1.83771C11.6164 1.83771 12.222 1.99265 12.7619 2.28825C13.3017 2.58385 13.7585 3.0106 14.0901 3.52915C14.6934 3.39351 15.3212 3.41265 15.9152 3.58481C16.5091 3.75696 17.0498 4.07653 17.4871 4.5138C17.9244 4.95106 18.2439 5.4918 18.4161 6.08574C18.5882 6.67967 18.6074 7.3075 18.4717 7.91082C18.9903 8.24239 19.417 8.69916 19.7126 9.23903C20.0082 9.77889 20.1632 10.3845 20.1632 11C20.1632 11.6155 20.0082 12.2211 19.7126 12.761C19.417 13.3008 18.9903 13.7576 18.4717 14.0892C18.6068 14.6916 18.5876 15.3183 18.4158 15.9113C18.2441 16.5043 17.9254 17.0443 17.4893 17.4813C17.0533 17.9183 16.5139 18.2381 15.9213 18.4111C15.3286 18.5841 14.7019 18.6046 14.0992 18.4708C13.7681 18.9914 13.311 19.4199 12.7702 19.7169C12.2294 20.0138 11.6224 20.1695 11.0055 20.1695C10.3886 20.1695 9.78158 20.0138 9.24079 19.7169C8.7 19.4199 8.24288 18.9914 7.91174 18.4708C7.30934 18.6059 6.68259 18.5866 6.0896 18.4149C5.49661 18.2432 4.95658 17.9245 4.51959 17.4884C4.08259 17.0523 3.76278 16.513 3.5898 15.9203C3.41682 15.3277 3.39628 14.701 3.53008 14.0983C3.00754 13.7676 2.57712 13.3101 2.27887 12.7684C1.98062 12.2267 1.82422 11.6184 1.82422 11C1.82422 10.3816 1.98062 9.77325 2.27887 9.23154C2.57712 8.68983 3.00754 8.23235 3.53008 7.90165Z"
                      fill="url(#paint0_linear_640_721)"
                      stroke="#FFA500"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.25 11L10.0833 12.8333L13.75 9.16666"
                      stroke="#050E17"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_640_721"
                      x1="10.9937"
                      y1="1.83771"
                      x2="10.9937"
                      y2="20.1695"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FFA500" />
                      <stop offset="1" stopColor="#FFA500" />
                    </linearGradient>
                    <clipPath id="clip0_640_721">
                      <rect width="22" height="22" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </i>
              <p className="text-sm font-inter font-bold leading-[1.5] ">
                The First AI-Managed Platform{" "}
                <br className="max-[1200px]:hidden" /> Offering Passive Income
              </p>
            </li>

            <li className="flex items-start gap-3">
              <i className="inline-flex">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_640_722)">
                    <path
                      d="M3.53008 7.90165C3.39628 7.29897 3.41682 6.67226 3.5898 6.07963C3.76278 5.487 4.08259 4.94765 4.51959 4.51157C4.95658 4.07549 5.49661 3.7568 6.0896 3.58507C6.68259 3.41333 7.30934 3.3941 7.91174 3.52915C8.24331 3.0106 8.70008 2.58385 9.23995 2.28825C9.77982 1.99265 10.3854 1.83771 11.0009 1.83771C11.6164 1.83771 12.222 1.99265 12.7619 2.28825C13.3017 2.58385 13.7585 3.0106 14.0901 3.52915C14.6934 3.39351 15.3212 3.41265 15.9152 3.58481C16.5091 3.75696 17.0498 4.07653 17.4871 4.5138C17.9244 4.95106 18.2439 5.4918 18.4161 6.08574C18.5882 6.67967 18.6074 7.3075 18.4717 7.91082C18.9903 8.24239 19.417 8.69916 19.7126 9.23903C20.0082 9.77889 20.1632 10.3845 20.1632 11C20.1632 11.6155 20.0082 12.2211 19.7126 12.761C19.417 13.3008 18.9903 13.7576 18.4717 14.0892C18.6068 14.6916 18.5876 15.3183 18.4158 15.9113C18.2441 16.5043 17.9254 17.0443 17.4893 17.4813C17.0533 17.9183 16.5139 18.2381 15.9213 18.4111C15.3286 18.5841 14.7019 18.6046 14.0992 18.4708C13.7681 18.9914 13.311 19.4199 12.7702 19.7169C12.2294 20.0138 11.6224 20.1695 11.0055 20.1695C10.3886 20.1695 9.78158 20.0138 9.24079 19.7169C8.7 19.4199 8.24288 18.9914 7.91174 18.4708C7.30934 18.6059 6.68259 18.5866 6.0896 18.4149C5.49661 18.2432 4.95658 17.9245 4.51959 17.4884C4.08259 17.0523 3.76278 16.513 3.5898 15.9203C3.41682 15.3277 3.39628 14.701 3.53008 14.0983C3.00754 13.7676 2.57712 13.3101 2.27887 12.7684C1.98062 12.2267 1.82422 11.6184 1.82422 11C1.82422 10.3816 1.98062 9.77325 2.27887 9.23154C2.57712 8.68983 3.00754 8.23235 3.53008 7.90165Z"
                      fill="url(#paint0_linear_640_722)"
                      stroke="#FFA500"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.25 11L10.0833 12.8333L13.75 9.16666"
                      stroke="#050E17"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_640_722"
                      x1="10.9937"
                      y1="1.83771"
                      x2="10.9937"
                      y2="20.1695"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FFA500" />
                      <stop offset="1" stopColor="#FFA500" />
                    </linearGradient>
                    <clipPath id="clip0_640_722">
                      <rect width="22" height="22" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </i>
              <p className="text-sm font-inter font-bold leading-[1.5]">
                Invest in Bitcoin, Litecoin, Real Estate{" "}
                <br className="max-[1200px]:hidden" /> &amp; AI Assets
              </p>
            </li>

            <li className="flex items-start gap-3">
              <i className="inline-flex">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_640_723)">
                    <path
                      d="M3.53008 7.90165C3.39628 7.29897 3.41682 6.67226 3.5898 6.07963C3.76278 5.487 4.08259 4.94765 4.51959 4.51157C4.95658 4.07549 5.49661 3.7568 6.0896 3.58507C6.68259 3.41333 7.30934 3.3941 7.91174 3.52915C8.24331 3.0106 8.70008 2.58385 9.23995 2.28825C9.77982 1.99265 10.3854 1.83771 11.0009 1.83771C11.6164 1.83771 12.222 1.99265 12.7619 2.28825C13.3017 2.58385 13.7585 3.0106 14.0901 3.52915C14.6934 3.39351 15.3212 3.41265 15.9152 3.58481C16.5091 3.75696 17.0498 4.07653 17.4871 4.5138C17.9244 4.95106 18.2439 5.4918 18.4161 6.08574C18.5882 6.67967 18.6074 7.3075 18.4717 7.91082C18.9903 8.24239 19.417 8.69916 19.7126 9.23903C20.0082 9.77889 20.1632 10.3845 20.1632 11C20.1632 11.6155 20.0082 12.2211 19.7126 12.761C19.417 13.3008 18.9903 13.7576 18.4717 14.0892C18.6068 14.6916 18.5876 15.3183 18.4158 15.9113C18.2441 16.5043 17.9254 17.0443 17.4893 17.4813C17.0533 17.9183 16.5139 18.2381 15.9213 18.4111C15.3286 18.5841 14.7019 18.6046 14.0992 18.4708C13.7681 18.9914 13.311 19.4199 12.7702 19.7169C12.2294 20.0138 11.6224 20.1695 11.0055 20.1695C10.3886 20.1695 9.78158 20.0138 9.24079 19.7169C8.7 19.4199 8.24288 18.9914 7.91174 18.4708C7.30934 18.6059 6.68259 18.5866 6.0896 18.4149C5.49661 18.2432 4.95658 17.9245 4.51959 17.4884C4.08259 17.0523 3.76278 16.513 3.5898 15.9203C3.41682 15.3277 3.39628 14.701 3.53008 14.0983C3.00754 13.7676 2.57712 13.3101 2.27887 12.7684C1.98062 12.2267 1.82422 11.6184 1.82422 11C1.82422 10.3816 1.98062 9.77325 2.27887 9.23154C2.57712 8.68983 3.00754 8.23235 3.53008 7.90165Z"
                      fill="url(#paint0_linear_640_723)"
                      stroke="#FFA500"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.25 11L10.0833 12.8333L13.75 9.16666"
                      stroke="#050E17"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_640_723"
                      x1="10.9937"
                      y1="1.83771"
                      x2="10.9937"
                      y2="20.1695"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FFA500" />
                      <stop offset="1" stopColor="#FFA500" />
                    </linearGradient>
                    <clipPath id="clip0_640_723">
                      <rect width="22" height="22" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </i>
              <p className="text-sm font-inter font-bold leading-[1.5]">
                Get Over 105%* Yearly Yields
              </p>
            </li>
          </ul>

          <div className="flex items-center gap-4 mt-5 max-sm:flex-col max-sm:[&>div]:w-full max-w-[408px]">
            <div className="relative flex-1">
              <button
                className="h-12 min-w-[166px] font-medium flex items-center cursor-pointer transition duration-300 ease-in-out justify-center gap-2.5 font-semibold max-sm:text-sm max-sm:h-10 max-sm:w-full bg-gradient-to-r from-yellow-300 to-orange-400 rounded-[60px] text-[#00070F] hover:from-yellow-400 hover:to-orange-500 px-[50px] flex-1"
                aria-label="button"
              >
                Buy $CAT
              </button>
            </div>

            <div className="relative">
              <button
                className="h-12 min-w-[166px] font-medium flex items-center cursor-pointer transition duration-300 ease-in-out justify-center gap-2.5 font-semibold max-sm:text-sm max-sm:h-10 max-sm:w-full bg-transparent border border-[#fbbf24] rounded-[60px] text-[#FFFFFF] hover:from-cyan-400 hover:to-emerald-400 px-5"
                aria-label="button"
              >
                How It Works?
              </button>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[rgba(1,7,14,0.18)] to-[rgba(255,255,255,0.18)] border border-[rgba(97,97,97,0.5)] backdrop-blur-[15px] rounded-lg mt-5 max-w-[410px] max-[640px]:max-w-full">
            <div className="py-[19px] px-5 flex items-center gap-[15px] border-b border-[#616161] max-md:p-3 max-md:gap-2 max-[479px]:flex-col">
              <p className="text-base font-semibold font-inter min-w-[100px]">
                Powered By:
              </p>
              <div className="flex items-center gap-[15px]">
                <a
                  target="_blank"
                  className="hover:opacity-70 transition-opacity"
                  href="https://codeum.org/kyc/uni-labs"
                >
                  <img
                    alt="unilabs"
                    loading="lazy"
                    width="78"
                    height="17"
                    decoding="async"
                    className="h-auto"
                    src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FcodeamImage.98e51960.png&w=256&q=75&dpl=dpl_EWAS8ZF1SPz1gvd3Hgrceu9TqG7t"
                  />
                </a>
                <a
                  target="_blank"
                  className="hover:opacity-70 transition-opacity"
                  href="https://x.com/cyberscope_ann/status/1966489255368081573"
                >
                  <img
                    alt="unilabs"
                    loading="lazy"
                    width="103"
                    height="20"
                    decoding="async"
                    className="h-auto"
                    src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FcyberPrusImage.f3953940.png&w=256&q=75&dpl=dpl_EWAS8ZF1SPz1gvd3Hgrceu9TqG7t"
                  />
                </a>
              </div>
            </div>

            <div className="py-[13px] px-5 flex items-center gap-[15px] max-md:p-3 max-md:gap-2 max-[479px]:flex-col max-[479px]:text-center">
              <p className="text-base font-semibold font-inter min-w-[100px] ">
                Listed On:
              </p>
              <div className="flex items-center gap-[15px]">
                <a
                  target="_blank"
                  className="hover:opacity-70 transition-opacity"
                  href="https://coinmarketcap.com/currencies/unilabs-finance/"
                >
                  <img
                    alt="unilabs"
                    loading="lazy"
                    width="122"
                    height="35"
                    decoding="async"
                    className="h-auto"
                    src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FmarketCap.14fa3974.png&w=256&q=75&dpl=dpl_EWAS8ZF1SPz1gvd3Hgrceu9TqG7t"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
