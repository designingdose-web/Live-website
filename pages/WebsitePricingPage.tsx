
import React, { useEffect, useRef } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import FullFeaturePricingCard from '../components/FullFeaturePricingCard';
import FaqSection from '../components/FaqSection';
import ComparisonModal from '../components/ComparisonModal';
import PriceCalculator from '../components/PriceCalculator';
import SEO from '../components/SEO';
import type { Plan } from '../types';

const WebsitePricingPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const [isCompareModalOpen, setIsCompareModalOpen] = React.useState(false);
  const websiteService = servicesData.find(service => service.id === 'website');

  const headerRef = useScrollAnimation('slide-in-up');
  const tabsRef = useScrollAnimation('slide-in-up');
  const controlsRef = useScrollAnimation('slide-in-up');
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

  const scrollToCalculator = () => {
    const element = document.getElementById('price-calculator');
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (!gridRef.current) return;

    const cards = Array.from(gridRef.current.children);
    cards.forEach((card, index) => {
        if (card instanceof HTMLElement) {
            // Initial state for animation
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.7s ease-out, transform 0.7s ease-out';
            
            // Trigger animation immediately with staggered delay
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 100 + (index * 100));
        }
    });
  }, [activeTab]);

  const generateSchema = () => {
    if (!websiteService) return null;

    const allPlans: Plan[] = [];
    if (websiteService.plans) allPlans.push(...websiteService.plans);
    if (websiteService.tabs) {
        websiteService.tabs.forEach(tab => allPlans.push(...tab.plans));
    }

    return {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": websiteService.title,
      "description": websiteService.description,
      "provider": {
        "@type": "Organization",
        "name": "Designing Dose",
        "url": "https://designingdose.com",
        "logo": "https://designingdose.com/favicon.svg"
      },
      "areaServed": [
        { "@type": "Country", "name": "Ireland" },
        { "@type": "Country", "name": "United States" },
        { "@type": "Country", "name": "United Kingdom" },
        { "@type": "Country", "name": "Canada" },
        { "@type": "Country", "name": "Australia" }
      ],
      "offers": allPlans.map(plan => ({
        "@type": "Offer",
        "name": plan.name,
        "price": plan.price.replace(/[^0-9.]/g, ''),
        "priceCurrency": "EUR",
        "description": plan.features.map(f => typeof f === 'string' ? f : f.feature).join('. '),
        "url": window.location.href
      }))
    };
  };

  if (!websiteService || !websiteService.tabs) {
    return <div className="text-center py-20">No website packages found.</div>;
  }
  
  const activePlans = websiteService.tabs[activeTab].plans;
  const activeCategoryTitle = websiteService.tabs[activeTab].tabName;
  const schemaData = generateSchema();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://designingdose.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Website Development Packages",
        "item": `https://designingdose.com${location.pathname}`
      }
    ]
  };

  // Generate FAQ Schema
  const faqSchema = websiteService.faqs && websiteService.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": websiteService.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  return (
    <>
      <SEO 
        title="Website Development Packages & Pricing | Designing Dose"
        description="Affordable and professional website development packages. Choose from Informative or E-commerce plans. Custom designs, SEO-friendly, and mobile-optimized."
        keywords="website pricing, web development packages, e-commerce web design cost, cheap website design Ireland, custom website development USA, Shopify store pricing"
      />
      {schemaData && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schemaData)}} />
      )}
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(breadcrumbSchema)}} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(faqSchema)}} />
      )}
      <div className="py-12 md:py-20 bg-brand-primary overflow-x-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div ref={headerRef} className="text-center mb-8 md:mb-12 animate-on-scroll">
            <h1 className="text-3xl md:text-5xl font-extrabold text-white">{websiteService.title}</h1>
            <p className="mt-4 text-base md:text-lg max-w-3xl mx-auto text-brand-muted">{websiteService.description}</p>
          </div>

          <div ref={tabsRef} className="w-full max-w-full overflow-x-auto pb-2 mb-8 relative z-20 animate-on-scroll scrollbar-thin scrollbar-thumb-brand-secondary scrollbar-track-transparent md:flex md:justify-center md:pb-0" style={{ transitionDelay: '200ms'}}>
            <div className="bg-brand-secondary p-1.5 md:p-2 rounded-lg flex space-x-2 whitespace-nowrap min-w-min mx-auto w-fit">
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
          
           {/* Combined Controls Section: Anchors + Action Buttons */}
           {activePlans.length > 0 && (
             <div ref={controlsRef} className="flex flex-col items-center mb-16 animate-on-scroll relative z-20" style={{ transitionDelay: '300ms' }}>
                
                {/* Available Plans Anchors (Subtle) */}
                <div className="flex flex-wrap justify-center items-center gap-2 mb-6 max-w-4xl px-4">
                    <span className="mr-2 text-xs font-bold text-brand-muted tracking-widest bg-brand-secondary/50 px-2 py-1 rounded select-none">Available Plans:</span>
                    {activePlans.map((plan) => (
                    <button
                        key={plan.name}
                        onClick={() => scrollToPlan(plan.name)}
                        className="px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 border border-gray-800 bg-brand-secondary/20 text-gray-400 hover:bg-brand-secondary hover:text-white hover:border-gray-600 focus:outline-none focus:border-brand-accent-start/50"
                    >
                        {plan.name}
                    </button>
                    ))}
                </div>
                
                {/* Main Actions Row (Side by Side) */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full justify-center px-4 max-w-3xl mx-auto">
                    {/* Compare Button - Minimal Glassy */}
                    <button
                        onClick={() => setIsCompareModalOpen(true)}
                        className="flex-1 flex items-center justify-center px-6 py-4 rounded-full bg-brand-primary/50 backdrop-blur-md border border-brand-accent-end/30 text-brand-accent-end font-bold transition-all duration-300 group hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:bg-brand-accent-end/10 hover:border-brand-accent-end relative overflow-hidden transform hover:-translate-y-0.5"
                    >
                        <svg className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                        Compare Plans
                    </button>

                    {/* Calculator Button - Prominent Gradient Pill */}
                    <button 
                        onClick={scrollToCalculator}
                        className="flex-1 flex items-center justify-center px-6 py-4 rounded-full bg-gradient-to-r from-brand-accent-start via-brand-accent-middle to-brand-accent-end text-white font-bold transition-all duration-300 group shadow-[0_0_20px_rgba(236,72,153,0.4)] hover:shadow-[0_0_35px_rgba(236,72,153,0.6)] relative overflow-hidden transform hover:-translate-y-1"
                    >
                        <span className="relative z-10 flex items-center">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>
                            Build Custom Package
                        </span>
                        {/* Sheen */}
                        <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 transition-all duration-700 group-hover:left-[100%]"></div>
                    </button>
                </div>
             </div>
          )}

          <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 xl:gap-10 mt-32">
            {activePlans.map((plan, index) => {
               return (
                <div 
                  key={plan.name} 
                  className="flex"
                >
                  <FullFeaturePricingCard plan={plan} />
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Interactive Price Calculator */}
      <PriceCalculator 
        serviceId="website" 
        categoryTitle={activeCategoryTitle} 
        plans={activePlans} 
      />

      <div className="bg-brand-primary">
        <div className="container mx-auto px-4 md:px-6 pb-24">
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
