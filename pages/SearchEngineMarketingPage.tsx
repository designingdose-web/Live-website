
import React from 'react';
import GenericServicePage from './GenericServicePage';
import { servicesData } from '../data/servicesData';
import SEO from '../components/SEO';

const SearchEngineMarketingPage: React.FC = () => {
  const service = servicesData.find(service => service.id === 'search-engine-marketing-sem');

  if (!service) {
    return <div className="text-center py-20">Search Engine Marketing (SEM) services not found.</div>;
  }

  return (
    <>
      <SEO 
        title="Search Engine Marketing (SEM) | SEO & PPC Agency | Designing Dose"
        description="Dominate search results with our expert Search Engine Marketing (SEM) services. Proven SEO dominance and high-performance PPC management for global brands."
        keywords="Search Engine Marketing, SEM Agency, SEO Services, PPC Management, Google Ads Experts, Pay Per Click Ireland, Technical SEO, Search Marketing USA"
      />
      <GenericServicePage service={service} />
    </>
  );
};

export default SearchEngineMarketingPage;
