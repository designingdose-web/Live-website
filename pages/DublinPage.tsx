import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const DublinPage: React.FC = () => {
  const heroRef = useScrollAnimation('slide-in-up');
  const section1Ref = useScrollAnimation('fade-in');
  const section2Ref = useScrollAnimation('slide-in-up');
  const section3Ref = useScrollAnimation('fade-in');
  const faqRef = useScrollAnimation('slide-in-up');
  const ctaRef = useScrollAnimation('slide-in-up');

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://designingdose.com/#dublin",
      "name": "Designing Dose Dublin",
      "url": "https://designingdose.com/digital-agency-dublin",
      "telephone": "+353-1-254-8762",
      "email": "info@designingdose.com",
      "image": "https://res.cloudinary.com/dmaqptknc/image/upload/v1765127202/new_web2_lbyr0c.webp",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "77 Camden Street Lower, Saint Kevin's",
        "addressLocality": "Dublin",
        "addressRegion": "Dublin",
        "postalCode": "D02 XE80",
        "addressCountry": "IE"
      },
      "geo": { "@type": "GeoCoordinates", "latitude": 53.3331, "longitude": -6.2647 },
      "openingHoursSpecification": [{ "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "09:00", "closes": "18:00" }],
      "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "120", "bestRating": "5" },
      "priceRange": "$$",
      "areaServed": ["Dublin", "Leinster", "Ireland"],
      "description": "Full-service digital agency in Dublin offering web design, SEO, social media marketing, mobile app development, logo design, video animation and more."
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://designingdose.com/" },
        { "@type": "ListItem", "position": 2, "name": "Digital Agency Dublin", "item": "https://designingdose.com/digital-agency-dublin" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What is the best digital agency in Dublin?", "acceptedAnswer": { "@type": "Answer", "text": "Designing Dose is consistently rated among the top digital agencies in Dublin with a 4.9 Google rating, Trustpilot 4.2, and Clutch Top Rated status. We are the only full-service agency in Dublin offering web development, SEO, social media, branding, mobile apps, video animation, and illustration with transparent published pricing." } },
        { "@type": "Question", "name": "How do I choose a digital marketing agency in Dublin?", "acceptedAnswer": { "@type": "Answer", "text": "Look for four things: published pricing so you know what you are getting into, proven results with documented case studies, a full-service offering so you do not need multiple agencies, and a local Dublin presence so your account manager understands the Irish market. Designing Dose ticks all four." } },
        { "@type": "Question", "name": "How long does SEO take to work in Dublin?", "acceptedAnswer": { "@type": "Answer", "text": "SEO typically shows measurable movement within 3 months and significant results within 6 to 12 months. For local Dublin searches, you can often see faster results because local competition is lower than national markets. Our clients average 3x traffic growth within 6 months." } },
        { "@type": "Question", "name": "Does Designing Dose work with small businesses in Dublin?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Most of our Dublin clients are small to medium businesses including cafes, clinics, law firms, e-commerce stores, and local service businesses. Our entry-level website package starts at $199 and our starter SEO package is $299/month." } },
        { "@type": "Question", "name": "What areas in Dublin does Designing Dose serve?", "acceptedAnswer": { "@type": "Answer", "text": "We serve all of Dublin and the greater Leinster area including Dublin 1 through Dublin 24, Dun Laoghaire, Swords, Tallaght, Clondalkin, and surrounding counties. We also serve clients across Ireland remotely." } }
      ]
    }
  ];

  return (
    <>
      <SEO
        title="Digital Agency Dublin | Web Design, SEO & Marketing | Designing Dose"
        description="Dublin's #1 full-service digital agency. Custom websites, SEO, social media, app development & branding. 10+ years, 1,000+ clients, 4.9 on Google. Get a free quote."
        schema={schema}
      />

      <div className="bg-brand-primary text-white overflow-x-hidden">

        {/* HERO */}
        <div ref={heroRef} className="pt-28 pb-20 md:pt-40 md:pb-32 bg-brand-secondary animate-on-scroll relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-accent-start/5 to-transparent pointer-events-none"></div>
          <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
            <span className="text-brand-accent-middle font-bold tracking-wider uppercase text-sm mb-4 block">Dublin, Ireland</span>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">The Digital Agency <span className="gradient-text">Dublin Trusts</span></h1>
            <p className="text-lg md:text-xl text-brand-muted max-w-3xl mx-auto leading-relaxed mb-8">
              Web design, SEO, social media, mobile apps and branding — all under one roof, with transparent pricing you can see before you call us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-gradient-to-r from-brand-accent-start to-brand-accent-end text-white font-bold py-4 px-8 rounded-lg hover:opacity-90 transition-opacity">
                Get a Free Quote
              </Link>
              <a href="https://wa.me/353879630583" target="_blank" rel="noopener noreferrer" className="border border-brand-accent-middle text-brand-accent-middle font-bold py-4 px-8 rounded-lg hover:bg-brand-accent-middle hover:text-white transition-all">
                WhatsApp Us
              </a>
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-8 text-sm text-brand-muted">
              <span>⭐ 4.9/5 Google Rating</span>
              <span>🏆 Clutch Top Rated</span>
              <span>✅ 1,000+ Clients</span>
              <span>📍 77 Camden St Lower, Dublin</span>
            </div>
          </div>
        </div>

        {/* WHAT WE DO */}
        <section ref={section1Ref} className="py-16 md:py-24 bg-brand-primary animate-on-scroll">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">What Does a <span className="gradient-text">Digital Agency in Dublin</span> Actually Do?</h2>
              <p className="text-brand-muted text-lg leading-relaxed">
                A digital agency helps your business grow online. At Designing Dose, that means we handle every part of your digital presence — from building your website and ranking it on Google, to managing your social media, designing your brand identity, and developing your mobile app.
              </p>
              <p className="text-brand-muted text-lg leading-relaxed mt-4">
                Most Dublin businesses waste money by hiring three or four separate agencies for these services. We combine them under one roof with a single point of contact, a unified strategy, and pricing that starts at <strong className="text-white">$199 for a website</strong> and <strong className="text-white">$299/month for SEO</strong>.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Web Design & Development", desc: "Custom websites that convert visitors into customers. Mobile-responsive, SEO-ready, and delivered fast. From $199.", link: "/services/website-packages" },
                { title: "SEO Services Dublin", desc: "Rank on Google and get cited by AI assistants like ChatGPT. Traditional SEO and GEO combined. From $299/month.", link: "/services/search-engine-marketing-sem" },
                { title: "Social Media Marketing", desc: "End-to-end social media management across Instagram, TikTok, LinkedIn and Facebook. Average 5x engagement lift.", link: "/services/social-media" },
                { title: "Logo Design & Branding", desc: "Professional logos and brand identities for Dublin startups and established businesses. From $99.", link: "/services/logo-design" },
                { title: "Mobile App Development", desc: "iOS and Android apps using Flutter and React Native. From concept to App Store launch. From $999.", link: "/services/mobile-app-development" },
                { title: "Video Animation", desc: "Explainer videos, motion graphics and corporate animations that boost conversions. From $299.", link: "/services/video-animation" },
              ].map((s, i) => (
                <Link key={i} to={s.link} className="bg-brand-secondary rounded-xl p-6 hover:border hover:border-brand-accent-middle transition-all group">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-accent-middle transition-colors">{s.title}</h3>
                  <p className="text-brand-muted text-sm leading-relaxed">{s.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section ref={section2Ref} className="py-16 md:py-24 bg-brand-secondary animate-on-scroll">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Why Dublin Businesses <span className="gradient-text">Choose Designing Dose</span></h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { n: "1", title: "Transparent Pricing", desc: "We publish our prices online. No discovery call required just to find out what something costs. You know exactly what you are getting before you pick up the phone." },
                { n: "2", title: "Everything Under One Roof", desc: "Most agencies specialise in one or two services. We offer eight — website, SEO, social media, brand identity, mobile app, video, illustration, and dropshipping." },
                { n: "3", title: "Real Results Documented", desc: "Every monthly report focuses on what matters: rankings, traffic growth, leads, and revenue. Our average client sees 3x organic traffic growth within six months." },
                { n: "4", title: "10+ Years Experience", desc: "In business since 2014, we have worked with over 1,000 clients across Ireland, UK, USA, and Canada. We know what works for your industry." },
                { n: "5", title: "Local Dublin Team", desc: "Our Camden Street office is staffed by people who live and work in Ireland. We understand the Irish market, Irish consumer behaviour, and local search." },
              ].map((r, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <span className="text-3xl font-extrabold gradient-text shrink-0">{r.n}</span>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{r.title}</h3>
                    <p className="text-brand-muted text-sm leading-relaxed">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section ref={section3Ref} className="py-16 md:py-24 bg-brand-primary animate-on-scroll">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Dublin Clients Say</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { quote: "Within 4 months, our organic traffic doubled, and the quality of leads has improved significantly.", name: "Sarah Jenkins", role: "Marketing Director, TechFlow" },
                { quote: "Trevor and team were very professional and cooperative throughout. Got a website, logo, hosting and whatnot. Highly recommend!", name: "Daniel Prescott", role: "Dublin Client" },
                { quote: "They created a website within a short time period with no issues and excellent communication throughout.", name: "John M.", role: "Dublin Client" },
              ].map((t, i) => (
                <div key={i} className="bg-brand-secondary rounded-xl p-6 border border-white/5">
                  <p className="text-brand-muted text-sm leading-relaxed mb-4 italic">"{t.quote}"</p>
                  <p className="text-white font-bold text-sm">{t.name}</p>
                  <p className="text-brand-accent-middle text-xs">{t.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section ref={faqRef} className="py-16 md:py-24 bg-brand-secondary animate-on-scroll">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions — <span className="gradient-text">Digital Agency Dublin</span></h2>
            <div className="space-y-6">
              {[
                { q: "What is the best digital agency in Dublin?", a: "Designing Dose is consistently rated among the top digital agencies in Dublin, with a 4.9 Google rating, Trustpilot 4.2, and Clutch Top Rated status. We are the only full-service agency in Dublin offering web development, SEO, social media, branding, mobile apps, video animation, and illustration with transparent published pricing." },
                { q: "How do I choose a digital marketing agency in Dublin?", a: "Look for four things: published pricing so you know what you are getting into, proven results with documented case studies, a full-service offering so you do not need multiple agencies, and a local Dublin presence so your account manager understands the Irish market. Designing Dose ticks all four." },
                { q: "How long does SEO take to work in Dublin?", a: "SEO typically shows measurable movement within 3 months and significant results within 6 to 12 months. For local Dublin searches, you can often see faster results because local competition is lower than national markets. Our clients average 3x traffic growth within 6 months." },
                { q: "Does Designing Dose work with small businesses in Dublin?", a: "Yes. Most of our Dublin clients are small to medium businesses — cafes, clinics, law firms, e-commerce stores, and local service businesses. Our entry-level website package starts at $199 and our starter SEO package is $299/month." },
                { q: "What areas in Dublin does Designing Dose serve?", a: "We serve all of Dublin and the greater Leinster area, including Dublin 1 through Dublin 24, Dun Laoghaire, Swords, Tallaght, Clondalkin, and surrounding counties. We also serve clients across Ireland remotely." },
              ].map((f, i) => (
                <div key={i} className="border border-white/10 rounded-xl p-6">
                  <h3 className="text-white font-bold mb-3">{f.q}</h3>
                  <p className="text-brand-muted text-sm leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section ref={ctaRef} className="py-16 md:py-24 bg-brand-primary animate-on-scroll">
          <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Get a Free Quote From <span className="gradient-text">Dublin's Top Digital Agency</span></h2>
            <p className="text-brand-muted text-lg mb-4">We offer a free 30-minute strategy session for all new Dublin clients — no obligation, no sales pitch. We will review your current website, your search rankings, and your competitors.</p>
            <div className="bg-brand-secondary rounded-xl p-6 mb-8 text-left inline-block">
              <p className="text-white font-bold mb-1">📞 +353 1 254 8762</p>
              <p className="text-white font-bold mb-1">✉️ info@designingdose.com</p>
              <p className="text-brand-muted text-sm">📍 77 Camden Street Lower, Dublin D02 XE80</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-gradient-to-r from-brand-accent-start to-brand-accent-end text-white font-bold py-4 px-8 rounded-lg hover:opacity-90 transition-opacity">
                Book a Free Strategy Session
              </Link>
              <a href="https://wa.me/353879630583" target="_blank" rel="noopener noreferrer" className="border border-brand-accent-middle text-brand-accent-middle font-bold py-4 px-8 rounded-lg hover:bg-brand-accent-middle hover:text-white transition-all">
                WhatsApp Us Now
              </a>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default DublinPage;
