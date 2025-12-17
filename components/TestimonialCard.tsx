
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { testimonials as testimonialData } from '../data/servicesData';

interface TestimonialCardProps {
    testimonial: typeof testimonialData[0];
    onNext: () => void;
    onPrev: () => void;
    isActive?: boolean;
    isPaused: boolean;
    onTogglePause: () => void;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, onNext, onPrev, isActive = false, isPaused, onTogglePause }) => {
  return (
    <div className={`
        relative overflow-hidden w-full h-full
        glass-panel
        bg-brand-secondary/40
        p-6 md:p-10 rounded-2xl 
        flex flex-col justify-between
        transition-all duration-500
        group
        ${isActive 
            ? 'border-brand-accent-middle/40 shadow-[0_8px_32px_0_rgba(236,72,153,0.2)] scale-100 z-20 opacity-100' 
            : 'border-white/5 shadow-none scale-95 opacity-40 blur-[1px] z-10'
        }
    `}>
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-brand-accent-start/10 rounded-full blur-[50px] -mr-10 -mt-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-brand-accent-end/10 rounded-full blur-[50px] -ml-10 -mb-10 pointer-events-none"></div>
      
      {/* Quote Icon - Smaller on mobile */}
      <div className="absolute top-4 right-4 md:top-6 md:right-6 text-brand-accent-start/10 pointer-events-none">
         <svg className="w-12 h-12 md:w-[60px] md:h-[60px]" viewBox="0 0 24 24" fill="currentColor">
             <path d="M14.017 21L14.017 18C14.017 16.0547 15.1953 14.5078 17.6562 14.5078C18.3242 14.5078 18.7227 14.7188 19.3438 14.9648C18.4297 12.832 18.4297 11.7539 18.4297 10.6641C18.4297 8.58984 20.0117 7.00781 22.0508 7.00781C23.6133 7.00781 24.5742 8.16797 24.5742 9.57422C24.5742 12.5977 22.1211 19.418 18.0664 20.6836L14.017 21ZM5.01562 21L5.01562 18C5.01562 16.0547 6.19531 14.5078 8.65625 14.5078C9.32422 14.5078 9.72266 14.7188 10.3438 14.9648C9.42969 12.832 9.42969 11.7539 9.42969 10.6641C9.42969 8.58984 11.0117 7.00781 13.0508 7.00781C14.6133 7.00781 15.5742 8.16797 15.5742 9.57422C15.5742 12.5977 13.1211 19.418 9.06641 20.6836L5.01562 21Z" />
         </svg>
      </div>

      <div className="flex-grow relative z-10 flex flex-col">
         {/* Trustpilot Stars */}
         <div className="flex items-center gap-1 mb-3 md:mb-4">
            {[1,2,3,4,5].map(i => (
                <svg key={i} className="w-4 h-4 md:w-5 md:h-5 text-[#00b67a] fill-current drop-shadow-sm" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
            ))}
         </div>

         {/* Added shadow to text for accessibility */}
         <h3 className="font-bold text-white text-lg md:text-2xl mb-3 md:mb-4 line-clamp-2 pr-8 leading-tight drop-shadow-md">{testimonial.heading}</h3>
         
         <div className="overflow-y-auto max-h-[240px] md:max-h-[240px] pr-2 scrollbar-thin scrollbar-thumb-brand-muted/30 scrollbar-track-transparent overscroll-contain">
             <p className="text-brand-light/90 italic leading-relaxed text-base md:text-lg font-light drop-shadow-sm">"{testimonial.review}"</p>
         </div>
      </div>
      
      <div className="mt-6 md:mt-8 pt-6 border-t border-white/10 flex items-center justify-between relative z-10">
         <div className="flex items-center gap-3 md:gap-4">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-brand-accent-start to-brand-accent-end flex items-center justify-center text-white font-bold text-lg md:text-xl shadow-lg ring-2 ring-white/10 shrink-0">
                {testimonial.name.charAt(0)}
            </div>
            <div className="min-w-0">
                <p className="font-bold text-white text-sm md:text-lg leading-tight truncate drop-shadow-sm">{testimonial.name}</p>
                <p className="text-xs md:text-sm text-brand-muted font-medium mt-0.5 truncate">{testimonial.title}</p>
            </div>
        </div>
        
        {/* Navigation Buttons */}
        <div className={`flex items-center gap-2 md:gap-3 transition-opacity duration-300 ${isActive ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
            <button 
                onClick={(e) => { e.preventDefault(); onPrev(); }} 
                aria-label="Previous testimonial"
                className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-brand-primary/50 border border-white/10 hover:border-brand-accent-start hover:bg-brand-accent-start/10 text-brand-muted hover:text-white transition-all duration-300 flex items-center justify-center active:scale-95 touch-manipulation backdrop-blur-sm"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
            </button>

            {/* Pause/Play Button - Placed in the middle */}
            <button
                onClick={(e) => { e.preventDefault(); onTogglePause(); }}
                aria-label={isPaused ? "Resume rotation" : "Pause rotation"}
                className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-brand-primary/50 border border-white/10 hover:border-brand-accent-middle hover:bg-brand-accent-middle/10 text-brand-muted hover:text-white transition-all duration-300 flex items-center justify-center active:scale-95 touch-manipulation backdrop-blur-sm"
            >
                {isPaused ? (
                    <svg className="h-4 w-4 md:h-5 md:w-5 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                ) : (
                    <svg className="h-4 w-4 md:h-5 md:w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
                )}
            </button>

            <button 
                onClick={(e) => { e.preventDefault(); onNext(); }} 
                aria-label="Next testimonial"
                className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-brand-primary/50 border border-white/10 hover:border-brand-accent-start hover:bg-brand-accent-start/10 text-brand-muted hover:text-white transition-all duration-300 flex items-center justify-center active:scale-95 touch-manipulation backdrop-blur-sm"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
            </button>
        </div>
      </div>
    </div>
  );
};


const TestimonialsSection: React.FC = () => {
    const sectionRef = useScrollAnimation('fade-in');
    const headerRef = useScrollAnimation('slide-in-up');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobileOrTablet, setIsMobileOrTablet] = useState(true);
    const [isPaused, setIsPaused] = useState(false);
    const totalTestimonials = testimonialData.length;
    
    // Swipe state
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    useEffect(() => {
        setIsMobileOrTablet(window.innerWidth < 1024);
        const handleResize = () => {
            setIsMobileOrTablet(window.innerWidth < 1024);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const next = useCallback(() => {
        setCurrentIndex(prev => (prev + 1) % totalTestimonials);
    }, [totalTestimonials]);

    const prev = useCallback(() => {
      setCurrentIndex(prev => (prev - 1 + totalTestimonials) % totalTestimonials);
    }, [totalTestimonials]);

    const togglePause = useCallback(() => {
        setIsPaused(prev => !prev);
    }, []);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'ArrowRight') {
                next();
            } else if (event.key === 'ArrowLeft') {
                prev();
            } else if (event.key === ' ' || event.code === 'Space') {
                event.preventDefault(); 
                togglePause();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [next, prev, togglePause]);

    useEffect(() => {
        if (isPaused) return;
        
        const interval = setInterval(next, 5000); 
        return () => clearInterval(interval);
    }, [next, isPaused, currentIndex]);

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.targetTouches[0].clientX;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        touchEndX.current = e.targetTouches[0].clientX;
    };

    const handleTouchEnd = () => {
        if (!touchStartX.current || !touchEndX.current) return;
        
        const diff = touchStartX.current - touchEndX.current;
        const threshold = 50;

        if (diff > threshold) {
            next(); // Swipe Left -> Next
        } else if (diff < -threshold) {
            prev(); // Swipe Right -> Prev
        }
        
        touchStartX.current = 0;
        touchEndX.current = 0;
    };

    return (
        <section ref={sectionRef} className="py-16 md:py-20 bg-brand-primary animate-on-scroll overflow-hidden relative z-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full max-h-[500px] bg-brand-accent-middle/5 blur-[100px] rounded-full pointer-events-none z-0"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div ref={headerRef} className="text-center mb-10 md:mb-16 animate-on-scroll">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white">Trusted by Businesses <span className="gradient-text">Worldwide</span></h2>
                    <p className="mt-3 md:mt-4 text-base md:text-lg text-brand-muted">Real stories from businesses we've helped succeed.</p>
                </div>
                
                <div 
                    className="relative h-[600px] md:h-[550px] w-full touch-pan-y"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    {testimonialData.map((testimonial, index) => {
                        const offset = (index - currentIndex + totalTestimonials) % totalTestimonials;
                        const isCenter = offset === 0;
                        const isRight = offset === 1;
                        const isLeft = offset === totalTestimonials - 1;

                        let opacity = 0;
                        let transform = 'translateX(-50%) scale(0.8)';
                        let zIndex = 0;
                        let pointerEvents: 'auto' | 'none' = 'none';
                        let filter = 'blur(0px) brightness(100%)';
                        let display = 'block';
                        
                        if (isMobileOrTablet) {
                            if (isCenter) {
                                opacity = 1;
                                transform = 'translateX(-50%) scale(1)';
                                zIndex = 20;
                                pointerEvents = 'auto';
                                filter = 'blur(0px) brightness(100%)';
                            } else {
                                opacity = 0;
                                transform = 'translateX(-50%) scale(0.9)';
                                zIndex = 10;
                                display = 'none'; 
                            }
                        } else {
                           if (isCenter) {
                                opacity = 1;
                                transform = 'translateX(-50%) scale(1)';
                                zIndex = 20;
                                pointerEvents = 'auto';
                                filter = 'blur(0px) brightness(100%)';
                            } else if (isRight) {
                                opacity = 0.4;
                                transform = 'translateX(calc(-50% + 35vw)) scale(0.85) rotateY(-10deg)';
                                zIndex = 10;
                                pointerEvents = 'none';
                                filter = 'blur(2px) brightness(70%)';
                            } else if (isLeft) {
                                opacity = 0.4;
                                transform = 'translateX(calc(-50% - 35vw)) scale(0.85) rotateY(10deg)';
                                zIndex = 10;
                                pointerEvents = 'none';
                                filter = 'blur(2px) brightness(70%)';
                            } else {
                                opacity = 0;
                                transform = 'translateX(-50%) scale(0.5)';
                                zIndex = 0;
                                display = 'none';
                            }
                        }

                        return (
                            <div 
                                key={index} 
                                className="absolute w-full max-w-[92%] md:w-[70%] lg:w-[50%] md:max-w-3xl top-0 left-1/2 transition-all duration-700 cubic-bezier(0.4, 0, 0.2, 1) origin-center h-full perspective-[1000px]"
                                style={{ opacity, transform, zIndex, pointerEvents, filter, display }}
                            >
                                <TestimonialCard 
                                    testimonial={testimonial} 
                                    onNext={next} 
                                    onPrev={prev} 
                                    isActive={isCenter}
                                    isPaused={isPaused}
                                    onTogglePause={togglePause}
                                />
                            </div>
                        );
                    })}
                </div>
                
                <div className="flex justify-center gap-2 mt-2 md:hidden">
                    {testimonialData.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-6 bg-brand-accent-middle' : 'w-1.5 bg-gray-700'}`}
                            aria-label={`Go to testimonial ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TestimonialsSection;
