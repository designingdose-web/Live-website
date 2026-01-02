
import React from 'react';
import GenericServicePage from './GenericServicePage';
import { servicesData } from '../data/servicesData';
import SEO from '../components/SEO';

const SearchMarketingPage: React.FC = () => {
  const service = servicesData.find(service => service.id === 'search-marketing');

  if (!service) {
    return <div className="text-center py-20">Search Marketing services not found.</div>;
  }

  return (
    <>
      <SEO 
        title="Search Marketing Agency | SEO & PPC Services | Designing Dose"
        description="Dominate search results with our combined Search Marketing services. High-intent SEO and high-conversion PPC campaigns tailored for global growth."
        keywords="Search Marketing Agency, SEO Services, PPC Management, Google Ads Experts, Search Engine Marketing, Lead Generation PPC, Technical SEO"
      />
      <GenericServicePage service={service} />
    </>
  );
};

export default SearchMarketingPage;
