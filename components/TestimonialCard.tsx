import React, { useState, useEffect, useCallback } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { testimonials as testimonialData } from '../data/servicesData';

const TestimonialCard: React.FC<{ testimonial: typeof testimonialData[0] }> = ({ testimonial }) => {
  return (
    <div className="bg-brand-secondary p-8 rounded-xl shadow-lg h-full flex flex-col justify-between border border-brand-secondary">
      <div className="flex-grow">
        <h3 className="font-bold text-white text-lg mb-2">{testimonial.heading}</h3>
        <p className="text-brand-muted italic">"{testimonial.review}"</p>
      </div>
      <div className="mt-6 flex items-center pt-6 border-t border-brand-primary">
         <div className="ml-4">
          <p className="font-bold text-white">{testimonial.name}</p>
          <p className="text-sm gradient-text font-semibold">{testimonial.title}</p>
        </div>
      </div>
    </div>
  );
};


const TestimonialsSection: React.FC = () => {
    const sectionRef = useScrollAnimation('fade-in');
    const headerRef = useScrollAnimation('slide-in-up');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobileOrTablet, setIsMobileOrTablet] = useState(window.innerWidth < 1024);
    const totalTestimonials = testimonialData.length;

    useEffect(() => {
        const handleResize = () => {
            setIsMobileOrTablet(window.innerWidth < 1024);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const next = useCallback(() => {
        setCurrentIndex(prev => (prev + 1) % totalTestimonials);
    }, [totalTestimonials]);

    const prev = () => {
      setCurrentIndex(prev => (prev - 1 + totalTestimonials) % totalTestimonials);
    }

    useEffect(() => {
        const interval = setInterval(next, 5000);
        return () => clearInterval(interval);
    }, [next]);

    return (
        <section ref={sectionRef} className="py-20 bg-brand-primary animate-on-scroll overflow-hidden">
            <div className="container mx-auto px-6">
                <div ref={headerRef} className="text-center mb-12 animate-on-scroll">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white">Trusted by Businesses Worldwide</h2>
                    <p className="mt-4 text-lg text-brand-muted">Real stories from businesses we've helped succeed.</p>
                </div>
                <div className="relative h-80 md:h-72">
                    {testimonialData.map((testimonial, index) => {
                        const offset = (index - currentIndex + totalTestimonials) % totalTestimonials;
                        const isCenter = offset === 0;
                        const isLeft = offset === totalTestimonials - 1;
                        const isRight = offset === 1;

                        let opacity = 0;
                        let transform = 'scale(1)';
                        let zIndex = 0;
                        
                        // On mobile and tablets, only show the center card.
                        if (isMobileOrTablet) {
                            if (isCenter) {
                                opacity = 1;
                                transform = 'translateX(-50%)';
                                zIndex = 20;
                            }
                        } else {
                           // On desktop, show three cards.
                           if (isCenter) {
                                opacity = 1;
                                transform = 'translateX(calc(-50% - 3%))'; // Shift entire carousel left
                                zIndex = 20;
                            } else if (isRight) {
                                opacity = 0.4;
                                // Position right card with less overlap
                                transform = 'translateX(calc(-50% - 3% + 450px))'; 
                                zIndex = 10;
                            } else if (isLeft) {
                                 opacity = 0.4;
                                 // Position left card with less overlap
                                transform = 'translateX(calc(-50% - 3% - 450px))';
                                zIndex = 10;
                            }
                        }

                        // Hide cards that are far away to prevent clutter
                        if (!isCenter && !isLeft && !isRight) {
                            opacity = 0;
                        }

                        return (
                            <div 
                                key={index} 
                                className="absolute w-[90%] md:w-4/5 lg:w-2/5 top-0 left-1/2 transition-all duration-500 ease-in-out"
                                style={{ opacity, transform, zIndex, pointerEvents: isCenter ? 'auto' : 'none' }}
                            >
                                <TestimonialCard testimonial={testimonial} />
                            </div>
                        );
                    })}
                </div>
                 <div className="flex justify-center mt-8 gap-4">
                    <button onClick={prev} aria-label="Previous testimonial" className="p-2 rounded-full bg-brand-secondary hover:bg-brand-accent-start transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                    </button>
                     <button onClick={next} aria-label="Next testimonial" className="p-2 rounded-full bg-brand-secondary hover:bg-brand-accent-start transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default TestimonialsSection;