
import React from 'react';
import GenericServicePage from './GenericServicePage';
import { servicesData } from '../data/servicesData';
import SEO from '../components/SEO';

const LogoDesignPage: React.FC = () => {
  const service = servicesData.find(s => s.id === 'logo-design');

  if (!service) {
    return <div className="text-center py-20">Logo Design services not found.</div>;
  }

  return (
    <>
      <SEO 
        title="Logo Design & Branding Services | Designing Dose"
        description="Create a memorable brand identity with our professional logo design services. Custom logos, brand guidelines, and brochures designed to captivate."
        keywords="Logo Design Ireland, Branding Agency USA, Custom Logo Maker, Corporate Identity Design UK, Brochure Design Services, Professional Graphic Design"
      />
      <GenericServicePage service={service} />
    </>
  );
};

export default LogoDesignPage;
