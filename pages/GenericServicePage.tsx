
import React, { useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import type { ServiceCategory } from '../types';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import FullFeaturePricingCard from '../components/FullFeaturePricingCard';
import FaqSection from '../components/FaqSection';
import ComparisonModal from '../components/ComparisonModal';


const GenericServicePage: React.FC<{ service: ServiceCategory; children?: React.ReactNode }> = ({ service, children }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isCompareModalOpen, setIsCompareModalOpen] = React.useState(false);
  const headerRef = useScrollAnimation('slide-in-up');
  const anchorNavRef = useScrollAnimation('slide-in-up');
  const tabsRef = useScrollAnimation('slide-in-up');
  const gridRef = useRef<HTMLDivElement>(null);
  
  // Helper to create URL-friendly tab names
  const getTabSlug = (name: string) => name.toLowerCase().replace(/\s+/g, '-');

  const hasTabs = service.tabs && service.tabs.length > 0;

  // Determine active tab index based on URL param, default to 0
  const activeTabParam = searchParams.get('tab');
  
  let activeTab = 0;
  if (hasTabs && service.tabs) {
    const foundIndex = service.tabs.findIndex(t => getTabSlug(t.tabName) === activeTabParam);
    if (foundIndex !== -1) {
      activeTab = foundIndex;
    }
  }

  const handleTabClick = (index: number) => {
    if (hasTabs && service.tabs) {
      setSearchParams({ tab: getTabSlug(service.tabs[index].tabName) });
    }
  };

  const plansToShow = hasTabs && service.tabs 
    ? service.tabs[activeTab].plans 
    : (service.plans || []);
    
  const activeCategoryTitle = hasTabs && service.tabs 
    ? service.tabs[activeTab].tabName 
    : service.title;

  const compareButtonTitle = activeCategoryTitle === 'Search Engine Optimization (SEO)' ? 'SEO' : activeCategoryTitle;

  // Determine column width based on number of plans to mimic grid but allow centering
  const getWidthClass = (count: number) => {
    // User requested 4 items to be 4-columns (all in one row) if screen allows
    if (count === 4) return 'lg:w-1/4';
    // User requested 5 items to be 3 on top, 2 below (so 3 columns)
    if (count === 5) return 'lg:w-1/3';
    // Standard 3 items or 6 items use 3 columns
    if (count === 3 || count >= 6) return 'lg:w-1/3';
    
    return 'lg:w-1/2';
  };

  const widthClass = getWidthClass(plansToShow.length);

  const scrollToPlan = (planName: string) => {
    const element = document.getElementById(planName);
    if (element) {
      // Scroll with a bit of offset for the sticky header
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
    // If we switch between services but stay on GenericServicePage, 
    // we might want to reset the tab if the URL param doesn't match the new service's tabs.
    // However, since most navigations change the route path, this is less critical,
    // but good for cleanup if the path structure allows reuse.
    if (hasTabs && service.tabs && activeTabParam) {
       const slugExists = service.tabs.some(t => getTabSlug(t.tabName) === activeTabParam);
       if (!slugExists) {
           // Optionally reset URL if invalid tab for this service
           // setSearchParams({}); // Commented out to avoid aggressive URL manipulation
       }
    }
  }, [service.id]);

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
  }, [service, activeTab]);

  return (
    <>
      <div className="py-12 md:py-20 bg-brand-primary overflow-x-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div ref={headerRef} className="text-center mb-8 animate-on-scroll">
            <h1 className="text-3xl md:text-5xl font-extrabold text-white">{service.title}</h1>
            <p className="mt-4 text-base md:text-lg max-w-3xl mx-auto text-brand-muted">{service.description}</p>
          </div>
          
          {/* Tab Navigation (if applicable) */}
          {hasTabs && service.tabs && (
            <div ref={tabsRef} className="w-full max-w-full overflow-x-auto pb-2 mb-6 relative z-20 animate-on-scroll scrollbar-thin scrollbar-thumb-brand-secondary scrollbar-track-transparent md:flex md:justify-center md:pb-0" style={{ transitionDelay: '200ms'}}>
              <div className="bg-brand-secondary p-1.5 md:p-2 rounded-lg flex space-x-2 whitespace-nowrap min-w-min mx-auto">
                {service.tabs.map((tab, index) => (
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
          )}
          
          {/* Plan Anchor Navigation Bar */}
          {plansToShow.length > 0 && (
             <div ref={anchorNavRef} className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12 animate-on-scroll" style={{ transitionDelay: '100ms' }}>
                <span className="w-full text-center text-xs text-brand-muted uppercase tracking-widest mb-1 font-semibold">Available Plans</span>
                {plansToShow.map((plan) => (
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

          {plansToShow.length > 1 && (
            <div className="flex justify-center mb-16 md:mb-24 pb-6 mt-4 relative z-20">
              <button
                onClick={() => setIsCompareModalOpen(true)}
                className="bg-transparent border-2 border-brand-accent-end text-brand-accent-end font-bold py-2 px-6 rounded-full text-sm md:text-base hover:bg-brand-accent-end hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Compare {compareButtonTitle} Plans
              </button>
            </div>
          )}

          <div ref={gridRef} className="flex flex-wrap justify-center -mx-4 xl:-mx-5 mt-8">
            {plansToShow.map((plan, index) => {
              return (
                <div
                  key={plan.name}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  className={`flex px-4 xl:px-5 mb-6 md:mb-8 xl:mb-10 w-full md:w-1/2 ${widthClass}`}
                >
                  <FullFeaturePricingCard plan={plan} />
                </div>
              );
            })}
          </div>

          {/* Render custom injected content (like SEO trends) here, after the packages */}
          {children}
          
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
          categoryTitle={activeCategoryTitle}
        />
      )}
    </>
  );
};

export default GenericServicePage;
