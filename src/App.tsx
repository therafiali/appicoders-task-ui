import HeroSection from "./components/views/HeroSection";
import PromoHero from "./components/views/PromoHero";
import ServicesSection from "./components/views/ServicesSection";
import CaseStudySections from "./components/views/CaseStudySections";
import WhyChooseUs from "./components/views/WhyChooseUs";
import TestimonialSection from "./components/views/TestimonialSection";
import TechnologiesSection from "./components/views/TechnologiesSection";
import ProductsSections from "./components/views/ProductsSections";
import AwardSections from "./components/views/AwardSections";
import ContactUs from "./components/views/ContactUs";

const App = () => {
  return (
    <>
      <HeroSection />
      <PromoHero />
      <ServicesSection />
      <CaseStudySections />
      <WhyChooseUs />
      <TestimonialSection />
      <TechnologiesSection />
      <ProductsSections />
      <AwardSections />
      <ContactUs />
    </>
  );
};

export default App;
