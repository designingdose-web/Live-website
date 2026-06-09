
import React, { useEffect, useState, Suspense, lazy } from 'react';
import { BrowserRouter, HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import LeadCaptureModal from './components/LeadCaptureModal';
import ScrollToTop from './components/ScrollToTop';

// Performance Fix: Import small pages directly to reduce the number of JS chunks/requests
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import RefundPolicyPage from './pages/RefundPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import NotFoundPage from './pages/NotFoundPage';

// Keep large pages lazy-loaded to optimize initial load weight
const HomePage = lazy(() => import('./pages/HomePage'));
const WebsitePricingPage = lazy(() => import('./pages/WebsitePricingPage'));
const SearchEngineMarketingPage = lazy(() => import('./pages/SearchEngineMarketingPage'));
const SocialMediaPage = lazy(() => import('./pages/SocialMediaPage'));
const LogoDesignPage = lazy(() => import('./pages/LogoDesignPage'));
const MobileAppPage = lazy(() => import('./pages/MobileAppPage'));
const DropshippingPage = lazy(() => import('./pages/DropshippingPage'));
const VideoAnimationPage = lazy(() => import('./pages/VideoAnimationPage'));
const IllustrationPage = lazy(() => import('./pages/IllustrationPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const BlogPostPage = lazy(() => import('./pages/BlogPostPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const FaqPage = lazy(() => import('./pages/FaqPage'));

/**
 * PageLoader - Optimized for CLS (Cumulative Layout Shift)
 */
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[80vh] pt-28 w-full bg-brand-primary">
    <div className="relative w-12 h-12">
        <div className="absolute top-0 left-0 w-full h-full border-4 border-brand-secondary rounded-full"></div>
        <div className="absolute top-0 left-0 w-full h-full border-4 border-brand-accent-start rounded-full border-t-transparent animate-spin"></div>
    </div>
  </div>
);

const ScrollManager = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const targetId = decodeURIComponent(hash.substring(1));
      
      let attempts = 0;
      const maxAttempts = 30;
      
      const scrollToElement = () => {
        const element = document.getElementById(targetId);
        if (element) {
          // Precise calculation to land at the TOP of the card
          // 120px offset to clear the sticky header
          const headerOffset = 120;
          const rect = element.getBoundingClientRect();
          const topPosition = rect.top + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: topPosition,
            behavior: 'smooth'
          });
          
          // Focus the element for accessibility but don't let it scroll itself
          element.focus({ preventScroll: true });
        } else if (attempts < maxAttempts) {
          attempts++;
          setTimeout(scrollToElement, 100);
        }
      };

      // Initial small delay to let the lazy page start rendering
      setTimeout(scrollToElement, 150);
    } else {
      // Default: Scroll to top of page on standard navigation
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

export const SmartRouter: React.FC<{ children: React.ReactNode }> = ({ children }) => {
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
    if (modalOpenCount < 2) {
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
    setModalOpenCount(prev => prev + 1);
  };

  return (
    <>
      <ScrollManager />
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main id="main-content" className="flex-grow focus:outline-none min-h-[80vh]" tabIndex={-1}>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/faq" element={<FaqPage />} />
              <Route path="/services/website-packages" element={<WebsitePricingPage />} />
              <Route path="/services/search-engine-marketing-sem" element={<SearchEngineMarketingPage />} />
              <Route path="/services/search-marketing" element={<SearchEngineMarketingPage />} />
              <Route path="/services/seo" element={<SearchEngineMarketingPage />} />
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
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <FloatingCTA />
        <ScrollToTop />
        <LeadCaptureModal isOpen={isModalOpen} onClose={handleCloseModal} />
      </div>
    </>
  );
};


export default App;
