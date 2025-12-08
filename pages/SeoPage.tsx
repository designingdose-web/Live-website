
import React from 'react';
import GenericServicePage from './GenericServicePage';
import { servicesData } from '../data/servicesData';
import SEO from '../components/SEO';

const SeoPage: React.FC = () => {
  const seoService = servicesData.find(service => service.id === 'seo');

  if (!seoService) {
    return <div className="text-center py-20">SEO services not found.</div>;
  }

  return (
    <>
      <SEO 
        title="SEO Services - Boost Rankings & Traffic | Designing Dose"
        description="Dominate search results with our data-driven SEO services. On-page, Off-page, and Technical SEO strategies tailored for Ireland, USA, UK, and Global markets."
        keywords="SEO Services Ireland, Search Engine Optimization USA, Rank #1 Google, SEO Agency UK, Technical SEO Audit, Backlink Building, Local SEO Experts"
      />
      <GenericServicePage service={seoService} />
    </>
  );
};

export default SeoPage;
