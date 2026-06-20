import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import ProcessSection from '../components/ProcessSection';
import TrustBadges from '../components/TrustBadges';
import StatsSection from '../components/StatsSection';
import SEO from '../components/SEO';

const AboutPage: React.FC = () => {
    const heroRef = useScrollAnimation('slide-in-up');
    const storyRef = useScrollAnimation('fade-in');
    const storyImageRef = useScrollAnimation('slide-in-right');
    const successRef = useScrollAnimation('slide-in-up');
    const missionRef = useScrollAnimation('slide-in-left');
    const visionRef = useScrollAnimation('slide-in-right');

    const ourJourneyImage = "https://res.cloudinary.com/dmaqptknc/image/upload/v1765158192/success_story_jqg375.webp";
    const successStoryImage = "https://res.cloudinary.com/dmaqptknc/image/upload/v1765158640/ABS2GSmTuj-U9bayKHm5CzZ0gyBU6BrE_nqsdqp.webp";
    const missionVisionImage = "https://res.cloudinary.com/dmaqptknc/image/upload/v1765160587/mv2_kv4cfp.webp";

  return (
    <>
      <SEO 
        title="About Us | Digital Agency Dublin | Designing Dose"
        description="Meet the team behind Designing Dose — Dublin's digital agency with 10+ years of experience, 1,000+ clients and offices in Ireland, USA, UK and Canada."
        keywords="About Designing Dose, Digital Agency Team, Our Mission, Tech Innovators, Business Growth Partners"
      />
      <div className="bg-brand-primary text-white overflow-x-hidden">
        <div ref={heroRef} className="pt-28 pb-20 md:pt-40 md:pb-32 bg-brand-secondary animate-on-scroll relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-accent-start/5 to-transparent pointer-events-none"></div>
          
          <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
            <h1 className="text-4xl md:text-7xl font-extrabold mb-6">We Are <span className="gradient-text">Designing Dose</span></h1>
            <p className="text-lg md:text-2xl text-brand-muted max-w-3xl mx-auto leading-relaxed">
              Architects of the digital future. We combine strategic engineering with creative brilliance to build brands that dominate their markets.
            </p>
          </div>
        </div>

        <StatsSection />

        <section className="py-16 md:py-24 bg-brand-primary relative">
          <div className="container mx-auto px-4 md:px-6">
              <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                  <div ref={storyRef} className="animate-on-scroll">
                      <span className="text-brand-accent-middle font-bold tracking-wider uppercase text-sm mb-2 block">Our Journey</span>
                      <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">A Decade of <span className="gradient-text">Innovation</span></h2>
                      <div className="space-y-6 text-brand-muted text-base md:text-lg leading-relaxed">
                          <p>
                              Designing Dose wasn't founded on a whim. It began over 10 years ago as a strategic <strong>joint corporation</strong>, uniting two distinct worlds: elite software engineering and high-end creative design. We recognized a flaw in the industry—agencies were either technically proficient but creatively stale, or visually stunning but functionally broken.
                          </p>
                          <p>
                              We set out to be the exception. By merging these disciplines under one roof, we created a powerhouse capable of handling complex challenges for big players. From scalable e-commerce infrastructures to enterprise-grade mobile apps, our "joint force" approach ensures every pixel serves a purpose and every line of code drives growth.
                          </p>
                          <p>
                              Today, we help other businesses—from ambitious startups to Fortune 500 companies—navigate the digital landscape. We don't just build websites; we build engines for revenue, turning passive visitors into loyal brand advocates.
                          </p>
                      </div>
                  </div>
                  <div ref={storyImageRef} className="relative animate-on-scroll aspect-video md:aspect-[4/3]" style={{ transitionDelay: '200ms' }}>
                      <div className="absolute inset-0 bg-gradient-to-tr from-brand-accent-start to-brand-accent-end rounded-2xl transform rotate-3 opacity-20 blur-lg"></div>
                      <img 
                          src={ourJourneyImage} 
                          alt="Designing Dose team collaborating on digital innovation projects over the last decade" 
                          className="relative rounded-2xl shadow-2xl border border-gray-800 w-full h-full object-cover"
                          loading="lazy"
                          width="800"
                          height="600"
                      />
                  </div>
              </div>
          </div>
        </section>

        <section ref={successRef} className="py-16 md:py-24 bg-brand-secondary border-y border-gray-800 animate-on-scroll">
          <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-white">Playing in the <span className="gradient-text">Big Leagues</span></h2>
                  <p className="mt-4 text-brand-muted max-w-2xl mx-auto">
                      We've proven our mettle by delivering high-stakes solutions for major corporations. Here is just one example of how we transform businesses.
                  </p>
              </div>

              <div className="bg-gradient-to-br from-brand-primary to-[#161B22] border border-brand-accent-start/20 rounded-3xl p-8 md:p-12 shadow-[0_0_50px_rgba(139,92,246,0.1)] relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent-middle/10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>

                  <div className="grid md:grid-cols-2 gap-10 items-center relative z-10">
                      <div>
                          <div className="inline-block px-4 py-1 bg-brand-accent-start/20 text-brand-accent-start rounded-full text-xs font-bold uppercase mb-6">Success Story</div>
                          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">The Enterprise E-commerce Overhaul</h3>
                          <p className="text-brand-muted mb-6 leading-relaxed">
                              A leading retail giant approached us with a fragmented digital ecosystem. Their legacy systems were slow, mobile-unfriendly, and losing market share to agile competitors. They needed more than a facelift; they needed a digital revolution.
                          </p>
                          <ul className="space-y-4 mb-8">
                              <li className="flex items-start">
                                  <div className="bg-green-500/20 p-1 rounded-full mr-3 mt-1">
                                      <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                                  </div>
                                  <span className="text-gray-300"><strong>400% Increase</strong> in mobile conversion rates within 3 months.</span>
                              </li>
                              <li className="flex items-start">
                                  <div className="bg-green-500/20 p-1 rounded-full mr-3 mt-1">
                                      <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                                  </div>
                                  <span className="text-gray-300">Seamless integration of <strong>AI-driven inventory management</strong>.</span>
                              </li>
                              <li className="flex items-start">
                                  <div className="bg-green-500/20 p-1 rounded-full mr-3 mt-1">
                                      <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                                  </div>
                                  <span className="text-gray-300">Reduced page load times from 4.2s to <strong>0.8s</strong> globally.</span>
                              </li>
                          </ul>
                      </div>
                      <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl border border-gray-700 group">
                          <img 
                              src={successStoryImage} 
                              alt="Enterprise e-commerce mobile app interface showing increased conversion rates" 
                              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                              width="800"
                              height="450"
                          />
                          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                      </div>
                  </div>
              </div>
          </div>
        </section>

        <TrustBadges className="bg-brand-primary/50" />

        <div className="py-16 md:py-24 bg-brand-primary relative">
          <div className="container mx-auto px-4 md:px-6">
              <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
                  <div className="space-y-12">
                      <div ref={missionRef} className="animate-on-scroll bg-brand-secondary/30 p-8 rounded-2xl border border-gray-800 hover:border-brand-accent-start/30 transition-colors">
                          <div className="w-12 h-12 bg-brand-accent-start/20 rounded-lg flex items-center justify-center mb-6 text-brand-accent-start">
                              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                          </div>
                          <h2 className="text-2xl font-bold mb-4 text-white">Our Mission</h2>
                          <p className="text-brand-muted leading-relaxed">
                              To empower businesses of all sizes with innovative, data-driven digital marketing solutions that deliver tangible results. We strive to be more than just a service provider; we aim to be a genuine partner in our clients' success, crafting strategies that foster growth, engagement, and a powerful online presence.
                          </p>
                      </div>
                      <div ref={visionRef} className="animate-on-scroll bg-brand-secondary/30 p-8 rounded-2xl border border-gray-800 hover:border-brand-accent-end/30 transition-colors">
                          <div className="w-12 h-12 bg-brand-accent-end/20 rounded-lg flex items-center justify-center mb-6 text-brand-accent-end">
                              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                          </div>
                          <h2 className="text-2xl font-bold mb-4 text-white">Our Vision</h2>
                          <p className="text-brand-muted leading-relaxed">
                              To be a leading force in the digital marketing industry, recognized for our creativity, integrity, and unwavering commitment to client success. We envision a future where every business can unlock its full digital potential through strategic and beautifully executed online experiences.
                          </p>
                      </div>
                  </div>
                  <div className="block sticky top-24 aspect-[3/4] overflow-hidden rounded-2xl shadow-2xl border border-gray-800">
                      <img 
                          src={missionVisionImage} 
                          alt="Futuristic digital landscape representing Designing Dose's vision for marketing innovation" 
                          className="w-full h-full object-cover filter saturate-[.85]"
                          loading="lazy"
                          width="600"
                          height="800"
                      />
                      <div className="absolute -bottom-6 -left-6 bg-brand-secondary p-6 rounded-xl border border-brand-accent-middle/30 shadow-xl max-w-xs hidden md:block">
                          <p className="text-brand-accent-middle font-bold text-4xl mb-1">10+</p>
                          <p className="text-white font-semibold">Years of redefining digital standards.</p>
                      </div>
                  </div>
              </div>
          </div>
        </div>

        <ProcessSection />
      </div>
    </>
  );
};

export default AboutPage;