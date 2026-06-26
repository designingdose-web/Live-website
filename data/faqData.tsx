import React from 'react';

export interface FAQItem {
  q: string;
  a: string;
  link?: { text: string; href: string };
  link2?: { text: string; href: string };
}

export interface FAQCategory {
  id: string;
  title: string;
  gradient: string;
  icon: React.ReactNode;
  items: FAQItem[];
}

export const faqCategories: FAQCategory[] = [
  {
    id: 'web-design',
    title: 'Informative Website',
    gradient: 'from-violet-500 to-purple-700',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    items: [
      {
        q: 'How much does an informative website cost?',
        a: 'Our informative website packages start from £199 for a clean single-page site. A 4 to 5 page site starts from £449, and a 6 to 8 page site with a blog and full responsivity is £749. Advanced builds with booking tools range from £1,299 to £2,499.',
        link: { text: 'See our website packages', href: '/services/website-packages?tab=informative' },
      },
      {
        q: 'How long does it take to build an informative website?',
        a: 'A basic 1 to 5 page website is typically ready within 1 to 2 weeks once we have your content. Larger 6 to 10 page custom sites usually take 2 to 4 weeks.',
      },
      {
        q: 'Will my website be mobile-friendly?',
        a: 'Yes. Every website we build is fully responsive and thoroughly tested across mobile, tablet, and desktop before launch. Mobile design is our baseline.',
      },
      {
        q: 'Do I need to provide my own content and images?',
        a: 'We can help with professional copywriting and licensed high-quality stock imagery. The more details you share, the better we can craft it.',
        link: { text: 'See our website packages', href: '/services/website-packages?tab=informative' },
      },
      {
        q: 'Can I update the website myself after launch?',
        a: 'Yes. Our Standard package and above include an easy-to-use content management system so you can edit text and images without coding.',
      },
      {
        q: 'What makes a small business website effective?',
        a: 'It must load fast, look professional, clearly explain your offer, and have obvious calls to action, strong copy, and sound on-page SEO.',
        link: { text: 'Talk to us about your website', href: '/contact' },
      },
      {
        q: 'What is the difference between an informative website and an e-commerce website?',
        a: 'An informative website tells visitors who you are, what you do, and how to reach you. It works like a digital brochure or business card online. An e-commerce website does all of that but also lets customers browse products, add items to a cart, and pay online. If you plan to sell products directly from your site, you need an e-commerce build. If you just need a strong online presence, an informative site is the right starting point.',
        link: { text: 'Compare website packages', href: '/services/website-packages' },
      },
      {
        q: 'Do you provide ongoing support after the website launches?',
        a: 'Yes. Higher-tier packages include 30 days of post-launch support at no extra charge. We also offer ongoing maintenance packages to keep your site secure, updated, and running at full speed. Ask us about maintenance options on the discovery call.',
        link: { text: 'Get in touch to discuss support options', href: '/contact' },
      },
    ],
  },
  {
    id: 'ecommerce',
    title: 'E-commerce Website',
    gradient: 'from-pink-500 to-rose-600',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    items: [
      {
        q: 'How much does an e-commerce website cost?',
        a: 'Our e-commerce stores start from £349 (up to 10 products). Mid-range stores with up to 30 products start from £649. Complete builds with 75 products start from £999, and large setups from £1,499. Enterprise stores start at £4,999.',
        link: { text: 'See our e-commerce packages', href: '/services/website-packages?tab=e-commerce' },
      },
      {
        q: 'Which platform do you build e-commerce stores on?',
        a: 'We primarily build on Shopify for maximum reliability and WooCommerce/WordPress for full design and technical control. We advise on the ideal fit based on your catalog size.',
      },
      {
        q: 'How long does it take to build an online store?',
        a: 'Standard Shopify setups with up to 30 products typically take 3 to 5 weeks. Highly customised enterprise designs with unique integrations take longer.',
      },
      {
        q: 'Can you migrate my existing store to a new platform?',
        a: 'Yes. We handle end-to-end migrations including products, customers, order logs, and URL routes to preserve search visibility and business continuity.',
      },
      {
        q: 'How do I get my products found on Google?',
        a: 'Product SEO relies on structured catalog pages, proper schema markup, fast page loads, and smart copy. We build these best practices into every store.',
        link: { text: 'Learn about our SEO services', href: '/services/search-engine-marketing-sem?tab=seo-services' },
      },
      {
        q: 'What payment methods can my store accept?',
        a: 'We configure modern gateways supporting credit cards, PayPal, Apple Pay, Google Pay, and buy-now-pay-later options such as Klarna or Clearpay.',
        link: { text: 'Enquire about e-commerce setup', href: '/contact' },
      },
    ],
  },
  {
    id: 'dropshipping',
    title: 'Dropshipping',
    gradient: 'from-cyan-400 to-blue-600',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    items: [
      {
        q: 'How much does a dropshipping store cost?',
        a: 'Starter setups covering up to 15 products start from £999. A 30-product store starts from £2,999. Mid-level setups with 50 products start from £5,999, and comprehensive builds with 100 or more products start from £8,999.',
        link: { text: 'Explore our dropshipping packages', href: '/services/dropshipping' },
      },
      {
        q: 'What is dropshipping and how does it work?',
        a: 'Dropshipping is an inventory-free model where supplier packages ship directly to consumers upon purchase. We design and connect your store to automated suppliers.',
      },
      {
        q: 'Which suppliers and platforms do you integrate with?',
        a: 'We connect Shopify and WooCommerce stores with suppliers like AliExpress, Spocket, Zendrop, and CJ Dropshipping so orders are fulfilled automatically without you touching the stock.',
      },
      {
        q: 'How long does it take to set up a dropshipping store?',
        a: 'Basic 15-product setups take 2 to 3 weeks. Complex multi-channel setups with custom automated order rules typically take 4 to 6 weeks.',
      },
      {
        q: 'Do you help with product sourcing and supplier research?',
        a: 'Yes. Our specialized plans include dedicated research into hot niches, supplier vetting, margin calculation, and shipping timeline analysis.',
      },
      {
        q: 'Can a dropshipping store compete with established brands?',
        a: 'Absolutely. Success relies on choosing a tight niche, creating premium custom brand styling, and applying solid digital ad strategies.',
        link: { text: 'Get in touch about dropshipping', href: '/contact' },
      },
      {
        q: 'Do I need to hold inventory or rent warehouse space for dropshipping?',
        a: 'No. That is the core advantage of dropshipping. You never purchase stock upfront, hold it in a warehouse, or handle shipping logistics. When a customer places an order, it is automatically sent to your supplier who packs and ships directly to the customer. Your only investment is the store setup and your marketing budget.',
        link: { text: 'See our dropshipping packages', href: '/services/dropshipping' },
      },
      {
        q: 'Which platform do you build dropshipping stores on?',
        a: 'We build primarily on Shopify, which is the most reliable and widely supported platform for dropshipping. It integrates natively with all major supplier apps including DSers for AliExpress, Spocket, Zendrop, and CJ Dropshipping, and handles payments, inventory sync, abandoned cart recovery, and order management cleanly out of the box.',
        link: { text: 'Explore our dropshipping packages', href: '/services/dropshipping' },
      },
      {
        q: 'Will my dropshipping store orders be processed automatically?',
        a: 'Yes. From our Micro plan upward we set up automated inventory and price sync so your product listings update when supplier stock or pricing changes. Higher plans add full funnel automation including abandoned cart emails, welcome sequences, upsell triggers, and order tracking notifications. The goal is a store that runs without you manually processing anything day to day.',
        link: { text: 'Compare dropshipping packages', href: '/services/dropshipping' },
      },
      {
        q: 'What ongoing support do I get after the store launches?',
        a: 'Post-launch support ranges from 5 days on the Micro plan to 60 days on the Enterprise plan. During that window we help with technical issues, product adjustments, and supplier queries. We also provide a store management guide and training sessions depending on your plan. After the support period we offer ongoing management packages for clients who want continued hands-on help.',
        link: { text: 'See all dropshipping plans', href: '/services/dropshipping' },
      },
    ],
  },
  {
    id: 'mobile-apps',
    title: 'Mobile Apps',
    gradient: 'from-orange-400 to-amber-500',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    items: [
      {
        q: 'How much does it cost to build a mobile app?',
        a: 'Interactive design prototypes start at £2,499. Code-complete MVPs start from £6,499, and advanced apps with custom API backends and booking functions scale upward.',
        link: { text: 'Request an app design brief', href: '/contact' },
      },
      {
        q: 'What is the difference between a prototype and a functional app?',
        a: 'A prototype is a visual clickable representation of your app flow used to pitch investors. A functional app contains real development code and database integrations.',
      },
      {
        q: 'How long does it take to build a mobile app?',
        a: 'Prototypes require 3 to 5 weeks. Working MVPs take between 8 to 14 weeks. Deep enterprise solutions may require 4 to 9 months of collaborative engineering.',
      },
      {
        q: 'Do you build iOS and Android apps?',
        a: 'Yes. We construct cross-platform apps using React Native or Flutter, allowing a single high-quality codebase to cover both major store formats.',
        link: { text: 'Compare app frameworks', href: '/blog/mobile-app-native-vs-cross-platform' },
      },
      {
        q: 'Who owns the app and code after the project is complete?',
        a: 'You do. Once finalized, full IP and code ownership transfers to you. We maintain no residual licensing fees or locks or hooks.',
      },
      {
        q: 'Do you help with app store submission?',
        a: 'Absolutely. We prepare the build profiles, configure descriptive store profiles, compile store assets, and handle the entire submission checklist.',
      },
      {
        q: 'What is a Discovery Workshop and why is it needed before development starts?',
        a: 'A Discovery Workshop is the structured first phase of every app build. We map out your user journeys, identify the core features, define the project scope, and flag any technical risks before writing a line of code. It results in validated wireframes and a clear project plan. Building without this phase is one of the main reasons app projects go over budget or need to be rebuilt.',
        link: { text: 'See our app development packages', href: '/services/mobile-app-development' },
      },
      {
        q: 'Can I start with a basic MVP and add more features over time?',
        a: 'Yes, and this is often the smartest approach. Launching with an MVP gets you to market quickly and lets you gather real user feedback. You then invest in features you know people actually want rather than features you assumed they would want. We build with scalability in mind from day one so the codebase can grow without needing to be rewritten. Our MVP Launch package starts from €6,499.',
        link: { text: 'See all app packages', href: '/services/mobile-app-development' },
      },
      {
        q: 'What technology stack do you use to build apps?',
        a: 'We use Flutter and React Native for cross-platform development, Firebase and AWS for backend infrastructure and databases, and Figma for design and prototyping. For enterprise builds we implement custom backend architectures, REST and GraphQL APIs, and integrate with CRM and ERP systems. We use the right technology for each project rather than forcing every build into the same stack.',
        link: { text: 'Learn more about our app development', href: '/services/mobile-app-development' },
      },
      {
        q: 'What happens after the app is built and launched?',
        a: 'Every package includes a period of post-launch bug support ranging from 1 month on the MVP plan up to 1 year on the Enterprise plan. During that window we fix any bugs that appear in production at no extra charge. We also handle App Store and Google Play submissions as part of the build, and offer ongoing maintenance packages for clients who want continued support.',
        link: { text: 'See our app packages and support periods', href: '/services/mobile-app-development' },
      },
    ],
  },
  {
    id: 'seo',
    title: 'SEO',
    gradient: 'from-emerald-400 to-green-600',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    items: [
      {
        q: 'How much does SEO cost?',
        a: 'Our SEO programs start with a Starter Audit package at £299/mo (5-10 keywords). Growth campaigns start from £499/mo, and premium competitive link building begins at £999/mo.',
        link: { text: 'See our SEO packages', href: '/services/search-engine-marketing-sem?tab=seo-services' },
      },
      {
        q: 'How long does SEO take to show results?',
        a: 'Expect initial keyword movement and impressions within 3 to 6 months. SEO is a long-term compounding asset that reduces your reliance on paid ads.',
      },
      {
        q: 'What is the difference between on-page and off-page SEO?',
        a: 'On-page covers everything on your site (headings, structure, speed, meta tags). Off-page concerns external trust signals like building authoritative links.',
      },
      {
        q: 'What is local SEO and does my business need it?',
        a: 'Local SEO is the process of making your business visible to people searching for services in your specific area. It involves optimising your Google Business Profile, building local citations, and creating location-relevant content. If you serve customers in a specific city or region, local SEO is essential and often less competitive than national rankings.',
        link: { text: 'See our Dublin location page', href: '/digital-agency-dublin' },
        link2: { text: 'See our London location page', href: '/digital-agency-london' },
      },
      {
        q: 'How do AI search engines affect my SEO strategy?',
        a: 'Platforms like ChatGPT and Gemini pull highly structured, context-rich info. We optimize using clear markup and structured FAQ content.',
      },
      {
        q: 'How do I know if my SEO is working?',
        a: 'We monitor organic impressions, click-to-lead ratios, keyword clusters, and analytics, providing straightforward, jargon-free monthly reports.',
        link: { text: 'See our SEO packages', href: '/services/search-engine-marketing-sem?tab=seo-services' },
      },
      {
        q: 'Do you guarantee a number 1 ranking on Google?',
        a: 'No reputable agency can guarantee a specific ranking position because Google\'s algorithm is proprietary and changes constantly. Anyone who promises a guaranteed number 1 position is misleading you. What we do guarantee is consistent work following Google\'s best practice guidelines, transparent monthly reporting, and a strategy built around your specific keywords and competition.',
        link: { text: 'See our SEO packages', href: '/services/search-engine-marketing-sem?tab=seo-services' },
      },
      {
        q: 'What does a monthly SEO package include?',
        a: 'All SEO packages include a site audit, keyword research and mapping, meta tag optimisation, XML sitemap and robots.txt setup, Google Analytics and Search Console configuration, content creation, and a monthly performance report. Higher tiers add schema markup, Google Business Profile management, Core Web Vitals fixes, high-authority guest posts, heatmap integration, and quarterly strategy roadmaps.',
        link: { text: 'Compare all SEO packages', href: '/services/search-engine-marketing-sem?tab=seo-services' },
      },
    ],
  },
  {
    id: 'ppc',
    title: 'PPC',
    gradient: 'from-blue-500 to-indigo-600',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    items: [
      {
        q: 'How much does PPC management cost?',
        a: 'Management starts from £549/mo for up to 2 campaigns. Scaling campaigns start at £999/mo, and dominant multi-platform plans start from £1,899/mo.',
        link: { text: 'See our PPC packages', href: '/services/search-engine-marketing-sem?tab=ppc-management' },
      },
      {
        q: 'What is the difference between a PPC management fee and ad spend?',
        a: 'The management fee is paid for our strategy, build, and monitoring. Ad spend is the direct media budget paid to platforms (Google or Meta).',
      },
      {
        q: 'What is the difference between SEO and PPC?',
        a: 'SEO focuses on organic rankings that build equity over time. PPC purchases targeted traffic instantly but stops when funding is paused.',
      },
      {
        q: 'Which platforms do you manage PPC campaigns on?',
        a: 'We build expert campaigns across Google Search, Meta (Facebook & Instagram ads), TikTok Ads, Microsoft, and professional LinkedIn networks.',
      },
      {
        q: 'How quickly does paid advertising show results?',
        a: 'Clicks begin on day one. High performance and conversion refinement typically manifest within 2 to 4 weeks, once we have sufficient target data.',
      },
      {
        q: 'How do you measure whether my PPC campaigns are delivering value?',
        a: 'We track leads, call clicks, store checkouts, and Return on Ad Spend (ROAS) to transparently show how many opportunities represent your budget.',
      },
      {
        q: 'What is negative keyword mapping and why does it matter?',
        a: 'Negative keywords tell Google not to show your ads for irrelevant searches. For example, if you sell premium software, you would add "free" and "cheap" as negative keywords so you are not paying for clicks from people who will never convert. Without a negative keyword list, a significant portion of your budget gets wasted on the wrong audience. We build one from day one of every campaign.',
        link: { text: 'See our PPC packages', href: '/services/search-engine-marketing-sem?tab=ppc-management' },
      },
      {
        q: 'Can I run SEO and PPC at the same time?',
        a: 'Yes, and it is often the most effective approach. PPC gets you in front of customers immediately while SEO builds long-term organic authority. Running both gives you coverage across the search results page, which increases trust and often lowers your cost per acquisition because users see your brand in multiple places before clicking. We can build a combined strategy if that fits your budget.',
        link: { text: 'Explore our combined SEM strategy', href: '/services/search-engine-marketing-sem' },
      },
      {
        q: 'Will you audit my existing ad account before starting?',
        a: 'Yes. Every new PPC engagement starts with a full account audit. We look for wasted spend, tracking gaps, poorly structured campaigns, and ads that are already performing well. This gives us a clear baseline to build from rather than starting blind, and often uncovers quick wins that pay for the first month of management fees.',
        link: { text: 'Talk to us about your ad account', href: '/contact' },
      },
    ],
  },
  {
    id: 'social-media',
    title: 'Social Media',
    gradient: 'from-blue-400 to-cyan-500',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
      </svg>
    ),
    items: [
      {
        q: 'How much does social media management cost?',
        a: 'Branded organic calendars start from £399/mo (8 custom posts). Growth level is £549/mo, standard active is £999/mo, and Pro is £1,999/mo.',
        link: { text: 'See our social packages', href: '/services/social-media' },
      },
      {
        q: 'Which social media platforms do you manage?',
        a: 'We craft optimized content pipelines for Instagram, Facebook, LinkedIn, TikTok, and X, selecting formats that match your buyer profiles.',
      },
      {
        q: 'Do you create the content or do I provide it?',
        a: 'We design the copy, assets, and schedule. You review and approve the planned editorial calendar in advance to ensure message alignment.',
      },
      {
        q: 'Can social media generate leads and sales?',
        a: 'Absolutely. Organic presence creates essential trust and authority, while targeted paid campaigns build highly specific commercial lead flow.',
      },
      {
        q: 'How do you measure whether social media is working?',
        a: 'We track meaningful engagement metrics, referral clicks, message conversions, and lead forms, avoiding vague vanity follower metrics.',
      },
      {
        q: 'How long before social media shows results?',
        a: 'Organic momentum requires 3 to 6 months of steady posting to mature, whereas paid social campaigns yield active traffic almost instantly.',
      },
      {
        q: 'How many posts will I get per month on each plan?',
        a: 'The Starter plan includes 8 posts per month. The Basic plan includes 12 posts. The Standard plan includes 24 posts. The Professional plan includes 36 posts. The Enterprise Plus plan covers 60 or more posts per month. Each post is designed and written by our team to match your brand voice and goals.',
        link: { text: 'Compare all social media plans', href: '/services/social-media' },
      },
      {
        q: 'Is my ad spend budget included in the monthly management fee?',
        a: 'No. The monthly management fee covers strategy, content creation, scheduling, and reporting. Your ad spend is a separate budget paid directly to Facebook, Instagram, LinkedIn, or whichever platforms your campaigns run on. We recommend a realistic ad spend budget based on your goals during onboarding so you know the total cost upfront.',
        link: { text: 'See our social media packages', href: '/services/social-media' },
      },
      {
        q: 'Can I review and approve posts before they go live?',
        a: 'Yes. We prepare a monthly content calendar in advance which you can review and approve before anything is published. If you want changes to a post, let your account manager know and we will adjust it. The goal is to give you full visibility without the daily time burden of creating content yourself.',
        link: { text: 'See how our social media management works', href: '/services/social-media' },
      },
      {
        q: 'Do you respond to comments and messages on our behalf?',
        a: 'Community management is included from the Basic plan upward. This covers responding to comments and direct messages in line with your brand voice. The Standard plan adds reputation management including review monitoring. The Enterprise Plus plan includes 24/7 community management and a crisis response process.',
        link: { text: 'See all social media plans', href: '/services/social-media' },
      },
    ],
  },
  {
    id: 'logo-design',
    title: 'Logo Design',
    gradient: 'from-amber-400 to-orange-500',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 009 11M5 11c0-3.866 3.134-7 7-7s7 3.134 7 7a7 7 0 01-7 7m0-14V3" />
      </svg>
    ),
    items: [
      {
        q: 'How much does a logo design cost?',
        a: 'We offer single clean vector concepts from £49. Multi-concept designs are £99. Standard vector packs with identity rules are £199, and Pro is £399.',
        link: { text: 'See our logo design packages', href: '/services/logo-design?tab=logo-design' },
      },
      {
        q: 'What is the difference between a logo and a brand identity?',
        a: 'A logo is a quick mark. A brand identity is a comprehensive rulebook governing color families, typography pairings, grid uses, and style rules.',
      },
      {
        q: 'How many concepts will I get to choose from?',
        a: 'Starter programs offer 2 distinct options; Pro packages scale to unlimited concepts developed simultaneously by several brand designers.',
      },
      {
        q: 'What file formats will I receive?',
        a: 'You receive production-grade files including SVG, transparent PNG formats, high-resolution JPGs, and full vector workspace files (AI/EPS).',
      },
      {
        q: 'Do you own the logo after the project is finished?',
        a: 'No. Upon project settlement, full copyright transfer is completely yours. You enjoy unrestricted use for any print or digital application.',
      },
      {
        q: 'Can you redesign an existing logo?',
        a: 'Yes. We routinely refresh dated marks: optimizing geometry, strengthening curves, and updating font structures to look crisp online.',
      },
      {
        q: 'How many revision rounds are included in logo packages?',
        a: 'The Starter package includes 2 revision rounds. The Basic package includes up to 4 revision rounds. The Standard and Pro packages both include unlimited revisions within the agreed scope so you can keep refining until the design is exactly right.',
        link: { text: 'Compare logo packages', href: '/services/logo-design' },
      },
      {
        q: 'Can you design to match my existing brand guidelines?',
        a: 'Yes. If you already have brand guidelines, a colour palette, or a style guide, share them when you brief us and we will design within those parameters. This applies across logo work, brochures, flyers, and digital creatives. Brand consistency across all your materials is something we take seriously.',
        link: { text: 'See our design services', href: '/services/logo-design' },
      },
    ],
  },
  {
    id: 'brochures',
    title: 'Brochures',
    gradient: 'from-orange-500 to-amber-600',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    items: [
      {
        q: 'How much does brochure design cost?',
        a: 'Bi-fold brochures start at £149. Tri-fold profiles start at £249. Corporate profiles of 4-8 pages are £499, and booklets go up to £899.',
        link: { text: 'See our brochure design packages', href: '/services/logo-design?tab=brochures' },
      },
      {
        q: 'What types of brochures do you design?',
        a: 'We design standard folds, booklet layouts, catalogues, and annual digests, providing both print-ready layouts and interactive digital versions.',
      },
      {
        q: 'What is the difference between a bi-fold and a tri-fold brochure?',
        a: 'A bi-fold is folded once to yield 4 structural pages. A tri-fold folds twice to create 6 modular panels, optimal for product listings.',
      },
      {
        q: 'Will I receive print-ready files?',
        a: 'Yes. All packages feature certified press-ready PDFs with correct bleed zones, margins, and professional CMYK spectrum colors.',
      },
      {
        q: 'How long does brochure design take?',
        a: 'Standard folds are designed in 5 to 7 days. Robust booklets and multi-product catalogs take 2 to 3 weeks of layout formulation.',
      },
      {
        q: 'Do you provide editable source files?',
        a: 'Original design source files (Adobe InDesign/Illustrator format) are provided for our Classic tier brochure designs and upwards.',
      },
    ],
  },
  {
    id: 'flyers',
    title: 'Flyers',
    gradient: 'from-amber-600 to-rose-600',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    items: [
      {
        q: 'How much does flyer design cost?',
        a: 'Single-side digital artwork begins at £79. Print-ready setups start from £129, double-sided layouts are £199, and custom bundles are £349.',
        link: { text: 'See our flyer design packages', href: '/services/logo-design?tab=flyers' },
      },
      {
        q: 'Do you design flyers for print and digital use?',
        a: 'Yes. Print files are exported at 300 DPI in CMYK spectrum, and digital variants are optimized in RGB for quick loading in messaging feeds.',
      },
      {
        q: 'Can you design double-sided flyers?',
        a: 'Yes. Our specialized Double Impact and Marketing programs both include complete front and back designs for optimal marketing use.',
      },
      {
        q: 'What file formats will I receive?',
        a: 'You receive high-res interactive PDFs and lightweight JPG/PNG image versions. High tiers include source files in InDesign/Illustrator/PSD.',
      },
      {
        q: 'How quickly can you turn around a flyer design?',
        a: 'Promo flyers can be completed in 48 hours. Deluxe business listings and multi-option flyers are built within 3 to 5 business days.',
      },
      {
        q: 'Can you include a QR code in the flyer design?',
        a: 'Yes. We can generate and seamlessly embed high-contrast QR codes directly into your layout so viewers can scan straight to landing pages.',
      },
    ],
  },
  {
    id: 'digital-creatives',
    title: 'Digital Creatives',
    gradient: 'from-rose-500 to-red-600',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    items: [
      {
        q: 'How much do digital creatives cost?',
        a: 'Our Social Starter of 3 templates starts at £99. Dynamic Ad Creative packs with testing options are £199, and motion layouts are £399.',
        link: { text: 'See our digital creatives packages', href: '/services/logo-design?tab=digital-creatives' },
      },
      {
        q: 'What are digital creatives?',
        a: 'Digital creatives are ready-to-use visual assets for social media, paid advertising, and digital marketing. We produce static social posts, ad banners in multiple sizes, animated stories and reels, and full campaign bundles.',
      },
      {
        q: 'Can you create animated social media content?',
        a: 'Yes. Our Motion programs deliver high-resolution MP4/GIF assets designed to stand out in active social media feeds.',
      },
      {
        q: 'What platforms are the designs sized for?',
        a: 'We render assets matched to native aspect ratios for Meta ads, Instagram reels, TikTok layouts, LinkedIn feeds, and Google display panels.',
      },
      {
        q: 'Why do A/B testing variations matter in an ad creative pack?',
        a: 'A/B options test slightly different hooks and visual balances in parallel, identifying the highest-yielding ad layout quickly.',
      },
      {
        q: 'How many designs are included per package?',
        a: 'Starter includes 3 structured template layouts. Ad packs provide 5 versions, and campaign suites provide 15+ comprehensive assets.',
      },
    ],
  },
  {
    id: 'video-animation',
    title: 'Video Animation',
    gradient: 'from-red-500 to-pink-600',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    items: [
      {
        q: 'How much does an animated video cost?',
        a: 'Logo loops start from £399. A 30S character explainer starts at £799. Standard 60S clips are £1,499, and premium 4K narratives start at £2,499.',
        link: { text: 'Explore video options', href: '/services/video-animation' },
      },
      {
        q: 'What types of animated videos do you create?',
        a: 'We build explainer animations, mobile-app demos, corporate presentations, dynamic logo intros, social promos, and multi-asset video campaigns.',
      },
      {
        q: 'How long does it take to produce an animated video?',
        a: 'Teaser promos require 2 weeks. Custom explainer profiles take 3 to 4 weeks, and detailed character features take 4 to 8 weeks.',
      },
      {
        q: 'Do you write the script?',
        a: 'Yes. Our specialized packages include full storytelling, scenario outlines, voice direction cues, and professional text drafting.',
      },
      {
        q: 'What video format and resolution will I receive?',
        a: 'Files are delivered as globally supported MP4s in crisp 1080p, scaling to cinema-ready 4K files on our premium packages.',
      },
      {
        q: 'Can I use the video across different platforms and campaigns?',
        a: 'Yes. You receive full commercial usage and copyright transfers, with zero ongoing distribution fees or licensing residuals.',
      },
      {
        q: 'Who provides the voiceover for the animated video?',
        a: 'All packages include an AI-generated voiceover selected from a library of natural-sounding voices across multiple accents and tones to match your brand. If you prefer a professional human voiceover artist, this is available as an add-on. We can also work with a voiceover file you record or source yourself.',
        link: { text: 'See our animation packages', href: '/services/video-animation' },
      },
      {
        q: 'Can the video be resized for different social media formats?',
        a: 'Yes. A social media resizing add-on delivers your video in square (1:1) and vertical (9:16) formats alongside the standard widescreen version, covering Instagram Reels, TikTok, YouTube Shorts, and Facebook Stories. The Business Motion (60-second) package includes the social media resize as standard.',
        link: { text: 'See all animation packages and add-ons', href: '/services/video-animation' },
      },
      {
        q: 'How many revision rounds are included in each animation package?',
        a: 'The Teaser and Intro package includes 2 revision rounds. All other packages include unlimited revisions so you can refine the animation until you are fully satisfied. Revisions are reviewed and applied at each stage of production rather than all at the end, which keeps the process moving efficiently.',
        link: { text: 'Compare animation packages', href: '/services/video-animation' },
      },
      {
        q: 'Can the video be used in paid advertising campaigns?',
        a: 'Yes. Every video we produce is cleared for use in paid advertising including Google Video Ads, Facebook and Instagram ads, YouTube pre-roll, LinkedIn Sponsored Video, and TikTok ads. For paid ad campaigns we recommend the 15-second Teaser, 30-second Explainer, or the vertical social media resized versions depending on the platform and objective.',
        link: { text: 'See our PPC packages too', href: '/services/search-engine-marketing-sem?tab=ppc-management' },
      },
    ],
  },
  {
    id: 'book-cover',
    title: 'Book Cover',
    gradient: 'from-violet-500 to-indigo-600',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    items: [
      {
        q: 'How much does a book cover design cost?',
        a: 'Standard digital covers start at £99. Print covers with spine calculations and back covers are £199, and illustrative custom formats are £349.',
        link: { text: 'See our book cover design packages', href: '/services/illustration?tab=book-cover' },
      },
      {
        q: 'What is the difference between an e-book cover and a print cover?',
        a: 'An ebook cover is a frontend RGB visual. A print cover provides a flat CMYK wrap incorporating precise spine size calculations and barcode areas.',
      },
      {
        q: 'Do you design full wrap covers with front, back, and spine?',
        a: 'Yes. All our print-package design tasks incorporate full flat wraps formatted to match your printing press spine requirements.',
      },
      {
        q: 'What files will I receive with my book cover?',
        a: 'You receive high-res uploads (Kindle guidelines, etc.), print-certified PDF formats, 3D promo mockups, and the option for design source files.',
      },
      {
        q: 'Can you design a matching series of book covers?',
        a: 'Yes. We offer coordinated bundles for trilogies and long series to maintain brand unity across Amazon catalogues.',
      },
      {
        q: 'Do you provide 3D mockups for marketing?',
        a: 'Yes. Print packages include high-gloss clickable 3D book renders optimal for social media ads and web promotions.',
      },
    ],
  },
  {
    id: 'ebook-illustration',
    title: 'Ebook Illustration',
    gradient: 'from-fuchsia-500 to-purple-600',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    items: [
      {
        q: 'How much does ebook illustration cost?',
        a: 'A starter pack of 5 spot illustrations starts from £149. Chapter header artwork for 10 chapters starts from £299. A pack of 5 full-colour full-page illustrations starts from £649. A set of 10 full-page illustrations starts from £1,199. A 20-illustration graphic story set starts from £2,199. A full 30-piece premium suite with typesetting and a cover starts from £3,499.',
        link: { text: 'See our ebook illustration packages', href: '/services/illustration?tab=ebook-illustration' },
      },
      {
        q: 'What types of ebook illustrations do you create?',
        a: 'We create spot illustrations for chapter breaks and section dividers, chapter header artwork, full-page colour illustrations, and graphic novel-style sequential art. Styles range from simple black and white vector work to full-colour digital painting, and we adapt to suit the tone and subject matter of your ebook.',
      },
      {
        q: 'What is the difference between spot illustrations and full-page illustrations?',
        a: 'Spot illustrations are small decorative images placed at chapter openings or as section dividers. Full-page illustrations take up an entire page and are much more detailed, usually depicting a key scene, concept, or character. The choice depends on how visually rich you want the reading experience to be.',
      },
      {
        q: 'Can you create graphic novel or comic-style ebook illustrations?',
        a: 'Yes. Our Graphic Story package is designed for sequential art, covering 20 illustrations with consistent panelling, character models across every page, text bubble layout, and full colour. It works equally well for fiction in comic format and for non-fiction content that benefits from a more visual, story-driven presentation.',
      },
      {
        q: 'How many illustrations are included per package?',
        a: 'The Spot Art Starter includes 5 illustrations. Chapter Decor includes 10. Visual Highlights includes 5 full-page pieces. Narrative Flow includes 10 full-page pieces. Graphic Story includes 20, and Premium Artistry includes 30 or more illustrations in a mixed format with typesetting and a cover included.',
      },
      {
        q: 'Do I own the rights to the illustrations once the project is complete?',
        a: 'Yes. Once the project is paid in full, full commercial rights transfer to you. You can use the illustrations in your ebook, print edition, website, or any other commercial application without any ongoing licensing fees or restrictions.',
      },
      {
        q: 'What illustration styles do you work in for ebooks?',
        a: 'We work across a range of styles including clean line art, watercolour-style digital painting, detailed ink-style illustration, and minimalist vector illustration. When you brief us, share reference images that capture the feel you are going for and we will match or adapt our approach accordingly. Consistency across all illustrations in your book is non-negotiable.',
        link: { text: 'See our ebook illustration packages', href: '/services/illustration?tab=ebook-illustration' },
      },
    ],
  },
  {
    id: 'children-book-illustration',
    title: "Children's Book Illustration",
    gradient: 'from-violet-500 to-fuchsia-600',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    items: [
      {
        q: "How much does children's book illustration cost?",
        a: "Character design for a single main character starts from £149. A full cast of 3 characters with model sheets starts from £349. A full book storyboard starts from £699. A complete 10 to 12 page illustrated picture book with cover starts from £1,699. A full 20 to 24 page story with professional formatting starts from £2,999. A deluxe 28 to 32 page publishing package with marketing assets starts from £4,999.",
        link: { text: "See our children's book illustration packages", href: '/services/illustration?tab=children-book-illustration' },
      },
      {
        q: "What is included in a full children's book illustration package?",
        a: "A full package covers character design and approval, detailed storyboarding, full-colour page illustrations, front and back cover design, professional typesetting, and print-ready files for Amazon KDP or IngramSpark. Higher packages also include an ebook conversion, a 3D mockup, and a social media marketing kit.",
      },
      {
        q: 'Do you handle text placement and typesetting?',
        a: "Yes. From the Standard Story (12-page) package upward, we handle professional typesetting using child-friendly, readable fonts. Text is placed so it does not cover key artwork, and the result is a print-ready PDF you can upload directly to your publishing platform without needing a separate typesetter.",
      },
      {
        q: 'Can you help me publish on Amazon KDP or IngramSpark?',
        a: "We provide print-ready files formatted to the exact specifications required by Amazon KDP and IngramSpark. Our Publishing Master package also includes hands-on KDP upload assistance, walking you through the submission step by step so your book goes through smoothly without rejection on a technicality.",
      },
      {
        q: "How do you develop the illustration style for my book?",
        a: "We start by discussing your story, the target age range, and any visual references or styles you love. We then create initial character concept sketches for your approval before starting any page illustrations. This approval stage ensures the visual direction is right before we invest time in the full project.",
      },
      {
        q: "How long does full children's book illustration take?",
        a: "A 10 to 12 page illustrated book typically takes 6 to 8 weeks from final character approval to delivery. A 20 to 24 page book takes 8 to 12 weeks. Timelines depend on revision rounds and how quickly you provide feedback at each milestone. We build a clear schedule at the start so you know what to expect at every step.",
      },
      {
        q: 'Do you create original characters and backgrounds from scratch?',
        a: 'Yes. Every character, scene, and background is created as original artwork for your specific book. We do not use stock illustrations or clipart. The character design phase always comes first where we develop the main character and supporting cast in multiple poses and expressions before any scene illustration begins. This ensures the characters look consistent throughout the entire book.',
        link: { text: 'See our children\'s book packages', href: '/services/illustration?tab=children-book-illustration' },
      },
      {
        q: 'How many illustrated pages are included in each children\'s book package?',
        a: 'The Standard Story package covers 10 to 12 illustrated pages. The Full Story package covers 20 to 24 pages. The Publishing Master package covers 28 to 32 pages. All page counts refer to illustrated spreads. If your manuscript is longer, additional pages can be added at a per-page rate. Get in touch with your page count and we will provide an accurate quote.',
        link: { text: 'See all children\'s book packages', href: '/services/illustration?tab=children-book-illustration' },
      },
    ],
  },
];
