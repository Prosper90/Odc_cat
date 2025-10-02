import { useState } from "react";
import { useTranslation } from "react-i18next";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  id: string;
  label: string;
  questions: FAQItem[];
}

const useFaqData = (): FAQCategory[] => {
  const { t } = useTranslation('faq');

  return [
  {
    id: "general",
    label: t('categories.general'),
    questions: t('questions.general', { returnObjects: true }) as FAQItem[]
  },
  {
    id: "presale",
    label: t('categories.presale'),
    questions: t('questions.presale', { returnObjects: true }) as FAQItem[]
  },
  {
    id: "support",
    label: t('categories.support'),
    questions: t('questions.support', { returnObjects: true }) as FAQItem[]
  },
  {
    id: "rewards",
    label: t('categories.rewards'),
    questions: t('questions.rewards', { returnObjects: true }) as FAQItem[]
  }
];
};

export default function Faq() {
  const { t } = useTranslation('faq');
  const [activeTab, setActiveTab] = useState("general");
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const faqData = useFaqData();

  const toggleAccordion = (questionIndex: string) => {
    setOpenAccordion(openAccordion === questionIndex ? null : questionIndex);
  };

  const currentCategory = faqData.find(category => category.id === activeTab);

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
                {t('title')}
              </h2>
              <p className="text-[16px] mx-auto text-white">
                {t('subtitle')}
              </p>
            </div>
            <div className="button-wrapper">
              <button
                className="h-[48px] font-medium font-ptSans flex items-center cursor-pointer ease-in-out justify-center gap-2.5 !font-semibold max-sm:!text-[14px] max-sm:!h-[40px] max-sm:w-full !border-none buttonRadialBGBlue bg-[radial-gradient(24.83%_154.95%_at_14.43%_72.32%,_#FF8800_0%,_#FF6600_100%)] rounded-[60px] bg-[#FF8800] hover:bg-none hover:border-[#FF8800] max-[479px]:!shadow-none button overflow-hidden px-[47px] max-lg:px-[35px] !bg-black hover:!bg-[#FF8800] hover:text-black relative z-10 text-[#FF8800] !bg-none !border-0 border-transparent shadow-none max-md:px-[30px] max-sm:px-[25px] min-w-[176px] max-lg:min-w-0 whitespace-nowrap max-md:h-[40px] max-md:text-[14px] transition-all duration-300"
                aria-label="button"
              >
                {t('button')}
              </button>
              <div className="button-bg bg-[linear-gradient(45.73deg,#FF8800_12.78%,#FF6600_50.23%)] !z-[2]"></div>
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
                className="inline-flex h-auto items-center justify-center gap-[0] flex-col max-sm:flex-row max-w-[308px] max-md:max-w-[220px] max-sm:max-w-none w-full bg-[#2a1f1a33] border border-[#443828] rounded-[10px] overflow-hidden max-sm:overflow-x-auto max-sm:justify-start backdrop-blur-[90px] max-sm:whitespace-nowrap faqTabsList max-sm:!flex-col"
                data-aos="fade-right"
                data-aos-duration="800"
                data-orientation="horizontal"
                style={{ outline: "none" }}
              >
                {faqData.map((category) => (
                  <button
                    key={category.id}
                    type="button"
                    role="tab"
                    aria-selected={activeTab === category.id}
                    data-state={activeTab === category.id ? "active" : "inactive"}
                    onClick={() => setActiveTab(category.id)}
                    className={`w-full inline-flex items-center justify-start min-h-[67px] max-lg:min-h-[40px] max-sm:min-w-[150px] relative z-[99] whitespace-nowrap px-[28px] max-lg:px-[20px] max-md:px-[14px] py-[22px] max-md:py-[10px] text-[16px] max-md:text-[14px] font-inter font-semibold text-white ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer ${
                      activeTab === category.id
                        ? "text-[#FF8800] shadow-[inset_0px_4px_19px_#FF8800]"
                        : "text-white"
                    }`}
                    data-orientation="horizontal"
                  >
                    {category.label}
                  </button>
                ))}
              </div>
              <div
                data-state="active"
                data-orientation="horizontal"
                role="tabpanel"
                className="w-full ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                style={{ animationDuration: "0s" }}
              >
                <div className="w-full flex flex-col gap-2">
                  {currentCategory?.questions.map((item, index) => {
                    const accordionId = `${activeTab}-${index}`;
                    const isOpen = openAccordion === accordionId;

                    return (
                      <div
                        key={index}
                        data-aos="fade-up"
                        data-aos-delay={index * 100}
                        data-orientation="vertical"
                      >
                        <div
                          data-state={isOpen ? "open" : "closed"}
                          data-orientation="vertical"
                          className="!bg-[#FFFFFF1A] w-full rounded-[12px] relative z-[999] max-md:rounded-[10px] [background-image:linear-gradient(180.79deg,rgba(58,45,36,0.3)_15.6%,rgba(237,134,15,0.2)_87.34%)] border border-[#443828] backdrop-blur-[90px] shadow-[0px_4px_10px_0px_#FF8800_inset] data-[state=open]:border-border duration-300 ease-out hover:data-[state=closed]:opacity-70 hover:data-[state=open]:opacity-90 max-[900px]:border max-[900px]:border-[#dd7730] max-[900px]:bg-[linear-gradient(191.79deg,_rgb(26_22_18)_15.6%,_rgb(42_31_26)_87.34%)] max-[900px]:shadow-[inset_0px_4px_20px_0px_#d67b26]"
                        >
                          <h3
                            data-orientation="vertical"
                            data-state={isOpen ? "open" : "closed"}
                            className="flex"
                          >
                            <button
                              type="button"
                              aria-expanded={isOpen}
                              data-state={isOpen ? "open" : "closed"}
                              data-orientation="vertical"
                              onClick={() => toggleAccordion(accordionId)}
                              className="flex !cursor-pointer accordionBtn text-left flex-1 sm:items-center justify-between text-[16px] max-md:text-[16px] font-semibold max-sm:text-sm !font-inter py-[28px] px-[35px] max-md:p-4 border-b border-b-transparent data-[state=open]:border-b-border transition-all [&[data-state=open]>svg]:rotate-180 [&[data-state=open]>svg]:text-[#FF8800]"
                            >
                              {item.question}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 17 17"
                                className={`h-4 w-4 max-md:size-3 my-auto transition-transform duration-300 ${
                                  isOpen ? "rotate-180 text-[#FF8800]" : ""
                                }`}
                              >
                                <path
                                  fill="currentColor"
                                  d="M6.446 16.625V.898h3.568v15.727zm-6.08-6.08V6.978h15.728v3.569z"
                                ></path>
                              </svg>
                            </button>
                          </h3>
                          {isOpen && (
                            <div
                              data-state="open"
                              role="region"
                              data-orientation="vertical"
                              className="px-[35px] pb-[28px] max-md:p-4 max-md:pt-0 text-[14px] text-gray-300 leading-relaxed"
                            >
                              {item.answer}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}