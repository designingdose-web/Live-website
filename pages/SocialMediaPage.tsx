
import React from 'react';
import GenericServicePage from './GenericServicePage';
import { servicesData } from '../data/servicesData';

const SocialMediaPage: React.FC = () => {
  const socialMediaService = servicesData.find(service => service.id === 'social-media');

  if (!socialMediaService) {
    return <div className="text-center py-20">Social Media services not found.</div>;
  }

  return <GenericServicePage service={socialMediaService} />;
};

export default SocialMediaPage;
