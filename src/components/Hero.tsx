import { Button } from "@/components/ui/button";
import heroImage from "@/assets/logistics-hero.jpg";
import AnimatedCounter from "@/components/AnimatedCounter";
import ParticleBackground from "@/components/ParticleBackground";
import TechGrid from "@/components/TechGrid";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      <TechGrid />
      
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-corporate-blue-dark/90 via-corporate-blue/85 to-black/90"></div>
        <div className="absolute inset-0 bg-gradient-radial opacity-60"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in">
            <span className="block animate-[slide-in-right_0.8s_ease-out] text-white drop-shadow-lg neon-text">Shri Radhey</span>
            <span className="block gradient-text animate-[slide-in-right_1s_ease-out] drop-shadow-2xl text-6xl md:text-8xl">Logistics</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/95 mb-8 max-w-3xl mx-auto leading-relaxed animate-[fade-in_1.2s_ease-out] drop-shadow-md">
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
              variant="hero" 
              size="lg"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-lg px-8 py-6"
            >
              Learn More
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-white/20 animate-[fade-in_1.6s_ease-out]">
            <div className="text-center hover-scale group relative glass-effect p-4 rounded-xl">
              <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-xl"></div>
              <AnimatedCounter 
                end={15} 
                suffix="+" 
                className="text-3xl md:text-4xl font-bold gradient-text mb-2"
              />
              <div className="text-white/90 text-sm md:text-base">Years Experience</div>
            </div>
            <div className="text-center hover-scale group relative glass-effect p-4 rounded-xl">
              <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-xl"></div>
              <AnimatedCounter 
                end={20} 
                suffix="+" 
                className="text-3xl md:text-4xl font-bold gradient-text mb-2"
              />
              <div className="text-white/90 text-sm md:text-base">Staff Members</div>
            </div>
            <div className="text-center hover-scale group relative glass-effect p-4 rounded-xl">
              <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-xl"></div>
              <AnimatedCounter 
                end={3} 
                className="text-3xl md:text-4xl font-bold gradient-text mb-2"
              />
              <div className="text-white/90 text-sm md:text-base">Branch Offices</div>
            </div>
            <div className="text-center hover-scale group relative glass-effect p-4 rounded-xl">
              <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-xl"></div>
              <AnimatedCounter 
                end={20} 
                suffix="L" 
                prefix="₹" 
                className="text-3xl md:text-4xl font-bold gradient-text mb-2"
              />
              <div className="text-white/90 text-sm md:text-base">Initial Capital</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;