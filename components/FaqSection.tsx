
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useCurrency } from '../context/CurrencyContext';
import type { FAQ } from '../types';

const FaqSection: React.FC<{ faqs: FAQ[] }> = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);
  const { formatPrice } = useCurrency();
  const sectionRef = useScrollAnimation('slide-in-up');

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const INITIAL_COUNT = 5;
  const visibleFaqs = showAll ? faqs : faqs.slice(0, INITIAL_COUNT);
  const hasMore = faqs.length > INITIAL_COUNT;

  return (
    <div ref={sectionRef} className="mt-12 animate-on-scroll">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">Frequently Asked <span className="gradient-text">Questions</span></h2>
      </div>
      <div className="max-w-4xl mx-auto space-y-4">
        {visibleFaqs.map((faq, index) => (
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
                  <p className="border-t border-gray-700 pt-6">{formatPrice(faq.answer)}</p>
                  {faq.link && (
                    <Link
                      to={faq.link.href}
                      className="inline-flex items-center gap-1.5 mt-4 text-violet-400 hover:text-violet-300 text-sm font-medium transition-colors"
                    >
                      {faq.link.text}
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {hasMore && (
        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-700 text-brand-muted hover:text-white hover:border-gray-500 transition-all duration-300 text-sm font-medium"
          >
            {showAll ? (
              <>
                Show fewer questions
                <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </>
            ) : (
              <>
                Show {faqs.length - INITIAL_COUNT} more questions
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default FaqSection;
