import React from 'react';
import GenericServicePage from './GenericServicePage';
import { servicesData } from '../data/servicesData';

const DropshippingPage: React.FC = () => {
  const service = servicesData.find(s => s.id === 'dropshipping');

  if (!service) {
    return <div className="text-center py-20">Dropshipping services not found.</div>;
  }

  return <GenericServicePage service={service} />;
};

export default DropshippingPage;