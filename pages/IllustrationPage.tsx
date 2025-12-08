
import React from 'react';
import GenericServicePage from './GenericServicePage';
import { servicesData } from '../data/servicesData';
import SEO from '../components/SEO';

const IllustrationPage: React.FC = () => {
  const service = servicesData.find(s => s.id === 'illustration');

  if (!service) {
    return <div className="text-center py-20">Illustration services not found.</div>;
  }

  return (
    <>
      <SEO 
        title="Book Illustration & Cover Design Services | Designing Dose"
        description="Professional illustration services for authors and publishers. Children's book illustrations, e-book covers, and custom character design."
        keywords="Book Illustration Services, Children's Book Illustrator, E-book Cover Design, Custom Illustrations Ireland, Digital Art Services USA, Book Cover Art"
      />
      <GenericServicePage service={service} />
    </>
  );
};

export default IllustrationPage;
