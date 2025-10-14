
import React from 'react';
import GenericServicePage from './GenericServicePage';
import { servicesData } from '../data/servicesData';

const SeoPage: React.FC = () => {
  const seoService = servicesData.find(service => service.id === 'seo');

  if (!seoService) {
    return <div className="text-center py-20">SEO services not found.</div>;
  }

  return <GenericServicePage service={seoService} />;
};

export default SeoPage;
