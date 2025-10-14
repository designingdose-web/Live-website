import React, { useState } from 'react';
import { servicesData } from '../data/servicesData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import type { Plan } from '../types';
import FullFeaturePricingCard from '../components/FullFeaturePricingCard';

const WebsitePricingPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const websiteService = servicesData.find(service => service.id === 'website');

  const headerRef = useScrollAnimation('slide-in-up');
  const tabsRef = useScrollAnimation('slide-in-up');

  if (!websiteService || !websiteService.tabs) {
    return <div className="text-center py-20">No website packages found.</div>;
  }

  return (
    <div className="py-20 bg-brand-primary overflow-x-hidden">
      <div className="container mx-auto px-6">
        <div ref={headerRef} className="text-center mb-12 animate-on-scroll">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">{websiteService.title}</h1>
          <p className="mt-4 text-lg max-w-3xl mx-auto text-brand-muted">{websiteService.description}</p>
        </div>

        <div ref={tabsRef} className="flex justify-center mb-12 animate-on-scroll" style={{ transitionDelay: '200ms'}}>
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
          {websiteService.tabs[activeTab].plans.map((plan, index) => {
             return (
              <div key={plan.name} style={{ transitionDelay: `${index * 100}ms`}}>
                <FullFeaturePricingCard plan={plan} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default WebsitePricingPage;