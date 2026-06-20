
import React from 'react';
import GenericServicePage from './GenericServicePage';
import { servicesData } from '../data/servicesData';
import SEO from '../components/SEO';

const MobileAppPage: React.FC = () => {
  const service = servicesData.find(s => s.id === 'mobile-app');

  if (!service) {
    return <div className="text-center py-20">Mobile App Development services not found.</div>;
  }

  return (
    <>
      <SEO 
        title="Mobile App Development Dublin | iOS & Android Apps | Designing Dose"
        description="Custom iOS and Android app development in Dublin and Ireland. Flutter and React Native experts. From $999. Free consultation available."
        keywords="Mobile App Development Ireland, iOS App Developers USA, Android App Development UK, Flutter Development Agency, React Native Experts, Custom Mobile Apps"
      />
      <GenericServicePage service={service} />
    </>
  );
};

export default MobileAppPage;
