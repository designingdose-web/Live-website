
import React from 'react';
import ReactDOM from 'react-dom/client';
import App, { SmartRouter } from './App';
import './index.css';
import { CurrencyProvider } from './context/CurrencyContext';

// Intercept console.error to filter out third-party/external errors
function suppressExternalErrors() {
  const originalError = console.error;
  console.error = function (...args: any[]) {
    const errorStr = args.map(arg => {
      try {
        if (arg instanceof Error) return arg.message + '\n' + (arg.stack || '');
        if (typeof arg === 'object' && arg !== null) return JSON.stringify(arg);
        return String(arg);
      } catch (e) {
        return String(arg);
      }
    }).join(' ');

    const lowerStr = errorStr.toLowerCase();
    const isExternal = 
      lowerStr.includes('tidio') || 
      lowerStr.includes('ipapi') || 
      lowerStr.includes('cloudinary');
      
    if (isExternal) {
      // Silently filter out known external third party script or asset load errors
      return;
    }
    
    originalError.apply(console, args);
  };
}

suppressExternalErrors();

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <SmartRouter>
      <CurrencyProvider>
        <App />
      </CurrencyProvider>
    </SmartRouter>
  </React.StrictMode>
);
