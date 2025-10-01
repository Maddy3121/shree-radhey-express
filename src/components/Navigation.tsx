import { Button } from "@/components/ui/button";

const Navigation = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-primary backdrop-blur-md border-b border-white/10 animate-[slide-in-right_0.8s_ease-out] shadow-xl">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-diagonal rounded-lg flex items-center justify-center shadow-accent">
              <span className="text-white font-bold text-lg">SR</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Shri Radhey Logistics</h1>
              <p className="text-sm text-white/80">Pvt Ltd</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-white/90 hover:text-white transition-all duration-300 hover-scale font-medium"
            >
              About Us
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-white/90 hover:text-white transition-all duration-300 hover-scale font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('structure')}
              className="text-white/90 hover:text-white transition-all duration-300 hover-scale font-medium"
            >
              Company
            </button>
            <button 
              onClick={() => scrollToSection('ventures')}
              className="text-white/90 hover:text-white transition-all duration-300 hover-scale font-medium"
            >
              Ventures
            </button>
            <Button variant="secondary" onClick={() => scrollToSection('contact')} className="hover-scale bg-white/20 hover:bg-white/30 text-white border-white/30">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;