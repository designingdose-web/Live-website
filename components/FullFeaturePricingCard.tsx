import React from 'react';
import type { Plan } from '../types';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const CheckIcon: React.FC = () => (
    <svg className="w-5 h-5 text-brand-accent-end flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
);

const FullFeaturePricingCard: React.FC<{ plan: Plan }> = ({ plan }) => {
  const cardRef = useScrollAnimation('slide-in-up');
  
  const cardClasses = plan.isPopular
    ? 'border-brand-accent-middle scale-105 shadow-2xl shadow-brand-accent-middle/20'
    : 'border-gray-700 hover:border-brand-accent-start/50';

  return (
    <div ref={cardRef} id={plan.name} className={`bg-brand-secondary p-8 rounded-2xl border transition-all duration-300 flex flex-col h-full relative animate-on-scroll w-full ${cardClasses}`}>
      {plan.isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-brand-accent-start via-brand-accent-middle to-brand-accent-end text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
          Most Popular
        </div>
      )}
      <div className="text-center">
        <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
        <p className="mt-4">
          <span className="text-4xl font-extrabold text-white">{plan.price}</span>
          {plan.priceDetails && <span className="text-brand-muted">{plan.priceDetails}</span>}
        </p>
      </div>
      <ul className="mt-8 space-y-4 text-brand-muted flex-grow">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <CheckIcon />
            <span className="ml-3">{feature}</span>
          </li>
        ))}
      </ul>
      {plan.note && <p className="text-xs text-center text-brand-muted mt-4">{plan.note}</p>}
      <Link to="/contact" state={{ subject: `Inquiry about: ${plan.name} package` }} className="block w-full text-center mt-8 bg-gradient-to-r from-brand-accent-start via-brand-accent-middle to-brand-accent-end text-white font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105">
        Get Started
      </Link>
    </div>
  );
};

export default FullFeaturePricingCard;