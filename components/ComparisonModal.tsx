
import React, { useMemo, useEffect } from 'react';
import type { Plan } from '../types';

const CheckIcon: React.FC = () => (
    <svg className="w-6 h-6 text-brand-accent-end mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
);

const CrossIcon: React.FC = () => (
    <svg className="w-5 h-5 text-red-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"></path></svg>
);


interface ComparisonModalProps {
  isOpen: boolean;
  onClose: () => void;
  plans: Plan[];
  categoryTitle: string;
}

const ComparisonModal: React.FC<ComparisonModalProps> = ({ isOpen, onClose, plans, categoryTitle }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);

    if (isOpen) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }

    return () => {
        window.removeEventListener('keydown', handleEsc);
        document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  const allFeatures = useMemo(() => {
    const featureSet = new Set<string>();
    plans.forEach(plan => {
      if (plan.comparisonFeatures) {
        Object.keys(plan.comparisonFeatures).forEach(key => featureSet.add(key));
      }
    });
    return Array.from(featureSet).sort((a, b) => a.localeCompare(b));
  }, [plans]);

  if (!isOpen) {
    return null;
  }

  return (
    <div 
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby="comparison-title"
    >
      <div 
        className="bg-brand-primary border border-brand-secondary/50 rounded-lg shadow-2xl w-full max-w-6xl h-[90vh] flex flex-col m-4 animate-dropdown-enter"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex items-center justify-between p-6 border-b border-brand-secondary">
          <h2 id="comparison-title" className="text-2xl font-bold text-white">
            Compare <span className="gradient-text">{categoryTitle}</span> Plans
          </h2>
          <button 
            onClick={onClose} 
            className="text-brand-muted hover:text-white transition-colors"
            aria-label="Close comparison modal"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </header>

        <div className="flex-grow overflow-auto">
          <table className="w-full min-w-[800px] text-sm text-left text-brand-light border-separate border-spacing-0">
            <thead className="sticky top-0 z-20">
              <tr>
                <th className="p-4 font-semibold text-white bg-brand-secondary border-b border-r border-brand-secondary/50 sticky left-0 z-10">
                  Features
                </th>
                {plans.map(plan => (
                  <th key={plan.name} className="p-4 text-center font-semibold text-white bg-brand-secondary border-b border-r border-brand-secondary/50">
                    <div className="text-lg">{plan.name}</div>
                    <div className="text-2xl font-extrabold">{plan.price}</div>
                    {plan.priceDetails && <div className="text-xs text-brand-muted">{plan.priceDetails}</div>}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {allFeatures.map((feature, featureIndex) => (
                <tr key={feature} className={featureIndex % 2 === 0 ? 'bg-brand-secondary/30' : 'bg-brand-primary'}>
                  <td className="p-4 font-medium text-white border-b border-r border-brand-secondary/50 sticky left-0 z-10" style={{backgroundColor: featureIndex % 2 === 0 ? '#161B22' : '#0D1117'}}>
                    {feature}
                  </td>
                  {plans.map((plan) => {
                    const value = plan.comparisonFeatures?.[feature];
                    return (
                      <td key={plan.name} className="p-4 text-center border-b border-r border-brand-secondary/50">
                        {value === true && <CheckIcon />}
                        {typeof value === 'string' && <span className="font-semibold px-2">{value}</span>}
                        {(value === false || value === undefined) && <CrossIcon />}
                      </td>
                    )
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ComparisonModal;