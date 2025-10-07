import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import IndustriesServed from "@/components/IndustriesServed";
import CoreOfferings from "@/components/CoreOfferings";
import CompanyStructure from "@/components/CompanyStructure";
import StrategicVentures from "@/components/StrategicVentures";
import Vision from "@/components/Vision";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import ScrollAnimatedSection from "@/components/ScrollAnimatedSection";
import ScrollProgress from "@/components/ScrollProgress";

const Index = () => {
  return (
    <div className="min-h-screen pt-20">
      <ScrollProgress />
      <ThemeSwitcher />
      <Navigation />
      <Hero />
      <ScrollAnimatedSection animation="fade-up">
        <About />
      </ScrollAnimatedSection>
      <ScrollAnimatedSection animation="slide-up">
        <Services />
      </ScrollAnimatedSection>
      <ScrollAnimatedSection animation="fade-left">
        <IndustriesServed />
      </ScrollAnimatedSection>
      <ScrollAnimatedSection animation="fade-right">
        <CoreOfferings />
      </ScrollAnimatedSection>
      <ScrollAnimatedSection animation="fade-left">
        <CompanyStructure />
      </ScrollAnimatedSection>
      <ScrollAnimatedSection animation="fade-right">
        <StrategicVentures />
      </ScrollAnimatedSection>
      <ScrollAnimatedSection animation="scale-up">
        <Vision />
      </ScrollAnimatedSection>
      <ScrollAnimatedSection animation="fade-up">
        <Contact />
      </ScrollAnimatedSection>
      <Footer />
    </div>
  );
};

export default Index;
