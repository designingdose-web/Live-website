
import React, { useState, useEffect, useRef } from 'react';
import { servicesData } from '../data/servicesData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import FullFeaturePricingCard from '../components/FullFeaturePricingCard';
import FaqSection from '../components/FaqSection';
import ComparisonModal from '../components/ComparisonModal';

const WebsitePricingPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);
  const websiteService = servicesData.find(service => service.id === 'website');

  const headerRef = useScrollAnimation('slide-in-up');
  const tabsRef = useScrollAnimation('slide-in-up');
  const gridRef = useRef<HTMLDivElement>(null);

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
  }, [activeTab]);

  if (!websiteService || !websiteService.tabs) {
    return <div className="text-center py-20">No website packages found.</div>;
  }
  
  const activePlans = websiteService.tabs[activeTab].plans;
  const activeCategoryTitle = websiteService.tabs[activeTab].tabName;

  return (
    <>
      <div className="py-20 bg-brand-primary overflow-x-hidden">
        <div className="container mx-auto px-6">
          <div ref={headerRef} className="text-center mb-12 animate-on-scroll">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">{websiteService.title}</h1>
            <p className="mt-4 text-lg max-w-3xl mx-auto text-brand-muted">{websiteService.description}</p>
          </div>

          <div ref={tabsRef} className="flex flex-col items-center mb-12 animate-on-scroll" style={{ transitionDelay: '200ms'}}>
            <div className="bg-brand-secondary p-2 rounded-lg flex space-x-2">
              {websiteService.tabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`px-6 py-2 rounded-md font-semibold transition-colors duration-300 ${
                    activeTab === index
                      ? 'bg-gradient-to-r from-brand-accent-start via-brand-accent-middle to-brand-accent-end text-white'
                      : 'text-brand-muted hover:bg-brand-primary/50'
                  }`}
                >
                  {tab.tabName}
                </button>
              ))}
            </div>
             <button
                onClick={() => setIsCompareModalOpen(true)}
                className="mt-6 bg-transparent border-2 border-brand-accent-end text-brand-accent-end font-bold py-2 px-6 rounded-full text-base hover:bg-brand-accent-end hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
                Compare {activeCategoryTitle} Plans
            </button>
          </div>

          <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
            {activePlans.map((plan, index) => {
               return (
                <div 
                  key={plan.name} 
                  style={{ transitionDelay: `${index * 100}ms`}}
                  className="flex"
                >
                  <FullFeaturePricingCard plan={plan} />
                </div>
              )
            })}
          </div>

          {websiteService.faqs && websiteService.faqs.length > 0 && (
            <FaqSection faqs={websiteService.faqs} />
          )}
        </div>
      </div>
       <ComparisonModal 
        isOpen={isCompareModalOpen}
        onClose={() => setIsCompareModalOpen(false)}
        plans={activePlans}
        categoryTitle={activeCategoryTitle}
      />
    </>
  );
};

export default WebsitePricingPage;
