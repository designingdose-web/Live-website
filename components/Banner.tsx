import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

interface Slide {
  type: 'image' | 'video';
  source: string;
  tagline: string;
  subTagline: string;
}

const slides: Slide[] = [
   {
    type: 'image',
    source: 'https://images.unsplash.com/photo-1534665482403-a909d0d97c67?q=80&w=2070&auto=format&fit=crop',
    tagline: 'Your Vision, Amplified.',
    subTagline: 'We build bespoke websites that captivate your audience and convert clicks into customers.',
  },
  {
    type: 'image',
    source: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop',
    tagline: 'Fuel Your Growth Engine.',
    subTagline: 'Drive traffic, generate leads, and dominate your market with our data-driven SEO and marketing strategies.',
  },
  {
    type: 'image',
    source: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop',
    tagline: 'Strategic Solutions, Tangible Results.',
    subTagline: 'We align with your goals to deliver custom digital strategies that drive growth and maximize your ROI.',
  },
];

const ArrowButton: React.FC<{ direction: 'left' | 'right'; onClick: () => void }> = ({ direction, onClick }) => (
  <button
    onClick={onClick}
    className={`absolute top-1/2 -translate-y-1/2 z-20 p-3 bg-white/20 hover:bg-white/40 rounded-full transition-colors duration-300 ${direction === 'left' ? 'left-5' : 'right-5'}`}
    aria-label={direction === 'left' ? 'Previous Slide' : 'Next Slide'}
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      {direction === 'left' ? <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /> : <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />}
    </svg>
  </button>
);

const Banner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 7000);
    return () => clearInterval(slideInterval);
  }, [nextSlide]);
  
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  }

  const openModal = () => {
    window.dispatchEvent(new CustomEvent('open-lead-modal'));
  }
  
  return (
    <div className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden bg-brand-primary">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
          }`}
        >
          {slide.type === 'video' ? (
             <video src={slide.source} autoPlay loop muted playsInline className="w-full h-full object-cover" />
          ) : (
            <img src={slide.source} alt="Banner Background" className="w-full h-full object-cover" />
          )}
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <div className={`container mx-auto px-6 transition-all duration-1000 ease-out ${index === currentIndex ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4 animate-fade-in-up" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.7)'}}>
                {slide.tagline}
              </h1>
              <p className="text-lg md:text-2xl text-brand-light max-w-3xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: '0.3s', textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>
                {slide.subTagline}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                 <button onClick={openModal} className="bg-gradient-to-r from-brand-accent-start via-brand-accent-middle to-brand-accent-end text-white font-bold py-3 px-8 rounded-full text-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg w-full sm:w-auto">
                    Get a Quote
                  </button>
                  <Link to="/services/website-packages" className="bg-brand-secondary/80 border-2 border-brand-accent-end text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-brand-secondary transition-all duration-300 transform hover:scale-105 shadow-lg w-full sm:w-auto">
                    Explore Packages
                  </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <ArrowButton direction="left" onClick={prevSlide} />
      <ArrowButton direction="right" onClick={nextSlide} />

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-brand-accent-middle scale-125' : 'bg-white/50 hover:bg-white'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Banner;