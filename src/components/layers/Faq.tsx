

export default function Faq() {
  return (
    <div className="overflow-visible relative z-10 p-0">
      <div
        className="flex items-end justify-end"
        style={{
          position: "absolute",
          top: "0px",
          left: "0px",
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      >
        <canvas
          style={{
            position: "absolute",
            bottom: "0px",
            left: "0px",
            width: "1525.6px",
            height: "576px",
            zIndex: -1,
          }}
          width="1906"
          height="720"
        ></canvas>
      </div>
      <div
        style={{
          backgroundImage:
            "url(/_next/static/media/frequentLyQuestionBanner.dbf0f518.png)",
        }}
        className="bg-cover bg-bottom bg-no-repeat py-[70px] max-[1200px]:py-[60px] max-[900px]:py-[40px]"
      >
        <div className="container">
          <div className="flex items-center justify-between gap-[10px] max-md:flex-col max-md:items-start max-md:items-center max-md:text-center">
            <div>
              <h2 className="font-bold text-white mb-[5px] max-lg:text-[32px]">
                Frequently Asked Questions
              </h2>
              <p className="text-[16px] mx-auto text-white">
                Clear answers to the most common questions about Cat, our
                presale, and how $CAT works.
              </p>
            </div>
            <div className="button-wrapper">
              <button
                className="h-[48px] font-medium font-ptSans flex items-center cursor-pointer ease-in-out justify-center gap-2.5 !font-semibold max-sm:!text-[14px] max-sm:!h-[40px] max-sm:w-full !border-none buttonRadialBGBlue bg-[radial-gradient(24.83%_154.95%_at_14.43%_72.32%,_#13DCE3_0%,_#33FFD4_100%)] rounded-[60px] bg-[#FFFF00] hover:bg-none hover:border-[#FFFF00] max-[479px]:!shadow-none button overflow-hidden px-[47px] max-lg:px-[35px] !bg-black hover:!bg-[#ffff00] hover:text-black relative z-10 text-[#FFFF00] !bg-none !border-0 border-transparent shadow-none max-md:px-[30px] max-sm:px-[25px] min-w-[176px] max-lg:min-w-0 whitespace-nowrap max-md:h-[40px] max-md:text-[14px] transition-all duration-300"
                aria-label="button"
              >
                Buy $CAT
              </button>
              <div className="button-bg bg-[linear-gradient(45.73deg,#f5fd83_12.78%,#fdb100_50.23%)] !z-[2]"></div>
            </div>
          </div>
          <div
            className="flex items-center justify-center w-full flex-col gap-2 mt-[35px] max-md:mt-5 z-[1000]"
            data-aos-duration="1000"
          >
            <div
              dir="ltr"
              data-orientation="horizontal"
              className="w-full flex max-sm:flex-col items-start gap-[20px] max-md:gap-[20px]"
            >
              <div
                role="tablist"
                aria-orientation="horizontal"
                className="inline-flex h-auto items-center justify-center gap-[0] flex-col max-sm:flex-row max-w-[308px] max-md:max-w-[220px] max-sm:max-w-none w-full bg-[#242D3A33] border border-[#263D4E] rounded-[10px] overflow-hidden max-sm:overflow-x-auto max-sm:justify-start backdrop-blur-[90px] max-sm:whitespace-nowrap faqTabsList max-sm:!flex-col"
                data-aos="fade-right"
                data-aos-duration="800"
                data-orientation="horizontal"
                style={{ outline: "none" }}
              >
                <button
                  type="button"
                  role="tab"
                  aria-selected="true"
                  aria-controls="radix-«Rag7jlb»-content-general"
                  data-state="active"
                  id="radix-«Rag7jlb»-trigger-general"
                  className="w-full inline-flex items-center justify-start min-h-[67px] max-lg:min-h-[40px] max-sm:min-w-[150px] relative z-[99] whitespace-nowrap px-[28px] max-lg:px-[20px] max-md:px-[14px] py-[22px] max-md:py-[10px] text-[16px] max-md:text-[14px] font-inter font-semibold text-white data-[state=active]:text-[#0FEDBE] ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-[inset_0px_4px_19px_#0FEDBE] cursor-pointer"
                  data-orientation="horizontal"
                  data-radix-collection-item=""
                >
                  General
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected="false"
                  aria-controls="radix-«Rag7jlb»-content-presale"
                  data-state="inactive"
                  id="radix-«Rag7jlb»-trigger-presale"
                  className="w-full inline-flex items-center justify-start min-h-[67px] max-lg:min-h-[40px] max-sm:min-w-[150px] relative z-[99] whitespace-nowrap px-[28px] max-lg:px-[20px] max-md:px-[14px] py-[22px] max-md:py-[10px] text-[16px] max-md:text-[14px] font-inter font-semibold text-white data-[state=active]:text-[#0FEDBE] ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-[inset_0px_4px_19px_#0FEDBE] cursor-pointer"
                  data-orientation="horizontal"
                  data-radix-collection-item=""
                >
                  Presale
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected="false"
                  aria-controls="radix-«Rag7jlb»-content-support"
                  data-state="inactive"
                  id="radix-«Rag7jlb»-trigger-support"
                  className="w-full inline-flex items-center justify-start min-h-[67px] max-lg:min-h-[40px] max-sm:min-w-[150px] relative z-[99] whitespace-nowrap px-[28px] max-lg:px-[20px] max-md:px-[14px] py-[22px] max-md:py-[10px] text-[16px] max-md:text-[14px] font-inter font-semibold text-white data-[state=active]:text-[#0FEDBE] ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-[inset_0px_4px_19px_#0FEDBE] cursor-pointer"
                  data-orientation="horizontal"
                  data-radix-collection-item=""
                >
                  Support
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected="false"
                  aria-controls="radix-«Rag7jlb»-content-rewards"
                  data-state="inactive"
                  id="radix-«Rag7jlb»-trigger-rewards"
                  className="w-full inline-flex items-center justify-start min-h-[67px] max-lg:min-h-[40px] max-sm:min-w-[150px] relative z-[99] whitespace-nowrap px-[28px] max-lg:px-[20px] max-md:px-[14px] py-[22px] max-md:py-[10px] text-[16px] max-md:text-[14px] font-inter font-semibold text-white data-[state=active]:text-[#0FEDBE] ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-[inset_0px_4px_19px_#0FEDBE] cursor-pointer"
                  data-orientation="horizontal"
                  data-radix-collection-item=""
                >
                  Rewards & Staking
                </button>
              </div>
              <div
                data-state="active"
                data-orientation="horizontal"
                role="tabpanel"
                aria-labelledby="radix-«Rag7jlb»-trigger-general"
                id="radix-«Rag7jlb»-content-general"
                className="w-full ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                style={{ animationDuration: "0s" }}
              >
                <div className="w-full flex flex-col gap-2">
                  <div
                    data-aos="fade-up"
                    data-aos-delay="0"
                    data-orientation="vertical"
                  >
                    <div
                      data-state="closed"
                      data-orientation="vertical"
                      className="!bg-[#FFFFFF1A] w-full rounded-[12px] relative z-[999] max-md:rounded-[10px] [background-image:linear-gradient(180.79deg,rgba(36,45,58,0.3)_15.6%,rgba(15,237,190,0.2)_87.34%)] border border-[#283442] backdrop-blur-[90px] shadow-[0px_4px_10px_0px_#00FFDD_inset] data-[state=open]:border-border duration-300 ease-out hover:data-[state=closed]:opacity-70 hover:data-[state=open]:opacity-90 max-[900px]:border max-[900px]:border-[#30ddaf] max-[900px]:bg-[linear-gradient(191.79deg,_rgb(0_0_0)_15.6%,_rgb(29_84_73)_87.34%)] max-[900px]:shadow-[inset_0px_4px_20px_0px_#267068]"
                    >
                      <h3
                        data-orientation="vertical"
                        data-state="closed"
                        className="flex"
                      >
                        <button
                          type="button"
                          aria-controls="radix-«R16qg7jlb»"
                          aria-expanded="false"
                          data-state="closed"
                          data-orientation="vertical"
                          id="radix-«R6qg7jlb»"
                          className="flex !cursor-pointer accordionBtn text-left flex-1 sm:items-center justify-between text-[16px] max-md:text-[16px] font-semibold max-sm:text-sm !font-inter py-[28px] px-[35px] max-md:p-4 border-b border-b-transparent data-[state=open]:border-b-border transition-all [&[data-state=open]>svg]:rotate-180 [&[data-state=open]>svg]:text-[#1CE0C8]"
                          data-radix-collection-item=""
                        >
                          What is Cat Finance?
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 17"
                            className="h-4 w-4 max-md:size-3 my-auto"
                          >
                            <path
                              fill="currentColor"
                              d="M6.446 16.625V.898h3.568v15.727zm-6.08-6.08V6.978h15.728v3.569z"
                            ></path>
                          </svg>
                        </button>
                      </h3>
                      <div
                        data-state="closed"
                        id="radix-«R16qg7jlb»"
                        role="region"
                        aria-labelledby="radix-«R6qg7jlb»"
                        data-orientation="vertical"
                        // style={{
                        //   "--radix-accordion-content-height":
                        //     "var(--radix-collapsible-content-height)",
                        //   "--radix-accordion-content-width":
                        //     "var(--radix-collapsible-content-width)",
                        // }}
                      ></div>
                    </div>
                  </div>
                  <div
                    data-aos="fade-up"
                    data-aos-delay="100"
                    data-orientation="vertical"
                  >
                    <div
                      data-state="closed"
                      data-orientation="vertical"
                      className="!bg-[#FFFFFF1A] w-full rounded-[12px] relative z-[999] max-md:rounded-[10px] [background-image:linear-gradient(180.79deg,rgba(36,45,58,0.3)_15.6%,rgba(15,237,190,0.2)_87.34%)] border border-[#283442] backdrop-blur-[90px] shadow-[0px_4px_10px_0px_#00FFDD_inset] data-[state=open]:border-border duration-300 ease-out hover:data-[state=closed]:opacity-70 hover:data-[state=open]:opacity-90 max-[900px]:border max-[900px]:border-[#30ddaf] max-[900px]:bg-[linear-gradient(191.79deg,_rgb(0_0_0)_15.6%,_rgb(29_84_73)_87.34%)] max-[900px]:shadow-[inset_0px_4px_20px_0px_#267068]"
                    >
                      <h3
                        data-orientation="vertical"
                        data-state="closed"
                        className="flex"
                      >
                        <button
                          type="button"
                          aria-controls="radix-«R1aqg7jlb»"
                          aria-expanded="false"
                          data-state="closed"
                          data-orientation="vertical"
                          id="radix-«Raqg7jlb»"
                          className="flex !cursor-pointer accordionBtn text-left flex-1 sm:items-center justify-between text-[16px] max-md:text-[16px] font-semibold max-sm:text-sm !font-inter py-[28px] px-[35px] max-md:p-4 border-b border-b-transparent data-[state=open]:border-b-border transition-all [&[data-state=open]>svg]:rotate-180 [&[data-state=open]>svg]:text-[#1CE0C8]"
                          data-radix-collection-item=""
                        >
                          How is $CAT secured?
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 17"
                            className="h-4 w-4 max-md:size-3 my-auto"
                          >
                            <path
                              fill="currentColor"
                              d="M6.446 16.625V.898h3.568v15.727zm-6.08-6.08V6.978h15.728v3.569z"
                            ></path>
                          </svg>
                        </button>
                      </h3>
                      <div
                        data-state="closed"
                        id="radix-«R1aqg7jlb»"
                        role="region"
                        aria-labelledby="radix-«Raqg7jlb»"
                        data-orientation="vertical"
                        // style={{
                        //   "--radix-accordion-content-height":
                        //     "var(--radix-collapsible-content-height)",
                        //   "--radix-accordion-content-width":
                        //     "var(--radix-collapsible-content-width)",
                        // }}
                      ></div>
                    </div>
                  </div>
                  <div
                    data-aos="fade-up"
                    data-aos-delay="200"
                    data-orientation="vertical"
                  >
                    <div
                      data-state="closed"
                      data-orientation="vertical"
                      className="!bg-[#FFFFFF1A] w-full rounded-[12px] relative z-[999] max-md:rounded-[10px] [background-image:linear-gradient(180.79deg,rgba(36,45,58,0.3)_15.6%,rgba(15,237,190,0.2)_87.34%)] border border-[#283442] backdrop-blur-[90px] shadow-[0px_4px_10px_0px_#00FFDD_inset] data-[state=open]:border-border duration-300 ease-out hover:data-[state=closed]:opacity-70 hover:data-[state=open]:opacity-90 max-[900px]:border max-[900px]:border-[#30ddaf] max-[900px]:bg-[linear-gradient(191.79deg,_rgb(0_0_0)_15.6%,_rgb(29_84_73)_87.34%)] max-[900px]:shadow-[inset_0px_4px_20px_0px_#267068]"
                    >
                      <h3
                        data-orientation="vertical"
                        data-state="closed"
                        className="flex"
                      >
                        <button
                          type="button"
                          aria-controls="radix-«R1eqg7jlb»"
                          aria-expanded="false"
                          data-state="closed"
                          data-orientation="vertical"
                          id="radix-«Reqg7jlb»"
                          className="flex !cursor-pointer accordionBtn text-left flex-1 sm:items-center justify-between text-[16px] max-md:text-[16px] font-semibold max-sm:text-sm !font-inter py-[28px] px-[35px] max-md:p-4 border-b border-b-transparent data-[state=open]:border-b-border transition-all [&[data-state=open]>svg]:rotate-180 [&[data-state=open]>svg]:text-[#1CE0C8]"
                          data-radix-collection-item=""
                        >
                          How can I manage my funds?
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 17"
                            className="h-4 w-4 max-md:size-3 my-auto"
                          >
                            <path
                              fill="currentColor"
                              d="M6.446 16.625V.898h3.568v15.727zm-6.08-6.08V6.978h15.728v3.569z"
                            ></path>
                          </svg>
                        </button>
                      </h3>
                      <div
                        data-state="closed"
                        id="radix-«R1eqg7jlb»"
                        role="region"
                        aria-labelledby="radix-«Reqg7jlb»"
                        data-orientation="vertical"
                        // style={{
                        //   "--radix-accordion-content-height":
                        //     "var(--radix-collapsible-content-height)",
                        //   "--radix-accordion-content-width":
                        //     "var(--radix-collapsible-content-width)",
                        // }}
                      ></div>
                    </div>
                  </div>
                  <div
                    data-aos="fade-up"
                    data-aos-delay="300"
                    data-orientation="vertical"
                  >
                    <div
                      data-state="closed"
                      data-orientation="vertical"
                      className="!bg-[#FFFFFF1A] w-full rounded-[12px] relative z-[999] max-md:rounded-[10px] [background-image:linear-gradient(180.79deg,rgba(36,45,58,0.3)_15.6%,rgba(15,237,190,0.2)_87.34%)] border border-[#283442] backdrop-blur-[90px] shadow-[0px_4px_10px_0px_#00FFDD_inset] data-[state=open]:border-border duration-300 ease-out hover:data-[state=closed]:opacity-70 hover:data-[state=open]:opacity-90 max-[900px]:border max-[900px]:border-[#30ddaf] max-[900px]:bg-[linear-gradient(191.79deg,_rgb(0_0_0)_15.6%,_rgb(29_84_73)_87.34%)] max-[900px]:shadow-[inset_0px_4px_20px_0px_#267068]"
                    >
                      <h3
                        data-orientation="vertical"
                        data-state="closed"
                        className="flex"
                      >
                        <button
                          type="button"
                          aria-controls="radix-«R1iqg7jlb»"
                          aria-expanded="false"
                          data-state="closed"
                          data-orientation="vertical"
                          id="radix-«Riqg7jlb»"
                          className="flex !cursor-pointer accordionBtn text-left flex-1 sm:items-center justify-between text-[16px] max-md:text-[16px] font-semibold max-sm:text-sm !font-inter py-[28px] px-[35px] max-md:p-4 border-b border-b-transparent data-[state=open]:border-b-border transition-all [&[data-state=open]>svg]:rotate-180 [&[data-state=open]>svg]:text-[#1CE0C8]"
                          data-radix-collection-item=""
                        >
                          How is my staking reward calculated?
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 17"
                            className="h-4 w-4 max-md:size-3 my-auto"
                          >
                            <path
                              fill="currentColor"
                              d="M6.446 16.625V.898h3.568v15.727zm-6.08-6.08V6.978h15.728v3.569z"
                            ></path>
                          </svg>
                        </button>
                      </h3>
                      <div
                        data-state="closed"
                        id="radix-«R1iqg7jlb»"
                        role="region"
                        aria-labelledby="radix-«Riqg7jlb»"
                        data-orientation="vertical"
                        // style={{
                        //   "--radix-accordion-content-height":
                        //     "var(--radix-collapsible-content-height)",
                        //   "--radix-accordion-content-width":
                        //     "var(--radix-collapsible-content-width)",
                        // }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-state="inactive"
                data-orientation="horizontal"
                role="tabpanel"
                aria-labelledby="radix-«Rag7jlb»-trigger-presale"
                id="radix-«Rag7jlb»-content-presale"
                className="w-full ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              ></div>
              <div
                data-state="inactive"
                data-orientation="horizontal"
                role="tabpanel"
                aria-labelledby="radix-«Rag7jlb»-trigger-support"
                id="radix-«Rag7jlb»-content-support"
                className="w-full ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              ></div>
              <div
                data-state="inactive"
                data-orientation="horizontal"
                role="tabpanel"
                aria-labelledby="radix-«Rag7jlb»-trigger-rewards"
                id="radix-«Rag7jlb»-content-rewards"
                className="w-full ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
