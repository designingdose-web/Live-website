import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';

interface Slide {
  type: 'image' | 'video';
  source: string;
  poster?: string;
  tagline: string;
  subTagline: string;
  duration?: number;
}

const slides: Slide[] = [
   {
    type: 'video',
    source: 'https://res.cloudinary.com/dmaqptknc/video/upload/q_auto:good,f_auto/v1765068211/banner_vid_1_m1dwlb.mp4',
    poster: 'https://res.cloudinary.com/dmaqptknc/video/upload/so_0,q_auto:eco,f_jpg/v1765068211/banner_vid_1_m1dwlb.jpg', 
    tagline: "We Don't Just Build Websites. We Build Empires.",
    subTagline: 'Immersive design, flawless code, and a user experience that turns visitors into obsessed fans.',
    duration: 8000,
  },
  {
    type: 'video',
    source: 'https://res.cloudinary.com/dmaqptknc/video/upload/q_auto:good,f_auto/v1765132642/banner_2_nrpm1o.mp4',
    poster: 'https://res.cloudinary.com/dmaqptknc/video/upload/so_0,q_auto:eco,f_jpg/v1765132642/banner_2_nrpm1o.jpg',
    tagline: 'Invisibility is Not an Option.',
    subTagline: 'Climb the rankings and claim your throne. We turn search engines into your most powerful growth engine.',
    duration: 6000,
  },
  {
    type: 'video',
    source: 'https://res.cloudinary.com/dmaqptknc/video/upload/q_auto:good,f_auto/v1765132642/3_gv10bs.mp4',
    poster: 'https://res.cloudinary.com/dmaqptknc/video/upload/so_0,q_auto:eco,f_jpg/v1765132642/3_gv10bs.jpg',
    tagline: 'Stop the Scroll. Start the Conversation.',
    subTagline: "From viral visuals to strategic storytelling, we amplify your brand's voice in a noisy digital world.",
    duration: 6000,
  },
];

const ArrowButton: React.FC<{ direction: 'left' | 'right'; onClick: () => void }> = ({ direction, onClick }) => (
  <button
    onClick={onClick}
    className={`absolute top-1/2 -translate-y-1/2 z-40 p-2 md:p-3 bg-white/10 hover:bg-white/30 backdrop-blur-sm rounded-full transition-all duration-300 border border-white/20 ${direction === 'left' ? 'left-2 md:left-5' : 'right-2 md:right-5'} group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent-end`}
    aria-label={direction === 'left' ? 'Previous Slide' : 'Next Slide'}
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 text-white group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      {direction === 'left' ? <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /> : <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />}
    </svg>
  </button>
);

const VideoSlide: React.FC<{ source: string; poster?: string; isPaused?: boolean; tagline: string; isActive: boolean }> = ({ source, poster, isPaused, tagline, isActive }) => {
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
        setShouldLoadVideo(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (videoRef.current && shouldLoadVideo) {
        if (isPaused || !isActive) {
            videoRef.current.pause();
        } else {
            videoRef.current.play().catch(() => {});
        }
    }
  }, [isPaused, isActive, shouldLoadVideo]);

  return (
    <div className="absolute inset-0 w-full h-full bg-brand-primary" aria-hidden="true">
      {poster && (
        <img
          src={poster}
          alt={`Designing Dose Background - ${tagline}`}
          width="1920"
          height="1080"
          className="absolute inset-0 w-full h-full object-cover z-0 transform scale-[1.02] aspect-video"
          loading="eager"
          fetchpriority="high"
        />
      )}
      
      {shouldLoadVideo && !videoError && (
        <video 
          ref={videoRef}
          src={source}
          loop 
          muted 
          playsInline
          autoPlay
          preload="metadata"
          onError={() => setVideoError(true)}
          className="absolute inset-0 w-full h-full object-cover z-10 transition-opacity duration-1000 transform scale-[1.02] aspect-video"
          aria-hidden="true"
          tabIndex={-1}
        />
      )}
    </div>
  );
};

const Banner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadOthers, setLoadOthers] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        nextSlide();
      } else if (event.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  useEffect(() => {
    if (isPaused) return;
    const slideDuration = slides[currentIndex].duration || 7000;
    const timer = setTimeout(() => {
      nextSlide();
    }, slideDuration);
    return () => clearTimeout(timer);
  }, [currentIndex, nextSlide, isPaused]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadOthers(true);
    }, 2000); 
    return () => clearTimeout(timer);
  }, []);
  
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  }

  const openModal = () => {
    window.dispatchEvent(new CustomEvent('open-lead-modal'));
  }
  
  const generateSrcSet = (baseUrl: string) => {
    const widths = [640, 768, 1024, 1280, 1536, 1920];
    return widths.map(w => `${baseUrl}?q=70&w=${w}&auto=format&fit=crop ${w}w`).join(', ');
  };

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = null; 
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50; 
    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const videoSchemas = slides
    .filter(slide => slide.type === 'video')
    .map(slide => ({
      "@context": "https://schema.org",
      "@type": "VideoObject",
      "name": slide.tagline,
      "description": slide.subTagline,
      "thumbnailUrl": slide.poster,
      "contentUrl": slide.source,
      "uploadDate": "2024-01-01T08:00:00+08:00",
      "duration": "PT10S", 
      "publisher": {
        "@type": "Organization",
        "name": "Designing Dose",
        "logo": {
          "@type": "ImageObject",
          "url": "https://designingdose.com/favicon.svg"
        }
      }
    }));

  return (
    <div 
        className="relative w-full h-[85vh] md:h-[95vh] min-h-[85vh] md:min-h-[95vh] overflow-hidden bg-brand-primary group border-b border-white/20 aspect-video md:aspect-auto" 
        aria-roledescription="carousel" 
        aria-label="Highlighted Services"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(videoSchemas)}} />

      <div className="sr-only" aria-live="polite" aria-atomic="true">
        Slide {currentIndex + 1} of {slides.length}: {slides[currentIndex].tagline}
      </div>

      {slides.map((slide, index) => {
        const shouldRenderMedia = index === 0 || loadOthers;
        const isLcpSlide = index === 0;
        const isActive = index === currentIndex;

        const h1Base = "text-3xl sm:text-4xl md:text-6xl font-extrabold text-white leading-tight mb-3 md:mb-4 drop-shadow-xl";
        const pBase = "text-base sm:text-lg md:text-2xl text-brand-light max-w-3xl mx-auto mb-6 md:mb-8 drop-shadow-lg font-medium";
        const btnBase = "flex flex-col sm:flex-row items-center justify-center gap-4";

        const h1Class = isLcpSlide 
            ? `${h1Base} opacity-100 translate-y-0` 
            : `${h1Base} transition-all duration-700 ease-out ${isActive ? 'opacity-100 translate-y-0 delay-200' : 'opacity-0 translate-y-10'}`;
            
        const pClass = isLcpSlide 
            ? `${pBase} opacity-100 translate-y-0` 
            : `${pBase} transition-all duration-700 ease-out ${isActive ? 'opacity-100 translate-y-0 delay-400' : 'opacity-0 translate-y-10'}`;
            
        const btnClass = isLcpSlide 
            ? `${btnBase} opacity-100 translate-y-0` 
            : `${btnBase} transition-all duration-700 ease-out ${isActive ? 'opacity-100 translate-y-0 delay-600' : 'opacity-0 translate-y-10'}`;

        const HeadingTag = index === 0 ? 'h1' : 'h2';

        return (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${slides.length}`}
            aria-hidden={!isActive}
          >
            {shouldRenderMedia && (
                slide.type === 'video' ? (
                  <VideoSlide 
                    source={slide.source} 
                    poster={slide.poster} 
                    isPaused={isPaused} 
                    tagline={slide.tagline} 
                    isActive={isActive} 
                  />
                ) : (
                <img 
                    src={`${slide.source}?q=70&w=1280&auto=format&fit=crop`}
                    srcSet={generateSrcSet(slide.source)}
                    sizes="100vw"
                    width="1920"
                    height="1080"
                    loading={isLcpSlide ? 'eager' : 'lazy'}
                    fetchpriority={isLcpSlide ? 'high' : 'auto'}
                    decoding="async"
                    alt={`Designing Dose Banner: ${slide.tagline}`} 
                    className="w-full h-full object-cover transform scale-[1.02] aspect-video" 
                    aria-hidden="true"
                />
                )
            )}
            
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/80 z-20"></div>
            
            <div className="absolute inset-0 flex items-center justify-center text-center z-30 pt-16">
              <div className="container mx-auto px-4 md:px-6">
                <HeadingTag
                  className={h1Class}
                  style={{ textShadow: '0 4px 12px rgba(0,0,0,0.8)' }}
                >
                  {slide.tagline}
                </HeadingTag>
                <p
                  className={pClass}
                  style={{ textShadow: '0 2px 8px rgba(0,0,0,0.9)' }}
                >
                  {slide.subTagline}
                </p>
                <div
                  className={btnClass}
                >
                   <button 
                      onClick={openModal} 
                      className="relative overflow-hidden group bg-gradient-to-r from-brand-accent-start via-brand-accent-middle to-brand-accent-end text-white font-bold py-4 px-10 rounded-full text-lg shadow-[0_0_20px_rgba(236,72,153,0.4)] hover:shadow-[0_0_35px_rgba(236,72,153,0.6)] transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-accent-middle focus:ring-offset-black"
                   >
                      <span className="relative z-10 flex items-center justify-center gap-2" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>
                        Get a Quote
                        <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                      </span>
                      <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-12 transition-all duration-700 group-hover:left-[100%]"></div>
                    </button>

                    <Link 
                      to="/services/website-packages" 
                      className="relative overflow-hidden group bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold py-4 px-10 rounded-full text-lg hover:bg-white/20 hover:border-brand-accent-end/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto text-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-accent-end focus:ring-offset-black"
                    >
                      <span className="relative z-10" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.8)' }}>Explore Packages</span>
                    </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <ArrowButton direction="left" onClick={prevSlide} />
      <ArrowButton direction="right" onClick={nextSlide} />

      <button
        onClick={togglePause}
        className="absolute bottom-6 left-6 z-50 p-2 bg-black/30 hover:bg-black/50 rounded-full text-white backdrop-blur-sm transition-colors border border-white/10 focus:outline-none focus:ring-2 focus:ring-brand-accent-end"
        aria-label={isPaused ? "Play slideshow" : "Pause slideshow"}
      >
        {isPaused ? (
           <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>
        ) : (
           <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
        )}
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-40">
        {slides.map((_, index) => (
          <div key={index} className="p-3 -m-3">
            <button
              onClick={() => goToSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-brand-accent-end focus:ring-offset-1 focus:ring-offset-black ${
                index === currentIndex ? 'bg-brand-accent-end w-8' : 'bg-white/30 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentIndex ? "true" : "false"}
            ></button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;