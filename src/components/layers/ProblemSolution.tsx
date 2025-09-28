

export default function ProblemSolution() {
  return (
    <div className="relative z-10 py-[70px] max-[1200px]:py-[60px] max-[900px]:py-10 bg-cover bg-center">
      <div className="container relative z-10">
        {/* Problem vs Solution Section */}
        <div className="mb-[70px] max-[1200px]:mb-[50px] max-[900px]:mb-10 max-[600px]:mb-[50px]">
          <div className="grid grid-cols-2 max-sm:grid-cols-1">
            {/* Problem Side */}
            <div className="bg-gradient-to-br from-[rgba(255,83,67,0.4)] to-[rgba(99,160,159,0.172)] h-full border border-[#ff001e89] border-r-0 rounded-tl-[20px] rounded-bl-[20px] p-[35px] max-lg:p-5 max-[600px]:p-[15px] max-sm:rounded-t-3 max-sm:rounded-b-none max-sm:border-r max-sm:border-b-0">
              <h3 className="text-xl font-bold mb-4 text-white">The Problem</h3>
              <ul className="flex flex-col gap-4">
                <li className="flex items-start gap-2">
                  <i className="inline-flex items-center justify-center w-5 h-5 mt-[3px] flex-shrink-0">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_341_11825)">
                        <path
                          d="M12.4993 7.50008L7.49935 12.5001M7.49935 7.50008L12.4993 12.5001M18.3327 10.0001C18.3327 14.6025 14.6017 18.3334 9.99935 18.3334C5.39698 18.3334 1.66602 14.6025 1.66602 10.0001C1.66602 5.39771 5.39698 1.66675 9.99935 1.66675C14.6017 1.66675 18.3327 5.39771 18.3327 10.0001Z"
                          stroke="#FF001E"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_341_11825">
                          <rect width="20" height="20" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </i>
                  <p className="text-base font-inter font-normal leading-relaxed text-white">
                    80% of retail traders lose money or underperform the market.
                  </p>
                </li>

                <li className="flex items-start gap-2">
                  <i className="inline-flex items-center justify-center w-5 h-5 mt-[3px] flex-shrink-0">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_341_11825_2)">
                        <path
                          d="M12.4993 7.50008L7.49935 12.5001M7.49935 7.50008L12.4993 12.5001M18.3327 10.0001C18.3327 14.6025 14.6017 18.3334 9.99935 18.3334C5.39698 18.3334 1.66602 14.6025 1.66602 10.0001C1.66602 5.39771 5.39698 1.66675 9.99935 1.66675C14.6017 1.66675 18.3327 5.39771 18.3327 10.0001Z"
                          stroke="#FF001E"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_341_11825_2">
                          <rect width="20" height="20" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </i>
                  <p className="text-base font-inter font-normal leading-relaxed text-white">
                    Countless hours wasted staring at charts and chasing pumps.
                  </p>
                </li>

                <li className="flex items-start gap-2">
                  <i className="inline-flex items-center justify-center w-5 h-5 mt-[3px] flex-shrink-0">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_341_11825_3)">
                        <path
                          d="M12.4993 7.50008L7.49935 12.5001M7.49935 7.50008L12.4993 12.5001M18.3327 10.0001C18.3327 14.6025 14.6017 18.3334 9.99935 18.3334C5.39698 18.3334 1.66602 14.6025 1.66602 10.0001C1.66602 5.39771 5.39698 1.66675 9.99935 1.66675C14.6017 1.66675 18.3327 5.39771 18.3327 10.0001Z"
                          stroke="#FF001E"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_341_11825_3">
                          <rect width="20" height="20" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </i>
                  <p className="text-base font-inter font-normal leading-relaxed text-white">
                    Missed market cycles, poor timing, and fragmented
                    allocations.
                  </p>
                </li>
              </ul>
            </div>

            {/* Solution Side */}
            <div className="max-sm:rounded-none max-sm:rounded-b-3 max-sm:p-2 max-sm:rounded-t-none bg-gradient-to-br from-[rgba(58,45,36,0)] to-[rgba(29,141,139,0.5)] h-full border border-[#FF8800] max-sm:border-l max-sm:border-t-0 border-l-0 rounded-tr-[20px] rounded-br-[20px] p-[35px] max-lg:p-5 max-[600px]:p-[15px]">
              <h3 className="text-xl font-bold mb-4 text-white">
                The Solution
              </h3>
              <ul className="flex flex-col gap-4">
                <li className="flex items-start gap-2">
                  <i className="inline-flex items-center justify-center w-5 h-5 mt-[3px] flex-shrink-0">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_341_11839)">
                        <path
                          d="M7.50065 10L9.16732 11.6667L12.5006 8.33333M3.20898 7.18333C3.08735 6.63544 3.10603 6.0657 3.26328 5.52695C3.42053 4.9882 3.71127 4.49787 4.10854 4.10143C4.50581 3.705 4.99674 3.41529 5.53582 3.25916C6.0749 3.10304 6.64468 3.08555 7.19232 3.20833C7.49374 2.73692 7.90898 2.34897 8.39977 2.08024C8.89056 1.81151 9.4411 1.67065 10.0006 1.67065C10.5602 1.67065 11.1107 1.81151 11.6015 2.08024C12.0923 2.34897 12.5076 2.73692 12.809 3.20833C13.3575 3.08502 13.9282 3.10242 14.4681 3.25893C15.0081 3.41543 15.4997 3.70595 15.8972 4.10346C16.2947 4.50097 16.5852 4.99256 16.7417 5.5325C16.8982 6.07244 16.9156 6.64319 16.7923 7.19167C17.2637 7.49309 17.6517 7.90834 17.9204 8.39913C18.1891 8.88992 18.33 9.44046 18.33 10C18.33 10.5595 18.1891 11.1101 17.9204 11.6009C17.6517 12.0917 17.2637 12.5069 16.7923 12.8083C16.9151 13.356 16.8976 13.9257 16.7415 14.4648C16.5854 15.0039 16.2957 15.4948 15.8992 15.8921C15.5028 16.2894 15.0125 16.5801 14.4737 16.7374C13.9349 16.8946 13.3652 16.9133 12.8173 16.7917C12.5163 17.2649 12.1007 17.6545 11.6091 17.9244C11.1175 18.1944 10.5657 18.3359 10.0048 18.3359C9.44396 18.3359 8.89217 18.1944 8.40054 17.9244C7.90892 17.6545 7.49335 17.2649 7.19232 16.7917C6.64468 16.9144 6.0749 16.897 5.53582 16.7408C4.99674 16.5847 4.50581 16.295 4.10854 15.8986C3.71127 15.5021 3.42053 15.0118 3.26328 14.4731C3.10603 13.9343 3.08735 13.3646 3.20898 12.8167C2.73395 12.516 2.34266 12.1001 2.07152 11.6077C1.80038 11.1152 1.6582 10.5622 1.6582 10C1.6582 9.43783 1.80038 8.88479 2.07152 8.39232C2.34266 7.89986 2.73395 7.48396 3.20898 7.18333Z"
                          stroke="#FF8800"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_341_11839">
                          <rect width="20" height="20" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </i>
                  <p className="text-base font-inter font-normal leading-relaxed text-white">
                    <strong className="font-bold">AI-Powered Allocation</strong>{" "}
                    - advanced algorithms build and manage your portfolio across
                    Bitcoin, Litecoin, Real Estate, and AI assets.
                  </p>
                </li>

                <li className="flex items-start gap-2">
                  <i className="inline-flex items-center justify-center w-5 h-5 mt-[3px] flex-shrink-0">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_341_11839_2)">
                        <path
                          d="M7.50065 10L9.16732 11.6667L12.5006 8.33333M3.20898 7.18333C3.08735 6.63544 3.10603 6.0657 3.26328 5.52695C3.42053 4.9882 3.71127 4.49787 4.10854 4.10143C4.50581 3.705 4.99674 3.41529 5.53582 3.25916C6.0749 3.10304 6.64468 3.08555 7.19232 3.20833C7.49374 2.73692 7.90898 2.34897 8.39977 2.08024C8.89056 1.81151 9.4411 1.67065 10.0006 1.67065C10.5602 1.67065 11.1107 1.81151 11.6015 2.08024C12.0923 2.34897 12.5076 2.73692 12.809 3.20833C13.3575 3.08502 13.9282 3.10242 14.4681 3.25893C15.0081 3.41543 15.4997 3.70595 15.8972 4.10346C16.2947 4.50097 16.5852 4.99256 16.7417 5.5325C16.8982 6.07244 16.9156 6.64319 16.7923 7.19167C17.2637 7.49309 17.6517 7.90834 17.9204 8.39913C18.1891 8.88992 18.33 9.44046 18.33 10C18.33 10.5595 18.1891 11.1101 17.9204 11.6009C17.6517 12.0917 17.2637 12.5069 16.7923 12.8083C16.9151 13.356 16.8976 13.9257 16.7415 14.4648C16.5854 15.0039 16.2957 15.4948 15.8992 15.8921C15.5028 16.2894 15.0125 16.5801 14.4737 16.7374C13.9349 16.8946 13.3652 16.9133 12.8173 16.7917C12.5163 17.2649 12.1007 17.6545 11.6091 17.9244C11.1175 18.1944 10.5657 18.3359 10.0048 18.3359C9.44396 18.3359 8.89217 18.1944 8.40054 17.9244C7.90892 17.6545 7.49335 17.2649 7.19232 16.7917C6.64468 16.9144 6.0749 16.897 5.53582 16.7408C4.99674 16.5847 4.50581 16.295 4.10854 15.8986C3.71127 15.5021 3.42053 15.0118 3.26328 14.4731C3.10603 13.9343 3.08735 13.3646 3.20898 12.8167C2.73395 12.516 2.34266 12.1001 2.07152 11.6077C1.80038 11.1152 1.6582 10.5622 1.6582 10C1.6582 9.43783 1.80038 8.88479 2.07152 8.39232C2.34266 7.89986 2.73395 7.48396 3.20898 7.18333Z"
                          stroke="#FF8800"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_341_11839_2">
                          <rect width="20" height="20" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </i>
                  <p className="text-base font-inter font-normal leading-relaxed text-white">
                    <strong className="font-bold">
                      Automatic Rebalancing & Optimization
                    </strong>{" "}
                    - your capital is always aligned with market conditions,
                    without manual effort.
                  </p>
                </li>

                <li className="flex items-start gap-2">
                  <i className="inline-flex items-center justify-center w-5 h-5 mt-[3px] flex-shrink-0">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_341_11839_3)">
                        <path
                          d="M7.50065 10L9.16732 11.6667L12.5006 8.33333M3.20898 7.18333C3.08735 6.63544 3.10603 6.0657 3.26328 5.52695C3.42053 4.9882 3.71127 4.49787 4.10854 4.10143C4.50581 3.705 4.99674 3.41529 5.53582 3.25916C6.0749 3.10304 6.64468 3.08555 7.19232 3.20833C7.49374 2.73692 7.90898 2.34897 8.39977 2.08024C8.89056 1.81151 9.4411 1.67065 10.0006 1.67065C10.5602 1.67065 11.1107 1.81151 11.6015 2.08024C12.0923 2.34897 12.5076 2.73692 12.809 3.20833C13.3575 3.08502 13.9282 3.10242 14.4681 3.25893C15.0081 3.41543 15.4997 3.70595 15.8972 4.10346C16.2947 4.50097 16.5852 4.99256 16.7417 5.5325C16.8982 6.07244 16.9156 6.64319 16.7923 7.19167C17.2637 7.49309 17.6517 7.90834 17.9204 8.39913C18.1891 8.88992 18.33 9.44046 18.33 10C18.33 10.5595 18.1891 11.1101 17.9204 11.6009C17.6517 12.0917 17.2637 12.5069 16.7923 12.8083C16.9151 13.356 16.8976 13.9257 16.7415 14.4648C16.5854 15.0039 16.2957 15.4948 15.8992 15.8921C15.5028 16.2894 15.0125 16.5801 14.4737 16.7374C13.9349 16.8946 13.3652 16.9133 12.8173 16.7917C12.5163 17.2649 12.1007 17.6545 11.6091 17.9244C11.1175 18.1944 10.5657 18.3359 10.0048 18.3359C9.44396 18.3359 8.89217 18.1944 8.40054 17.9244C7.90892 17.6545 7.49335 17.2649 7.19232 16.7917C6.64468 16.9144 6.0749 16.897 5.53582 16.7408C4.99674 16.5847 4.50581 16.295 4.10854 15.8986C3.71127 15.5021 3.42053 15.0118 3.26328 14.4731C3.10603 13.9343 3.08735 13.3646 3.20898 12.8167C2.73395 12.516 2.34266 12.1001 2.07152 11.6077C1.80038 11.1152 1.6582 10.5622 1.6582 10C1.6582 9.43783 1.80038 8.88479 2.07152 8.39232C2.34266 7.89986 2.73395 7.48396 3.20898 7.18333Z"
                          stroke="#FF8800"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_341_11839_3">
                          <rect width="20" height="20" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </i>
                  <p className="text-base font-inter font-normal leading-relaxed text-white">
                    <strong className="font-bold">
                      All-in-One Access with $CAT
                    </strong>{" "}
                    - a single token unlocks exposure, yields, and growth across
                    multiple sectors.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="container relative z-10">
        <div className="text-center max-w-[1022px] mx-auto mb-6 max-md:mb-5">
          <h2 className="text-4xl max-lg:text-3xl max-md:text-2xl font-bold text-white mb-[10px]">
            The First AI Hedge Fund Built for Everyday Investors
          </h2>
          <p className="text-white text-base max-md:text-sm">
            Most investors lose money chasing hype or trading on emotions.
            Cat changes the game, automating growth with AI, optimizing
            allocations, and sharing profits directly with $CAT holders.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="relative shadow-[inset_0px_4px_34px_0px_#FF8800] max-[900px]:shadow-[inset_0px_4px_10px_0px_#FF8800] rounded-[20px] max-md:rounded-[10px] overflow-hidden overflow-x-auto">
          {/* Hover overlays for desktop */}
          <div className="absolute inset-0 z-20 pointer-events-none max-[1200px]:hidden">
            <div
              className="absolute cursor-pointer top-0 bottom-0 pointer-events-auto shadow-[inset_0px_4px_34px_0px_#FF8800] bg-gradient-to-br from-[rgba(58,45,36,0.3)] to-[rgba(237,134,15,0.3)] transition-all ease duration-500 opacity-0 hover:opacity-100"
              style={{ left: "0.399994px", width: "240px" }}
            ></div>
            <div
              className="absolute cursor-pointer top-0 bottom-0 pointer-events-auto shadow-[inset_0px_4px_34px_0px_#FF8800] bg-gradient-to-br from-[rgba(58,45,36,0.3)] to-[rgba(237,134,15,0.3)] transition-all ease duration-500 opacity-0 hover:opacity-100"
              style={{ left: "240.4px", width: "308.925px" }}
            ></div>
            <div
              className="absolute cursor-pointer top-0 bottom-0 pointer-events-auto shadow-[inset_0px_4px_34px_0px_#FF8800] bg-gradient-to-br from-[rgba(58,45,36,0.3)] to-[rgba(237,134,15,0.3)] transition-all ease duration-500 opacity-0 hover:opacity-100"
              style={{ left: "549.325px", width: "524.513px" }}
            ></div>
          </div>

          <table className="relative z-12 w-full border-collapse bg-gradient-to-br from-[rgba(58,45,36,0.3)] to-[rgba(237,134,15,0.6)] max-[900px]:from-[rgba(58,45,36,0.3)] max-[900px]:to-[rgba(237,134,15,0.1)] min-w-[800px] max-[767px]:min-w-auto">
            <thead className="max-md:hidden">
              <tr className="font-bold">
                <th className="py-[23px] px-8 border border-[#443828] min-w-[240px]">
                  <p className="text-xl font-bold text-left text-white">
                    Performance
                  </p>
                </th>
                <th className="py-[23px] px-8 border border-[#443828]">
                  <p className="text-xl font-bold text-left text-white">
                    Other Crypto Exchanges
                  </p>
                </th>
                <th className="py-[23px] px-8 border border-[#443828]">
                  <p className="text-xl font-bold text-left text-white">
                    Cat
                  </p>
                </th>
              </tr>
            </thead>

            <tbody>
              {/* Time & Stress Row */}
              <tr className="max-md:block max-md:mb-6 max-md:border max-md:border-[#443828]">
                <td className="p-4 border border-[#443828] align-middle">
                  <p className="font-semibold text-white">Time & Stress</p>
                </td>
                <td className="p-4 border border-[#443828] align-middle">
                  <div className="flex items-center gap-[15px]">
                    <i className="flex items-center flex-shrink-0">
                      <svg
                        width="46"
                        height="46"
                        viewBox="0 0 46 46"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M35.5002 44H10.0002C6.40024 44 6.16691 41.6666 6.50024 40.5V18.5C6.50024 19.7 8.83358 20.3333 10.0002 20.5H39.5002V40.5C39.5002 43.7 36.8336 44.1666 35.5002 44Z"
                          fill="#0A2025"
                        ></path>
                        <path
                          d="M37.375 14.4472V7.9061C37.3744 7.33443 37.147 6.78635 36.7427 6.38211C36.3385 5.97788 35.7904 5.75049 35.2188 5.74985H34.3235L33.829 4.01946C33.6989 3.56409 33.4801 3.13894 33.1851 2.76843C32.8901 2.39792 32.5248 2.08937 32.1102 1.86052C31.6956 1.63167 31.2398 1.48703 30.7691 1.43491C30.2983 1.3828 29.822 1.42423 29.3673 1.55685L14.991 5.74985H12.2188C11.6471 5.75049 11.099 5.97788 10.6948 6.38211C10.2905 6.78635 10.0631 7.33443 10.0625 7.9061V14.3749H9.34375C8.39096 14.3759 7.47749 14.7549 6.80377 15.4286C6.13004 16.1023 5.75107 17.0158 5.75 17.9686V40.9686C5.75107 41.9214 6.13004 42.8349 6.80377 43.5086C7.47749 44.1823 8.39096 44.5613 9.34375 44.5624H36.6562C37.609 44.5613 38.5225 44.1823 39.1962 43.5086C39.87 42.8349 40.2489 41.9214 40.25 40.9686V17.9686C40.2489 17.1405 39.9624 16.3381 39.4387 15.6967C38.915 15.0552 38.1861 14.6139 37.375 14.4472Z"
                          fill="#FFFF00"
                        ></path>
                      </svg>
                    </i>
                    <div>
                      <p className="font-bold text-white">High Failure Rate</p>
                      <p className="font-normal text-sm text-gray-300">
                        90% of retail traders lose money
                      </p>
                    </div>
                  </div>
                </td>
                <td className="p-4 border border-[#443828] align-middle">
                  <div className="flex items-center gap-[15px]">
                    <i className="flex items-center flex-shrink-0">
                      <svg
                        width="48"
                        height="48"
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M28.6952 38.0868C29.9474 46.0173 26.0865 47.3042 23.9996 46.9564C19.304 45.913 19.304 40.174 19.304 37.0436V37.0434C13.0431 35.4781 10.9561 28.6955 9.91261 24.5216C8.86913 20.3477 14.0865 9.39119 23.9996 10.4347C33.9126 11.4781 35.4778 15.6521 38.0865 22.9564C38.6083 31.3042 31.3039 36.5216 28.6952 38.0868Z"
                          fill="#103539"
                        ></path>
                        <path
                          d="M24.779 7.74317V4.50653C25.6772 4.18906 26.3276 3.33731 26.3276 2.32295C26.3276 1.04533 25.2823 0 24.0047 0C22.727 0 21.6817 1.04533 21.6817 2.32295C21.6817 3.32957 22.3321 4.18131 23.2303 4.50653V7.74317H24.779Z"
                          fill="#FF8800"
                        ></path>
                      </svg>
                    </i>
                    <div>
                      <p className="font-bold text-white">
                        AI Powered Performance
                      </p>
                      <p className="font-normal text-sm text-gray-300">
                        Automated allocations across STC, ETN, AI coins, RWAs &
                        mining
                      </p>
                    </div>
                  </div>
                </td>
              </tr>

              {/* Rewards Row */}
              <tr className="max-md:block max-md:mb-6 max-md:border max-md:border-[#443828]">
                <td className="p-4 border border-[#443828] align-middle">
                  <p className="font-semibold text-white">Rewards</p>
                </td>
                <td className="p-4 border border-[#443828] align-middle">
                  <div className="flex items-center gap-[15px]">
                    <i className="flex items-center flex-shrink-0">
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M29.4998 39.5002H9.99981C7.19966 39.5002 7.16654 37.8335 7.5 37.0001L5.5 24.0001C5.5 23.8335 5.19996 23.5002 3.99981 23.5002C2.49962 23.5002 1.99981 23.5002 1.49981 21.5001C1.09981 19.9001 2.99981 18.8335 3.99981 18.5002C13.4998 18.3335 33.1998 18.1002 35.9998 18.5002C39.4998 19.1741 38.4998 21.5002 37.9998 22.5002C37.5998 23.3002 35.4998 23.5002 34.4998 23.5002C34.1665 26.5002 33.2998 33.3002 32.4998 36.5002C31.6998 39.7002 30.1665 39.8335 29.4998 39.5002Z"
                          fill="#09282B"
                        ></path>
                        <path
                          d="M20.6446 9.5746V10.3823C20.6446 10.5534 20.5767 10.7175 20.4557 10.8385C20.3347 10.9595 20.1706 11.0275 19.9995 11.0275C19.8284 11.0275 19.6643 10.9595 19.5433 10.8385C19.4223 10.7175 19.3543 10.5534 19.3543 10.3823V9.5746C19.3543 9.40349 19.4223 9.23939 19.5433 9.1184C19.6643 8.99741 19.8284 8.92943 19.9995 8.92943C20.1706 8.92943 20.3347 8.99741 20.4557 9.1184C20.5767 9.23939 20.6446 9.40349 20.6446 9.5746Z"
                          fill="#FFFF00"
                        ></path>
                      </svg>
                    </i>
                    <div>
                      <p className="font-bold text-white">Time-Consuming</p>
                      <p className="font-normal text-sm text-gray-300">
                        Hours wasted chasing charts
                      </p>
                    </div>
                  </div>
                </td>
                <td className="p-4 border border-[#443828] align-middle">
                  <div className="flex items-center gap-[15px]">
                    <i className="flex items-center flex-shrink-0">
                      <svg
                        width="42"
                        height="42"
                        viewBox="0 0 42 42"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M32.7404 40.4407H8.71618L7.64844 38.3052V27.0939L8.71618 23.8906H32.7404C33.2148 24.6813 34.1108 25.9216 34.3045 25.2892C34.327 24.8419 34.3421 24.6896 34.3421 24.9584C34.3421 25.1012 34.3288 25.2099 34.3045 25.2892C34.1929 27.5066 33.8978 36.9725 34.3421 38.3052C34.7692 39.5865 33.4523 40.2628 32.7404 40.4407Z"
                          fill="#0D4744"
                        ></path>
                        <path
                          d="M32.6274 41.375H9.0569C7.95579 41.375 7.05488 40.4741 7.05488 39.373V25.7992C7.05488 24.6981 7.95579 23.7972 9.0569 23.7972H32.6274C33.7285 23.7972 34.6294 24.6981 34.6294 25.7992V39.373C34.6294 40.4741 33.7285 41.375 32.6274 41.375Z"
                          fill="#FF8800"
                        ></path>
                      </svg>
                    </i>
                    <div>
                      <p className="font-bold text-white">Daily Rewards</p>
                      <p className="font-normal text-sm text-gray-300">
                        Claim $CAT, USDT staking income
                      </p>
                    </div>
                  </div>
                </td>
              </tr>

              {/* Transparency Row */}
              <tr className="max-md:block max-md:mb-6 max-md:border max-md:border-[#443828]">
                <td className="p-4 border border-[#443828] align-middle">
                  <p className="font-semibold text-white">Transparency</p>
                </td>
                <td className="p-4 border border-[#443828] align-middle">
                  <div className="flex items-center gap-[15px]">
                    <i className="flex items-center flex-shrink-0">
                      <svg
                        width="37"
                        height="37"
                        viewBox="0 0 37 37"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M33.8002 8.09722C31.757 5.09783 28.9105 2.7815 25.5685 1.3987C25.1995 1.24608 24.7764 1.42146 24.6237 1.79045C24.4711 2.15959 24.6464 2.58248 25.0155 2.73525C28.0964 4.01002 30.7206 6.14583 32.6048 8.91158C34.5339 11.7437 35.5537 15.0592 35.5537 18.5001C35.5537 27.9036 27.9035 35.5537 18.5001 35.5537C9.09665 35.5537 1.4464 27.9033 1.4464 18.5C1.4464 9.09665 9.09651 1.4464 18.5 1.4464C18.8994 1.4464 19.2232 1.12257 19.2232 0.723234C19.2232 0.323822 18.8994 0 18.5 0C8.29898 0 0 8.29898 0 18.5C0 28.701 8.29898 37 18.5 37C28.701 37 37 28.701 37 18.5C37 14.7675 35.8935 11.1702 33.8002 8.09722Z"
                          fill="#FFFF00"
                        ></path>
                        <path
                          d="M28 23.5H14C15 25 16.5 30.5 22 30C26.4 29.6 27.8333 25.5 28 23.5Z"
                          fill="#09282B"
                        ></path>
                      </svg>
                    </i>
                    <div>
                      <p className="font-bold text-white">Emotion Driven</p>
                      <p className="font-normal text-sm text-gray-300">
                        Buy tops, sell bottoms
                      </p>
                    </div>
                  </div>
                </td>
                <td className="p-4 border border-[#443828] align-middle">
                  <div className="flex items-center gap-[15px]">
                    <i className="flex items-center flex-shrink-0">
                      <svg
                        width="39"
                        height="39"
                        viewBox="0 0 39 39"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.67528 21.5657H0.513672V34.9158H6.67528L7.18875 34.4024H9.24262L9.75609 33.3754H11.2965C12.4946 34.06 14.9935 35.532 15.4042 35.9428C15.815 36.3535 17.6293 37.1409 18.485 37.4832H33.3756C34.916 37.4832 35.4295 36.4562 35.4295 35.4293C35.4295 34.6077 34.7448 33.7177 34.4025 33.3754C31.8352 33.5466 26.8032 33.6835 27.214 32.862C27.6248 32.0404 26.7005 30.4658 26.187 29.7812C23.6197 27.8984 18.0743 24.0303 16.4312 23.6195C14.7881 23.2088 11.2965 23.4484 9.75609 23.6195L9.24262 22.5926H7.18875L6.67528 21.5657Z"
                          fill="#0D4744"
                        ></path>
                        <path
                          d="M32.408 0C32.091 0 31.774 0.211346 31.774 0.636441V1.90692C31.774 2.75471 33.0445 2.75471 33.0445 1.90692V0.634039C33.0445 0.211346 32.7251 0 32.408 0Z"
                          fill="#FF8800"
                        ></path>
                      </svg>
                    </i>
                    <div>
                      <p className="font-bold text-white">Stress-Free</p>
                      <p className="font-normal text-sm text-gray-300">
                        AI manages rebalancing, profit taking, and downside
                        protection
                      </p>
                    </div>
                  </div>
                </td>
              </tr>

              {/* Community Row */}
              <tr className="max-md:block max-md:mb-6 max-md:border max-md:border-[#443828]">
                <td className="p-4 border border-[#443828] align-middle">
                  <p className="font-semibold text-white">Community</p>
                </td>
                <td className="p-4 border border-[#443828] align-middle">
                  <div className="flex items-center gap-[15px]">
                    <i className="flex items-center flex-shrink-0">
                      <svg
                        width="38"
                        height="38"
                        viewBox="0 0 38 38"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="19" cy="19" r="19" fill="#073C38"></circle>
                        <circle
                          cx="19"
                          cy="19"
                          r="18.5"
                          stroke="#FFFF00"
                        ></circle>
                        <path
                          d="M19.1743 10.5006C19.1943 10.5326 19.1972 10.5723 19.1822 10.6069L18.6475 11.8349C18.4042 12.3938 18.9289 13.0229 19.5261 12.8746L20.8261 12.552C20.8627 12.5429 20.9013 12.5524 20.9295 12.5774L21.9322 13.4654C22.3883 13.8693 23.1489 13.5649 23.1925 12.951L23.2874 11.6149C23.2887 11.5964 23.2945 11.5785 23.3043 11.5627C23.3141 11.5469 23.3276 11.5338 23.3436 11.5244L24.4979 10.8452C25.0233 10.5361 24.9684 9.71878 24.3981 9.48765L23.1568 8.98453C23.1396 8.97756 23.1244 8.96651 23.1124 8.95234C23.1004 8.93817 23.0921 8.9213 23.0881 8.90319L22.7988 7.59535C22.6672 7.00023 21.873 6.79978 21.4769 7.27076L20.6148 8.29587C20.6029 8.3101 20.5877 8.3212 20.5705 8.32821C20.5534 8.33522 20.5347 8.33792 20.5163 8.33609L19.1831 8.20705C18.5765 8.14887 18.1402 8.84149 18.4659 9.36399L19.1743 10.5006Z"
                          fill="#FFFF00"
                        ></path>
                      </svg>
                    </i>
                    <div>
                      <p className="font-bold text-white">No Rewards</p>
                      <p className="font-normal text-sm text-gray-300">
                        Just holding coins with no yield
                      </p>
                    </div>
                  </div>
                </td>
                <td className="p-4 border border-[#443828] align-middle">
                  <div className="flex items-center gap-[15px]">
                    <i className="flex items-center flex-shrink-0">
                      <svg
                        width="44"
                        height="43"
                        viewBox="0 0 44 43"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M37.9402 22.3743V10.6897C37.9402 9.75999 38.3172 8.91772 38.9269 8.30891C39.5365 7.69927 40.378 7.32227 41.3077 7.32227C41.966 7.32227 42.4997 7.85601 42.4997 8.51432V24.36C42.4997 24.9943 42.3133 25.6147 41.9643 26.1435L41.1872 27.3207M32.6309 41.9998C32.7565 40.6804 33.204 39.4119 33.9343 38.3057L39.5959 29.7304"
                          stroke="#FF8800"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </i>
                    <div>
                      <p className="font-bold text-white">Community-First</p>
                      <p className="font-normal text-sm text-gray-300">
                        Holders benefit directly from fund growth
                      </p>
                    </div>
                  </div>
                </td>
              </tr>

              {/* Dashboard Row */}
              <tr className="max-md:block max-md:mb-6 max-md:border max-md:border-[#443828]">
                <td className="p-4 border border-[#443828] align-middle">
                  <p className="font-semibold text-white">
                    Transparent Dashboard
                  </p>
                </td>
                <td className="p-4 border border-[#443828] align-middle">
                  <div className="flex items-center gap-[15px]">
                    <i className="flex items-center flex-shrink-0">
                      <svg
                        width="38"
                        height="38"
                        viewBox="0 0 38 38"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="19" cy="19" r="19" fill="#073C38"></circle>
                        <circle
                          cx="19"
                          cy="19"
                          r="18.5"
                          stroke="#FFFF00"
                        ></circle>
                        <line
                          x1="31.3983"
                          y1="5.30219"
                          x2="9.39834"
                          y2="34.3022"
                          stroke="#FFFF00"
                        ></line>
                        <path
                          d="M30.8568 14.0514C30.8554 14.0423 30.8537 14.0333 30.8516 14.0244C30.7192 13.3189 30.4984 12.633 30.1945 11.9827C30.1861 11.958 30.175 11.9344 30.1615 11.9121C29.8838 11.3319 29.5421 10.7844 29.1429 10.28C29.128 10.2548 29.11 10.2314 29.0894 10.2106C29.0865 10.2078 29.0834 10.2053 29.0804 10.2025C28.6901 9.72078 28.2494 9.28214 27.7658 8.89413C27.7631 8.89122 27.7607 8.88817 27.7578 8.88531C27.7365 8.86411 27.7125 8.84574 27.6864 8.83066C27.1798 8.43391 26.6305 8.09503 26.0487 7.82031C26.0267 7.80686 26.0032 7.7959 25.9788 7.78764C25.3246 7.48574 24.6349 7.26778 23.9261 7.13894C23.9172 7.13692 23.9082 7.13525 23.8991 7.13392C23.3982 7.04462 22.8904 6.99981 22.3816 7C21.9835 7 21.5919 7.02775 21.208 7.0802C21.2068 7.0803 21.2056 7.08058 21.2043 7.08072C17.5643 7.58022 14.6416 10.361 13.9297 13.93C12.9954 14.1161 12.0956 14.4558 11.2707 14.9387C11.1919 14.9868 11.1351 15.0639 11.1125 15.1534C11.09 15.2429 11.1035 15.3377 11.1501 15.4174C11.1968 15.4971 11.2728 15.5553 11.3619 15.5795C11.451 15.6036 11.546 15.5919 11.6266 15.5467C12.3091 15.1472 13.0477 14.8545 13.815 14.6755C13.7806 14.9886 13.7634 15.3034 13.7632 15.6184C13.7632 16.1356 13.8091 16.6422 13.8969 17.1345C13.8983 17.1442 13.9 17.1538 13.9022 17.1633C14.031 17.8719 14.249 18.5614 14.5508 19.2153C14.559 19.2396 14.5699 19.2631 14.5835 19.2854C14.8583 19.8672 15.1971 20.4165 15.5938 20.923C15.6089 20.9491 15.6273 20.9731 15.6485 20.9945C15.6513 20.9973 15.6543 20.9996 15.6572 21.0023C16.0453 21.486 16.4839 21.9268 16.9658 22.3171C16.9685 22.3201 16.971 22.3232 16.9738 22.326C16.9951 22.3472 17.0185 22.3648 17.0432 22.3795C17.5476 22.7787 18.095 23.1204 18.6753 23.3981C18.6978 23.4119 18.7215 23.4228 18.7459 23.4311C19.3962 23.7351 20.0823 23.9559 20.7879 24.0884C20.7966 24.0904 20.8054 24.0921 20.8143 24.0934C21.6422 24.2462 22.488 24.277 23.3248 24.1848C22.5065 27.6826 19.3619 30.2954 15.6183 30.2954C11.2546 30.2954 7.70444 26.7452 7.70444 22.3815C7.70444 20.1811 8.58597 18.137 10.1866 16.6258C10.2525 16.5612 10.2905 16.4733 10.2923 16.381C10.2941 16.2888 10.2596 16.1994 10.1963 16.1323C10.1329 16.0652 10.0457 16.0256 9.95347 16.0221C9.86122 16.0186 9.77129 16.0514 9.703 16.1135C8.85845 16.9109 8.19377 17.8519 7.7275 18.9105C7.24483 20.0067 7 21.1745 7 22.3816C7 27.1338 10.8663 31 15.6184 31C19.7928 31 23.2831 28.0167 24.0703 24.0702C27.6601 23.3542 30.4528 20.4015 30.9282 16.7318C30.9285 16.7296 30.9289 16.7275 30.9291 16.7254C31.0436 15.8357 31.0192 14.9336 30.8568 14.0514Z"
                          fill="#FFFF00"
                        ></path>
                      </svg>
                    </i>
                    <div>
                      <p className="font-bold text-white">No Transparency</p>
                      <p className="font-normal text-sm text-gray-300">
                        Blind bets with little insight
                      </p>
                    </div>
                  </div>
                </td>
                <td className="p-4 border border-[#443828] align-middle">
                  <div className="flex items-center gap-[15px]">
                    <i className="flex items-center flex-shrink-0">
                      <svg
                        width="43"
                        height="43"
                        viewBox="0 0 43 43"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="17" cy="26" r="17" fill="#0D4744"></circle>
                        <path
                          d="M26 33C34.8366 33 42 25.8366 42 17C42 8.16344 34.8366 1 26 1C17.1634 1 10 8.16344 10 17C10 25.8366 17.1634 33 26 33Z"
                          stroke="#FF8800"
                          strokeWidth="2"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M17 42C25.8366 42 33 34.8366 33 26C33 17.1634 25.8366 10 17 10C8.16344 10 1 17.1634 1 26C1 34.8366 8.16344 42 17 42Z"
                          stroke="#FF8800"
                          strokeWidth="2"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </i>
                    <div>
                      <p className="font-bold text-white">
                        Transparent Dashboard
                      </p>
                      <p className="font-normal text-sm text-gray-300">
                        Live fund performance & allocation breakdown
                      </p>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* CTA Button */}
        <div className="flex items-center justify-center gap-3 mt-[30px] max-md:mt-5 mx-auto">
          <div className="relative">
            <button
              className="h-12 min-w-[166px] font-medium flex items-center cursor-pointer transition duration-300 ease-in-out justify-center gap-2.5 font-semibold max-sm:text-sm max-sm:h-10 max-sm:w-full bg-gradient-to-r from-emerald-400 to-teal-400 rounded-[60px] text-[#00070F] hover:from-emerald-500 hover:to-teal-500 px-[50px]"
              aria-label="button"
            >
              Buy $CAT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
