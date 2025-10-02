import SectionDivider from "../common/SectionDivider";
import { useTranslation } from "react-i18next";

export default function Tokenomics() {
  const { t } = useTranslation("tokenomics");

  {
    // style={{
    //   backgroundImage: "url(/tokenomicsBanner.png)",
    // }}
  }
  return (
    <div>
      <SectionDivider variant="gradient" />
      <div className="bg-no-repeat bg-cover pt-[70px] max-lg:py-[50px] max-md:py-[40px] pb-[79px] overflow-hidden bg-gradient-to-b from-[rgba(255,136,0,0.02)] to-transparent">
        <div className="container">
          <div className="text-center mb-[58px] max-lg:mb-[40px] max-md:mb-[20px] max-sm-[20px]">
            <h2 className="font-bold text-white mb-[10px]">{t("title")}</h2>
            <p>{t("description")}</p>
          </div>
          <div className="grid grid-cols-2 max-xl:grid-cols-1 gap-[40px] relative z-[10] max-md:gap-3">
            <div
              className="relative z-10"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-3.5 max-[1200px]:gap-5">
                <div className="col-span-1 max-sm:col-span-2">
                  <div className="bg-[linear-gradient(191.79deg,rgba(58,45,36,0.3)_15.6%,rgba(237,134,15,0.3)_87.34%)] border border-[#443828] shadow-[inset_0px_4px_34px_#FF8800] backdrop-blur-[45px] rounded-[20px] max-lg:rounded-[12px] p-[23px_22px_22px_20px] max-lg:p-[15px_15px_15px_15px] max-[900px]:border max-[900px]:border-[#dd7730] max-[900px]:bg-[linear-gradient(191.79deg,_rgb(26_22_18)_15.6%,_rgb(42_31_26)_87.34%)] max-[900px]:shadow-[inset_0px_4px_8px_0px_#d67b26]">
                    <label className="font-normal text-base leading-[1.3] mb-1 table">
                      {t("fields.tokenName")}
                    </label>
                    <input
                      readOnly
                      disabled
                      className="font-semibold text-base leading-[1.3] text-white"
                      value="CAT"
                    />
                  </div>
                </div>
                <div className="col-span-1 max-sm:col-span-2">
                  <div className="bg-[linear-gradient(191.79deg,rgba(58,45,36,0.3)_15.6%,rgba(237,134,15,0.3)_87.34%)] border border-[#443828] shadow-[inset_0px_4px_34px_#FF8800] backdrop-blur-[45px] rounded-[20px] max-lg:rounded-[12px] p-[23px_22px_22px_20px] max-lg:p-[15px_15px_15px_15px] max-[900px]:border max-[900px]:border-[#dd7730] max-[900px]:bg-[linear-gradient(191.79deg,_rgb(26_22_18)_15.6%,_rgb(42_31_26)_87.34%)] max-[900px]:shadow-[inset_0px_4px_8px_0px_#d67b26]">
                    <label className="font-normal text-base leading-[1.3] mb-1 table">
                      {t("fields.tokenType")}
                    </label>
                    <input
                      readOnly
                      disabled
                      className="font-semibold text-base leading-[1.3] text-white"
                      value="Ethereum"
                    />
                  </div>
                </div>
                <div className="col-span-1 max-sm:col-span-2">
                  <div className="bg-[linear-gradient(191.79deg,rgba(58,45,36,0.3)_15.6%,rgba(237,134,15,0.3)_87.34%)] border border-[#443828] shadow-[inset_0px_4px_34px_#FF8800] backdrop-blur-[45px] rounded-[20px] max-lg:rounded-[12px] p-[23px_22px_22px_20px] max-lg:p-[15px_15px_15px_15px] max-[900px]:border max-[900px]:border-[#dd7730] max-[900px]:bg-[linear-gradient(191.79deg,_rgb(26_22_18)_15.6%,_rgb(42_31_26)_87.34%)] max-[900px]:shadow-[inset_0px_4px_8px_0px_#d67b26]">
                    <label className="font-normal text-base leading-[1.3] mb-1 table">
                      {t("fields.tokenSymbol")}
                    </label>
                    <input
                      readOnly
                      disabled
                      className="font-semibold text-base leading-[1.3] text-white"
                      value="CAT"
                    />
                  </div>
                </div>
                <div className="col-span-1 max-sm:col-span-2">
                  <div className="bg-[linear-gradient(191.79deg,rgba(58,45,36,0.3)_15.6%,rgba(237,134,15,0.3)_87.34%)] border border-[#443828] shadow-[inset_0px_4px_34px_#FF8800] backdrop-blur-[45px] rounded-[20px] max-lg:rounded-[12px] p-[23px_22px_22px_20px] max-lg:p-[15px_15px_15px_15px] max-[900px]:border max-[900px]:border-[#dd7730] max-[900px]:bg-[linear-gradient(191.79deg,_rgb(26_22_18)_15.6%,_rgb(42_31_26)_87.34%)] max-[900px]:shadow-[inset_0px_4px_8px_0px_#d67b26]">
                    <label className="font-normal text-base leading-[1.3] mb-1 table">
                      {t("fields.decimal")}
                    </label>
                    <input
                      readOnly
                      disabled
                      className="font-semibold text-base leading-[1.3] text-white"
                      value="18"
                    />
                  </div>
                </div>
                <div className="col-span-1 max-sm:col-span-2 col-span-2">
                  <div className="bg-[linear-gradient(191.79deg,rgba(58,45,36,0.3)_15.6%,rgba(237,134,15,0.3)_87.34%)] border border-[#443828] shadow-[inset_0px_4px_34px_#FF8800] backdrop-blur-[45px] rounded-[20px] max-lg:rounded-[12px] p-[23px_22px_22px_20px] max-lg:p-[15px_15px_15px_15px] max-[900px]:border max-[900px]:border-[#dd7730] max-[900px]:bg-[linear-gradient(191.79deg,_rgb(26_22_18)_15.6%,_rgb(42_31_26)_87.34%)] max-[900px]:shadow-[inset_0px_4px_8px_0px_#d67b26]">
                    <label className="font-normal text-base leading-[1.3] mb-1 table">
                      {t("fields.totalSupply")}
                    </label>
                    <input
                      readOnly
                      disabled
                      className="font-semibold text-base leading-[1.3] text-white"
                      value="18B"
                    />
                  </div>
                </div>
                <div className="col-span-2">
                  <div className="bg-[linear-gradient(191.79deg,rgba(58,45,36,0.3)_15.6%,rgba(237,134,15,0.3)_87.34%)] border border-[#443828] shadow-[inset_0px_4px_34px_#FF8800] backdrop-blur-[45px] max-lg:rounded-[12px] p-[23px_22px_22px_20px] max-lg:p-[15px_15px_15px_15px] rounded-[20px] max-[900px]:border max-[900px]:border-[#dd7730] max-[900px]:bg-[linear-gradient(191.79deg,_rgb(26_22_18)_15.6%,_rgb(42_31_26)_87.34%)] max-[900px]:shadow-[inset_0px_4px_8px_0px_#d67b26]">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex-[1]">
                        <label className="font-normal text-base leading-[1.3] mb-1 table">
                          {t("fields.contractAddress")}
                        </label>
                        <input
                          readOnly
                          disabled
                          className="font-semibold text-base leading-[1.3] w-full text-white truncate"
                          value="0xbD36044b01B12ba4b1013B47490f9d34aaa20911"
                        />
                      </div>
                      <div>
                        <button
                          className="font-medium font-ptSans flex items-center cursor-pointer transition duration-300 ease-in-out justify-center gap-2.5 border-[#ffffff72] !font-semibold max-sm:!text-[14px] max-sm:!h-[40px] max-sm:w-full !border-none buttonRadialBGBlue bg-[radial-gradient(24.83%_154.95%_at_14.43%_72.32%,_#13DCE3_0%,_#33FFD4_100%)] rounded-[60px] bg-[#FFFF00] hover:bg-none hover:border-[#FFFF00] max-[479px]:!shadow-none p-0 !bg-transparent !bg-none min-w-[inherit] h-auto text-[#FF8800] border-none relative z-10"
                          aria-label="button"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-copy"
                            aria-hidden="true"
                          >
                            <rect
                              width="14"
                              height="14"
                              x="8"
                              y="8"
                              rx="2"
                              ry="2"
                            ></rect>
                            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="max-xl:py-[100px] max-md:py-[50px] max-sm:py-[30px]"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <div
                className="relative w-full z-[1]"
                aria-hidden="false"
                role="img"
              >
                <div className="relative w-full max-w-[336px] max-xl:max-w-[300px] max-[599px]:!max-w-[200px] aspect-square mx-auto">
                  <div>
                    <div
                      id="apexchartsk1rsw1jf"
                      className="apexcharts-canvas apexchartsk1rsw1jf apexcharts-theme-light"
                      style={{ width: "336px", height: "336px" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        className="apexcharts-svg"
                        transform="translate(0, 0)"
                        style={{ background: "transparent" }}
                        width={336}
                        height={336}
                      >
                        <foreignObject x={0} y={0} width={336} height={343}>
                          <style
                            type="text/css"
                            dangerouslySetInnerHTML={{
                              __html:
                                "\n      .apexcharts-flip-y {\n        transform: scaleY(-1) translateY(-100%);\n        transform-origin: top;\n        transform-box: fill-box;\n      }\n      .apexcharts-flip-x {\n        transform: scaleX(-1);\n        transform-origin: center;\n        transform-box: fill-box;\n      }\n      .apexcharts-legend {\n        display: flex;\n        overflow: auto;\n        padding: 0 10px;\n      }\n      .apexcharts-legend.apexcharts-legend-group-horizontal {\n        flex-direction: column;\n      }\n      .apexcharts-legend-group {\n        display: flex;\n      }\n      .apexcharts-legend-group-vertical {\n        flex-direction: column-reverse;\n      }\n      .apexcharts-legend.apx-legend-position-bottom, .apexcharts-legend.apx-legend-position-top {\n        flex-wrap: wrap\n      }\n      .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {\n        flex-direction: column;\n        bottom: 0;\n      }\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-left, .apexcharts-legend.apx-legend-position-top.apexcharts-align-left, .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {\n        justify-content: flex-start;\n        align-items: flex-start;\n      }\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-center, .apexcharts-legend.apx-legend-position-top.apexcharts-align-center {\n        justify-content: center;\n        align-items: center;\n      }\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-right, .apexcharts-legend.apx-legend-position-top.apexcharts-align-right {\n        justify-content: flex-end;\n        align-items: flex-end;\n      }\n      .apexcharts-legend-series {\n        cursor: pointer;\n        line-height: normal;\n        display: flex;\n        align-items: center;\n      }\n      .apexcharts-legend-text {\n        position: relative;\n        font-size: 14px;\n      }\n      .apexcharts-legend-text *, .apexcharts-legend-marker * {\n        pointer-events: none;\n      }\n      .apexcharts-legend-marker {\n        position: relative;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        cursor: pointer;\n        margin-right: 1px;\n      }\n\n      .apexcharts-legend-series.apexcharts-no-click {\n        cursor: auto;\n      }\n      .apexcharts-legend .apexcharts-hidden-zero-series, .apexcharts-legend .apexcharts-hidden-null-series {\n        display: none !important;\n      }\n      .apexcharts-inactive-legend {\n        opacity: 0.45;\n      }\n\n    ",
                            }}
                          />
                        </foreignObject>
                        <g
                          className="apexcharts-inner apexcharts-graphical"
                          transform="translate(0, 0)"
                        >
                          <defs>
                            <clipPath id="gridRectMaskcwb30e3w">
                              <rect
                                width={340}
                                height={340}
                                x={-2}
                                y={-2}
                                rx={0}
                                ry={0}
                                opacity={1}
                                strokeWidth={0}
                                stroke="none"
                                strokeDasharray={0}
                                fill="#fff"
                              />
                            </clipPath>
                            <clipPath id="gridRectBarMaskcwb30e3w">
                              <rect
                                width={340}
                                height={340}
                                x={-2}
                                y={-2}
                                rx={0}
                                ry={0}
                                opacity={1}
                                strokeWidth={0}
                                stroke="none"
                                strokeDasharray={0}
                                fill="#fff"
                              />
                            </clipPath>
                            <clipPath id="gridRectMarkerMaskcwb30e3w">
                              <rect
                                width={336}
                                height={336}
                                x={0}
                                y={0}
                                rx={0}
                                ry={0}
                                opacity={1}
                                strokeWidth={0}
                                stroke="none"
                                strokeDasharray={0}
                                fill="#fff"
                              />
                            </clipPath>
                            <clipPath id="forecastMaskcwb30e3w" />
                            <clipPath id="nonForecastMaskcwb30e3w" />
                            <radialGradient
                              gradientUnits="userSpaceOnUse"
                              cx={168}
                              cy={168}
                              r="159.90243902439025"
                              id="SvgjsRadialGradient1018"
                            >
                              <stop
                                stopOpacity={1}
                                stopColor="rgba(16,31,37,1)"
                                offset={0}
                              />
                              <stop
                                stopOpacity={1}
                                stopColor="rgba(255,255,0,1)"
                                offset={1}
                              />
                              <stop
                                stopOpacity={1}
                                stopColor="rgba(255,255,0,1)"
                                offset={1}
                              />
                            </radialGradient>
                            <radialGradient
                              gradientUnits="userSpaceOnUse"
                              cx={168}
                              cy={168}
                              r="159.90243902439025"
                              id="SvgjsRadialGradient1019"
                            >
                              <stop
                                stopOpacity={1}
                                stopColor="rgba(16,31,37,1)"
                                offset={0}
                              />
                              <stop
                                stopOpacity={1}
                                stopColor="rgba(149,255,133,1)"
                                offset={1}
                              />
                              <stop
                                stopOpacity={1}
                                stopColor="rgba(149,255,133,1)"
                                offset={1}
                              />
                            </radialGradient>
                            <radialGradient
                              gradientUnits="userSpaceOnUse"
                              cx={168}
                              cy={168}
                              r="159.90243902439025"
                              id="SvgjsRadialGradient1020"
                            >
                              <stop
                                stopOpacity={1}
                                stopColor="rgba(16,31,37,1)"
                                offset={0}
                              />
                              <stop
                                stopOpacity={1}
                                stopColor="rgba(255,169,63,1)"
                                offset={1}
                              />
                              <stop
                                stopOpacity={1}
                                stopColor="rgba(255,169,63,1)"
                                offset={1}
                              />
                            </radialGradient>
                            <radialGradient
                              gradientUnits="userSpaceOnUse"
                              cx={168}
                              cy={168}
                              r="159.90243902439025"
                              id="SvgjsRadialGradient1021"
                            >
                              <stop
                                stopOpacity={1}
                                stopColor="rgba(16,31,37,1)"
                                offset={0}
                              />
                              <stop
                                stopOpacity={1}
                                stopColor="rgba(68,142,226,1)"
                                offset={1}
                              />
                              <stop
                                stopOpacity={1}
                                stopColor="rgba(68,142,226,1)"
                                offset={1}
                              />
                            </radialGradient>
                            <radialGradient
                              gradientUnits="userSpaceOnUse"
                              cx={168}
                              cy={168}
                              r="159.90243902439025"
                              id="SvgjsRadialGradient1022"
                            >
                              <stop
                                stopOpacity={1}
                                stopColor="rgba(16,31,37,1)"
                                offset={0}
                              />
                              <stop
                                stopOpacity={1}
                                stopColor="rgba(251,255,121,1)"
                                offset={1}
                              />
                              <stop
                                stopOpacity={1}
                                stopColor="rgba(251,255,121,1)"
                                offset={1}
                              />
                            </radialGradient>
                            <radialGradient
                              gradientUnits="userSpaceOnUse"
                              cx={168}
                              cy={168}
                              r="159.90243902439025"
                              id="SvgjsRadialGradient1023"
                            >
                              <stop
                                stopOpacity={1}
                                stopColor="rgba(16,31,37,1)"
                                offset={0}
                              />
                              <stop
                                stopOpacity={1}
                                stopColor="rgba(237,134,15,1)"
                                offset={1}
                              />
                              <stop
                                stopOpacity={1}
                                stopColor="rgba(237,134,15,1)"
                                offset={1}
                              />
                            </radialGradient>
                            <filter
                              id="SvgjsFilter1025"
                              filterUnits="userSpaceOnUse"
                              width="200%"
                              height="200%"
                              x="-50%"
                              y="-50%"
                            >
                              <feColorMatrix
                                id="SvgjsFeColorMatrix1024"
                                result="brightness"
                                in="SourceGraphic"
                                type="matrix"
                                values="
    2 0 0 0 0
    0 2 0 0 0
    0 0 2 0 0
    0 0 0 1 0
  "
                              />
                            </filter>
                            <filter
                              id="SvgjsFilter1027"
                              filterUnits="userSpaceOnUse"
                              width="200%"
                              height="200%"
                              x="-50%"
                              y="-50%"
                            >
                              <feColorMatrix
                                id="SvgjsFeColorMatrix1026"
                                result="brightness"
                                in="SourceGraphic"
                                type="matrix"
                                values="
    2 0 0 0 0
    0 2 0 0 0
    0 0 2 0 0
    0 0 0 1 0
  "
                              />
                            </filter>
                            <filter
                              id="SvgjsFilter1029"
                              filterUnits="userSpaceOnUse"
                              width="200%"
                              height="200%"
                              x="-50%"
                              y="-50%"
                            >
                              <feColorMatrix
                                id="SvgjsFeColorMatrix1028"
                                result="brightness"
                                in="SourceGraphic"
                                type="matrix"
                                values="
    2 0 0 0 0
    0 2 0 0 0
    0 0 2 0 0
    0 0 0 1 0
  "
                              />
                            </filter>
                            <filter
                              id="SvgjsFilter1031"
                              filterUnits="userSpaceOnUse"
                              width="200%"
                              height="200%"
                              x="-50%"
                              y="-50%"
                            >
                              <feColorMatrix
                                id="SvgjsFeColorMatrix1030"
                                result="brightness"
                                in="SourceGraphic"
                                type="matrix"
                                values="
    2 0 0 0 0
    0 2 0 0 0
    0 0 2 0 0
    0 0 0 1 0
  "
                              />
                            </filter>
                          </defs>
                          <g className="apexcharts-pie">
                            <g transform="translate(0, 0) scale(1)">
                              <circle
                                r="108.73365853658537"
                                cx={168}
                                cy={168}
                                fill="transparent"
                              />
                              <g className="apexcharts-slices">
                                <g className="apexcharts-series apexcharts-pie-series">
                                  <path
                                    d="M 168 8.097560975609753 A 159.90243902439025 159.90243902439025 0 0 1 297.3637906127355 74.01170453586698 L 255.96737761666014 104.08795908438955 A 108.73365853658537 108.73365853658537 0 0 0 168 59.26634146341463 L 168 8.097560975609753 z "
                                    fill="url(#SvgjsRadialGradient1018)"
                                    fillOpacity={1}
                                    stroke="#ffffff"
                                    strokeOpacity={1}
                                    strokeLinecap="butt"
                                    strokeWidth={0}
                                    strokeDasharray={0}
                                    className="apexcharts-pie-area apexcharts-donut-slice-0"
                                  />
                                </g>
                                <g className="apexcharts-series apexcharts-pie-series">
                                  <path
                                    d="M 297.3637906127355 74.01170453586698 A 159.90243902439025 159.90243902439025 0 0 1 327.9024390243902 168 L 276.7336585365854 168 A 108.73365853658537 108.73365853658537 0 0 0 255.96737761666014 104.08795908438955 L 297.3637906127355 74.01170453586698 z "
                                    fill="url(#SvgjsRadialGradient1019)"
                                    fillOpacity={1}
                                    stroke="#ffffff"
                                    strokeOpacity={1}
                                    strokeLinecap="butt"
                                    strokeWidth={0}
                                    strokeDasharray={0}
                                    className="apexcharts-pie-area apexcharts-donut-slice-1"
                                  />
                                </g>
                                <g className="apexcharts-series apexcharts-pie-series">
                                  <path
                                    d="M 327.9024390243902 168 A 159.90243902439025 159.90243902439025 0 0 1 297.3637906127355 261.988295464133 L 255.96737761666014 231.91204091561045 A 108.73365853658537 108.73365853658537 0 0 0 276.7336585365854 168 L 327.9024390243902 168 z "
                                    fill="url(#SvgjsRadialGradient1020)"
                                    fillOpacity={1}
                                    stroke="#ffffff"
                                    strokeOpacity={1}
                                    strokeLinecap="butt"
                                    strokeWidth={0}
                                    strokeDasharray={0}
                                    className="apexcharts-pie-area apexcharts-donut-slice-2"
                                  />
                                </g>
                                <g className="apexcharts-series apexcharts-pie-series">
                                  <path
                                    d="M 297.3637906127355 261.988295464133 A 159.90243902439025 159.90243902439025 0 0 1 261.988295464133 297.3637906127355 L 231.91204091561045 255.96737761666014 A 108.73365853658537 108.73365853658537 0 0 0 255.96737761666014 231.91204091561045 L 297.3637906127355 261.988295464133 z "
                                    fill="url(#SvgjsRadialGradient1021)"
                                    fillOpacity={1}
                                    stroke="#ffffff"
                                    strokeOpacity={1}
                                    strokeLinecap="butt"
                                    strokeWidth={0}
                                    strokeDasharray={0}
                                    className="apexcharts-pie-area apexcharts-donut-slice-3"
                                  />
                                </g>
                                <g className="apexcharts-series apexcharts-pie-series">
                                  <path
                                    d="M 261.988295464133 297.3637906127355 A 159.90243902439025 159.90243902439025 0 0 1 74.011704535867 297.3637906127355 L 104.08795908438955 255.96737761666014 A 108.73365853658537 108.73365853658537 0 0 0 231.91204091561045 255.96737761666014 L 261.988295464133 297.3637906127355 z "
                                    fill="url(#SvgjsRadialGradient1022)"
                                    fillOpacity={1}
                                    stroke="#ffffff"
                                    strokeOpacity={1}
                                    strokeLinecap="butt"
                                    strokeWidth={0}
                                    strokeDasharray={0}
                                    className="apexcharts-pie-area apexcharts-donut-slice-4"
                                  />
                                </g>
                                <g className="apexcharts-series apexcharts-pie-series">
                                  <path
                                    d="M 74.011704535867 297.3637906127355 A 159.90243902439025 159.90243902439025 0 0 1 167.9720917597122 8.097563411063163 L 167.98102239660432 59.26634311952294 A 108.73365853658537 108.73365853658537 0 0 0 104.08795908438955 255.96737761666014 L 74.011704535867 297.3637906127355 z "
                                    fill="url(#SvgjsRadialGradient1023)"
                                    fillOpacity={1}
                                    stroke="#ffffff"
                                    strokeOpacity={1}
                                    strokeLinecap="butt"
                                    strokeWidth={0}
                                    strokeDasharray={0}
                                    className="apexcharts-pie-area apexcharts-donut-slice-5"
                                  />
                                </g>
                              </g>
                            </g>
                          </g>
                          <line
                            x1={0}
                            y1={0}
                            x2={336}
                            y2={0}
                            stroke="#b6b6b6"
                            strokeDasharray={0}
                            strokeWidth={1}
                            strokeLinecap="butt"
                            className="apexcharts-ycrosshairs"
                          />
                          <line
                            x1={0}
                            y1={0}
                            x2={336}
                            y2={0}
                            stroke="#b6b6b6"
                            strokeDasharray={0}
                            strokeWidth={0}
                            strokeLinecap="butt"
                            className="apexcharts-ycrosshairs-hidden"
                          />
                        </g>
                        <g
                          className="apexcharts-datalabels-group"
                          transform="translate(0, 0) scale(1)"
                          style={{ opacity: 1 }}
                        />
                        <g
                          className="apexcharts-datalabels-group"
                          transform="translate(0, 0) scale(1)"
                        />
                      </svg>

                      <div className="apexcharts-legend"></div>
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div style={{ transform: "rotate(246.528deg)" }}>
                      <img
                        alt="globe"
                        loading="lazy"
                        width="107"
                        height="109"
                        decoding="async"
                        data-nimg="1"
                        className="max-sm:w-[80px]"
                        style={{ color: "transparent" }}
                        src="/logoSuncat.png"
                      />
                    </div>
                  </div>
                  {/* Chart labels positioned absolutely */}
                  <div
                    style={{
                      position: "absolute",
                      left: "263.893px",
                      top: "-4.49886px",
                      transform: "translate(0%, -50%)",
                      whiteSpace: "nowrap",
                      textAlign: "left",
                      pointerEvents: "none",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "15px",
                        lineHeight: 1.3,
                        color: "rgb(255, 255, 255)",
                        fontWeight: 400,
                        marginBottom: "10px",
                        textTransform: "uppercase",
                        textAlign: "left",
                        marginTop: "0px",
                      }}
                    >
                      Team &<br />
                      Advisors
                    </div>
                    <div
                      style={{
                        fontSize: "19px",
                        fontWeight: 700,
                        color: "rgb(255, 255, 0)",
                        textAlign: "left",
                      }}
                    >
                      15%
                    </div>
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      left: "360.125px",
                      top: "108.174px",
                      transform: "translate(0%, -50%)",
                      whiteSpace: "nowrap",
                      textAlign: "left",
                      pointerEvents: "none",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "15px",
                        lineHeight: 1.3,
                        color: "rgb(255, 255, 255)",
                        fontWeight: 400,
                        marginBottom: "10px",
                        textTransform: "uppercase",
                        textAlign: "left",
                        marginTop: "0px",
                      }}
                    >
                      Liquidity &<br />
                      Exchange
                    </div>
                    <div
                      style={{
                        fontSize: "19px",
                        fontWeight: 700,
                        color: "rgb(149, 255, 133)",
                        lineHeight: 1,
                        textAlign: "left",
                      }}
                    >
                      10%
                    </div>
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      left: "360.125px",
                      top: "227.826px",
                      transform: "translate(0%, -50%)",
                      whiteSpace: "nowrap",
                      textAlign: "left",
                      pointerEvents: "none",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "15px",
                        lineHeight: 1.3,
                        color: "rgb(255, 255, 255)",
                        fontWeight: 400,
                        marginBottom: "10px",
                        textTransform: "uppercase",
                        textAlign: "left",
                        marginTop: "0px",
                      }}
                    >
                      Marketing &<br />
                      Community
                    </div>
                    <div
                      style={{
                        fontSize: "19px",
                        fontWeight: 700,
                        color: "rgb(255, 169, 63)",
                        lineHeight: 1,
                        textAlign: "left",
                      }}
                    >
                      10%
                    </div>
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      left: "312.896px",
                      top: "304.896px",
                      transform: "translate(0%, -50%)",
                      whiteSpace: "nowrap",
                      textAlign: "left",
                      pointerEvents: "none",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "15px",
                        lineHeight: 1.3,
                        color: "rgb(255, 255, 255)",
                        fontWeight: 400,
                        marginBottom: "10px",
                        textTransform: "uppercase",
                        textAlign: "left",
                        marginTop: "0px",
                      }}
                    >
                      Reserve
                    </div>
                    <div
                      style={{
                        fontSize: "19px",
                        fontWeight: 700,
                        color: "rgb(68, 142, 226)",
                        lineHeight: 1,
                        textAlign: "left",
                      }}
                    >
                      05%
                    </div>
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      left: "176px",
                      top: "361.6px",
                      transform: "translate(0%, -50%)",
                      whiteSpace: "nowrap",
                      textAlign: "left",
                      pointerEvents: "none",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "15px",
                        lineHeight: 1.3,
                        color: "rgb(255, 255, 255)",
                        fontWeight: 400,
                        marginBottom: "10px",
                        textTransform: "uppercase",
                        textAlign: "left",
                        marginTop: "0px",
                      }}
                    >
                      Ecosystem &<br />
                      Development
                    </div>
                    <div
                      style={{
                        fontSize: "19px",
                        fontWeight: 700,
                        color: "rgb(251, 255, 121)",
                        lineHeight: 1,
                        textAlign: "left",
                      }}
                    >
                      20%
                    </div>
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      left: "-24.1245px",
                      top: "108.174px",
                      transform: "translate(-100%, -50%)",
                      whiteSpace: "nowrap",
                      textAlign: "right",
                      pointerEvents: "none",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "15px",
                        lineHeight: 1.3,
                        color: "rgb(255, 255, 255)",
                        fontWeight: 400,
                        marginBottom: "10px",
                        textTransform: "uppercase",
                        textAlign: "left",
                        marginTop: "0px",
                      }}
                    >
                      Presale
                    </div>
                    <div
                      style={{
                        fontSize: "19px",
                        fontWeight: 700,
                        color: "rgb(15, 237, 190)",
                        lineHeight: 1,
                        textAlign: "left",
                      }}
                    >
                      40%
                    </div>
                  </div>
                </div>
                <div className="absolute top-[-17%] left-[-68%] w-[1060px] -z-1">
                  <img
                    alt="no image"
                    loading="lazy"
                    width="487"
                    height="397"
                    decoding="async"
                    data-nimg="1"
                    className="w-full"
                    style={{ color: "transparent" }}
                    src="/tokenomicsBannGrid.webp"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 max-md:mt-5 flex items-center justify-center">
            <div className="button-wrapper">
              <button
                className="h-[48px] font-medium font-ptSans flex items-center cursor-pointer ease-in-out justify-center gap-2.5 !font-semibold max-sm:!text-[14px] max-sm:!h-[40px] max-sm:w-full !border-none buttonRadialBGBlue bg-[radial-gradient(24.83%_154.95%_at_14.43%_72.32%,_#FF8800_0%,_#FF6600_100%)] rounded-[60px] bg-[#FFFF00] hover:bg-none hover:border-[#FFFF00] max-[479px]:!shadow-none button overflow-hidden px-[47px] max-lg:px-[35px] !bg-black hover:!bg-[#ffff00] hover:text-black relative z-10 text-[#FFFF00] !bg-none !border-0 border-transparent max-md:px-[30px] max-sm:px-[25px] min-w-[176px] max-lg:min-w-0 whitespace-nowrap max-md:h-[40px] max-md:text-[14px] transition-all duration-300"
                aria-label="button"
              >
                {t("button")}
              </button>
              <div className="button-bg bg-[radial-gradient(45.54%_275.61%_at_14.77%_80.36%,_#FFFF00_0%,_#00FF66_100%)]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
