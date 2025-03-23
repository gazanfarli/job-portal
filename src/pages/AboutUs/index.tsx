import FAQ from "./components/FAQ";
import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";

const AboutUs = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-10">
      <HeroSection />
      <HowItWorks />
      <FAQ />
    </div>
  );
};

export default AboutUs;
