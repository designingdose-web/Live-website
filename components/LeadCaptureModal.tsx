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
  
  const handleCountryChange = (code: string, name: string) => {
    setCountry({ code, name });
  };

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      // Delay hiding to allow for fade-out animation
      setTimeout(() => setIsVisible(false), 300);
    }
  }, [isOpen]);
  
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
    <div className={`fixed inset-0 z-[100] flex items-center justify-center transition-opacity duration-300 ${isOpen ? 'opacity-100 bg-black/60 backdrop-blur-sm' : 'opacity-0'}`} onClick={onClose}>
      <div 
        style={{
            boxShadow: '0 0 25px rgba(139, 92, 246, 0.3), 0 0 50px rgba(236, 72, 153, 0.3)'
        }}
        className={`bg-brand-secondary p-8 rounded-lg w-full max-w-md mx-4 transform transition-all duration-300 border border-brand-accent-start/30 ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-white">Get a <span className="gradient-text">Free Consultation</span></h2>
            <button onClick={onClose} className="text-brand-muted hover:text-white text-2xl">&times;</button>
        </div>
        <p className="text-brand-muted mb-6">Leave your details below, and one of our experts will contact you to discuss how we can help your business grow.</p>
        {!status.startsWith('Thank') ? (
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
               <input type="hidden" name="countryCode" value={country.code} />
               <input type="hidden" name="countryName" value={country.name} />
               <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                className="w-full bg-brand-primary border border-gray-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-accent-end"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="w-full bg-brand-primary border border-gray-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-accent-end"
                required
              />
               <div className="flex items-center">
                 <CountryCodeDropdown
                    value={country.code}
                    countryName={country.name}
                    onChange={handleCountryChange}
                    heightClass="h-[50px]"
                 />
                <input
                    type="tel"
                    name="phone"
                    placeholder="Your number"
                    className="w-full bg-brand-primary border border-gray-600 rounded-r-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-accent-end h-[50px]"
                    required
                />
               </div>
              <button type="submit" disabled={isLoading} className="w-full bg-gradient-to-r from-brand-accent-start via-brand-accent-middle to-brand-accent-end text-white font-bold py-3 rounded-lg hover:opacity-90 transition-transform transform hover:scale-105 flex justify-center items-center disabled:opacity-60">
                {isLoading ? 'Submitting...' : 'Request a Callback'}
              </button>
               {status && <p className={`mt-4 text-center text-sm ${status.startsWith('Thank') ? 'text-green-400' : 'text-yellow-400'}`}>{status}</p>}
            </form>
        ) : (
            <p className="text-center text-lg text-green-400 py-8">{status}</p>
        )}
      </div>
    </div>
  );
};

export default LeadCaptureModal;
