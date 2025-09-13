import { Button } from "@/components/ui/button";

const Navigation = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border animate-[slide-in-right_0.8s_ease-out]">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">SR</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Shri Radhey Logistics</h1>
              <p className="text-sm text-muted-foreground">Pvt Ltd</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-all duration-300 hover-scale story-link"
            >
              About Us
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-primary transition-all duration-300 hover-scale story-link"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('structure')}
              className="text-foreground hover:text-primary transition-all duration-300 hover-scale story-link"
            >
              Company
            </button>
            <button 
              onClick={() => scrollToSection('ventures')}
              className="text-foreground hover:text-primary transition-all duration-300 hover-scale story-link"
            >
              Ventures
            </button>
            <Button variant="corporate" onClick={() => scrollToSection('contact')} className="hover-scale">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;