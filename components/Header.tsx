
import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

const NavItem: React.FC<{ to: string; children: React.ReactNode; onClick?: () => void }> = ({ to, children, onClick }) => {
  const location = useLocation();
  // Handle partial matching for blog routes so "Blog" stays active when viewing a post
  const isActive = location.pathname === to || (to === '/blog' && location.pathname.startsWith('/blog'));
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={
        `block py-2 px-3 rounded-md transition-colors duration-200 text-base ${
          isActive
            ? 'text-white bg-gradient-to-r from-brand-accent-start via-brand-accent-middle to-brand-accent-end'
            : 'text-brand-muted hover:text-white hover:bg-brand-secondary focus-visible:text-white focus-visible:bg-brand-secondary focus:outline-none'
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
  
  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };
  
  const servicesLinks = [
    { to: "/services/website-packages", label: "Web Development" },
    { to: "/services/seo", label: "SEO Services" },
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

  return (
    <>
      <header ref={headerRef} className="bg-brand-primary/80 backdrop-blur-sm sticky top-0 border-b border-brand-secondary/50 transition-all duration-300">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" onClick={closeMenu} className="transition-opacity hover:opacity-80">
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
                  className={`flex items-center py-2 px-3 rounded-md transition-colors duration-200 focus:outline-none ${isServicesOpen ? 'text-white' : 'text-brand-muted hover:text-white'}`}
                >
                  Pricing
                  <svg className={`w-4 h-4 ml-1 transition-transform duration-200 ${isServicesOpen ? 'transform rotate-180 text-brand-accent-middle' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </button>
              </div>
              <NavItem to="/blog">Blog</NavItem>
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
            <div className="md:hidden mt-4 space-y-2 bg-brand-primary animate-fade-in-up">
              <NavItem to="/" onClick={closeMenu}>Home</NavItem>
              <NavItem to="/about" onClick={closeMenu}>About Us</NavItem>
              <h3 className="px-3 pt-2 text-sm font-semibold text-brand-muted uppercase">Pricing</h3>
              {servicesLinks.map(link => (
                <NavLink key={link.to} to={link.to} onClick={closeMenu} className="block pl-6 pr-3 py-2 text-brand-muted hover:text-white hover:bg-brand-secondary rounded-md">{link.label}</NavLink>
              ))}
              <NavItem to="/blog" onClick={closeMenu}>Blog</NavItem>
              <NavItem to="/contact" onClick={closeMenu}>Contact Us</NavItem>
            </div>
          )}
        </nav>
      </header>
       {/* Dropdown Menu & Overlay */}
      <div 
        className={`fixed inset-0 top-0 left-0 z-30 transition-opacity duration-300 ${isServicesOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        {/* Overlay - closes menu when hovered */}
        <div 
          className="absolute inset-0 bg-black/20 backdrop-blur-[1px]"
          onMouseEnter={handleMouseLeave}
        ></div>
        
        {/* Menu - keeps menu open when hovered */}
        <div 
          ref={dropdownRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`absolute top-[75px] left-1/2 -translate-x-1/2 transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1) ${isServicesOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
        >
          <div 
            className="rounded-xl w-[90vw] max-w-[600px] p-8 overflow-hidden relative"
            style={{
              // Reverted to darker, more transparent glassy look
              background: 'linear-gradient(145deg, rgba(13, 17, 23, 0.6) 0%, rgba(22, 27, 34, 0.4) 100%)',
              backdropFilter: 'blur(20px)', 
              border: '1px solid rgba(139, 92, 246, 0.15)', 
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.4), 0 0 30px rgba(139, 92, 246, 0.1)'
            }}
          >
              {/* Subtle internal gradient glow for depth */}
               <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-accent-start/10 to-brand-accent-end/5 pointer-events-none"></div>

              <div className="relative grid grid-cols-2 gap-4 z-10">
                {servicesLinks.map(link => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    onClick={closeMenu}
                    className="group flex items-center p-4 rounded-lg transition-all duration-300 hover:bg-white/5 border border-transparent hover:border-brand-accent-start/20"
                  >
                    {/* Increased vibrancy: bolder, larger text with neon glow shadow on hover */}
                    <span className="text-white font-bold text-lg tracking-wide transition-all duration-300 group-hover:translate-x-1 inline-block group-hover:text-brand-accent-end group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]">
                      {link.label}
                    </span>
                    <svg className="w-5 h-5 text-brand-accent-end opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ml-auto drop-shadow-[0_0_5px_rgba(34,211,238,0.6)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
