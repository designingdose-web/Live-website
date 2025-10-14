import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import ProcessSection from '../components/ProcessSection';

const AboutPage: React.FC = () => {
    const heroRef = useScrollAnimation('slide-in-up');
    const missionRef = useScrollAnimation('slide-in-left');
    const visionRef = useScrollAnimation('slide-in-right');
    const imageRef = useScrollAnimation('fade-in');

  return (
    <div className="bg-brand-primary text-white overflow-x-hidden">
      {/* Hero Section */}
      <div ref={heroRef} className="py-20 md:py-32 bg-brand-secondary animate-on-scroll">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold">About <span className="gradient-text">Designing Dose</span></h1>
          <p className="mt-4 text-lg md:text-xl text-brand-muted max-w-3xl mx-auto">
            We are a team of passionate creators, strategists, and developers dedicated to helping businesses grow in the digital world.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-20">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
                <div ref={missionRef} className="animate-on-scroll mb-12">
                    <h2 className="text-3xl font-bold mb-4 gradient-text">Our Mission</h2>
                    <p className="text-brand-muted leading-relaxed">
                        To empower businesses of all sizes with innovative, data-driven digital marketing solutions that deliver tangible results. We strive to be more than just a service provider; we aim to be a genuine partner in our clients' success, crafting strategies that foster growth, engagement, and a powerful online presence.
                    </p>
                </div>
                <div ref={visionRef} className="animate-on-scroll">
                    <h2 className="text-3xl font-bold mb-4 gradient-text">Our Vision</h2>
                    <p className="text-brand-muted leading-relaxed">
                        To be a leading force in the digital marketing industry, recognized for our creativity, integrity, and unwavering commitment to client success. We envision a future where every business can unlock its full digital potential through strategic and beautifully executed online experiences.
                    </p>
                </div>
            </div>
             <div ref={imageRef} className="order-1 lg:order-2 animate-on-scroll" style={{transitionDelay: '300ms'}}>
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" alt="Strategy session" className="rounded-lg shadow-2xl object-cover w-full h-full" />
            </div>
        </div>
      </div>

      {/* Our Approach Section */}
      <ProcessSection />
    </div>
  );
};

export default AboutPage;