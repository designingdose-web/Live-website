
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
    <div className="relative py-12 md:py-20 bg-brand-primary overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-brand-primary/90 to-brand-primary"></div>
      <div className="relative z-10 container mx-auto px-4 md:px-6">
          <div ref={approachHeaderRef} className="text-center mb-8 md:mb-12 animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white">Our Streamlined Process</h2>
              <p className="mt-3 md:mt-4 text-base md:text-lg text-brand-muted">From concept to launch, we guarantee a seamless experience.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {approachSteps.map((step, index) => {
                  const stepRef = useScrollAnimation('slide-in-up');
                  return (
                      <div 
                        ref={stepRef} 
                        key={index}
                        className="animate-on-scroll"
                        style={{ transitionDelay: `${index * 150}ms`}}
                      >
                          {/* Inner container handles hover/scale without conflicting with entrance transform */}
                          <div 
                            className="glass-panel bg-brand-secondary/90 border border-white/20 p-6 md:p-8 rounded-2xl text-center transition-all duration-300 hover:border-brand-accent-start hover:scale-105 hover:shadow-2xl hover:shadow-brand-accent-start/20 backface-hidden transform-gpu group h-full" 
                          >
                              <div className="mb-6 relative inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/5 border border-white/10 shadow-[0_0_20px_rgba(139,92,246,0.15)] mx-auto transition-transform duration-300 group-hover:scale-110 group-hover:bg-white/10 group-hover:border-brand-accent-start/30">
                                 <span className="text-3xl md:text-4xl drop-shadow-md">{step.icon}</span>
                              </div>
                              <h3 className="text-lg md:text-xl font-bold text-white mb-3">{step.title}</h3>
                              <p className="text-sm md:text-base text-gray-200 font-medium leading-relaxed">{step.description}</p>
                          </div>
                      </div>
                  )
              })}
          </div>
      </div>
    </div>
  );
};

export default ProcessSection;
