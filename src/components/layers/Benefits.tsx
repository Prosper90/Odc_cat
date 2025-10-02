import SectionDivider from "../common/SectionDivider";
import { useTranslation } from "react-i18next";

export default function Benefits() {
  const { t } = useTranslation("benefits");
  return (
    <>
      <SectionDivider variant="simple" />
      <div className="py-[70px] max-[1200px]:py-[60px] max-[900px]:py-[40px] relative comparisonTableBG bg-gradient-to-b from-[rgba(255,136,0,0.02)] to-transparent">
        <div className="container">
          <div className="text-center max-w-[1120px] mx-auto mb-6">
            <h2 className="font-bold text-white mb-[10px]">{t("title")}</h2>
            <p>{t("description")}</p>
          </div>
          <div className="relative shadow-[inset_0px_4px_34px_0px_#FF8800] rounded-[20px] max-sm:rounded-[10px] overflow-hidden overflow-x-auto">
            <div className="absolute inset-0 z-20 pointer-events-none max-[1200px]:hidden">
              <div
                className="absolute cursor-pointer top-0 bottom-0 pointer-events-auto shadow-[inset_0px_4px_34px_0px_#FF8800]  bg-[linear-gradient(174.51deg,rgba(58,45,36,0.3)9.58%,rgba(237,134,15,0.3)101.94%)] transition-all ease duration-500 opacity-0 hover:opacity-100"
                style={{ left: 0, width: "209.5px" }}
              />
              <div
                className="absolute cursor-pointer top-0 bottom-0 pointer-events-auto shadow-[inset_0px_4px_34px_0px_#FF8800]  bg-[linear-gradient(174.51deg,rgba(58,45,36,0.3)9.58%,rgba(237,134,15,0.3)101.94%)] transition-all ease duration-500 opacity-0 hover:opacity-100"
                style={{ left: 210, width: "129.275px" }}
              />
              <div
                className="absolute cursor-pointer top-0 bottom-0 pointer-events-auto shadow-[inset_0px_4px_34px_0px_#FF8800]  bg-[linear-gradient(174.51deg,rgba(58,45,36,0.3)9.58%,rgba(237,134,15,0.3)101.94%)] transition-all ease duration-500 opacity-0 hover:opacity-100"
                style={{ left: "338.775px", width: "173.963px" }}
              />
              <div
                className="absolute cursor-pointer top-0 bottom-0 pointer-events-auto shadow-[inset_0px_4px_34px_0px_#FF8800]  bg-[linear-gradient(174.51deg,rgba(58,45,36,0.3)9.58%,rgba(237,134,15,0.3)101.94%)] transition-all ease duration-500 opacity-0 hover:opacity-100"
                style={{ left: "512.738px", width: "124.4px" }}
              />
              <div
                className="absolute cursor-pointer top-0 bottom-0 pointer-events-auto shadow-[inset_0px_4px_34px_0px_#FF8800]  bg-[linear-gradient(174.51deg,rgba(58,45,36,0.3)9.58%,rgba(237,134,15,0.3)101.94%)] transition-all ease duration-500 opacity-0 hover:opacity-100"
                style={{ left: "637.137px", width: "147.387px" }}
              />
              <div
                className="absolute cursor-pointer top-0 bottom-0 pointer-events-auto shadow-[inset_0px_4px_34px_0px_#FF8800]  bg-[linear-gradient(174.51deg,rgba(58,45,36,0.3)9.58%,rgba(237,134,15,0.3)101.94%)] transition-all ease duration-500 opacity-0 hover:opacity-100"
                style={{ left: "784.525px", width: "145.812px" }}
              />
              <div
                className="absolute cursor-pointer top-0 bottom-0 pointer-events-auto shadow-[inset_0px_4px_34px_0px_#FF8800]  bg-[linear-gradient(174.51deg,rgba(58,45,36,0.3)9.58%,rgba(237,134,15,0.3)101.94%)] transition-all ease duration-500 opacity-0 hover:opacity-100"
                style={{ left: "930.338px", width: "143.9px" }}
              />
            </div>
            <table className="relative z-10 w-full border-collapse bg-[linear-gradient(174.51deg,rgba(58,45,36,0.3)9.58%,rgba(237,134,15,0.6)101.94%)] max-[900px]:!bg-[linear-gradient(191.79deg,_rgb(26_22_18)_15.6%,_rgb(29_84_73_/_11%)_87.34%)]  min-w-[1000px] max-sm:min-w-[500px]">
              <thead>
                <tr>
                  <th className="py-[25px] max-sm:!text-[10px] max-sm:font-normal max-sm:p-2 border-r border-r-[#443828] px-6 transition-all duration-300 ease sticky left-0 bg-transparent">
                    {t("tableHeader")}
                  </th>
                  <th
                    className="py-[25px] max-sm:p-2 border-r border-r-[#443828] last:border-r-0 px-6 sticky"
                    style={{ left: 210 }}
                  >
                    <div className="flex items-center justify-center gap-4 max-sm:gap-1">
                      <img
                        alt="$CAT logo"
                        loading="lazy"
                        width={33}
                        height={24}
                        decoding="async"
                        data-nimg={1}
                        style={{ color: "transparent" }}
                        srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FunilIcon.2bc6174a.png&w=48&q=75&dpl=dpl_EWAS8ZF1SPz1gvd3Hgrceu9TqG7t 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FunilIcon.2bc6174a.png&w=96&q=75&dpl=dpl_EWAS8ZF1SPz1gvd3Hgrceu9TqG7t 2x"
                        src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FunilIcon.2bc6174a.png&w=96&q=75&dpl=dpl_EWAS8ZF1SPz1gvd3Hgrceu9TqG7t"
                      />
                      <p className="text-[20px] max-sm:!text-[10px] max-sm:font-normal font-bold max-md:text-[16px] max-sm:hidden ">
                        $CAT
                      </p>
                    </div>
                  </th>
                  <th
                    className="py-[25px] max-sm:p-2 border-r border-r-[#443828] last:border-r-0 px-6"
                    style={{ left: 210 }}
                  >
                    <div className="flex items-center justify-center gap-4 max-sm:gap-1">
                      <img
                        alt="Robinhood logo"
                        loading="lazy"
                        width={33}
                        height={24}
                        decoding="async"
                        data-nimg={1}
                        style={{ color: "transparent" }}
                        srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FrobinHoodLogo.519c4c24.png&w=48&q=75&dpl=dpl_EWAS8ZF1SPz1gvd3Hgrceu9TqG7t 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FrobinHoodLogo.519c4c24.png&w=96&q=75&dpl=dpl_EWAS8ZF1SPz1gvd3Hgrceu9TqG7t 2x"
                        src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FrobinHoodLogo.519c4c24.png&w=96&q=75&dpl=dpl_EWAS8ZF1SPz1gvd3Hgrceu9TqG7t"
                      />
                      <p className="text-[20px] max-sm:!text-[10px] max-sm:font-normal font-bold max-md:text-[16px] max-sm:hidden ">
                        Robinhood
                      </p>
                    </div>
                  </th>
                  <th
                    className="py-[25px] max-sm:p-2 border-r border-r-[#443828] last:border-r-0 px-6"
                    style={{ left: 210 }}
                  >
                    <div className="flex items-center justify-center gap-4 max-sm:gap-1">
                      <img
                        alt="BlackRock logo"
                        loading="lazy"
                        width={100}
                        height={24}
                        decoding="async"
                        data-nimg={1}
                        style={{ color: "transparent" }}
                        srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FblackRockLogo.5947f4db.png&w=128&q=75&dpl=dpl_EWAS8ZF1SPz1gvd3Hgrceu9TqG7t 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FblackRockLogo.5947f4db.png&w=256&q=75&dpl=dpl_EWAS8ZF1SPz1gvd3Hgrceu9TqG7t 2x"
                        src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FblackRockLogo.5947f4db.png&w=256&q=75&dpl=dpl_EWAS8ZF1SPz1gvd3Hgrceu9TqG7t"
                      />
                      <p className="text-[20px] max-sm:!text-[10px] max-sm:font-normal font-bold max-md:text-[16px] max-sm:hidden hidden">
                        BlackRock
                      </p>
                    </div>
                  </th>
                  <th
                    className="py-[25px] max-sm:p-2 border-r border-r-[#443828] last:border-r-0 px-6"
                    style={{ left: 210 }}
                  >
                    <div className="flex items-center justify-center gap-4 max-sm:gap-1">
                      <img
                        alt="Binance logo"
                        loading="lazy"
                        width={33}
                        height={24}
                        decoding="async"
                        data-nimg={1}
                        style={{ color: "transparent" }}
                        srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FbinanceLogo.c0f6e6bd.png&w=48&q=75&dpl=dpl_EWAS8ZF1SPz1gvd3Hgrceu9TqG7t 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FbinanceLogo.c0f6e6bd.png&w=96&q=75&dpl=dpl_EWAS8ZF1SPz1gvd3Hgrceu9TqG7t 2x"
                        src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FbinanceLogo.c0f6e6bd.png&w=96&q=75&dpl=dpl_EWAS8ZF1SPz1gvd3Hgrceu9TqG7t"
                      />
                      <p className="text-[20px] max-sm:!text-[10px] max-sm:font-normal font-bold max-md:text-[16px] max-sm:hidden ">
                        Binance
                      </p>
                    </div>
                  </th>
                  <th
                    className="py-[25px] max-sm:p-2 border-r border-r-[#443828] last:border-r-0 px-6"
                    style={{ left: 210 }}
                  >
                    <div className="flex items-center justify-center gap-4 max-sm:gap-1">
                      <img
                        alt="Fidelity logo"
                        loading="lazy"
                        width={33}
                        height={24}
                        decoding="async"
                        data-nimg={1}
                        style={{ color: "transparent" }}
                        srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffidlogo.79f4ad84.png&w=48&q=75&dpl=dpl_EWAS8ZF1SPz1gvd3Hgrceu9TqG7t 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffidlogo.79f4ad84.png&w=96&q=75&dpl=dpl_EWAS8ZF1SPz1gvd3Hgrceu9TqG7t 2x"
                        src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffidlogo.79f4ad84.png&w=96&q=75&dpl=dpl_EWAS8ZF1SPz1gvd3Hgrceu9TqG7t"
                      />
                      <p className="text-[20px] max-sm:!text-[10px] max-sm:font-normal font-bold max-md:text-[16px] max-sm:hidden ">
                        Fidelity
                      </p>
                    </div>
                  </th>
                  <th
                    className="py-[25px] max-sm:p-2 border-r border-r-[#443828] last:border-r-0 px-6"
                    style={{ left: 210 }}
                  >
                    <div className="flex items-center justify-center gap-4 max-sm:gap-1">
                      <img
                        alt="Vanguard logo"
                        loading="lazy"
                        width={100}
                        height={24}
                        decoding="async"
                        data-nimg={1}
                        style={{ color: "transparent" }}
                        srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FvanGaurdLogo.b5cfb2cb.png&w=128&q=75&dpl=dpl_EWAS8ZF1SPz1gvd3Hgrceu9TqG7t 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FvanGaurdLogo.b5cfb2cb.png&w=256&q=75&dpl=dpl_EWAS8ZF1SPz1gvd3Hgrceu9TqG7t 2x"
                        src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FvanGaurdLogo.b5cfb2cb.png&w=256&q=75&dpl=dpl_EWAS8ZF1SPz1gvd3Hgrceu9TqG7t"
                      />
                      <p className="text-[20px] max-sm:!text-[10px] max-sm:font-normal font-bold max-md:text-[16px] max-sm:hidden hidden">
                        Vanguard
                      </p>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  className="last:[&>td]:border-b-0"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  <td className="border border-[#443828] max-sm:!w-[10%] border-l-0 px-6 py-4 max-md:p-2 first:sticky left-0 transition-all duration-300 ease first:bg-transparent">
                    <div className="flex items-center gap-3">
                      <i className="inline-flex items-center justify-center leading-[0] flex-shrink-0 max-md:size-[30px] max-sm:hidden">
                        <svg
                          width={35}
                          height={36}
                          viewBox="0 0 35 36"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g filter="url(#filter0_i_422_23160)">
                            <path
                              d="M32.1634 1H12.9158C11.816 1.36662 11.541 2.98586 11.541 3.74965V8.79067C12.3048 9.09618 13.924 9.70721 14.2907 9.70721C14.6573 9.70721 15.6655 9.09618 16.1238 8.79067L16.582 9.70721C16.2765 10.1655 15.5738 11.5403 15.2072 13.3734C16.3071 14.1066 15.6655 15.8175 15.2072 16.5813L20.7065 22.5389L21.1648 35.3706C24.0672 35.5233 30.2386 35.7372 31.7051 35.3706C33.1716 35.004 33.8437 33.3847 33.9965 33.0792V2.37482C33.9965 1.64158 32.7744 1.15276 32.1634 1Z"
                              fill="#103539"
                            />
                          </g>
                          <path
                            d="M11.5437 6.00691V3.19937C11.5437 1.98468 12.5284 1 13.7431 1H31.8015C33.0162 1 34.0009 1.98468 34.0009 3.19937V10.155M12.9824 9.09155C12.5603 8.79738 12.0582 8.63967 11.5437 8.63967C11.0292 8.63967 10.5271 8.79738 10.105 9.09155C9.75335 9.33663 9.34494 9.48783 8.91849 9.5308C8.49203 9.57376 8.06167 9.50707 7.66822 9.33705L7.2623 9.16162C6.7569 8.94321 6.26418 9.49344 6.53671 9.97176L8.4843 13.3897H14.603L16.5506 9.97183C16.8232 9.49351 16.3304 8.94328 15.825 9.16169L15.4191 9.33712C15.0256 9.50708 14.5953 9.57373 14.1688 9.53075C13.7424 9.48778 13.334 9.3366 12.9824 9.09155Z"
                            stroke="#FF8800"
                            strokeWidth="1.5"
                            strokeMiterlimit={10}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12.3383 23.4603C12.3383 23.4603 11.8851 23.0422 11.1865 23.2527C10.545 23.446 10.3857 24.3237 10.8216 24.6656C11.0719 24.8619 11.4486 25.0233 11.9562 25.2027C13.0922 25.6043 12.6723 27.2064 11.5167 27.2141C11.0657 27.2171 10.8549 27.1885 10.4587 26.9293M11.5166 27.2142V27.9673M11.5166 22.4843V23.1935M14.6658 15.9243H8.41811C7.76655 15.9243 7.23828 15.3961 7.23828 14.7445V14.5695C7.23828 13.9179 7.76648 13.3896 8.41811 13.3896H14.6658C15.3174 13.3896 15.8457 13.9178 15.8457 14.5695V14.7445C15.8457 15.3961 15.3175 15.9243 14.6658 15.9243Z"
                            stroke="#FF8800"
                            strokeWidth="1.5"
                            strokeMiterlimit={10}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M11.5427 29.8388C14.0904 29.8388 16.1557 27.7735 16.1557 25.2258C16.1557 22.6781 14.0904 20.6128 11.5427 20.6128C8.995 20.6128 6.92969 22.6781 6.92969 25.2258C6.92969 27.7735 8.995 29.8388 11.5427 29.8388Z"
                            stroke="#FF8800"
                            strokeWidth="1.5"
                            strokeMiterlimit={10}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M20.8815 23.3856C18.761 19.1419 14.5783 15.9243 14.5783 15.9243H8.50556C8.50556 15.9243 1 21.6982 1 27.9777C1 28.0154 1.00014 28.053 1.00034 28.0904C1.02286 31.8651 4.09084 34.9122 7.86559 34.9122H11.9223"
                            stroke="#FF8800"
                            strokeWidth="1.5"
                            strokeMiterlimit={10}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M13.4743 33.7383V34.8011M16.0756 33.7383V34.8011M18.6768 33.7383V34.8011M19.8581 34.9101H12.293C11.7278 34.9101 11.2695 34.4518 11.2695 33.8866V32.7349C11.2695 32.1697 11.7278 31.7114 12.293 31.7114H19.8582C20.4234 31.7114 20.8817 32.1697 20.8817 32.7349V33.8866C20.8816 34.4519 20.4234 34.9101 19.8581 34.9101Z"
                            stroke="#FF8800"
                            strokeWidth="1.5"
                            strokeMiterlimit={10}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M21.9044 31.7117C21.3391 31.7117 20.8809 32.17 20.8809 32.7352V33.8868C20.8809 34.4521 21.3391 34.9103 21.9044 34.9103H29.4695C30.0347 34.9103 30.493 34.4522 30.493 33.8868V32.7352C30.493 32.17 30.0347 31.7117 29.4695 31.7117M21.9044 31.7117H29.4695M21.9044 31.7117C21.3391 31.7117 20.8809 31.2534 20.8809 30.6882V29.5365C20.8809 28.9713 21.3391 28.513 21.9044 28.513H29.4695C30.0347 28.513 30.493 28.9713 30.493 29.5365V30.6882C30.493 31.2534 30.0347 31.7117 29.4695 31.7117M29.4695 28.5038H21.9044C21.3391 28.5038 20.8809 28.0456 20.8809 27.4803V26.3287C20.8809 25.7634 21.3391 25.3052 21.9044 25.3052H29.4695C30.0347 25.3052 30.493 25.7634 30.493 26.3287V27.4803C30.493 28.0456 30.0347 28.5038 29.4695 28.5038Z"
                            stroke="#FF8800"
                            strokeWidth="1.5"
                            strokeMiterlimit={10}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M21.9044 22.1152C21.3392 22.1152 20.8809 22.5735 20.8809 23.1387V24.2904C20.8809 24.8556 21.3392 25.3139 21.9044 25.3139H29.4696C30.0348 25.3139 30.4931 24.8556 30.4931 24.2904V23.1387C30.4931 22.5735 30.0348 22.1152 29.4696 22.1152M21.9044 22.1152H29.4696M21.9044 22.1152C21.3392 22.1152 20.8809 21.657 20.8809 21.0917V19.94C20.8809 19.3748 21.3392 18.9165 21.9044 18.9165H29.4696C30.0348 18.9165 30.4931 19.3748 30.4931 19.94V21.0917C30.4931 21.657 30.0348 22.1152 29.4696 22.1152M23.0858 20.9014V21.9642M25.687 20.9014V21.9642M28.2883 20.9014V21.9642M23.0858 24.171V25.2339M25.687 24.171V25.2339M28.2883 24.171V25.2339M23.0858 27.4406V28.5034M25.687 27.4406V28.5034M28.2883 27.4406V28.5034M23.0858 30.6485V31.7113M25.687 30.6485V31.7113M28.2883 30.6485V31.7113M23.0858 33.7381V34.801M25.687 33.7381V34.801M28.2883 33.7381V34.801M33.9987 12.543V32.7125C33.9987 33.9272 33.014 34.9118 31.7993 34.9118H29.3933M30.8805 10.0419H19.3789M30.8805 12.8938H19.3789M30.8805 15.7457H23.0858M29.857 7.13251H20.9883C20.423 7.13251 19.9648 6.67425 19.9648 6.109V4.95026C19.9648 4.38501 20.423 3.92676 20.9883 3.92676H29.857C30.4222 3.92676 30.8805 4.38501 30.8805 4.95026V6.109C30.8805 6.67425 30.4222 7.13251 29.857 7.13251Z"
                            stroke="#FF8800"
                            strokeWidth="1.5"
                            strokeMiterlimit={10}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <defs>
                            <filter
                              id="filter0_i_422_23160"
                              x="11.541"
                              y={1}
                              width="22.4551"
                              height="38.5732"
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
                              <feOffset dy={4} />
                              <feGaussianBlur stdDeviation="3.5" />
                              <feComposite
                                in2="hardAlpha"
                                operator="arithmetic"
                                k2={-1}
                                k3={1}
                              />
                              <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 1 0 0 0 0 0.866667 0 0 0 1 0"
                              />
                              <feBlend
                                mode="normal"
                                in2="shape"
                                result="effect1_innerShadow_422_23160"
                              />
                            </filter>
                          </defs>
                        </svg>
                      </i>
                      <p className="font-semibold text-white max-md:text-[14px] max-sm:!text-[10px] max-sm:font-normal">
                        AI-Powered Allocation
                      </p>
                    </div>
                  </td>
                  <td
                    className="border border-[#443828] px-[10px] py-[14px] max-md:p-2 last:border-r-0 align-middle sticky"
                    style={{ left: 210 }}
                  >
                    <div className="flex items-start gap-[7px] max-sm:justify-center">
                      <i className="inline-flex items-center justify-center leading-[0] flex-shrink-0">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g filter="url(#filter0_i_422_23221)">
                            <path
                              d="M16.0718 3.21387C12.6432 3.7853 10.8337 1.7853 10.3575 0.713867C8.92962 0.713867 7.49972 2.49958 6.78544 3.21387C6.07115 3.92815 3.57115 3.21387 3.21467 3.57101C2.85819 3.92815 3.21467 6.07101 2.85753 7.14244C2.50039 8.21387 1.07181 8.57101 0.714672 9.64244C0.357529 10.7139 2.14324 11.4282 2.85753 11.7853C3.57181 12.1424 3.21467 14.6424 3.21467 15.3567C3.21467 16.071 3.21467 16.7853 4.2861 16.7853C5.35753 16.7853 7.50039 17.1424 8.21467 17.4996C8.7861 17.7853 9.64324 18.8091 10.0004 19.2853C10.3575 19.0472 11.2147 18.3567 11.7861 17.4996C12.3575 16.6424 14.8813 16.6663 16.0718 16.7853C16.3099 16.6663 16.7147 16.2853 16.429 15.7139C16.1432 15.1424 16.7861 13.3329 17.1432 12.4996C17.7385 12.0234 18.929 10.7853 18.929 9.64244C17.5004 8.92815 16.7861 5.35672 16.0718 3.21387Z"
                              fill="#0F3C3C"
                            />
                          </g>
                          <path
                            d="M19.5137 8.82187L18.1496 7.45785C17.8259 7.13412 17.5606 6.49359 17.5606 6.03534V4.10584C17.5606 3.18958 16.8111 2.44007 15.8939 2.43909H13.9644C13.5061 2.43909 12.8656 2.17386 12.5419 1.84983L11.1781 0.485817C10.5301 -0.161939 9.4691 -0.161939 8.8211 0.485817L7.45733 1.85057C7.13331 2.1743 6.49209 2.43983 6.03482 2.43983H4.10615C3.18989 2.43983 2.4394 3.18934 2.4394 4.10658V6.03432C2.4394 6.49257 2.17416 7.13305 1.85038 7.45683L0.486366 8.82158C-0.162122 9.46933 -0.162122 10.5298 0.486366 11.1791L1.85038 12.5431C2.17436 12.8671 2.4394 13.5081 2.4394 13.9656V15.8944C2.4394 16.8107 3.18989 17.5612 4.10615 17.5612H6.03491C6.49317 17.5612 7.13365 17.8264 7.45743 18.1502L8.8212 19.5142C9.4692 20.1619 10.5302 20.1619 11.1782 19.5142L12.542 18.1502C12.866 17.8262 13.5062 17.5612 13.9645 17.5612H15.894C16.8112 17.5612 17.5607 16.8107 17.5607 15.8944V13.9656C17.5607 13.5066 17.8262 12.8669 18.1497 12.5431L19.5138 11.1791C20.1612 10.5299 20.1612 9.46938 19.5137 8.82187ZM16.9714 11.3648C16.3366 11.9981 15.8937 13.0689 15.8937 13.9659V15.8946H13.9642C13.0675 15.8946 11.9972 16.3374 11.3634 16.9721L9.99943 18.3362L8.63541 16.9721C8.00064 16.3374 6.9314 15.8946 6.03467 15.8946H4.10591V13.9659C4.10591 13.0689 3.66313 11.9996 3.02841 11.3649L1.6644 10.0001L3.02841 8.6354C3.66318 8.00141 4.10591 6.93212 4.10591 6.03441V4.10667H6.03467C6.9314 4.10667 8.00069 3.66317 8.63541 3.02918L9.99943 1.66443L11.3637 3.02845C11.9974 3.66322 13.0677 4.10594 13.9644 4.10594H15.8939V6.03544C15.8939 6.93217 16.3367 8.0017 16.9717 8.63642L18.3351 10.0002L16.9714 11.3648Z"
                            fill="#FF8800"
                          />
                          <path
                            d="M13.8196 6.25L8.6753 11.3933L6.17627 8.894L4.99805 10.0725L8.6753 13.75L14.9981 7.42827L13.8196 6.25Z"
                            fill="#FF8800"
                          />
                          <defs>
                            <filter
                              id="filter0_i_422_23221"
                              x="0.667969"
                              y="0.713867"
                              width="18.2617"
                              height="23.5713"
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
                                result="effect1_innerShadow_422_23221"
                              />
                            </filter>
                          </defs>
                        </svg>
                      </i>
                      <p className="text-[12px] text-white max-sm:hidden">
                        Yes (AI allocation across funds){/* */}{" "}
                      </p>
                    </div>
                  </td>
                  <td
                    className="border border-[#443828] px-[10px] py-[14px] max-md:p-2 last:border-r-0 align-middle"
                    style={{ left: 210 }}
                  >
                    <div className="flex items-start gap-[7px] max-sm:justify-center">
                      <i className="inline-flex items-center justify-center leading-[0] flex-shrink-0">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_654_970)">
                            <g filter="url(#filter0_i_654_970)">
                              <circle
                                cx="10.0006"
                                cy="10.0001"
                                r="9.28571"
                                fill="#0F3C3C"
                              />
                            </g>
                            <path
                              d="M10 0C4.47297 0 0 4.47254 0 10C0 15.5271 4.47254 20 10 20C15.527 20 20 15.5275 20 10C20 4.47293 15.5275 0 10 0ZM10 18.4375C5.33656 18.4375 1.5625 14.6638 1.5625 10C1.5625 5.33652 5.33621 1.5625 10 1.5625C14.6634 1.5625 18.4375 5.33621 18.4375 10C18.4375 14.6635 14.6638 18.4375 10 18.4375Z"
                              fill="#F30E11"
                            />
                            <path
                              d="M13.4211 12.3163L11.1046 9.99978L13.4211 7.68329C13.7262 7.37821 13.7262 6.88356 13.4212 6.57845C13.116 6.27333 12.6214 6.27337 12.3163 6.57845L9.9998 8.89493L7.68327 6.57845C7.37823 6.27333 6.88351 6.27333 6.57843 6.57845C6.27335 6.88356 6.27335 7.37821 6.57847 7.68329L8.89495 9.99978L6.57847 12.3163C6.27335 12.6214 6.27331 13.116 6.57843 13.4211C6.88362 13.7263 7.37827 13.7261 7.68327 13.4211L9.9998 11.1046L12.3163 13.4211C12.6213 13.7262 13.116 13.7262 13.4212 13.4211C13.7263 13.116 13.7262 12.6213 13.4211 12.3163Z"
                              fill="#F30E11"
                            />
                          </g>
                          <defs>
                            <filter
                              id="filter0_i_654_970"
                              x="0.714844"
                              y="0.714355"
                              width="18.5723"
                              height="23.5713"
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
                                values="0 0 0 0 1 0 0 0 0 0.0509804 0 0 0 0 0.65098 0 0 0 1 0"
                              />
                              <feBlend
                                mode="normal"
                                in2="shape"
                                result="effect1_innerShadow_654_970"
                              />
                            </filter>
                            <clipPath id="clip0_654_970">
                              <rect width={20} height={20} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </i>
                      <p className="text-[12px] text-white max-sm:hidden">
                        Manual trading only{/* */}{" "}
                      </p>
                    </div>
                  </td>
                  <td
                    className="border border-[#443828] px-[10px] py-[14px] max-md:p-2 last:border-r-0 align-middle"
                    style={{ left: 210 }}
                  >
                    <div className="flex items-start gap-[7px] max-sm:justify-center">
                      <i className="inline-flex items-center justify-center leading-[0] flex-shrink-0">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_654_978)">
                            <g filter="url(#filter0_i_654_978)">
                              <circle
                                cx="10.0006"
                                cy="10.0001"
                                r="9.28571"
                                fill="#0F3C3C"
                              />
                            </g>
                            <path
                              d="M10 0C4.47297 0 0 4.47254 0 10C0 15.5271 4.47254 20 10 20C15.527 20 20 15.5275 20 10C20 4.47293 15.5275 0 10 0ZM10 18.4375C5.33656 18.4375 1.5625 14.6638 1.5625 10C1.5625 5.33652 5.33621 1.5625 10 1.5625C14.6634 1.5625 18.4375 5.33621 18.4375 10C18.4375 14.6635 14.6638 18.4375 10 18.4375Z"
                              fill="#FFFF00"
                            />
                          </g>
                          <defs>
                            <filter
                              id="filter0_i_654_978"
                              x="0.714844"
                              y="0.714355"
                              width="18.5723"
                              height="23.5713"
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
                                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 0 0 0 0 1 0"
                              />
                              <feBlend
                                mode="normal"
                                in2="shape"
                                result="effect1_innerShadow_654_978"
                              />
                            </filter>
                            <clipPath id="clip0_654_978">
                              <rect width={20} height={20} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </i>
                      <p className="text-[12px] text-white max-sm:hidden">
                        Institutional AI, not retail-accessible{/* */}{" "}
                      </p>
                    </div>
                  </td>
                  <td
                    className="border border-[#443828] px-[10px] py-[14px] max-md:p-2 last:border-r-0 align-middle"
                    style={{ left: 210 }}
                  >
                    <div className="flex items-start gap-[7px] max-sm:justify-center">
                      <i className="inline-flex items-center justify-center leading-[0] flex-shrink-0">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_654_970)">
                            <g filter="url(#filter0_i_654_970)">
                              <circle
                                cx="10.0006"
                                cy="10.0001"
                                r="9.28571"
                                fill="#0F3C3C"
                              />
                            </g>
                            <path
                              d="M10 0C4.47297 0 0 4.47254 0 10C0 15.5271 4.47254 20 10 20C15.527 20 20 15.5275 20 10C20 4.47293 15.5275 0 10 0ZM10 18.4375C5.33656 18.4375 1.5625 14.6638 1.5625 10C1.5625 5.33652 5.33621 1.5625 10 1.5625C14.6634 1.5625 18.4375 5.33621 18.4375 10C18.4375 14.6635 14.6638 18.4375 10 18.4375Z"
                              fill="#F30E11"
                            />
                            <path
                              d="M13.4211 12.3163L11.1046 9.99978L13.4211 7.68329C13.7262 7.37821 13.7262 6.88356 13.4212 6.57845C13.116 6.27333 12.6214 6.27337 12.3163 6.57845L9.9998 8.89493L7.68327 6.57845C7.37823 6.27333 6.88351 6.27333 6.57843 6.57845C6.27335 6.88356 6.27335 7.37821 6.57847 7.68329L8.89495 9.99978L6.57847 12.3163C6.27335 12.6214 6.27331 13.116 6.57843 13.4211C6.88362 13.7263 7.37827 13.7261 7.68327 13.4211L9.9998 11.1046L12.3163 13.4211C12.6213 13.7262 13.116 13.7262 13.4212 13.4211C13.7263 13.116 13.7262 12.6213 13.4211 12.3163Z"
                              fill="#F30E11"
                            />
                          </g>
                          <defs>
                            <filter
                              id="filter0_i_654_970"
                              x="0.714844"
                              y="0.714355"
                              width="18.5723"
                              height="23.5713"
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
                                values="0 0 0 0 1 0 0 0 0 0.0509804 0 0 0 0 0.65098 0 0 0 1 0"
                              />
                              <feBlend
                                mode="normal"
                                in2="shape"
                                result="effect1_innerShadow_654_970"
                              />
                            </filter>
                            <clipPath id="clip0_654_970">
                              <rect width={20} height={20} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </i>
                      <p className="text-[12px] text-white max-sm:hidden">
                        User-driven trading, no AI fund allocation{/* */}{" "}
                      </p>
                    </div>
                  </td>
                  <td
                    className="border border-[#443828] px-[10px] py-[14px] max-md:p-2 last:border-r-0 align-middle"
                    style={{ left: 210 }}
                  >
                    <div className="flex items-start gap-[7px] max-sm:justify-center">
                      <i className="inline-flex items-center justify-center leading-[0] flex-shrink-0">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_654_978)">
                            <g filter="url(#filter0_i_654_978)">
                              <circle
                                cx="10.0006"
                                cy="10.0001"
                                r="9.28571"
                                fill="#0F3C3C"
                              />
                            </g>
                            <path
                              d="M10 0C4.47297 0 0 4.47254 0 10C0 15.5271 4.47254 20 10 20C15.527 20 20 15.5275 20 10C20 4.47293 15.5275 0 10 0ZM10 18.4375C5.33656 18.4375 1.5625 14.6638 1.5625 10C1.5625 5.33652 5.33621 1.5625 10 1.5625C14.6634 1.5625 18.4375 5.33621 18.4375 10C18.4375 14.6635 14.6638 18.4375 10 18.4375Z"
                              fill="#FFFF00"
                            />
                          </g>
                          <defs>
                            <filter
                              id="filter0_i_654_978"
                              x="0.714844"
                              y="0.714355"
                              width="18.5723"
                              height="23.5713"
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
                                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 0 0 0 0 1 0"
                              />
                              <feBlend
                                mode="normal"
                                in2="shape"
                                result="effect1_innerShadow_654_978"
                              />
                            </filter>
                            <clipPath id="clip0_654_978">
                              <rect width={20} height={20} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </i>
                      <p className="text-[12px] text-white max-sm:hidden">
                        Limited AI-driven ETFs, not crypto-native{/* */}{" "}
                      </p>
                    </div>
                  </td>
                  <td
                    className="border border-[#443828] px-[10px] py-[14px] max-md:p-2 last:border-r-0 align-middle"
                    style={{ left: 210 }}
                  >
                    <div className="flex items-start gap-[7px] max-sm:justify-center">
                      <i className="inline-flex items-center justify-center leading-[0] flex-shrink-0">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_654_970)">
                            <g filter="url(#filter0_i_654_970)">
                              <circle
                                cx="10.0006"
                                cy="10.0001"
                                r="9.28571"
                                fill="#0F3C3C"
                              />
                            </g>
                            <path
                              d="M10 0C4.47297 0 0 4.47254 0 10C0 15.5271 4.47254 20 10 20C15.527 20 20 15.5275 20 10C20 4.47293 15.5275 0 10 0ZM10 18.4375C5.33656 18.4375 1.5625 14.6638 1.5625 10C1.5625 5.33652 5.33621 1.5625 10 1.5625C14.6634 1.5625 18.4375 5.33621 18.4375 10C18.4375 14.6635 14.6638 18.4375 10 18.4375Z"
                              fill="#F30E11"
                            />
                            <path
                              d="M13.4211 12.3163L11.1046 9.99978L13.4211 7.68329C13.7262 7.37821 13.7262 6.88356 13.4212 6.57845C13.116 6.27333 12.6214 6.27337 12.3163 6.57845L9.9998 8.89493L7.68327 6.57845C7.37823 6.27333 6.88351 6.27333 6.57843 6.57845C6.27335 6.88356 6.27335 7.37821 6.57847 7.68329L8.89495 9.99978L6.57847 12.3163C6.27335 12.6214 6.27331 13.116 6.57843 13.4211C6.88362 13.7263 7.37827 13.7261 7.68327 13.4211L9.9998 11.1046L12.3163 13.4211C12.6213 13.7262 13.116 13.7262 13.4212 13.4211C13.7263 13.116 13.7262 12.6213 13.4211 12.3163Z"
                              fill="#F30E11"
                            />
                          </g>
                          <defs>
                            <filter
                              id="filter0_i_654_970"
                              x="0.714844"
                              y="0.714355"
                              width="18.5723"
                              height="23.5713"
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
                                values="0 0 0 0 1 0 0 0 0 0.0509804 0 0 0 0 0.65098 0 0 0 1 0"
                              />
                              <feBlend
                                mode="normal"
                                in2="shape"
                                result="effect1_innerShadow_654_970"
                              />
                            </filter>
                            <clipPath id="clip0_654_970">
                              <rect width={20} height={20} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </i>
                      <p className="text-[12px] text-white max-sm:hidden">
                        Passive index, no AI{/* */}{" "}
                      </p>
                    </div>
                  </td>
                </tr>
                <tr
                  className="last:[&>td]:border-b-0"
                  data-aos="fade-up"
                  data-aos-delay={250}
                >
                  <td className="border border-[#443828] max-sm:!w-[10%] border-l-0 px-6 py-4 max-md:p-2 first:sticky left-0 transition-all duration-300 ease first:bg-transparent">
                    <div className="flex items-center gap-3">
                      <i className="inline-flex items-center justify-center leading-[0] flex-shrink-0 max-md:size-[30px] max-sm:hidden">
                        <svg
                          width={37}
                          height={37}
                          viewBox="0 0 37 37"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_422_23181)">
                            <path
                              d="M23.7031 19.0781V17.3438C23.7031 17.1904 23.6422 17.0434 23.5338 16.935C23.4254 16.8265 23.2783 16.7656 23.125 16.7656H20.2344V17.9219H22.5469V19.0781H14.4531V17.9219H16.7656V16.7656H13.875C13.7217 16.7656 13.5746 16.8265 13.4662 16.935C13.3578 17.0434 13.2969 17.1904 13.2969 17.3438V19.6562C13.2969 19.8096 13.3578 19.9566 13.4662 20.065C13.5746 20.1735 13.7217 20.2344 13.875 20.2344V21.3906H13.2969C13.1435 21.3906 12.9965 21.4515 12.8881 21.56C12.7797 21.6684 12.7188 21.8154 12.7188 21.9688V26.5938C12.7188 26.7471 12.7797 26.8941 12.8881 27.0025C12.9965 27.111 13.1435 27.1719 13.2969 27.1719H13.875V28.3281H13.2969C13.1435 28.3281 12.9965 28.389 12.8881 28.4975C12.7797 28.6059 12.7188 28.7529 12.7188 28.9062V31.2188C12.7188 31.3721 12.7797 31.5191 12.8881 31.6275C12.9965 31.736 13.1435 31.7969 13.2969 31.7969H13.875V32.9531H13.2969C13.1435 32.9531 12.9965 33.014 12.8881 33.1225C12.7797 33.2309 12.7188 33.3779 12.7188 33.5312V35.8438C12.7188 35.9971 12.7797 36.1441 12.8881 36.2525C12.9965 36.361 13.1435 36.4219 13.2969 36.4219H22.5469C22.7002 36.4219 22.8473 36.361 22.9557 36.2525C23.0641 36.1441 23.125 35.9971 23.125 35.8438V34.1094H23.7031C23.8565 34.1094 24.0035 34.0485 24.1119 33.94C24.2203 33.8316 24.2812 33.6846 24.2812 33.5312V31.2188C24.2812 31.0654 24.2203 30.9184 24.1119 30.81C24.0035 30.7015 23.8565 30.6406 23.7031 30.6406H23.125V29.4844H23.7031C23.8565 29.4844 24.0035 29.4235 24.1119 29.315C24.2203 29.2066 24.2812 29.0596 24.2812 28.9062V26.5938C24.2812 26.4404 24.2203 26.2934 24.1119 26.185C24.0035 26.0765 23.8565 26.0156 23.7031 26.0156H23.125V22.5469H23.7031C23.8565 22.5469 24.0035 22.486 24.1119 22.3775C24.2203 22.2691 24.2812 22.1221 24.2812 21.9688V19.6562C24.2812 19.5029 24.2203 19.3559 24.1119 19.2475C24.0035 19.139 23.8565 19.0781 23.7031 19.0781ZM19.6562 21.3906V20.2344H20.8125V21.3906H19.6562ZM17.3438 21.3906V20.2344H18.5V21.3906H17.3438ZM15.0312 20.2344H16.1875V21.3906H15.0312V20.2344ZM18.5 26.0156V24.8594H19.6562V26.0156H18.5ZM17.3438 26.0156H16.1875V24.8594H17.3438V26.0156ZM15.0312 26.0156H13.875V24.8594H15.0312V26.0156ZM18.5 30.6406V29.4844H19.6562V30.6406H18.5ZM17.3438 30.6406H16.1875V29.4844H17.3438V30.6406ZM13.875 29.4844H15.0312V30.6406H13.875V29.4844ZM19.6562 34.1094V35.2656H18.5V34.1094H19.6562ZM17.3438 35.2656H16.1875V34.1094H17.3438V35.2656ZM13.875 34.1094H15.0312V35.2656H13.875V34.1094ZM21.9688 35.2656H20.8125V34.1094H21.9688V35.2656ZM15.0312 32.9531V31.7969H23.125V32.9531H15.0312ZM21.9688 30.6406H20.8125V29.4844H21.9688V30.6406ZM15.0312 28.3281V27.1719H23.125V28.3281H15.0312ZM20.8125 26.0156V24.8594H21.9688V26.0156H20.8125ZM21.9688 22.5469V23.7031H13.875V22.5469H21.9688ZM23.125 21.3906H21.9688V20.2344H23.125V21.3906ZM10.4062 21.3906H2.3125C2.15917 21.3906 2.01212 21.4515 1.9037 21.56C1.79528 21.6684 1.73438 21.8154 1.73438 21.9688V26.0156H1.15625C1.00292 26.0156 0.855873 26.0765 0.747454 26.185C0.639034 26.2934 0.578125 26.4404 0.578125 26.5938V28.9062C0.578125 29.0596 0.639034 29.2066 0.747454 29.315C0.855873 29.4235 1.00292 29.4844 1.15625 29.4844H1.73438V30.6406H1.15625C1.00292 30.6406 0.855873 30.7015 0.747454 30.81C0.639034 30.9184 0.578125 31.0654 0.578125 31.2188V33.5312C0.578125 33.6846 0.639034 33.8316 0.747454 33.94C0.855873 34.0485 1.00292 34.1094 1.15625 34.1094H1.73438V35.8438C1.73438 35.9971 1.79528 36.1441 1.9037 36.2525C2.01212 36.361 2.15917 36.4219 2.3125 36.4219H10.4062C10.5596 36.4219 10.7066 36.361 10.815 36.2525C10.9235 36.1441 10.9844 35.9971 10.9844 35.8438V33.5312C10.9844 33.3779 10.9235 33.2309 10.815 33.1225C10.7066 33.014 10.5596 32.9531 10.4062 32.9531H9.82812V31.7969H10.4062C10.5596 31.7969 10.7066 31.736 10.815 31.6275C10.9235 31.5191 10.9844 31.3721 10.9844 31.2188V28.9062C10.9844 28.7529 10.9235 28.6059 10.815 28.4975C10.7066 28.389 10.5596 28.3281 10.4062 28.3281H9.82812V27.1719H10.4062C10.5596 27.1719 10.7066 27.111 10.815 27.0025C10.9235 26.8941 10.9844 26.7471 10.9844 26.5938V21.9688C10.9844 21.8154 10.9235 21.6684 10.815 21.56C10.7066 21.4515 10.5596 21.3906 10.4062 21.3906ZM9.82812 23.7031H8.09375V22.5469H9.82812V23.7031ZM5.78125 23.7031V22.5469H6.9375V23.7031H5.78125ZM2.89062 22.5469H4.625V23.7031H2.89062V22.5469ZM1.73438 27.1719H3.46875V28.3281H1.73438V27.1719ZM4.625 28.3281V27.1719H5.78125V28.3281H4.625ZM1.73438 31.7969H3.46875V32.9531H1.73438V31.7969ZM4.625 32.9531V31.7969H5.78125V32.9531H4.625ZM9.82812 34.1094V35.2656H2.89062V34.1094H9.82812ZM8.67188 32.9531H6.9375V31.7969H8.67188V32.9531ZM9.82812 30.6406H2.89062V29.4844H9.82812V30.6406ZM8.67188 28.3281H6.9375V27.1719H8.67188V28.3281ZM2.89062 26.0156V24.8594H9.82812V26.0156H2.89062ZM35.8438 21.3906H27.75C27.5967 21.3906 27.4496 21.4515 27.3412 21.56C27.2328 21.6684 27.1719 21.8154 27.1719 21.9688V26.0156H26.5938C26.4404 26.0156 26.2934 26.0765 26.185 26.185C26.0765 26.2934 26.0156 26.4404 26.0156 26.5938V28.9062C26.0156 29.0596 26.0765 29.2066 26.185 29.315C26.2934 29.4235 26.4404 29.4844 26.5938 29.4844H27.1719V30.6406H26.5938C26.4404 30.6406 26.2934 30.7015 26.185 30.81C26.0765 30.9184 26.0156 31.0654 26.0156 31.2188V33.5312C26.0156 33.6846 26.0765 33.8316 26.185 33.94C26.2934 34.0485 26.4404 34.1094 26.5938 34.1094H27.1719V35.8438C27.1719 35.9971 27.2328 36.1441 27.3412 36.2525C27.4496 36.361 27.5967 36.4219 27.75 36.4219H35.8438C35.9971 36.4219 36.1441 36.361 36.2525 36.2525C36.361 36.1441 36.4219 35.9971 36.4219 35.8438V33.5312C36.4219 33.3779 36.361 33.2309 36.2525 33.1225C36.1441 33.014 35.9971 32.9531 35.8438 32.9531H35.2656V31.7969H35.8438C35.9971 31.7969 36.1441 31.736 36.2525 31.6275C36.361 31.5191 36.4219 31.3721 36.4219 31.2188V28.9062C36.4219 28.7529 36.361 28.6059 36.2525 28.4975C36.1441 28.389 35.9971 28.3281 35.8438 28.3281H35.2656V27.1719H35.8438C35.9971 27.1719 36.1441 27.111 36.2525 27.0025C36.361 26.8941 36.4219 26.7471 36.4219 26.5938V21.9688C36.4219 21.8154 36.361 21.6684 36.2525 21.56C36.1441 21.4515 35.9971 21.3906 35.8438 21.3906ZM35.2656 23.7031H33.5312V22.5469H35.2656V23.7031ZM31.2188 23.7031V22.5469H32.375V23.7031H31.2188ZM28.3281 22.5469H30.0625V23.7031H28.3281V22.5469ZM27.1719 27.1719H28.9062V28.3281H27.1719V27.1719ZM30.0625 28.3281V27.1719H31.2188V28.3281H30.0625ZM27.1719 31.7969H28.9062V32.9531H27.1719V31.7969ZM30.0625 32.9531V31.7969H31.2188V32.9531H30.0625ZM35.2656 34.1094V35.2656H28.3281V34.1094H35.2656ZM34.1094 32.9531H32.375V31.7969H34.1094V32.9531ZM35.2656 29.4844V30.6406H28.3281V29.4844H35.2656ZM34.1094 28.3281H32.375V27.1719H34.1094V28.3281ZM28.3281 26.0156V24.8594H35.2656V26.0156H28.3281Z"
                              fill="#FF8800"
                            />
                            <g filter="url(#filter0_i_422_23181)">
                              <path
                                d="M20.426 12.7546L18.9096 17.6071V17.9104L16.4834 12.7546H7.68827C6.71778 12.7546 6.27297 11.7437 6.17188 11.2382V3.35299C6.17188 1.89725 7.1828 1.12894 7.68827 0.926758H28.0079C29.7063 0.926758 30.5353 1.7355 30.7374 2.13987V11.2382C30.7374 12.2087 29.7265 12.6535 29.2211 12.7546H20.426Z"
                                fill="#000912"
                              />
                            </g>
                            <path
                              d="M7.51562 13.2969H16.3488L17.9514 18.1046C17.9894 18.2202 18.0629 18.3209 18.1616 18.3923C18.2602 18.4637 18.3788 18.5022 18.5006 18.5022C18.6223 18.5022 18.741 18.4637 18.8396 18.3923C18.9382 18.3209 19.0118 18.2202 19.0498 18.1046L20.6512 13.2969H29.4844C29.9444 13.2969 30.3855 13.1141 30.7108 12.7889C31.036 12.4636 31.2188 12.0225 31.2188 11.5625V2.3125C31.2188 1.85251 31.036 1.41137 30.7108 1.08611C30.3855 0.760853 29.9444 0.578125 29.4844 0.578125H7.51562C7.05564 0.578125 6.61449 0.760853 6.28924 1.08611C5.96398 1.41137 5.78125 1.85251 5.78125 2.3125V11.5625C5.78125 12.0225 5.96398 12.4636 6.28924 12.7889C6.61449 13.1141 7.05564 13.2969 7.51562 13.2969ZM6.9375 2.3125C6.9375 2.15917 6.99841 2.01212 7.10683 1.9037C7.21525 1.79528 7.3623 1.73437 7.51562 1.73437H29.4844C29.6377 1.73437 29.7848 1.79528 29.8932 1.9037C30.0016 2.01212 30.0625 2.15917 30.0625 2.3125V11.5625C30.0625 11.7158 30.0016 11.8629 29.8932 11.9713C29.7848 12.0797 29.6377 12.1406 29.4844 12.1406H20.2344C20.113 12.1406 19.9947 12.1788 19.8962 12.2497C19.7977 12.3207 19.7241 12.4209 19.6857 12.5361L18.5 16.0938L17.3143 12.5361C17.2759 12.4209 17.2023 12.3207 17.1038 12.2497C17.0053 12.1788 16.887 12.1406 16.7656 12.1406H7.51562C7.3623 12.1406 7.21525 12.0797 7.10683 11.9713C6.99841 11.8629 6.9375 11.7158 6.9375 11.5625V2.3125Z"
                              fill="#FF8800"
                            />
                            <path
                              d="M10.4062 8.09375H12.1406V6.9375H10.4062V5.20313H12.1406V4.04688H9.82812C9.6748 4.04688 9.52775 4.10779 9.41933 4.21621C9.31091 4.32463 9.25 4.47167 9.25 4.625V9.82813H10.4062V8.09375ZM15.3203 9.82813C15.857 9.82813 16.3716 9.61494 16.7511 9.23548C17.1306 8.85601 17.3438 8.34134 17.3438 7.80469V4.04688H16.1875V7.80469C16.1875 8.03468 16.0961 8.25526 15.9335 8.41788C15.7709 8.58051 15.5503 8.67188 15.3203 8.67188C15.0903 8.67188 14.8697 8.58051 14.7071 8.41788C14.5445 8.25526 14.4531 8.03468 14.4531 7.80469V4.04688H13.2969V7.80469C13.2969 8.34134 13.5101 8.85601 13.8895 9.23548C14.269 9.61494 14.7837 9.82813 15.3203 9.82813ZM19.6562 6.64092L21.4785 9.55641C21.545 9.66286 21.6444 9.74477 21.7616 9.78975C21.8788 9.83472 22.0075 9.84033 22.1281 9.80573C22.2488 9.77112 22.3549 9.69818 22.4305 9.59792C22.506 9.49766 22.5469 9.37554 22.5469 9.25V4.04688H21.3906V7.23408L19.5684 4.3186C19.5018 4.21214 19.4025 4.13024 19.2853 4.08526C19.1681 4.04028 19.0394 4.03467 18.9187 4.06928C18.7981 4.10389 18.6919 4.17683 18.6164 4.27709C18.5409 4.37735 18.5 4.49947 18.5 4.625V9.82813H19.6562V6.64092ZM24.2812 9.82813H24.8594C25.626 9.82813 26.3613 9.52358 26.9034 8.98148C27.4455 8.43939 27.75 7.70414 27.75 6.9375C27.75 6.17086 27.4455 5.43562 26.9034 4.89352C26.3613 4.35142 25.626 4.04688 24.8594 4.04688H24.2812C24.1279 4.04688 23.9809 4.10779 23.8725 4.21621C23.764 4.32463 23.7031 4.47167 23.7031 4.625V9.25C23.7031 9.40333 23.764 9.55038 23.8725 9.6588C23.9809 9.76722 24.1279 9.82813 24.2812 9.82813ZM24.8594 5.20313C25.3194 5.20313 25.7605 5.38586 26.0858 5.71111C26.411 6.03637 26.5938 6.47752 26.5938 6.9375C26.5938 7.39749 26.411 7.83863 26.0858 8.16389C25.7605 8.48915 25.3194 8.67188 24.8594 8.67188V5.20313Z"
                              fill="#FF8800"
                            />
                          </g>
                          <defs>
                            <filter
                              id="filter0_i_422_23181"
                              x="6.17188"
                              y="0.926758"
                              width="24.5664"
                              height="20.9834"
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
                              <feOffset dy={4} />
                              <feGaussianBlur stdDeviation="6.5" />
                              <feComposite
                                in2="hardAlpha"
                                operator="arithmetic"
                                k2={-1}
                                k3={1}
                              />
                              <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 1 0 0 0 0 0.866667 0 0 0 1 0"
                              />
                              <feBlend
                                mode="normal"
                                in2="shape"
                                result="effect1_innerShadow_422_23181"
                              />
                            </filter>
                            <clipPath id="clip0_422_23181">
                              <rect width={37} height={37} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </i>
                      <p className="font-semibold text-white max-md:text-[14px] max-sm:!text-[10px] max-sm:font-normal">
                        Diversified Exposure
                      </p>
                    </div>
                  </td>
                  <td
                    className="border border-[#443828] px-[10px] py-[14px] max-md:p-2 last:border-r-0 align-middle sticky"
                    style={{ left: 210 }}
                  >
                    <div className="flex items-start gap-[7px] max-sm:justify-center">
                      <i className="inline-flex items-center justify-center leading-[0] flex-shrink-0">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g filter="url(#filter0_i_422_23221)">
                            <path
                              d="M16.0718 3.21387C12.6432 3.7853 10.8337 1.7853 10.3575 0.713867C8.92962 0.713867 7.49972 2.49958 6.78544 3.21387C6.07115 3.92815 3.57115 3.21387 3.21467 3.57101C2.85819 3.92815 3.21467 6.07101 2.85753 7.14244C2.50039 8.21387 1.07181 8.57101 0.714672 9.64244C0.357529 10.7139 2.14324 11.4282 2.85753 11.7853C3.57181 12.1424 3.21467 14.6424 3.21467 15.3567C3.21467 16.071 3.21467 16.7853 4.2861 16.7853C5.35753 16.7853 7.50039 17.1424 8.21467 17.4996C8.7861 17.7853 9.64324 18.8091 10.0004 19.2853C10.3575 19.0472 11.2147 18.3567 11.7861 17.4996C12.3575 16.6424 14.8813 16.6663 16.0718 16.7853C16.3099 16.6663 16.7147 16.2853 16.429 15.7139C16.1432 15.1424 16.7861 13.3329 17.1432 12.4996C17.7385 12.0234 18.929 10.7853 18.929 9.64244C17.5004 8.92815 16.7861 5.35672 16.0718 3.21387Z"
                              fill="#0F3C3C"
                            />
                          </g>
                          <path
                            d="M19.5137 8.82187L18.1496 7.45785C17.8259 7.13412 17.5606 6.49359 17.5606 6.03534V4.10584C17.5606 3.18958 16.8111 2.44007 15.8939 2.43909H13.9644C13.5061 2.43909 12.8656 2.17386 12.5419 1.84983L11.1781 0.485817C10.5301 -0.161939 9.4691 -0.161939 8.8211 0.485817L7.45733 1.85057C7.13331 2.1743 6.49209 2.43983 6.03482 2.43983H4.10615C3.18989 2.43983 2.4394 3.18934 2.4394 4.10658V6.03432C2.4394 6.49257 2.17416 7.13305 1.85038 7.45683L0.486366 8.82158C-0.162122 9.46933 -0.162122 10.5298 0.486366 11.1791L1.85038 12.5431C2.17436 12.8671 2.4394 13.5081 2.4394 13.9656V15.8944C2.4394 16.8107 3.18989 17.5612 4.10615 17.5612H6.03491C6.49317 17.5612 7.13365 17.8264 7.45743 18.1502L8.8212 19.5142C9.4692 20.1619 10.5302 20.1619 11.1782 19.5142L12.542 18.1502C12.866 17.8262 13.5062 17.5612 13.9645 17.5612H15.894C16.8112 17.5612 17.5607 16.8107 17.5607 15.8944V13.9656C17.5607 13.5066 17.8262 12.8669 18.1497 12.5431L19.5138 11.1791C20.1612 10.5299 20.1612 9.46938 19.5137 8.82187ZM16.9714 11.3648C16.3366 11.9981 15.8937 13.0689 15.8937 13.9659V15.8946H13.9642C13.0675 15.8946 11.9972 16.3374 11.3634 16.9721L9.99943 18.3362L8.63541 16.9721C8.00064 16.3374 6.9314 15.8946 6.03467 15.8946H4.10591V13.9659C4.10591 13.0689 3.66313 11.9996 3.02841 11.3649L1.6644 10.0001L3.02841 8.6354C3.66318 8.00141 4.10591 6.93212 4.10591 6.03441V4.10667H6.03467C6.9314 4.10667 8.00069 3.66317 8.63541 3.02918L9.99943 1.66443L11.3637 3.02845C11.9974 3.66322 13.0677 4.10594 13.9644 4.10594H15.8939V6.03544C15.8939 6.93217 16.3367 8.0017 16.9717 8.63642L18.3351 10.0002L16.9714 11.3648Z"
                            fill="#FF8800"
                          />
                          <path
                            d="M13.8196 6.25L8.6753 11.3933L6.17627 8.894L4.99805 10.0725L8.6753 13.75L14.9981 7.42827L13.8196 6.25Z"
                            fill="#FF8800"
                          />
                          <defs>
                            <filter
                              id="filter0_i_422_23221"
                              x="0.667969"
                              y="0.713867"
                              width="18.2617"
                              height="23.5713"
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
                                result="effect1_innerShadow_422_23221"
                              />
                            </filter>
                          </defs>
                        </svg>
                      </i>
                      <p className="text-[12px] text-white max-sm:hidden">
                        Crypto funds + BTC, Mining, RWA{/* */}{" "}
                      </p>
                    </div>
                  </td>
                  <td
                    className="border border-[#443828] px-[10px] py-[14px] max-md:p-2 last:border-r-0 align-middle"
                    style={{ left: 210 }}
                  >
                    <div className="flex items-start gap-[7px] max-sm:justify-center">
                      <i className="inline-flex items-center justify-center leading-[0] flex-shrink-0">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_654_970)">
                            <g filter="url(#filter0_i_654_970)">
                              <circle
                                cx="10.0006"
                                cy="10.0001"
                                r="9.28571"
                                fill="#0F3C3C"
                              />
                            </g>
                            <path
                              d="M10 0C4.47297 0 0 4.47254 0 10C0 15.5271 4.47254 20 10 20C15.527 20 20 15.5275 20 10C20 4.47293 15.5275 0 10 0ZM10 18.4375C5.33656 18.4375 1.5625 14.6638 1.5625 10C1.5625 5.33652 5.33621 1.5625 10 1.5625C14.6634 1.5625 18.4375 5.33621 18.4375 10C18.4375 14.6635 14.6638 18.4375 10 18.4375Z"
                              fill="#F30E11"
                            />
                            <path
                              d="M13.4211 12.3163L11.1046 9.99978L13.4211 7.68329C13.7262 7.37821 13.7262 6.88356 13.4212 6.57845C13.116 6.27333 12.6214 6.27337 12.3163 6.57845L9.9998 8.89493L7.68327 6.57845C7.37823 6.27333 6.88351 6.27333 6.57843 6.57845C6.27335 6.88356 6.27335 7.37821 6.57847 7.68329L8.89495 9.99978L6.57847 12.3163C6.27335 12.6214 6.27331 13.116 6.57843 13.4211C6.88362 13.7263 7.37827 13.7261 7.68327 13.4211L9.9998 11.1046L12.3163 13.4211C12.6213 13.7262 13.116 13.7262 13.4212 13.4211C13.7263 13.116 13.7262 12.6213 13.4211 12.3163Z"
                              fill="#F30E11"
                            />
                          </g>
                          <defs>
                            <filter
                              id="filter0_i_654_970"
                              x="0.714844"
                              y="0.714355"
                              width="18.5723"
                              height="23.5713"
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
                                values="0 0 0 0 1 0 0 0 0 0.0509804 0 0 0 0 0.65098 0 0 0 1 0"
                              />
                              <feBlend
                                mode="normal"
                                in2="shape"
                                result="effect1_innerShadow_654_970"
                              />
                            </filter>
                            <clipPath id="clip0_654_970">
                              <rect width={20} height={20} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </i>
                      <p className="text-[12px] text-white max-sm:hidden">
                        Mostly stocks &amp; crypto trading, no active funds
                        {/* */}{" "}
                      </p>
                    </div>
                  </td>
                  <td
                    className="border border-[#443828] px-[10px] py-[14px] max-md:p-2 last:border-r-0 align-middle"
                    style={{ left: 210 }}
                  >
                    <div className="flex items-start gap-[7px] max-sm:justify-center">
                      <i className="inline-flex items-center justify-center leading-[0] flex-shrink-0">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g filter="url(#filter0_i_422_23221)">
                            <path
                              d="M16.0718 3.21387C12.6432 3.7853 10.8337 1.7853 10.3575 0.713867C8.92962 0.713867 7.49972 2.49958 6.78544 3.21387C6.07115 3.92815 3.57115 3.21387 3.21467 3.57101C2.85819 3.92815 3.21467 6.07101 2.85753 7.14244C2.50039 8.21387 1.07181 8.57101 0.714672 9.64244C0.357529 10.7139 2.14324 11.4282 2.85753 11.7853C3.57181 12.1424 3.21467 14.6424 3.21467 15.3567C3.21467 16.071 3.21467 16.7853 4.2861 16.7853C5.35753 16.7853 7.50039 17.1424 8.21467 17.4996C8.7861 17.7853 9.64324 18.8091 10.0004 19.2853C10.3575 19.0472 11.2147 18.3567 11.7861 17.4996C12.3575 16.6424 14.8813 16.6663 16.0718 16.7853C16.3099 16.6663 16.7147 16.2853 16.429 15.7139C16.1432 15.1424 16.7861 13.3329 17.1432 12.4996C17.7385 12.0234 18.929 10.7853 18.929 9.64244C17.5004 8.92815 16.7861 5.35672 16.0718 3.21387Z"
                              fill="#0F3C3C"
                            />
                          </g>
                          <path
                            d="M19.5137 8.82187L18.1496 7.45785C17.8259 7.13412 17.5606 6.49359 17.5606 6.03534V4.10584C17.5606 3.18958 16.8111 2.44007 15.8939 2.43909H13.9644C13.5061 2.43909 12.8656 2.17386 12.5419 1.84983L11.1781 0.485817C10.5301 -0.161939 9.4691 -0.161939 8.8211 0.485817L7.45733 1.85057C7.13331 2.1743 6.49209 2.43983 6.03482 2.43983H4.10615C3.18989 2.43983 2.4394 3.18934 2.4394 4.10658V6.03432C2.4394 6.49257 2.17416 7.13305 1.85038 7.45683L0.486366 8.82158C-0.162122 9.46933 -0.162122 10.5298 0.486366 11.1791L1.85038 12.5431C2.17436 12.8671 2.4394 13.5081 2.4394 13.9656V15.8944C2.4394 16.8107 3.18989 17.5612 4.10615 17.5612H6.03491C6.49317 17.5612 7.13365 17.8264 7.45743 18.1502L8.8212 19.5142C9.4692 20.1619 10.5302 20.1619 11.1782 19.5142L12.542 18.1502C12.866 17.8262 13.5062 17.5612 13.9645 17.5612H15.894C16.8112 17.5612 17.5607 16.8107 17.5607 15.8944V13.9656C17.5607 13.5066 17.8262 12.8669 18.1497 12.5431L19.5138 11.1791C20.1612 10.5299 20.1612 9.46938 19.5137 8.82187ZM16.9714 11.3648C16.3366 11.9981 15.8937 13.0689 15.8937 13.9659V15.8946H13.9642C13.0675 15.8946 11.9972 16.3374 11.3634 16.9721L9.99943 18.3362L8.63541 16.9721C8.00064 16.3374 6.9314 15.8946 6.03467 15.8946H4.10591V13.9659C4.10591 13.0689 3.66313 11.9996 3.02841 11.3649L1.6644 10.0001L3.02841 8.6354C3.66318 8.00141 4.10591 6.93212 4.10591 6.03441V4.10667H6.03467C6.9314 4.10667 8.00069 3.66317 8.63541 3.02918L9.99943 1.66443L11.3637 3.02845C11.9974 3.66322 13.0677 4.10594 13.9644 4.10594H15.8939V6.03544C15.8939 6.93217 16.3367 8.0017 16.9717 8.63642L18.3351 10.0002L16.9714 11.3648Z"
                            fill="#FF8800"
                          />
                          <path
                            d="M13.8196 6.25L8.6753 11.3933L6.17627 8.894L4.99805 10.0725L8.6753 13.75L14.9981 7.42827L13.8196 6.25Z"
                            fill="#FF8800"
                          />
                          <defs>
                            <filter
                              id="filter0_i_422_23221"
                              x="0.667969"
                              y="0.713867"
                              width="18.2617"
                              height="23.5713"
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
                                result="effect1_innerShadow_422_23221"
                              />
                            </filter>
                          </defs>
                        </svg>
                      </i>
                      <p className="text-[12px] text-white max-sm:hidden">
                        Traditional + ETFs, but no crypto retail hedge fund
                        {/* */}{" "}
                      </p>
                    </div>
                  </td>
                  <td
                    className="border border-[#443828] px-[10px] py-[14px] max-md:p-2 last:border-r-0 align-middle"
                    style={{ left: 210 }}
                  >
                    <div className="flex items-start gap-[7px] max-sm:justify-center">
                      <i className="inline-flex items-center justify-center leading-[0] flex-shrink-0">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_654_978)">
                            <g filter="url(#filter0_i_654_978)">
                              <circle
                                cx="10.0006"
                                cy="10.0001"
                                r="9.28571"
                                fill="#0F3C3C"
                              />
                            </g>
                            <path
                              d="M10 0C4.47297 0 0 4.47254 0 10C0 15.5271 4.47254 20 10 20C15.527 20 20 15.5275 20 10C20 4.47293 15.5275 0 10 0ZM10 18.4375C5.33656 18.4375 1.5625 14.6638 1.5625 10C1.5625 5.33652 5.33621 1.5625 10 1.5625C14.6634 1.5625 18.4375 5.33621 18.4375 10C18.4375 14.6635 14.6638 18.4375 10 18.4375Z"
                              fill="#FFFF00"
                            />
                          </g>
                          <defs>
                            <filter
                              id="filter0_i_654_978"
                              x="0.714844"
                              y="0.714355"
                              width="18.5723"
                              height="23.5713"
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
                                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 0 0 0 0 1 0"
                              />
                              <feBlend
                                mode="normal"
                                in2="shape"
                                result="effect1_innerShadow_654_978"
                              />
                            </filter>
                            <clipPath id="clip0_654_978">
                              <rect width={20} height={20} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </i>
                      <p className="text-[12px] text-white max-sm:hidden">
                        Crypto-only{/* */}{" "}
                      </p>
                    </div>
                  </td>
                  <td
                    className="border border-[#443828] px-[10px] py-[14px] max-md:p-2 last:border-r-0 align-middle"
                    style={{ left: 210 }}
                  >
                    <div className="flex items-start gap-[7px] max-sm:justify-center">
                      <i className="inline-flex items-center justify-center leading-[0] flex-shrink-0">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g filter="url(#filter0_i_422_23221)">
                            <path
                              d="M16.0718 3.21387C12.6432 3.7853 10.8337 1.7853 10.3575 0.713867C8.92962 0.713867 7.49972 2.49958 6.78544 3.21387C6.07115 3.92815 3.57115 3.21387 3.21467 3.57101C2.85819 3.92815 3.21467 6.07101 2.85753 7.14244C2.50039 8.21387 1.07181 8.57101 0.714672 9.64244C0.357529 10.7139 2.14324 11.4282 2.85753 11.7853C3.57181 12.1424 3.21467 14.6424 3.21467 15.3567C3.21467 16.071 3.21467 16.7853 4.2861 16.7853C5.35753 16.7853 7.50039 17.1424 8.21467 17.4996C8.7861 17.7853 9.64324 18.8091 10.0004 19.2853C10.3575 19.0472 11.2147 18.3567 11.7861 17.4996C12.3575 16.6424 14.8813 16.6663 16.0718 16.7853C16.3099 16.6663 16.7147 16.2853 16.429 15.7139C16.1432 15.1424 16.7861 13.3329 17.1432 12.4996C17.7385 12.0234 18.929 10.7853 18.929 9.64244C17.5004 8.92815 16.7861 5.35672 16.0718 3.21387Z"
                              fill="#0F3C3C"
                            />
                          </g>
                          <path
                            d="M19.5137 8.82187L18.1496 7.45785C17.8259 7.13412 17.5606 6.49359 17.5606 6.03534V4.10584C17.5606 3.18958 16.8111 2.44007 15.8939 2.43909H13.9644C13.5061 2.43909 12.8656 2.17386 12.5419 1.84983L11.1781 0.485817C10.5301 -0.161939 9.4691 -0.161939 8.8211 0.485817L7.45733 1.85057C7.13331 2.1743 6.49209 2.43983 6.03482 2.43983H4.10615C3.18989 2.43983 2.4394 3.18934 2.4394 4.10658V6.03432C2.4394 6.49257 2.17416 7.13305 1.85038 7.45683L0.486366 8.82158C-0.162122 9.46933 -0.162122 10.5298 0.486366 11.1791L1.85038 12.5431C2.17436 12.8671 2.4394 13.5081 2.4394 13.9656V15.8944C2.4394 16.8107 3.18989 17.5612 4.10615 17.5612H6.03491C6.49317 17.5612 7.13365 17.8264 7.45743 18.1502L8.8212 19.5142C9.4692 20.1619 10.5302 20.1619 11.1782 19.5142L12.542 18.1502C12.866 17.8262 13.5062 17.5612 13.9645 17.5612H15.894C16.8112 17.5612 17.5607 16.8107 17.5607 15.8944V13.9656C17.5607 13.5066 17.8262 12.8669 18.1497 12.5431L19.5138 11.1791C20.1612 10.5299 20.1612 9.46938 19.5137 8.82187ZM16.9714 11.3648C16.3366 11.9981 15.8937 13.0689 15.8937 13.9659V15.8946H13.9642C13.0675 15.8946 11.9972 16.3374 11.3634 16.9721L9.99943 18.3362L8.63541 16.9721C8.00064 16.3374 6.9314 15.8946 6.03467 15.8946H4.10591V13.9659C4.10591 13.0689 3.66313 11.9996 3.02841 11.3649L1.6644 10.0001L3.02841 8.6354C3.66318 8.00141 4.10591 6.93212 4.10591 6.03441V4.10667H6.03467C6.9314 4.10667 8.00069 3.66317 8.63541 3.02918L9.99943 1.66443L11.3637 3.02845C11.9974 3.66322 13.0677 4.10594 13.9644 4.10594H15.8939V6.03544C15.8939 6.93217 16.3367 8.0017 16.9717 8.63642L18.3351 10.0002L16.9714 11.3648Z"
                            fill="#FF8800"
                          />
                          <path
                            d="M13.8196 6.25L8.6753 11.3933L6.17627 8.894L4.99805 10.0725L8.6753 13.75L14.9981 7.42827L13.8196 6.25Z"
                            fill="#FF8800"
                          />
                          <defs>
                            <filter
                              id="filter0_i_422_23221"
                              x="0.667969"
                              y="0.713867"
                              width="18.2617"
                              height="23.5713"
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
                                result="effect1_innerShadow_422_23221"
                              />
                            </filter>
                          </defs>
                        </svg>
                      </i>
                      <p className="text-[12px] text-white max-sm:hidden">
                        Traditional + some crypto access{/* */}{" "}
                      </p>
                    </div>
                  </td>
                  <td
                    className="border border-[#443828] px-[10px] py-[14px] max-md:p-2 last:border-r-0 align-middle"
                    style={{ left: 210 }}
                  >
                    <div className="flex items-start gap-[7px] max-sm:justify-center">
                      <i className="inline-flex items-center justify-center leading-[0] flex-shrink-0">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g filter="url(#filter0_i_422_23221)">
                            <path
                              d="M16.0718 3.21387C12.6432 3.7853 10.8337 1.7853 10.3575 0.713867C8.92962 0.713867 7.49972 2.49958 6.78544 3.21387C6.07115 3.92815 3.57115 3.21387 3.21467 3.57101C2.85819 3.92815 3.21467 6.07101 2.85753 7.14244C2.50039 8.21387 1.07181 8.57101 0.714672 9.64244C0.357529 10.7139 2.14324 11.4282 2.85753 11.7853C3.57181 12.1424 3.21467 14.6424 3.21467 15.3567C3.21467 16.071 3.21467 16.7853 4.2861 16.7853C5.35753 16.7853 7.50039 17.1424 8.21467 17.4996C8.7861 17.7853 9.64324 18.8091 10.0004 19.2853C10.3575 19.0472 11.2147 18.3567 11.7861 17.4996C12.3575 16.6424 14.8813 16.6663 16.0718 16.7853C16.3099 16.6663 16.7147 16.2853 16.429 15.7139C16.1432 15.1424 16.7861 13.3329 17.1432 12.4996C17.7385 12.0234 18.929 10.7853 18.929 9.64244C17.5004 8.92815 16.7861 5.35672 16.0718 3.21387Z"
                              fill="#0F3C3C"
                            />
                          </g>
                          <path
                            d="M19.5137 8.82187L18.1496 7.45785C17.8259 7.13412 17.5606 6.49359 17.5606 6.03534V4.10584C17.5606 3.18958 16.8111 2.44007 15.8939 2.43909H13.9644C13.5061 2.43909 12.8656 2.17386 12.5419 1.84983L11.1781 0.485817C10.5301 -0.161939 9.4691 -0.161939 8.8211 0.485817L7.45733 1.85057C7.13331 2.1743 6.49209 2.43983 6.03482 2.43983H4.10615C3.18989 2.43983 2.4394 3.18934 2.4394 4.10658V6.03432C2.4394 6.49257 2.17416 7.13305 1.85038 7.45683L0.486366 8.82158C-0.162122 9.46933 -0.162122 10.5298 0.486366 11.1791L1.85038 12.5431C2.17436 12.8671 2.4394 13.5081 2.4394 13.9656V15.8944C2.4394 16.8107 3.18989 17.5612 4.10615 17.5612H6.03491C6.49317 17.5612 7.13365 17.8264 7.45743 18.1502L8.8212 19.5142C9.4692 20.1619 10.5302 20.1619 11.1782 19.5142L12.542 18.1502C12.866 17.8262 13.5062 17.5612 13.9645 17.5612H15.894C16.8112 17.5612 17.5607 16.8107 17.5607 15.8944V13.9656C17.5607 13.5066 17.8262 12.8669 18.1497 12.5431L19.5138 11.1791C20.1612 10.5299 20.1612 9.46938 19.5137 8.82187ZM16.9714 11.3648C16.3366 11.9981 15.8937 13.0689 15.8937 13.9659V15.8946H13.9642C13.0675 15.8946 11.9972 16.3374 11.3634 16.9721L9.99943 18.3362L8.63541 16.9721C8.00064 16.3374 6.9314 15.8946 6.03467 15.8946H4.10591V13.9659C4.10591 13.0689 3.66313 11.9996 3.02841 11.3649L1.6644 10.0001L3.02841 8.6354C3.66318 8.00141 4.10591 6.93212 4.10591 6.03441V4.10667H6.03467C6.9314 4.10667 8.00069 3.66317 8.63541 3.02918L9.99943 1.66443L11.3637 3.02845C11.9974 3.66322 13.0677 4.10594 13.9644 4.10594H15.8939V6.03544C15.8939 6.93217 16.3367 8.0017 16.9717 8.63642L18.3351 10.0002L16.9714 11.3648Z"
                            fill="#FF8800"
                          />
                          <path
                            d="M13.8196 6.25L8.6753 11.3933L6.17627 8.894L4.99805 10.0725L8.6753 13.75L14.9981 7.42827L13.8196 6.25Z"
                            fill="#FF8800"
                          />
                          <defs>
                            <filter
                              id="filter0_i_422_23221"
                              x="0.667969"
                              y="0.713867"
                              width="18.2617"
                              height="23.5713"
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
                                result="effect1_innerShadow_422_23221"
                              />
                            </filter>
                          </defs>
                        </svg>
                      </i>
                      <p className="text-[12px] text-white max-sm:hidden">
                        Traditional only{/* */}{" "}
                      </p>
                    </div>
                  </td>
                </tr>
                <tr
                  className="last:[&>td]:border-b-0"
                  data-aos="fade-up"
                  data-aos-delay={300}
                >
                  <td className="border border-[#443828] max-sm:!w-[10%] border-l-0 px-6 py-4 max-md:p-2 first:sticky left-0 transition-all duration-300 ease first:bg-transparent">
                    <div className="flex items-center gap-3">
                      <i className="inline-flex items-center justify-center leading-[0] flex-shrink-0 max-md:size-[30px] max-sm:hidden">
                        <svg
                          width={37}
                          height={38}
                          viewBox="0 0 37 38"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g filter="url(#filter0_i_422_23194)">
                            <path d="M9 25H3V37H9V25Z" fill="#103539" />
                          </g>
                          <g filter="url(#filter1_i_422_23194)">
                            <path d="M26 22H20V37H26V22Z" fill="#103539" />
                          </g>
                          <g filter="url(#filter2_i_422_23194)">
                            <path d="M17 16H11V37H17V16Z" fill="#103539" />
                          </g>
                          <g filter="url(#filter3_i_422_23194)">
                            <path d="M34 14H28V37H34V14Z" fill="#103539" />
                          </g>
                          <path
                            d="M35.1316 36.2672V13.4625C35.1316 13.2991 35.0666 13.1423 34.951 13.0267C34.8354 12.9111 34.6787 12.8462 34.5152 12.8462H28.3518C28.1883 12.8462 28.0315 12.9111 27.916 13.0267C27.8004 13.1423 27.7354 13.2991 27.7354 13.4625V36.2672H26.5028V22.0913C26.5028 21.9279 26.4378 21.7711 26.3222 21.6555C26.2066 21.5399 26.0499 21.475 25.8864 21.475H19.723C19.5595 21.475 19.4027 21.5399 19.2872 21.6555C19.1716 21.7711 19.1066 21.9279 19.1066 22.0913V36.2672H17.8739V15.9279C17.8739 15.7644 17.809 15.6077 17.6934 15.4921C17.5778 15.3765 17.4211 15.3116 17.2576 15.3116H11.0942C10.9307 15.3116 10.7739 15.3765 10.6584 15.4921C10.5428 15.6077 10.4778 15.7644 10.4778 15.9279V36.2672H9.24515V24.5567C9.24515 24.3932 9.18021 24.2365 9.06462 24.1209C8.94904 24.0053 8.79227 23.9404 8.6288 23.9404H2.46537C2.30191 23.9404 2.14514 24.0053 2.02955 24.1209C1.91397 24.2365 1.84903 24.3932 1.84903 24.5567V36.2672H0V37.4999H36.9806V36.2672H35.1316ZM8.01246 36.2672H3.08172V25.1731H8.01246V36.2672ZM16.6413 36.2672H11.7105V16.5443H16.6413V36.2672ZM25.2701 36.2672H20.3393V22.7077H25.2701V36.2672ZM33.8989 36.2672H28.9681V14.0789H33.8989V36.2672Z"
                            fill="#FF8800"
                          />
                          <path
                            d="M3.84746 17.2661C4.35164 17.5994 4.94271 17.7771 5.54711 17.777C7.24906 17.7769 8.62874 16.3972 8.62867 14.6952C8.62865 14.091 8.45102 13.5001 8.11787 12.996L12.4803 8.63295C12.9803 8.96756 13.5681 9.14683 14.1697 9.14822C14.3512 9.1483 14.5323 9.13242 14.7109 9.10076C15.2972 8.99797 15.8409 8.72637 16.2752 8.31924L19.9319 11.1304C19.3216 12.7192 20.1148 14.5019 21.7035 15.1123C23.2923 15.7226 25.0751 14.9294 25.6854 13.3407C25.8618 12.8814 25.9257 12.3867 25.8718 11.8977C25.8179 11.4087 25.6477 10.9398 25.3755 10.5301L29.7367 6.16882C31.1602 7.11105 33.0781 6.72083 34.0202 5.29731C34.9625 3.87378 34.5722 1.95596 33.1487 1.0138C31.7252 0.0715639 29.8074 0.461786 28.8652 1.88531C28.5303 2.39126 28.3518 2.98457 28.3518 3.59131C28.3518 4.19804 28.5303 4.79136 28.8652 5.29731L24.504 9.65855C23.2825 8.85114 21.6615 9.0147 20.6259 10.0499C20.6142 10.0616 20.6074 10.0752 20.5964 10.0863L16.9926 7.31645C17.6848 5.76157 16.9855 3.93996 15.4306 3.24773C13.8757 2.5555 12.0541 3.25482 11.3619 4.8097C11.1512 5.28293 11.0633 5.80163 11.1061 6.31785C11.1489 6.83408 11.3212 7.33118 11.607 7.76322L7.24636 12.1245C5.82654 11.1858 3.91472 11.576 2.97611 12.9958C2.03757 14.4156 2.42764 16.3275 3.84746 17.2661ZM31.4335 1.7521C32.4547 1.7521 33.2825 2.57993 33.2825 3.60113C33.2825 4.62233 32.4547 5.45016 31.4335 5.45016C30.4123 5.45016 29.5845 4.62233 29.5845 3.60113C29.5845 2.57993 30.4123 1.7521 31.4335 1.7521ZM21.4966 10.9229C21.6683 10.751 21.8723 10.6147 22.0967 10.5217C22.3212 10.4287 22.5618 10.3809 22.8047 10.3809C23.8259 10.3807 24.6538 11.2085 24.654 12.2297C24.654 12.4727 24.6062 12.7132 24.5132 12.9377C24.4202 13.1621 24.2838 13.3661 24.112 13.5378C23.3801 14.2354 22.2294 14.2354 21.4974 13.5378C20.7751 12.8159 20.7748 11.6452 21.4966 10.9229ZM12.6614 5.00601L12.6616 5.00578C12.8003 4.80643 12.9772 4.63657 13.182 4.50602C13.3868 4.37547 13.6155 4.28683 13.8548 4.24521C13.9621 4.22681 14.0707 4.21753 14.1796 4.21747C14.558 4.21787 14.927 4.33472 15.2366 4.55215C16.0731 5.13798 16.2763 6.29093 15.6905 7.12738C15.1047 7.96384 13.9517 8.167 13.1153 7.58124C12.2788 6.99541 12.0756 5.84246 12.6614 5.00601ZM4.23899 13.3883L4.23984 13.3874C4.9622 12.6655 6.13302 12.6657 6.85498 13.388C7.57695 14.1104 7.57672 15.2812 6.85437 16.0032C6.12246 16.7008 4.97175 16.7008 4.23984 16.0032C3.51749 15.2813 3.51718 14.1105 4.23899 13.3883Z"
                            fill="#FF8800"
                          />
                          <defs>
                            <filter
                              id="filter0_i_422_23194"
                              x={3}
                              y={25}
                              width={6}
                              height={14}
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
                              <feOffset dy={2} />
                              <feGaussianBlur stdDeviation="1.5" />
                              <feComposite
                                in2="hardAlpha"
                                operator="arithmetic"
                                k2={-1}
                                k3={1}
                              />
                              <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 1 0 0 0 0 0.866667 0 0 0 1 0"
                              />
                              <feBlend
                                mode="normal"
                                in2="shape"
                                result="effect1_innerShadow_422_23194"
                              />
                            </filter>
                            <filter
                              id="filter1_i_422_23194"
                              x={20}
                              y={22}
                              width={6}
                              height={17}
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
                              <feOffset dy={2} />
                              <feGaussianBlur stdDeviation="1.5" />
                              <feComposite
                                in2="hardAlpha"
                                operator="arithmetic"
                                k2={-1}
                                k3={1}
                              />
                              <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 1 0 0 0 0 0.866667 0 0 0 1 0"
                              />
                              <feBlend
                                mode="normal"
                                in2="shape"
                                result="effect1_innerShadow_422_23194"
                              />
                            </filter>
                            <filter
                              id="filter2_i_422_23194"
                              x={11}
                              y={16}
                              width={6}
                              height={23}
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
                              <feOffset dy={2} />
                              <feGaussianBlur stdDeviation="1.5" />
                              <feComposite
                                in2="hardAlpha"
                                operator="arithmetic"
                                k2={-1}
                                k3={1}
                              />
                              <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 1 0 0 0 0 0.866667 0 0 0 1 0"
                              />
                              <feBlend
                                mode="normal"
                                in2="shape"
                                result="effect1_innerShadow_422_23194"
                              />
                            </filter>
                            <filter
                              id="filter3_i_422_23194"
                              x={28}
                              y={14}
                              width={6}
                              height={25}
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
                              <feOffset dy={2} />
                              <feGaussianBlur stdDeviation="1.5" />
                              <feComposite
                                in2="hardAlpha"
                                operator="arithmetic"
                                k2={-1}
                                k3={1}
                              />
                              <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 1 0 0 0 0 0.866667 0 0 0 1 0"
                              />
                              <feBlend
                                mode="normal"
                                in2="shape"
                                result="effect1_innerShadow_422_23194"
                              />
                            </filter>
                          </defs>
                        </svg>
                      </i>
                      <p className="font-semibold text-white max-md:text-[14px] max-sm:!text-[10px] max-sm:font-normal">
                        Real Yield (Not Just Hype)
                      </p>
                    </div>
                  </td>
                  <td
                    className="border border-[#443828] px-[10px] py-[14px] max-md:p-2 last:border-r-0 align-middle sticky"
                    style={{ left: 210 }}
                  >
                    <div className="flex items-start gap-[7px] max-sm:justify-center">
                      <i className="inline-flex items-center justify-center leading-[0] flex-shrink-0">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g filter="url(#filter0_i_422_23221)">
                            <path
                              d="M16.0718 3.21387C12.6432 3.7853 10.8337 1.7853 10.3575 0.713867C8.92962 0.713867 7.49972 2.49958 6.78544 3.21387C6.07115 3.92815 3.57115 3.21387 3.21467 3.57101C2.85819 3.92815 3.21467 6.07101 2.85753 7.14244C2.50039 8.21387 1.07181 8.57101 0.714672 9.64244C0.357529 10.7139 2.14324 11.4282 2.85753 11.7853C3.57181 12.1424 3.21467 14.6424 3.21467 15.3567C3.21467 16.071 3.21467 16.7853 4.2861 16.7853C5.35753 16.7853 7.50039 17.1424 8.21467 17.4996C8.7861 17.7853 9.64324 18.8091 10.0004 19.2853C10.3575 19.0472 11.2147 18.3567 11.7861 17.4996C12.3575 16.6424 14.8813 16.6663 16.0718 16.7853C16.3099 16.6663 16.7147 16.2853 16.429 15.7139C16.1432 15.1424 16.7861 13.3329 17.1432 12.4996C17.7385 12.0234 18.929 10.7853 18.929 9.64244C17.5004 8.92815 16.7861 5.35672 16.0718 3.21387Z"
                              fill="#0F3C3C"
                            />
                          </g>
                          <path
                            d="M19.5137 8.82187L18.1496 7.45785C17.8259 7.13412 17.5606 6.49359 17.5606 6.03534V4.10584C17.5606 3.18958 16.8111 2.44007 15.8939 2.43909H13.9644C13.5061 2.43909 12.8656 2.17386 12.5419 1.84983L11.1781 0.485817C10.5301 -0.161939 9.4691 -0.161939 8.8211 0.485817L7.45733 1.85057C7.13331 2.1743 6.49209 2.43983 6.03482 2.43983H4.10615C3.18989 2.43983 2.4394 3.18934 2.4394 4.10658V6.03432C2.4394 6.49257 2.17416 7.13305 1.85038 7.45683L0.486366 8.82158C-0.162122 9.46933 -0.162122 10.5298 0.486366 11.1791L1.85038 12.5431C2.17436 12.8671 2.4394 13.5081 2.4394 13.9656V15.8944C2.4394 16.8107 3.18989 17.5612 4.10615 17.5612H6.03491C6.49317 17.5612 7.13365 17.8264 7.45743 18.1502L8.8212 19.5142C9.4692 20.1619 10.5302 20.1619 11.1782 19.5142L12.542 18.1502C12.866 17.8262 13.5062 17.5612 13.9645 17.5612H15.894C16.8112 17.5612 17.5607 16.8107 17.5607 15.8944V13.9656C17.5607 13.5066 17.8262 12.8669 18.1497 12.5431L19.5138 11.1791C20.1612 10.5299 20.1612 9.46938 19.5137 8.82187ZM16.9714 11.3648C16.3366 11.9981 15.8937 13.0689 15.8937 13.9659V15.8946H13.9642C13.0675 15.8946 11.9972 16.3374 11.3634 16.9721L9.99943 18.3362L8.63541 16.9721C8.00064 16.3374 6.9314 15.8946 6.03467 15.8946H4.10591V13.9659C4.10591 13.0689 3.66313 11.9996 3.02841 11.3649L1.6644 10.0001L3.02841 8.6354C3.66318 8.00141 4.10591 6.93212 4.10591 6.03441V4.10667H6.03467C6.9314 4.10667 8.00069 3.66317 8.63541 3.02918L9.99943 1.66443L11.3637 3.02845C11.9974 3.66322 13.0677 4.10594 13.9644 4.10594H15.8939V6.03544C15.8939 6.93217 16.3367 8.0017 16.9717 8.63642L18.3351 10.0002L16.9714 11.3648Z"
                            fill="#FF8800"
                          />
                          <path
                            d="M13.8196 6.25L8.6753 11.3933L6.17627 8.894L4.99805 10.0725L8.6753 13.75L14.9981 7.42827L13.8196 6.25Z"
                            fill="#FF8800"
                          />
                          <defs>
                            <filter
                              id="filter0_i_422_23221"
                              x="0.667969"
                              y="0.713867"
                              width="18.2617"
                              height="23.5713"
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
                                result="effect1_innerShadow_422_23221"
                              />
                            </filter>
                          </defs>
                        </svg>
                      </i>
                      <p className="text-[12px] text-white max-sm:hidden">
                        Backed by mining + fund performance{/* */}{" "}
                      </p>
                    </div>
                  </td>
                  <td
                    className="border border-[#443828] px-[10px] py-[14px] max-md:p-2 last:border-r-0 align-middle"
                    style={{ left: 210 }}
                  >
                    <div className="flex items-start gap-[7px] max-sm:justify-center">
                      <i className="inline-flex items-center justify-center leading-[0] flex-shrink-0">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_654_970)">
                            <g filter="url(#filter0_i_654_970)">
                              <circle
                                cx="10.0006"
                                cy="10.0001"
                                r="9.28571"
                                fill="#0F3C3C"
                              />
                            </g>
                            <path
                              d="M10 0C4.47297 0 0 4.47254 0 10C0 15.5271 4.47254 20 10 20C15.527 20 20 15.5275 20 10C20 4.47293 15.5275 0 10 0ZM10 18.4375C5.33656 18.4375 1.5625 14.6638 1.5625 10C1.5625 5.33652 5.33621 1.5625 10 1.5625C14.6634 1.5625 18.4375 5.33621 18.4375 10C18.4375 14.6635 14.6638 18.4375 10 18.4375Z"
                              fill="#F30E11"
                            />
                            <path
                              d="M13.4211 12.3163L11.1046 9.99978L13.4211 7.68329C13.7262 7.37821 13.7262 6.88356 13.4212 6.57845C13.116 6.27333 12.6214 6.27337 12.3163 6.57845L9.9998 8.89493L7.68327 6.57845C7.37823 6.27333 6.88351 6.27333 6.57843 6.57845C6.27335 6.88356 6.27335 7.37821 6.57847 7.68329L8.89495 9.99978L6.57847 12.3163C6.27335 12.6214 6.27331 13.116 6.57843 13.4211C6.88362 13.7263 7.37827 13.7261 7.68327 13.4211L9.9998 11.1046L12.3163 13.4211C12.6213 13.7262 13.116 13.7262 13.4212 13.4211C13.7263 13.116 13.7262 12.6213 13.4211 12.3163Z"
                              fill="#F30E11"
                            />
                          </g>
                          <defs>
                            <filter
                              id="filter0_i_654_970"
                              x="0.714844"
                              y="0.714355"
                              width="18.5723"
                              height="23.5713"
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
                                values="0 0 0 0 1 0 0 0 0 0.0509804 0 0 0 0 0.65098 0 0 0 1 0"
                              />
                              <feBlend
                                mode="normal"
                                in2="shape"
                                result="effect1_innerShadow_654_970"
                              />
                            </filter>
                            <clipPath id="clip0_654_970">
                              <rect width={20} height={20} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </i>
                      <p className="text-[12px] text-white max-sm:hidden">
                        Trading-only, no yield{/* */}{" "}
                      </p>
                    </div>
                  </td>
                  <td
                    className="border border-[#443828] px-[10px] py-[14px] max-md:p-2 last:border-r-0 align-middle"
                    style={{ left: 210 }}
                  >
                    <div className="flex items-start gap-[7px] max-sm:justify-center">
                      <i className="inline-flex items-center justify-center leading-[0] flex-shrink-0">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_654_978)">
                            <g filter="url(#filter0_i_654_978)">
                              <circle
                                cx="10.0006"
                                cy="10.0001"
                                r="9.28571"
                                fill="#0F3C3C"
                              />
                            </g>
                            <path
                              d="M10 0C4.47297 0 0 4.47254 0 10C0 15.5271 4.47254 20 10 20C15.527 20 20 15.5275 20 10C20 4.47293 15.5275 0 10 0ZM10 18.4375C5.33656 18.4375 1.5625 14.6638 1.5625 10C1.5625 5.33652 5.33621 1.5625 10 1.5625C14.6634 1.5625 18.4375 5.33621 18.4375 10C18.4375 14.6635 14.6638 18.4375 10 18.4375Z"
                              fill="#FFFF00"
                            />
                          </g>
                          <defs>
                            <filter
                              id="filter0_i_654_978"
                              x="0.714844"
                              y="0.714355"
                              width="18.5723"
                              height="23.5713"
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
                                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 0 0 0 0 1 0"
                              />
                              <feBlend
                                mode="normal"
                                in2="shape"
                                result="effect1_innerShadow_654_978"
                              />
                            </filter>
                            <clipPath id="clip0_654_978">
                              <rect width={20} height={20} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </i>
                      <p className="text-[12px] text-white max-sm:hidden">
                        Dividend ETFs, not crypto yields{/* */}{" "}
                      </p>
                    </div>
                  </td>
                  <td
                    className="border border-[#443828] px-[10px] py-[14px] max-md:p-2 last:border-r-0 align-middle"
                    style={{ left: 210 }}
                  >
                    <div className="flex items-start gap-[7px] max-sm:justify-center">
                      <i className="inline-flex items-center justify-center leading-[0] flex-shrink-0">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_654_978)">
                            <g filter="url(#filter0_i_654_978)">
                              <circle
                                cx="10.0006"
                                cy="10.0001"
                                r="9.28571"
                                fill="#0F3C3C"
                              />
                            </g>
                            <path
                              d="M10 0C4.47297 0 0 4.47254 0 10C0 15.5271 4.47254 20 10 20C15.527 20 20 15.5275 20 10C20 4.47293 15.5275 0 10 0ZM10 18.4375C5.33656 18.4375 1.5625 14.6638 1.5625 10C1.5625 5.33652 5.33621 1.5625 10 1.5625C14.6634 1.5625 18.4375 5.33621 18.4375 10C18.4375 14.6635 14.6638 18.4375 10 18.4375Z"
                              fill="#FFFF00"
                            />
                          </g>
                          <defs>
                            <filter
                              id="filter0_i_654_978"
                              x="0.714844"
                              y="0.714355"
                              width="18.5723"
                              height="23.5713"
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
                                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 0 0 0 0 1 0"
                              />
                              <feBlend
                                mode="normal"
                                in2="shape"
                                result="effect1_innerShadow_654_978"
                              />
                            </filter>
                            <clipPath id="clip0_654_978">
                              <rect width={20} height={20} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </i>
                      <p className="text-[12px] text-white max-sm:hidden">
                        Staking rewards only{/* */}{" "}
                      </p>
                    </div>
                  </td>
                  <td
                    className="border border-[#443828] px-[10px] py-[14px] max-md:p-2 last:border-r-0 align-middle"
                    style={{ left: 210 }}
                  >
                    <div className="flex items-start gap-[7px] max-sm:justify-center">
                      <i className="inline-flex items-center justify-center leading-[0] flex-shrink-0">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_654_978)">
                            <g filter="url(#filter0_i_654_978)">
                              <circle
                                cx="10.0006"
                                cy="10.0001"
                                r="9.28571"
                                fill="#0F3C3C"
                              />
                            </g>
                            <path
                              d="M10 0C4.47297 0 0 4.47254 0 10C0 15.5271 4.47254 20 10 20C15.527 20 20 15.5275 20 10C20 4.47293 15.5275 0 10 0ZM10 18.4375C5.33656 18.4375 1.5625 14.6638 1.5625 10C1.5625 5.33652 5.33621 1.5625 10 1.5625C14.6634 1.5625 18.4375 5.33621 18.4375 10C18.4375 14.6635 14.6638 18.4375 10 18.4375Z"
                              fill="#FFFF00"
                            />
                          </g>
                          <defs>
                            <filter
                              id="filter0_i_654_978"
                              x="0.714844"
                              y="0.714355"
                              width="18.5723"
                              height="23.5713"
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
                                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 0 0 0 0 1 0"
                              />
                              <feBlend
                                mode="normal"
                                in2="shape"
                                result="effect1_innerShadow_654_978"
                              />
                            </filter>
                            <clipPath id="clip0_654_978">
                              <rect width={20} height={20} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </i>
                      <p className="text-[12px] text-white max-sm:hidden">
                        Dividends, no crypto yields{/* */}{" "}
                      </p>
                    </div>
                  </td>
                  <td
                    className="border border-[#443828] px-[10px] py-[14px] max-md:p-2 last:border-r-0 align-middle"
                    style={{ left: 210 }}
                  >
                    <div className="flex items-start gap-[7px] max-sm:justify-center">
                      <i className="inline-flex items-center justify-center leading-[0] flex-shrink-0">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_654_978)">
                            <g filter="url(#filter0_i_654_978)">
                              <circle
                                cx="10.0006"
                                cy="10.0001"
                                r="9.28571"
                                fill="#0F3C3C"
                              />
                            </g>
                            <path
                              d="M10 0C4.47297 0 0 4.47254 0 10C0 15.5271 4.47254 20 10 20C15.527 20 20 15.5275 20 10C20 4.47293 15.5275 0 10 0ZM10 18.4375C5.33656 18.4375 1.5625 14.6638 1.5625 10C1.5625 5.33652 5.33621 1.5625 10 1.5625C14.6634 1.5625 18.4375 5.33621 18.4375 10C18.4375 14.6635 14.6638 18.4375 10 18.4375Z"
                              fill="#FFFF00"
                            />
                          </g>
                          <defs>
                            <filter
                              id="filter0_i_654_978"
                              x="0.714844"
                              y="0.714355"
                              width="18.5723"
                              height="23.5713"
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
                                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 0 0 0 0 1 0"
                              />
                              <feBlend
                                mode="normal"
                                in2="shape"
                                result="effect1_innerShadow_654_978"
                              />
                            </filter>
                            <clipPath id="clip0_654_978">
                              <rect width={20} height={20} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </i>
                      <p className="text-[12px] text-white max-sm:hidden">
                        Dividends &amp; index growth only{/* */}{" "}
                      </p>
                    </div>
                  </td>
                </tr>
                <tr
                  className="last:[&>td]:border-b-0"
                  data-aos="fade-up"
                  data-aos-delay={350}
                >
                  <td className="border border-[#443828] max-sm:!w-[10%] border-l-0 px-6 py-4 max-md:p-2 first:sticky left-0 transition-all duration-300 ease first:bg-transparent">
                    <div className="flex items-center gap-3">
                      <i className="inline-flex items-center justify-center leading-[0] flex-shrink-0 max-md:size-[30px] max-sm:hidden">
                        <svg
                          width={38}
                          height={38}
                          viewBox="0 0 38 38"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_422_23175)">
                            <g filter="url(#filter0_i_422_23175)">
                              <path
                                d="M31 13H0.5V35C0.5 36.2 1.16667 37.1667 1.5 37.5H7V33.5C7.66667 33 9.3 32 10.5 32C8 29 12 25 14 25C16 25 19 29 23 32C23.4 29.2 28.5 26.1667 31 25V13Z"
                                fill="#103539"
                              />
                            </g>
                            <path
                              d="M17.5726 6.04671C17.6071 6.10193 17.6121 6.17051 17.5861 6.23025L16.6626 8.35143C16.2424 9.31664 17.1486 10.4034 18.1803 10.1471L20.4257 9.58991C20.4889 9.57425 20.5555 9.59066 20.6043 9.63378L22.3362 11.1677C23.124 11.8652 24.4377 11.3395 24.513 10.2791L24.677 7.97135C24.6793 7.93938 24.6893 7.90844 24.7062 7.88121C24.7231 7.85397 24.7463 7.83126 24.774 7.81505L26.7679 6.6418C27.6754 6.10794 27.5805 4.69623 26.5955 4.297L24.4514 3.42798C24.4217 3.41594 24.3954 3.39686 24.3747 3.37238C24.354 3.34791 24.3396 3.31877 24.3327 3.28748L23.8331 1.02849C23.6057 0.000555549 22.2339 -0.345675 21.5498 0.467837L20.0607 2.23847C20.0402 2.26305 20.0139 2.28222 19.9842 2.29433C19.9545 2.30644 19.9224 2.31111 19.8905 2.30794L17.5878 2.08506C16.54 1.98457 15.7864 3.1809 16.349 4.0834L17.5726 6.04671ZM17.2933 3.28577C17.3175 3.24681 17.3742 3.18283 17.4804 3.19315L19.7831 3.41603C19.9946 3.43652 20.208 3.40525 20.4048 3.32492C20.6016 3.24459 20.7759 3.1176 20.9127 2.95491L22.4017 1.18427C22.5311 1.03049 22.6821 1.15169 22.746 1.26881L23.2456 3.52788C23.2915 3.73541 23.3872 3.92867 23.5243 4.091C23.6615 4.25333 23.8362 4.37987 24.0331 4.45969L26.1772 5.32872C26.3324 5.43582 26.3411 5.55368 26.2032 5.6823L24.2093 6.85555C24.026 6.96332 23.8718 7.11404 23.7598 7.29471C23.6478 7.47538 23.5814 7.68057 23.5664 7.89261L23.4024 10.2003C23.3486 10.381 23.2392 10.4256 23.0742 10.3343L21.3423 8.80045C21.0359 8.52896 20.5555 8.41073 20.1574 8.50944L17.912 9.06667C17.7236 9.0712 17.6473 8.98095 17.6832 8.79592L18.6067 6.67468C18.6916 6.4798 18.7278 6.26721 18.7122 6.05523C18.6966 5.84325 18.6297 5.63823 18.5173 5.45786L17.2935 3.49448C17.237 3.40371 17.2692 3.32474 17.2933 3.28577ZM4.63318 4.51409L5.85192 5.31439L5.88362 6.77213C5.90195 7.61807 6.90813 8.10257 7.58011 7.56397L8.71781 6.65211L10.1139 7.07241C10.928 7.31756 11.6921 6.49885 11.3913 5.70367L10.8757 4.33983L11.7069 3.14186C12.1917 2.44309 11.649 1.46415 10.7999 1.504L9.34347 1.57295L8.46101 0.412247C7.92508 -0.177569 6.85774 -0.0893976 6.62306 0.768794L6.23853 2.17524L4.862 2.65581C4.05939 2.9362 3.92253 4.04748 4.63318 4.51409ZM6.63998 3.21438C6.79977 3.15861 6.9436 3.06481 7.05906 2.94107C7.17452 2.81733 7.25816 2.66736 7.30275 2.5041L7.65982 1.19808L8.47919 2.27581C8.58171 2.41046 8.71539 2.51821 8.86874 2.5898C9.02209 2.6614 9.19052 2.69469 9.35958 2.68683L10.712 2.62278L9.94019 3.73517C9.84369 3.87423 9.78246 4.03468 9.76177 4.20267C9.74109 4.37067 9.76156 4.54117 9.82144 4.69949L10.3002 5.96596L9.00385 5.57565C8.84178 5.52685 8.67027 5.5182 8.50412 5.55043C8.33796 5.58267 8.18213 5.65482 8.05006 5.76067L6.99356 6.60736L6.96409 5.25376C6.96044 5.08454 6.91569 4.91876 6.83371 4.77069C6.75172 4.62261 6.63495 4.4967 6.49347 4.40381L5.36171 3.66065L6.63998 3.21438Z"
                              fill="#FF8800"
                              stroke="#FF8800"
                              strokeWidth="0.5"
                            />
                            <path
                              d="M35.959 32.0309H34.6157C35.9798 29.5499 34.7455 24.931 31.5772 24.9506V13.1268C31.5772 12.9792 31.5185 12.8376 31.4141 12.7332C31.3098 12.6289 31.1682 12.5702 31.0205 12.5702H16.5055C16.5125 12.2081 16.3455 11.8648 16.046 11.6458L14.6454 10.6214C14.6442 10.6206 14.6433 10.6194 14.6426 10.6181C14.642 10.6168 14.6417 10.6153 14.6417 10.6138L14.6915 8.87923C14.7177 7.9656 13.6539 7.40198 12.9127 7.93695L11.5058 8.95241C11.5046 8.9533 11.5032 8.95388 11.5017 8.9541C11.5002 8.95432 11.4987 8.95417 11.4973 8.95368L9.86315 8.37032C9.00229 8.06283 8.13749 8.90061 8.4173 9.77082L8.94826 11.4227C8.94872 11.4241 8.94883 11.4257 8.94857 11.4271C8.94831 11.4286 8.9477 11.43 8.94677 11.4312L8.06817 12.5702H0.556641C0.40901 12.5702 0.267427 12.6289 0.163036 12.7332C0.0586459 12.8376 0 12.9792 0 13.1268L0 16.516C0 16.6636 0.0586459 16.8052 0.163036 16.9096C0.267427 17.014 0.40901 17.0726 0.556641 17.0726C0.704271 17.0726 0.845855 17.014 0.950245 16.9096C1.05464 16.8052 1.11328 16.6636 1.11328 16.516V13.6835H12.662V24.9587C9.61548 25.1072 8.47727 29.6125 9.80719 32.0308H8.46391C7.33845 32.0308 6.42289 32.9464 6.42289 34.0718V36.8867H2.03931C1.52868 36.8867 1.11328 36.4713 1.11328 35.9607V19.6623C1.09599 18.9376 0.0263477 18.9161 0 19.6623V35.9606C0 37.0852 0.91482 38 2.03931 38H30.8034C31.5237 37.9813 31.5532 36.9143 30.8034 36.8867H25.3381V33.1442H35.959C36.4706 33.1442 36.8867 33.5603 36.8867 34.0719V36.8867H33.7646C33.6169 36.8867 33.4753 36.9454 33.371 37.0498C33.2666 37.1541 33.2079 37.2957 33.2079 37.4434C33.2079 37.591 33.2666 37.7326 33.371 37.837C33.4753 37.9414 33.6169 38 33.7646 38H37.4434C37.591 38 37.7326 37.9414 37.837 37.837C37.9414 37.7326 38 37.591 38 37.4434V34.0719C38 32.9464 37.0844 32.0309 35.959 32.0309ZM33.8396 28.1603C34.2888 29.6551 34.0032 31.3709 33.2216 32.0308H23.2582C24.5597 30.2045 27.9095 26.0624 31.5151 26.0624C33.0441 26.0625 33.65 27.5295 33.8396 28.1603ZM30.4639 25.0413C27.5515 25.386 23.9257 28.9769 22.2114 31.5804C21.2531 30.2027 20.1561 28.907 18.9152 27.7753V13.6835H30.4639V25.0413ZM10.0083 11.0821L9.47558 9.42623C9.4768 9.42377 9.47873 9.42173 9.48113 9.42041C9.48354 9.41908 9.48629 9.41852 9.48902 9.4188L11.1232 10.0022C11.2946 10.0634 11.4783 10.082 11.6585 10.0564C11.8386 10.0308 12.0099 9.96174 12.1574 9.85521L13.5676 8.83686C13.5703 8.83724 13.5728 8.83845 13.5748 8.84032C13.5768 8.84219 13.5782 8.84464 13.5788 8.84732L13.529 10.5818C13.5237 10.7637 13.5628 10.9442 13.6428 11.1076C13.7228 11.2711 13.8413 11.4126 13.9882 11.52L15.3924 12.5465C15.3888 12.5631 15.3773 12.5709 15.358 12.5702H9.47425L9.82834 12.1111C9.93954 11.967 10.014 11.7981 10.0454 11.6188C10.0767 11.4396 10.064 11.2554 10.0083 11.0821ZM17.8019 13.6835V26.8476C16.4337 25.8154 15.0872 25.2014 13.7753 25.0125V13.6835H17.8019ZM10.5832 28.1603C10.7728 27.5295 11.3787 26.0625 12.9077 26.0625C16.5077 26.0625 19.8606 30.2044 21.1639 32.0309H11.2012C10.4196 31.3709 10.134 29.6551 10.5832 28.1603ZM7.5361 34.0719C7.5361 33.5603 7.95224 33.1442 8.46383 33.1442H19.0848V36.8867H7.5361V34.0719ZM24.2247 36.8867H20.1981V33.1442H24.2247V36.8867ZM3.4108 9.86553C4.12716 9.86553 4.12834 8.75225 3.4108 8.75225C2.69444 8.75225 2.69325 9.86553 3.4108 9.86553ZM13.7153 5.26909C14.4316 5.26909 14.4328 4.1558 13.7153 4.1558C12.9989 4.1558 12.9978 5.26909 13.7153 5.26909ZM15.3462 1.11328C16.0626 1.11328 16.0638 0 15.3462 0C14.6299 0 14.6287 1.11328 15.3462 1.11328ZM27.6531 10.681C28.3694 10.681 28.3706 9.56776 27.6531 9.56776C26.9368 9.56776 26.9356 10.681 27.6531 10.681Z"
                              fill="#FF8800"
                              stroke="#FF8800"
                              strokeWidth="0.5"
                            />
                          </g>
                          <defs>
                            <filter
                              id="filter0_i_422_23175"
                              x="0.5"
                              y={13}
                              width="30.5"
                              height="28.5"
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
                              <feOffset dy={4} />
                              <feGaussianBlur stdDeviation="3.5" />
                              <feComposite
                                in2="hardAlpha"
                                operator="arithmetic"
                                k2={-1}
                                k3={1}
                              />
                              <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 1 0 0 0 0 0.866667 0 0 0 1 0"
                              />
                              <feBlend
                                mode="normal"
                                in2="shape"
                                result="effect1_innerShadow_422_23175"
                              />
                            </filter>
                            <clipPath id="clip0_422_23175">
                              <rect width={38} height={38} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </i>
                      <p className="font-semibold text-white max-md:text-[14px] max-sm:!text-[10px] max-sm:font-normal">
                        Daily/Weekly Payouts
                      </p>
                    </div>
                  </td>
                  <td
                    className="border border-[#443828] px-[10px] py-[14px] max-md:p-2 last:border-r-0 align-middle sticky"
                    style={{ left: 210 }}
                  >
                    <div className="flex items-start gap-[7px] max-sm:justify-center">
                      <i className="inline-flex items-center justify-center leading-[0] flex-shrink-0">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g filter="url(#filter0_i_422_23221)">
                            <path
                              d="M16.0718 3.21387C12.6432 3.7853 10.8337 1.7853 10.3575 0.713867C8.92962 0.713867 7.49972 2.49958 6.78544 3.21387C6.07115 3.92815 3.57115 3.21387 3.21467 3.57101C2.85819 3.92815 3.21467 6.07101 2.85753 7.14244C2.50039 8.21387 1.07181 8.57101 0.714672 9.64244C0.357529 10.7139 2.14324 11.4282 2.85753 11.7853C3.57181 12.1424 3.21467 14.6424 3.21467 15.3567C3.21467 16.071 3.21467 16.7853 4.2861 16.7853C5.35753 16.7853 7.50039 17.1424 8.21467 17.4996C8.7861 17.7853 9.64324 18.8091 10.0004 19.2853C10.3575 19.0472 11.2147 18.3567 11.7861 17.4996C12.3575 16.6424 14.8813 16.6663 16.0718 16.7853C16.3099 16.6663 16.7147 16.2853 16.429 15.7139C16.1432 15.1424 16.7861 13.3329 17.1432 12.4996C17.7385 12.0234 18.929 10.7853 18.929 9.64244C17.5004 8.92815 16.7861 5.35672 16.0718 3.21387Z"
                              fill="#0F3C3C"
                            />
                          </g>
                          <path
                            d="M19.5137 8.82187L18.1496 7.45785C17.8259 7.13412 17.5606 6.49359 17.5606 6.03534V4.10584C17.5606 3.18958 16.8111 2.44007 15.8939 2.43909H13.9644C13.5061 2.43909 12.8656 2.17386 12.5419 1.84983L11.1781 0.485817C10.5301 -0.161939 9.4691 -0.161939 8.8211 0.485817L7.45733 1.85057C7.13331 2.1743 6.49209 2.43983 6.03482 2.43983H4.10615C3.18989 2.43983 2.4394 3.18934 2.4394 4.10658V6.03432C2.4394 6.49257 2.17416 7.13305 1.85038 7.45683L0.486366 8.82158C-0.162122 9.46933 -0.162122 10.5298 0.486366 11.1791L1.85038 12.5431C2.17436 12.8671 2.4394 13.5081 2.4394 13.9656V15.8944C2.4394 16.8107 3.18989 17.5612 4.10615 17.5612H6.03491C6.49317 17.5612 7.13365 17.8264 7.45743 18.1502L8.8212 19.5142C9.4692 20.1619 10.5302 20.1619 11.1782 19.5142L12.542 18.1502C12.866 17.8262 13.5062 17.5612 13.9645 17.5612H15.894C16.8112 17.5612 17.5607 16.8107 17.5607 15.8944V13.9656C17.5607 13.5066 17.8262 12.8669 18.1497 12.5431L19.5138 11.1791C20.1612 10.5299 20.1612 9.46938 19.5137 8.82187ZM16.9714 11.3648C16.3366 11.9981 15.8937 13.0689 15.8937 13.9659V15.8946H13.9642C13.0675 15.8946 11.9972 16.3374 11.3634 16.9721L9.99943 18.3362L8.63541 16.9721C8.00064 16.3374 6.9314 15.8946 6.03467 15.8946H4.10591V13.9659C4.10591 13.0689 3.66313 11.9996 3.02841 11.3649L1.6644 10.0001L3.02841 8.6354C3.66318 8.00141 4.10591 6.93212 4.10591 6.03441V4.10667H6.03467C6.9314 4.10667 8.00069 3.66317 8.63541 3.02918L9.99943 1.66443L11.3637 3.02845C11.9974 3.66322 13.0677 4.10594 13.9644 4.10594H15.8939V6.03544C15.8939 6.93217 16.3367 8.0017 16.9717 8.63642L18.3351 10.0002L16.9714 11.3648Z"
                            fill="#FF8800"
                          />
                          <path
                            d="M13.8196 6.25L8.6753 11.3933L6.17627 8.894L4.99805 10.0725L8.6753 13.75L14.9981 7.42827L13.8196 6.25Z"
                            fill="#FF8800"
                          />
                          <defs>
                            <filter
                              id="filter0_i_422_23221"
                              x="0.667969"
                              y="0.713867"
                              width="18.2617"
                              height="23.5713"
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
                                result="effect1_innerShadow_422_23221"
                              />
                            </filter>
                          </defs>
                        </svg>
                      </i>
                      <p className="text-[12px] text-white max-sm:hidden">
                        Weekly mining yields, staking rewards{/* */}{" "}
                      </p>
                    </div>
                  </td>
                  <td
                    className="border border-[#443828] px-[10px] py-[14px] max-md:p-2 last:border-r-0 align-middle"
                    style={{ left: 210 }}
                  >
                    <div className="flex items-start gap-[7px] max-sm:justify-center">
                      <i className="inline-flex items-center justify-center leading-[0] flex-shrink-0">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_654_970)">
                            <g filter="url(#filter0_i_654_970)">
                              <circle
                                cx="10.0006"
                                cy="10.0001"
                                r="9.28571"
                                fill="#0F3C3C"
                              />
                            </g>
                            <path
                              d="M10 0C4.47297 0 0 4.47254 0 10C0 15.5271 4.47254 20 10 20C15.527 20 20 15.5275 20 10C20 4.47293 15.5275 0 10 0ZM10 18.4375C5.33656 18.4375 1.5625 14.6638 1.5625 10C1.5625 5.33652 5.33621 1.5625 10 1.5625C14.6634 1.5625 18.4375 5.33621 18.4375 10C18.4375 14.6635 14.6638 18.4375 10 18.4375Z"
                              fill="#F30E11"
                            />
                            <path
                              d="M13.4211 12.3163L11.1046 9.99978L13.4211 7.68329C13.7262 7.37821 13.7262 6.88356 13.4212 6.57845C13.116 6.27333 12.6214 6.27337 12.3163 6.57845L9.9998 8.89493L7.68327 6.57845C7.37823 6.27333 6.88351 6.27333 6.57843 6.57845C6.27335 6.88356 6.27335 7.37821 6.57847 7.68329L8.89495 9.99978L6.57847 12.3163C6.27335 12.6214 6.27331 13.116 6.57843 13.4211C6.88362 13.7263 7.37827 13.7261 7.68327 13.4211L9.9998 11.1046L12.3163 13.4211C12.6213 13.7262 13.116 13.7262 13.4212 13.4211C13.7263 13.116 13.7262 12.6213 13.4211 12.3163Z"
                              fill="#F30E11"
                            />
                          </g>
                          <defs>
                            <filter
                              id="filter0_i_654_970"
                              x="0.714844"
                              y="0.714355"
                              width="18.5723"
                              height="23.5713"
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
                                values="0 0 0 0 1 0 0 0 0 0.0509804 0 0 0 0 0.65098 0 0 0 1 0"
                              />
                              <feBlend
                                mode="normal"
                                in2="shape"
                                result="effect1_innerShadow_654_970"
                              />
                            </filter>
                            <clipPath id="clip0_654_970">
                              <rect width={20} height={20} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </i>
                      <p className="text-[12px] text-white max-sm:hidden">
                        No yield payouts{/* */}{" "}
                      </p>
                    </div>
                  </td>
                  <td
                    className="border border-[#443828] px-[10px] py-[14px] max-md:p-2 last:border-r-0 align-middle"
                    style={{ left: 210 }}
                  >
                    <div className="flex items-start gap-[7px] max-sm:justify-center">
                      <i className="inline-flex items-center justify-center leading-[0] flex-shrink-0">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_654_970)">
                            <g filter="url(#filter0_i_654_970)">
                              <circle
                                cx="10.0006"
                                cy="10.0001"
                                r="9.28571"
                                fill="#0F3C3C"
                              />
                            </g>
                            <path
                              d="M10 0C4.47297 0 0 4.47254 0 10C0 15.5271 4.47254 20 10 20C15.527 20 20 15.5275 20 10C20 4.47293 15.5275 0 10 0ZM10 18.4375C5.33656 18.4375 1.5625 14.6638 1.5625 10C1.5625 5.33652 5.33621 1.5625 10 1.5625C14.6634 1.5625 18.4375 5.33621 18.4375 10C18.4375 14.6635 14.6638 18.4375 10 18.4375Z"
                              fill="#F30E11"
                            />
                            <path
                              d="M13.4211 12.3163L11.1046 9.99978L13.4211 7.68329C13.7262 7.37821 13.7262 6.88356 13.4212 6.57845C13.116 6.27333 12.6214 6.27337 12.3163 6.57845L9.9998 8.89493L7.68327 6.57845C7.37823 6.27333 6.88351 6.27333 6.57843 6.57845C6.27335 6.88356 6.27335 7.37821 6.57847 7.68329L8.89495 9.99978L6.57847 12.3163C6.27335 12.6214 6.27331 13.116 6.57843 13.4211C6.88362 13.7263 7.37827 13.7261 7.68327 13.4211L9.9998 11.1046L12.3163 13.4211C12.6213 13.7262 13.116 13.7262 13.4212 13.4211C13.7263 13.116 13.7262 12.6213 13.4211 12.3163Z"
                              fill="#F30E11"
                            />
                          </g>
                          <defs>
                            <filter
                              id="filter0_i_654_970"
                              x="0.714844"
                              y="0.714355"
                              width="18.5723"
                              height="23.5713"
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
                                values="0 0 0 0 1 0 0 0 0 0.0509804 0 0 0 0 0.65098 0 0 0 1 0"
                              />
                              <feBlend
                                mode="normal"
                                in2="shape"
                                result="effect1_innerShadow_654_970"
                              />
                            </filter>
                            <clipPath id="clip0_654_970">
                              <rect width={20} height={20} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </i>
                      <p className="text-[12px] text-white max-sm:hidden">
                        Quarterly dividend payouts{/* */}{" "}
                      </p>
                    </div>
                  </td>
                  <td
                    className="border border-[#443828] px-[10px] py-[14px] max-md:p-2 last:border-r-0 align-middle"
                    style={{ left: 210 }}
                  >
                    <div className="flex items-start gap-[7px] max-sm:justify-center">
                      <i className="inline-flex items-center justify-center leading-[0] flex-shrink-0">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_654_978)">
                            <g filter="url(#filter0_i_654_978)">
                              <circle
                                cx="10.0006"
                                cy="10.0001"
                                r="9.28571"
                                fill="#0F3C3C"
                              />
                            </g>
                            <path
                              d="M10 0C4.47297 0 0 4.47254 0 10C0 15.5271 4.47254 20 10 20C15.527 20 20 15.5275 20 10C20 4.47293 15.5275 0 10 0ZM10 18.4375C5.33656 18.4375 1.5625 14.6638 1.5625 10C1.5625 5.33652 5.33621 1.5625 10 1.5625C14.6634 1.5625 18.4375 5.33621 18.4375 10C18.4375 14.6635 14.6638 18.4375 10 18.4375Z"
                              fill="#FFFF00"
                            />
                          </g>
                          <defs>
                            <filter
                              id="filter0_i_654_978"
                              x="0.714844"
                              y="0.714355"
                              width="18.5723"
                              height="23.5713"
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
                                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 0 0 0 0 1 0"
                              />
                              <feBlend
                                mode="normal"
                                in2="shape"
                                result="effect1_innerShadow_654_978"
                              />
                            </filter>
                            <clipPath id="clip0_654_978">
                              <rect width={20} height={20} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </i>
                      <p className="text-[12px] text-white max-sm:hidden">
                        Staking/APY rewards{/* */}{" "}
                      </p>
                    </div>
                  </td>
                  <td
                    className="border border-[#443828] px-[10px] py-[14px] max-md:p-2 last:border-r-0 align-middle"
                    style={{ left: 210 }}
                  >
                    <div className="flex items-start gap-[7px] max-sm:justify-center">
                      <i className="inline-flex items-center justify-center leading-[0] flex-shrink-0">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_654_970)">
                            <g filter="url(#filter0_i_654_970)">
                              <circle
                                cx="10.0006"
                                cy="10.0001"
                                r="9.28571"
                                fill="#0F3C3C"
                              />
                            </g>
                            <path
                              d="M10 0C4.47297 0 0 4.47254 0 10C0 15.5271 4.47254 20 10 20C15.527 20 20 15.5275 20 10C20 4.47293 15.5275 0 10 0ZM10 18.4375C5.33656 18.4375 1.5625 14.6638 1.5625 10C1.5625 5.33652 5.33621 1.5625 10 1.5625C14.6634 1.5625 18.4375 5.33621 18.4375 10C18.4375 14.6635 14.6638 18.4375 10 18.4375Z"
                              fill="#F30E11"
                            />
                            <path
                              d="M13.4211 12.3163L11.1046 9.99978L13.4211 7.68329C13.7262 7.37821 13.7262 6.88356 13.4212 6.57845C13.116 6.27333 12.6214 6.27337 12.3163 6.57845L9.9998 8.89493L7.68327 6.57845C7.37823 6.27333 6.88351 6.27333 6.57843 6.57845C6.27335 6.88356 6.27335 7.37821 6.57847 7.68329L8.89495 9.99978L6.57847 12.3163C6.27335 12.6214 6.27331 13.116 6.57843 13.4211C6.88362 13.7263 7.37827 13.7261 7.68327 13.4211L9.9998 11.1046L12.3163 13.4211C12.6213 13.7262 13.116 13.7262 13.4212 13.4211C13.7263 13.116 13.7262 12.6213 13.4211 12.3163Z"
                              fill="#F30E11"
                            />
                          </g>
                          <defs>
                            <filter
                              id="filter0_i_654_970"
                              x="0.714844"
                              y="0.714355"
                              width="18.5723"
                              height="23.5713"
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
                                values="0 0 0 0 1 0 0 0 0 0.0509804 0 0 0 0 0.65098 0 0 0 1 0"
                              />
                              <feBlend
                                mode="normal"
                                in2="shape"
                                result="effect1_innerShadow_654_970"
                              />
                            </filter>
                            <clipPath id="clip0_654_970">
                              <rect width={20} height={20} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </i>
                      <p className="text-[12px] text-white max-sm:hidden">
                        Quarterly/annual dividends{/* */}{" "}
                      </p>
                    </div>
                  </td>
                  <td
                    className="border border-[#443828] px-[10px] py-[14px] max-md:p-2 last:border-r-0 align-middle"
                    style={{ left: 210 }}
                  >
                    <div className="flex items-start gap-[7px] max-sm:justify-center">
                      <i className="inline-flex items-center justify-center leading-[0] flex-shrink-0">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_654_970)">
                            <g filter="url(#filter0_i_654_970)">
                              <circle
                                cx="10.0006"
                                cy="10.0001"
                                r="9.28571"
                                fill="#0F3C3C"
                              />
                            </g>
                            <path
                              d="M10 0C4.47297 0 0 4.47254 0 10C0 15.5271 4.47254 20 10 20C15.527 20 20 15.5275 20 10C20 4.47293 15.5275 0 10 0ZM10 18.4375C5.33656 18.4375 1.5625 14.6638 1.5625 10C1.5625 5.33652 5.33621 1.5625 10 1.5625C14.6634 1.5625 18.4375 5.33621 18.4375 10C18.4375 14.6635 14.6638 18.4375 10 18.4375Z"
                              fill="#F30E11"
                            />
                            <path
                              d="M13.4211 12.3163L11.1046 9.99978L13.4211 7.68329C13.7262 7.37821 13.7262 6.88356 13.4212 6.57845C13.116 6.27333 12.6214 6.27337 12.3163 6.57845L9.9998 8.89493L7.68327 6.57845C7.37823 6.27333 6.88351 6.27333 6.57843 6.57845C6.27335 6.88356 6.27335 7.37821 6.57847 7.68329L8.89495 9.99978L6.57847 12.3163C6.27335 12.6214 6.27331 13.116 6.57843 13.4211C6.88362 13.7263 7.37827 13.7261 7.68327 13.4211L9.9998 11.1046L12.3163 13.4211C12.6213 13.7262 13.116 13.7262 13.4212 13.4211C13.7263 13.116 13.7262 12.6213 13.4211 12.3163Z"
                              fill="#F30E11"
                            />
                          </g>
                          <defs>
                            <filter
                              id="filter0_i_654_970"
                              x="0.714844"
                              y="0.714355"
                              width="18.5723"
                              height="23.5713"
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
                                values="0 0 0 0 1 0 0 0 0 0.0509804 0 0 0 0 0.65098 0 0 0 1 0"
                              />
                              <feBlend
                                mode="normal"
                                in2="shape"
                                result="effect1_innerShadow_654_970"
                              />
                            </filter>
                            <clipPath id="clip0_654_970">
                              <rect width={20} height={20} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </i>
                      <p className="text-[12px] text-white max-sm:hidden">
                        Quarterly/annual dividends{/* */}{" "}
                      </p>
                    </div>
                  </td>
                </tr>
                <tr
                  className="last:[&>td]:border-b-0"
                  data-aos="fade-up"
                  data-aos-delay={400}
                >
                  <td className="border border-[#443828] max-sm:!w-[10%] border-l-0 px-6 py-4 max-md:p-2 first:sticky left-0 transition-all duration-300 ease first:bg-transparent">
                    <div className="flex items-center gap-3">
                      <i className="inline-flex items-center justify-center leading-[0] flex-shrink-0 max-md:size-[30px] max-sm:hidden">
                        <svg
                          width={38}
                          height={38}
                          viewBox="0 0 38 38"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_422_23209)">
                            <g filter="url(#filter0_i_422_23209)">
                              <circle
                                cx="30.5"
                                cy="29.5"
                                r="7.5"
                                fill="#103539"
                              />
                            </g>
                            <g filter="url(#filter1_i_422_23209)">
                              <path
                                d="M3.5 4.5H1C0.6 4.5 0.5 5.16667 0.5 5.5V27.5C0.5 29.5 1.16667 29.6667 1.5 29.5H22.5C22.5 28.5 23.5 26 23.5 25.5C25.5 22.3 29 21.8333 30.5 22V6C30.5 5.6 30.1667 4.83333 30 4.5L27.5 4V6.5C27.5 7.7 25.8333 7.33333 25 7V4H17V6C17 7.6 15.3333 7 14.5 6.5L14 4H6V6.5C5.6 8.1 4.16667 7.16667 3.5 6.5V4.5Z"
                                fill="#103539"
                              />
                            </g>
                            <path
                              d="M7.28761 13.3453H3.59093C3.43345 13.3453 3.28243 13.4079 3.17108 13.5192C3.05973 13.6306 2.99718 13.7816 2.99718 13.9391V17.6358C2.99718 17.7933 3.05973 17.9443 3.17108 18.0557C3.28243 18.167 3.43345 18.2296 3.59093 18.2296H7.28761C7.44509 18.2296 7.59611 18.167 7.70746 18.0557C7.81881 17.9443 7.88136 17.7933 7.88136 17.6358V13.9391C7.88136 13.7816 7.81881 13.6306 7.70746 13.5192C7.59611 13.4079 7.44509 13.3453 7.28761 13.3453ZM6.69386 17.0421H4.18468V14.5328H6.69386V17.0421ZM20.2271 13.3453H16.5304C16.373 13.3453 16.2219 13.4079 16.1106 13.5192C15.9992 13.6306 15.9367 13.7816 15.9367 13.9391V17.6358C15.9367 17.7933 15.9992 17.9443 16.1106 18.0557C16.2219 18.167 16.373 18.2296 16.5304 18.2296H20.2271C20.3846 18.2296 20.5356 18.167 20.647 18.0557C20.7583 17.9443 20.8209 17.7933 20.8209 17.6358V13.9391C20.8209 13.7816 20.7583 13.6306 20.647 13.5192C20.5356 13.4079 20.3846 13.3453 20.2271 13.3453ZM19.6334 17.0421H17.1242V14.5328H19.6334V17.0421ZM23.0002 18.2296H26.6969C26.8544 18.2296 27.0054 18.167 27.1168 18.0557C27.2281 17.9443 27.2907 17.7933 27.2907 17.6358V13.9391C27.2907 13.7816 27.2281 13.6306 27.1168 13.5192C27.0054 13.4079 26.8544 13.3453 26.6969 13.3453H23.0004C22.8429 13.3453 22.6919 13.4079 22.5805 13.5192C22.4692 13.6306 22.4066 13.7816 22.4066 13.9391V17.6358C22.4066 17.7933 22.4692 17.9443 22.5805 18.0557C22.6919 18.167 22.8429 18.2296 23.0004 18.2296H23.0002ZM23.5939 14.5328H26.1032V17.0421H23.5941L23.5939 14.5328ZM7.28761 21.7574H3.59093C3.43345 21.7574 3.28243 21.8199 3.17108 21.9313C3.05973 22.0426 2.99718 22.1936 2.99718 22.3511V26.0478C2.99718 26.2053 3.05973 26.3563 3.17108 26.4676C3.28243 26.579 3.43345 26.6415 3.59093 26.6415H7.28761C7.44509 26.6415 7.59611 26.579 7.70746 26.4676C7.81881 26.3563 7.88136 26.2053 7.88136 26.0478V22.3511C7.88136 22.1936 7.81881 22.0426 7.70746 21.9313C7.59611 21.8199 7.44509 21.7574 7.28761 21.7574ZM6.69386 25.454H4.18468V22.9449H6.69386V25.454ZM20.2271 21.7574H16.5304C16.373 21.7574 16.2219 21.8199 16.1106 21.9313C15.9992 22.0426 15.9367 22.1936 15.9367 22.3511V26.0478C15.9367 26.2053 15.9992 26.3563 16.1106 26.4676C16.2219 26.579 16.373 26.6415 16.5304 26.6415H20.2271C20.3846 26.6415 20.5356 26.579 20.647 26.4676C20.7583 26.3563 20.8209 26.2053 20.8209 26.0478V22.3511C20.8209 22.1936 20.7583 22.0426 20.647 21.9313C20.5356 21.8199 20.3846 21.7574 20.2271 21.7574ZM19.6334 25.454H17.1242V22.9449H19.6334V25.454ZM31.0185 21.513V5.45669C31.0181 4.99389 30.834 4.55017 30.5068 4.22289C30.1796 3.89562 29.7359 3.71152 29.2731 3.71099H28.1558V2.18209C28.1552 1.72938 27.9751 1.29537 27.655 0.975273C27.3349 0.655174 26.9009 0.47512 26.4481 0.474609H26.0251C25.5724 0.475179 25.1385 0.655259 24.8184 0.975351C24.4983 1.29544 24.3182 1.72942 24.3177 2.18209V3.71099H17.4281V2.18209C17.4276 1.72938 17.2475 1.29537 16.9274 0.975273C16.6072 0.655174 16.1732 0.47512 15.7205 0.474609H15.2974C14.8448 0.475199 14.4108 0.655287 14.0908 0.975377C13.7707 1.29547 13.5907 1.72943 13.5901 2.18209V3.71099H6.70069V2.18209C6.70014 1.72937 6.52004 1.29535 6.1999 0.975247C5.87975 0.655145 5.44571 0.4751 4.99299 0.474609H4.57032C4.1176 0.4751 3.68355 0.655145 3.36341 0.975247C3.04327 1.29535 2.86317 1.72937 2.86262 2.18209V3.71099H1.74555C1.28273 3.7115 0.83902 3.89559 0.511772 4.22287C0.184524 4.55014 0.00047148 4.99387 0 5.45669L0 28.5606C0.000530369 29.0234 0.184606 29.4671 0.511846 29.7943C0.839085 30.1216 1.28276 30.3056 1.74555 30.3062H21.9597C22.114 31.8084 22.6882 33.2369 23.6167 34.428C24.5451 35.6191 25.7901 36.5247 27.2093 37.041C28.6284 37.5574 30.1643 37.6637 31.6411 37.3478C33.1178 37.0318 34.4758 36.3064 35.5594 35.2546C36.6431 34.2028 37.4087 32.8671 37.7685 31.4004C38.1283 29.9337 38.0678 28.3953 37.594 26.9614C37.1201 25.5275 36.2521 24.256 35.0892 23.2925C33.9263 22.329 32.5156 21.7124 31.0186 21.5134L31.0185 21.513ZM25.5052 2.18209C25.5054 2.04419 25.5602 1.91198 25.6577 1.81448C25.7552 1.71697 25.8874 1.66212 26.0253 1.66196H26.4484C26.5863 1.66212 26.7185 1.71697 26.816 1.81448C26.9135 1.91198 26.9683 2.04419 26.9685 2.18209V6.15784C26.9683 6.29573 26.9135 6.42794 26.816 6.52545C26.7185 6.62295 26.5863 6.6778 26.4484 6.67796H26.0253C25.8874 6.6778 25.7552 6.62295 25.6577 6.52545C25.5602 6.42794 25.5054 6.29573 25.5052 6.15784V2.18209ZM14.7776 2.18209C14.7778 2.04419 14.8326 1.91198 14.9301 1.81448C15.0276 1.71697 15.1598 1.66212 15.2977 1.66196H15.7208C15.8587 1.66212 15.9909 1.71697 16.0884 1.81448C16.1859 1.91198 16.2408 2.04419 16.2409 2.18209V6.15784C16.2408 6.29574 16.1859 6.42796 16.0884 6.52547C15.9909 6.62298 15.8587 6.67782 15.7208 6.67796H15.2977C15.1598 6.6778 15.0276 6.62295 14.9301 6.52545C14.8326 6.42794 14.7778 6.29573 14.7776 6.15784V2.18209ZM4.05012 2.18209C4.05029 2.04418 4.10516 1.91198 4.20268 1.81447C4.3002 1.71696 4.43241 1.66212 4.57032 1.66196H4.99336C5.13121 1.6622 5.26334 1.71708 5.36078 1.81458C5.45823 1.91208 5.51303 2.04424 5.51319 2.18209V6.15784C5.51303 6.29575 5.45817 6.42796 5.36065 6.52547C5.26313 6.62298 5.1309 6.67782 4.99299 6.67796H4.57032C4.43241 6.67782 4.30018 6.62298 4.20266 6.52547C4.10513 6.42796 4.05027 6.29575 4.05012 6.15784V2.18209ZM1.74555 4.89849H2.86262V6.15784C2.86313 6.61058 3.04321 7.04464 3.36336 7.36477C3.68351 7.68491 4.11757 7.86497 4.57032 7.86546H4.99336C5.44604 7.86487 5.88001 7.68476 6.20008 7.36464C6.52015 7.04452 6.70018 6.61052 6.70069 6.15784V4.89849H13.5901V6.15784C13.5906 6.61057 13.7707 7.04461 14.0908 7.36475C14.411 7.68488 14.845 7.86495 15.2977 7.86546H15.7208C16.1735 7.86495 16.6076 7.68488 16.9277 7.36475C17.2478 7.04461 17.4279 6.61057 17.4284 6.15784V4.89849H24.318V6.15784C24.3185 6.61057 24.4986 7.04461 24.8187 7.36475C25.1388 7.68488 25.5729 7.86495 26.0256 7.86546H26.4487C26.9014 7.86495 27.3354 7.68488 27.6556 7.36475C27.9757 7.04461 28.1558 6.61057 28.1563 6.15784V4.89849H29.2736C29.4215 4.89865 29.5634 4.95748 29.668 5.06209C29.7726 5.16669 29.8315 5.30853 29.8316 5.45647V9.6807H1.1875V5.45669C1.18762 5.30871 1.24645 5.16682 1.35107 5.06217C1.4557 4.95751 1.59757 4.89865 1.74555 4.89849ZM1.1875 28.5606V10.8684H29.8311V21.4451C27.7851 21.4801 25.8292 22.2928 24.3609 23.7182C22.8927 25.1436 22.0224 27.0746 21.9268 29.1187H1.74555C1.5976 29.1185 1.45576 29.0596 1.35114 28.955C1.24653 28.8504 1.18768 28.7086 1.1875 28.5606ZM29.959 36.338C28.6035 36.338 27.2784 35.9361 26.1514 35.183C25.0243 34.4299 24.1459 33.3595 23.6272 32.1072C23.1084 30.8549 22.9727 29.4769 23.2372 28.1474C23.5016 26.818 24.1543 25.5968 25.1128 24.6383C26.0713 23.6798 27.2925 23.0271 28.6219 22.7627C29.9514 22.4982 31.3294 22.6339 32.5817 23.1527C33.834 23.6714 34.9044 24.5498 35.6575 25.6769C36.4105 26.8039 36.8125 28.129 36.8125 29.4845C36.8104 31.3015 36.0877 33.0435 34.8029 34.3284C33.518 35.6132 31.776 36.3359 29.959 36.338ZM36.1014 29.4845C36.1014 29.642 36.0389 29.793 35.9275 29.9043C35.8162 30.0157 35.6651 30.0782 35.5077 30.0782H29.9589C29.8014 30.0782 29.6504 30.0157 29.5391 29.9043C29.4277 29.793 29.3652 29.642 29.3652 29.4845V23.9727C29.3652 23.8152 29.4277 23.6642 29.5391 23.5529C29.6504 23.4415 29.8014 23.379 29.9589 23.379C30.1164 23.379 30.2674 23.4415 30.3788 23.5529C30.4901 23.6642 30.5527 23.8152 30.5527 23.9727V28.8906H35.5077C35.5856 28.8906 35.6629 28.906 35.7349 28.9358C35.807 28.9657 35.8724 29.0094 35.9276 29.0646C35.9827 29.1197 36.0264 29.1852 36.0563 29.2572C36.0861 29.3293 36.1014 29.4065 36.1014 29.4845ZM13.7574 13.3453H10.0607C9.90325 13.3453 9.75223 13.4079 9.64088 13.5192C9.52953 13.6306 9.46697 13.7816 9.46697 13.9391V17.6358C9.46697 17.7933 9.52953 17.9443 9.64088 18.0557C9.75223 18.167 9.90325 18.2296 10.0607 18.2296H13.7574C13.9149 18.2296 14.0659 18.167 14.1773 18.0557C14.2886 17.9443 14.3512 17.7933 14.3512 17.6358V13.9391C14.3512 13.7816 14.2886 13.6306 14.1773 13.5192C14.0659 13.4079 13.9149 13.3453 13.7574 13.3453ZM13.1637 17.0421H10.6545V14.5328H13.1637V17.0421ZM13.7574 21.7574H10.0607C9.90325 21.7574 9.75223 21.8199 9.64088 21.9313C9.52953 22.0426 9.46697 22.1936 9.46697 22.3511V26.0478C9.46697 26.2053 9.52953 26.3563 9.64088 26.4676C9.75223 26.579 9.90325 26.6415 10.0607 26.6415H13.7574C13.9149 26.6415 14.0659 26.579 14.1773 26.4676C14.2886 26.3563 14.3512 26.2053 14.3512 26.0478V22.3511C14.3512 22.1936 14.2886 22.0426 14.1773 21.9313C14.0659 21.8199 13.9149 21.7574 13.7574 21.7574ZM13.1637 25.454H10.6545V22.9449H13.1637V25.454Z"
                              fill="#FF8800"
                            />
                          </g>
                          <defs>
                            <filter
                              id="filter0_i_422_23209"
                              x={23}
                              y={22}
                              width={15}
                              height={17}
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
                              <feOffset dy={2} />
                              <feGaussianBlur stdDeviation="1.5" />
                              <feComposite
                                in2="hardAlpha"
                                operator="arithmetic"
                                k2={-1}
                                k3={1}
                              />
                              <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 1 0 0 0 0 0.866667 0 0 0 1 0"
                              />
                              <feBlend
                                mode="normal"
                                in2="shape"
                                result="effect1_innerShadow_422_23209"
                              />
                            </filter>
                            <filter
                              id="filter1_i_422_23209"
                              x="0.5"
                              y={4}
                              width={30}
                              height="27.5488"
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
                              <feOffset dy={2} />
                              <feGaussianBlur stdDeviation="1.5" />
                              <feComposite
                                in2="hardAlpha"
                                operator="arithmetic"
                                k2={-1}
                                k3={1}
                              />
                              <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 1 0 0 0 0 0.866667 0 0 0 1 0"
                              />
                              <feBlend
                                mode="normal"
                                in2="shape"
                                result="effect1_innerShadow_422_23209"
                              />
                            </filter>
                            <clipPath id="clip0_422_23209">
                              <rect width={38} height={38} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </i>
                      <p className="font-semibold text-white max-md:text-[14px] max-sm:!text-[10px] max-sm:font-normal">
                        Accessibility for Retail Investors
                      </p>
                    </div>
                  </td>
                  <td
                    className="border border-[#443828] px-[10px] py-[14px] max-md:p-2 last:border-r-0 align-middle sticky"
                    style={{ left: 210 }}
                  >
                    <div className="flex items-start gap-[7px] max-sm:justify-center">
                      <i className="inline-flex items-center justify-center leading-[0] flex-shrink-0">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g filter="url(#filter0_i_422_23221)">
                            <path
                              d="M16.0718 3.21387C12.6432 3.7853 10.8337 1.7853 10.3575 0.713867C8.92962 0.713867 7.49972 2.49958 6.78544 3.21387C6.07115 3.92815 3.57115 3.21387 3.21467 3.57101C2.85819 3.92815 3.21467 6.07101 2.85753 7.14244C2.50039 8.21387 1.07181 8.57101 0.714672 9.64244C0.357529 10.7139 2.14324 11.4282 2.85753 11.7853C3.57181 12.1424 3.21467 14.6424 3.21467 15.3567C3.21467 16.071 3.21467 16.7853 4.2861 16.7853C5.35753 16.7853 7.50039 17.1424 8.21467 17.4996C8.7861 17.7853 9.64324 18.8091 10.0004 19.2853C10.3575 19.0472 11.2147 18.3567 11.7861 17.4996C12.3575 16.6424 14.8813 16.6663 16.0718 16.7853C16.3099 16.6663 16.7147 16.2853 16.429 15.7139C16.1432 15.1424 16.7861 13.3329 17.1432 12.4996C17.7385 12.0234 18.929 10.7853 18.929 9.64244C17.5004 8.92815 16.7861 5.35672 16.0718 3.21387Z"
                              fill="#0F3C3C"
                            />
                          </g>
                          <path
                            d="M19.5137 8.82187L18.1496 7.45785C17.8259 7.13412 17.5606 6.49359 17.5606 6.03534V4.10584C17.5606 3.18958 16.8111 2.44007 15.8939 2.43909H13.9644C13.5061 2.43909 12.8656 2.17386 12.5419 1.84983L11.1781 0.485817C10.5301 -0.161939 9.4691 -0.161939 8.8211 0.485817L7.45733 1.85057C7.13331 2.1743 6.49209 2.43983 6.03482 2.43983H4.10615C3.18989 2.43983 2.4394 3.18934 2.4394 4.10658V6.03432C2.4394 6.49257 2.17416 7.13305 1.85038 7.45683L0.486366 8.82158C-0.162122 9.46933 -0.162122 10.5298 0.486366 11.1791L1.85038 12.5431C2.17436 12.8671 2.4394 13.5081 2.4394 13.9656V15.8944C2.4394 16.8107 3.18989 17.5612 4.10615 17.5612H6.03491C6.49317 17.5612 7.13365 17.8264 7.45743 18.1502L8.8212 19.5142C9.4692 20.1619 10.5302 20.1619 11.1782 19.5142L12.542 18.1502C12.866 17.8262 13.5062 17.5612 13.9645 17.5612H15.894C16.8112 17.5612 17.5607 16.8107 17.5607 15.8944V13.9656C17.5607 13.5066 17.8262 12.8669 18.1497 12.5431L19.5138 11.1791C20.1612 10.5299 20.1612 9.46938 19.5137 8.82187ZM16.9714 11.3648C16.3366 11.9981 15.8937 13.0689 15.8937 13.9659V15.8946H13.9642C13.0675 15.8946 11.9972 16.3374 11.3634 16.9721L9.99943 18.3362L8.63541 16.9721C8.00064 16.3374 6.9314 15.8946 6.03467 15.8946H4.10591V13.9659C4.10591 13.0689 3.66313 11.9996 3.02841 11.3649L1.6644 10.0001L3.02841 8.6354C3.66318 8.00141 4.10591 6.93212 4.10591 6.03441V4.10667H6.03467C6.9314 4.10667 8.00069 3.66317 8.63541 3.02918L9.99943 1.66443L11.3637 3.02845C11.9974 3.66322 13.0677 4.10594 13.9644 4.10594H15.8939V6.03544C15.8939 6.93217 16.3367 8.0017 16.9717 8.63642L18.3351 10.0002L16.9714 11.3648Z"
                            fill="#FF8800"
                          />
                          <path
                            d="M13.8196 6.25L8.6753 11.3933L6.17627 8.894L4.99805 10.0725L8.6753 13.75L14.9981 7.42827L13.8196 6.25Z"
                            fill="#FF8800"
                          />
                          <defs>
                            <filter
                              id="filter0_i_422_23221"
                              x="0.667969"
                              y="0.713867"
                              width="18.2617"
                              height="23.5713"
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
                                result="effect1_innerShadow_422_23221"
                              />
                            </filter>
                          </defs>
                        </svg>
                      </i>
                      <p className="text-[12px] text-white max-sm:hidden">
                        Designed for everyday investors worldwide{/* */}{" "}
                      </p>
                    </div>
                  </td>
                  <td
                    className="border border-[#443828] px-[10px] py-[14px] max-md:p-2 last:border-r-0 align-middle"
                    style={{ left: 210 }}
                  >
                    <div className="flex items-start gap-[7px] max-sm:justify-center">
                      <i className="inline-flex items-center justify-center leading-[0] flex-shrink-0">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g filter="url(#filter0_i_422_23221)">
                            <path
                              d="M16.0718 3.21387C12.6432 3.7853 10.8337 1.7853 10.3575 0.713867C8.92962 0.713867 7.49972 2.49958 6.78544 3.21387C6.07115 3.92815 3.57115 3.21387 3.21467 3.57101C2.85819 3.92815 3.21467 6.07101 2.85753 7.14244C2.50039 8.21387 1.07181 8.57101 0.714672 9.64244C0.357529 10.7139 2.14324 11.4282 2.85753 11.7853C3.57181 12.1424 3.21467 14.6424 3.21467 15.3567C3.21467 16.071 3.21467 16.7853 4.2861 16.7853C5.35753 16.7853 7.50039 17.1424 8.21467 17.4996C8.7861 17.7853 9.64324 18.8091 10.0004 19.2853C10.3575 19.0472 11.2147 18.3567 11.7861 17.4996C12.3575 16.6424 14.8813 16.6663 16.0718 16.7853C16.3099 16.6663 16.7147 16.2853 16.429 15.7139C16.1432 15.1424 16.7861 13.3329 17.1432 12.4996C17.7385 12.0234 18.929 10.7853 18.929 9.64244C17.5004 8.92815 16.7861 5.35672 16.0718 3.21387Z"
                              fill="#0F3C3C"
                            />
                          </g>
                          <path
                            d="M19.5137 8.82187L18.1496 7.45785C17.8259 7.13412 17.5606 6.49359 17.5606 6.03534V4.10584C17.5606 3.18958 16.8111 2.44007 15.8939 2.43909H13.9644C13.5061 2.43909 12.8656 2.17386 12.5419 1.84983L11.1781 0.485817C10.5301 -0.161939 9.4691 -0.161939 8.8211 0.485817L7.45733 1.85057C7.13331 2.1743 6.49209 2.43983 6.03482 2.43983H4.10615C3.18989 2.43983 2.4394 3.18934 2.4394 4.10658V6.03432C2.4394 6.49257 2.17416 7.13305 1.85038 7.45683L0.486366 8.82158C-0.162122 9.46933 -0.162122 10.5298 0.486366 11.1791L1.85038 12.5431C2.17436 12.8671 2.4394 13.5081 2.4394 13.9656V15.8944C2.4394 16.8107 3.18989 17.5612 4.10615 17.5612H6.03491C6.49317 17.5612 7.13365 17.8264 7.45743 18.1502L8.8212 19.5142C9.4692 20.1619 10.5302 20.1619 11.1782 19.5142L12.542 18.1502C12.866 17.8262 13.5062 17.5612 13.9645 17.5612H15.894C16.8112 17.5612 17.5607 16.8107 17.5607 15.8944V13.9656C17.5607 13.5066 17.8262 12.8669 18.1497 12.5431L19.5138 11.1791C20.1612 10.5299 20.1612 9.46938 19.5137 8.82187ZM16.9714 11.3648C16.3366 11.9981 15.8937 13.0689 15.8937 13.9659V15.8946H13.9642C13.0675 15.8946 11.9972 16.3374 11.3634 16.9721L9.99943 18.3362L8.63541 16.9721C8.00064 16.3374 6.9314 15.8946 6.03467 15.8946H4.10591V13.9659C4.10591 13.0689 3.66313 11.9996 3.02841 11.3649L1.6644 10.0001L3.02841 8.6354C3.66318 8.00141 4.10591 6.93212 4.10591 6.03441V4.10667H6.03467C6.9314 4.10667 8.00069 3.66317 8.63541 3.02918L9.99943 1.66443L11.3637 3.02845C11.9974 3.66322 13.0677 4.10594 13.9644 4.10594H15.8939V6.03544C15.8939 6.93217 16.3367 8.0017 16.9717 8.63642L18.3351 10.0002L16.9714 11.3648Z"
                            fill="#FF8800"
                          />
                          <path
                            d="M13.8196 6.25L8.6753 11.3933L6.17627 8.894L4.99805 10.0725L8.6753 13.75L14.9981 7.42827L13.8196 6.25Z"
                            fill="#FF8800"
                          />
                          <defs>
                            <filter
                              id="filter0_i_422_23221"
                              x="0.667969"
                              y="0.713867"
                              width="18.2617"
                              height="23.5713"
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
                                result="effect1_innerShadow_422_23221"
                              />
                            </filter>
                          </defs>
                        </svg>
                      </i>
                      <p className="text-[12px] text-white max-sm:hidden">
                        US retail access, but limited internationally{/* */}{" "}
                      </p>
                    </div>
                  </td>
                  <td
                    className="border border-[#443828] px-[10px] py-[14px] max-md:p-2 last:border-r-0 align-middle"
                    style={{ left: 210 }}
                  >
                    <div className="flex items-start gap-[7px] max-sm:justify-center">
                      <i className="inline-flex items-center justify-center leading-[0] flex-shrink-0">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_654_970)">
                            <g filter="url(#filter0_i_654_970)">
                              <circle
                                cx="10.0006"
                                cy="10.0001"
                                r="9.28571"
                                fill="#0F3C3C"
                              />
                            </g>
                            <path
                              d="M10 0C4.47297 0 0 4.47254 0 10C0 15.5271 4.47254 20 10 20C15.527 20 20 15.5275 20 10C20 4.47293 15.5275 0 10 0ZM10 18.4375C5.33656 18.4375 1.5625 14.6638 1.5625 10C1.5625 5.33652 5.33621 1.5625 10 1.5625C14.6634 1.5625 18.4375 5.33621 18.4375 10C18.4375 14.6635 14.6638 18.4375 10 18.4375Z"
                              fill="#F30E11"
                            />
                            <path
                              d="M13.4211 12.3163L11.1046 9.99978L13.4211 7.68329C13.7262 7.37821 13.7262 6.88356 13.4212 6.57845C13.116 6.27333 12.6214 6.27337 12.3163 6.57845L9.9998 8.89493L7.68327 6.57845C7.37823 6.27333 6.88351 6.27333 6.57843 6.57845C6.27335 6.88356 6.27335 7.37821 6.57847 7.68329L8.89495 9.99978L6.57847 12.3163C6.27335 12.6214 6.27331 13.116 6.57843 13.4211C6.88362 13.7263 7.37827 13.7261 7.68327 13.4211L9.9998 11.1046L12.3163 13.4211C12.6213 13.7262 13.116 13.7262 13.4212 13.4211C13.7263 13.116 13.7262 12.6213 13.4211 12.3163Z"
                              fill="#F30E11"
                            />
                          </g>
                          <defs>
                            <filter
                              id="filter0_i_654_970"
                              x="0.714844"
                              y="0.714355"
                              width="18.5723"
                              height="23.5713"
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
                                values="0 0 0 0 1 0 0 0 0 0.0509804 0 0 0 0 0.65098 0 0 0 1 0"
                              />
                              <feBlend
                                mode="normal"
                                in2="shape"
                                result="effect1_innerShadow_654_970"
                              />
                            </filter>
                            <clipPath id="clip0_654_970">
                              <rect width={20} height={20} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </i>
                      <p className="text-[12px] text-white max-sm:hidden">
                        Institutional-focused{/* */}{" "}
                      </p>
                    </div>
                  </td>
                  <td
                    className="border border-[#443828] px-[10px] py-[14px] max-md:p-2 last:border-r-0 align-middle"
                    style={{ left: 210 }}
                  >
                    <div className="flex items-start gap-[7px] max-sm:justify-center">
                      <i className="inline-flex items-center justify-center leading-[0] flex-shrink-0">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g filter="url(#filter0_i_422_23221)">
                            <path
                              d="M16.0718 3.21387C12.6432 3.7853 10.8337 1.7853 10.3575 0.713867C8.92962 0.713867 7.49972 2.49958 6.78544 3.21387C6.07115 3.92815 3.57115 3.21387 3.21467 3.57101C2.85819 3.92815 3.21467 6.07101 2.85753 7.14244C2.50039 8.21387 1.07181 8.57101 0.714672 9.64244C0.357529 10.7139 2.14324 11.4282 2.85753 11.7853C3.57181 12.1424 3.21467 14.6424 3.21467 15.3567C3.21467 16.071 3.21467 16.7853 4.2861 16.7853C5.35753 16.7853 7.50039 17.1424 8.21467 17.4996C8.7861 17.7853 9.64324 18.8091 10.0004 19.2853C10.3575 19.0472 11.2147 18.3567 11.7861 17.4996C12.3575 16.6424 14.8813 16.6663 16.0718 16.7853C16.3099 16.6663 16.7147 16.2853 16.429 15.7139C16.1432 15.1424 16.7861 13.3329 17.1432 12.4996C17.7385 12.0234 18.929 10.7853 18.929 9.64244C17.5004 8.92815 16.7861 5.35672 16.0718 3.21387Z"
                              fill="#0F3C3C"
                            />
                          </g>
                          <path
                            d="M19.5137 8.82187L18.1496 7.45785C17.8259 7.13412 17.5606 6.49359 17.5606 6.03534V4.10584C17.5606 3.18958 16.8111 2.44007 15.8939 2.43909H13.9644C13.5061 2.43909 12.8656 2.17386 12.5419 1.84983L11.1781 0.485817C10.5301 -0.161939 9.4691 -0.161939 8.8211 0.485817L7.45733 1.85057C7.13331 2.1743 6.49209 2.43983 6.03482 2.43983H4.10615C3.18989 2.43983 2.4394 3.18934 2.4394 4.10658V6.03432C2.4394 6.49257 2.17416 7.13305 1.85038 7.45683L0.486366 8.82158C-0.162122 9.46933 -0.162122 10.5298 0.486366 11.1791L1.85038 12.5431C2.17436 12.8671 2.4394 13.5081 2.4394 13.9656V15.8944C2.4394 16.8107 3.18989 17.5612 4.10615 17.5612H6.03491C6.49317 17.5612 7.13365 17.8264 7.45743 18.1502L8.8212 19.5142C9.4692 20.1619 10.5302 20.1619 11.1782 19.5142L12.542 18.1502C12.866 17.8262 13.5062 17.5612 13.9645 17.5612H15.894C16.8112 17.5612 17.5607 16.8107 17.5607 15.8944V13.9656C17.5607 13.5066 17.8262 12.8669 18.1497 12.5431L19.5138 11.1791C20.1612 10.5299 20.1612 9.46938 19.5137 8.82187ZM16.9714 11.3648C16.3366 11.9981 15.8937 13.0689 15.8937 13.9659V15.8946H13.9642C13.0675 15.8946 11.9972 16.3374 11.3634 16.9721L9.99943 18.3362L8.63541 16.9721C8.00064 16.3374 6.9314 15.8946 6.03467 15.8946H4.10591V13.9659C4.10591 13.0689 3.66313 11.9996 3.02841 11.3649L1.6644 10.0001L3.02841 8.6354C3.66318 8.00141 4.10591 6.93212 4.10591 6.03441V4.10667H6.03467C6.9314 4.10667 8.00069 3.66317 8.63541 3.02918L9.99943 1.66443L11.3637 3.02845C11.9974 3.66322 13.0677 4.10594 13.9644 4.10594H15.8939V6.03544C15.8939 6.93217 16.3367 8.0017 16.9717 8.63642L18.3351 10.0002L16.9714 11.3648Z"
                            fill="#FF8800"
                          />
                          <path
                            d="M13.8196 6.25L8.6753 11.3933L6.17627 8.894L4.99805 10.0725L8.6753 13.75L14.9981 7.42827L13.8196 6.25Z"
                            fill="#FF8800"
                          />
                          <defs>
                            <filter
                              id="filter0_i_422_23221"
                              x="0.667969"
                              y="0.713867"
                              width="18.2617"
                              height="23.5713"
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
                                result="effect1_innerShadow_422_23221"
                              />
                            </filter>
                          </defs>
                        </svg>
                      </i>
                      <p className="text-[12px] text-white max-sm:hidden">
                        Retail crypto access{/* */}{" "}
                      </p>
                    </div>
                  </td>
                  <td
                    className="border border-[#443828] px-[10px] py-[14px] max-md:p-2 last:border-r-0 align-middle"
                    style={{ left: 210 }}
                  >
                    <div className="flex items-start gap-[7px] max-sm:justify-center">
                      <i className="inline-flex items-center justify-center leading-[0] flex-shrink-0">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_654_978)">
                            <g filter="url(#filter0_i_654_978)">
                              <circle
                                cx="10.0006"
                                cy="10.0001"
                                r="9.28571"
                                fill="#0F3C3C"
                              />
                            </g>
                            <path
                              d="M10 0C4.47297 0 0 4.47254 0 10C0 15.5271 4.47254 20 10 20C15.527 20 20 15.5275 20 10C20 4.47293 15.5275 0 10 0ZM10 18.4375C5.33656 18.4375 1.5625 14.6638 1.5625 10C1.5625 5.33652 5.33621 1.5625 10 1.5625C14.6634 1.5625 18.4375 5.33621 18.4375 10C18.4375 14.6635 14.6638 18.4375 10 18.4375Z"
                              fill="#FFFF00"
                            />
                          </g>
                          <defs>
                            <filter
                              id="filter0_i_654_978"
                              x="0.714844"
                              y="0.714355"
                              width="18.5723"
                              height="23.5713"
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
                                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 0 0 0 0 1 0"
                              />
                              <feBlend
                                mode="normal"
                                in2="shape"
                                result="effect1_innerShadow_654_978"
                              />
                            </filter>
                            <clipPath id="clip0_654_978">
                              <rect width={20} height={20} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </i>
                      <p className="text-[12px] text-white max-sm:hidden">
                        Mostly traditional retail, limited crypto{/* */}{" "}
                      </p>
                    </div>
                  </td>
                  <td
                    className="border border-[#443828] px-[10px] py-[14px] max-md:p-2 last:border-r-0 align-middle"
                    style={{ left: 210 }}
                  >
                    <div className="flex items-start gap-[7px] max-sm:justify-center">
                      <i className="inline-flex items-center justify-center leading-[0] flex-shrink-0">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g filter="url(#filter0_i_422_23221)">
                            <path
                              d="M16.0718 3.21387C12.6432 3.7853 10.8337 1.7853 10.3575 0.713867C8.92962 0.713867 7.49972 2.49958 6.78544 3.21387C6.07115 3.92815 3.57115 3.21387 3.21467 3.57101C2.85819 3.92815 3.21467 6.07101 2.85753 7.14244C2.50039 8.21387 1.07181 8.57101 0.714672 9.64244C0.357529 10.7139 2.14324 11.4282 2.85753 11.7853C3.57181 12.1424 3.21467 14.6424 3.21467 15.3567C3.21467 16.071 3.21467 16.7853 4.2861 16.7853C5.35753 16.7853 7.50039 17.1424 8.21467 17.4996C8.7861 17.7853 9.64324 18.8091 10.0004 19.2853C10.3575 19.0472 11.2147 18.3567 11.7861 17.4996C12.3575 16.6424 14.8813 16.6663 16.0718 16.7853C16.3099 16.6663 16.7147 16.2853 16.429 15.7139C16.1432 15.1424 16.7861 13.3329 17.1432 12.4996C17.7385 12.0234 18.929 10.7853 18.929 9.64244C17.5004 8.92815 16.7861 5.35672 16.0718 3.21387Z"
                              fill="#0F3C3C"
                            />
                          </g>
                          <path
                            d="M19.5137 8.82187L18.1496 7.45785C17.8259 7.13412 17.5606 6.49359 17.5606 6.03534V4.10584C17.5606 3.18958 16.8111 2.44007 15.8939 2.43909H13.9644C13.5061 2.43909 12.8656 2.17386 12.5419 1.84983L11.1781 0.485817C10.5301 -0.161939 9.4691 -0.161939 8.8211 0.485817L7.45733 1.85057C7.13331 2.1743 6.49209 2.43983 6.03482 2.43983H4.10615C3.18989 2.43983 2.4394 3.18934 2.4394 4.10658V6.03432C2.4394 6.49257 2.17416 7.13305 1.85038 7.45683L0.486366 8.82158C-0.162122 9.46933 -0.162122 10.5298 0.486366 11.1791L1.85038 12.5431C2.17436 12.8671 2.4394 13.5081 2.4394 13.9656V15.8944C2.4394 16.8107 3.18989 17.5612 4.10615 17.5612H6.03491C6.49317 17.5612 7.13365 17.8264 7.45743 18.1502L8.8212 19.5142C9.4692 20.1619 10.5302 20.1619 11.1782 19.5142L12.542 18.1502C12.866 17.8262 13.5062 17.5612 13.9645 17.5612H15.894C16.8112 17.5612 17.5607 16.8107 17.5607 15.8944V13.9656C17.5607 13.5066 17.8262 12.8669 18.1497 12.5431L19.5138 11.1791C20.1612 10.5299 20.1612 9.46938 19.5137 8.82187ZM16.9714 11.3648C16.3366 11.9981 15.8937 13.0689 15.8937 13.9659V15.8946H13.9642C13.0675 15.8946 11.9972 16.3374 11.3634 16.9721L9.99943 18.3362L8.63541 16.9721C8.00064 16.3374 6.9314 15.8946 6.03467 15.8946H4.10591V13.9659C4.10591 13.0689 3.66313 11.9996 3.02841 11.3649L1.6644 10.0001L3.02841 8.6354C3.66318 8.00141 4.10591 6.93212 4.10591 6.03441V4.10667H6.03467C6.9314 4.10667 8.00069 3.66317 8.63541 3.02918L9.99943 1.66443L11.3637 3.02845C11.9974 3.66322 13.0677 4.10594 13.9644 4.10594H15.8939V6.03544C15.8939 6.93217 16.3367 8.0017 16.9717 8.63642L18.3351 10.0002L16.9714 11.3648Z"
                            fill="#FF8800"
                          />
                          <path
                            d="M13.8196 6.25L8.6753 11.3933L6.17627 8.894L4.99805 10.0725L8.6753 13.75L14.9981 7.42827L13.8196 6.25Z"
                            fill="#FF8800"
                          />
                          <defs>
                            <filter
                              id="filter0_i_422_23221"
                              x="0.667969"
                              y="0.713867"
                              width="18.2617"
                              height="23.5713"
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
                                result="effect1_innerShadow_422_23221"
                              />
                            </filter>
                          </defs>
                        </svg>
                      </i>
                      <p className="text-[12px] text-white max-sm:hidden">
                        Retail access, no crypto{/* */}{" "}
                      </p>
                    </div>
                  </td>
                </tr>
                <tr
                  className="last:[&>td]:border-b-0"
                  data-aos="fade-up"
                  data-aos-delay={450}
                >
                  <td className="border border-[#443828] max-sm:!w-[10%] border-l-0 px-6 py-4 max-md:p-2 first:sticky left-0 transition-all duration-300 ease first:bg-transparent">
                    <div className="flex items-center gap-3">
                      <i className="inline-flex items-center justify-center leading-[0] flex-shrink-0 max-md:size-[30px] max-sm:hidden">
                        <svg
                          width={38}
                          height={38}
                          viewBox="0 0 38 38"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g filter="url(#filter0_i_654_1214)">
                            <circle
                              cx="13.2424"
                              cy="24.7576"
                              r="13.2424"
                              fill="#021B25"
                            />
                          </g>
                          <path
                            d="M37.7733 11.1647C37.7712 11.1503 37.7684 11.1361 37.7652 11.1219C37.5554 10.005 37.2058 8.91889 36.7246 7.88932C36.7114 7.85023 36.6939 7.81274 36.6724 7.77755C36.2327 6.85879 35.6917 5.99203 35.0596 5.19339C35.036 5.15338 35.0076 5.11645 34.9749 5.08348C34.9704 5.07895 34.9654 5.07509 34.9607 5.07071C34.3428 4.3079 33.645 3.61339 32.8793 2.99904C32.875 2.99444 32.8711 2.98961 32.8666 2.98508C32.8328 2.95151 32.7948 2.92243 32.7535 2.89855C31.9515 2.27037 31.0817 1.7338 30.1605 1.29883C30.1256 1.27753 30.0885 1.26017 30.0498 1.2471C29.0141 0.769092 27.922 0.423982 26.7997 0.219986C26.7856 0.216788 26.7713 0.214139 26.7569 0.212044C25.9639 0.0706548 25.1598 -0.000302882 24.3543 9.71718e-07C23.7239 9.71718e-07 23.1038 0.0439386 22.496 0.126989C22.4941 0.127138 22.4922 0.127583 22.4902 0.127806C16.7268 0.918682 12.0992 5.32157 10.9721 10.9724C9.49274 11.2672 8.06811 11.805 6.76193 12.5696C6.63715 12.6458 6.54724 12.7678 6.51154 12.9096C6.47584 13.0514 6.49721 13.2015 6.57105 13.3276C6.64489 13.4538 6.7653 13.5459 6.90638 13.5842C7.04745 13.6225 7.19792 13.6038 7.3254 13.5323C8.40611 12.8997 9.5755 12.4363 10.7905 12.1529C10.736 12.6487 10.7087 13.1471 10.7084 13.6458C10.7084 14.4647 10.7811 15.2669 10.92 16.0463C10.9223 16.0616 10.925 16.0769 10.9285 16.0919C11.1325 17.2139 11.4775 18.3055 11.9554 19.3409C11.9684 19.3794 11.9857 19.4165 12.0073 19.452C12.4423 20.3731 12.9788 21.2428 13.6069 22.0449C13.6308 22.0861 13.6599 22.1241 13.6935 22.158C13.6979 22.1624 13.7027 22.1661 13.7073 22.1704C14.3217 22.9362 15.0163 23.6341 15.7792 24.2521C15.7835 24.2568 15.7874 24.2617 15.7919 24.2662C15.8255 24.2999 15.8627 24.3276 15.9017 24.3508C16.7003 24.983 17.5671 25.524 18.4859 25.9637C18.5215 25.9855 18.559 26.0029 18.5977 26.0159C19.6274 26.4973 20.7137 26.8469 21.8308 27.0566C21.8447 27.0598 21.8586 27.0625 21.8727 27.0647C23.1835 27.3065 24.5227 27.3552 25.8476 27.2094C24.552 32.7474 19.573 36.8844 13.6457 36.8844C6.73648 36.8844 1.11536 31.2633 1.11536 24.354C1.11536 20.8701 2.51112 17.6337 5.04547 15.2409C5.14988 15.1386 5.20997 14.9995 5.21283 14.8533C5.21568 14.7072 5.16107 14.5658 5.06074 14.4595C4.96041 14.3532 4.82238 14.2906 4.67633 14.285C4.53028 14.2795 4.38788 14.3314 4.27976 14.4298C2.94256 15.6922 1.89013 17.1822 1.15188 18.8583C0.387645 20.594 0 22.443 0 24.3543C0 31.8786 6.12157 38.0001 13.6459 38.0001C20.2554 38.0001 25.7816 33.2765 27.028 27.0279C32.7119 25.8942 37.1337 21.2191 37.8864 15.4087C37.8868 15.4052 37.8876 15.4019 37.8879 15.3986C38.0691 13.9899 38.0305 12.5615 37.7733 11.1647ZM34.5193 6.32775C34.8931 6.84511 35.2269 7.39022 35.5177 7.95834L25.6346 17.8415C25.3303 17.2839 24.9875 16.7482 24.6088 16.2382L34.5193 6.32775ZM33.8225 5.44685L23.9038 15.3655C23.4948 14.899 23.0547 14.4608 22.5865 14.0537L32.5042 4.13607C32.9752 4.54007 33.4158 4.97818 33.8225 5.44685ZM31.62 3.44264L21.7095 13.3532C21.1973 12.9764 20.6594 12.6359 20.0997 12.3339L29.9813 2.45227C30.552 2.74016 31.0998 3.07125 31.62 3.44264ZM26.8597 1.36726C27.5524 1.50855 28.2318 1.7087 28.8904 1.96554L19.0366 11.8194C18.4026 11.5455 17.7487 11.3205 17.0804 11.1464L26.8597 1.36726ZM22.8096 1.21073C23.3221 1.14732 23.838 1.1155 24.3543 1.11544C24.7346 1.11544 25.1108 1.1334 25.4826 1.16672L15.7746 10.8748C15.0704 10.764 14.3587 10.7084 13.6459 10.7085C13.5326 10.7085 13.4194 10.7113 13.3063 10.7141L22.8096 1.21073ZM20.8184 1.62428L12.3327 10.11C13.5322 6.03897 16.7474 2.82366 20.8184 1.62428ZM11.8753 14.7742C11.8414 14.399 11.8242 14.0225 11.824 13.6458C11.824 13.1229 11.8567 12.6074 11.9193 12.1011L12.0997 11.9207C12.6126 11.8566 13.129 11.8243 13.646 11.8239C14.0263 11.8239 14.4024 11.8418 14.7742 11.8752L11.8753 14.7742ZM12.0757 16.1511L16.1511 12.0757C16.8439 12.2169 17.5233 12.4171 18.1819 12.674L12.6739 18.1821C12.4171 17.5233 12.217 16.8439 12.0757 16.1511ZM14.1512 20.9115C13.7798 20.3913 13.4486 19.8435 13.1607 19.2729L19.2729 13.1606C19.8436 13.4486 20.3914 13.7797 20.9116 14.1511L14.1512 20.9115ZM14.8445 21.7958L21.7958 14.8445C22.2668 15.2485 22.7074 15.6866 23.1141 16.1553L16.1554 23.114C15.6867 22.7074 15.2485 22.2668 14.8445 21.7958ZM17.0362 23.8108L23.8108 17.0362C24.1846 17.5535 24.5184 18.0986 24.8093 18.6667L18.6666 24.8094C18.0986 24.5184 17.5535 24.1845 17.0362 23.8108ZM21.7742 25.9085C21.0843 25.7637 20.408 25.5604 19.7527 25.3008L25.3009 19.7527C25.5604 20.4081 25.7637 21.0843 25.9086 21.7742L21.7742 25.9085ZM26.0927 25.7966L25.7967 26.0926C25.3179 26.148 24.8363 26.176 24.3543 26.1762C23.9456 26.1762 23.5416 26.1558 23.1429 26.1174L26.1174 23.1429C26.1558 23.5416 26.1762 23.9455 26.1762 24.3543C26.1762 24.8421 26.1472 25.3232 26.0927 25.7966ZM26.8344 20.8484C26.6572 20.1827 26.4294 19.5316 26.1531 18.9006L36.0094 9.04439C36.2689 9.69974 36.4721 10.376 36.6169 11.0658L26.8344 20.8484ZM27.7619 25.7051L36.4136 17.0533C35.2324 21.2282 31.9366 24.5238 27.7619 25.7051ZM36.8011 15.0882L27.2886 24.6007C27.2901 24.5187 27.2917 24.4366 27.2917 24.3542C27.2917 23.6031 27.2297 22.8663 27.1124 22.1479L36.8259 12.4344C36.8644 12.8331 36.8847 13.2371 36.8847 13.6458C36.8844 14.1278 36.8565 14.6094 36.8011 15.0882Z"
                            fill="#FF8800"
                          />
                          <defs>
                            <filter
                              id="filter0_i_654_1214"
                              x={0}
                              y="11.5151"
                              width="26.4844"
                              height="28.4849"
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
                              <feOffset dy={2} />
                              <feGaussianBlur stdDeviation={7} />
                              <feComposite
                                in2="hardAlpha"
                                operator="arithmetic"
                                k2={-1}
                                k3={1}
                              />
                              <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 1 0 0 0 0 0.866667 0 0 0 1 0"
                              />
                              <feBlend
                                mode="normal"
                                in2="shape"
                                result="effect1_innerShadow_654_1214"
                              />
                            </filter>
                          </defs>
                        </svg>
                      </i>
                      <p className="font-semibold text-white max-md:text-[14px] max-sm:!text-[10px] max-sm:font-normal">
                        Transparency &amp; On-Chain Tracking
                      </p>
                    </div>
                  </td>
                  <td
                    className="border border-[#443828] px-[10px] py-[14px] max-md:p-2 last:border-r-0 align-middle sticky"
                    style={{ left: 210 }}
                  >
                    <div className="flex items-start gap-[7px] max-sm:justify-center">
                      <i className="inline-flex items-center justify-center leading-[0] flex-shrink-0">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g filter="url(#filter0_i_422_23221)">
                            <path
                              d="M16.0718 3.21387C12.6432 3.7853 10.8337 1.7853 10.3575 0.713867C8.92962 0.713867 7.49972 2.49958 6.78544 3.21387C6.07115 3.92815 3.57115 3.21387 3.21467 3.57101C2.85819 3.92815 3.21467 6.07101 2.85753 7.14244C2.50039 8.21387 1.07181 8.57101 0.714672 9.64244C0.357529 10.7139 2.14324 11.4282 2.85753 11.7853C3.57181 12.1424 3.21467 14.6424 3.21467 15.3567C3.21467 16.071 3.21467 16.7853 4.2861 16.7853C5.35753 16.7853 7.50039 17.1424 8.21467 17.4996C8.7861 17.7853 9.64324 18.8091 10.0004 19.2853C10.3575 19.0472 11.2147 18.3567 11.7861 17.4996C12.3575 16.6424 14.8813 16.6663 16.0718 16.7853C16.3099 16.6663 16.7147 16.2853 16.429 15.7139C16.1432 15.1424 16.7861 13.3329 17.1432 12.4996C17.7385 12.0234 18.929 10.7853 18.929 9.64244C17.5004 8.92815 16.7861 5.35672 16.0718 3.21387Z"
                              fill="#0F3C3C"
                            />
                          </g>
                          <path
                            d="M19.5137 8.82187L18.1496 7.45785C17.8259 7.13412 17.5606 6.49359 17.5606 6.03534V4.10584C17.5606 3.18958 16.8111 2.44007 15.8939 2.43909H13.9644C13.5061 2.43909 12.8656 2.17386 12.5419 1.84983L11.1781 0.485817C10.5301 -0.161939 9.4691 -0.161939 8.8211 0.485817L7.45733 1.85057C7.13331 2.1743 6.49209 2.43983 6.03482 2.43983H4.10615C3.18989 2.43983 2.4394 3.18934 2.4394 4.10658V6.03432C2.4394 6.49257 2.17416 7.13305 1.85038 7.45683L0.486366 8.82158C-0.162122 9.46933 -0.162122 10.5298 0.486366 11.1791L1.85038 12.5431C2.17436 12.8671 2.4394 13.5081 2.4394 13.9656V15.8944C2.4394 16.8107 3.18989 17.5612 4.10615 17.5612H6.03491C6.49317 17.5612 7.13365 17.8264 7.45743 18.1502L8.8212 19.5142C9.4692 20.1619 10.5302 20.1619 11.1782 19.5142L12.542 18.1502C12.866 17.8262 13.5062 17.5612 13.9645 17.5612H15.894C16.8112 17.5612 17.5607 16.8107 17.5607 15.8944V13.9656C17.5607 13.5066 17.8262 12.8669 18.1497 12.5431L19.5138 11.1791C20.1612 10.5299 20.1612 9.46938 19.5137 8.82187ZM16.9714 11.3648C16.3366 11.9981 15.8937 13.0689 15.8937 13.9659V15.8946H13.9642C13.0675 15.8946 11.9972 16.3374 11.3634 16.9721L9.99943 18.3362L8.63541 16.9721C8.00064 16.3374 6.9314 15.8946 6.03467 15.8946H4.10591V13.9659C4.10591 13.0689 3.66313 11.9996 3.02841 11.3649L1.6644 10.0001L3.02841 8.6354C3.66318 8.00141 4.10591 6.93212 4.10591 6.03441V4.10667H6.03467C6.9314 4.10667 8.00069 3.66317 8.63541 3.02918L9.99943 1.66443L11.3637 3.02845C11.9974 3.66322 13.0677 4.10594 13.9644 4.10594H15.8939V6.03544C15.8939 6.93217 16.3367 8.0017 16.9717 8.63642L18.3351 10.0002L16.9714 11.3648Z"
                            fill="#FF8800"
                          />
                          <path
                            d="M13.8196 6.25L8.6753 11.3933L6.17627 8.894L4.99805 10.0725L8.6753 13.75L14.9981 7.42827L13.8196 6.25Z"
                            fill="#FF8800"
                          />
                          <defs>
                            <filter
                              id="filter0_i_422_23221"
                              x="0.667969"
                              y="0.713867"
                              width="18.2617"
                              height="23.5713"
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
                                result="effect1_innerShadow_422_23221"
                              />
                            </filter>
                          </defs>
                        </svg>
                      </i>
                      <p className="text-[12px] text-white max-sm:hidden">
                        Live portfolio dashboard + fund allocation{/* */}{" "}
                      </p>
                    </div>
                  </td>
                  <td
                    className="border border-[#443828] px-[10px] py-[14px] max-md:p-2 last:border-r-0 align-middle"
                    style={{ left: 210 }}
                  >
                    <div className="flex items-start gap-[7px] max-sm:justify-center">
                      <i className="inline-flex items-center justify-center leading-[0] flex-shrink-0">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_654_970)">
                            <g filter="url(#filter0_i_654_970)">
                              <circle
                                cx="10.0006"
                                cy="10.0001"
                                r="9.28571"
                                fill="#0F3C3C"
                              />
                            </g>
                            <path
                              d="M10 0C4.47297 0 0 4.47254 0 10C0 15.5271 4.47254 20 10 20C15.527 20 20 15.5275 20 10C20 4.47293 15.5275 0 10 0ZM10 18.4375C5.33656 18.4375 1.5625 14.6638 1.5625 10C1.5625 5.33652 5.33621 1.5625 10 1.5625C14.6634 1.5625 18.4375 5.33621 18.4375 10C18.4375 14.6635 14.6638 18.4375 10 18.4375Z"
                              fill="#F30E11"
                            />
                            <path
                              d="M13.4211 12.3163L11.1046 9.99978L13.4211 7.68329C13.7262 7.37821 13.7262 6.88356 13.4212 6.57845C13.116 6.27333 12.6214 6.27337 12.3163 6.57845L9.9998 8.89493L7.68327 6.57845C7.37823 6.27333 6.88351 6.27333 6.57843 6.57845C6.27335 6.88356 6.27335 7.37821 6.57847 7.68329L8.89495 9.99978L6.57847 12.3163C6.27335 12.6214 6.27331 13.116 6.57843 13.4211C6.88362 13.7263 7.37827 13.7261 7.68327 13.4211L9.9998 11.1046L12.3163 13.4211C12.6213 13.7262 13.116 13.7262 13.4212 13.4211C13.7263 13.116 13.7262 12.6213 13.4211 12.3163Z"
                              fill="#F30E11"
                            />
                          </g>
                          <defs>
                            <filter
                              id="filter0_i_654_970"
                              x="0.714844"
                              y="0.714355"
                              width="18.5723"
                              height="23.5713"
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
                                values="0 0 0 0 1 0 0 0 0 0.0509804 0 0 0 0 0.65098 0 0 0 1 0"
                              />
                              <feBlend
                                mode="normal"
                                in2="shape"
                                result="effect1_innerShadow_654_970"
                              />
                            </filter>
                            <clipPath id="clip0_654_970">
                              <rect width={20} height={20} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </i>
                      <p className="text-[12px] text-white max-sm:hidden">
                        No portfolio transparency beyond balances{/* */}{" "}
                      </p>
                    </div>
                  </td>
                  <td
                    className="border border-[#443828] px-[10px] py-[14px] max-md:p-2 last:border-r-0 align-middle"
                    style={{ left: 210 }}
                  >
                    <div className="flex items-start gap-[7px] max-sm:justify-center">
                      <i className="inline-flex items-center justify-center leading-[0] flex-shrink-0">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_654_978)">
                            <g filter="url(#filter0_i_654_978)">
                              <circle
                                cx="10.0006"
                                cy="10.0001"
                                r="9.28571"
                                fill="#0F3C3C"
                              />
                            </g>
                            <path
                              d="M10 0C4.47297 0 0 4.47254 0 10C0 15.5271 4.47254 20 10 20C15.527 20 20 15.5275 20 10C20 4.47293 15.5275 0 10 0ZM10 18.4375C5.33656 18.4375 1.5625 14.6638 1.5625 10C1.5625 5.33652 5.33621 1.5625 10 1.5625C14.6634 1.5625 18.4375 5.33621 18.4375 10C18.4375 14.6635 14.6638 18.4375 10 18.4375Z"
                              fill="#FFFF00"
                            />
                          </g>
                          <defs>
                            <filter
                              id="filter0_i_654_978"
                              x="0.714844"
                              y="0.714355"
                              width="18.5723"
                              height="23.5713"
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
                                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 0 0 0 0 1 0"
                              />
                              <feBlend
                                mode="normal"
                                in2="shape"
                                result="effect1_innerShadow_654_978"
                              />
                            </filter>
                            <clipPath id="clip0_654_978">
                              <rect width={20} height={20} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </i>
                      <p className="text-[12px] text-white max-sm:hidden">
                        General fund reports, not real-time{/* */}{" "}
                      </p>
                    </div>
                  </td>
                  <td
                    className="border border-[#443828] px-[10px] py-[14px] max-md:p-2 last:border-r-0 align-middle"
                    style={{ left: 210 }}
                  >
                    <div className="flex items-start gap-[7px] max-sm:justify-center">
                      <i className="inline-flex items-center justify-center leading-[0] flex-shrink-0">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_654_970)">
                            <g filter="url(#filter0_i_654_970)">
                              <circle
                                cx="10.0006"
                                cy="10.0001"
                                r="9.28571"
                                fill="#0F3C3C"
                              />
                            </g>
                            <path
                              d="M10 0C4.47297 0 0 4.47254 0 10C0 15.5271 4.47254 20 10 20C15.527 20 20 15.5275 20 10C20 4.47293 15.5275 0 10 0ZM10 18.4375C5.33656 18.4375 1.5625 14.6638 1.5625 10C1.5625 5.33652 5.33621 1.5625 10 1.5625C14.6634 1.5625 18.4375 5.33621 18.4375 10C18.4375 14.6635 14.6638 18.4375 10 18.4375Z"
                              fill="#F30E11"
                            />
                            <path
                              d="M13.4211 12.3163L11.1046 9.99978L13.4211 7.68329C13.7262 7.37821 13.7262 6.88356 13.4212 6.57845C13.116 6.27333 12.6214 6.27337 12.3163 6.57845L9.9998 8.89493L7.68327 6.57845C7.37823 6.27333 6.88351 6.27333 6.57843 6.57845C6.27335 6.88356 6.27335 7.37821 6.57847 7.68329L8.89495 9.99978L6.57847 12.3163C6.27335 12.6214 6.27331 13.116 6.57843 13.4211C6.88362 13.7263 7.37827 13.7261 7.68327 13.4211L9.9998 11.1046L12.3163 13.4211C12.6213 13.7262 13.116 13.7262 13.4212 13.4211C13.7263 13.116 13.7262 12.6213 13.4211 12.3163Z"
                              fill="#F30E11"
                            />
                          </g>
                          <defs>
                            <filter
                              id="filter0_i_654_970"
                              x="0.714844"
                              y="0.714355"
                              width="18.5723"
                              height="23.5713"
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
                                values="0 0 0 0 1 0 0 0 0 0.0509804 0 0 0 0 0.65098 0 0 0 1 0"
                              />
                              <feBlend
                                mode="normal"
                                in2="shape"
                                result="effect1_innerShadow_654_970"
                              />
                            </filter>
                            <clipPath id="clip0_654_970">
                              <rect width={20} height={20} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </i>
                      <p className="text-[12px] text-white max-sm:hidden">
                        No transparent fund allocations{/* */}{" "}
                      </p>
                    </div>
                  </td>
                  <td
                    className="border border-[#443828] px-[10px] py-[14px] max-md:p-2 last:border-r-0 align-middle"
                    style={{ left: 210 }}
                  >
                    <div className="flex items-start gap-[7px] max-sm:justify-center">
                      <i className="inline-flex items-center justify-center leading-[0] flex-shrink-0">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_654_978)">
                            <g filter="url(#filter0_i_654_978)">
                              <circle
                                cx="10.0006"
                                cy="10.0001"
                                r="9.28571"
                                fill="#0F3C3C"
                              />
                            </g>
                            <path
                              d="M10 0C4.47297 0 0 4.47254 0 10C0 15.5271 4.47254 20 10 20C15.527 20 20 15.5275 20 10C20 4.47293 15.5275 0 10 0ZM10 18.4375C5.33656 18.4375 1.5625 14.6638 1.5625 10C1.5625 5.33652 5.33621 1.5625 10 1.5625C14.6634 1.5625 18.4375 5.33621 18.4375 10C18.4375 14.6635 14.6638 18.4375 10 18.4375Z"
                              fill="#FFFF00"
                            />
                          </g>
                          <defs>
                            <filter
                              id="filter0_i_654_978"
                              x="0.714844"
                              y="0.714355"
                              width="18.5723"
                              height="23.5713"
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
                                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 0 0 0 0 1 0"
                              />
                              <feBlend
                                mode="normal"
                                in2="shape"
                                result="effect1_innerShadow_654_978"
                              />
                            </filter>
                            <clipPath id="clip0_654_978">
                              <rect width={20} height={20} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </i>
                      <p className="text-[12px] text-white max-sm:hidden">
                        Standard fund reports, delayed{/* */}{" "}
                      </p>
                    </div>
                  </td>
                  <td
                    className="border border-[#443828] px-[10px] py-[14px] max-md:p-2 last:border-r-0 align-middle"
                    style={{ left: 210 }}
                  >
                    <div className="flex items-start gap-[7px] max-sm:justify-center">
                      <i className="inline-flex items-center justify-center leading-[0] flex-shrink-0">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_654_978)">
                            <g filter="url(#filter0_i_654_978)">
                              <circle
                                cx="10.0006"
                                cy="10.0001"
                                r="9.28571"
                                fill="#0F3C3C"
                              />
                            </g>
                            <path
                              d="M10 0C4.47297 0 0 4.47254 0 10C0 15.5271 4.47254 20 10 20C15.527 20 20 15.5275 20 10C20 4.47293 15.5275 0 10 0ZM10 18.4375C5.33656 18.4375 1.5625 14.6638 1.5625 10C1.5625 5.33652 5.33621 1.5625 10 1.5625C14.6634 1.5625 18.4375 5.33621 18.4375 10C18.4375 14.6635 14.6638 18.4375 10 18.4375Z"
                              fill="#FFFF00"
                            />
                          </g>
                          <defs>
                            <filter
                              id="filter0_i_654_978"
                              x="0.714844"
                              y="0.714355"
                              width="18.5723"
                              height="23.5713"
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
                                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 0 0 0 0 1 0"
                              />
                              <feBlend
                                mode="normal"
                                in2="shape"
                                result="effect1_innerShadow_654_978"
                              />
                            </filter>
                            <clipPath id="clip0_654_978">
                              <rect width={20} height={20} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </i>
                      <p className="text-[12px] text-white max-sm:hidden">
                        Standard fund reports, delayed{/* */}{" "}
                      </p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex flex-col items-center justify-center py-5 max-md:pb-0">
            <p className="font-bold text-[20px] text-[#FF8800] text-center">
              Built like a hedge fund. Accessible to everyone.
            </p>
            <div className="flex items-center gap-4 mt-[30px] max-sm:flex-col max-sm:[&>button]:w-full max-sm:w-full max-md:mt-4">
              <div className="button-wrapper ">
                <button
                  className="h-[48px] min-w-[166px] font-medium font-ptSans flex items-center cursor-pointer transition duration-300 ease-in-out justify-center gap-2.5 !border-none !font-semibold max-sm:!text-[14px] max-sm:!h-[40px] max-sm:w-full !border-none bg-gradient-to-r from-[#FF8800] to-[#FF6600] rounded-[60px] text-white bg-[#FFFF00] hover:from-[#FF9900] hover:to-[#FF7700] hover:shadow-lg hover:scale-105 max-[479px]:!shadow-none px-[50px] max-md:px-[30px] buttonRadialBGGreen"
                  aria-label="button"
                >
                  Join the $CAT Presale
                </button>
                <div className="button-bg bg-[radial-gradient(45.54%_275.61%_at_14.77%_80.36%,_#FFFF00_0%,_#00FF66_100%)]" />
              </div>
              <div className="button-wrapper ">
                <button
                  className="h-[48px] min-w-[166px] font-medium font-ptSans flex items-center cursor-pointer transition duration-300 ease-in-out justify-center gap-2.5 border-[#ffffff72] !font-semibold max-sm:!text-[14px] max-sm:!h-[40px] max-sm:w-full buttonRadialBGBlue bg-[radial-gradient(24.83%_154.95%_at_14.43%_72.32%,_#13DCE3_0%,_#33FFD4_100%)] rounded-[60px] hover:bg-none hover:border-[#FFFF00] max-[479px]:!shadow-none px-[50px] max-md:px-[30px] !bg-none !border-none !bg-black hover:!bg-[#ffff00] hover:text-black bg-transparent text-[#FFFF00] shadow-none hover:bg-[#FFFF00]"
                  aria-label="button"
                >
                  Read the Whitepaper
                </button>
                <div className="button-bg bg-[linear-gradient(45.73deg,#eff869df_25.78%,#fdb100_50.23%)]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
