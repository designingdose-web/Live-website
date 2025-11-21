
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Star = ({ className, fill = "currentColor" }: { className?: string; fill?: string }) => (
  <svg viewBox="0 0 24 24" fill={fill} className={className}>
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-secondary border-t border-brand-accent-start/20">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-brand-muted">
          <div className="md:col-span-1">
            <Logo className="h-10 w-auto" />
            <p className="mt-4 text-sm max-w-sm">
              Designing Dose is a growth-focused digital marketing agency. We help businesses scale their revenue with our expertise in SEO, Web Development, and Social Media Marketing.
            </p>
            
             {/* Trustpilot Mini Badge - Non-clickable */}
            <div className="mt-6 flex items-center gap-3 bg-brand-primary/50 p-3 rounded-lg border border-gray-700/50 w-fit transition-colors group cursor-default">
                <div className="bg-[#00b67a] p-1.5 rounded-md">
                    <Star className="w-5 h-5 text-white" fill="white" />
                </div>
                <div>
                    <div className="flex items-center gap-2">
                        <p className="text-white font-bold text-sm leading-tight group-hover:text-[#00b67a] transition-colors">Trustpilot</p>
                        <div className="flex gap-0.5">
                            {[1, 2, 3, 4].map((i) => <div key={i} className="w-1.5 h-1.5 bg-[#00b67a] rounded-full"></div>)}
                            <div className="w-1.5 h-1.5 bg-[#00b67a]/30 rounded-full"></div>
                        </div>
                    </div>
                    <p className="text-xs text-brand-muted mt-0.5">Rated <span className="text-white font-semibold">4.2</span>/5</p>
                </div>
            </div>
          </div>
          <div className="md:col-span-2">
            <h4 className="font-semibold text-white tracking-wider uppercase">Contact Us</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-4 text-sm">
                <div>
                    <h5 className="font-bold text-gray-400">Ireland Office</h5>
                    <p className="mt-1">77 Camden Street Lower,Saint Kevin’s, Dublin, D02 XE80, Ireland</p>
                    <a href="tel:+35312548762" className="mt-1 block hover:text-white transition-colors">PHONE: +353 1 254 8762</a>
                    <a href="mailto:info@designingdose.com" className="mt-1 block hover:text-white transition-colors">EMAIL: info@designingdose.com</a>
                </div>
                 <div>
                    <h5 className="font-bold text-gray-400">United States Office</h5>
                    <p className="mt-1">Herkimer Street. Brooklyn, NY 11213, United States</p>
                    <a href="tel:+19295636983" className="mt-1 block hover:text-white transition-colors">PHONE: (929) 563-6983</a>
                     <a href="mailto:info@designingdose.com" className="mt-1 block hover:text-white transition-colors">EMAIL: info@designingdose.com</a>
                </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-brand-muted mt-10 pt-10 border-t border-gray-700/50">
           <div>
            <h4 className="font-semibold text-white tracking-wider uppercase">Services</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/services/website-packages" className="hover:text-white transition-colors">Web Development</Link></li>
              <li><Link to="/services/seo" className="hover:text-white transition-colors">SEO Services</Link></li>
              <li><Link to="/services/social-media" className="hover:text-white transition-colors">Social Media</Link></li>
              <li><Link to="/services/logo-design" className="hover:text-white transition-colors">Logo & Branding</Link></li>
              <li><Link to="/services/mobile-app-development" className="hover:text-white transition-colors">Mobile Apps</Link></li>
              <li><Link to="/services/dropshipping" className="hover:text-white transition-colors">Dropshipping</Link></li>
              <li><Link to="/services/video-animation" className="hover:text-white transition-colors">Video Animation</Link></li>
              <li><Link to="/services/illustration" className="hover:text-white transition-colors">Illustration</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white tracking-wider uppercase">Company</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Blog & Articles</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/refund-policy" className="hover:text-white transition-colors">Refund Policy</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-8 text-center">
          <p className="text-sm text-brand-muted">&copy; {new Date().getFullYear()} Designing Dose. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
