import AnimatedBackground from "./components/AnimatedBackground.jsx";
import MainDecor from "./components/MainDecor.jsx";
import SectionDivider from "./components/SectionDivider.jsx";
import FloatingCta from "./components/FloatingCta.jsx";
import TrustBadges from "./components/TrustBadges.jsx";
import Hero from "./sections/Hero.jsx";
import LiveStatus from "./sections/LiveStatus.jsx";
import Features from "./sections/Features.jsx";
import DataDriven from "./sections/DataDriven.jsx";
import Process from "./sections/Process.jsx";
import ProfitCalculator from "./sections/ProfitCalculator.jsx";
import Metrics from "./sections/Metrics.jsx";
import SocialProof from "./sections/SocialProof.jsx";
import Comparison from "./sections/Comparison.jsx";
import SuccessStories from "./sections/SuccessStories.jsx";
import Pricing from "./sections/Pricing.jsx";
import Faq from "./sections/Faq.jsx";
import Cta from "./sections/Cta.jsx";
import Footer from "./sections/Footer.jsx";

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#030712] font-inter text-white">
      <AnimatedBackground />
      <Hero />
      <LiveStatus />
      <TrustBadges />

      <main className="relative z-10">
        <MainDecor />
        <Features />
        <DataDriven />
        <SectionDivider />
        <Process />
        <ProfitCalculator />
        <Metrics />
        <SocialProof />
        <SectionDivider />
        <Comparison />
        <SuccessStories />
        <SectionDivider />
        <Pricing />
        <Faq />
        <Cta />
      </main>
      <Footer />
      <FloatingCta />
    </div>
  );
}
