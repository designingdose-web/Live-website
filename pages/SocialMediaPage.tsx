
import React from 'react';
import GenericServicePage from './GenericServicePage';
import { servicesData } from '../data/servicesData';
import SEO from '../components/SEO';

const SocialMediaPage: React.FC = () => {
  const socialMediaService = servicesData.find(service => service.id === 'social-media');

  if (!socialMediaService) {
    return <div className="text-center py-20">Social Media services not found.</div>;
  }

  return (
    <>
      <SEO 
        title="Social Media Marketing Services | Designing Dose"
        description="Engage your audience and grow your brand with our social media marketing strategies. Facebook, Instagram, LinkedIn, and TikTok management services."
        keywords="Social Media Marketing Ireland, SMM Agency USA, Instagram Growth Strategy, Facebook Ads Management, LinkedIn Marketing UK, Content Creation for Social Media"
      />
      <GenericServicePage service={socialMediaService} />
    </>
  );
};

export default SocialMediaPage;
