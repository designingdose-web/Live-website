
import React from 'react';
import Banner from '../components/Banner';
import TestimonialsSection from '../components/TestimonialCard';
import ProcessSection from '../components/ProcessSection';
import { servicesData } from '../data/servicesData';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import PricingHighlightCard from '../components/PricingHighlightCard';
import StatsSection from '../components/StatsSection';
import TrustBadges from '../components/TrustBadges';
import TechStackSlider from '../components/TechStackSlider';
import SEO from '../components/SEO';

const PricingHighlight: React.FC = () => {
  const websitePlans = servicesData
    .find(s => s.id === 'website')?.tabs?.find(t => t.tabName === 'Informative')?.plans.slice(0, 4);

  const sectionRef = useScrollAnimation('slide-in-up');
  const headerRef = useScrollAnimation('slide-in-up');

  return (
    <section ref={sectionRef} className="py-12 md:py-20 bg-brand-secondary animate-on-scroll">
      <div className="container mx-auto px-4 md:px-6">
        <div ref={headerRef} className="text-center mb-8 md:mb-12 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Launch Your <span className="gradient-text">Digital Presence</span></h2>
          <p className="mt-3 md:mt-4 text-base md:text-lg text-brand-muted">Solutions designed to deliver maximum impact and value.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 justify-center items-stretch">
          {websitePlans?.map((plan, index) => {
            const cardRef = useScrollAnimation('slide-in-up');
            return (
              plan && <div ref={cardRef} key={index} className="animate-on-scroll" style={{ transitionDelay: `${index * 150}ms`}}><PricingHighlightCard plan={plan} /></div>
            )
          })}
        </div>
         <div className="text-center mt-10 md:mt-16">
            <Link 
              to="/services/website-packages" 
              className="inline-block relative overflow-hidden group py-4 px-12 rounded-full text-lg font-bold text-white bg-brand-secondary/80 backdrop-blur-md gradient-border-mask shadow-none hover:shadow-[0_0_40px_rgba(172,73,176,0.6)] transition-all duration-300 transform hover:-translate-y-1"
            >
              <span className="relative z-10 flex items-center gap-2">
                View All Website Packages
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </span>
              <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-[#AC49B0] to-transparent transform -skew-x-12 transition-all duration-700 group-hover:left-[100%] opacity-80"></div>
            </Link>
          </div>
      </div>
    </section>
  );
};

const WhyChooseUs: React.FC = () => {
  const sectionRef = useScrollAnimation('slide-in-up');
  const headerRef = useScrollAnimation('slide-in-up');

  const features = [
    { 
      icon: (
        <svg className="w-16 h-16 md:w-20 md:h-20 mx-auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="gradResult" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#22D3EE" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
             <filter id="glowResult" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="2" result="blur"/>
                <feComposite in="SourceGraphic" in2="blur" operator="over"/>
            </filter>
          </defs>
          {/* Chart Bars - Removed white trend line */}
          <rect x="4" y="12" width="4" height="8" rx="1" fill="url(#gradResult)" fillOpacity="0.2" stroke="url(#gradResult)" strokeWidth="1.5"/>
          <rect x="10" y="8" width="4" height="12" rx="1" fill="url(#gradResult)" fillOpacity="0.4" stroke="url(#gradResult)" strokeWidth="1.5"/>
          <rect x="16" y="4" width="4" height="16" rx="1" fill="url(#gradResult)" fillOpacity="0.6" stroke="url(#gradResult)" strokeWidth="1.5"/>
        </svg>
      ),
      title: 'Result-Driven', 
      description: 'Our strategies are tailored to meet your specific business goals and deliver measurable results.' 
    },
    { 
      icon: (
        <svg className="w-16 h-16 md:w-20 md:h-20 mx-auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="gradIdea" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#EC4899" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
             <filter id="glowIdea" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="1.5" result="blur"/>
                <feComposite in="SourceGraphic" in2="blur" operator="over"/>
            </filter>
          </defs>
          {/* Tech Nodes */}
          <circle cx="12" cy="12" r="3" fill="url(#gradIdea)" fillOpacity="0.3" stroke="url(#gradIdea)" strokeWidth="1.5" />
          <path d="M12 9V4M12 15V20M15 12H20M9 12H4" stroke="url(#gradIdea)" strokeWidth="1.5" strokeLinecap="round"/>
          <circle cx="12" cy="4" r="1.5" fill="#fff" filter="url(#glowIdea)"/>
          <circle cx="12" cy="20" r="1.5" fill="#fff" filter="url(#glowIdea)"/>
          <circle cx="20" cy="12" r="1.5" fill="#fff" filter="url(#glowIdea)"/>
          <circle cx="4" cy="12" r="1.5" fill="#fff" filter="url(#glowIdea)"/>
          
          {/* Hexagon Frame */}
          <path d="M12 2L20.6603 7V17L12 22L3.33975 17V7L12 2Z" stroke="url(#gradIdea)" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.5"/>
        </svg>
      ),
      title: 'Innovative Solutions', 
      description: 'We stay ahead of the curve, using the latest technologies and trends to keep you competitive.' 
    },
    { 
      icon: (
         <svg className="w-16 h-16 md:w-20 md:h-20 mx-auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="gradSupport" x1="1" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#22D3EE" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
             <filter id="glowSupport" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="2" result="blur"/>
                <feComposite in="SourceGraphic" in2="blur" operator="over"/>
            </filter>
          </defs>
          {/* Hands holding */}
          <path d="M7 19C5 19 3 17 3 14.5C3 12 5.5 10 7.5 12L12 16.5L16.5 12C18.5 10 21 12 21 14.5C21 17 19 19 17 19" stroke="url(#gradSupport)" strokeWidth="2" strokeLinecap="round"/>
          
          {/* Floating Heart/Core */}
          <path d="M12 8L10.8 6.8C10.1 6.1 9.2 6.1 8.5 6.8C7.8 7.5 7.8 8.4 8.5 9.1L12 12.6L15.5 9.1C16.2 8.4 16.2 7.5 15.5 6.8C14.8 6.1 13.9 6.1 13.2 6.8L12 8Z" fill="#fff" filter="url(#glowSupport)"/>
          <path d="M12 12.6L15.5 9.1" stroke="white" strokeWidth="0.5"/>
          
          {/* Connection Arc */}
          <path d="M4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12" stroke="url(#gradSupport)" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2" opacity="0.6"/>
        </svg>
      ),
      title: 'Dedicated Support', 
      description: 'Your success is our priority. Our team provides ongoing support to ensure your digital presence thrives.' 
    },
  ];

  return (
    <section ref={sectionRef} className="py-12 md:py-20 bg-brand-primary animate-on-scroll">
      <div className="container mx-auto px-4 md:px-6">
        <div ref={headerRef} className="text-center mb-8 md:mb-12 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Why Choose <span className="gradient-text">Designing Dose</span>?</h2>
          <p className="mt-3 md:mt-4 text-base md:text-lg text-brand-muted">We're more than a service provider; we're your partner in growth.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => {
             const cardRef = useScrollAnimation('fade-in');
             const iconRef = useScrollAnimation('fade-in');
             const titleRef = useScrollAnimation('slide-in-up');
             const descRef = useScrollAnimation('slide-in-up');
             return (
              <div ref={cardRef} key={index} className="glass-panel p-6 md:p-8 rounded-lg text-center animate-on-scroll transition-all duration-300 group hover:-translate-y-2 hover:shadow-lg hover:shadow-brand-accent-start/20" style={{ transitionDelay: `${index * 150}ms`}}>
                <div ref={iconRef} className="flex justify-center mb-4 md:mb-6 animate-on-scroll transform transition-transform duration-300 group-hover:scale-110" style={{ transitionDelay: `${index * 150 + 150}ms`}}>{feature.icon}</div>
                <h3 ref={titleRef} className="text-xl font-bold text-white mb-2 animate-on-scroll" style={{ transitionDelay: `${index * 150 + 250}ms`}}>{feature.title}</h3>
                <p ref={descRef} className="text-brand-muted text-sm md:text-base animate-on-scroll" style={{ transitionDelay: `${index * 150 + 350}ms`}}>{feature.description}</p>
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
      <SEO 
        title="Designing Dose - Web Development, SEO & Digital Marketing Agency"
        description="Designing Dose is a global digital agency offering Web Development, SEO, Mobile Apps, and Social Media Marketing to help businesses scale online."
        keywords="Web Design Ireland, SEO Company USA, Digital Marketing UK, Mobile App Developers Canada, E-commerce Experts Australia, Dropshipping Services Europe, Software House Pakistan, Designing Dose, Global Digital Agency, Professional Website Builder"
      />
      <Banner />
      <TrustBadges />
      <WhyChooseUs />
      <StatsSection />
      <PricingHighlight />
      <ProcessSection />
      <TestimonialsSection />
      <TechStackSlider />
    </>
  );
};

export default HomePage;
