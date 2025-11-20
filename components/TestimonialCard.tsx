
import React, { useState, useEffect, useCallback } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { testimonials as testimonialData } from '../data/servicesData';

interface TestimonialCardProps {
    testimonial: typeof testimonialData[0];
    onNext: () => void;
    onPrev: () => void;
    isActive?: boolean;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, onNext, onPrev, isActive = false }) => {
  return (
    <div className={`bg-brand-secondary p-8 rounded-xl shadow-lg h-full flex flex-col justify-between border transition-all duration-500 ${isActive ? 'border-brand-accent-middle/40 shadow-brand-accent-middle/10 scale-100' : 'border-brand-secondary shadow-none scale-95'}`}>
      <div className="flex-grow">
        <h3 className="font-bold text-white text-lg mb-4 line-clamp-2">{testimonial.heading}</h3>
        <p className="text-brand-muted italic leading-relaxed">"{testimonial.review}"</p>
      </div>
      <div className="mt-6 pt-6 border-t border-brand-primary flex items-center justify-between">
         <div>
          <p className="font-bold text-white text-lg">{testimonial.name}</p>
          <p className="text-sm gradient-text font-semibold">{testimonial.title}</p>
        </div>
        <div className={`flex items-center gap-2 transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
            <button 
                onClick={(e) => { e.preventDefault(); onPrev(); }} 
                aria-label="Previous testimonial"
                className="p-2.5 rounded-lg bg-brand-primary border border-gray-700 hover:border-brand-accent-start text-brand-muted hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-brand-accent-start/10 group"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button 
                onClick={(e) => { e.preventDefault(); onNext(); }} 
                aria-label="Next testimonial"
                className="p-2.5 rounded-lg bg-brand-primary border border-gray-700 hover:border-brand-accent-start text-brand-muted hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-brand-accent-start/10 group"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
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
    const totalTestimonials = testimonialData.length;

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

    useEffect(() => {
        const interval = setInterval(next, 6000); 
        return () => clearInterval(interval);
    }, [next]);

    return (
        <section ref={sectionRef} className="py-20 bg-brand-primary animate-on-scroll overflow-hidden">
            <div className="container mx-auto px-6">
                <div ref={headerRef} className="text-center mb-16 animate-on-scroll">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white">Trusted by Businesses Worldwide</h2>
                    <p className="mt-4 text-lg text-brand-muted">Real stories from businesses we've helped succeed.</p>
                </div>
                
                <div className="relative h-[400px] md:h-[360px]">
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
                        
                        if (isMobileOrTablet) {
                            // Mobile/Tablet: Show only center card
                            if (isCenter) {
                                opacity = 1;
                                transform = 'translateX(-50%) scale(1)';
                                zIndex = 20;
                                pointerEvents = 'auto';
                                filter = 'blur(0px) brightness(100%)';
                            } else {
                                // Hide others (stacked behind with 0 opacity for smooth fade)
                                opacity = 0;
                                transform = 'translateX(-50%) scale(0.9)';
                                zIndex = 10;
                                filter = 'blur(4px) brightness(80%)';
                            }
                        } else {
                           // Desktop: Show center + 2 side previews with visual depth
                           if (isCenter) {
                                opacity = 1;
                                transform = 'translateX(-50%) scale(1)';
                                zIndex = 20;
                                pointerEvents = 'auto';
                                filter = 'blur(0px) brightness(100%)';
                            } else if (isRight) {
                                opacity = 0.5;
                                transform = 'translateX(calc(-50% + 35vw)) scale(0.85)';
                                zIndex = 10;
                                pointerEvents = 'none';
                                filter = 'blur(2px) brightness(70%)';
                            } else if (isLeft) {
                                opacity = 0.5;
                                transform = 'translateX(calc(-50% - 35vw)) scale(0.85)';
                                zIndex = 10;
                                pointerEvents = 'none';
                                filter = 'blur(2px) brightness(70%)';
                            } else {
                                // Hide others
                                opacity = 0;
                                transform = 'translateX(-50%) scale(0.5)';
                                zIndex = 0;
                                filter = 'blur(10px) brightness(50%)';
                            }
                        }

                        return (
                            <div 
                                key={index} 
                                className="absolute w-[90%] md:w-4/5 lg:w-2/5 top-0 left-1/2 transition-all duration-700 cubic-bezier(0.4, 0, 0.2, 1) origin-center"
                                style={{ opacity, transform, zIndex, pointerEvents, filter }}
                            >
                                <TestimonialCard 
                                    testimonial={testimonial} 
                                    onNext={next} 
                                    onPrev={prev} 
                                    isActive={isCenter}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}

export default TestimonialsSection;
