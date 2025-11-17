import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

const NavItem: React.FC<{ to: string; children: React.ReactNode; onClick?: () => void }> = ({ to, children, onClick }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
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
    closeTimeoutRef.current = window.setTimeout(() => {
      setIsServicesOpen(false);
    }, 200);
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };
  
  const servicesLinks = [
    { to: "/services/website-packages", label: "Web Development", icon: "💻" },
    { to: "/services/seo", label: "SEO Services", icon: "📈" },
    { to: "/services/social-media", label: "Social Media", icon: "📱" },
    { to: "/services/logo-design", label: "Logo & Branding", icon: "🎨" },
    { to: "/services/mobile-app-development", label: "Mobile Apps", icon: "📲" },
    { to: "/services/dropshipping", label: "Dropshipping", icon: "📦" },
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
                  className="text-brand-muted hover:text-white flex items-center py-2 px-3 rounded-md transition-colors duration-200 group-hover:text-white focus-visible:text-white focus:outline-none"
                >
                  Pricing
                  <svg className={`w-4 h-4 ml-1 transition-transform duration-200 ${isServicesOpen ? 'transform rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </button>
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
            <div className="md:hidden mt-4 space-y-2 bg-brand-primary animate-fade-in-up">
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
       {/* Dropdown Menu & Overlay */}
      <div 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`fixed inset-0 top-0 left-0 z-30 transition-opacity duration-300 ${isServicesOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-md"></div>
        
        {/* Menu */}
        <div 
          ref={dropdownRef}
          className={`absolute top-[73px] left-1/2 -translate-x-1/2 transition-all duration-300 ${isServicesOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}
        >
          <div 
            className="p-1 rounded-2xl shadow-2xl shadow-[#9759E9]/30"
            style={{ backgroundImage: 'linear-gradient(to bottom right, #9759E9, #B952C9, #DB4BA9, #B170B1, #9484BE, #60A8D4)' }}
          >
            <div className="bg-brand-secondary/95 p-6 rounded-[14px] w-[90vw] max-w-[550px]">
              <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                {servicesLinks.map(link => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    onClick={closeMenu}
                    className="group flex items-center p-3 rounded-lg transition-colors duration-200 hover:bg-white/10"
                  >
                    <span className="text-xl mr-4">{link.icon}</span>
                    <span className="text-white font-medium group-hover:text-brand-accent-end transition-colors">{link.label}</span>
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;