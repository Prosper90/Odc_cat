import SectionDivider from "../common/SectionDivider";
import { useTranslation } from "react-i18next";

export default function HowItWorks() {
  const { t } = useTranslation('howItWorks');
  return (
    <>
      <SectionDivider variant="gradient" />
      <div
        className="py-[70px] max-[1200px]:py-[60px] max-[900px]:py-10 relative bg-cover bg-center bg-gradient-to-b from-[rgba(255,136,0,0.02)] to-transparent"
        id="how_it_works"
      >
      <div className="container z-20 relative">
        <div className="text-center max-w-[844px] mx-auto mb-10 flex flex-col max-sm:mb-5">
          <h2 className="text-[40px] max-lg:text-3xl max-md:text-2xl font-bold text-white mb-[10px] leading-[1.5]">
            {t('title')} <br />
            {t('subtitle')}
          </h2>
          <p className="max-w-[742px] mx-auto text-white text-base max-md:text-sm">
            {t('description')}
          </p>
        </div>

        {/* Desktop Image */}
        <figure className="w-full h-auto max-sm:hidden">
          <img
            alt="How It Works Flow"
            loading="lazy"
            width="1196"
            height="950"
            decoding="async"
            className="w-full h-auto object-cover"
            src="/howItWorksFlowImg.png"
          />
        </figure>

        {/* Mobile Image */}
        <figure className="w-full h-auto max-sm:block hidden max-sm:max-w-[300px] max-sm:mx-auto">
          <img
            alt="How It Works Mobile Flow"
            loading="lazy"
            width="375"
            height="1278"
            decoding="async"
            className="w-full h-auto object-cover"
            src="/howItWorksFlowImg.png"
          />
        </figure>
      </div>
    </div>
    </>
  );
}
