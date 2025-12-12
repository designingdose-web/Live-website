
import React from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface RelatedServicesProps {
  currentServiceId: string;
}

const RelatedServices: React.FC<RelatedServicesProps> = ({ currentServiceId }) => {
  const sectionRef = useScrollAnimation('fade-in');

  // Filter out the current service and get 3 random others (or the next 3 for stability)
  const otherServices = servicesData.filter(s => s.id !== currentServiceId);
  
  // Deterministic shuffle based on ID length to keep it consistent during SSR/hydration but "random" enough
  const shuffled = [...otherServices].sort((a, b) => 
    (a.title.length + a.description.length) - (b.title.length + b.description.length)
  ).slice(0, 3);

  return (
    <section ref={sectionRef} className="py-16 bg-brand-primary border-t border-gray-800 animate-on-scroll">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h3 className="text-2xl md:text-3xl font-bold text-white">Explore Other <span className="gradient-text">Services</span></h3>
          <p className="text-brand-muted mt-2">Comprehensive digital solutions to scale your business.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {shuffled.map((service) => (
            <Link 
              key={service.id} 
              to={service.id === 'website' ? '/services/website-packages' : `/services/${service.id}`}
              className="group block bg-brand-secondary p-6 rounded-xl border border-gray-700 hover:border-brand-accent-start/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-accent-start/10"
            >
              <h4 className="text-xl font-bold text-white mb-3 group-hover:text-brand-accent-end transition-colors">
                {service.title}
              </h4>
              <p className="text-brand-muted text-sm line-clamp-3 mb-4">
                {service.description}
              </p>
              <span className="inline-flex items-center text-brand-accent-start font-semibold text-sm group-hover:translate-x-2 transition-transform">
                View Plans
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedServices;
