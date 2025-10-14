import React from 'react';
import type { ServiceCategory } from '../types';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import FullFeaturePricingCard from '../components/FullFeaturePricingCard';


const GenericServicePage: React.FC<{ service: ServiceCategory }> = ({ service }) => {
  const headerRef = useScrollAnimation('slide-in-up');
  const plansToShow = service.plans || [];

  const gridCols = plansToShow.length >= 4 
    ? 'lg:grid-cols-4' 
    : (plansToShow.length === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-2');

  return (
    <div className="py-20 bg-brand-primary overflow-x-hidden">
      <div className="container mx-auto px-6">
        <div ref={headerRef} className="text-center mb-12 animate-on-scroll">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">{service.title}</h1>
          <p className="mt-4 text-lg max-w-3xl mx-auto text-brand-muted">{service.description}</p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 ${gridCols} gap-8 xl:gap-10 justify-center mt-28`}>
          {plansToShow.map((plan, index) => (
             <div key={plan.name} style={{ transitionDelay: `${index * 100}ms`}} className="flex">
                <FullFeaturePricingCard plan={plan} />
              </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GenericServicePage;