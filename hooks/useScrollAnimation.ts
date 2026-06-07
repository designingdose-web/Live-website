import { useEffect, useRef } from 'react';

type AnimationType = 'slide-in-up' | 'slide-in-left' | 'slide-in-right' | 'fade-in';

export const useScrollAnimation = <T extends HTMLElement = HTMLDivElement>(animationType: AnimationType) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      currentRef.classList.add('is-visible');
      return;
    }

    // Only apply animation classes on desktop - mobile gets no opacity shift
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      currentRef.classList.add('is-visible');
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          entry.target.classList.add(animationType);
          observer.unobserve(entry.target);
        }
      },
      { root: null, rootMargin: '0px', threshold: 0.1 }
    );

    currentRef.classList.add('animate-on-scroll');
    observer.observe(currentRef);

    return () => { if (currentRef) observer.unobserve(currentRef); };
  }, [animationType]);

  return ref;
};