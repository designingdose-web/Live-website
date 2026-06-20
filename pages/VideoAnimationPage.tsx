
import React from 'react';
import GenericServicePage from './GenericServicePage';
import { servicesData } from '../data/servicesData';
import SEO from '../components/SEO';

const VideoAnimationPage: React.FC = () => {
  const service = servicesData.find(s => s.id === 'video-animation');

  if (!service) {
    return <div className="text-center py-20">Video Animation services not found.</div>;
  }

  return (
    <>
      <SEO 
        title="Video Animation Services Ireland | Explainer Videos | Designing Dose"
        description="Explainer videos, motion graphics and corporate animations for Irish and global brands. Boost conversions with professional video marketing from $299."
        keywords="Video Animation Services, Explainer Video Production, Motion Graphics Studio, Corporate Video Makers Ireland, 2D Animation USA, Marketing Videos UK"
      />
      <GenericServicePage service={service} />
    </>
  );
};

export default VideoAnimationPage;
