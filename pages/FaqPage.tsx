import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SEO from '../components/SEO';

interface LocalFAQ {
  category: string;
  question: string;
  answer: React.ReactNode;
}

const faqData: LocalFAQ[] = [
  {
    category: "Web Design",
    question: "How much does a professional website cost in Ireland or the UK?",
    answer: <>Website costs vary depending on what your business actually needs. A clean, mobile-ready informative site starts from €199 for a single page, while a fully-featured multi-page website with SEO, blog functionality, and a content management system ranges from €749 to €2,499. If you need an e-commerce store, pricing starts from €349 for a basic setup and scales to €4,999 for an enterprise-grade shop with multi-currency support and advanced automation. Every project at Designing Dose comes with 100% ownership rights and a satisfaction guarantee. See our <Link to="/services/website-packages" className="text-brand-accent-end hover:underline font-semibold">full website pricing and what each package includes</Link>.</>
  },
  {
    category: "Web Design",
    question: "How long does it take to build a website?",
    answer: <>A straightforward informative website typically takes 1 to 2 weeks from sign-off. A standard business site with 6 to 10 pages and a CMS takes 2 to 4 weeks. Complex e-commerce builds with product imports, payment gateways, and custom functionality take 4 to 8 weeks. We provide a clear timeline during your initial consultation so there are no surprises. View our <Link to="/services/website-packages" className="text-brand-accent-end hover:underline font-semibold">website packages</Link> to find the right fit for your timeline and budget.</>
  },
  {
    category: "Web Design",
    question: "Will my website work on mobile phones and tablets?",
    answer: <>Yes, every website we build is fully mobile responsive. This is not optional — Google ranks mobile-first, and over 70% of web traffic globally now comes from mobile devices. Your site will look and function perfectly on every screen size, from the smallest smartphone to a widescreen desktop. Explore our <Link to="/services/website-packages" className="text-brand-accent-end hover:underline font-semibold">mobile-ready website packages</Link>.</>
  },
  {
    category: "Web Design",
    question: "Can I update my website myself after it is built?",
    answer: <>Absolutely. From our Standard package upward, we integrate a user-friendly CMS so you can update text, images, blog posts, and products without touching any code. We also offer a brief walkthrough so you feel confident managing your own content from day one. See which <Link to="/services/website-packages" className="text-brand-accent-end hover:underline font-semibold">packages include CMS access</Link>.</>
  },
  {
    category: "Web Design",
    question: "Do you offer website hosting and maintenance after launch?",
    answer: <>We handle full deployment as part of every package. Ongoing hosting and maintenance plans are available and recommended — a neglected website loses security patches, speed, and rankings over time. Ask us about our maintenance packages when you <Link to="/contact" className="text-brand-accent-end hover:underline font-semibold">get in touch</Link>.</>
  },
  {
    category: "E-commerce",
    question: "What is the best platform to build an online store in 2025?",
    answer: <>The right platform depends on your products, volume, and growth ambitions. Shopify is our recommendation for most dropshipping and product-based businesses because of its reliability, payment options, and app ecosystem. WooCommerce suits businesses already on WordPress who want full control. We build on both and will recommend the right one during your free consultation. See our <Link to="/services/website-packages" className="text-brand-accent-end hover:underline font-semibold">e-commerce packages</Link>.</>
  },
  {
    category: "E-commerce",
    question: "How much does it cost to build an online store?",
    answer: <>Our e-commerce packages start from €349 for a starter store with up to 10 products and payment gateway setup. A fully-branded store with up to 75 products, reviews integration, and advanced navigation costs €999. High-volume business stores with 500 products, loyalty programs, and multi-currency support start from €2,499. Compare <Link to="/services/website-packages" className="text-brand-accent-end hover:underline font-semibold">all e-commerce packages side by side</Link>.</>
  },
  {
    category: "E-commerce",
    question: "Can customers pay with Apple Pay, Klarna, and PayPal on my store?",
    answer: <>Yes. From our Professional Store package upward, we configure multi-payment gateways including Stripe, PayPal, Apple Pay, Google Pay, and Klarna. This increases conversion rates significantly because customers can pay the way they prefer. See what payment options are available <Link to="/services/website-packages" className="text-brand-accent-end hover:underline font-semibold">in each package</Link>.</>
  },
  {
    category: "Dropshipping",
    question: "Is dropshipping still profitable in 2025?",
    answer: <>Yes — but not the way it was in 2016. The era of generic stores selling low-quality products from AliExpress with 30-day shipping is over. What works in 2025 is niche branding, faster fulfilment through private agents and local warehouses, and organic content marketing via TikTok and Instagram Reels. We build stores designed for this modern approach — branded, automated, and built to convert from day one. See our <Link to="/services/dropshipping" className="text-brand-accent-end hover:underline font-semibold">dropshipping store packages</Link>.</>
  },
  {
    category: "Dropshipping",
    question: "How much does it cost to start a dropshipping business?",
    answer: <>Our Micro package starts at €999 and includes niche guidance, supplier vetting, a fully branded custom store, and 25 imported products ready to sell. More comprehensive setups with 100 to 500 products, pricing automation, and email marketing flows range from €2,999 to €8,999. Every package includes 100% ownership of your store. Compare our <Link to="/services/dropshipping" className="text-brand-accent-end hover:underline font-semibold">dropshipping packages</Link>.</>
  },
  {
    category: "Dropshipping",
    question: "Do you help find winning products and reliable suppliers?",
    answer: <>Yes. Every dropshipping package includes supplier research, vetting, and product selection. We check suppliers for delivery speed, product quality, and reliability before recommending them. Higher-tier packages include backup supplier options and pricing automation so your margins are protected even when supplier prices change. See what <Link to="/services/dropshipping" className="text-brand-accent-end hover:underline font-semibold">product and supplier research is included</Link>.</>
  },
  {
    category: "Dropshipping",
    question: "How long does shipping take for dropshipping orders to UK and USA customers?",
    answer: <>Standard AliExpress shipping can take 2 to 4 weeks, which kills conversion rates in markets where customers expect Amazon-level speed. Our Advanced and Pro packages include guidance on using private agents and regional fulfilment centres that cut delivery to 3 to 7 days for UK, USA, and Canadian customers. Learn about our <Link to="/services/dropshipping" className="text-brand-accent-end hover:underline font-semibold">dropshipping setup packages</Link>.</>
  },
  {
    category: "Mobile Apps",
    question: "How much does it cost to build a mobile app in Ireland or the UK?",
    answer: <>App development pricing depends on complexity. A visual prototype for investor pitches or user testing costs €2,499. A functional MVP with core features, user authentication, and App Store deployment starts at €6,499. A full business app with in-app messaging, maps, media uploads, and a robust admin panel costs €10,999. Enterprise-grade apps with custom backend architecture, AI integration, and microservices start from €44,999. See all <Link to="/services/mobile-app-development" className="text-brand-accent-end hover:underline font-semibold">mobile app development packages</Link>.</>
  },
  {
    category: "Mobile Apps",
    question: "How long does it take to build a mobile app?",
    answer: <>A visual prototype takes 2 to 3 weeks. A functional MVP takes 6 to 8 weeks. A full business app takes 3 to 4 months. Enterprise solutions take 5 to 7 months or more depending on scope. We provide a detailed timeline after your discovery workshop. View our <Link to="/services/mobile-app-development" className="text-brand-accent-end hover:underline font-semibold">app development packages</Link>.</>
  },
  {
    category: "Mobile Apps",
    question: "What is the difference between a native app and a cross-platform app?",
    answer: <>Native apps are built separately for iOS (Swift) and Android (Kotlin), giving maximum performance but costing roughly double since you are maintaining two codebases. Cross-platform apps (which we build using Flutter) share one codebase for both platforms, reducing development time and cost by 30 to 50% while delivering near-native performance. For 95% of business apps — booking systems, e-commerce, social platforms, service apps — Flutter is the smarter choice. Explore our <Link to="/services/mobile-app-development" className="text-brand-accent-end hover:underline font-semibold">cross-platform app packages</Link>.</>
  },
  {
    category: "Mobile Apps",
    question: "Will I own the app code once it is built?",
    answer: <>Yes, 100%. Every package includes full code ownership transfer. You receive all source files, project repositories, and assets. We do not retain any intellectual property rights over your application. See our <Link to="/services/mobile-app-development" className="text-brand-accent-end hover:underline font-semibold">app development packages</Link>.</>
  },
  {
    category: "SEO and Search Marketing",
    question: "How long does SEO take to show results?",
    answer: <>Realistic timelines: you will typically see movement in rankings within 2 to 3 months. Significant, stable organic traffic growth takes 6 to 12 months of consistent work. Anyone who promises number one rankings in 30 days is misleading you. SEO is a compounding investment — the longer it runs, the more it compounds. Our monthly SEO packages include transparent reporting so you see exactly what is happening each month. View our <Link to="/services/search-engine-marketing-sem" className="text-brand-accent-end hover:underline font-semibold">SEO packages and see what is included</Link>.</>
  },
  {
    category: "SEO and Search Marketing",
    question: "How much does SEO cost per month in the UK and Ireland?",
    answer: <>Our SEO packages start at €299 per month for the Startup plan covering 5 to 10 keywords, site audit, and core technical optimisation. The Standard plan at €499 per month covers 20 to 25 keywords with schema markup, Google My Business management, and blog content creation. Advanced plans covering 40 to 60 keyword clusters with high-authority backlinks cost €999 per month. Enterprise SEO for competitive national or global campaigns starts at €1,999 per month. Compare <Link to="/services/search-engine-marketing-sem" className="text-brand-accent-end hover:underline font-semibold">all SEO packages</Link>.</>
  },
  {
    category: "SEO and Search Marketing",
    question: "What is the difference between SEO and PPC?",
    answer: <>SEO (Search Engine Optimisation) is the process of ranking your website organically in search results without paying per click. It takes months to build but the traffic is free and compounds over time. PPC (Pay-Per-Click) like Google Ads or Meta Ads delivers instant traffic but stops the moment you stop paying. The most effective digital strategy combines both — PPC for immediate revenue while SEO builds long-term dominance. See our <Link to="/services/search-engine-marketing-sem" className="text-brand-accent-end hover:underline font-semibold">combined SEM packages</Link>.</>
  },
  {
    category: "SEO and Search Marketing",
    question: "Does SEO still work with Google AI Overviews?",
    answer: <>Yes, and in some ways it matters more. Google's AI Overviews pull their answers from authoritative, well-structured websites with strong E-E-A-T signals — Experience, Expertise, Authoritativeness, and Trust. If your site is properly optimised with schema markup, clear content structure, and topical authority, it gets cited inside AI Overviews rather than being displaced by them. This is exactly what our SEO strategy is built around in 2025. See how our <Link to="/services/search-engine-marketing-sem" className="text-brand-accent-end hover:underline font-semibold">SEO packages address AI search</Link>.</>
  },
  {
    category: "Logo Design and Branding",
    question: "How much does a professional logo design cost?",
    answer: <>Our logo packages start at €49 for a clean starter logo with 2 concepts and transparent PNG files — ideal for new businesses needing to get moving quickly. The most popular Standard package at €199 includes 5 concepts, unlimited revisions, full vector files, a mini brand guide, and social media profile logos. For a complete brand identity with an iconography set, full social media kit, and product mockups, our Pro package is €399. View <Link to="/services/logo-design" className="text-brand-accent-end hover:underline font-semibold">all logo design packages</Link>.</>
  },
  {
    category: "Logo Design and Branding",
    question: "Will I own the copyright to my logo?",
    answer: <>Yes. Every logo package includes 100% ownership rights. Once the project is complete and payment is finalised, the logo and all associated files belong entirely to you. You can use it on any medium, trademark it, and modify it as you wish. See what is included <Link to="/services/logo-design" className="text-brand-accent-end hover:underline font-semibold">in each logo package</Link>.</>
  },
  {
    category: "Logo Design and Branding",
    question: "What file formats will I receive?",
    answer: <>Standard packages include JPG and PNG. From the Basic package upward you receive print-ready PDF files. Our Standard package and above include full vector files — AI and EPS formats — that can be scaled to any size without losing quality, from a business card to a billboard. Compare <Link to="/services/logo-design" className="text-brand-accent-end hover:underline font-semibold">logo packages</Link>.</>
  },
  {
    category: "Logo Design and Branding",
    question: "Can I use AI-generated images for my book cover?",
    answer: <>Technically yes, but most traditional publishers and Amazon KDP reviewers are increasingly flagging AI-generated cover art, and readers have become skilled at identifying it. A professionally illustrated cover dramatically outperforms an AI-generated one in click-through rates and reader trust. If budget is a constraint, our e-book cover package starting at €99 gives you a professionally designed cover that looks credibly human-made and positions your book competitively on any platform. See our <Link to="/services/logo-design" className="text-brand-accent-end hover:underline font-semibold">book cover design packages</Link>.</>
  },
  {
    category: "Video Animation",
    question: "How much does an explainer video cost?",
    answer: <>A 15-second logo animation or intro costs €399. A 30-second 2D explainer video with professional scriptwriting, custom characters, and background music costs €799. A 60-second motion graphics video for B2B or SaaS starts at €1,499. Full-length 90-second to 3-minute cinematic animations range from €2,499 to €4,999. All videos include commercial usage rights. See our <Link to="/services/video-animation" className="text-brand-accent-end hover:underline font-semibold">full video animation pricing</Link>.</>
  },
  {
    category: "Video Animation",
    question: "How long does it take to produce an animated video?",
    answer: <>A 15-second intro takes 5 business days. A 30-second explainer takes 10 business days. A 60-second motion graphics video takes 15 business days. Premium 90-second to 3-minute productions take 3 to 6 weeks depending on complexity and revision rounds. View <Link to="/services/video-animation" className="text-brand-accent-end hover:underline font-semibold">all animation packages</Link>.</>
  },
  {
    category: "Illustration",
    question: "How much does it cost to illustrate a children's book?",
    answer: <>A character concept design for a single main character costs €149. A complete short children's book with 10 to 12 full-colour illustrations, cover design, and print-ready formatting costs €1,699. A standard 24-page picture book costs €2,999. A premium 32-page publishing-ready package with an animated book trailer and author website landing page costs €4,999. Compare <Link to="/services/illustration" className="text-brand-accent-end hover:underline font-semibold">all children's book illustration packages</Link>.</>
  },
  {
    category: "Illustration",
    question: "Who owns the copyright to the illustrations once the book is done?",
    answer: <>Every illustration package at Designing Dose includes 100% ownership rights transfer upon completion. You own the characters, scenes, and all artwork outright. You can publish, merchandise, and create sequels without any licensing fees. See our <Link to="/services/illustration" className="text-brand-accent-end hover:underline font-semibold">illustration packages</Link>.</>
  },
  {
    category: "Illustration",
    question: "How long does it take to illustrate a children's book?",
    answer: <>A single character design takes 3 to 5 business days. A 12-page short book takes approximately 4 to 6 weeks. A full 24 to 32 page picture book takes 8 to 12 weeks depending on complexity, background detail, and revision rounds. View our <Link to="/services/illustration" className="text-brand-accent-end hover:underline font-semibold">illustration packages</Link>.</>
  },
  {
    category: "Social Media",
    question: "How much does social media management cost per month?",
    answer: <>Our Starter plan at €399 per month covers 8 posts, 2 stories, Facebook and Instagram management, and monthly reporting. The Standard plan at €999 per month includes 24 posts, competitor research, community management, Facebook ad campaigns, and daily monitoring. For full multi-platform management with video production, influencer collaboration, and unlimited ad campaigns, our Enterprise Plus plan starts at €3,499 per month. Compare <Link to="/services/social-media" className="text-brand-accent-end hover:underline font-semibold">all social media packages</Link>.</>
  },
  {
    category: "Social Media",
    question: "Which social media platform is best for my business in 2025?",
    answer: <>It depends on who you are trying to reach. For B2C businesses selling products or lifestyle services, Instagram and TikTok deliver the highest organic reach in 2025. For B2B services, LinkedIn remains dominant. Facebook is most effective when combined with paid advertising. We analyse your target audience and recommend the right platform mix during your initial strategy session. View our [social media packages](/services/social-media).</>
  }
];

const categories = [
  "All",
  "Web Design",
  "E-commerce",
  "Dropshipping",
  "Mobile Apps",
  "SEO and Search Marketing",
  "Logo Design and Branding",
  "Video Animation",
  "Illustration",
  "Social Media"
];

const FaqPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  const headerRef = useScrollAnimation('slide-in-up');
  const listRef = useScrollAnimation('fade-in');

  const filteredFaqs = activeCategory === "All" 
    ? faqData 
    : faqData.filter(faq => faq.category === activeCategory);

  const toggleFaq = (question: string) => {
    setOpenQuestion(openQuestion === question ? null : question);
  };

  const faqPageSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.question // Visual representation is identical for schema crawling simple text
      }
    }))
  };

  return (
    <>
      <SEO 
        title="FAQ | Web Design & SEO Agency Questions | Designing Dose"
        description="Answers to the most common questions about our web design, SEO, mobile app and digital marketing services. Transparent pricing, no hidden fees."
        keywords="Frequently Asked Questions, Designing Dose FAQs, Web Design Price Ireland, SEO Cost UK, Dropshipping Packages, Full Ownership App Code"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(faqPageSchema)}} />

      <div className="bg-brand-primary text-white overflow-x-hidden min-h-screen">
        {/* Header Section */}
        <div ref={headerRef} className="pt-28 pb-12 md:pt-40 md:pb-16 bg-brand-secondary relative border-b border-gray-800/80 animate-on-scroll">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-accent-start/5 to-transparent pointer-events-none"></div>
          
          <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h1>
            <p className="text-base md:text-lg text-brand-muted max-w-2xl mx-auto leading-relaxed mb-8">
              Everything you need to know about our services. Can't find your answer? Contact our team directly.
            </p>

            {/* Category selection row */}
            <div className="w-full max-w-full overflow-x-auto pb-2 relative z-20 scrollbar-thin scrollbar-thumb-brand-secondary scrollbar-track-transparent md:flex md:justify-center">
              <div className="bg-brand-primary p-1.5 rounded-lg flex space-x-2 whitespace-nowrap min-w-min mx-auto w-fit border border-gray-800/50">
                {categories.map((cat, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setActiveCategory(cat);
                      setOpenQuestion(null); // Close active open FAQs
                    }}
                    className={`px-4 py-2 rounded-md font-semibold text-xs md:text-sm transition-all duration-300 ${
                      activeCategory === cat
                        ? 'bg-gradient-to-r from-brand-accent-start via-brand-accent-middle to-brand-accent-end text-white shadow-lg shadow-brand-accent-start/20'
                        : 'text-brand-muted hover:bg-brand-secondary/80 hover:text-white'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Accordion List Section */}
        <div ref={listRef} className="py-16 md:py-24 container mx-auto px-4 md:px-6 max-w-4xl animate-on-scroll">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 text-brand-muted">
              No questions found in this category.
            </div>
          ) : (
            <div className="space-y-4">
              {filteredFaqs.map((faq, index) => {
                const isOpen = openQuestion === faq.question;
                return (
                  <div 
                    key={faq.question} 
                    className="border border-gray-700/50 rounded-lg overflow-hidden bg-brand-secondary shadow-lg transition-all duration-300 hover:border-brand-accent-start/40"
                  >
                    <button
                      onClick={() => toggleFaq(faq.question)}
                      className="w-full flex justify-between items-center text-left p-6 bg-brand-secondary hover:bg-brand-primary/20 transition-colors duration-200"
                      aria-expanded={isOpen}
                      aria-controls={`faq-item-answer-${index}`}
                    >
                      <h3 className="text-base md:text-lg font-semibold text-white pr-4">{faq.question}</h3>
                      <span className={`transform transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
                        <svg className="w-5 h-5 text-brand-accent-end flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4"></path>
                        </svg>
                      </span>
                    </button>
                    <div
                      id={`faq-item-answer-${index}`}
                      role="region"
                      className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                    >
                      <div className="overflow-hidden">
                        <div className="p-6 pt-0 text-brand-muted text-sm md:text-base leading-relaxed">
                          <div className="border-t border-gray-700/60 pt-5">
                            {faq.answer}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default FaqPage;
