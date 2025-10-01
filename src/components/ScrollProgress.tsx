import { useEffect, useState } from 'react';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Progress Bar at Top */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-muted/20 z-[100]">
        <div 
          className="h-full bg-gradient-accent transition-all duration-150 ease-out shadow-accent"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Circular Progress Indicator */}
      <div className="fixed bottom-8 right-8 z-50 group">
        <div className="relative w-14 h-14">
          {/* Background Circle */}
          <svg className="w-14 h-14 transform -rotate-90">
            <circle
              cx="28"
              cy="28"
              r="24"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              className="text-muted/30"
            />
            {/* Progress Circle */}
            <circle
              cx="28"
              cy="28"
              r="24"
              stroke="url(#gradient)"
              strokeWidth="3"
              fill="none"
              strokeDasharray={`${2 * Math.PI * 24}`}
              strokeDashoffset={`${2 * Math.PI * 24 * (1 - scrollProgress / 100)}`}
              className="transition-all duration-150 ease-out"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--corporate-blue))" />
                <stop offset="100%" stopColor="hsl(var(--logistics-orange))" />
              </linearGradient>
            </defs>
          </svg>
          
          {/* Percentage Text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs font-bold text-foreground/80 group-hover:text-foreground transition-colors">
              {Math.round(scrollProgress)}%
            </span>
          </div>
        </div>
        
        {/* Scroll to Top Button (appears when scrolled) */}
        {scrollProgress > 10 && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-label="Scroll to top"
          >
            <svg 
              className="w-6 h-6 text-logistics-orange" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M5 10l7-7m0 0l7 7m-7-7v18" 
              />
            </svg>
          </button>
        )}
      </div>
    </>
  );
};

export default ScrollProgress;
