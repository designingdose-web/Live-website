
import React, { useEffect, useState } from 'react';
import { BrowserRouter, HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import WebsitePricingPage from './pages/WebsitePricingPage';
import SeoPage from './pages/SeoPage';
import SocialMediaPage from './pages/SocialMediaPage';
import LogoDesignPage from './pages/LogoDesignPage';
import MobileAppPage from './pages/MobileAppPage';
import DropshippingPage from './pages/DropshippingPage';
import VideoAnimationPage from './pages/VideoAnimationPage';
import IllustrationPage from './pages/IllustrationPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import RefundPolicyPage from './pages/RefundPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import FloatingCTA from './components/FloatingCTA';
import LeadCaptureModal from './components/LeadCaptureModal';
import ScrollToTop from './components/ScrollToTop';

const ScrollManager = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1)); // remove the '#'
      if (element) {
        // A slight delay ensures the page has rendered before scrolling
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
      // Accessibility: Move focus to the skip link or top of body on route change
      // so keyboard users start from top
      document.body.focus();
    }
  }, [pathname, hash]);

  return null;
};

// Smart Router: Uses BrowserRouter for SEO on the live site, HashRouter for stability in previews
const SmartRouter: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Check if the current hostname matches your live domain
  const isProduction = window.location.hostname === 'designingdose.com' || window.location.hostname === 'www.designingdose.com';

  return isProduction ? (
    <BrowserRouter>{children}</BrowserRouter>
  ) : (
    <HashRouter>{children}</HashRouter>
  );
};

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalOpenCount, setModalOpenCount] = useState(0);

  useEffect(() => {
    // This allows the modal to appear a maximum of 2 times per session.
    if (modalOpenCount < 2) {
      // 15 seconds for the first appearance, 90 seconds for the second.
      const delay = modalOpenCount === 0 ? 15000 : 90000;
      const timer = setTimeout(() => {
        setIsModalOpen(true);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [modalOpenCount]);

  useEffect(() => {
    const handleOpenModal = () => setIsModalOpen(true);
    window.addEventListener('open-lead-modal', handleOpenModal);
    return () => {
      window.removeEventListener('open-lead-modal', handleOpenModal);
    }
  }, []);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Increment count so the timer for the next appearance (if any) starts.
    setModalOpenCount(prev => prev + 1);
  };

  return (
    <SmartRouter>
      <ScrollManager />
      {/* ADA Compliance: Skip to content link */}
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <div className="flex flex-col min-h-screen">
        <Header />
        {/* ADA Compliance: Main landmark with ID */}
        <main id="main-content" className="flex-grow focus:outline-none" tabIndex={-1}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/services/website-packages" element={<WebsitePricingPage />} />
            <Route path="/services/seo" element={<SeoPage />} />
            <Route path="/services/social-media" element={<SocialMediaPage />} />
            <Route path="/services/logo-design" element={<LogoDesignPage />} />
            <Route path="/services/mobile-app-development" element={<MobileAppPage />} />
            <Route path="/services/dropshipping" element={<DropshippingPage />} />
            <Route path="/services/video-animation" element={<VideoAnimationPage />} />
            <Route path="/services/illustration" element={<IllustrationPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:id" element={<BlogPostPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/refund-policy" element={<RefundPolicyPage />} />
            <Route path="/terms-of-service" element={<TermsOfServicePage />} />
          </Routes>
        </main>
        <Footer />
        <FloatingCTA />
        <ScrollToTop />
        <LeadCaptureModal isOpen={isModalOpen} onClose={handleCloseModal} />
      </div>
    </SmartRouter>
  );
};

export default App;
