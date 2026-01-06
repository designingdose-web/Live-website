
import React, { createContext, useContext, useState, useEffect } from 'react';

// Added C$ and A$ to distinguish North American and Australian markets from US Dollars
type CurrencySymbol = '$' | '£' | '€' | 'C$' | 'A$';

interface CurrencyContextType {
  symbol: CurrencySymbol;
  countryCode: string;
  formatPrice: (priceStr: string) => string;
  isLoading: boolean;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export const CurrencyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [symbol, setSymbol] = useState<CurrencySymbol>('€');
  const [countryCode, setCountryCode] = useState<string>('IE');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const detectCurrency = async () => {
      // 1. Check local storage first for instant retrieval
      const cachedSymbol = localStorage.getItem('user_currency_symbol');
      const cachedCountry = localStorage.getItem('user_country_code');
      
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
          const detectedCountry: string = data.country_code || 'IE';
          
          let detectedSymbol: CurrencySymbol = '€'; // Default for Rest of World (Asia, Middle East, Europe, etc.)

          switch (detectedCountry) {
            case 'US':
              detectedSymbol = '$';
              break;
            case 'GB':
              detectedSymbol = '£';
              break;
            case 'CA':
              detectedSymbol = 'C$';
              break;
            case 'AU':
              detectedSymbol = 'A$';
              break;
            case 'IE':
              detectedSymbol = '€';
              break;
            default:
              // Global Default remains Euro as requested
              detectedSymbol = '€';
          }

          setSymbol(detectedSymbol);
          setCountryCode(detectedCountry);
          
          localStorage.setItem('user_currency_symbol', detectedSymbol);
          localStorage.setItem('user_country_code', detectedCountry);
        } catch (error) {
          console.warn('Currency detection failed, defaulting to Global/Ireland (EUR).');
          setSymbol('€');
          setCountryCode('IE');
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
   * Handles multi-character symbols like C$ and A$ correctly.
   */
  const formatPrice = (priceStr: string): string => {
    if (!priceStr) return '';
    // This regex looks for common currency symbols and swaps them for our current 'symbol' state
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
