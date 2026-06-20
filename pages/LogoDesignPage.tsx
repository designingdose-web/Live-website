
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
        title="Logo Design Ireland | Brand Identity Services | Designing Dose"
        description="Professional logo design and brand identity packages for Irish and international businesses. Unique, custom logos from $99. Delivered in 5 days."
        keywords="Logo Design Ireland, Branding Agency USA, Custom Logo Maker, Corporate Identity Design UK, Brochure Design Services, Professional Graphic Design"
      />
      <GenericServicePage service={service} />
    </>
  );
};

export default LogoDesignPage;
