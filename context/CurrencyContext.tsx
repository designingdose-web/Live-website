import React, { createContext, useContext, useState, useEffect } from 'react';

type CurrencySymbol = '$' | '£' | '€';

interface CurrencyContextType {
  symbol: CurrencySymbol;
  formatPrice: (priceStr: string) => string;
  isLoading: boolean;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export const CurrencyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [symbol, setSymbol] = useState<CurrencySymbol>('€');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const detectCurrency = async () => {
      // 1. Check local storage first for instant retrieval
      const cached = localStorage.getItem('user_currency_symbol');
      if (cached) {
        setSymbol(cached as CurrencySymbol);
        setIsLoading(false);
        return;
      }

      // Performance Optimization: Defer network-based currency detection to after initial load
      const delayTimer = setTimeout(async () => {
        try {
          // 2. Fast, non-blocking Geo-IP check (Timeout after 1s to prevent slow loads)
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 1000);

          const response = await fetch('https://ipapi.co/json/', { signal: controller.signal });
          clearTimeout(timeoutId);
          
          const data = await response.json();
          
          let detectedSymbol: CurrencySymbol = '€';
          if (data.country_code === 'US') detectedSymbol = '$';
          else if (data.country_code === 'GB') detectedSymbol = '£';

          setSymbol(detectedSymbol);
          localStorage.setItem('user_currency_symbol', detectedSymbol);
        } catch (error) {
          console.warn('Currency detection failed or timed out, defaulting to EUR.');
          setSymbol('€');
        } finally {
          setIsLoading(false);
        }
      }, 2500);

      return () => clearTimeout(delayTimer);
    };

    detectCurrency();
  }, []);

  const formatPrice = (priceStr: string): string => {
    if (!priceStr) return '';
    return priceStr.replace(/[€$£]/g, symbol);
  };

  return (
    <CurrencyContext.Provider value={{ symbol, formatPrice, isLoading }}>
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