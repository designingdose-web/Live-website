
import React from 'react';
import type { Plan } from '../types';
import { Link } from 'react-router-dom';
import Tooltip from './Tooltip';

const CheckIcon: React.FC = () => (
    <svg className="w-5 h-5 text-brand-accent-end flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
);

const InfoIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-brand-muted inline-block opacity-50 hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.064.293.006.399.287.47l.45.083.082.38-.29.287-.082.38.29.287.082.38.29.287.082.38.29.287l.45.083c.294.07.352.176.288.469l-.738 3.468c-.064.293.006.399.287.47l.45.083.082.38-.29.287-.082.38zM8 4.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
  </svg>
);


const FullFeaturePricingCard: React.FC<{ plan: Plan }> = ({ plan }) => {
  // Updates:
  // 1. Added '!important' to borders to override glass-panel defaults.
  // 2. Added hover effects (lift and glow) to Popular plans.
  // 3. Matched shadow styles with Homepage Highlight cards.
  const cardClasses = plan.isPopular
    ? '!border-brand-accent-middle shadow-[0_0_30px_-5px_rgba(236,72,153,0.3)] z-10 hover:shadow-[0_0_50px_-5px_rgba(236,72,153,0.5)] hover:-translate-y-1'
    : '!border-white/10 hover:!border-brand-accent-start/50 hover:-translate-y-1 hover:shadow-[0_0_30px_-5px_rgba(139,92,246,0.2)]';

  return (
    <div id={plan.name} className={`glass-panel p-6 md:p-8 rounded-2xl flex flex-col h-full relative w-full transition-all duration-300 ${cardClasses}`}>
      {plan.isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-brand-accent-start via-brand-accent-middle to-brand-accent-end text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-[0_0_10px_rgba(236,72,153,0.5)]">
          Most Popular
        </div>
      )}
      <div className="text-center">
        <h3 className="text-xl md:text-2xl font-bold text-white">{plan.name}</h3>
        <p className="mt-4">
          <span className="text-3xl md:text-4xl font-extrabold text-white">{plan.price}</span>
          {plan.priceDetails && <span className="text-brand-muted">{plan.priceDetails}</span>}
        </p>
      </div>
      <ul className="mt-6 md:mt-8 space-y-3 md:space-y-4 text-brand-muted flex-grow text-sm md:text-base">
        {plan.features.map((item, index) => {
            const hasTooltip = typeof item !== 'string';
            const featureText = hasTooltip ? item.feature : item;
            const tooltipText = hasTooltip ? item.tooltip : '';

            return (
                 <li key={index} className="flex items-start">
                    <CheckIcon />
                    <span className="ml-3">
                        {featureText}
                        {hasTooltip && (
                            <>
                                {'\u00A0'}
                                <Tooltip text={tooltipText}>
                                    <InfoIcon />
                                </Tooltip>
                            </>
                        )}
                    </span>
                </li>
            )
        })}
      </ul>
      {plan.note && <p className="text-xs text-center text-brand-muted mt-4">{plan.note}</p>}
      
      <Link 
        to="/contact" 
        state={{ subject: `Inquiry about: ${plan.name} package` }} 
        aria-label={`Get started with the ${plan.name} plan`}
        className="mt-6 md:mt-8 relative overflow-hidden group rounded-full block w-full shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-accent-end focus:ring-offset-brand-secondary"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-brand-accent-start via-brand-accent-middle to-brand-accent-end transition-opacity opacity-100"></div>
        {/* Add a subtle overlay on hover to brighten */}
        <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors"></div>
        <div className="relative py-4 px-6 text-center text-white font-bold text-sm md:text-base flex items-center justify-center gap-2">
            Get Started
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
        </div>
        {/* Sheen */}
        <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 transition-all duration-700 group-hover:left-[100%]"></div>
      </Link>
    </div>
  );
};

export default FullFeaturePricingCard;
