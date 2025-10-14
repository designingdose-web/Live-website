import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Logo from './Logo';

const NavItem: React.FC<{ to: string; children: React.ReactNode; onClick?: () => void }> = ({ to, children, onClick }) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) =>
      `block py-2 px-3 rounded-md transition-colors duration-200 text-base ${
        isActive
          ? 'text-white bg-gradient-to-r from-brand-accent-start via-brand-accent-middle to-brand-accent-end'
          : 'text-brand-muted hover:text-white hover:bg-brand-secondary'
      }`
    }
  >
    {children}
  </NavLink>
);

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const servicesMenuRef = useRef<HTMLDivElement>(null);

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesMenuRef.current && !servicesMenuRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const servicesLinks = [
    { to: "/services/website-packages", label: "Web Development" },
    { to: "/services/seo", label: "SEO Services" },
    { to: "/services/social-media", label: "Social Media Marketing" },
    { to: "/services/logo-design", label: "Logo & Branding" },
    { to: "/services/mobile-app-development", label: "Mobile App Development" },
    { to: "/services/dropshipping", label: "Dropshipping" },
  ];

  return (
    <header className="bg-brand-primary/80 backdrop-blur-lg sticky top-0 z-50 border-b border-brand-secondary/50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" onClick={closeMenu} className="transition-opacity hover:opacity-80">
            <Logo className="h-9 w-auto" />
          </Link>
          <div className="hidden md:flex items-center space-x-2">
            <NavItem to="/">Home</NavItem>
            <NavItem to="/about">About Us</NavItem>
            <div 
              ref={servicesMenuRef}
              className="relative" 
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="text-brand-muted hover:text-white flex items-center py-2 px-3 rounded-md transition-colors duration-200"
              >
                Pricing
                <svg className={`w-4 h-4 ml-1 transition-transform duration-200 ${isServicesOpen ? 'transform rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              {isServicesOpen && (
                <div className="absolute top-full -left-4 w-60 bg-brand-secondary rounded-md shadow-lg p-2 animate-dropdown-enter">
                  {servicesLinks.map(link => (
                    <NavLink
                      key={link.to}
                      to={link.to}
                      onClick={closeMenu}
                      className={({ isActive }) => `block w-full text-left px-4 py-2 text-sm rounded-md ${isActive ? 'bg-gradient-to-r from-brand-accent-start via-brand-accent-middle to-brand-accent-end text-white' : 'text-brand-muted hover:bg-brand-primary hover:text-white'}`}
                    >
                      {link.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
            <NavItem to="/contact">Contact Us</NavItem>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none" aria-label="Open menu" aria-expanded={isMenuOpen}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}></path>
              </svg>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-2 animate-fade-in-up">
            <NavItem to="/" onClick={closeMenu}>Home</NavItem>
            <NavItem to="/about" onClick={closeMenu}>About Us</NavItem>
            <h3 className="px-3 pt-2 text-sm font-semibold text-brand-muted uppercase">Pricing</h3>
            {servicesLinks.map(link => (
              <NavLink key={link.to} to={link.to} onClick={closeMenu} className="block pl-6 pr-3 py-2 text-brand-muted hover:text-white hover:bg-brand-secondary rounded-md">{link.label}</NavLink>
            ))}
            <NavItem to="/contact" onClick={closeMenu}>Contact Us</NavItem>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;