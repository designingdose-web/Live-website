import React from 'react';
import GenericServicePage from './GenericServicePage';
import { servicesData } from '../data/servicesData';

const MobileAppPage: React.FC = () => {
  const service = servicesData.find(s => s.id === 'mobile-app');

  if (!service) {
    return <div className="text-center py-20">Mobile App Development services not found.</div>;
  }

  return <GenericServicePage service={service} />;
};

export default MobileAppPage;