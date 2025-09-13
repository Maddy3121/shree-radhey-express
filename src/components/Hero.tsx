import { Button } from "@/components/ui/button";
import heroImage from "@/assets/logistics-hero.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-corporate-blue/90 to-corporate-blue-light/80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight animate-fade-in">
            <span className="block animate-[slide-in-right_0.8s_ease-out]">Shri Radhey</span>
            <span className="block text-logistics-orange animate-[slide-in-right_1s_ease-out]">Logistics</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed animate-[fade-in_1.2s_ease-out]">
            With over 15 years of experience, we deliver efficient transportation and logistics solutions across India
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-[scale-in_1.4s_ease-out]">
            <Button 
              variant="accent" 
              size="lg"
              onClick={scrollToContact}
              className="text-lg px-8 py-6"
            >
              Get Quote Now
            </Button>
            <Button 
              variant="secondary" 
              size="lg"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-lg px-8 py-6 border-2 border-white/50 text-white bg-white/20 hover:bg-white/30 backdrop-blur-sm"
            >
              Learn More
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-primary-foreground/20 animate-[fade-in_1.6s_ease-out]">
            <div className="text-center hover-scale group">
              <div className="text-3xl md:text-4xl font-bold text-logistics-orange mb-2 group-hover:animate-pulse">15+</div>
              <div className="text-primary-foreground/80">Years Experience</div>
            </div>
            <div className="text-center hover-scale group">
              <div className="text-3xl md:text-4xl font-bold text-logistics-orange mb-2 group-hover:animate-pulse">20+</div>
              <div className="text-primary-foreground/80">Staff Members</div>
            </div>
            <div className="text-center hover-scale group">
              <div className="text-3xl md:text-4xl font-bold text-logistics-orange mb-2 group-hover:animate-pulse">3</div>
              <div className="text-primary-foreground/80">Branch Offices</div>
            </div>
            <div className="text-center hover-scale group">
              <div className="text-3xl md:text-4xl font-bold text-logistics-orange mb-2 group-hover:animate-pulse">₹20L</div>
              <div className="text-primary-foreground/80">Initial Capital</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;