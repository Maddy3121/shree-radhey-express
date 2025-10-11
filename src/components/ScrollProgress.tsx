import { useEffect, useState, Suspense } from 'react';
import { Truck } from 'lucide-react';
import Truck3D from './Truck3D';

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

      {/* 3D Truck Progress Indicator - Bottom Right (Partially Visible) */}
      {scrollProgress > 10 && (
        <button
          onClick={handleScrollToTop}
          className={`fixed bottom-0 right-8 z-50 group transition-all duration-500 ${
            isAnimating ? 'animate-[slideUp_1s_ease-in-out]' : ''
          }`}
          aria-label="Scroll to top"
          style={{
            transform: `translateY(${100 - scrollProgress}%)`,
          }}
        >
          {/* 3D Truck Container - Partially off screen */}
          <div className="relative w-32 h-32 overflow-visible">
            {/* 3D Canvas for Truck */}
            <div className="absolute inset-0 transform hover:scale-110 transition-transform duration-300">
              <Suspense fallback={
                <div className="w-full h-full flex items-center justify-center">
                  <Truck className="w-16 h-16 text-logistics-orange animate-pulse" />
                </div>
              }>
                <Truck3D scrollProgress={scrollProgress} isAnimating={isAnimating} />
              </Suspense>
            </div>
            
            {/* Progress Badge */}
            <div className="absolute -top-2 -right-2 bg-gradient-accent text-white text-sm font-bold px-3 py-1.5 rounded-full shadow-2xl border-2 border-white z-10 animate-pulse">
              {Math.round(scrollProgress)}%
            </div>

            {/* Speed Lines Animation */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              <div className="flex flex-col gap-2">
                <div className="w-12 h-1 bg-logistics-orange/60 rounded animate-[slideRight_0.4s_ease-out_infinite]"></div>
                <div className="w-10 h-1 bg-logistics-orange/40 rounded animate-[slideRight_0.4s_ease-out_0.1s_infinite]"></div>
                <div className="w-8 h-1 bg-logistics-orange/20 rounded animate-[slideRight_0.4s_ease-out_0.2s_infinite]"></div>
              </div>
            </div>

            {/* Hover Tooltip */}
            <div className="absolute bottom-full right-0 mb-4 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
              <div className="bg-foreground text-background px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap shadow-2xl">
                🚀 Back to Top
                <div className="absolute top-full right-8 -mt-1">
                  <div className="border-8 border-transparent border-t-foreground"></div>
                </div>
              </div>
            </div>

            {/* Glow Effect */}
            <div className="absolute inset-0 bg-logistics-orange/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
          </div>
        </button>
      )}
    </>
  );
};

export default ScrollProgress;
