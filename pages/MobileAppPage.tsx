
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
        title="Mobile App Development Services | iOS & Android | Designing Dose"
        description="Build high-performance mobile apps for iOS and Android. Native and Cross-platform solutions (Flutter/React Native) tailored for business growth."
        keywords="Mobile App Development Ireland, iOS App Developers USA, Android App Development UK, Flutter Development Agency, React Native Experts, Custom Mobile Apps"
      />
      <GenericServicePage service={service} />
    </>
  );
};

export default MobileAppPage;
