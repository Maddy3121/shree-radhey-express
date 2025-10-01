import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ReactNode } from 'react';

interface ScrollAnimatedSectionProps {
  children: ReactNode;
  animation?: 'fade-up' | 'fade-left' | 'fade-right' | 'scale-up' | 'slide-up';
  delay?: number;
  className?: string;
}

const ScrollAnimatedSection = ({ 
  children, 
  animation = 'fade-up', 
  delay = 0,
  className = '' 
}: ScrollAnimatedSectionProps) => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  const animationClasses = {
    'fade-up': 'translate-y-8 opacity-0',
    'fade-left': 'translate-x-8 opacity-0',
    'fade-right': '-translate-x-8 opacity-0',
    'scale-up': 'scale-95 opacity-0',
    'slide-up': 'translate-y-12 opacity-0'
  };

  const visibleClasses = {
    'fade-up': 'translate-y-0 opacity-100',
    'fade-left': 'translate-x-0 opacity-100',
    'fade-right': 'translate-x-0 opacity-100',
    'scale-up': 'scale-100 opacity-100',
    'slide-up': 'translate-y-0 opacity-100'
  };

  return (
    <div
      ref={ref}
      className={`
        transition-all duration-400 ease-out
        ${isVisible ? visibleClasses[animation] : animationClasses[animation]}
        ${className}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimatedSection;