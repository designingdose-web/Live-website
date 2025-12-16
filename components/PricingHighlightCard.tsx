
import React from 'react';
import type { Plan } from '../types';
import { Link } from 'react-router-dom';

const CheckIcon: React.FC = () => (
    <svg className="w-5 h-5 text-brand-accent-end flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
);

const PricingHighlightCard: React.FC<{ plan: Plan }> = ({ plan }) => {
  const MAX_FEATURES = 5;
  const featuresToShow = plan.features.slice(0, MAX_FEATURES);
  const remainingFeatures = plan.features.length - MAX_FEATURES;

  const cardClasses = plan.isPopular
    ? 'border-brand-accent-middle shadow-2xl shadow-brand-accent-middle/20 z-10 hover:shadow-[0_10px_40px_rgba(236,72,153,0.4)]'
    : 'border-white/10 hover:border-brand-accent-start/50 hover:shadow-xl hover:shadow-brand-accent-start/10 hover:-translate-y-1';

  return (
    <Link 
      to={`/services/website-packages#${plan.name}`} 
      aria-label={`View details for the ${plan.name} website package`}
      className={`glass-panel p-8 rounded-2xl flex flex-col h-full relative transition-all duration-300 group focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-secondary focus-visible:ring-brand-accent-middle shadow-none ${cardClasses}`}
    >
        {plan.isPopular && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-brand-accent-start via-brand-accent-middle to-brand-accent-end text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-[0_0_10px_rgba(236,72,153,0.5)]">
            Most Popular
            </div>
        )}
      <div className="text-center">
        <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
        <p className="mt-4">
          <span className="text-3xl sm:text-4xl font-extrabold text-white">{plan.price}</span>
          {plan.priceDetails && <span className="text-brand-muted">{plan.priceDetails}</span>}
        </p>
      </div>
      <ul className="mt-8 space-y-4 text-brand-muted flex-grow">
        {featuresToShow.map((featureItem, index) => {
          const featureText = typeof featureItem === 'string' ? featureItem : featureItem.feature;
          return (
            <li key={index} className="flex items-start">
              <CheckIcon />
              <span className="ml-3">{featureText}</span>
            </li>
          )
        })}
         {remainingFeatures > 0 && (
            <li className="flex items-start text-brand-accent-middle font-semibold">
                 <span className="ml-8">+ {remainingFeatures} more features</span>
            </li>
        )}
      </ul>
      
      {/* Stylish Minimal CTA Button */}
      <div className="mt-8 relative rounded-full overflow-hidden group/btn shadow-[0_0_15px_rgba(139,92,246,0.3)] hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] transition-all duration-300 transform group-hover:translate-y-[-2px]">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-accent-start via-brand-accent-middle to-brand-accent-end opacity-90 group-hover/btn:opacity-100 transition-opacity"></div>
        <div className="relative py-4 text-center text-white font-bold flex justify-center items-center gap-2">
           View Details 
           <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
        </div>
        {/* Sheen */}
        <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 transition-all duration-700 group-hover/btn:left-[100%]"></div>
      </div>
    </Link>
  );
};

export default PricingHighlightCard;
