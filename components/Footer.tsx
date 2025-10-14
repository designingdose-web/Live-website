import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

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
          </div>
          <div className="md:col-span-2">
            <h4 className="font-semibold text-white tracking-wider uppercase">Contact Us</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-4 text-sm">
                <div>
                    <h5 className="font-bold text-gray-400">Ireland Office</h5>
                    <p className="mt-1">77 Camden Street Lower,Saint Kevin’s, Dublin, D02 XE80, Ireland</p>
                    <a href="tel:+35312548762" className="mt-1 block hover:text-white transition-colors">PHONE: +35312548762</a>
                    <a href="mailto:info@designingtools.com" className="mt-1 block hover:text-white transition-colors">EMAIL: info@designingtools.com</a>
                </div>
                 <div>
                    <h5 className="font-bold text-gray-400">United States Office</h5>
                    <p className="mt-1">Herkimer Street. Brooklyn, NY 11213, United States</p>
                    <a href="tel:+19295636983" className="mt-1 block hover:text-white transition-colors">PHONE: (929) 563-6983</a>
                     <a href="mailto:info@designingtools.com" className="mt-1 block hover:text-white transition-colors">EMAIL: info@designingtools.com</a>
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
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white tracking-wider uppercase">Company</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
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