
import React from 'react';
import type { Plan } from '../types';
import { Link } from 'react-router-dom';
import Tooltip from './Tooltip';

const CheckIcon: React.FC = () => (
    <svg className="w-5 h-5 text-brand-accent-end flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
);

const InfoIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-brand-muted inline-block opacity-50" fill="currentColor" viewBox="0 0 16 16">
    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.064.293.006.399.287.47l.45.083.082.38-.29.287-.082.38.29.287.082.38.29.287.082.38.29.287l.45.083c.294.07.352.176.288.469l-.738 3.468c-.064.293.006.399.287.47l.45.083.082.38-.29.287-.082.38zM8 4.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
  </svg>
);


const FullFeaturePricingCard: React.FC<{ plan: Plan }> = ({ plan }) => {
  const cardClasses = plan.isPopular
    ? 'border-brand-accent-middle scale-105 shadow-2xl shadow-brand-accent-middle/20 z-10'
    : 'border-gray-700 hover:border-brand-accent-start/50 hover:-translate-y-2 hover:shadow-xl hover:shadow-brand-accent-start/10';

  return (
    <div id={plan.name} className={`bg-brand-secondary p-6 md:p-8 rounded-2xl border transition-all duration-300 flex flex-col h-full relative w-full ${cardClasses}`}>
      {plan.isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-brand-accent-start via-brand-accent-middle to-brand-accent-end text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
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
      <Link to="/contact" state={{ subject: `Inquiry about: ${plan.name} package` }} className="block w-full text-center mt-6 md:mt-8 bg-gradient-to-r from-brand-accent-start via-brand-accent-middle to-brand-accent-end text-white font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105 text-sm md:text-base">
        Get Started
      </Link>
    </div>
  );
};

export default FullFeaturePricingCard;
