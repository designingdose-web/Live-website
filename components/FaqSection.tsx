
import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import type { FAQ } from '../types';

const FaqSection: React.FC<{ faqs: FAQ[] }> = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useScrollAnimation('slide-in-up');

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div ref={sectionRef} className="mt-12 animate-on-scroll">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">Frequently Asked <span className="gradient-text">Questions</span></h2>
      </div>
      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-700/50 rounded-lg overflow-hidden bg-brand-secondary shadow-lg transition-all duration-300 hover:border-brand-accent-start/50">
            <button
              onClick={() => toggleFaq(index)}
              className="w-full flex justify-between items-center text-left p-6 bg-brand-secondary hover:bg-brand-primary/20 transition-colors duration-200"
              aria-expanded={openIndex === index}
              aria-controls={`faq-answer-${index}`}
            >
              <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
              <span className={`transform transition-transform duration-300 ease-in-out ${openIndex === index ? 'rotate-45' : 'rotate-0'}`}>
                 <svg className="w-6 h-6 text-brand-accent-end flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
              </span>
            </button>
            <div
              id={`faq-answer-${index}`}
              role="region"
              className={`grid transition-all duration-500 ease-in-out ${openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
            >
              <div className="overflow-hidden">
                <div className="p-6 pt-0 text-brand-muted">
                  <p className="border-t border-gray-700 pt-6">{faq.answer}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
