import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useCurrency } from '../context/CurrencyContext';

// ─── Schema ───────────────────────────────────────────────────────────────────
const londonSchema = [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Designing Dose – London",
    "url": "https://designingdose.com/digital-agency-london",
    "logo": "https://designingdose.com/logo.png",
    "image": "https://designingdose.com/og-image.jpg",
    "description": "Designing Dose is a full-service digital agency serving London businesses with web design, SEO, social media marketing, logo design, mobile app development and more.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "86-90 Paul Street",
      "addressLocality": "London",
      "postalCode": "EC2A 4NE",
      "addressCountry": "GB"
    },
    "geo": { "@type": "GeoCoordinates", "latitude": 51.5245, "longitude": -0.0865 },
    "telephone": "+44-7916-689613",
    "email": "info@designingdose.com",
    "priceRange": "££",
    "openingHours": "Mo-Fr 09:00-18:00",
    "areaServed": { "@type": "City", "name": "London" },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "112", "bestRating": "5" }
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://designingdose.com" },
      { "@type": "ListItem", "position": 2, "name": "Digital Agency London", "item": "https://designingdose.com/digital-agency-london" }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What digital services does Designing Dose offer in London?",
        "acceptedAnswer": { "@type": "Answer", "text": "We offer web design and development, SEO, social media marketing, logo and branding, mobile app development, video animation, illustration, e-commerce and dropshipping solutions for London and UK businesses." }
      },
      {
        "@type": "Question",
        "name": "How long does a web design project take?",
        "acceptedAnswer": { "@type": "Answer", "text": "Most websites are delivered within 2 to 4 weeks. We deliver first design concepts within 2 to 3 working days of the kick-off call." }
      },
      {
        "@type": "Question",
        "name": "Do you work with London startups and small businesses?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes. We work with early-stage startups, growing SMEs and established London enterprises. Our packages scale with your budget so you only pay for what you need." }
      },
      {
        "@type": "Question",
        "name": "Can you help my London business rank higher on Google?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes. We specialise in local London and national UK SEO. We have moved clients from page 5 to the top 3 in as little as 5 to 6 months through technical SEO, content strategy and quality link building." }
      },
      {
        "@type": "Question",
        "name": "What does web design cost for a London business?",
        "acceptedAnswer": { "@type": "Answer", "text": "Our web design packages start from £199 and scale based on the complexity and features you need. We offer a free quote call with no commitment." }
      },
      {
        "@type": "Question",
        "name": "How much does SEO cost for a London business?",
        "acceptedAnswer": { "@type": "Answer", "text": "SEO packages for UK businesses start from £299 per month for local campaigns targeting 5 to 10 keywords. Growth plans start from £499 per month and competitive campaigns with link building from £999 per month." }
      },
      {
        "@type": "Question",
        "name": "Do you manage social media for London businesses?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes. Social media management starts from £399 per month for 8 posts on Instagram and Facebook. Multi-platform standard packages start from £999 per month." }
      },
      {
        "@type": "Question",
        "name": "Can you design a logo for my London business?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes. Logo design starts from £49 for a single concept. Multi-concept packages with vector files start from £99 and full brand identity packages start from £199. Commercial rights transfer to you in full once paid." }
      },
      {
        "@type": "Question",
        "name": "Do you build e-commerce stores for UK retailers?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes. E-commerce stores start from £349 for up to 10 products on Shopify or WooCommerce. Stores with up to 30 products start from £649 and larger builds from £999." }
      },
      {
        "@type": "Question",
        "name": "Can you build a mobile app for a London business?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes. App development starts from £2,499 for a clickable prototype and from £6,499 for a functional MVP. We build cross-platform apps for iOS and Android using React Native and Flutter." }
      },
      {
        "@type": "Question",
        "name": "Do you run Google Ads and PPC campaigns for London businesses?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes. PPC management starts from £549 per month for up to 2 campaigns on Google Ads or Meta. Multi-platform growth plans start from £999 per month. The fee is separate from your ad spend budget." }
      },
      {
        "@type": "Question",
        "name": "How does local SEO help a London business?",
        "acceptedAnswer": { "@type": "Answer", "text": "Local SEO helps London businesses appear in Google Maps and the local search pack. We optimise Google Business Profiles, build local citations across UK directories and create content targeting London-specific searches." }
      },
      {
        "@type": "Question",
        "name": "Do you handle brand identity design beyond just a logo?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes. Our brand identity packages cover logo, colour palette, typography, usage guidelines and supporting assets like social media templates and business card designs." }
      },
      {
        "@type": "Question",
        "name": "Do you create animated videos for London businesses?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes. Video animation starts from £399 for a 15-second teaser. Explainer videos with custom characters start from £799 and full 60-second business videos from £1,499." }
      },
      {
        "@type": "Question",
        "name": "What makes Designing Dose different from other London digital agencies?",
        "acceptedAnswer": { "@type": "Answer", "text": "We handle design, development, SEO, social, apps and content under one roof for a consistent strategy. We report on outcomes and communicate proactively when something needs changing." }
      }
    ]
  }
];

// ─── SVG Icon Components ──────────────────────────────────────────────────────
const ArrowRightIcon = () => (
  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

const CheckCircleIcon = () => (
  <svg className="w-4 h-4 flex-shrink-0 text-[#22D3EE]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
);

const ChevronDownIcon = ({ open }: { open: boolean }) => (
  <svg
    className={`w-5 h-5 text-brand-muted flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
    fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

const StarIcon = () => (
  <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

// Service SVG icons (brand-gradient)
const WebIcon = () => (
  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="url(#lg1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <defs><linearGradient id="lg1" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#8B5CF6"/><stop offset="1" stopColor="#22D3EE"/></linearGradient></defs>
    <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
  </svg>
);
const SeoIconSvg = () => (
  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="url(#lg2)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <defs><linearGradient id="lg2" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#EC4899"/><stop offset="1" stopColor="#8B5CF6"/></linearGradient></defs>
    <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/><path d="M11 8v3l2 2"/>
  </svg>
);
const SocialIcon = () => (
  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="url(#lg3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <defs><linearGradient id="lg3" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#22D3EE"/><stop offset="1" stopColor="#EC4899"/></linearGradient></defs>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);
const LogoIcon = () => (
  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="url(#lg4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <defs><linearGradient id="lg4" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#8B5CF6"/><stop offset="1" stopColor="#EC4899"/></linearGradient></defs>
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);
const AppIcon = () => (
  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="url(#lg5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <defs><linearGradient id="lg5" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#22D3EE"/><stop offset="1" stopColor="#8B5CF6"/></linearGradient></defs>
    <rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/>
  </svg>
);
const EcomIcon = () => (
  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="url(#lg6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <defs><linearGradient id="lg6" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#EC4899"/><stop offset="1" stopColor="#22D3EE"/></linearGradient></defs>
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>
  </svg>
);

// ─── Hero ─────────────────────────────────────────────────────────────────────
const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-brand-primary pt-16">
      {/* Gradient orb layer */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full bg-[#8B5CF6] opacity-[0.07] blur-[130px]" />
        <div className="absolute top-1/3 -right-60 w-[500px] h-[500px] rounded-full bg-[#EC4899] opacity-[0.06] blur-[100px]" />
        <div className="absolute -bottom-32 left-1/4 w-[400px] h-[400px] rounded-full bg-[#22D3EE] opacity-[0.05] blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: Copy */}
          <div>
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full glass-panel border border-[#8B5CF6]/30 text-sm font-medium text-brand-muted">
              <span className="w-2 h-2 rounded-full bg-[#22D3EE] animate-pulse" aria-hidden="true" />
              Award-Winning Digital Agency in London
            </div>

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-white leading-[1.1] mb-6">
              Grow Your London<br />Business{' '}
              <span className="gradient-text">Online</span>
            </h1>

            <p className="text-lg md:text-xl text-brand-muted leading-relaxed mb-8 max-w-lg">
              Web design, SEO and digital marketing built for UK businesses. We help London brands rank higher, convert better and grow faster — with 10+ years of results behind every project.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 py-4 px-8 rounded-full text-base font-bold text-white bg-gradient-to-r from-[#8B5CF6] via-[#EC4899] to-[#22D3EE] hover:shadow-[0_0_40px_rgba(139,92,246,0.5)] transition-all duration-300 transform hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-[#8B5CF6] focus-visible:outline-none"
              >
                Get a Free Quote
                <ArrowRightIcon />
              </Link>
              <Link
                to="/services/website-packages"
                className="group inline-flex items-center justify-center gap-2 py-4 px-8 rounded-full text-base font-bold text-white gradient-border-mask hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] transition-all duration-300 transform hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-[#EC4899] focus-visible:outline-none"
              >
                View Packages
                <ArrowRightIcon />
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              {[
                'No long-term contracts',
                'Free strategy call',
                '4.9 stars on Google',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-brand-muted text-sm">
                  <CheckCircleIcon />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: City image + floating badges */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=900&q=80"
                alt="London Tower Bridge at dusk"
                className="w-full h-[500px] object-cover"
                width="900"
                height="500"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/80 via-brand-primary/20 to-transparent" />
              {/* CHANGE 1: replaced London address with service area text */}
              <div className="absolute bottom-5 left-5">
                <p className="text-white text-sm font-semibold">Serving London & the UK</p>
                <p className="text-brand-muted text-xs">Web Design · SEO · Digital Marketing</p>
              </div>
            </div>

            {/* Floating stat badges */}
            <div className="absolute -top-5 -left-6 glass-panel rounded-2xl px-4 py-3 border border-[#8B5CF6]/40 shadow-[0_0_20px_rgba(139,92,246,0.2)]" aria-label="1000+ projects delivered">
              <p className="text-2xl font-extrabold gradient-text leading-none">1000+</p>
              <p className="text-xs text-brand-muted mt-0.5">Projects Delivered</p>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 -right-7 glass-panel rounded-2xl px-4 py-3 border border-[#EC4899]/40 shadow-[0_0_20px_rgba(236,72,153,0.2)]" aria-label="10 plus years experience">
              <p className="text-2xl font-extrabold text-[#EC4899] leading-none">10+</p>
              <p className="text-xs text-brand-muted mt-0.5">Years Experience</p>
            </div>
            <div className="absolute -bottom-5 -right-6 glass-panel rounded-2xl px-4 py-3 border border-[#22D3EE]/40 shadow-[0_0_20px_rgba(34,211,238,0.2)]" aria-label="96.7% client satisfaction">
              <p className="text-2xl font-extrabold text-[#22D3EE] leading-none">96.7%</p>
              <p className="text-xs text-brand-muted mt-0.5">Client Satisfaction</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// ─── Stats Strip ──────────────────────────────────────────────────────────────
const StatsStrip: React.FC = () => {
  const ref = useScrollAnimation('fade-in');
  const stats = [
    { value: '1,000+', label: 'Clients Served',        color: '#8B5CF6' },
    { value: '10+',    label: 'Years Experience',      color: '#EC4899' },
    { value: '96.7%',  label: 'Satisfaction Rate',     color: '#22D3EE' },
    { value: '200+',   label: 'UK Projects Delivered', color: '#8B5CF6' },
  ];

  return (
    <section ref={ref} className="py-10 md:py-14 bg-brand-secondary border-y border-white/5 animate-on-scroll" aria-label="Key statistics">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <p className="text-3xl md:text-4xl font-extrabold mb-1 tabular-nums" style={{ color: s.color }}>{s.value}</p>
              <p className="text-brand-muted text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── Services Bento Grid ──────────────────────────────────────────────────────
const servicesData = [
  {
    icon: <WebIcon />,
    title: 'Web Design & Development',
    description: 'Custom, fast-loading websites that turn London visitors into customers. Built for performance, SEO and conversion — on React, WordPress or Shopify.',
    tags: ['React', 'WordPress', 'Shopify'],
    glowColor: 'rgba(139,92,246,0.15)',
    borderColor: 'rgba(139,92,246,0.3)',
    link: '/services/website-packages',
  },
  {
    icon: <SeoIconSvg />,
    title: 'SEO & Search Marketing',
    description: 'Dominate Google for "London [your service]" searches. On-page, technical SEO and local search built to grow UK businesses in the most competitive market in Britain.',
    tags: ['Local SEO', 'Technical SEO', 'Google'],
    glowColor: 'rgba(236,72,153,0.12)',
    borderColor: 'rgba(236,72,153,0.25)',
    link: '/services/search-engine-marketing-sem',
  },
  {
    icon: <SocialIcon />,
    title: 'Social Media Marketing',
    description: 'Build a following and drive leads across Instagram, Facebook, LinkedIn and TikTok with scroll-stopping content tailored for London audiences.',
    tags: ['Instagram', 'LinkedIn', 'TikTok'],
    glowColor: 'rgba(34,211,238,0.12)',
    borderColor: 'rgba(34,211,238,0.25)',
    link: '/services/social-media',
  },
  {
    icon: <LogoIcon />,
    title: 'Logo & Brand Design',
    description: "A brand identity that stands out in London's crowded market. Logo, colour palette, typography and brand guidelines — done in days, not weeks.",
    tags: ['Logo', 'Branding', 'Guidelines'],
    glowColor: 'rgba(139,92,246,0.12)',
    borderColor: 'rgba(139,92,246,0.25)',
    link: '/services/logo-design',
  },
  {
    icon: <AppIcon />,
    title: 'Mobile App Development',
    description: 'iOS and Android apps built to delight your users, integrate with your systems and scale with your London business growth.',
    tags: ['iOS', 'Android', 'React Native'],
    glowColor: 'rgba(34,211,238,0.12)',
    borderColor: 'rgba(34,211,238,0.25)',
    link: '/services/mobile-app',
  },
  {
    icon: <EcomIcon />,
    title: 'E-Commerce & Dropshipping',
    description: 'Build a store that sells around the clock. Product pages, checkout flows and marketing funnels optimised for UK buyers.',
    tags: ['Shopify', 'WooCommerce', 'Dropshipping'],
    glowColor: 'rgba(236,72,153,0.12)',
    borderColor: 'rgba(236,72,153,0.25)',
    link: '/services/dropshipping',
  },
];

const Services: React.FC = () => {
  const headerRef = useScrollAnimation('slide-in-up');

  return (
    <section className="py-16 md:py-24 bg-brand-primary">
      <div className="container mx-auto px-4 md:px-6">
        <div ref={headerRef} className="text-center mb-12 md:mb-16 animate-on-scroll">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-muted mb-3">What We Do</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Full-Stack Digital Services<br />
            <span className="gradient-text">for London Businesses</span>
          </h2>
          <p className="mt-4 text-brand-muted max-w-xl mx-auto">
            Everything you need under one roof — strategy, design, development and marketing that delivers real results for UK businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {servicesData.map((service, index) => {
            const cardRef = useScrollAnimation('slide-in-up');
            return (
              <div
                ref={cardRef}
                key={index}
                className="animate-on-scroll group"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <Link
                  to={service.link}
                  className="flex flex-col h-full p-6 md:p-7 rounded-2xl glass-panel border transition-all duration-300 hover:-translate-y-1"
                  style={{ borderColor: service.borderColor, boxShadow: '0 0 0 transparent' }}
                  onMouseEnter={e => (e.currentTarget.style.boxShadow = `0 8px 40px ${service.glowColor}, 0 0 0 1px ${service.borderColor}`)}
                  onMouseLeave={e => (e.currentTarget.style.boxShadow = '0 0 0 transparent')}
                  aria-label={`Learn more about ${service.title}`}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: service.glowColor, border: `1px solid ${service.borderColor}` }}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-sm text-brand-muted leading-relaxed mb-5 flex-1">{service.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags.map(tag => (
                      <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-brand-muted border border-white/8">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-1.5 text-sm font-semibold text-white group-hover:gap-2.5 transition-all duration-200" aria-hidden="true">
                    Learn more
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// ─── Process Timeline ─────────────────────────────────────────────────────────
const processSteps = [
  {
    number: '01',
    title: 'Discovery Call',
    description: 'We kick off with a free 30-minute strategy call to understand your business, goals and what success looks like for you in the London market.',
    color: '#8B5CF6',
  },
  {
    number: '02',
    title: 'Strategy & Design',
    description: 'Our team crafts a tailored plan and delivers stunning design concepts within 2 to 3 working days for your review and feedback.',
    color: '#EC4899',
  },
  {
    number: '03',
    title: 'Build & Develop',
    description: 'After sign-off, we build your project with clean code, mobile-first design and all the integrations your UK business needs.',
    color: '#22D3EE',
  },
  {
    number: '04',
    title: 'Launch & Grow',
    description: 'We launch, monitor and refine. Then we help you drive traffic, generate leads and scale across London and the wider UK — month after month.',
    color: '#8B5CF6',
  },
];

const Process: React.FC = () => {
  const headerRef = useScrollAnimation('slide-in-up');

  return (
    <section className="py-16 md:py-24 bg-brand-secondary overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div ref={headerRef} className="text-center mb-12 md:mb-16 animate-on-scroll">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-muted mb-3">How We Work</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            From First Call to <span className="gradient-text">Measurable Results</span>
          </h2>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <div className="absolute top-8 left-0 right-0 h-px hidden lg:block pointer-events-none" aria-hidden="true">
            <div className="h-full w-full" style={{ background: 'linear-gradient(to right, #8B5CF6, #EC4899, #22D3EE, #8B5CF6)' }} />
          </div>

          {processSteps.map((step, index) => {
            const stepRef = useScrollAnimation('slide-in-up');
            return (
              <div
                ref={stepRef}
                key={index}
                className="animate-on-scroll relative"
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-xl font-extrabold text-white mb-6 mx-auto lg:mx-0 relative z-10 border-2"
                  style={{
                    background: `rgba(${step.color === '#8B5CF6' ? '139,92,246' : step.color === '#EC4899' ? '236,72,153' : '34,211,238'},0.12)`,
                    borderColor: step.color,
                    boxShadow: `0 0 24px ${step.color}40`,
                  }}
                >
                  {step.number}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 text-center lg:text-left">{step.title}</h3>
                <p className="text-sm text-brand-muted leading-relaxed text-center lg:text-left">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// ─── Why Us ───────────────────────────────────────────────────────────────────
const whyUsFeatures = [
  {
    title: 'UK Market Expertise',
    description: 'We understand what London and UK businesses need to compete online. From local SEO to UK consumer behaviour, our strategies are built for the British market.',
    gradient: 'from-[#8B5CF6] to-[#EC4899]',
  },
  {
    title: 'Results, Not Excuses',
    description: 'Every deliverable is tied to a measurable outcome — more traffic, more leads, more revenue. We track what matters and report it clearly every month.',
    gradient: 'from-[#EC4899] to-[#22D3EE]',
  },
  {
    title: 'No Jargon, No Fluff',
    description: "We talk plain English, explain every decision and make sure you always know what's happening, why and what comes next.",
    gradient: 'from-[#22D3EE] to-[#8B5CF6]',
  },
  {
    title: 'End-to-End Under One Roof',
    description: 'Design, development, SEO, social, apps — one team, one relationship, one point of contact. No juggling multiple agencies or chasing different suppliers.',
    gradient: 'from-[#8B5CF6] to-[#22D3EE]',
  },
  {
    title: 'Fast Turnaround',
    description: 'First concepts in 2 to 3 days. Full site in 2 to 4 weeks. We work to your deadlines and respect your time — every time.',
    gradient: 'from-[#EC4899] to-[#8B5CF6]',
  },
  {
    title: '1,000+ Businesses Served',
    description: "A decade of delivering for clients across the UK, Ireland and US. We've seen every challenge, every industry and every budget — and we know how to deliver.",
    gradient: 'from-[#22D3EE] to-[#EC4899]',
  },
];

const WhyUs: React.FC = () => {
  const headerRef = useScrollAnimation('slide-in-up');

  return (
    <section className="py-16 md:py-24 bg-brand-primary">
      <div className="container mx-auto px-4 md:px-6">
        <div ref={headerRef} className="text-center mb-12 md:mb-16 animate-on-scroll">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-muted mb-3">Why Designing Dose</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Why London Businesses <span className="gradient-text">Choose Us</span>
          </h2>
          <p className="mt-4 text-brand-muted max-w-xl mx-auto">
            We've worked with 1,000+ businesses across the UK and beyond. Here's what keeps clients coming back.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {whyUsFeatures.map((feature, index) => {
            const cardRef = useScrollAnimation('fade-in');
            return (
              <div
                ref={cardRef}
                key={index}
                className="animate-on-scroll glass-panel rounded-2xl p-6 md:p-7 group hover:-translate-y-1 transition-all duration-300 border border-white/5 hover:border-white/15"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className={`h-0.5 w-12 rounded-full bg-gradient-to-r ${feature.gradient} mb-5 group-hover:w-20 transition-all duration-300`} aria-hidden="true" />
                <h3 className="text-base font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-brand-muted leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// ─── Testimonials ─────────────────────────────────────────────────────────────
const testimonials = [
  {
    name: 'James Harrison',
    role: 'Founder, Harrison & Co London',
    initials: 'JH',
    rating: 5,
    quote: 'Designing Dose completely transformed our digital presence. Within 3 months of launching our new site, enquiries were up 80%. The team is sharp, creative and genuinely invested in your results.',
    accentColor: '#8B5CF6',
  },
  {
    name: 'Emma Clarke',
    role: 'CEO, DigitalFirst UK',
    initials: 'EC',
    rating: 5,
    quote: "We went from barely ranking to the top 3 spots on Google for our main London keywords in under 6 months. Their SEO work is the real deal — proper strategy, not just checkbox activity.",
    accentColor: '#EC4899',
  },
  {
    name: 'Oliver Bennett',
    role: 'Marketing Director, Bennett Retail Group',
    initials: 'OB',
    rating: 5,
    quote: 'Our social media went from an afterthought to a genuine lead channel. The content is consistently on-brand, the posting never slips and the engagement numbers speak for themselves.',
    accentColor: '#22D3EE',
  },
];

const Testimonials: React.FC = () => {
  const headerRef = useScrollAnimation('slide-in-up');

  return (
    <section className="py-16 md:py-24 bg-brand-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div ref={headerRef} className="text-center mb-12 md:mb-16 animate-on-scroll">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-muted mb-3">Client Stories</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            What London Businesses <span className="gradient-text">Say About Us</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-7">
          {testimonials.map((t, index) => {
            const cardRef = useScrollAnimation('slide-in-up');
            return (
              <div
                ref={cardRef}
                key={index}
                className="animate-on-scroll glass-panel rounded-2xl p-6 md:p-7 border border-white/8 hover:border-white/20 hover:-translate-y-1 transition-all duration-300 flex flex-col"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex gap-0.5 mb-4" aria-label={`${t.rating} out of 5 stars`}>
                  {Array.from({ length: t.rating }).map((_, i) => <StarIcon key={i} />)}
                </div>
                <blockquote className="text-sm text-brand-muted leading-relaxed mb-6 flex-1">
                  "{t.quote}"
                </blockquote>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                    style={{ background: `linear-gradient(135deg, ${t.accentColor}60, ${t.accentColor}30)`, border: `1px solid ${t.accentColor}50` }}
                    aria-hidden="true"
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">{t.name}</p>
                    <p className="text-brand-muted text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// ─── FAQ Accordion ────────────────────────────────────────────────────────────
const faqItems = [
  {
    q: 'What digital services does Designing Dose offer in London?',
    a: 'We offer web design and development, SEO, social media marketing, logo and branding, mobile app development, video animation, illustration, e-commerce and dropshipping solutions — everything your London business needs to grow online.',
  },
  {
    q: 'How long does a web design project take?',
    a: 'Most websites are delivered within 2 to 4 weeks depending on scope. We send your first design concepts within 2 to 3 working days of the kick-off call and keep you updated throughout.',
  },
  {
    q: 'Do you work with London startups and small businesses?',
    a: 'Absolutely. We work with early-stage startups, growing SMEs and established London enterprises. Our packages are designed to scale with your budget so you only pay for what you actually need.',
  },
  {
    q: 'Can you help my London business rank higher on Google?',
    a: "Yes. Our SEO team specialises in local London and national UK search optimisation. We've moved clients from page 5 to the top 3 in as little as 5 to 6 months through technical SEO, content strategy and quality link building.",
  },
  {
    q: 'What does web design cost for a London business?',
    a: 'Our web design packages start from £199 and scale based on the complexity and features you need. We offer a free quote call — no commitment, no hard sell, just a straight conversation about your project.',
    link: { text: 'See our website packages', href: '/services/website-packages?tab=informative' },
  },
  {
    q: 'How much does SEO cost for a London business?',
    a: "SEO packages for UK businesses start from £299 per month for a local campaign targeting 5 to 10 keywords. Growth plans with 20 to 25 keywords start from £499 per month, and competitive campaigns with 40 to 60 keywords and link building start from £999 per month. London is one of the most competitive markets in the UK for search, so we always recommend a free site audit first to give you a realistic picture of what ranking actually takes.",
    link: { text: 'See our SEO packages', href: '/services/search-engine-marketing-sem?tab=seo-services' },
  },
  {
    q: 'Do you manage social media for London businesses?',
    a: 'Yes. Social media management starts from £399 per month covering 8 posts on Instagram and Facebook. Standard packages with 24 posts across multiple platforms start from £999 per month. We handle strategy, content creation, scheduling and reporting, adapting the content to your audience and industry.',
    link: { text: 'See our social media packages', href: '/services/social-media' },
  },
  {
    q: 'Can you design a logo for my London business?',
    a: 'Yes. Logo design starts from £49 for a single-concept mark. A multi-concept package with vector files starts from £99, and a full brand identity with colour palette, typography and brand guidelines starts from £199. Commercial rights transfer to you in full once paid.',
    link: { text: 'See our logo and branding packages', href: '/services/logo-design?tab=logo-design' },
  },
  {
    q: 'Do you build e-commerce stores for UK retailers?',
    a: 'Yes. Our e-commerce builds start from £349 for a Shopify or WooCommerce store with up to 10 products. Stores with up to 30 products start from £649, and larger builds with 75 products start from £999. We handle platform setup, product uploads, payment gateways and SEO so your store is ready to sell from day one.',
    link: { text: 'See our e-commerce packages', href: '/services/website-packages?tab=e-commerce' },
  },
  {
    q: 'Can you build a mobile app for a London business?',
    a: 'Yes. App development starts from £2,499 for a high-fidelity clickable prototype ideal for pitching investors or testing your concept. A fully functional MVP with real working code starts from £6,499. We build cross-platform apps using React Native and Flutter so your app runs on both iOS and Android from a single codebase.',
    link: { text: 'Get in touch about your app idea', href: '/contact' },
  },
  {
    q: 'Do you run Google Ads and PPC campaigns for London businesses?',
    a: 'Yes. PPC management starts from £549 per month for campaigns on Google Ads or Meta covering up to 2 campaigns with full setup, optimisation and monthly reporting. Multi-platform growth plans start from £999 per month. The management fee is separate from your ad spend, which goes directly to the platform.',
    link: { text: 'See our PPC packages', href: '/services/search-engine-marketing-sem?tab=ppc-management' },
  },
  {
    q: 'How does local SEO help a London business?',
    a: "Local SEO gets your business into Google Maps results and the local pack when people nearby search for your services. We optimise your Google Business Profile, build local citations across UK directories and create content targeting London-specific and borough-level searches. London is one of the most competitive markets for local search in Britain, so the quality of execution really matters.",
    link: { text: 'See our SEO packages', href: '/services/search-engine-marketing-sem?tab=seo-services' },
  },
  {
    q: 'Do you handle brand identity design beyond just a logo?',
    a: "Yes. Our brand identity packages cover your logo, colour palette, typography system, brand usage guidelines and supporting assets like social media templates and business card designs. In London's crowded market, a consistent brand identity across every touchpoint is what separates businesses that get remembered from those that don't.",
    link: { text: 'See our branding packages', href: '/services/logo-design?tab=logo-design' },
  },
  {
    q: 'Do you create animated videos for London businesses?',
    a: 'Yes. Video animation starts from £399 for a 15-second logo animation or social teaser. A 30-second explainer with custom characters starts from £799, and a full 60-second business video starts from £1,499. These work well as website hero sections, LinkedIn content, YouTube ads and pitch presentations.',
    link: { text: 'See our video animation packages', href: '/services/video-animation' },
  },
  {
    q: 'What makes Designing Dose different from other London digital agencies?',
    a: "We do the full job under one roof — design, development, SEO, social, apps and content — so you get a consistent strategy rather than disconnected work from five different suppliers. We report on outcomes, not activity. And we'll tell you if something is not working before you have to ask. Talk to us, ask hard questions and see how we answer.",
    link: { text: 'Book a free strategy call', href: '/contact' },
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const headerRef = useScrollAnimation('slide-in-up');

  const toggle = (i: number) => setOpenIndex(prev => (prev === i ? null : i));

  return (
    <section className="py-16 md:py-24 bg-brand-primary">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <div ref={headerRef} className="text-center mb-10 md:mb-14 animate-on-scroll">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-muted mb-3">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Common Questions from <span className="gradient-text">London Clients</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`glass-panel rounded-xl border transition-all duration-300 ${isOpen ? 'border-[#8B5CF6]/40' : 'border-white/8 hover:border-white/20'}`}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left focus-visible:ring-2 focus-visible:ring-[#8B5CF6] focus-visible:outline-none rounded-xl"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm md:text-base font-semibold text-white">{item.q}</span>
                  <ChevronDownIcon open={isOpen} />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                  aria-hidden={!isOpen}
                >
                  <p className="px-5 md:px-6 pb-4 md:pb-5 text-sm text-brand-muted leading-relaxed">{item.a}</p>
                  {item.link && (
                    <Link
                      to={item.link.href}
                      className="inline-flex items-center gap-1.5 px-5 md:px-6 pb-5 md:pb-6 text-violet-400 hover:text-violet-300 text-sm font-medium transition-colors"
                    >
                      {item.link.text}
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// ─── CTA Section ─────────────────────────────────────────────────────────────
const CTA: React.FC = () => {
  const { formatPrice } = useCurrency();
  const ctaRef = useScrollAnimation('slide-in-up');

  return (
    <section className="py-16 md:py-24 bg-brand-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div
          ref={ctaRef}
          className="animate-on-scroll relative rounded-3xl p-8 md:p-14 overflow-hidden gradient-border-mask text-center"
        >
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full bg-[#8B5CF6] opacity-[0.08] blur-[80px]" />
          </div>

          <div className="relative z-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-muted mb-4">Ready to Grow?</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4">
              Let's Build Something <span className="gradient-text">Great Together</span>
            </h2>
            <p className="text-brand-muted text-lg max-w-xl mx-auto mb-10">
              Packages from £199. Free strategy call. No contracts. Just straight talk about how we can grow your London business online.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 py-4 px-10 rounded-full text-base font-bold text-white bg-gradient-to-r from-[#8B5CF6] via-[#EC4899] to-[#22D3EE] hover:shadow-[0_0_50px_rgba(139,92,246,0.5)] transition-all duration-300 transform hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-[#8B5CF6] focus-visible:outline-none"
              >
                Book a Free Strategy Call
                <ArrowRightIcon />
              </Link>
              <Link
                to="/services/website-packages"
                className="group inline-flex items-center justify-center gap-2 py-4 px-10 rounded-full text-base font-bold text-white gradient-border-mask hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] transition-all duration-300 transform hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-[#EC4899] focus-visible:outline-none"
              >
                See Our Packages
                <ArrowRightIcon />
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8 flex-wrap">
              <a
                href="tel:+447916689613"
                className="group flex items-center gap-2.5 px-5 py-3 rounded-full glass-panel border border-white/10 hover:border-[#22D3EE]/40 transition-all duration-200 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] focus-visible:ring-2 focus-visible:ring-[#22D3EE] focus-visible:outline-none"
                aria-label="Call our London number"
              >
                <svg className="w-4 h-4 text-[#22D3EE] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-sm text-white font-medium">+44 7916 689613</span>
              </a>

              <a
                href="mailto:info@designingdose.com"
                className="group flex items-center gap-2.5 px-5 py-3 rounded-full glass-panel border border-white/10 hover:border-[#EC4899]/40 transition-all duration-200 hover:shadow-[0_0_20px_rgba(236,72,153,0.15)] focus-visible:ring-2 focus-visible:ring-[#EC4899] focus-visible:outline-none"
                aria-label="Email us at info@designingdose.com"
              >
                <svg className="w-4 h-4 text-[#EC4899] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-sm text-white font-medium">info@designingdose.com</span>
              </a>

              {/* CHANGE 2: globe icon + "Serving London & across the UK" */}
              <div className="flex items-center gap-2.5 px-5 py-3 rounded-full glass-panel border border-white/10">
                <svg className="w-4 h-4 text-[#8B5CF6] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="2" y1="12" x2="22" y2="12"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
                <span className="text-sm text-brand-muted">Serving London &amp; across the UK</span>
              </div>

              {/* CHANGE 3: Reading address visible to users */}
              <div className="flex items-center gap-2.5 px-5 py-3 rounded-full glass-panel border border-white/10">
                <svg className="w-4 h-4 text-[#8B5CF6] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm text-brand-muted">Quadrant House, Reading, RG1 7QE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── Main Export ──────────────────────────────────────────────────────────────
const LondonPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Digital Agency London | Web Design, SEO & Marketing | Designing Dose"
        description="London's trusted digital agency for web design, SEO, social media and branding. 1,000+ clients served across the UK. Free strategy call. Based in London EC2A."
        schema={londonSchema}
      />
      <main>
        <Hero />
        <StatsStrip />
        <Services />
        <Process />
        <WhyUs />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
    </>
  );
};

export default LondonPage;
