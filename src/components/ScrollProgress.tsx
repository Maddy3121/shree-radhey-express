import { useEffect, useState } from 'react';
import { Truck } from 'lucide-react';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToTop = () => {
    setIsAnimating(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Reset animation after scroll completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
  };

  return (
    <>
      {/* Progress Bar at Top with Truck */}
      <div className="fixed top-0 left-0 right-0 h-1.5 bg-muted/30 z-[100] shadow-sm">
        <div 
          className="h-full bg-gradient-accent transition-all duration-150 ease-out relative"
          style={{ width: `${scrollProgress}%` }}
        >
          {/* Animated Truck on Progress Bar */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2">
            <div className={`bg-logistics-orange text-white p-2 rounded-full shadow-lg ${scrollProgress > 5 ? 'animate-bounce' : ''}`}>
              <Truck className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>

      {/* Truck Progress Indicator - Bottom Right */}
      {scrollProgress > 10 && (
        <button
          onClick={handleScrollToTop}
          className={`fixed bottom-8 right-8 z-50 group transition-all duration-300 ${
            isAnimating ? 'animate-[slideUp_1s_ease-in-out]' : ''
          }`}
          aria-label="Scroll to top"
        >
          {/* Truck Container with Animation */}
          <div className="relative">
            {/* Road/Track Background */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-muted rounded-full"></div>
            
            {/* Main Truck Button */}
            <div className="relative bg-gradient-accent p-4 rounded-2xl shadow-2xl hover:shadow-logistics-orange/50 transition-all duration-300 hover:scale-110 group-hover:-translate-y-2">
              {/* Speed Lines Animation */}
              <div className="absolute -left-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="flex gap-1">
                  <div className="w-6 h-0.5 bg-logistics-orange/60 rounded animate-[slideRight_0.6s_ease-out_infinite]"></div>
                  <div className="w-4 h-0.5 bg-logistics-orange/40 rounded animate-[slideRight_0.6s_ease-out_0.1s_infinite]"></div>
                  <div className="w-3 h-0.5 bg-logistics-orange/20 rounded animate-[slideRight_0.6s_ease-out_0.2s_infinite]"></div>
                </div>
              </div>
              
              {/* Truck Icon */}
              <Truck className={`w-8 h-8 text-white ${isAnimating ? 'animate-bounce' : 'group-hover:animate-pulse'}`} />
              
              {/* Progress Percentage Badge */}
              <div className="absolute -top-3 -right-3 bg-corporate-blue text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg border-2 border-white">
                {Math.round(scrollProgress)}%
              </div>
            </div>

            {/* Hover Tooltip */}
            <div className="absolute bottom-full right-0 mb-3 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
              <div className="bg-foreground text-background px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap shadow-xl">
                Back to Top 🚀
                <div className="absolute top-full right-4 -mt-1">
                  <div className="border-4 border-transparent border-t-foreground"></div>
                </div>
              </div>
            </div>

            {/* Wheel Animation Dots */}
            <div className="absolute -bottom-1 left-3 w-1.5 h-1.5 bg-foreground rounded-full group-hover:animate-spin"></div>
            <div className="absolute -bottom-1 right-3 w-1.5 h-1.5 bg-foreground rounded-full group-hover:animate-spin"></div>
          </div>
        </button>
      )}
    </>
  );
};

export default ScrollProgress;
