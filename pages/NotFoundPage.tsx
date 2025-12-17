
import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const NotFoundPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="Page Not Found | Designing Dose"
        description="The page you are looking for doesn't exist. Return to Designing Dose home."
        keywords="404, Page Not Found, Designing Dose"
      />
      <div className="min-h-screen bg-brand-primary flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-6xl md:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-accent-start via-brand-accent-middle to-brand-accent-end mb-4">
          404
        </h1>
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">
          Lost in Digital Space?
        </h2>
        <p className="text-brand-muted max-w-lg mb-10 text-lg">
          The page you are looking for has been moved, deleted, or possibly never existed.
        </p>
        <Link 
          to="/" 
          className="px-8 py-3 bg-brand-secondary border border-brand-accent-middle/50 rounded-full text-white font-bold hover:bg-brand-accent-middle hover:border-transparent transition-all duration-300 shadow-[0_0_20px_rgba(236,72,153,0.3)]"
        >
          Return Home
        </Link>
      </div>
    </>
  );
};

export default NotFoundPage;
