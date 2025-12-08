
import React from 'react';
import ContactForm from '../components/ContactForm';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SEO from '../components/SEO';

const ContactPage: React.FC = () => {
    const headerRef = useScrollAnimation('slide-in-up');
    const infoRef = useScrollAnimation('slide-in-left');
    const formRef = useScrollAnimation('slide-in-right');

  return (
    <>
      <SEO 
        title="Contact Designing Dose | Get a Free Quote"
        description="Ready to scale? Contact Designing Dose today for a consultation on Web Development, SEO, or Mobile App projects. Offices in Ireland and USA."
        keywords="Contact Designing Dose, Free Quote Web Design, Hire SEO Agency, Digital Marketing Consultation"
      />
      <div className="py-12 md:py-20 bg-brand-primary overflow-x-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div ref={headerRef} className="text-center mb-10 md:mb-16 animate-on-scroll">
            <h1 className="text-3xl md:text-5xl font-extrabold text-white">Get In <span className="gradient-text">Touch</span></h1>
            <p className="mt-4 text-base md:text-lg max-w-3xl mx-auto text-brand-muted">
              Have a project in mind or just want to say hello? We'd love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
            {/* Contact Info */}
            <div ref={infoRef} className="bg-brand-secondary p-6 md:p-8 rounded-lg animate-on-scroll">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">Contact Information</h2>
              <div className="space-y-6 md:space-y-8 text-brand-muted text-sm md:text-base">
                <div>
                  <h3 className="font-semibold text-white text-base md:text-lg mb-2">Ireland Office</h3>
                  <p className="flex items-start"><span className="mr-2 mt-1">📍</span> 77 Camden Street Lower,Saint Kevin’s, Dublin, D02 XE80, Ireland</p>
                  <a href="tel:+35312548762" className="flex items-center mt-2 hover:text-brand-accent-end transition-colors"><span className="mr-2">📞</span> PHONE: +353 1 254 8762</a>
                  <a href="https://wa.me/35312548762" target="_blank" rel="noopener noreferrer" className="flex items-center mt-2 hover:text-brand-accent-end transition-colors"><span className="mr-2">💬</span> WhatsApp</a>
                  <a href="mailto:info@designingdose.com" className="flex items-center mt-2 hover:text-brand-accent-end transition-colors"><span className="mr-2">✉️</span> EMAIL: info@designingdose.com</a>
                </div>
                <div>
                  <h3 className="font-semibold text-white text-base md:text-lg mb-2">United States Office</h3>
                  <p className="flex items-start"><span className="mr-2 mt-1">📍</span> Herkimer Street. Brooklyn, NY 11213, United States</p>
                  <a href="tel:+19295636983" className="flex items-center mt-2 hover:text-brand-accent-end transition-colors"><span className="mr-2">📞</span> PHONE: (929) 563-6983</a>
                  <a href="mailto:info@designingdose.com" className="flex items-center mt-2 hover:text-brand-accent-end transition-colors"><span className="mr-2">✉️</span> EMAIL: info@designingdose.com</a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div 
              ref={formRef} 
              className="animate-on-scroll" 
              style={{
                transitionDelay: '200ms', 
                boxShadow: '0 0 40px rgba(139, 92, 246, 0.2), 0 0 60px rgba(236, 72, 153, 0.2)'
              }}
            >
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
