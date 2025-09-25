

export default function HowItWorks() {
  return (
    <div
      className="py-[70px] max-[1200px]:py-[60px] max-[900px]:py-10 relative bg-cover bg-center"
      id="how_it_works"
    >
      <div className="container z-20 relative">
        <div className="text-center max-w-[844px] mx-auto mb-10 flex flex-col max-sm:mb-5">
          <h2 className="text-[40px] max-lg:text-3xl max-md:text-2xl font-bold text-white mb-[10px] leading-[1.5]">
            How It Works <br />
            AI-Powered Hedge Fund for Everyone
          </h2>
          <p className="max-w-[742px] mx-auto text-white text-base max-md:text-sm">
            Instead of spending hours managing trades, Cat automates the
            entire process. Every $CAT token you hold connects you to our AI
            managed funds - generating growth and rewards daily.
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
            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FhowItWorksFlowImg.610e073e.png&w=3840&q=75&dpl=dpl_EWAS8ZF1SPz1gvd3Hgrceu9TqG7t"
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
            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FnewMobileHowItWorksImg.bc8a3dcf.png&w=750&q=75&dpl=dpl_EWAS8ZF1SPz1gvd3Hgrceu9TqG7t"
          />
        </figure>
      </div>
    </div>
  );
}
