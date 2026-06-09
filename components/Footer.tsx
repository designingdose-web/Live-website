
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Star = ({ className, fill = "currentColor" }: { className?: string; fill?: string }) => (
  <svg viewBox="0 0 24 24" fill={fill} className={className} aria-hidden="true">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-brand-secondary pt-10 overflow-hidden border-t border-white/10">
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-brand-muted">
          <div className="md:col-span-1">
            <div className="h-10 w-48" aria-hidden="false">
              <Logo className="h-10 w-auto" />
            </div>
            <p className="mt-4 text-sm max-w-sm leading-relaxed">
              Designing Dose is a growth-focused digital marketing agency. We help businesses scale their revenue with our expertise in SEO, Web Development, and Social Media Marketing.
            </p>
            
            <div className="mt-6 flex items-center gap-3 bg-brand-primary/50 p-3 rounded-lg border border-white/10 w-fit transition-colors group cursor-default shadow-lg" role="img" aria-label="Rated 4.2 out of 5 stars on Trustpilot">
                <div className="bg-[#00b67a] p-1.5 rounded-md">
                    <Star className="w-5 h-5 text-white" fill="white" />
                </div>
                <div>
                    <div className="flex items-center gap-2">
                        <p className="text-white font-bold text-sm leading-tight group-hover:text-[#00b67a] transition-colors">Trustpilot</p>
                        <div className="flex gap-0.5">
                            {[1, 2, 3, 4].map((i) => <div key={i} className="w-1.5 h-1.5 bg-[#00b67a] rounded-full" aria-hidden="true"></div>)}
                            <div className="w-1.5 h-1.5 bg-[#00b67a]/30 rounded-full" aria-hidden="true"></div>
                        </div>
                    </div>
                    <p className="text-xs text-brand-muted mt-0.5">Rated <span className="text-white font-semibold">4.2</span>/5</p>
                </div>
            </div>
          </div>
          <div className="md:col-span-2">
            <h2 className="font-semibold text-white tracking-wider uppercase mb-6 text-sm inline-block">Contact Us</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
                <div className="p-4 rounded-xl bg-brand-primary/30 border border-white/10 hover:border-brand-accent-start/30 transition-colors">
                    <h3 className="font-bold text-gray-200 mb-2 flex items-center gap-2">
                        <span className="text-lg">🇮🇪</span> Ireland Office
                    </h3>
                    <p className="mb-3 text-gray-400 text-xs leading-relaxed">77 Camden Street Lower, Saint Kevin’s, Dublin, D02 XE80, Ireland</p>
                    <a href="tel:+35312548762" className="block hover:text-brand-accent-end transition-colors py-2" aria-label="Call our Ireland office at +353 1 254 8762">PHONE: +353 1 254 8762</a>
                    <a href="mailto:info@designingdose.com" className="block hover:text-brand-accent-end transition-colors py-2" aria-label="Email our Ireland office">EMAIL: info@designingdose.com</a>
                </div>
                <div className="p-4 rounded-xl bg-brand-primary/30 border border-white/10 hover:border-brand-accent-start/30 transition-colors">
                    <h3 className="font-bold text-gray-200 mb-2 flex items-center gap-2">
                        <span className="text-lg">🇺🇸</span> United States Office
                    </h3>
                    <p className="mb-3 text-gray-400 text-xs leading-relaxed">18952 MacArthur Blvd Suite 100, Irvine, CA 92612, USA</p>
                     <a href="tel:+19497043031" className="block hover:text-brand-accent-end transition-colors py-2" aria-label="Call our United States office at +1 949 704 3031">PHONE: +1 949 704 3031</a>
                     <a href="mailto:info@designingdose.com" className="block hover:text-brand-accent-end transition-colors py-2" aria-label="Email our United States office">EMAIL: info@designingdose.com</a>
                </div>
                <div className="p-4 rounded-xl bg-brand-primary/30 border border-white/10 hover:border-brand-accent-start/30 transition-colors">
                    <h3 className="font-bold text-gray-200 mb-2 flex items-center gap-2">
                        <span className="text-lg">🇨🇦</span> Canada Office
                    </h3>
                    <p className="mb-3 text-gray-400 text-xs leading-relaxed">331 1st Avenue North, Saskatoon, Saskatchewan, S7K 1X2, Canada</p>
                    <a href="tel:+19497043031" className="block hover:text-brand-accent-end transition-colors py-2" aria-label="Call our Canada office at +1 949 704 3031">PHONE: +1 949 704 3031</a>
                    <a href="mailto:info@designingdose.com" className="block hover:text-brand-accent-end transition-colors py-2" aria-label="Email our Canada office">EMAIL: info@designingdose.com</a>
                </div>
                <div className="p-4 rounded-xl bg-brand-primary/30 border border-white/10 hover:border-brand-accent-start/30 transition-colors">
                    <h3 className="font-bold text-gray-200 mb-2 flex items-center gap-2">
                        <span className="text-lg">🇬🇧</span> UK Office
                    </h3>
                    <p className="mb-3 text-gray-400 text-xs leading-relaxed">Quadrant House, Broad Street Mall, Reading, Berkshire, RG1 7QE, UK</p>
                    <a href="tel:+447916689613" className="block hover:text-brand-accent-end transition-colors py-2" aria-label="Call our UK office at +44 7916689613">PHONE: +44 7916689613</a>
                    <a href="mailto:info@designingdose.com" className="block hover:text-brand-accent-end transition-colors py-2" aria-label="Email our UK office">EMAIL: info@designingdose.com</a>
                </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-brand-muted mt-10 pt-10 border-t border-white/10">
           <div>
            <h2 className="font-semibold text-white tracking-wider uppercase mb-4 text-sm">Services</h2>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services/website-packages" className="block py-2 -my-2 hover:text-brand-accent-end transition-colors">Web Development</Link></li>
              <li><Link to="/services/search-engine-marketing-sem" className="block py-2 -my-2 hover:text-brand-accent-end transition-colors">Search Engine Marketing (SEM)</Link></li>
              <li><Link to="/services/social-media" className="block py-2 -my-2 hover:text-brand-accent-end transition-colors">Social Media</Link></li>
              <li><Link to="/services/logo-design" className="block py-2 -my-2 hover:text-brand-accent-end transition-colors">Logo & Branding</Link></li>
              <li><Link to="/services/mobile-app-development" className="block py-2 -my-2 hover:text-brand-accent-end transition-colors">Mobile Apps</Link></li>
              <li><Link to="/services/dropshipping" className="block py-2 -my-2 hover:text-brand-accent-end transition-colors">Dropshipping</Link></li>
              <li><Link to="/services/video-animation" className="block py-2 -my-2 hover:text-brand-accent-end transition-colors">Video Animation</Link></li>
              <li><Link to="/services/illustration" className="block py-2 -my-2 hover:text-brand-accent-end transition-colors">Illustration</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold text-white tracking-wider uppercase mb-4 text-sm">Company</h2>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="block py-2 -my-2 hover:text-brand-accent-end transition-colors">About Us</Link></li>
              <li><Link to="/blog" className="block py-2 -my-2 hover:text-brand-accent-end transition-colors">Blog & Articles</Link></li>
              <li><Link to="/faq" className="block py-2 -my-2 hover:text-brand-accent-end transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="block py-2 -my-2 hover:text-brand-accent-end transition-colors">Contact Us</Link></li>
              <li><Link to="/privacy-policy" className="block py-2 -my-2 hover:text-brand-accent-end transition-colors">Privacy Policy</Link></li>
              <li><Link to="/refund-policy" className="block py-2 -my-2 hover:text-brand-accent-end transition-colors">Refund Policy</Link></li>
              <li><Link to="/terms-of-service" className="block py-2 -my-2 hover:text-brand-accent-end transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-brand-muted/90">&copy; {new Date().getFullYear()} Designing Dose. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
