
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
        title="Dropshipping Store Setup & Automation | Designing Dose"
        description="Launch a profitable dropshipping business with our turnkey store setup services. Niche research, supplier sourcing, and automated Shopify solutions."
        keywords="Dropshipping Store Setup, Shopify Dropshipping Experts, Automated E-commerce Business, Dropshipping Ireland, Start Dropshipping USA, Winning Products Research"
      />
      <GenericServicePage service={service} />
    </>
  );
};

export default DropshippingPage;
