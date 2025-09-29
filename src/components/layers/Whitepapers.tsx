import SectionDivider from "../common/SectionDivider";

export default function Whitepapers() {
  return (
    <div>
      <SectionDivider variant="dots" />
      <div
        className="pt-[55px] max-[900px]:pt-[40px] whitePaperBG scroll-mt-[40px] bg-gradient-to-b from-[rgba(255,136,0,0.02)] to-transparent"
        id="whitepaper"
      >
        <div className="container">
          <div className="flex gap-6 max-[1200px]:gap-5 justify-between max-[1200px]:flex-col-reverse max-[1200px]:items-center">
            <figure
              className="flex w-full max-w-[486px] max-[1200px]:max-w-[300px]"
              data-aos="fade-right"
              data-aos-delay={200}
            >
              <img
                alt="img"
                loading="lazy"
                width={486}
                height={672}
                decoding="async"
                data-nimg={1}
                className="mt-auto w-full h-auto object-contain"
                style={{ color: "transparent" }}
                src="/whitePaperImg.webp"
              />
            </figure>
            <div className="max-w-[582px] max-[1200px]:max-w-full w-full pb-[50px] max-md:pb-4">
              <div className="flex flex-col gap-2 mb-[30px] max-md:mb-5 ">
                <h2>Cat Whitepaper</h2>
                <p>
                  The blueprint behind the first AI-powered retail hedge fund.
                  Discover how $CAT combines AI-driven allocation, diversified
                  funds, and risk management into a transparent investment model
                  anyone can access.
                </p>
              </div>
              <ul className="flex flex-col gap-6">
                <li
                  className="flex !items-start gap-[12px]"
                  data-aos="fade-left"
                  data-aos-delay={600}
                >
                  <i className="inline-flex items-center justify-center flex-shrink-0 leading-[0] max-sm:size-[20px]">
                    <svg
                      width={28}
                      height={28}
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g filter="url(#filter0_i_439_23342)">
                        <path
                          d="M22.5009 4.5C17.7009 5.3 15.1676 2.5 14.5009 1C12.5019 1 10.5 3.5 9.5 4.5C8.5 5.5 5 4.5 4.50093 5C4.00186 5.5 4.50093 8.5 4.00093 10C3.50093 11.5 1.50093 12 1.00093 13.5C0.500931 15 3.00093 16 4.00093 16.5C5.00093 17 4.50093 20.5 4.50093 21.5C4.50093 22.5 4.50093 23.5 6.00093 23.5C7.50093 23.5 10.5009 24 11.5009 24.5C12.3009 24.9 13.5009 26.3333 14.0009 27C14.5009 26.6667 15.7009 25.7 16.5009 24.5C17.3009 23.3 20.8343 23.3333 22.5009 23.5C22.8343 23.3333 23.4009 22.8 23.0009 22C22.6009 21.2 23.5009 18.6667 24.0009 17.5C24.8343 16.8333 26.5009 15.1 26.5009 13.5C24.5009 12.5 23.5009 7.5 22.5009 4.5Z"
                          fill="#0F3C3C"
                        />
                      </g>
                      <path
                        d="M27.3191 12.3506L25.4095 10.441C24.9563 9.98777 24.5849 9.09103 24.5849 8.44948V5.74818C24.5849 4.46542 23.5356 3.4161 22.2514 3.41473H19.5501C18.9086 3.41473 18.0119 3.0434 17.5586 2.58977L15.6493 0.680143C14.7421 -0.226714 13.2567 -0.226714 12.3495 0.680143L10.4403 2.59079C9.98663 3.04402 9.08893 3.41576 8.44874 3.41576H5.74861C4.46584 3.41576 3.41516 4.46507 3.41516 5.74921V8.44804C3.41516 9.0896 3.04383 9.98627 2.59054 10.4396L0.680912 12.3502C-0.226971 13.2571 -0.226971 14.7418 0.680912 15.6507L2.59054 17.5604C3.0441 18.0139 3.41516 18.9114 3.41516 19.5519V22.2522C3.41516 23.5349 4.46584 24.5856 5.74861 24.5856H8.44888C9.09044 24.5856 9.98711 24.9569 10.4404 25.4102L12.3497 27.3199C13.2569 28.2267 14.7423 28.2267 15.6495 27.3199L17.5587 25.4102C18.0124 24.9567 18.9087 24.5856 19.5503 24.5856H22.2516C23.5357 24.5856 24.585 23.5349 24.585 22.2522V19.5519C24.585 18.9093 24.9567 18.0137 25.4096 17.5604L27.3193 15.6507C28.2256 14.7418 28.2256 13.2571 27.3191 12.3506ZM23.76 15.9108C22.8713 16.7973 22.2512 18.2964 22.2512 19.5522V22.2525H19.5499C18.2944 22.2525 16.7961 22.8724 15.9088 23.761L13.9992 25.6706L12.0896 23.761C11.2009 22.8723 9.70396 22.2525 8.44854 22.2525H5.74827V19.5522C5.74827 18.2964 5.12838 16.7995 4.23978 15.9109L2.33015 14.0002L4.23978 12.0896C5.12845 11.202 5.74827 9.70497 5.74827 8.44818V5.74934H8.44854C9.70396 5.74934 11.201 5.12844 12.0896 4.24085L13.9992 2.33021L15.9092 4.23983C16.7964 5.1285 18.2948 5.74832 19.5502 5.74832H22.2515V8.44961C22.2515 9.70504 22.8714 11.2024 23.7603 12.091L25.6692 14.0003L23.76 15.9108Z"
                        fill="#FF8800"
                      />
                      <path
                        d="M19.3482 8.75L12.1462 15.9506L8.64756 12.4516L6.99805 14.1015L12.1462 19.25L20.9981 10.3996L19.3482 8.75Z"
                        fill="#FF8800"
                      />
                      <defs>
                        <filter
                          id="filter0_i_439_23342"
                          x="0.935547"
                          y={1}
                          width="25.5645"
                          height={31}
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood
                            floodOpacity={0}
                            result="BackgroundImageFix"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="BackgroundImageFix"
                            result="shape"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset dy={5} />
                          <feGaussianBlur stdDeviation={4} />
                          <feComposite
                            in2="hardAlpha"
                            operator="arithmetic"
                            k2={-1}
                            k3={1}
                          />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0.0588235 0 0 0 0 0.929412 0 0 0 0 0.745098 0 0 0 1 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="shape"
                            result="effect1_innerShadow_439_23342"
                          />
                        </filter>
                      </defs>
                    </svg>
                  </i>
                  <div className="flex flex-col gap-[6px]">
                    <h3>AI Allocation Engine</h3>
                    <p className="text-[14px]">
                      Our proprietary models analyze markets in real-time,
                      rebalance sectors, and optimize exposure.
                    </p>
                  </div>
                </li>
                <li
                  className="flex !items-start gap-[12px]"
                  data-aos="fade-left"
                  data-aos-delay={700}
                >
                  <i className="inline-flex items-center justify-center flex-shrink-0 leading-[0] max-sm:size-[20px]">
                    <svg
                      width={28}
                      height={28}
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g filter="url(#filter0_i_439_23342)">
                        <path
                          d="M22.5009 4.5C17.7009 5.3 15.1676 2.5 14.5009 1C12.5019 1 10.5 3.5 9.5 4.5C8.5 5.5 5 4.5 4.50093 5C4.00186 5.5 4.50093 8.5 4.00093 10C3.50093 11.5 1.50093 12 1.00093 13.5C0.500931 15 3.00093 16 4.00093 16.5C5.00093 17 4.50093 20.5 4.50093 21.5C4.50093 22.5 4.50093 23.5 6.00093 23.5C7.50093 23.5 10.5009 24 11.5009 24.5C12.3009 24.9 13.5009 26.3333 14.0009 27C14.5009 26.6667 15.7009 25.7 16.5009 24.5C17.3009 23.3 20.8343 23.3333 22.5009 23.5C22.8343 23.3333 23.4009 22.8 23.0009 22C22.6009 21.2 23.5009 18.6667 24.0009 17.5C24.8343 16.8333 26.5009 15.1 26.5009 13.5C24.5009 12.5 23.5009 7.5 22.5009 4.5Z"
                          fill="#0F3C3C"
                        />
                      </g>
                      <path
                        d="M27.3191 12.3506L25.4095 10.441C24.9563 9.98777 24.5849 9.09103 24.5849 8.44948V5.74818C24.5849 4.46542 23.5356 3.4161 22.2514 3.41473H19.5501C18.9086 3.41473 18.0119 3.0434 17.5586 2.58977L15.6493 0.680143C14.7421 -0.226714 13.2567 -0.226714 12.3495 0.680143L10.4403 2.59079C9.98663 3.04402 9.08893 3.41576 8.44874 3.41576H5.74861C4.46584 3.41576 3.41516 4.46507 3.41516 5.74921V8.44804C3.41516 9.0896 3.04383 9.98627 2.59054 10.4396L0.680912 12.3502C-0.226971 13.2571 -0.226971 14.7418 0.680912 15.6507L2.59054 17.5604C3.0441 18.0139 3.41516 18.9114 3.41516 19.5519V22.2522C3.41516 23.5349 4.46584 24.5856 5.74861 24.5856H8.44888C9.09044 24.5856 9.98711 24.9569 10.4404 25.4102L12.3497 27.3199C13.2569 28.2267 14.7423 28.2267 15.6495 27.3199L17.5587 25.4102C18.0124 24.9567 18.9087 24.5856 19.5503 24.5856H22.2516C23.5357 24.5856 24.585 23.5349 24.585 22.2522V19.5519C24.585 18.9093 24.9567 18.0137 25.4096 17.5604L27.3193 15.6507C28.2256 14.7418 28.2256 13.2571 27.3191 12.3506ZM23.76 15.9108C22.8713 16.7973 22.2512 18.2964 22.2512 19.5522V22.2525H19.5499C18.2944 22.2525 16.7961 22.8724 15.9088 23.761L13.9992 25.6706L12.0896 23.761C11.2009 22.8723 9.70396 22.2525 8.44854 22.2525H5.74827V19.5522C5.74827 18.2964 5.12838 16.7995 4.23978 15.9109L2.33015 14.0002L4.23978 12.0896C5.12845 11.202 5.74827 9.70497 5.74827 8.44818V5.74934H8.44854C9.70396 5.74934 11.201 5.12844 12.0896 4.24085L13.9992 2.33021L15.9092 4.23983C16.7964 5.1285 18.2948 5.74832 19.5502 5.74832H22.2515V8.44961C22.2515 9.70504 22.8714 11.2024 23.7603 12.091L25.6692 14.0003L23.76 15.9108Z"
                        fill="#FF8800"
                      />
                      <path
                        d="M19.3482 8.75L12.1462 15.9506L8.64756 12.4516L6.99805 14.1015L12.1462 19.25L20.9981 10.3996L19.3482 8.75Z"
                        fill="#FF8800"
                      />
                      <defs>
                        <filter
                          id="filter0_i_439_23342"
                          x="0.935547"
                          y={1}
                          width="25.5645"
                          height={31}
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood
                            floodOpacity={0}
                            result="BackgroundImageFix"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="BackgroundImageFix"
                            result="shape"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset dy={5} />
                          <feGaussianBlur stdDeviation={4} />
                          <feComposite
                            in2="hardAlpha"
                            operator="arithmetic"
                            k2={-1}
                            k3={1}
                          />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0.0588235 0 0 0 0 0.929412 0 0 0 0 0.745098 0 0 0 1 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="shape"
                            result="effect1_innerShadow_439_23342"
                          />
                        </filter>
                      </defs>
                    </svg>
                  </i>
                  <div className="flex flex-col gap-[6px]">
                    <h3>Multi-Fund Strategy</h3>
                    <p className="text-[14px]">
                      Diversified funds, including AI Fund, BTC Fund, Mining,
                      and RWA, each target specific growth opportunities.
                    </p>
                  </div>
                </li>
                <li
                  className="flex !items-start gap-[12px]"
                  data-aos="fade-left"
                  data-aos-delay={800}
                >
                  <i className="inline-flex items-center justify-center flex-shrink-0 leading-[0] max-sm:size-[20px]">
                    <svg
                      width={28}
                      height={28}
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g filter="url(#filter0_i_439_23342)">
                        <path
                          d="M22.5009 4.5C17.7009 5.3 15.1676 2.5 14.5009 1C12.5019 1 10.5 3.5 9.5 4.5C8.5 5.5 5 4.5 4.50093 5C4.00186 5.5 4.50093 8.5 4.00093 10C3.50093 11.5 1.50093 12 1.00093 13.5C0.500931 15 3.00093 16 4.00093 16.5C5.00093 17 4.50093 20.5 4.50093 21.5C4.50093 22.5 4.50093 23.5 6.00093 23.5C7.50093 23.5 10.5009 24 11.5009 24.5C12.3009 24.9 13.5009 26.3333 14.0009 27C14.5009 26.6667 15.7009 25.7 16.5009 24.5C17.3009 23.3 20.8343 23.3333 22.5009 23.5C22.8343 23.3333 23.4009 22.8 23.0009 22C22.6009 21.2 23.5009 18.6667 24.0009 17.5C24.8343 16.8333 26.5009 15.1 26.5009 13.5C24.5009 12.5 23.5009 7.5 22.5009 4.5Z"
                          fill="#0F3C3C"
                        />
                      </g>
                      <path
                        d="M27.3191 12.3506L25.4095 10.441C24.9563 9.98777 24.5849 9.09103 24.5849 8.44948V5.74818C24.5849 4.46542 23.5356 3.4161 22.2514 3.41473H19.5501C18.9086 3.41473 18.0119 3.0434 17.5586 2.58977L15.6493 0.680143C14.7421 -0.226714 13.2567 -0.226714 12.3495 0.680143L10.4403 2.59079C9.98663 3.04402 9.08893 3.41576 8.44874 3.41576H5.74861C4.46584 3.41576 3.41516 4.46507 3.41516 5.74921V8.44804C3.41516 9.0896 3.04383 9.98627 2.59054 10.4396L0.680912 12.3502C-0.226971 13.2571 -0.226971 14.7418 0.680912 15.6507L2.59054 17.5604C3.0441 18.0139 3.41516 18.9114 3.41516 19.5519V22.2522C3.41516 23.5349 4.46584 24.5856 5.74861 24.5856H8.44888C9.09044 24.5856 9.98711 24.9569 10.4404 25.4102L12.3497 27.3199C13.2569 28.2267 14.7423 28.2267 15.6495 27.3199L17.5587 25.4102C18.0124 24.9567 18.9087 24.5856 19.5503 24.5856H22.2516C23.5357 24.5856 24.585 23.5349 24.585 22.2522V19.5519C24.585 18.9093 24.9567 18.0137 25.4096 17.5604L27.3193 15.6507C28.2256 14.7418 28.2256 13.2571 27.3191 12.3506ZM23.76 15.9108C22.8713 16.7973 22.2512 18.2964 22.2512 19.5522V22.2525H19.5499C18.2944 22.2525 16.7961 22.8724 15.9088 23.761L13.9992 25.6706L12.0896 23.761C11.2009 22.8723 9.70396 22.2525 8.44854 22.2525H5.74827V19.5522C5.74827 18.2964 5.12838 16.7995 4.23978 15.9109L2.33015 14.0002L4.23978 12.0896C5.12845 11.202 5.74827 9.70497 5.74827 8.44818V5.74934H8.44854C9.70396 5.74934 11.201 5.12844 12.0896 4.24085L13.9992 2.33021L15.9092 4.23983C16.7964 5.1285 18.2948 5.74832 19.5502 5.74832H22.2515V8.44961C22.2515 9.70504 22.8714 11.2024 23.7603 12.091L25.6692 14.0003L23.76 15.9108Z"
                        fill="#FF8800"
                      />
                      <path
                        d="M19.3482 8.75L12.1462 15.9506L8.64756 12.4516L6.99805 14.1015L12.1462 19.25L20.9981 10.3996L19.3482 8.75Z"
                        fill="#FF8800"
                      />
                      <defs>
                        <filter
                          id="filter0_i_439_23342"
                          x="0.935547"
                          y={1}
                          width="25.5645"
                          height={31}
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood
                            floodOpacity={0}
                            result="BackgroundImageFix"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="BackgroundImageFix"
                            result="shape"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset dy={5} />
                          <feGaussianBlur stdDeviation={4} />
                          <feComposite
                            in2="hardAlpha"
                            operator="arithmetic"
                            k2={-1}
                            k3={1}
                          />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0.0588235 0 0 0 0 0.929412 0 0 0 0 0.745098 0 0 0 1 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="shape"
                            result="effect1_innerShadow_439_23342"
                          />
                        </filter>
                      </defs>
                    </svg>
                  </i>
                  <div className="flex flex-col gap-[6px]">
                    <h3>Risk &amp; Drawdown Controls</h3>
                    <p className="text-[14px]">
                      Built-in guardrails, re-hedging protocols, and scenario
                      testing keep capital protected through volatility.
                    </p>
                  </div>
                </li>
                <li
                  className="flex !items-start gap-[12px]"
                  data-aos="fade-left"
                  data-aos-delay={900}
                >
                  <i className="inline-flex items-center justify-center flex-shrink-0 leading-[0] max-sm:size-[20px]">
                    <svg
                      width={28}
                      height={28}
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g filter="url(#filter0_i_439_23342)">
                        <path
                          d="M22.5009 4.5C17.7009 5.3 15.1676 2.5 14.5009 1C12.5019 1 10.5 3.5 9.5 4.5C8.5 5.5 5 4.5 4.50093 5C4.00186 5.5 4.50093 8.5 4.00093 10C3.50093 11.5 1.50093 12 1.00093 13.5C0.500931 15 3.00093 16 4.00093 16.5C5.00093 17 4.50093 20.5 4.50093 21.5C4.50093 22.5 4.50093 23.5 6.00093 23.5C7.50093 23.5 10.5009 24 11.5009 24.5C12.3009 24.9 13.5009 26.3333 14.0009 27C14.5009 26.6667 15.7009 25.7 16.5009 24.5C17.3009 23.3 20.8343 23.3333 22.5009 23.5C22.8343 23.3333 23.4009 22.8 23.0009 22C22.6009 21.2 23.5009 18.6667 24.0009 17.5C24.8343 16.8333 26.5009 15.1 26.5009 13.5C24.5009 12.5 23.5009 7.5 22.5009 4.5Z"
                          fill="#0F3C3C"
                        />
                      </g>
                      <path
                        d="M27.3191 12.3506L25.4095 10.441C24.9563 9.98777 24.5849 9.09103 24.5849 8.44948V5.74818C24.5849 4.46542 23.5356 3.4161 22.2514 3.41473H19.5501C18.9086 3.41473 18.0119 3.0434 17.5586 2.58977L15.6493 0.680143C14.7421 -0.226714 13.2567 -0.226714 12.3495 0.680143L10.4403 2.59079C9.98663 3.04402 9.08893 3.41576 8.44874 3.41576H5.74861C4.46584 3.41576 3.41516 4.46507 3.41516 5.74921V8.44804C3.41516 9.0896 3.04383 9.98627 2.59054 10.4396L0.680912 12.3502C-0.226971 13.2571 -0.226971 14.7418 0.680912 15.6507L2.59054 17.5604C3.0441 18.0139 3.41516 18.9114 3.41516 19.5519V22.2522C3.41516 23.5349 4.46584 24.5856 5.74861 24.5856H8.44888C9.09044 24.5856 9.98711 24.9569 10.4404 25.4102L12.3497 27.3199C13.2569 28.2267 14.7423 28.2267 15.6495 27.3199L17.5587 25.4102C18.0124 24.9567 18.9087 24.5856 19.5503 24.5856H22.2516C23.5357 24.5856 24.585 23.5349 24.585 22.2522V19.5519C24.585 18.9093 24.9567 18.0137 25.4096 17.5604L27.3193 15.6507C28.2256 14.7418 28.2256 13.2571 27.3191 12.3506ZM23.76 15.9108C22.8713 16.7973 22.2512 18.2964 22.2512 19.5522V22.2525H19.5499C18.2944 22.2525 16.7961 22.8724 15.9088 23.761L13.9992 25.6706L12.0896 23.761C11.2009 22.8723 9.70396 22.2525 8.44854 22.2525H5.74827V19.5522C5.74827 18.2964 5.12838 16.7995 4.23978 15.9109L2.33015 14.0002L4.23978 12.0896C5.12845 11.202 5.74827 9.70497 5.74827 8.44818V5.74934H8.44854C9.70396 5.74934 11.201 5.12844 12.0896 4.24085L13.9992 2.33021L15.9092 4.23983C16.7964 5.1285 18.2948 5.74832 19.5502 5.74832H22.2515V8.44961C22.2515 9.70504 22.8714 11.2024 23.7603 12.091L25.6692 14.0003L23.76 15.9108Z"
                        fill="#FF8800"
                      />
                      <path
                        d="M19.3482 8.75L12.1462 15.9506L8.64756 12.4516L6.99805 14.1015L12.1462 19.25L20.9981 10.3996L19.3482 8.75Z"
                        fill="#FF8800"
                      />
                      <defs>
                        <filter
                          id="filter0_i_439_23342"
                          x="0.935547"
                          y={1}
                          width="25.5645"
                          height={31}
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood
                            floodOpacity={0}
                            result="BackgroundImageFix"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="BackgroundImageFix"
                            result="shape"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset dy={5} />
                          <feGaussianBlur stdDeviation={4} />
                          <feComposite
                            in2="hardAlpha"
                            operator="arithmetic"
                            k2={-1}
                            k3={1}
                          />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0.0588235 0 0 0 0 0.929412 0 0 0 0 0.745098 0 0 0 1 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="shape"
                            result="effect1_innerShadow_439_23342"
                          />
                        </filter>
                      </defs>
                    </svg>
                  </i>
                  <div className="flex flex-col gap-[6px]">
                    <h3>Token Utility &amp; Rewards</h3>
                    <p className="text-[14px]">
                      $CAT powers staking, governance, and referral bonuses —
                      while rewarding early adopters with long-term value.
                    </p>
                  </div>
                </li>
              </ul>
              <div className="flex items-center gap-4 mt-[30px] max-sm:flex-col max-sm:[&>button]:w-full max-md:mt-4">
                <div className="button-wrapper ">
                  <button
                    className="h-[48px] min-w-[166px] font-medium font-ptSans flex items-center cursor-pointer transition duration-300 ease-in-out justify-center gap-2.5 border-[#ffffff72] !font-semibold max-sm:!text-[14px] max-sm:!h-[40px] max-sm:w-full !border-none buttonRadialBGBlue bg-[radial-gradient(24.83%_154.95%_at_14.43%_72.32%,_#13DCE3_0%,_#33FFD4_100%)] rounded-[60px] text-[#00070F] bg-[#FFFF00] hover:bg-none hover:border-[#FFFF00] max-[479px]:!shadow-none px-[50px]"
                    aria-label="button"
                  >
                    Access Whitepaper
                  </button>
                  <div className="button-bg bg-[linear-gradient(45.73deg,#13DCE3_25.78%,#33FFD4_50.23%)]" />
                </div>
                <div className="button-wrapper ">
                  <button
                    className="h-[48px] min-w-[166px] font-medium font-ptSans flex items-center cursor-pointer transition duration-300 ease-in-out justify-center gap-2.5 border-[#ffffff72] !font-semibold max-sm:!text-[14px] max-sm:!h-[40px] max-sm:w-full !border-none buttonRadialBGBlue bg-[radial-gradient(24.83%_154.95%_at_14.43%_72.32%,_#13DCE3_0%,_#33FFD4_100%)] rounded-[60px] text-[#00070F] bg-[#FFFF00] hover:bg-none hover:border-[#FFFF00] max-[479px]:!shadow-none px-[50px] max-xl:px-[30px] buttonRadialBGYellow"
                    aria-label="button"
                  >
                    Buy $CAT
                  </button>
                  <div className="button-bg bg-[linear-gradient(45.73deg,#eff869df_25.78%,#fdb100_50.23%)]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
