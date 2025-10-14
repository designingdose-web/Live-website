import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ProcessSection: React.FC = () => {
  const approachHeaderRef = useScrollAnimation('slide-in-up');
  
  const approachSteps = [
    { 
      icon: '📝', 
      title: '1. Onboarding', 
      description: 'We kick things off by deeply understanding your brand, goals, and audience to build a tailored strategy for success.' 
    },
    { 
      icon: '🎨', 
      title: '2. Design & Delivery', 
      description: 'Our creative team crafts a stunning, user-centric design, delivering initial concepts within just 2-3 working days.' 
    },
    { 
      icon: '💻', 
      title: '3. Development', 
      description: 'Upon your approval, our developers build a robust, high-performance website, integrating all necessary features.' 
    },
    { 
      icon: '✅', 
      title: '4. Testing & Launch', 
      description: 'We conduct rigorous quality assurance testing to ensure a flawless experience before launching your project to the world.' 
    },
  ];

  return (
    <div className="relative py-20 bg-brand-secondary overflow-hidden">
      <video autoPlay loop muted playsInline className="absolute z-0 w-auto min-w-full min-h-full max-w-none top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover opacity-20">
          <source src="https://cdn.pixabay.com/video/2022/10/24/134449-766157541_large.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-brand-secondary via-brand-secondary/80 to-brand-secondary"></div>
      <div className="relative z-10 container mx-auto px-6">
          <div ref={approachHeaderRef} className="text-center mb-12 animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white">Our Streamlined Process</h2>
              <p className="mt-4 text-lg text-brand-muted">From concept to launch, we guarantee a seamless experience.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {approachSteps.map((step, index) => {
                  const stepRef = useScrollAnimation('slide-in-up');
                  return (
                      <div ref={stepRef} key={index} className="bg-brand-primary/50 p-8 rounded-lg text-center animate-on-scroll border border-brand-accent-start/20 backdrop-blur-md transition-all duration-300 hover:border-brand-accent-start hover:scale-105" style={{ transitionDelay: `${index * 150}ms`}}>
                          <div className="text-5xl mb-4">{step.icon}</div>
                          <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                          <p className="text-brand-muted">{step.description}</p>
                      </div>
                  )
              })}
          </div>
      </div>
    </div>
  );
};

export default ProcessSection;
