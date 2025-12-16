
import React, { useState, useEffect, useRef } from 'react';
import CountryCodeDropdown from './CountryCodeDropdown';

// The user's specific Formspree endpoint for the lead capture modal.
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xanplkbg';

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LeadCaptureModal: React.FC<LeadCaptureModalProps> = ({ isOpen, onClose }) => {
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [country, setCountry] = useState({ code: '+353', name: 'Ireland' });
  const formRef = useRef<HTMLFormElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  
  const handleCountryChange = (code: string, name: string) => {
    setCountry({ code, name });
  };

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      // Focus management: when modal opens, focus on the container or the first input
      setTimeout(() => {
        modalRef.current?.focus();
      }, 100);
    } else {
      // Delay hiding to allow for fade-out animation
      setTimeout(() => setIsVisible(false), 300);
    }
  }, [isOpen]);

  // Trap focus within modal when open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
        if (!isOpen) return;
        
        if (e.key === 'Escape') {
            onClose();
        }
        
        if (e.key === 'Tab' && modalRef.current) {
            const focusableElements = modalRef.current.querySelectorAll(
                'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );
            const firstElement = focusableElements[0] as HTMLElement;
            const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

            if (e.shiftKey) {
                if (document.activeElement === firstElement) {
                    lastElement.focus();
                    e.preventDefault();
                }
            } else {
                if (document.activeElement === lastElement) {
                    firstElement.focus();
                    e.preventDefault();
                }
            }
        }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('Submitting...');

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
        const response = await fetch(FORMSPREE_ENDPOINT, {
            method: 'POST',
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            setStatus('Thank you! We will be in touch shortly.');
            form.reset();
            setCountry({ code: '+353', name: 'Ireland' }); // Reset country on success
            setTimeout(() => {
                onClose();
                setTimeout(() => setStatus(''), 500);
            }, 2000);
        } else {
            setStatus('Oops! There was a problem. Please try again.');
        }
    } catch (error) {
        setStatus('Oops! There was a problem. Please try again.');
    } finally {
        setIsLoading(false);
    }
  };
  
  if (!isVisible) return null;

  return (
    <div 
        className={`fixed inset-0 z-[100] flex items-center justify-center transition-opacity duration-300 ${isOpen ? 'opacity-100 bg-black/40 backdrop-blur-[2px]' : 'opacity-0'}`} 
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
    >
      <div 
        ref={modalRef}
        style={{
            boxShadow: '0 0 50px rgba(139, 92, 246, 0.1), 0 0 100px rgba(236, 72, 153, 0.08)',
            backgroundColor: 'rgba(2, 2, 5, 0.25)', /* Highly transparent */
            backdropFilter: 'blur(30px)', /* Significant blur to ensure text readability over background */
            WebkitBackdropFilter: 'blur(30px)',
            border: '1px solid rgba(255, 255, 255, 0.1)'
        }}
        className={`p-8 rounded-2xl w-full max-w-md mx-4 transform transition-all duration-300 outline-none focus:outline-none focus-visible:outline-none ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
        onClick={(e) => e.stopPropagation()}
        tabIndex={-1}
      >
        <div className="flex justify-between items-center mb-4">
            <h2 id="modal-title" className="text-2xl font-bold text-white">Get a <span className="gradient-text">Free Consultation</span></h2>
            <button onClick={onClose} className="text-brand-muted hover:text-white text-2xl focus:outline-none focus:ring-2 focus:ring-brand-accent-end rounded" aria-label="Close modal">&times;</button>
        </div>
        <p className="text-gray-200 mb-6 font-light">Leave your details below, and one of our experts will contact you to discuss how we can help your business grow.</p>
        {!status.startsWith('Thank') ? (
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
               <input type="hidden" name="countryCode" value={country.code} />
               <input type="hidden" name="countryName" value={country.name} />
               <label htmlFor="modal-name" className="sr-only">Full Name</label>
               <input
                id="modal-name"
                type="text"
                name="name"
                placeholder="Enter your full name"
                className="w-full bg-brand-secondary/40 border border-white/10 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-accent-end placeholder-gray-400 backdrop-blur-sm transition-colors focus:bg-brand-secondary/60"
                required
              />
              <label htmlFor="modal-email" className="sr-only">Email Address</label>
              <input
                id="modal-email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="w-full bg-brand-secondary/40 border border-white/10 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-accent-end placeholder-gray-400 backdrop-blur-sm transition-colors focus:bg-brand-secondary/60"
                required
              />
               <div className="flex items-center">
                 <CountryCodeDropdown
                    value={country.code}
                    countryName={country.name}
                    onChange={handleCountryChange}
                    heightClass="h-[50px] bg-brand-secondary/40 border-white/10"
                 />
                <label htmlFor="modal-phone" className="sr-only">Phone Number</label>
                <input
                    id="modal-phone"
                    type="tel"
                    name="phone"
                    placeholder="Your number"
                    className="w-full bg-brand-secondary/40 border border-white/10 rounded-r-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-accent-end h-[50px] placeholder-gray-400 backdrop-blur-sm transition-colors focus:bg-brand-secondary/60"
                    required
                />
               </div>
              <button 
                type="submit" 
                disabled={isLoading} 
                className="relative overflow-hidden group w-full bg-gradient-to-r from-brand-accent-start via-brand-accent-middle to-brand-accent-end text-white font-bold py-4 rounded-xl shadow-[0_0_20px_rgba(236,72,153,0.4)] hover:shadow-[0_0_35px_rgba(236,72,153,0.6)] transition-all duration-300 transform hover:-translate-y-1 flex justify-center items-center disabled:opacity-60 disabled:transform-none disabled:shadow-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-accent-end"
              >
                <span className="relative z-10">{isLoading ? 'Submitting...' : 'Request a Callback'}</span>
                {/* Sheen */}
                <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 transition-all duration-700 group-hover:left-[100%]"></div>
              </button>
               {status && <p className={`mt-4 text-center text-sm ${status.startsWith('Thank') ? 'text-green-400' : 'text-yellow-400'}`} aria-live="polite">{status}</p>}
            </form>
        ) : (
            <p className="text-center text-lg text-green-400 py-8" aria-live="polite">{status}</p>
        )}
      </div>
    </div>
  );
};

export default LeadCaptureModal;
