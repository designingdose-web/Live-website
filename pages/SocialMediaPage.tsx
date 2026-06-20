
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
        title="Social Media Marketing Agency Dublin | Ireland & USA | Designing Dose"
        description="Grow your brand on Instagram, Facebook, LinkedIn and TikTok. Social media management plans from Dublin's top-rated agency. From $199/month."
        keywords="Social Media Marketing Ireland, SMM Agency USA, Instagram Growth Strategy, Facebook Ads Management, LinkedIn Marketing UK, Content Creation for Social Media"
      />
      <GenericServicePage service={socialMediaService} />
    </>
  );
};

export default SocialMediaPage;
