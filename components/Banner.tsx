
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
    source: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e',
    tagline: "We Don't Just Build Websites. We Build Empires.",
    subTagline: 'Immersive design, flawless code, and a user experience that turns visitors into obsessed fans.',
  },
  {
    type: 'image',
    source: 'https://images.unsplash.com/photo-1639322537228-f710d846310a',
    tagline: 'Invisibility is Not an Option.',
    subTagline: 'Climb the rankings and claim your throne. We turn search engines into your most powerful growth engine.',
  },
  {
    type: 'image',
    source: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853',
    tagline: 'Stop the Scroll. Start the Conversation.',
    subTagline: "From viral visuals to strategic storytelling, we amplify your brand's voice in a noisy digital world.",
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
  
  const generateSrcSet = (baseUrl: string) => {
    const widths = [640, 768, 1024, 1280, 1536, 1920];
    return widths.map(w => `${baseUrl}?q=80&w=${w}&auto=format&fit=crop ${w}w`).join(', ');
  };

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
            <img 
                src={`${slide.source}?q=80&w=1280&auto=format&fit=crop`}
                srcSet={generateSrcSet(slide.source)}
                sizes="100vw"
                loading={index === 0 ? 'eager' : 'lazy'}
                // FIX: Changed `fetchpriority` to `fetchPriority` to align with React's property naming for the `fetchpriority` HTML attribute.
                fetchPriority={index === 0 ? 'high' : 'auto'}
                decoding="async"
                alt="Banner Background" 
                className="w-full h-full object-cover" 
            />
          )}
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <div className="container mx-auto px-6">
              <h1
                className={`text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4 transition-all duration-700 ease-out ${
                  index === currentIndex ? 'opacity-100 translate-y-0 delay-200' : 'opacity-0 translate-y-10'
                }`}
                style={{textShadow: '2px 2px 8px rgba(0,0,0,0.7)'}}
              >
                {slide.tagline}
              </h1>
              <p
                className={`text-lg md:text-2xl text-brand-light max-w-3xl mx-auto mb-8 transition-all duration-700 ease-out ${
                  index === currentIndex ? 'opacity-100 translate-y-0 delay-400' : 'opacity-0 translate-y-10'
                }`}
                style={{textShadow: '1px 1px 4px rgba(0,0,0,0.7)'}}
              >
                {slide.subTagline}
              </p>
              <div
                className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 ease-out ${
                  index === currentIndex ? 'opacity-100 translate-y-0 delay-600' : 'opacity-0 translate-y-10'
                }`}
              >
                 <button onClick={openModal} className="bg-gradient-to-r from-brand-accent-start via-brand-accent-middle to-brand-accent-end text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg w-full sm:w-auto transform transition-all duration-300 hover:scale-105 hover:opacity-90 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-primary focus-visible:ring-brand-accent-end">
                    Get a Quote
                  </button>
                  <Link to="/services/website-packages" className="bg-brand-secondary/80 border-2 border-brand-accent-end text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-brand-secondary transition-all duration-300 transform hover:scale-105 shadow-lg w-full sm:w-auto focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-primary focus-visible:ring-brand-accent-end">
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
