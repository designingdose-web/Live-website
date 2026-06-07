
import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

const NavItem: React.FC<{ to: string; children: React.ReactNode; onClick?: () => void }> = ({ to, children, onClick }) => {
  const location = useLocation();
  const isActive = location.pathname === to || (to === '/blog' && location.pathname.startsWith('/blog'));
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={
        `block py-1.5 px-3 rounded-md transition-all duration-300 text-sm font-medium ${
          isActive
            ? 'text-white bg-white/10 backdrop-blur-md border border-white/10 shadow-[0_0_10px_rgba(139,92,246,0.2)]'
            : 'text-[#A8B3BE] hover:text-white hover:bg-white/5 hover:backdrop-blur-sm focus-visible:text-white focus-visible:bg-white/10 focus:outline-none'
        }`
      }
    >
      {children}
    </NavLink>
  )
};

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const closeTimeoutRef = useRef<number | null>(null);

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    closeTimeoutRef.current = window.setTimeout(() => {
      setIsServicesOpen(false);
    }, 300);
  };
  
  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };
  
  const servicesLinks = [
    { to: "/services/website-packages", label: "Web Development" },
    { to: "/services/search-engine-marketing-sem", label: "Search Engine Marketing (SEM)" },
    { to: "/services/social-media", label: "Social Media" },
    { to: "/services/logo-design", label: "Logo & Branding" },
    { to: "/services/mobile-app-development", label: "Mobile Apps" },
    { to: "/services/dropshipping", label: "Dropshipping" },
    { to: "/services/video-animation", label: "Video Animation" },
    { to: "/services/illustration", label: "Illustration" },
  ];

  const headerRef = useRef<HTMLElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isServicesOpen && headerRef.current) {
      headerRef.current.style.zIndex = '40';
    } else if (headerRef.current) {
      headerRef.current.style.zIndex = '50';
    }
  }, [isServicesOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            setIsServicesOpen(false);
            setIsMenuOpen(false);
        }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <>
      <header 
        ref={headerRef} 
        className="fixed top-0 w-full z-50 transition-all duration-300"
        style={{
            background: 'rgba(2, 2, 4, 0.85)', // Darker background to match body
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
        }}
        role="banner"
      >
        <nav className="container mx-auto px-6 py-4" aria-label="Main Navigation">
          <div className="flex items-center justify-between">
            <Link to="/" onClick={closeMenu} className="transition-opacity hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-brand-accent-start rounded-md" aria-label="Designing Dose Home">
              <Logo className="h-9 w-auto" />
            </Link>
            <div className="hidden md:flex items-center space-x-2">
              <NavItem to="/">Home</NavItem>
              <NavItem to="/about">About Us</NavItem>
              <div 
                className="relative group"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  onClick={toggleServices}
                  aria-expanded={isServicesOpen}
                  aria-haspopup="true"
                  aria-controls="services-dropdown"
                  className={`flex items-center py-1.5 px-3 rounded-md transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent-end font-medium text-sm ${isServicesOpen ? 'text-white bg-white/10 backdrop-blur-md' : 'text-[#A8B3BE] hover:text-white hover:bg-white/5'}`}
                >
                  Pricing
                  <svg className={`w-3.5 h-3.5 ml-1 transition-transform duration-200 ${isServicesOpen ? 'transform rotate-180 text-brand-accent-middle' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </button>
              </div>
              <NavItem to="/blog">Blog</NavItem>
              <NavItem to="/contact">Contact Us</NavItem>
            </div>
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className="text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent-end rounded-md p-1" 
                aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}></path>
                </svg>
              </button>
            </div>
          </div>
          {isMenuOpen && (
            <div id="mobile-menu" className="md:hidden mt-4 space-y-2 glass-panel rounded-xl p-4 animate-fade-in-up" role="menu">
              <NavItem to="/" onClick={closeMenu}>Home</NavItem>
              <NavItem to="/about" onClick={closeMenu}>About Us</NavItem>
              <h3 className="px-3 pt-2 text-xs font-semibold text-brand-muted uppercase tracking-wider">Pricing</h3>
              {servicesLinks.map(link => (
                <NavLink 
                    key={link.to} 
                    to={link.to} 
                    onClick={closeMenu} 
                    className="block pl-6 pr-3 py-2 text-sm text-[#A8B3BE] hover:text-white hover:bg-white/10 rounded-md focus:outline-none focus:bg-white/10 focus:text-white transition-all"
                    role="menuitem"
                >
                    {link.label}
                </NavLink>
              ))}
              <NavItem to="/blog" onClick={closeMenu}>Blog</NavItem>
              <NavItem to="/contact" onClick={closeMenu}>Contact Us</NavItem>
            </div>
          )}
        </nav>
        <div className="h-[1px] w-full bg-gradient-to-r from-brand-accent-start via-brand-accent-middle to-brand-accent-end opacity-70"></div>
      </header>
      <div 
        id="services-dropdown"
        className={`fixed inset-0 top-0 left-0 z-30 transition-opacity duration-300 ${isServicesOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        aria-hidden={!isServicesOpen}
      >
        <div 
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onMouseEnter={handleMouseLeave}
          onClick={closeMenu}
        ></div>
        <div 
          ref={dropdownRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`absolute top-[75px] left-1/2 -translate-x-1/2 transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1) ${isServicesOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
        >
          <div 
            className="rounded-xl w-[90vw] max-w-[600px] p-8 overflow-hidden relative glass-panel"
          >
              <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-4 z-10">
                {servicesLinks.map(link => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    onClick={closeMenu}
                    className="group flex items-center p-4 rounded-lg transition-all duration-300 hover:bg-white/5 border border-transparent hover:border-brand-accent-start/30 focus:outline-none focus:ring-2 focus:ring-brand-accent-end"
                  >
                    <span className="text-white font-bold text-base tracking-wide transition-all duration-300 group-hover:translate-x-1 inline-block group-hover:text-brand-accent-end group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]">
                      {link.label}
                    </span>
                    <svg className="w-4 h-4 text-brand-accent-end opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ml-auto drop-shadow-[0_0_5px_rgba(34,211,238,0.6)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                    </svg>
                  </NavLink>
                ))}
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
