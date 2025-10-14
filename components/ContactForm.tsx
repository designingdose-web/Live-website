import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import CountryCodeDropdown from './CountryCodeDropdown';

// The user's specific Formspree endpoint for the contact form.
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xnngorzw';


const ContactForm: React.FC = () => {
  const location = useLocation();
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [country, setCountry] = useState({ code: '+353', name: 'Ireland' });
  
  const handleCountryChange = (code: string, name: string) => {
    setCountry({ code, name });
  };

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
        setStatus('Thank you! Your message has been sent.');
        form.reset();
        setCountry({ code: '+353', name: 'Ireland' }); // Reset country on success
      } else {
        const responseData = await response.json();
        if (responseData.errors) {
            setStatus(responseData.errors.map((error: any) => error.message).join(", "));
        } else {
            setStatus('Oops! There was a problem submitting your form.');
        }
      }
    } catch (error) {
      setStatus('Oops! There was a problem submitting your form.');
    } finally {
      setIsLoading(false);
    }
  };

  const getStatusColor = () => {
    if (status.startsWith('Thank')) return 'text-green-400';
    if (status) return 'text-yellow-400';
    return 'text-brand-muted';
  };

  return (
    <div className="bg-brand-secondary p-8 rounded-lg border border-gray-700/50">
      <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* This hidden field sets a clear subject for the email notification you receive */}
        <input type="hidden" name="_subject" value="New Inquiry from Designing Dose Website" />
        <input type="hidden" name="countryCode" value={country.code} />
        <input type="hidden" name="countryName" value={country.name} />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-brand-muted mb-2 text-sm font-medium">Full Name *</label>
            <div className="relative group">
               <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-brand-muted group-focus-within:text-brand-accent-end transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>
              </div>
              <input type="text" id="name" name="name" required className="w-full bg-brand-primary border border-gray-600 rounded-lg py-2.5 pl-10 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-accent-end" />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-brand-muted mb-2 text-sm font-medium">Email Address *</label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-brand-muted group-focus-within:text-brand-accent-end transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
              </div>
              <input type="email" id="email" name="email" required className="w-full bg-brand-primary border border-gray-600 rounded-lg py-2.5 pl-10 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-accent-end" />
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="phone" className="block text-brand-muted mb-2 text-sm font-medium">Phone Number</label>
           <div className="flex items-center">
              <CountryCodeDropdown
                value={country.code}
                onChange={handleCountryChange}
              />
              <input 
                type="tel" 
                id="phone" 
                name="phone"
                placeholder="Your number"
                className="w-full bg-brand-primary border border-gray-600 rounded-r-lg py-2.5 px-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-accent-end h-[46px]" />
           </div>
        </div>
        <div>
          <label htmlFor="inquiry-subject" className="block text-brand-muted mb-2 text-sm font-medium">Subject</label>
           <div className="relative group">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-brand-muted group-focus-within:text-brand-accent-end transition-colors">
                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" /></svg>
              </div>
              <input type="text" id="inquiry-subject" name="Inquiry Subject" defaultValue={location.state?.subject || ''} required className="w-full bg-brand-primary border border-gray-600 rounded-lg py-2.5 pl-10 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-accent-end" />
            </div>
        </div>
        <div>
          <label htmlFor="message" className="block text-brand-muted mb-2 text-sm font-medium">Message *</label>
          <textarea id="message" name="message" required rows={5} className="w-full bg-brand-primary border border-gray-600 rounded-lg py-2.5 px-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-accent-end"></textarea>
        </div>
        
        <button type="submit" disabled={isLoading} className="w-full bg-gradient-to-r from-brand-accent-start via-brand-accent-middle to-brand-accent-end text-white font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed">
          {isLoading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </>
          ) : (
            'Send Message'
          )}
        </button>
        {status && <p className={`mt-4 text-center text-sm ${getStatusColor()}`}>{status}</p>}
      </form>
    </div>
  );
};

export default ContactForm;