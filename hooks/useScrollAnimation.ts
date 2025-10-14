import { useEffect, useRef } from 'react';

type AnimationType = 'slide-in-up' | 'slide-in-left' | 'slide-in-right' | 'fade-in';

export const useScrollAnimation = (animationType: AnimationType) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          entry.target.classList.add(animationType);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      currentRef.classList.add('animate-on-scroll');
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [animationType]);

  return ref;
};
