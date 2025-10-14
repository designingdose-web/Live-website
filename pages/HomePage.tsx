import React from 'react';
import Banner from '../components/Banner';
import TestimonialsSection from '../components/TestimonialCard';
import ProcessSection from '../components/ProcessSection';
import { servicesData } from '../data/servicesData';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import PricingHighlightCard from '../components/PricingHighlightCard';

const PricingHighlight: React.FC = () => {
  const websitePlans = servicesData
    .find(s => s.id === 'website')?.tabs?.find(t => t.tabName === 'Informative')?.plans.slice(0, 4);

  const sectionRef = useScrollAnimation('slide-in-up');
  const headerRef = useScrollAnimation('slide-in-up');

  return (
    <section ref={sectionRef} className="py-20 bg-brand-secondary animate-on-scroll">
      <div className="container mx-auto px-6">
        <div ref={headerRef} className="text-center mb-12 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Launch Your <span className="gradient-text">Digital Presence</span></h2>
          <p className="mt-4 text-lg text-brand-muted">Solutions designed to deliver maximum impact and value.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center items-stretch">
          {websitePlans?.map((plan, index) => {
            const cardRef = useScrollAnimation('slide-in-up');
            return (
              plan && <div ref={cardRef} key={index} className="animate-on-scroll" style={{ transitionDelay: `${index * 150}ms`}}><PricingHighlightCard plan={plan} /></div>
            )
          })}
        </div>
         <div className="text-center mt-16">
            <Link to="/services/website-packages" className="bg-gradient-to-r from-brand-accent-start via-brand-accent-middle to-brand-accent-end text-white font-bold py-3 px-8 rounded-full text-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105">
              View All Website Packages
            </Link>
          </div>
      </div>
    </section>
  );
};

const WhyChooseUs: React.FC = () => {
  const sectionRef = useScrollAnimation('slide-in-up');
  const features = [
    { icon: '🎯', title: 'Result-Driven', description: 'Our strategies are tailored to meet your specific business goals and deliver measurable results.' },
    { icon: '💡', title: 'Innovative Solutions', description: 'We stay ahead of the curve, using the latest technologies and trends to keep you competitive.' },
    { icon: '🤝', title: 'Dedicated Support', description: 'Your success is our priority. Our team provides ongoing support to ensure your digital presence thrives.' },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-brand-primary animate-on-scroll">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Why Choose <span className="gradient-text">Designing Dose</span>?</h2>
          <p className="mt-4 text-lg text-brand-muted">We're more than a service provider; we're your partner in growth.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
             const featureRef = useScrollAnimation('slide-in-up');
             return (
              <div ref={featureRef} key={index} className="bg-brand-secondary p-8 rounded-lg text-center animate-on-scroll border border-transparent hover:border-brand-accent-start transition-all duration-300" style={{ transitionDelay: `${index * 150}ms`}}>
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-brand-muted">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
}


const HomePage: React.FC = () => {
  return (
    <>
      <Banner />
      <WhyChooseUs />
      <PricingHighlight />
      <ProcessSection />
      <TestimonialsSection />
    </>
  );
};

export default HomePage;