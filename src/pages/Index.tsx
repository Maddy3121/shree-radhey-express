import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import CompanyStructure from "@/components/CompanyStructure";
import StrategicVentures from "@/components/StrategicVentures";
import Vision from "@/components/Vision";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <CompanyStructure />
      <StrategicVentures />
      <Vision />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
