
import React, { useState, useEffect, useRef } from 'react';
import type { ServiceCategory } from '../types';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import FullFeaturePricingCard from '../components/FullFeaturePricingCard';
import FaqSection from '../components/FaqSection';
import ComparisonModal from '../components/ComparisonModal';


const GenericServicePage: React.FC<{ service: ServiceCategory }> = ({ service }) => {
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);
  const headerRef = useScrollAnimation('slide-in-up');
  const gridRef = useRef<HTMLDivElement>(null);
  const plansToShow = service.plans || [];

  const gridCols = plansToShow.length >= 4 
    ? 'lg:grid-cols-4' 
    : (plansToShow.length === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-2');

  useEffect(() => {
    if (!gridRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Fix: Add a type guard to ensure entry.target is an Element before accessing classList or passing to observer.unobserve.
            if (entry.target instanceof Element) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = Array.from(gridRef.current.children);
    cards.forEach(card => {
        // Fix: Add a type guard to ensure 'card' is an Element. The compiler was inferring it as 'unknown'.
        if (card instanceof Element) {
            card.classList.add('animate-on-scroll', 'slide-in-up');
            observer.observe(card);
        }
    });

    return () => {
      cards.forEach(card => {
        // Fix: Add a type guard to ensure 'card' is an Element. The compiler was inferring it as 'unknown'.
        if (card instanceof Element) {
            observer.unobserve(card);
        }
      });
    };
  }, [service]);

  return (
    <>
      <div className="py-20 bg-brand-primary overflow-x-hidden">
        <div className="container mx-auto px-6">
          <div ref={headerRef} className="text-center mb-8 animate-on-scroll">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">{service.title}</h1>
            <p className="mt-4 text-lg max-w-3xl mx-auto text-brand-muted">{service.description}</p>
          </div>
          
          {plansToShow.length > 1 && (
            <div className="flex justify-center mb-12">
              <button
                onClick={() => setIsCompareModalOpen(true)}
                className="bg-transparent border-2 border-brand-accent-end text-brand-accent-end font-bold py-2 px-6 rounded-full text-base hover:bg-brand-accent-end hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Compare Plans
              </button>
            </div>
          )}

          <div ref={gridRef} className={`grid grid-cols-1 md:grid-cols-2 ${gridCols} gap-8 xl:gap-10 justify-center`}>
            {plansToShow.map((plan, index) => {
              return (
                <div
                  key={plan.name}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  className="flex"
                >
                  <FullFeaturePricingCard plan={plan} />
                </div>
              );
            })}
          </div>
          
          {service.faqs && service.faqs.length > 0 && (
            <FaqSection faqs={service.faqs} />
          )}
        </div>
      </div>
       {plansToShow.length > 1 && (
        <ComparisonModal 
          isOpen={isCompareModalOpen}
          onClose={() => setIsCompareModalOpen(false)}
          plans={plansToShow}
          categoryTitle={service.title}
        />
      )}
    </>
  );
};

export default GenericServicePage;