
import React from 'react';
import GenericServicePage from './GenericServicePage';
import { servicesData } from '../data/servicesData';

const IllustrationPage: React.FC = () => {
  const service = servicesData.find(s => s.id === 'illustration');

  if (!service) {
    return <div className="text-center py-20">Illustration services not found.</div>;
  }

  return <GenericServicePage service={service} />;
};

export default IllustrationPage;
