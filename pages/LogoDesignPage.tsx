import React from 'react';
import GenericServicePage from './GenericServicePage';
import { servicesData } from '../data/servicesData';

const LogoDesignPage: React.FC = () => {
  const service = servicesData.find(s => s.id === 'logo-design');

  if (!service) {
    return <div className="text-center py-20">Logo Design services not found.</div>;
  }

  return <GenericServicePage service={service} />;
};

export default LogoDesignPage;