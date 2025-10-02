import SectionDivider from "../common/SectionDivider";
import { useTranslation } from "react-i18next";

export default function Phase() {
  const { t } = useTranslation("phase");
  return (
    <>
      <SectionDivider variant="simple" />
      <div
        className="ecosystemNewBg py-[70px] max-[1200px]:py-[60px] max-[900px]:py-[40px] scroll-mt-[40px]"
        id="roadmap"
      >
        <div className="container">
          <div className="flex text-center justify-center pb-8 max-md:pb-6">
            <h2 className="text-[40px] font-bold text-white ">{t("title")}</h2>
          </div>
          <div className="grid grid-cols-3 gap-6 max-[1600px] gap-2 max-[1400px]:grid-cols-1">
            <div className="flex flex-col items-center h-full w-full">
              <div className="px-[37px] py-1 h-8 rounded-[8px] mb-[-32px] text-[20px] font-bold text-white bg-[linear-gradient(180deg,#FF8800_0%,#FFD700_100%)] relative z-10 inline-flex items-center justify-center ">
                Phase {t("phases.0.number")}
              </div>
              <div className="pt-[16px] flex flex-col items-center h-full w-full">
                <div className="bg-[linear-gradient(180deg,#FF8800_0%,#00070F_100%)] p-[1px] rounded-[20px] h-full w-full">
                  <div className="bg-[#1a1612] rounded-[20px] px-[26px] py-[30px] !pt-8 h-full max-[1600px]:p-4 w-full">
                    <p className="text-center text-[14px] mb-3">
                      ({t("phases.0.date")})
                    </p>
                    <div className="flex flex-col items-center text-center mb-5">
                      <h3 className="text-center">{t("phases.0.name")}</h3>
                      <p className="text-center text-[14px]">
                        {t("phases.0.subtitle")}
                      </p>
                    </div>
                    <ul className="flex flex-col gap-4">
                      <li className="!items-start ">
                        <i className="flex-shrink-0 inline-flex items-center justify-center size-[24px]">
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
                        <div className="text-[14px]">
                          <h4 className="font-bold">Platform Launch</h4>
                          <p>
                            Deploy the core Cat platform with foundational AI
                            features, including project scoring and opportunity
                            identification.
                          </p>
                        </div>
                      </li>
                      <li className="!items-start ">
                        <i className="flex-shrink-0 inline-flex items-center justify-center size-[24px]">
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
                        <div className="text-[14px]">
                          <h4 className="font-bold">
                            Smart Contract Auditing Tool
                          </h4>
                          <p>
                            Introduce the automated smart contract auditing
                            feature to vet projects.
                          </p>
                        </div>
                      </li>
                      <li className="!items-start ">
                        <i className="flex-shrink-0 inline-flex items-center justify-center size-[24px]">
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
                        <div className="text-[14px]">
                          <h4 className="font-bold">
                            Token Presale and Distribution
                          </h4>
                          <p>
                            Launch the token presale at $0.01 and distribute
                            tokens to early investors.
                          </p>
                        </div>
                      </li>
                      <li className="!items-start ">
                        <i className="flex-shrink-0 inline-flex items-center justify-center size-[24px]">
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
                        <div className="text-[14px]">
                          <h4 className="font-bold">
                            AI Integration with Market Pulse
                          </h4>
                          <p>
                            Deploy the first version of the AI-powered Market
                            Pulse for real-time trend analysis.
                          </p>
                        </div>
                      </li>
                      <li className="!items-start ">
                        <i className="flex-shrink-0 inline-flex items-center justify-center size-[24px]">
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
                        <div className="text-[14px]">
                          <h4 className="font-bold">Community Building</h4>
                          <p>
                            Launch the Cat community hub for onboarding,
                            investor education, and early adopter engagement.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center h-full w-full">
              <div className="px-[37px] py-1 h-8 rounded-[8px] mb-[-32px] text-[20px] font-bold text-white bg-[linear-gradient(180deg,#FF8800_0%,#FFD700_100%)] relative z-10 inline-flex items-center justify-center ">
                Phase {/* */}2
              </div>
              <div className="pt-[16px] flex flex-col items-center h-full w-full">
                <div className="bg-[linear-gradient(180deg,#FF8800_0%,#00070F_100%)] p-[1px] rounded-[20px] h-full w-full">
                  <div className="bg-[#1a1612] rounded-[20px] px-[26px] py-[30px] !pt-8 h-full max-[1600px]:p-4 w-full">
                    <p className="text-center text-[14px] mb-3">
                      ({/* */}Jun 2025 - Dec 2025{/* */})
                    </p>
                    <div className="flex flex-col items-center text-center mb-5">
                      <h3 className="text-center">Ascent</h3>
                      <p className="text-center text-[14px]">
                        Scaling the Ecosystem
                      </p>
                    </div>
                    <ul className="flex flex-col gap-4">
                      <li className="!items-start ">
                        <i className="flex-shrink-0 inline-flex items-center justify-center size-[24px]">
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
                        <div className="text-[14px]">
                          <h4 className="font-bold">
                            Portfolio Risk Management Engine
                          </h4>
                          <p>
                            Introduce the AI-powered risk management tool to
                            balance investments and manage market volatility.
                          </p>
                        </div>
                      </li>
                      <li className="!items-start ">
                        <i className="flex-shrink-0 inline-flex items-center justify-center size-[24px]">
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
                        <div className="text-[14px]">
                          <h4 className="font-bold">
                            Enhanced On-Chain Monitoring
                          </h4>
                          <p>
                            Implement real-time blockchain monitoring with
                            automated alert notifications.
                          </p>
                        </div>
                      </li>
                      <li className="!items-start ">
                        <i className="flex-shrink-0 inline-flex items-center justify-center size-[24px]">
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
                        <div className="text-[14px]">
                          <h4 className="font-bold">
                            Dynamic AI Governance Protocol
                          </h4>
                          <p>
                            Launch a beta version of decentralized
                            decision-making for project partnerships and token
                            launches.
                          </p>
                        </div>
                      </li>
                      <li className="!items-start ">
                        <i className="flex-shrink-0 inline-flex items-center justify-center size-[24px]">
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
                        <div className="text-[14px]">
                          <h4 className="font-bold">
                            Early Access Scoring System (EASS) V2
                          </h4>
                          <p>
                            Upgrade the EASS with additional AI parameters for
                            tokenomics and social sentiment analysis.
                          </p>
                        </div>
                      </li>
                      <li className="!items-start ">
                        <i className="flex-shrink-0 inline-flex items-center justify-center size-[24px]">
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
                        <div className="text-[14px]">
                          <h4 className="font-bold">Partnership Development</h4>
                          <p>
                            Secure partnerships with emerging blockchain
                            projects to provide exclusive investment
                            opportunities.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center h-full w-full">
              <div className="px-[37px] py-1 h-8 rounded-[8px] mb-[-32px] text-[20px] font-bold text-white bg-[linear-gradient(180deg,#FF8800_0%,#FFD700_100%)] relative z-10 inline-flex items-center justify-center ">
                Phase {/* */}3
              </div>
              <div className="pt-[16px] flex flex-col items-center h-full w-full">
                <div className="bg-[linear-gradient(180deg,#FF8800_0%,#00070F_100%)] p-[1px] rounded-[20px] h-full w-full">
                  <div className="bg-[#1a1612] rounded-[20px] px-[26px] py-[30px] !pt-8 h-full max-[1600px]:p-4 w-full">
                    <p className="text-center text-[14px] mb-3">
                      ({/* */}Jan 2025 - June 2025{/* */})
                    </p>
                    <div className="flex flex-col items-center text-center mb-5">
                      <h3 className="text-center">Apex</h3>
                      <p className="text-center text-[14px]">
                        Driving Innovation and Adoption
                      </p>
                    </div>
                    <ul className="flex flex-col gap-4">
                      <li className="!items-start ">
                        <i className="flex-shrink-0 inline-flex items-center justify-center size-[24px]">
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
                        <div className="text-[14px]">
                          <h4 className="font-bold">
                            Decentralized Investment Pools
                          </h4>
                          <p>
                            Launch the community-driven investment pool feature
                            to enable collective investments in vetted projects.
                          </p>
                        </div>
                      </li>
                      <li className="!items-start ">
                        <i className="flex-shrink-0 inline-flex items-center justify-center size-[24px]">
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
                        <div className="text-[14px]">
                          <h4 className="font-bold">Tokenomics Analyzer</h4>
                          <p>
                            Roll out the in-depth tokenomics evaluation tool to
                            assess project sustainability and long-term
                            viability.
                          </p>
                        </div>
                      </li>
                      <li className="!items-start ">
                        <i className="flex-shrink-0 inline-flex items-center justify-center size-[24px]">
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
                        <div className="text-[14px]">
                          <h4 className="font-bold">AI Scalability Upgrade</h4>
                          <p>
                            Optimize AI algorithms to analyze larger datasets
                            for improved accuracy and predictive capabilities.
                          </p>
                        </div>
                      </li>
                      <li className="!items-start ">
                        <i className="flex-shrink-0 inline-flex items-center justify-center size-[24px]">
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
                        <div className="text-[14px]">
                          <h4 className="font-bold">Cat Mobile App</h4>
                          <p>
                            Release the mobile application for seamless user
                            experience and on-the-go investment tracking.
                          </p>
                        </div>
                      </li>
                      <li className="!items-start ">
                        <i className="flex-shrink-0 inline-flex items-center justify-center size-[24px]">
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
                        <div className="text-[14px]">
                          <h4 className="font-bold">
                            Global Outreach Campaign
                          </h4>
                          <p>
                            Execute marketing initiatives to expand Cat’ reach
                            into international markets.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[20px] max-sm:[&>button]:w-full flex justify-center">
            <div className="button-wrapper ">
              <button
                className="h-[48px] font-medium font-ptSans flex items-center cursor-pointer ease-in-out justify-center gap-2.5 !font-semibold max-sm:!text-[14px] max-sm:!h-[40px] max-sm:w-full !border-none buttonRadialBGBlue bg-[radial-gradient(24.83%_154.95%_at_14.43%_72.32%,_#FF8800_0%,_#FF6600_100%)] rounded-[60px] bg-[#FFFF00] hover:bg-none hover:border-[#FFFF00] max-[479px]:!shadow-none button overflow-hidden px-[47px] max-lg:px-[35px] !bg-black hover:!bg-[#ffff00] hover:text-black relative z-10 text-[#FFFF00] !bg-none !border-0 border-transparent max-md:px-[30px] max-sm:px-[25px] min-w-[176px] max-lg:min-w-0 whitespace-nowrap max-md:h-[40px] max-md:text-[14px] transition-all duration-300"
                aria-label="button"
              >
                Buy $CAT
              </button>
              <div className="button-bg bg-[radial-gradient(24.83%_154.95%_at_14.43%_72.32%,_#13DCE3_0%,_#33FFD4_100%)]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
