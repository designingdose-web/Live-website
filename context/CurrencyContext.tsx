
import React, { createContext, useContext, useState, useEffect } from 'react';

// Simplified types to support the new universal strategy
type CurrencySymbol = '$' | '£' | '€';

interface CurrencyContextType {
  symbol: CurrencySymbol;
  countryCode: string;
  formatPrice: (priceStr: string) => string;
  isLoading: boolean;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

// List of official Eurozone country codes for explicit detection
const EUROZONE_COUNTRIES = [
  'AT', 'BE', 'HR', 'CY', 'EE', 'FI', 'FR', 'DE', 'GR', 
  'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL', 'PT', 'SK', 'SI', 'ES'
];

export const CurrencyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [symbol, setSymbol] = useState<CurrencySymbol>('$');
  const [countryCode, setCountryCode] = useState<string>('US');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const detectCurrency = async () => {
      // 1. Check local storage first for instant retrieval
      let cachedSymbol: string | null = null;
      let cachedCountry: string | null = null;
      try {
        cachedSymbol = localStorage.getItem('user_currency_symbol');
        cachedCountry = localStorage.getItem('user_country_code');
      } catch (e) {
        // Silently ignore storage errors under strict/headless/private settings
      }
      
      if (cachedSymbol && cachedCountry) {
        setSymbol(cachedSymbol as CurrencySymbol);
        setCountryCode(cachedCountry);
        setIsLoading(false);
        return;
      }

      // Performance Optimization: Defer network-based currency detection
      const delayTimer = setTimeout(async () => {
        try {
          // 2. Fast, non-blocking Geo-IP check
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 1500);

          const response = await fetch('https://ipapi.co/json/', { signal: controller.signal });
          clearTimeout(timeoutId);
          
          const data = await response.json();
          const detectedCountry: string = data.country_code || 'US';
          
          let detectedSymbol: CurrencySymbol = '$'; // Default to Dollar for the Rest of the World

          if (detectedCountry === 'GB') {
            detectedSymbol = '£';
          } else if (EUROZONE_COUNTRIES.includes(detectedCountry)) {
            detectedSymbol = '€';
          } else {
            // All other regions (USA, Canada, Australia, Asia, Middle East, etc.) use Dollar
            detectedSymbol = '$';
          }

          setSymbol(detectedSymbol);
          setCountryCode(detectedCountry);
          
          try {
            localStorage.setItem('user_currency_symbol', detectedSymbol);
            localStorage.setItem('user_country_code', detectedCountry);
          } catch (e) {
            // Silently ignore storage errors
          }
        } catch (error) {
          console.warn('Currency detection failed, defaulting to Global ($).');
          setSymbol('$');
          setCountryCode('US');
        } finally {
          setIsLoading(false);
        }
      }, 2000);

      return () => clearTimeout(delayTimer);
    };

    detectCurrency();
  }, []);

  /**
   * Replaces existing currency symbols in the data strings with the detected regional symbol.
   * Now simplified for clean $, £, or € symbols.
   */
  const formatPrice = (priceStr: string): string => {
    if (!priceStr) return '';
    // This regex looks for common currency symbols (Euro, Dollar, Pound) 
    // and swaps them for our current 'symbol' state
    return priceStr.replace(/[€$£]/g, symbol);
  };

  return (
    <CurrencyContext.Provider value={{ symbol, countryCode, formatPrice, isLoading }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};
