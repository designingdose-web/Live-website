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
        title="Contact Us | Free Quote | Digital Agency Dublin | Designing Dose"
        description="Get a free quote from Designing Dose today. Web design, SEO, mobile apps and more. Dublin office: +353 87 963 0583. Chat on WhatsApp anytime."
        keywords="Contact Designing Dose, Free Quote Web Design, Hire SEO Agency, Digital Marketing Consultation"
      />
      <div className="pt-28 pb-12 md:pt-36 md:pb-20 bg-brand-primary overflow-x-hidden">
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
                  <p className="flex items-start"><span className="mr-2 mt-1">📍</span> 77 Camden Street Lower, Saint Kevin’s, Dublin, D02 XE80, Ireland</p>
                  <a href="tel:+35312548762" className="flex items-center mt-2 hover:text-brand-accent-end transition-colors"><span className="mr-2">📞</span> PHONE: +353 1 254 8762</a>
                  
                  {/* WhatsApp Link */}
                  <a 
                    href="https://wa.me/35312548762" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center mt-2 text-[#25D366] hover:text-[#128C7E] transition-colors font-semibold"
                  >
                    <span className="mr-2 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
                            <path fill="#25D366" d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2z"/>
                            <path fill="#FFF" d="M17.36 14.39c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.19-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.67-1.62-.92-2.21-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.08-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.06 2.88 1.21 3.07.15.2 2.09 3.19 5.08 4.48.71.3 1.27.49 1.7.63.71.23 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.08-.13-.27-.2-.57-.35z"/>
                        </svg>
                    </span> 
                    WhatsApp
                  </a>

                  <a href="mailto:info@designingdose.com" className="flex items-center mt-2 hover:text-brand-accent-end transition-colors"><span className="mr-2">✉️</span> EMAIL: info@designingdose.com</a>
                </div>
                <div>
                  <h3 className="font-semibold text-white text-base md:text-lg mb-2">United States Office</h3>
                  <p className="flex items-start"><span className="mr-2 mt-1">📍</span> 18952 MacArthur Blvd Suite 100, Irvine, CA 92612, USA</p>
                  <a href="tel:+19497043031" className="flex items-center mt-2 hover:text-brand-accent-end transition-colors"><span className="mr-2">📞</span> PHONE: +1 949 704 3031</a>
                  <a 
                    href="https://wa.me/19497043031" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center mt-2 text-[#25D366] hover:text-[#128C7E] transition-colors font-semibold"
                  >
                    <span className="mr-2 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
                            <path fill="#25D366" d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2z"/>
                            <path fill="#FFF" d="M17.36 14.39c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.19-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.67-1.62-.92-2.21-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.08-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.06 2.88 1.21 3.07.15.2 2.09 3.19 5.08 4.48.71.3 1.27.49 1.7.63.71.23 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.08-.13-.27-.2-.57-.35z"/>
                        </svg>
                    </span> 
                    WhatsApp
                  </a>
                  <a href="mailto:info@designingdose.com" className="flex items-center mt-2 hover:text-brand-accent-end transition-colors"><span className="mr-2">✉️</span> EMAIL: info@designingdose.com</a>
                </div>
                <div>
                  <h3 className="font-semibold text-white text-base md:text-lg mb-2">Canada Office</h3>
                  <p className="flex items-start"><span className="mr-2 mt-1">📍</span> 331 1st Avenue North, Saskatoon, Saskatchewan, S7K 1X2, Canada</p>
                  <a href="tel:+19497043031" className="flex items-center mt-2 hover:text-brand-accent-end transition-colors"><span className="mr-2">📞</span> PHONE: +1 949 704 3031</a>
                  <a 
                    href="https://wa.me/19497043031" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center mt-2 text-[#25D366] hover:text-[#128C7E] transition-colors font-semibold"
                  >
                    <span className="mr-2 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
                            <path fill="#25D366" d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2z"/>
                            <path fill="#FFF" d="M17.36 14.39c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.19-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.67-1.62-.92-2.21-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.08-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.06 2.88 1.21 3.07.15.2 2.09 3.19 5.08 4.48.71.3 1.27.49 1.7.63.71.23 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.08-.13-.27-.2-.57-.35z"/>
                        </svg>
                    </span> 
                    WhatsApp
                  </a>
                  <a href="mailto:info@designingdose.com" className="flex items-center mt-2 hover:text-brand-accent-end transition-colors"><span className="mr-2">✉️</span> EMAIL: info@designingdose.com</a>
                </div>
                <div>
                  <h3 className="font-semibold text-white text-base md:text-lg mb-2">UK Office</h3>
                  <p className="flex items-start"><span className="mr-2 mt-1">📍</span> Quadrant House, Broad Street Mall, Reading, Berkshire, RG1 7QE, UK</p>
                  <a href="tel:+447916689613" className="flex items-center mt-2 hover:text-brand-accent-end transition-colors"><span className="mr-2">📞</span> PHONE: +44 7916689613</a>
                  <a 
                    href="https://wa.me/447916689613" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center mt-2 text-[#25D366] hover:text-[#128C7E] transition-colors font-semibold"
                  >
                    <span className="mr-2 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
                            <path fill="#25D366" d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2z"/>
                            <path fill="#FFF" d="M17.36 14.39c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.19-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.67-1.62-.92-2.21-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.08-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.06 2.88 1.21 3.07.15.2 2.09 3.19 5.08 4.48.71.3 1.27.49 1.7.63.71.23 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.08-.13-.27-.2-.57-.35z"/>
                        </svg>
                    </span> 
                    WhatsApp
                  </a>
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