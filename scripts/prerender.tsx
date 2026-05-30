import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Routes, Route } from 'react-router-dom';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// --- BROWSER GLOBALS MOCKS ---
// Mocking window, document, and navigator to prevent ReferenceError when Node.js compiles React components.
const locationMock = {
  href: 'https://designingdose.com/',
  pathname: '/',
  hostname: 'designingdose.com',
  search: '',
  hash: ''
};

globalThis.window = {
  location: locationMock,
  innerWidth: 1200,
  innerHeight: 800,
  pageYOffset: 0,
  addEventListener() {},
  removeEventListener() {},
  dispatchEvent() {},
  scrollTo() {},
  setTimeout(fn: any, delay?: number) { return 0 as any; },
  clearTimeout() {},
} as any;

globalThis.document = {
  title: '',
  addEventListener() {},
  removeEventListener() {},
  querySelector() { return null; },
  createElement() { return {}; },
  head: {
    appendChild() {},
    removeChild() {}
  },
  body: {
    style: {
      overflow: ''
    }
  }
} as any;

Object.defineProperty(globalThis, 'navigator', {
  value: { userAgent: 'node' },
  writable: true,
  configurable: true
});

// --- DYNAMIC IMPORTS OF SERVICES/PAGES ---
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import FloatingCTA from '../components/FloatingCTA';

import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import WebsitePricingPage from '../pages/WebsitePricingPage';
import SearchEngineMarketingPage from '../pages/SearchEngineMarketingPage';
import SocialMediaPage from '../pages/SocialMediaPage';
import LogoDesignPage from '../pages/LogoDesignPage';
import MobileAppPage from '../pages/MobileAppPage';
import DropshippingPage from '../pages/DropshippingPage';
import VideoAnimationPage from '../pages/VideoAnimationPage';
import IllustrationPage from '../pages/IllustrationPage';
import BlogPage from '../pages/BlogPage';
import BlogPostPage from '../pages/BlogPostPage';
import PrivacyPolicyPage from '../pages/PrivacyPolicyPage';
import RefundPolicyPage from '../pages/RefundPolicyPage';
import TermsOfServicePage from '../pages/TermsOfServicePage';
import NotFoundPage from '../pages/NotFoundPage';

import { blogPosts } from '../data/blogData';
import { CurrencyProvider } from '../context/CurrencyContext';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Statically imported routes mapping
const ServerApp: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main id="main-content" className="flex-grow focus:outline-none min-h-[80vh]" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
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
      </main>
      <Footer />
      <FloatingCTA />
      <ScrollToTop />
    </div>
  );
};

// Static route metadata for exact replacements
const routesMetadata: Record<string, { title: string, description: string, keywords?: string, image?: string, noindex?: boolean }> = {
  '/': {
    title: 'Designing Dose - Web & Digital Solutions',
    description: 'Designing Dose is a premier global digital agency specializing in Web Development, SEO, Mobile Apps, and Social Media Marketing. Scale your brand and dominate the digital landscape with our expert solutions.'
  },
  '/about': {
    title: 'About Designing Dose | Global Digital Agency',
    description: 'Learn more about Designing Dose, a leading digital agency offering web development, SEO, branding, and marketing solutions with offices in Ireland and USA.'
  },
  '/contact': {
    title: 'Contact Designing Dose | Get a Free Quote',
    description: 'Ready to scale? Contact Designing Dose today for a consultation on Web Development, SEO, or Mobile App projects. Offices in Ireland and USA.'
  },
  '/services/website-packages': {
    title: 'Website Design Packages & Pricing',
    description: 'Choose from our flexible web design and development pricing packages. From startup landers to premium enterprise e-commerce solutions.'
  },
  '/services/search-engine-marketing-sem': {
    title: 'SEO & Search Engine Marketing (SEM) Services',
    description: 'Drive massive search traffic and outrank your competition. See our result-oriented monthly SEO packages designed for maximum ROI.'
  },
  '/services/search-marketing': {
    title: 'SEO & Search Engine Marketing (SEM) Services',
    description: 'Drive massive search traffic and outrank your competition. See our result-oriented monthly SEO packages designed for maximum ROI.'
  },
  '/services/seo': {
    title: 'SEO & Search Engine Marketing (SEM) Services',
    description: 'Drive massive search traffic and outrank your competition. See our result-oriented monthly SEO packages designed for maximum ROI.'
  },
  '/services/social-media': {
    title: 'Social Media Marketing & Management Services',
    description: 'Scale your social media growth. Premium content curation, campaign management, and influencer outreach for global brand traction.'
  },
  '/services/logo-design': {
    title: 'Logo Design & Brand Identity Packages',
    description: 'High-end bespoke visual identity design. Stand out in the market with stunning custom logos, business cards, and comprehensive style guides.'
  },
  '/services/mobile-app-development': {
    title: 'Mobile App Development Services | iOS & Android',
    description: 'Custom cross-platform and native mobile apps built to scale. Flawless code, engaging UX, and lifetime post-launch maintenance.'
  },
  '/services/dropshipping': {
    title: 'Dropshipping Store Setup & Automation Packages',
    description: 'Launch a turn-key fully automated automated Dropshipping business. Fast shipping, high-profit winning products curated by experts.'
  },
  '/services/video-animation': {
    title: 'High-Converting Video Animation & Production',
    description: 'Premium explainer videos, 2D/3D brand animations, and social media video creatives designed to stop the scroll and drive conversions.'
  },
  '/services/illustration': {
    title: 'Custom Illustration & Vector Art Services',
    description: 'Stunning bespoke digital illustrations, character designs, UI vector accents, and commercial graphic design to elevate your brand.'
  },
  '/blog': {
    title: 'Designing Dose Blog | Web, SEO & Growth Insights',
    description: 'Expert tips, step-by-step guides, and actionable checklists on Website Design, Search Engine Optimization, and Digital Advertising.'
  },
  '/privacy-policy': {
    title: 'Privacy Policy | Designing Dose',
    description: 'Our privacy policy details how we securely collect, store, and utilize your interaction data in full compliance with global standards.'
  },
  '/refund-policy': {
    title: 'Refund Policy | Designing Dose',
    description: 'Our client satisfaction policy outlines options for service scope revisions, timelines, and payment refund terms.'
  },
  '/terms-of-service': {
    title: 'Terms of Service | Designing Dose',
    description: 'Read the Terms of Service governing the professional digital design, development, and marketing offerings of Designing Dose.'
  }
};

const executePrerendering = async () => {
  const distDir = path.resolve(__dirname, '../dist');
  const templatePath = path.join(distDir, 'index.html');

  if (!fs.existsSync(templatePath)) {
    console.error(`Error: Base template not found at "${templatePath}". Please run "npm run build" first.`);
    process.exit(1);
  }

  const baseTemplate = fs.readFileSync(templatePath, 'utf8');

  // Build target list of routes to compile
  const routes = Object.keys(routesMetadata);
  
  // Dynamically attach individual blog post routes
  for (const post of blogPosts) {
    const postRoute = `/blog/${post.id}`;
    routes.push(postRoute);
    routesMetadata[postRoute] = {
      title: post.title,
      description: post.excerpt,
      keywords: `${post.category}, Designing Dose, Blog, ${post.title.split(' ').slice(0, 5).join(', ')}`,
      image: post.image
    };
  }

  console.log(`Starting Pre-rendering pipeline for ${routes.length} routes...`);

  for (const route of routes) {
    console.log(`Pre-rendering route: ${route}`);

    // Update global mocks for dynamic schema/page resolution
    locationMock.pathname = route;
    locationMock.href = `https://designingdose.com${route}`;

    // Render the React tree to string
    const renderedMarkup = ReactDOMServer.renderToString(
      <StaticRouter location={route}>
        <CurrencyProvider>
          <ServerApp />
        </CurrencyProvider>
      </StaticRouter>
    );

    // Get metadata
    const seo = routesMetadata[route] || {
      title: 'Designing Dose - Global Digital Agency',
      description: 'Expert Web Development, SEO, and Digital Marketing campaigns tailored for brands.'
    };

    const brandName = "Designing Dose";
    let finalTitle = seo.title;
    if (!finalTitle.includes(brandName) && finalTitle.length + brandName.length + 3 <= 60) {
      finalTitle = `${finalTitle} | ${brandName}`;
    }

    const canonicalUrl = `https://designingdose.com${route}`;
    const defaultImage = "https://res.cloudinary.com/dmaqptknc/image/upload/v1765127202/new_web2_lbyr0c.webp";

    // Inject compiled markup and individual meta tags to head
    let compiledHtml = baseTemplate
      .replace('<div id="root"></div>', `<div id="root">${renderedMarkup}</div>`)
      .replace(/<title>[\s\S]*?<\/title>/, `<title>${finalTitle}</title>`)
      .replace(/<link rel="canonical"[\s\S]*?\/>/, `<link rel="canonical" href="${canonicalUrl}" />`);

    // Helper for direct property replacement
    const replaceMetaContent = (htmlString: string, attributeName: string, attributeValue: string, content: string, isProperty = false) => {
      const regex = new RegExp(`<meta\\s+${isProperty ? 'property' : 'name'}="${attributeName}"[^>]*content="[^"]*"[^>]*\\/>`);
      if (regex.test(htmlString)) {
        return htmlString.replace(regex, `<meta ${isProperty ? 'property' : 'name'}="${attributeName}" content="${content}" />`);
      }
      // If it doesn't exist, insert it just before the </head> tag
      return htmlString.replace('</head>', `    <meta ${isProperty ? 'property' : 'name'}="${attributeName}" content="${content}" />\n  </head>`);
    };

    compiledHtml = replaceMetaContent(compiledHtml, 'description', 'name', seo.description);
    compiledHtml = replaceMetaContent(compiledHtml, 'keywords', 'name', seo.keywords || "Web Development, SEO, Mobile Apps, Designing Dose, Digital Marketing, Ireland, USA");
    compiledHtml = replaceMetaContent(compiledHtml, 'robots', 'name', seo.noindex ? 'noindex, nofollow' : 'index, follow');
    compiledHtml = replaceMetaContent(compiledHtml, 'googlebot', 'name', seo.noindex ? 'noindex, nofollow' : 'index, follow');

    compiledHtml = replaceMetaContent(compiledHtml, 'og:title', 'property', finalTitle, true);
    compiledHtml = replaceMetaContent(compiledHtml, 'og:description', 'property', seo.description, true);
    compiledHtml = replaceMetaContent(compiledHtml, 'og:url', 'property', canonicalUrl, true);
    compiledHtml = replaceMetaContent(compiledHtml, 'og:image', 'property', seo.image || defaultImage, true);

    compiledHtml = replaceMetaContent(compiledHtml, 'twitter:title', 'property', finalTitle, true);
    compiledHtml = replaceMetaContent(compiledHtml, 'twitter:description', 'property', seo.description, true);
    compiledHtml = replaceMetaContent(compiledHtml, 'twitter:url', 'property', canonicalUrl, true);
    compiledHtml = replaceMetaContent(compiledHtml, 'twitter:image', 'property', seo.image || defaultImage, true);

    // Save outputs
    if (route === '/') {
      fs.writeFileSync(templatePath, compiledHtml, 'utf8');
    } else {
      const outputRouteDir = path.join(distDir, route);
      fs.mkdirSync(outputRouteDir, { recursive: true });
      fs.writeFileSync(path.join(outputRouteDir, 'index.html'), compiledHtml, 'utf8');
    }
  }

  console.log('✅ Pre-rendering pipeline completed successfully! All pages are now fully statically pre-rendered for SEO and AI bots.');
};

executePrerendering().catch(err => {
  console.error('Fatal pre-rendering error:', err);
  process.exit(1);
});
