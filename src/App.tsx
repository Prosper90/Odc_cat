import React from "react";
import { Web3Provider } from "./contexts/Web3Context";
import { SwapProvider } from "./contexts/SwapContext";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
// import SwapInterface from "./components/swap/SwapInterface";
import Hero from "./components/layers/Hero";
import Testimony from "./components/layers/Testimony";
import Buy from "./components/layers/Buy";
import AccessAI from "./components/layers/AccessAI";
import ProblemSolution from "./components/layers/ProblemSolution";
// import Growth from "./components/layers/Growth";
import HowItWorks from "./components/layers/HowItWorks";
import Advantages from "./components/layers/Advantages";
import Benefits from "./components/layers/Benefits";
import Whitepapers from "./components/layers/Whitepapers";
import Tokenomics from "./components/layers/Tokenomics";
import Phase from "./components/layers/Phase";
import Faq from "./components/layers/Faq";

const App: React.FC = () => {
  return (
    <Web3Provider>
      <SwapProvider>
        <Header />
        <div className="min-h-screen bg-[#1a1612] flex flex-col md:px-20 px-2 overflow-x-hidden">
          <Hero />
          <Testimony />
          <Buy />
          <HowItWorks />
          <ProblemSolution />
          <AccessAI />
          <Advantages />
          <Benefits />
          <Whitepapers />
          <Tokenomics />
          <Phase />
          <Faq />
        </div>
        <Footer />
      </SwapProvider>
    </Web3Provider>
  );
};

export default App;
