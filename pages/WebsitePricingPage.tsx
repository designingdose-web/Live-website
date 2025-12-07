
import React, { useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import FullFeaturePricingCard from '../components/FullFeaturePricingCard';
import FaqSection from '../components/FaqSection';
import ComparisonModal from '../components/ComparisonModal';

const WebsitePricingPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isCompareModalOpen, setIsCompareModalOpen] = React.useState(false);
  const websiteService = servicesData.find(service => service.id === 'website');

  const headerRef = useScrollAnimation('slide-in-up');
  const tabsRef = useScrollAnimation('slide-in-up');
  const anchorNavRef = useScrollAnimation('slide-in-up');
  const gridRef = useRef<HTMLDivElement>(null);

  // Helper to create URL-friendly tab names (e.g., "Logo Design" -> "logo-design")
  const getTabSlug = (name: string) => name.toLowerCase().replace(/\s+/g, '-');

  // Determine active tab index based on URL param, default to 0
  const activeTabParam = searchParams.get('tab');
  const activeTab = websiteService?.tabs 
    ? Math.max(0, websiteService.tabs.findIndex(t => getTabSlug(t.tabName) === activeTabParam)) 
    : 0;

  const handleTabClick = (index: number) => {
    if (websiteService?.tabs) {
      setSearchParams({ tab: getTabSlug(websiteService.tabs[index].tabName) });
    }
  };

  const scrollToPlan = (planName: string) => {
    const element = document.getElementById(planName);
    if (element) {
       const headerOffset = 100;
       const elementPosition = element.getBoundingClientRect().top;
       const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
   
       window.scrollTo({
         top: offsetPosition,
         behavior: "smooth"
       });
    }
  };

  useEffect(() => {
    if (!gridRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
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
        if (card instanceof Element) {
          card.classList.add('animate-on-scroll', 'slide-in-up');
          observer.observe(card);
        }
    });

    return () => {
      cards.forEach(card => {
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
      <div className="py-12 md:py-20 bg-brand-primary overflow-x-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div ref={headerRef} className="text-center mb-8 md:mb-12 animate-on-scroll">
            <h1 className="text-3xl md:text-5xl font-extrabold text-white">{websiteService.title}</h1>
            <p className="mt-4 text-base md:text-lg max-w-3xl mx-auto text-brand-muted">{websiteService.description}</p>
          </div>

          <div ref={tabsRef} className="w-full max-w-full overflow-x-auto pb-2 mb-6 relative z-20 animate-on-scroll scrollbar-thin scrollbar-thumb-brand-secondary scrollbar-track-transparent md:flex md:justify-center md:pb-0" style={{ transitionDelay: '200ms'}}>
            <div className="bg-brand-secondary p-1.5 md:p-2 rounded-lg flex space-x-2 whitespace-nowrap min-w-min mx-auto">
              {websiteService.tabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => handleTabClick(index)}
                  className={`px-4 md:px-6 py-2 rounded-md font-semibold text-sm md:text-base transition-colors duration-300 ${
                    activeTab === index
                      ? 'bg-gradient-to-r from-brand-accent-start via-brand-accent-middle to-brand-accent-end text-white'
                      : 'text-brand-muted hover:bg-brand-primary/50'
                  }`}
                >
                  {tab.tabName}
                </button>
              ))}
            </div>
          </div>
          
           {/* Plan Anchor Navigation Bar */}
           {activePlans.length > 0 && (
             <div ref={anchorNavRef} className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 animate-on-scroll" style={{ transitionDelay: '300ms' }}>
                <span className="w-full text-center text-xs text-brand-muted uppercase tracking-widest mb-1 font-semibold">Available Plans</span>
                {activePlans.map((plan) => (
                  <button
                    key={plan.name}
                    onClick={() => scrollToPlan(plan.name)}
                    className="px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 border border-brand-secondary bg-brand-secondary/50 text-brand-muted hover:bg-brand-secondary hover:text-white hover:border-brand-accent-middle hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-accent-middle"
                  >
                    {plan.name}
                  </button>
                ))}
             </div>
          )}

          <div className="flex justify-center mb-16 md:mb-24 relative z-20">
             <button
                onClick={() => setIsCompareModalOpen(true)}
                className="bg-transparent border-2 border-brand-accent-end text-brand-accent-end font-bold py-2 px-6 rounded-full text-sm md:text-base hover:bg-brand-accent-end hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
                Compare {activeCategoryTitle} Plans
            </button>
          </div>

          <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 xl:gap-10 mt-8">
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
