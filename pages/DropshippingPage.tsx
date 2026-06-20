
import React from 'react';
import GenericServicePage from './GenericServicePage';
import { servicesData } from '../data/servicesData';
import SEO from '../components/SEO';

const DropshippingPage: React.FC = () => {
  const service = servicesData.find(s => s.id === 'dropshipping');

  if (!service) {
    return <div className="text-center py-20">Dropshipping services not found.</div>;
  }

  return (
    <>
      <SEO 
        title="Dropshipping Store Setup Ireland | Shopify Experts | Designing Dose"
        description="Launch a profitable Shopify dropshipping store with expert setup, niche research and supplier sourcing. Turnkey dropshipping packages from $499."
        keywords="Dropshipping Store Setup, Shopify Dropshipping Experts, Automated E-commerce Business, Dropshipping Ireland, Start Dropshipping USA, Winning Products Research"
      />
      <GenericServicePage service={service} />
    </>
  );
};

export default DropshippingPage;
