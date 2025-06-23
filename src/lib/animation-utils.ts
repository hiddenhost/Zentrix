
import { useEffect, useRef, useState } from 'react';

// Observer hook for reveal animations
export function useRevealAnimation() {
  useEffect(() => {
    const targets = document.querySelectorAll('.reveal, .reveal-up');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // Add active class when element is in viewport
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    });
    
    targets.forEach(target => observer.observe(target));
    
    return () => {
      targets.forEach(target => observer.unobserve(target));
    };
  }, []);
}

// Hook for element stagger animations
export function useStaggerAnimation(selector: string, delay = 100) {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    
    elements.forEach((el, index) => {
      const staggerDelay = index * delay;
      (el as HTMLElement).style.transitionDelay = `${staggerDelay}ms`;
    });
    
    return () => {
      elements.forEach((el) => {
        (el as HTMLElement).style.transitionDelay = '';
      });
    };
  }, [selector, delay]);
}

// Hook for parallax effect
export function useParallax(speed = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      
      const scrollY = window.scrollY;
      const offset = scrollY * speed;
      
      ref.current.style.transform = `translateY(${offset}px)`;
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed]);
  
  return ref;
}

// Hook for checking if element is in viewport
export function useIsInViewport(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    if (!ref.current) return;
    
    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, options);
    
    observer.observe(ref.current);
    
    return () => {
      observer.disconnect();
    };
  }, [options]);
  
  return { ref, isInView };
}

// Function to append animation delay class based on index
export function getStaggerDelay(index: number): string {
  const delays = ['delay-[100ms]', 'delay-[200ms]', 'delay-[300ms]', 'delay-[400ms]', 'delay-[500ms]', 'delay-[600ms]'];
  return delays[index % delays.length] || '';
}
