import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import CompanyStructure from "@/components/CompanyStructure";
import StrategicVentures from "@/components/StrategicVentures";
import Vision from "@/components/Vision";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import ScrollAnimatedSection from "@/components/ScrollAnimatedSection";

const Index = () => {
  return (
    <div className="min-h-screen pt-20">
      <ThemeSwitcher />
      <Navigation />
      <Hero />
      <ScrollAnimatedSection animation="fade-up">
        <About />
      </ScrollAnimatedSection>
      <ScrollAnimatedSection animation="slide-up" delay={200}>
        <Services />
      </ScrollAnimatedSection>
      <ScrollAnimatedSection animation="fade-left" delay={100}>
        <CompanyStructure />
      </ScrollAnimatedSection>
      <ScrollAnimatedSection animation="fade-right" delay={150}>
        <StrategicVentures />
      </ScrollAnimatedSection>
      <ScrollAnimatedSection animation="scale-up" delay={100}>
        <Vision />
      </ScrollAnimatedSection>
      <ScrollAnimatedSection animation="fade-up" delay={200}>
        <Contact />
      </ScrollAnimatedSection>
      <Footer />
    </div>
  );
};

export default Index;
