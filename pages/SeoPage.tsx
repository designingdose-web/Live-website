
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
        title="SEO Agency Dublin | SEO Services Ireland & USA | Designing Dose"
        description="Affordable SEO services from Dublin's top-rated agency. Rank on page 1 of Google with proven on-page, off-page and technical SEO. Plans from $299/month."
        keywords="SEO Services Ireland, Search Engine Optimization USA, Rank #1 Google, SEO Agency UK, Technical SEO Audit, Backlink Building, Local SEO Experts"
      />
      <GenericServicePage service={seoService} />
    </>
  );
};

export default SeoPage;
