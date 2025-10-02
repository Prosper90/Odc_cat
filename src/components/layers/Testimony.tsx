import SectionDivider from "../common/SectionDivider";
import { useTranslation } from "react-i18next";

export default function Testimony() {
  const { t } = useTranslation("testimony");
  return (
    <>
      <SectionDivider variant="simple" />
      <div className="relative py-[50px] max-[1200px]:py-10 max-[900px]:py-8 bg-gradient-to-b from-transparent to-[rgba(255,136,0,0.02)]">
        <div className="container">
          <div className="flex max-lg:flex-col items-center max-lg:items-start justify-between gap-[10px] mb-9 max-md:mb-5 max-md:text-center max-md:items-center">
            <div>
              <h2 className="font-bold text-white mb-[10px] text-3xl max-lg:text-2xl max-md:text-xl">
                {t("title")}
              </h2>
              <p className="text-base mx-auto text-white">{t("description")}</p>
            </div>
          </div>
        </div>

        <div className="relative max-xl:pb-20 max-lg:pb-[60px]">
          {/* Simplified testimonial slider - you'd need to implement actual slider functionality */}
          <div className="overflow-x-auto">
            <div className="flex gap-4 px-4 min-w-max">
              {/* Testimonial Card 1 */}
              <div className="w-[316px] px-2">
                <div className="bg-gradient-to-br from-[rgba(58,45,36,0.3)] to-[rgba(237,134,15,0.3)] p-2 border border-[#443828] rounded-2xl max-lg:rounded-xl">
                  <div className="flex flex-col items-center max-xl:items-start justify-between gap-5 max-xl:gap-8 max-xl:flex-col-reverse">
                    <div className="w-full max-xl:max-w-none">
                      <a
                        href="https://youtu.be/_XJ9f0PbK7g"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                          <div className="relative w-full pb-[56.25%]">
                            <img
                              alt="Review"
                              loading="lazy"
                              decoding="async"
                              className="absolute inset-0 object-cover w-full h-full"
                              src="https://img.youtube.com/vi/_XJ9f0PbK7g/maxresdefault.jpg"
                            />
                            <img
                              alt="overlay"
                              loading="lazy"
                              decoding="async"
                              className="absolute inset-0 object-cover w-full h-full"
                              src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FyoutubeOverlay.835ec5bb.png&w=3840&q=75&dpl=dpl_EWAS8ZF1SPz1gvd3Hgrceu9TqG7t"
                            />
                            <div className="absolute top-2 left-2 bg-red-600 p-1 rounded">
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 576 512"
                                className="text-white text-base"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial Card 2 */}
              <div className="w-[316px] px-2">
                <div className="bg-gradient-to-br from-[rgba(58,45,36,0.3)] to-[rgba(237,134,15,0.3)] p-2 border border-[#443828] rounded-2xl max-lg:rounded-xl">
                  <div className="flex flex-col items-center max-xl:items-start justify-between gap-5 max-xl:gap-8 max-xl:flex-col-reverse">
                    <div className="w-full max-xl:max-w-none">
                      <a
                        href="https://www.youtube.com/watch?v=fQzkfdw5nqk"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                          <div className="relative w-full pb-[56.25%]">
                            <img
                              alt="Review"
                              loading="lazy"
                              decoding="async"
                              className="absolute inset-0 object-cover w-full h-full"
                              src="https://img.youtube.com/vi/fQzkfdw5nqk/maxresdefault.jpg"
                            />
                            <img
                              alt="overlay"
                              loading="lazy"
                              decoding="async"
                              className="absolute inset-0 object-cover w-full h-full"
                              src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FyoutubeOverlay.835ec5bb.png&w=3840&q=75&dpl=dpl_EWAS8ZF1SPz1gvd3Hgrceu9TqG7t"
                            />
                            <div className="absolute top-2 left-2 bg-red-600 p-1 rounded">
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 576 512"
                                className="text-white text-base"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial Card 3 */}
              <div className="w-[316px] px-2">
                <div className="bg-gradient-to-br from-[rgba(58,45,36,0.3)] to-[rgba(237,134,15,0.3)] p-2 border border-[#443828] rounded-2xl max-lg:rounded-xl">
                  <div className="flex flex-col items-center max-xl:items-start justify-between gap-5 max-xl:gap-8 max-xl:flex-col-reverse">
                    <div className="w-full max-xl:max-w-none">
                      <a
                        href="https://www.youtube.com/watch?app=desktop&v=5pJIL1FZ2P4"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                          <div className="relative w-full pb-[56.25%]">
                            <img
                              alt="Review"
                              loading="lazy"
                              decoding="async"
                              className="absolute inset-0 object-cover w-full h-full"
                              src="https://img.youtube.com/vi/5pJIL1FZ2P4/maxresdefault.jpg"
                            />
                            <img
                              alt="overlay"
                              loading="lazy"
                              decoding="async"
                              className="absolute inset-0 object-cover w-full h-full"
                              src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FyoutubeOverlay.835ec5bb.png&w=3840&q=75&dpl=dpl_EWAS8ZF1SPz1gvd3Hgrceu9TqG7t"
                            />
                            <div className="absolute top-2 left-2 bg-red-600 p-1 rounded">
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 576 512"
                                className="text-white text-base"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial Card 4 */}
              <div className="w-[316px] px-2">
                <div className="bg-gradient-to-br from-[rgba(58,45,36,0.3)] to-[rgba(237,134,15,0.3)] p-2 border border-[#443828] rounded-2xl max-lg:rounded-xl">
                  <div className="flex flex-col items-center max-xl:items-start justify-between gap-5 max-xl:gap-8 max-xl:flex-col-reverse">
                    <div className="w-full max-xl:max-w-none">
                      <a
                        href="https://www.youtube.com/watch?v=dncjQwJ5KSY"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                          <div className="relative w-full pb-[56.25%]">
                            <img
                              alt="Review"
                              loading="lazy"
                              decoding="async"
                              className="absolute inset-0 object-cover w-full h-full"
                              src="https://img.youtube.com/vi/dncjQwJ5KSY/maxresdefault.jpg"
                            />
                            <img
                              alt="overlay"
                              loading="lazy"
                              decoding="async"
                              className="absolute inset-0 object-cover w-full h-full"
                              src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FyoutubeOverlay.835ec5bb.png&w=3840&q=75&dpl=dpl_EWAS8ZF1SPz1gvd3Hgrceu9TqG7t"
                            />
                            <div className="absolute top-2 left-2 bg-red-600 p-1 rounded">
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 576 512"
                                className="text-white text-base"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial Card 5 */}
              <div className="w-[316px] px-2">
                <div className="bg-gradient-to-br from-[rgba(58,45,36,0.3)] to-[rgba(237,134,15,0.3)] p-2 border border-[#443828] rounded-2xl max-lg:rounded-xl">
                  <div className="flex flex-col items-center max-xl:items-start justify-between gap-5 max-xl:gap-8 max-xl:flex-col-reverse">
                    <div className="w-full max-xl:max-w-none">
                      <a
                        href="https://www.youtube.com/watch?v=o6_Qvys06ZE"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                          <div className="relative w-full pb-[56.25%]">
                            <img
                              alt="Review"
                              loading="lazy"
                              decoding="async"
                              className="absolute inset-0 object-cover w-full h-full"
                              src="https://img.youtube.com/vi/o6_Qvys06ZE/maxresdefault.jpg"
                            />
                            <img
                              alt="overlay"
                              loading="lazy"
                              decoding="async"
                              className="absolute inset-0 object-cover w-full h-full"
                              src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FyoutubeOverlay.835ec5bb.png&w=3840&q=75&dpl=dpl_EWAS8ZF1SPz1gvd3Hgrceu9TqG7t"
                            />
                            <div className="absolute top-2 left-2 bg-red-600 p-1 rounded">
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 576 512"
                                className="text-white text-base"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            aria-label="button prev"
            className="absolute top-1/2 max-xl:top-auto max-xl:bottom-0 max-xl:bg-[#1a2f3a] max-xl:w-11 max-xl:h-11 left-[18%] max-xl:translate-y-0 max-xl:left-[calc(50%-50px)] max-lg:left-[calc(50%-50px)] max-2xl:left-[20%] -translate-y-1/2 w-9 h-9 max-lg:w-[30px] max-lg:h-[30px] bg-[#00070F] cursor-pointer p-2 rounded-full z-10 hover:opacity-75 flex items-center justify-center"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 12H5M5 12L12 5M5 12L12 19"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>

          <button
            aria-label="button next"
            className="absolute top-1/2 max-xl:top-auto max-xl:bottom-0 right-[18%] max-xl:bg-[#1a2f3a] max-xl:w-11 max-xl:h-11 max-xl:translate-y-0 max-xl:right-[45%] max-lg:right-[calc(50%-50px)] max-2xl:right-[20%] -translate-y-1/2 w-9 h-9 max-lg:w-[30px] max-lg:h-[30px] bg-[#00070F] cursor-pointer p-2 rounded-full z-10 hover:opacity-75 flex items-center justify-center"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
