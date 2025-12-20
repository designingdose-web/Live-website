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
const SeoPage = lazy(() => import('./pages/SeoPage'));
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

// Minimalist Loader for page transitions
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[60vh] w-full bg-brand-primary">
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
      const element = document.getElementById(hash.substring(1)); // remove the '#'
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  }, [pathname, hash]);

  return null;
};

const SmartRouter: React.FC<{ children: React.ReactNode }> = ({ children }) => {
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

  // Performance Optimization: Lazy-load AdSense script after 2.5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
        const script = document.createElement('script');
        script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5836918123045173";
        script.async = true;
        script.crossOrigin = "anonymous";
        document.head.appendChild(script);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

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
    <SmartRouter>
      <ScrollManager />
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main id="main-content" className="flex-grow focus:outline-none" tabIndex={-1}>
          <Suspense fallback={<PageLoader />}>
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
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
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