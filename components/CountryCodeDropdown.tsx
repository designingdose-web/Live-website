import React, { useState, useEffect, useRef } from 'react';
import { countries, Country } from '../data/countries';

interface CountryCodeDropdownProps {
  value: string;
  onChange: (value: string, countryName: string) => void;
  heightClass?: string;
}

const CountryCodeDropdown: React.FC<CountryCodeDropdownProps> = ({ value, onChange, heightClass = 'h-[46px]' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const selectedCountry = countries.find(c => c.dial_code === value) || countries.find(c => c.name === 'Ireland');

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSearchTerm('');
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  useEffect(() => {
    if (isOpen) {
        // Auto-focus search input when dropdown opens
        setTimeout(() => searchInputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const filteredCountries = searchTerm
    ? countries.filter(country =>
        country.name.toLowerCase().startsWith(searchTerm.toLowerCase())
      )
    : countries;

  const handleSelectCountry = (country: Country) => {
    onChange(country.dial_code, country.name);
    setIsOpen(false);
    setSearchTerm('');
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-between w-full bg-brand-primary border border-r-0 border-gray-600 rounded-l-lg py-2.5 px-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-accent-end ${heightClass}`}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className="truncate">{selectedCountry?.flag} {selectedCountry?.dial_code}</span>
        <svg className="w-4 h-4 ml-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
      </button>

      {isOpen && (
        <div className="absolute z-20 mt-1 w-72 bg-brand-secondary rounded-md shadow-lg max-h-60 overflow-hidden flex flex-col animate-dropdown-enter">
          <div className="p-2">
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search country..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-brand-primary border border-gray-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-1 focus:ring-brand-accent-end"
            />
          </div>
          <ul className="overflow-auto" tabIndex={-1} role="listbox">
            {filteredCountries.length > 0 ? filteredCountries.map((country) => (
              <li
                key={country.code}
                onClick={() => handleSelectCountry(country)}
                className="px-4 py-2 text-sm text-white cursor-pointer hover:bg-brand-primary"
                role="option"
                aria-selected={value === country.dial_code}
              >
                {country.flag} {country.name} ({country.dial_code})
              </li>
            )) : (
                <li className="px-4 py-2 text-sm text-brand-muted">No countries found.</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CountryCodeDropdown;
