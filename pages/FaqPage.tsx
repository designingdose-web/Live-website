import React, { useState, useMemo, useRef } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { useCurrency } from '../context/CurrencyContext';
import { faqCategories } from '../data/faqData';
import type { FAQItem, FAQCategory } from '../data/faqData';

// ─── SCHEMA (plain text for structured data) ────────────────────────────────
const schemaFAQs = [
  // Informative Website
  { q: 'How much does an informative website cost?', a: 'Our informative website packages start from £199 for a clean single-page professional site. A 4 to 5 page site with basic SEO starts from £449, and a 6 to 8 page site with a blog and full mobile responsiveness starts from £749. More advanced builds with animations and booking systems run from £1,299 to £2,499.' },
  { q: 'How long does it take to build an informative website?', a: 'A basic 1 to 5 page website is typically ready within 1 to 2 weeks once we have your content and assets. A 6 to 10 page site with custom features usually takes 2 to 4 weeks. We give you a clear timeline upfront and keep you updated throughout.' },
  { q: 'Will my website be mobile-friendly?', a: 'Yes. Every website we build is fully responsive and tested across mobile, tablet, and desktop before going live. Mobile-first design is the standard, not an option, because over 60% of web traffic now comes from smartphones.' },
  { q: 'Do I need to provide my own content and images?', a: 'You can provide your own content, but it is not required. We can help with copywriting and have access to licensed stock images. The more detail you share about your business, the better the outcome.' },
  { q: 'Can I update the website myself after launch?', a: 'Yes. Our Standard package and above include a content management system so you can update text, images, and blog posts without any coding knowledge. We also offer ongoing maintenance packages where we handle all updates for you.' },
  { q: 'What makes a small business website effective?', a: 'A good small business website loads fast, looks professional on all screen sizes, clearly explains what you offer, and makes it easy for visitors to get in touch. Strong copy, clear calls to action, and basic on-page SEO are the foundations.' },

  // E-commerce Website
  { q: 'How much does an e-commerce website cost?', a: 'Our e-commerce stores start from £349 for a starter Shopify or WooCommerce setup with up to 10 products. A more complete store with up to 30 products starts from £649. Stores with up to 75 products start from £999, and larger builds with 125 to 500 products range from £1,499 to £2,499. Enterprise stores with unlimited products start from £4,999.' },
  { q: 'Which platform do you build e-commerce stores on?', a: 'We most commonly build on Shopify for product-based businesses that want reliability and ease of management, and WooCommerce for businesses already on WordPress. The right platform depends on your product type, expected order volume, and how much technical control you want.' },
  { q: 'How long does it take to build an online store?', a: 'A straightforward Shopify store with up to 30 products typically takes 3 to 5 weeks. Larger stores with custom functionality, subscriptions, or complex shipping rules take longer. We scope this properly upfront so you have a realistic launch date.' },
  { q: 'Can you migrate my existing store to a new platform?', a: 'Yes. We handle store migrations including products, customer data, order history, and URL structures to minimise disruption to your rankings and business. We have a process to cover every aspect of a safe migration.' },
  { q: 'How do I get my products found on Google?', a: 'Product visibility on Google comes from well-structured product pages, proper schema markup, fast load times, and an ongoing SEO strategy. We build stores with search visibility in mind from day one.' },
  { q: 'What payment methods can my store accept?', a: 'Most stores we build support credit and debit cards via Stripe or PayPal, Apple Pay, Google Pay, and buy-now-pay-later options like Klarna or Clearpay. The specific options depend on your platform and the markets you sell to.' },

  // Dropshipping
  { q: 'How much does a dropshipping store cost?', a: 'Our dropshipping packages start from £999 for a Micro plan covering up to 15 products with supplier integration. A 30-product store starts from £2,999. Stores with 50 products start from £5,999, and setups with 100 or more products start from £8,999.' },
  { q: 'What is dropshipping and how does it work?', a: 'Dropshipping is a retail model where you sell products without holding stock. When a customer orders, the supplier ships directly to them. We build the store and connect it to your suppliers so the process is automated.' },
  { q: 'Which suppliers and platforms do you integrate with?', a: 'We integrate with AliExpress, Oberlo, Spocket, CJ Dropshipping, and other major suppliers. We build on Shopify, WooCommerce, and multi-channel platforms to help you sell across multiple marketplaces from one store.' },
  { q: 'How long does it take to set up a dropshipping store?', a: 'A basic 15-product store can be live within 2 to 3 weeks. Larger stores with 50 or more products and automated order workflows typically take 4 to 6 weeks depending on supplier setup and review rounds.' },
  { q: 'Do you help with product sourcing and supplier research?', a: 'Yes. Our higher-tier packages include product research and supplier vetting to help you find profitable, reliable products before building the store. We look at competition levels, margins, shipping times, and supplier reliability.' },
  { q: 'Can a dropshipping store compete with established brands?', a: 'Yes, with the right niche and marketing. Dropshipping works best when you focus on a specific product category, build a strong brand identity, and use paid advertising or SEO to drive targeted traffic.' },
  { q: 'Do I need to hold inventory or rent warehouse space for dropshipping?', a: 'No. That is the core advantage of dropshipping. You never purchase stock upfront, hold it in a warehouse, or handle shipping logistics. When a customer places an order, it is automatically sent to your supplier who packs and ships directly to the customer. Your only investment is the store setup and your marketing budget.' },
  { q: 'Which platform do you build dropshipping stores on?', a: 'We build primarily on Shopify, which is the most reliable and widely supported platform for dropshipping. It integrates natively with all major supplier apps including DSers for AliExpress, Spocket, Zendrop, and CJ Dropshipping, and handles payments, inventory sync, abandoned cart recovery, and order management cleanly out of the box.' },
  { q: 'Will my dropshipping store orders be processed automatically?', a: 'Yes. From our Micro plan upward we set up automated inventory and price sync so your product listings update when supplier stock or pricing changes. Higher plans add full funnel automation including abandoned cart emails, welcome sequences, upsell triggers, and order tracking notifications. The goal is a store that runs without you manually processing anything day to day.' },
  { q: 'What ongoing support do I get after the store launches?', a: 'Post-launch support ranges from 5 days on the Micro plan to 60 days on the Enterprise plan. During that window we help with technical issues, product adjustments, and supplier queries. We also provide a store management guide and training sessions depending on your plan. After the support period we offer ongoing management packages for clients who want continued hands-on help.' },

  // Mobile Apps
  { q: 'How much does it cost to build a mobile app?', a: 'Our app packages start from £2,499 for a high-fidelity clickable prototype ideal for validating your idea or pitching to investors. A functional MVP with real code starts from £6,499. Apps with custom backends or payment processing run from £10,999 upward.' },
  { q: 'What is the difference between a prototype and a functional app?', a: 'A prototype is a realistic clickable mockup with no working code behind it, used to validate concepts or secure investment. A functional app has real working code, a backend, and can actually perform the tasks it is designed for.' },
  { q: 'How long does it take to build a mobile app?', a: 'A clickable prototype typically takes 3 to 5 weeks. A functional MVP usually takes 8 to 14 weeks. Larger apps with advanced features can take 4 to 9 months. We provide a detailed project timeline before starting.' },
  { q: 'Do you build iOS and Android apps?', a: 'Yes. We build cross-platform apps using React Native or Flutter, which allows your app to run on both iOS and Android from a single codebase. This significantly reduces cost and development time compared to separate native builds.' },
  { q: 'Who owns the app and code after the project is complete?', a: 'You own everything. Once the project is paid in full, all source code, design files, and app store accounts are yours. We retain no licensing rights, which matters if you ever want to bring development in-house or switch agencies.' },
  { q: 'Do you help with app store submission?', a: 'Yes. We handle the technical submission process for both the Apple App Store and Google Play Store, including preparing assets, completing store listings, and addressing any rejection feedback from the review process.' },
  { q: 'What is a Discovery Workshop and why is it needed before development starts?', a: 'A Discovery Workshop is the structured first phase of every app build. We map out your user journeys, identify the core features, define the project scope, and flag any technical risks before writing a line of code. It results in validated wireframes and a clear project plan. Building without this phase is one of the main reasons app projects go over budget or need to be rebuilt.' },
  { q: 'Can I start with a basic MVP and add more features over time?', a: 'Yes, and this is often the smartest approach. Launching with an MVP gets you to market quickly and lets you gather real user feedback. You then invest in features you know people actually want rather than features you assumed they would want. We build with scalability in mind from day one so the codebase can grow without needing to be rewritten. Our MVP Launch package starts from €6,499.' },
  { q: 'What technology stack do you use to build apps?', a: 'We use Flutter and React Native for cross-platform development, Firebase and AWS for backend infrastructure and databases, and Figma for design and prototyping. For enterprise builds we implement custom backend architectures, REST and GraphQL APIs, and integrate with CRM and ERP systems. We use the right technology for each project rather than forcing every build into the same stack.' },
  { q: 'What happens after the app is built and launched?', a: 'Every package includes a period of post-launch bug support ranging from 1 month on the MVP plan up to 1 year on the Enterprise plan. During that window we fix any bugs that appear in production at no extra charge. We also handle App Store and Google Play submissions as part of the build, and offer ongoing maintenance packages for clients who want continued support.' },

  // SEO
  { q: 'How much does SEO cost?', a: 'Our SEO packages start from £299 per month for the Startup plan covering 5 to 10 keywords and a site audit. A Standard plan with 20 to 25 keywords starts from £499 per month. Advanced plans covering 40 to 60 keywords with link building run from £999 per month. Enterprise plans for 100 to 300 keyword clusters start from £1,999 per month.' },
  { q: 'How long does SEO take to show results?', a: 'Most businesses start seeing measurable improvements in rankings and traffic within 3 to 6 months. Competitive markets can take longer. SEO is a compounding investment, meaning results build over time and do not disappear when you stop paying, unlike paid advertising.' },
  { q: 'What is the difference between on-page and off-page SEO?', a: 'On-page SEO covers everything on your website: titles, headings, content, internal links, site speed, and mobile usability. Off-page SEO covers what happens outside your site, mainly building backlinks from other reputable websites. Both matter, but on-page SEO is the foundation.' },
  { q: 'What is local SEO and does my business need it?', a: 'Local SEO makes your business visible to people searching for services in your specific area. It involves optimising your Google Business Profile, building local citations, and creating location-relevant content. If you serve customers in a specific city or region, local SEO is essential.' },
  { q: 'How do AI search engines affect my SEO strategy?', a: 'AI-powered tools like Google AI Overviews, ChatGPT, and Perplexity now answer many queries directly without users clicking through to websites. Your content needs to be structured so AI systems can extract and cite it. Good on-page SEO, clear FAQ content, and proper schema markup all help.' },
  { q: 'How do I know if my SEO is working?', a: 'We track keyword rankings, organic traffic, click-through rates, and conversions so you can see exactly what is improving each month. We provide clear monthly reports in plain terms, not just data dumps. If something is not working, we tell you and adjust the strategy.' },

  // PPC
  { q: 'How much does PPC management cost?', a: 'Our PPC management starts from £549 per month for the Starter Spark plan covering one platform and up to 2 campaigns. The Growth Engine plan starts from £999 per month. Market Dominator for unlimited campaigns starts from £1,899 per month. Enterprise Elite starts from £3,499 per month. These are management fees separate from your ad spend budget.' },
  { q: 'What is the difference between a PPC management fee and ad spend?', a: 'The management fee is what you pay us to build, manage, and optimise your campaigns. Ad spend is the money paid directly to Google, Meta, or other platforms to show your ads. These are always two separate costs, and your ad budget is entirely yours to control.' },
  { q: 'What is the difference between SEO and PPC?', a: 'SEO builds organic visibility over time and delivers long-term compounding results. PPC delivers immediate traffic from the moment campaigns go live but stops when you stop paying. Most businesses benefit from running both at the same time.' },
  { q: 'Which platforms do you manage PPC campaigns on?', a: 'We manage campaigns on Google Ads, Meta (Facebook and Instagram), TikTok, LinkedIn, and Microsoft Ads. We recommend platforms based on where your target audience actually spends time and what delivers the best return for your budget.' },
  { q: 'How quickly does paid advertising show results?', a: 'Paid ads can drive traffic from day one. However, it typically takes 2 to 4 weeks of data collection and optimisation before campaigns run efficiently. The first month is usually about learning and refining rather than maximising performance.' },
  { q: 'How do you measure whether my PPC campaigns are delivering value?', a: 'We set up conversion tracking from the start so you can see exactly which clicks become enquiries, calls, or sales. We focus on cost per acquisition, conversion rate, and return on ad spend. You receive regular reports and always have full access to your account.' },

  // Social Media
  { q: 'How much does social media management cost?', a: 'Our social media management starts from £399 per month for the Starter plan with 8 posts per month on Facebook and Instagram. A Basic plan with 12 posts starts from £549 per month. The Standard plan with 24 posts and multi-platform management starts from £999 per month. Professional plans with 36 posts run from £1,999 per month.' },
  { q: 'Which social media platforms do you manage?', a: 'We manage content on Instagram, Facebook, LinkedIn, TikTok, and X (Twitter). The right platforms depend on where your target audience spends time. LinkedIn works best for B2B businesses, while consumer brands typically see stronger results on Instagram and TikTok.' },
  { q: 'Do you create the content or do I provide it?', a: 'We handle all content creation including copy, graphics, and scheduling. You provide brand guidelines and any specific messages you want to communicate, and we turn that into a consistent stream of posts. We share a content calendar for your approval before anything is published.' },
  { q: 'Can social media generate leads and sales?', a: 'Yes, but it depends on consistency, content quality, and the right strategy for your business type. Organic social builds brand awareness and trust over time. Combining it with paid social advertising delivers faster and more measurable lead generation results.' },
  { q: 'How do you measure whether social media is working?', a: 'We track engagement, reach, follower growth, and where social traffic leads on your website. For paid social campaigns we also track conversion events. We report on metrics that connect to business outcomes, not just vanity numbers.' },
  { q: 'How long before social media shows results?', a: 'Organic social media takes time. Most businesses see meaningful engagement growth within 3 to 6 months of consistent posting. Paid social can deliver results much faster, often within the first week of a campaign.' },

  // Logo Design
  { q: 'How much does a logo design cost?', a: 'Our logo design starts from £49 for the Starter plan with 2 concepts. The Basic plan with 3 concepts and PDF files starts from £99. Our Standard plan with 5 concepts, full vector files, and a mini brand guide is £199. The Pro package with unlimited concepts, a full social media kit, and stationery design is £399.' },
  { q: 'What is the difference between a logo and a brand identity?', a: 'A logo is a single mark or wordmark. A brand identity is the complete visual system: colour palette, typography, usage rules, brand guidelines, and supporting assets. Our Standard and Pro packages move toward a fuller brand identity beyond just a logo.' },
  { q: 'How many concepts will I get to choose from?', a: 'The Starter gives you 2 concepts, Basic gives 3, Standard gives 5, and the Pro package includes unlimited concepts, with two designers working simultaneously. After you choose a direction, revisions are included in all packages.' },
  { q: 'What file formats will I receive?', a: 'All packages include PNG and JPG for everyday use. Standard and above also include vector files in SVG and AI format, which are essential for print and large-format use. The Pro package additionally includes editable source files.' },
  { q: 'Do you own the logo after the project is finished?', a: 'No. Once the project is paid in full, full ownership of the logo and all source files transfers to you. You are free to use it commercially, modify it, or licence it without any ongoing fees or restrictions.' },
  { q: 'Can you redesign an existing logo?', a: 'Yes. We handle logo refreshes and full rebrands regularly. A refresh keeps the essence of your existing logo but updates it to look cleaner and more modern. A full rebrand starts from scratch with new concepts. Both are available across our packages.' },

  // Brochures
  { q: 'How much does brochure design cost?', a: 'Brochure design starts from £149 for a bi-fold (4-panel) design with a print-ready PDF. A tri-fold (6-panel) brochure with editable source files starts from £249. A corporate booklet of 4 to 8 pages starts from £499, and a full catalog or annual report of 12 or more pages starts from £899.' },
  { q: 'What types of brochures do you design?', a: 'We design bi-fold brochures, tri-fold brochures, corporate booklets, and multi-page product catalogs. We create print-ready files to professional printing standards and digital versions optimised for email and online sharing.' },
  { q: 'What is the difference between a bi-fold and a tri-fold brochure?', a: 'A bi-fold folds once to create 4 panels. A tri-fold folds twice to create 6 panels, giving you more space for content. The tri-fold is the most common format for marketing and service brochures.' },
  { q: 'Will I receive print-ready files?', a: 'Yes. All brochure packages include high-resolution PDF files with bleed marks and correct CMYK colour profiles set to professional printing standards. Higher packages also include an interactive digital PDF version for screen viewing.' },
  { q: 'How long does brochure design take?', a: 'A bi-fold or tri-fold brochure typically takes 5 to 7 working days from brief to delivery. Corporate booklets and catalog designs take 2 to 3 weeks depending on the number of pages and revision rounds.' },
  { q: 'Do you provide editable source files?', a: 'Editable source files in Adobe InDesign or Illustrator format are included in the Tri-Fold Classic and above packages. The Bi-Fold Starter is delivered as a final PDF without source files, which keeps the entry price lower.' },

  // Flyers
  { q: 'How much does flyer design cost?', a: 'Flyer design starts from £79 for a single-sided digital flyer. A print-ready single-sided flyer starts from £129. A double-sided flyer with editable source files and a QR code starts from £199. A bundle of 3 distinct flyer designs starts from £349.' },
  { q: 'Do you design flyers for print and digital use?', a: 'Yes. Print flyers are exported at 300 DPI in CMYK with bleed marks. Digital flyers are optimised for screen display in RGB and sized for social platforms or email. Some packages include both versions in a single delivery.' },
  { q: 'Can you design double-sided flyers?', a: 'Yes. Our Double Impact and Marketing Suite packages both cover double-sided designs with print-ready specifications and matching digital versions.' },
  { q: 'What file formats will I receive?', a: 'All packages include a high-res PDF for print and a JPG or PNG for digital use. Higher packages that include source files deliver a PSD or AI file so you can make future text or image changes yourself.' },
  { q: 'How quickly can you turn around a flyer design?', a: 'Our Event Promo single-sided flyer has a 48-hour turnaround. The Business One-Pager typically takes 3 to 4 business days. Double Impact and Marketing Suite designs take 5 to 7 business days.' },
  { q: 'Can you include a QR code in the flyer design?', a: 'Yes. Our Double Impact and Marketing Suite packages include QR code generation and placement as part of the design. You provide the URL and we create a clean, scannable QR code that fits the layout naturally.' },

  // Digital Creatives
  { q: 'How much do digital creatives cost?', a: 'Our Social Starter pack of 3 branded templates starts from £99. An Ad Creative Pack of 5 ad designs with A/B variations starts from £199. Animated content for stories, reels, or signage starts from £399. A full campaign bundle of 15 or more assets starts from £699.' },
  { q: 'What are digital creatives?', a: 'Digital creatives are ready-to-use visual assets for social media, paid advertising, and digital marketing. We produce static social posts, ad creatives in multiple sizes, animated stories and reels in video format, digital signage, and full campaign bundles across all major platforms.' },
  { q: 'Can you create animated social media content?', a: 'Yes. Our Motion and Signage package includes 3 animated pieces in HD video format suitable for Instagram Reels, TikTok, Stories, or digital screens. Our Campaign Master bundle also includes animated assets as part of the delivery.' },
  { q: 'What platforms are the designs sized for?', a: 'We size creatives for Instagram feed and Stories, Facebook feed and ads, LinkedIn, X, TikTok, and YouTube depending on the package. Our Campaign Master bundle covers all major platforms.' },
  { q: 'Why do A/B testing variations matter in an ad creative pack?', a: 'A/B testing means running two slightly different versions of the same ad to find which performs better. Even small differences in headlines, colours, or image layout can significantly affect click-through rates. Having variations ready at launch means you find the best performer faster.' },
  { q: 'How many designs are included per package?', a: 'The Social Starter includes 3 templates. The Ad Creative Pack includes 5 ad designs. The Motion and Signage pack includes 3 animated pieces. The Campaign Master includes 15 or more assets across static and animated formats.' },

  // Video Animation
  { q: 'How much does an animated video cost?', a: 'Our animation packages start from £399 for a 15-second teaser or logo animation. A 30-second explainer with custom characters starts from £799. A 60-second business video starts from £1,499, and a 90-second premium narrative with 4K delivery starts from £2,499. Longer corporate productions run from £3,499 to £4,999.' },
  { q: 'What types of animated videos do you create?', a: 'We create logo animations, short teasers, explainer videos with custom characters, business motion graphics, brand narratives, corporate training content, and full documentary-style productions. Each serves a different purpose and we help you choose the right format for your goal.' },
  { q: 'How long does it take to produce an animated video?', a: 'A 15-second teaser takes around 2 weeks. A 30-second explainer typically takes 3 to 4 weeks. A 60 to 90 second video with custom characters takes 4 to 8 weeks. Longer corporate productions take 8 to 16 weeks including scripting, storyboarding, and revisions.' },
  { q: 'Do you write the script?', a: 'Yes. Our 30-second Explainer package and above include professional scriptwriting as part of the production. A well-written script is one of the biggest factors in how effective a video is, so we treat it as an integral part of the process.' },
  { q: 'What video format and resolution will I receive?', a: 'All videos are delivered in MP4 format. Our 90-second Premium Narrative and above packages include 4K delivery. Shorter packages deliver in 1080p HD. We can also export in aspect ratios optimised for different platforms on request.' },
  { q: 'Can I use the video across different platforms and campaigns?', a: 'Yes. Once you receive the final files, you own full usage rights and can use the video on your website, social media, YouTube, paid ads, or presentations without any licensing restrictions. It is a one-time production cost with unlimited reuse potential.' },
  { q: 'Who provides the voiceover for the animated video?', a: 'All packages include an AI-generated voiceover selected from a library of natural-sounding voices across multiple accents and tones to match your brand. If you prefer a professional human voiceover artist, this is available as an add-on. We can also work with a voiceover file you record or source yourself.' },
  { q: 'Can the video be resized for different social media formats?', a: 'Yes. A social media resizing add-on delivers your video in square (1:1) and vertical (9:16) formats alongside the standard widescreen version, covering Instagram Reels, TikTok, YouTube Shorts, and Facebook Stories. The Business Motion (60-second) package includes the social media resize as standard.' },
  { q: 'How many revision rounds are included in each animation package?', a: 'The Teaser and Intro package includes 2 revision rounds. All other packages include unlimited revisions so you can refine the animation until you are fully satisfied. Revisions are reviewed and applied at each stage of production rather than all at the end, which keeps the process moving efficiently.' },
  { q: 'Can the video be used in paid advertising campaigns?', a: 'Yes. Every video we produce is cleared for use in paid advertising including Google Video Ads, Facebook and Instagram ads, YouTube pre-roll, LinkedIn Sponsored Video, and TikTok ads. For paid ad campaigns we recommend the 15-second Teaser, 30-second Explainer, or the vertical social media resized versions depending on the platform and objective.' },

  // Book Cover
  { q: 'How much does a book cover design cost?', a: 'An e-book cover optimised for Kindle and Amazon KDP starts from £99. A full print wrap with front, back, and spine plus a 3D mockup starts from £199. A premium illustrative cover with custom artwork starts from £349. A series bundle covering 3 matching book covers starts from £599.' },
  { q: 'What is the difference between an e-book cover and a print cover?', a: 'An e-book cover is designed for digital storefronts and delivered as a high-res JPG or PNG showing just the front. A print cover includes front, back, and spine in a single print-ready PDF, with the spine width calculated from your exact page count and paper type.' },
  { q: 'Do you design full wrap covers with front, back, and spine?', a: 'Yes. Our Standard Print, Premium Illustrative, and Series Bundle packages all include a full wrap design. You provide your final page count and we calculate the spine width to your printing specifications.' },
  { q: 'What files will I receive with my book cover?', a: 'Depending on your package you receive a high-res JPG and PNG for digital storefronts, a print-ready PDF at 300 DPI, and a 3D book mockup for marketing. Higher packages also include source files and a barcode for the back cover.' },
  { q: 'Can you design a matching series of book covers?', a: 'Yes. The Series Bundle package covers up to 3 books in a visually consistent series including full wrap designs and a box set 3D mockup. It is priced as a bundle to keep the per-book cost significantly lower than commissioning each cover separately.' },
  { q: 'Do you provide 3D mockups for marketing?', a: 'Yes. 3D book mockups are included in the Standard Print package and above. These are professional renders showing your cover on a physical book from multiple angles, ready to use on social media or your website without any additional design software.' },

  // Ebook Illustration
  { q: 'How much does ebook illustration cost?', a: 'A starter pack of 5 spot illustrations starts from £149. Chapter header artwork for 10 chapters starts from £299. A pack of 5 full-colour full-page illustrations starts from £649. A set of 10 full-page illustrations starts from £1,199. A 20-illustration graphic story set starts from £2,199. A full 30-piece premium suite with typesetting and a cover starts from £3,499.' },
  { q: 'What types of ebook illustrations do you create?', a: 'We create spot illustrations for chapter breaks and dividers, chapter header artwork, full-page colour illustrations, and graphic novel-style sequential panels. Styles range from simple black and white vector art to full-colour digital painting.' },
  { q: 'What is the difference between spot illustrations and full-page illustrations?', a: 'Spot illustrations are small decorative images placed at chapter openings or as section dividers. Full-page illustrations take up an entire page and are much more detailed, usually depicting a key scene or concept. The choice depends on how visually rich you want the reading experience to be.' },
  { q: 'Can you create graphic novel or comic-style ebook illustrations?', a: 'Yes. Our Graphic Story package is designed for sequential art, covering 20 illustrations with consistent panelling, character models across every page, text bubble layout, and full colour. It works equally well for fiction in comic format and for non-fiction with a visual, story-driven presentation.' },
  { q: 'How many illustrations are included per package?', a: 'The Spot Art Starter includes 5 illustrations. Chapter Decor includes 10. Visual Highlights includes 5 full-page pieces. Narrative Flow includes 10 full-page pieces. Graphic Story includes 20, and Premium Artistry includes 30 or more with typesetting and a cover included.' },
  { q: 'Do I own the rights to the illustrations?', a: 'Yes. Once the project is paid in full, full commercial rights transfer to you. You can use the illustrations in your ebook, print edition, website, or any other commercial application without any ongoing licensing fees or restrictions.' },
  { q: 'What illustration styles do you work in for ebooks?', a: 'We work across a range of styles including clean line art, watercolour-style digital painting, detailed ink-style illustration, and minimalist vector illustration. When you brief us, share reference images that capture the feel you are going for and we will match or adapt our approach accordingly. Consistency across all illustrations in your book is non-negotiable.' },

  // Children Book Illustration
  { q: "How much does children's book illustration cost?", a: "Character design for a single main character starts from £149. A full cast of 3 characters with model sheets starts from £349. A full book storyboard starts from £699. A complete 10 to 12 page picture book with cover starts from £1,699. A full 20 to 24 page story with formatting starts from £2,999. A deluxe 28 to 32 page publishing package with marketing assets starts from £4,999." },
  { q: "What is included in a full children's book illustration package?", a: "A full package covers character design, storyboarding, full-colour page illustrations, front and back cover design, professional typesetting, and print-ready files for Amazon KDP or IngramSpark. Higher packages also include an ebook conversion, a 3D mockup, and a social media marketing kit." },
  { q: 'Do you handle text placement and typesetting?', a: "Yes. From the Standard Story (12-page) package upward, we handle professional typesetting using child-friendly, readable fonts. Text is placed so it does not cover key artwork, and the result is a print-ready PDF you can upload directly to your publishing platform." },
  { q: 'Can you help me publish on Amazon KDP or IngramSpark?', a: "We provide print-ready files formatted to the exact specifications required by Amazon KDP and IngramSpark. Our Publishing Master package also includes hands-on KDP upload assistance, walking you through the submission step by step." },
  { q: "How do you develop the illustration style for my book?", a: "We start by discussing your story, the target age range, and any visual references or styles you like. We then create initial character concept sketches for your approval before committing to any page illustrations, so the visual direction is confirmed before we invest time in the full project." },
  { q: "How long does full children's book illustration take?", a: "A 10 to 12 page illustrated book typically takes 6 to 8 weeks from final character approval to delivery. A 20 to 24 page book takes 8 to 12 weeks. Timelines depend on revision rounds and how quickly feedback is provided at each stage." },
  { q: 'Do you create original characters and backgrounds from scratch?', a: 'Yes. Every character, scene, and background is created as original artwork for your specific book. We do not use stock illustrations or clipart. The character design phase always comes first where we develop the main character and supporting cast in multiple poses and expressions before any scene illustration begins. This ensures the characters look consistent throughout the entire book.' },
  { q: 'How many illustrated pages are included in each children\'s book package?', a: 'The Standard Story package covers 10 to 12 illustrated pages. The Full Story package covers 20 to 24 pages. The Publishing Master package covers 28 to 32 pages. All page counts refer to illustrated spreads. If your manuscript is longer, additional pages can be added at a per-page rate. Get in touch with your page count and we will provide an accurate quote.' },
];

const faqPageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: schemaFAQs.map(item => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://designingdose.com' },
      { '@type': 'ListItem', position: 2, name: 'FAQ', item: 'https://designingdose.com/faq' },
    ],
  },
];

// ─── FAQ DATA ────────────────────────────────────────────────────────────────
/*
const faqCategories_OLD_DEPRECATED: FAQCategory[] = [
  {
    id: 'ecommerce',
    name: 'E-commerce',
    gradient: 'from-pink-500 to-rose-600',
    iconPath: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z',
    items: [
      {
        q: 'How much does an e-commerce website cost?',
        a: 'Our e-commerce builds start from around £799 for a solid Shopify or WooCommerce store. Cost depends on the platform, number of products, payment integrations, and custom features required. We provide a detailed quote based on exactly what your store needs after a free discovery call.',
        link: { text: 'See our e-commerce packages', href: '/services/website-packages' },
      },
      {
        q: 'Which platform do you use for online stores?',
        a: 'We most commonly build on Shopify for product-based businesses that want reliability and ease of use, and WooCommerce for businesses already on WordPress. The right platform depends on your product type, expected volume, and how much you want to manage yourself. We will recommend what genuinely fits your situation.',
      },
      {
        q: 'Can you migrate my existing store to a new platform?',
        a: 'Yes. We handle store migrations including products, customer data, order history, and SEO settings to minimise disruption. Migrations need to be done carefully to avoid losing search rankings or breaking URLs, and we have a checklist process to cover all of that.',
      },
      {
        q: 'How do I get my products found on Google?',
        a: 'Product visibility on Google comes from a combination of well-structured product pages, proper schema markup, fast load times, and an ongoing SEO strategy. We build stores with search visibility in mind from the start, and we also offer SEO services separately if you want to grow organic traffic after launch.',
        link: { text: 'Learn about our SEO services', href: '/services/search-engine-marketing-sem' },
      },
      {
        q: 'What payment methods can my store accept?',
        a: 'Most stores we build support credit and debit cards via Stripe or PayPal, Apple Pay, Google Pay, and buy-now-pay-later options like Klarna or Clearpay. The specific options depend on your platform and the markets you sell to. We set everything up and test it before your store goes live.',
      },
      {
        q: 'How long does it take to build an online store?',
        a: 'A straightforward Shopify store with up to 50 products typically takes 3 to 5 weeks. Larger stores with custom functionality, subscriptions, or complex shipping rules take longer. We scope this out properly before starting so you have a realistic launch date.',
      },
      {
        q: 'Do you help with product images or content for the store?',
        a: 'We can advise on image sizing, formatting, and presentation for best conversion and load speed. For product descriptions, we offer copywriting written to rank on search engines and convert browsers into buyers.',
        link: { text: 'Get in touch to discuss your store', href: '/contact' },
      },
    ],
  },
  {
    id: 'dropshipping',
    name: 'Dropshipping',
    gradient: 'from-cyan-400 to-blue-600',
    iconPath: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4',
    items: [
      {
        q: 'What is dropshipping and is it right for my business?',
        a: 'Dropshipping is a retail model where you sell products online without holding stock. When a customer orders, your supplier ships directly to them. The upside is low startup cost and no inventory risk. The downside is slimmer margins and dependence on supplier reliability. It works well for certain niches but is not the right fit for every business.',
      },
      {
        q: 'Is dropshipping still profitable in 2026?',
        a: 'Dropshipping is profitable in 2026 but more competitive than it was five years ago. The businesses succeeding now pick specific niches, invest in branding and customer experience, and run smart paid advertising rather than trying to sell generic products cheaply. A well-built store with a real brand behind it still has strong potential.',
        link: { text: 'See how we build dropshipping stores', href: '/services/dropshipping' },
      },
      {
        q: 'Do you build the entire dropshipping store for me?',
        a: 'Yes. We handle the store build from scratch, including platform setup, product importing, supplier integration, payment gateway connection, and design. We build stores designed to convert, not just function. You focus on marketing and orders while we handle the technical side.',
      },
      {
        q: 'Which suppliers do you recommend for dropshipping?',
        a: 'The right supplier depends on your niche and target market. For general products, AliExpress and CJ Dropshipping are popular starting points. For European or UK-based shipping speed, Spocket and Zendrop have better options. We can help you evaluate suppliers as part of the build process.',
      },
      {
        q: 'How do I market a dropshipping store?',
        a: 'Paid social ads on Meta and TikTok are the most common starting point for dropshipping because you can test products quickly. SEO is slower but builds organic traffic over time. Email marketing and retargeting are essential once you have some traffic. We can advise on a starting strategy as part of our service.',
        link: { text: 'Talk to us about your dropshipping plans', href: '/contact' },
      },
      {
        q: 'What niche should I choose for dropshipping?',
        a: 'A good dropshipping niche has passionate buyers, manageable competition, and decent margins. Evergreen categories like home organisation, pet accessories, fitness gear, and hobby equipment tend to perform consistently. Avoid saturated markets like phone cases or generic fashion unless you have a strong differentiator.',
      },
    ],
  },
  {
    id: 'mobile-apps',
    name: 'Mobile Apps',
    gradient: 'from-orange-400 to-amber-500',
    iconPath: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
    items: [
      {
        q: 'How much does it cost to build a mobile app?',
        a: 'A basic app with a few screens and standard features might start from £2,500 to £5,000. Apps with custom backends, real-time features, payment processing, or complex logic typically run higher. We scope projects carefully and provide detailed quotes with no hidden costs.',
        link: { text: 'Get a mobile app quote', href: '/contact' },
      },
      {
        q: 'Should I build for iOS or Android first?',
        a: 'If your target audience is primarily in the US or UK, iOS often makes sense first because those users tend to have higher spending intent. Android has a larger global market share, particularly in emerging markets. If budget allows, we can build cross-platform from the start so you launch on both simultaneously without two separate codebases.',
      },
      {
        q: 'What is the difference between a native app and a cross-platform app?',
        a: 'A native app is built specifically for one platform using that platform\'s own tools and performs better on that device. A cross-platform app uses frameworks like React Native or Flutter to run on both platforms from a single codebase, which is usually faster and cheaper to build and works very well for most business apps.',
        link: { text: 'Read our guide on choosing the right tech stack', href: '/blog/mobile-app-native-vs-cross-platform' },
      },
      {
        q: 'How long does mobile app development take?',
        a: 'Simple apps with core features take roughly 6 to 12 weeks from design to submission. More feature-rich apps with custom APIs, admin dashboards, or real-time functionality typically take 3 to 6 months. The timeline depends heavily on how clear the requirements are before development starts, which is why we invest time in the scoping phase.',
      },
      {
        q: 'Do you handle App Store and Google Play submission?',
        a: 'Yes. We handle the full submission process for both stores, including setting up developer accounts if needed, preparing all required assets and metadata, and managing the review process. We build in buffer time for the Apple review and handle any resubmissions needed.',
      },
      {
        q: 'Can you add features to an existing app?',
        a: 'Yes, we work with existing codebases for feature additions, performance improvements, and redesigns. The first step is a code review to understand what we are working with. If the existing code needs refactoring first, we flag that clearly before starting.',
      },
      {
        q: 'Do you provide ongoing support after the app launches?',
        a: 'Yes. Apps need ongoing updates to stay compatible with new OS versions, fix bugs discovered in the wild, and improve based on real user behaviour. We offer support and maintenance packages for post-launch apps so you are never left managing technical issues alone.',
      },
    ],
  },
  {
    id: 'seo',
    name: 'SEO and Search',
    gradient: 'from-emerald-400 to-green-600',
    iconPath: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
    items: [
      {
        q: 'How long does SEO take to show results?',
        a: 'Most businesses start seeing meaningful movement in search rankings within 3 to 6 months of consistent work. Competitive industries or new domains can take longer. The trade-off is that SEO results compound over time, meaning organic traffic you earn now keeps coming without ongoing ad spend.',
      },
      {
        q: 'What is the difference between SEO and paid advertising?',
        a: 'SEO grows your organic visibility in search results over time. It takes longer to show results but the traffic it generates is free once you have it. Paid advertising drives immediate traffic but stops the moment you stop spending. Most businesses benefit from a mix of both, using ads for quick wins while SEO builds a long-term asset.',
        link: { text: 'Explore our SEO services', href: '/services/search-engine-marketing-sem' },
      },
      {
        q: 'Will my website actually rank on Google?',
        a: 'Ranking on Google depends on your niche, competition, the quality of your content, and the technical health of your website. There are no guarantees in SEO, and any agency that promises specific rankings is misleading you. What we can guarantee is that we follow best practices that give your site the best possible chance of ranking well.',
      },
      {
        q: 'What is local SEO and does my business need it?',
        a: 'Local SEO is the process of making your business visible to people searching for services in your specific area. It involves optimising your Google Business Profile, building local citations, and creating location-relevant content. If you serve customers in a particular city or region, local SEO is essential and often less competitive than national rankings.',
        link: { text: 'See our Dublin and London service pages', href: '/dublin' },
      },
      {
        q: 'How do AI search engines like ChatGPT and Perplexity affect my visibility?',
        a: 'AI search engines are becoming an increasingly important source of traffic and brand discovery. They tend to surface businesses and content that is well-structured, factually accurate, and cited across multiple sources. Optimising for AI visibility involves strong E-E-A-T signals, structured data, and content that directly answers specific questions your customers ask.',
      },
      {
        q: 'What is on-page SEO versus off-page SEO?',
        a: 'On-page SEO refers to everything you control on your own website: content quality, title tags, meta descriptions, heading structure, page speed, and internal linking. Off-page SEO refers to signals from outside your site, primarily backlinks from other reputable websites. Both matter. A technically sound site with no backlinks will struggle just as much as a heavily linked site with poor content.',
      },
      {
        q: 'How do I know if my SEO is actually working?',
        a: 'The clearest indicators are increases in organic search traffic, improvements in keyword rankings, and growth in leads or conversions coming from search. Google Search Console is a free tool that shows your ranking keywords and impressions. We set up tracking from the start so you can see exactly what is improving and why.',
      },
      {
        q: 'Do you offer SEO for e-commerce stores specifically?',
        a: 'Yes. E-commerce SEO involves optimising category pages, product pages, and technical site structure in ways that differ from standard content SEO. We handle product schema, faceted navigation, duplicate content issues, and category page optimisation. Stores that invest in SEO typically see a significant reduction in their dependence on paid ads over time.',
        link: { text: 'See our e-commerce and SEO services', href: '/services/search-engine-marketing-sem' },
      },
    ],
  },
  {
    id: 'branding',
    name: 'Logo and Branding',
    gradient: 'from-yellow-400 to-orange-500',
    iconPath: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01',
    items: [
      {
        q: 'How much does a logo design cost?',
        a: 'Our logo design starts from £99 for a clean, professional mark. A full brand identity package that includes logo, colour palette, typography, and brand guidelines costs more depending on the scope. We always give you a clear price before starting.',
        link: { text: 'See our branding packages', href: '/services/logo-design' },
      },
      {
        q: 'What is the difference between a logo and a full brand identity?',
        a: 'A logo is a single mark or wordmark that represents your business visually. A full brand identity includes the logo, a defined colour palette, typography choices, brand voice guidelines, and often supporting assets like social media templates or business card designs. A logo alone can look inconsistent across applications without the system around it.',
      },
      {
        q: 'How many logo concepts will I receive?',
        a: 'We typically present 2 to 3 distinct initial concepts based on research into your business, audience, and competitors. You choose the direction that resonates most and we refine from there. We include a reasonable number of revision rounds so you end up with a logo you are genuinely happy with.',
      },
      {
        q: 'What file formats will I receive for my logo?',
        a: 'You will receive the final logo in all formats you need: SVG and AI for scalable vector use, PNG with transparent background for web use, and PDF for print. We also provide versions for both light and dark backgrounds, and all original source files are included so you are never locked in.',
      },
      {
        q: 'Can you redesign my existing logo?',
        a: 'Yes. We work with existing brand identities to modernise, simplify, or strengthen them without losing what customers already recognise. This might involve refining proportions, updating colours, or creating a cleaner version for digital use.',
      },
      {
        q: 'How long does logo design take?',
        a: 'Initial concepts are typically delivered within 5 to 7 working days. The full process from brief to final files, including revisions, usually takes 2 to 3 weeks. More complex brand identity projects take longer.',
      },
      {
        q: 'Do I own the copyright to my logo once it is finished?',
        a: 'Yes. Once the project is paid in full, full copyright and ownership of the logo transfers to you. This means you can use it however you like, on any platform, in any format, without ongoing fees or restrictions.',
      },
    ],
  },
  {
    id: 'video-animation',
    name: 'Video Animation',
    gradient: 'from-red-500 to-pink-600',
    iconPath: 'M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    items: [
      {
        q: 'What types of video animation do you create?',
        a: 'We create explainer videos, product demos, social media animations, logo animations, motion graphics, and animated advertisements. Whether you need a 60-second brand story for your homepage or short looping animations for Instagram, we handle both.',
        link: { text: 'See our video animation services', href: '/services/video-animation' },
      },
      {
        q: 'How much does an animated video cost?',
        a: 'A short animated explainer video of 60 to 90 seconds typically starts from around £499. Longer videos, more complex motion graphics, or character animation cost more. Price depends on length, style, and the level of detail involved. We provide a quote after understanding what you need.',
      },
      {
        q: 'How long does it take to produce an animated video?',
        a: 'A standard 60-second explainer video takes roughly 3 to 4 weeks from approved script to final delivery, including storyboarding, animation, and sound design. Tighter deadlines are sometimes possible depending on our schedule at the time.',
      },
      {
        q: 'Do I need to provide a script?',
        a: 'You do not have to. If you have a script, great. If not, we develop one with you based on your goals, audience, and key message. A well-written script is the foundation of any effective video, so we take that seriously even if it means going back and forth a few times to get it right.',
      },
      {
        q: 'What animation style works best for my industry?',
        a: 'Clean 2D motion graphics work well for tech, finance, and B2B services because they feel modern and professional. Character animation suits consumer brands and anything targeting a younger audience. Product animations are ideal for e-commerce and physical goods. We recommend a style based on your audience and the message you want to communicate.',
      },
      {
        q: 'Can you create video content specifically for social media ads?',
        a: 'Yes. We create short-form video ads optimised for Meta (Facebook and Instagram), TikTok, YouTube, and LinkedIn. Ad videos need a strong hook in the first 3 seconds and a clear call to action. We understand the format differences and create accordingly.',
        link: { text: 'See our social media services', href: '/services/social-media' },
      },
    ],
  },
  {
    id: 'illustration',
    name: 'Illustration',
    gradient: 'from-purple-500 to-violet-700',
    iconPath: 'M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z',
    items: [
      {
        q: 'What kinds of illustration do you create?',
        a: 'We create custom illustrations for websites, apps, books, marketing materials, editorial use, and social media. Styles range from clean flat vector illustration to detailed character art and hand-drawn aesthetics, depending on what fits your brand and purpose.',
        link: { text: 'See our illustration services', href: '/services/illustration' },
      },
      {
        q: 'How much does custom illustration cost?',
        a: 'A simple flat icon set starts from around £99. Detailed character illustrations, full-page book illustrations, or illustrated brand mascots are priced higher based on complexity and number of pieces. We scope and quote based on what you need.',
      },
      {
        q: "Can you create illustrations for children's books?",
        a: "Children's book illustration is one of our specialties. We work with authors from initial character development through to full page layouts ready for print or self-publishing platforms. We understand the requirements for different printing formats and guide you through the whole process.",
        link: { text: "Read our guide to self-publishing and book illustration", href: '/blog/power-of-visual-storytelling-childrens-books' },
      },
      {
        q: 'Do I own the rights to illustrations you create?',
        a: 'Yes. Once the project is paid in full, all rights transfer to you. You can use the illustrations commercially, in print, on merchandise, or however your project requires.',
      },
      {
        q: 'How long does illustration take?',
        a: "Simple spot illustrations can be turned around in a few days. A full set of character illustrations or a children's book typically takes 4 to 8 weeks depending on the number of pieces and revision rounds. We agree on a timeline before starting.",
      },
      {
        q: 'Can you match or extend an existing illustration style?',
        a: 'Yes. If you have existing illustration assets and need more in the same style, we can match them. Share examples of your existing work when you get in touch and we will assess how closely we can replicate the style.',
        link: { text: 'Get in touch to discuss your illustration project', href: '/contact' },
      },
    ],
  },
  {
    id: 'social-media',
    name: 'Social Media',
    gradient: 'from-blue-400 to-cyan-500',
    iconPath: 'M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z',
    items: [
      {
        q: 'Which social media platforms should my business be on?',
        a: 'Fewer platforms done well beats all platforms done poorly. Most businesses benefit from 1 to 2 primary platforms. LinkedIn is essential for B2B. Instagram works well for visual consumer brands. TikTok suits businesses targeting a younger audience. Facebook still has strong local and community reach. Start where your customers already are.',
      },
      {
        q: 'How often should I post on social media?',
        a: 'Consistency matters more than frequency. Posting 3 to 4 times a week on one platform is more effective than posting once a day across five platforms with no strategy behind it. Quality, relevance, and engagement matter more to the algorithms than raw post count.',
      },
      {
        q: 'Can you manage my social media accounts?',
        a: 'Yes. We offer social media management that covers content creation, scheduling, community management, and performance reporting. If you want to hand this off entirely and focus on running your business, we can take care of it.',
        link: { text: 'See our social media management services', href: '/services/social-media' },
      },
      {
        q: 'What type of content performs best on social media?',
        a: 'Content that educates, entertains, or solves a problem consistently outperforms purely promotional posts. Behind-the-scenes content, tutorials, case studies, and opinion pieces tend to build genuine engagement. Short-form video is the dominant format across most platforms right now for reaching new audiences.',
      },
      {
        q: 'How do I grow my social media following organically?',
        a: 'Organic growth comes from consistent posting, genuine engagement with your audience, and creating content worth sharing. Collaborating with others in your niche, using relevant hashtags intelligently, and showing up as a real person or brand rather than a faceless business all help. There are no shortcuts that work long-term.',
      },
      {
        q: 'Should I run paid social media ads?',
        a: 'Paid ads are worth considering once you have a clear offer, a defined audience, and a budget you can sustain for at least 60 to 90 days to gather meaningful data. Running ads before those things are in place tends to waste money. When done well, paid social can dramatically accelerate growth that organic alone would take months to achieve.',
      },
      {
        q: 'How do I measure whether my social media is actually working?',
        a: 'Vanity metrics like follower count tell you very little. What matters is engagement rate, profile visits that convert to website visits, direct messages and enquiries generated, and ultimately sales or leads you can attribute back to social. We set up proper tracking so you can see the real business impact of your social activity.',
      },
    ],
  },
];
*/

// ─── COMPONENT ───────────────────────────────────────────────────────────────
const FAQPage: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const accordionRef = useRef<HTMLDivElement>(null);

  const { formatPrice } = useCurrency();
  const totalQuestions = faqCategories.reduce((sum, cat) => sum + cat.items.length, 0);

  const handleCategoryClick = (id: string) => {
    const next = activeId === id ? null : id;
    setActiveId(next);
    setOpenIndex(null);
    if (next) {
      setTimeout(() => {
        accordionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 150);
    }
  };

  const filteredItems = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (q) {
      const results: (FAQItem & { categoryName: string })[] = [];
      faqCategories.forEach(cat => {
        cat.items.forEach(item => {
          if (item.q.toLowerCase().includes(q) || item.a.toLowerCase().includes(q)) {
            results.push({ ...item, categoryName: cat.title });
          }
        });
      });
      return results;
    }
    if (activeId) {
      const cat = faqCategories.find(c => c.id === activeId);
      return cat ? cat.items.map(item => ({ ...item, categoryName: cat.title })) : [];
    }
    const all: (FAQItem & { categoryName: string })[] = [];
    faqCategories.forEach(cat => {
      cat.items.forEach(item => {
        all.push({ ...item, categoryName: cat.title });
      });
    });
    return all;
  }, [activeId, searchQuery]);

  const showAll = !activeId && !searchQuery;

  return (
    <>
      <style>{`
        @keyframes faq-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-14px); }
        }
        @keyframes faq-fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .faq-hero-content > * {
          animation: faq-fade-in 0.7s ease-out both;
        }
        .faq-hero-content > *:nth-child(1) { animation-delay: 0.1s; }
        .faq-hero-content > *:nth-child(2) { animation-delay: 0.2s; }
        .faq-hero-content > *:nth-child(3) { animation-delay: 0.3s; }
        @media (prefers-reduced-motion: reduce) {
          .faq-hero-content > * { animation: none; }
        }
      `}</style>
      <div className="min-h-screen bg-brand-primary">
      <SEO
        title="Frequently Asked Questions | Designing Dose"
        description="Got questions about web design, SEO, mobile apps, branding, or social media? Browse our answers across all service areas, or search for exactly what you need."
        schema={faqPageSchema}
      />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 text-center px-6 overflow-hidden">

        {/* Ambient gradient orbs */}
        <div
          className="absolute top-12 left-[6%] w-96 h-96 rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(139,92,246,0.22) 0%, transparent 70%)',
            filter: 'blur(50px)',
            animation: 'faq-float 7s ease-in-out infinite',
          }}
        />
        <div
          className="absolute top-20 right-[8%] w-72 h-72 rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(236,72,153,0.18) 0%, transparent 70%)',
            filter: 'blur(50px)',
            animation: 'faq-float 9s ease-in-out infinite reverse',
          }}
        />
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-40 rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse, rgba(34,211,238,0.1) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />

        {/* Dot grid background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />

        {/* Floating question bubbles — desktop only */}
        <div
          className="hidden md:block absolute top-32 left-[3%] glass-panel border border-violet-500/30 rounded-2xl px-4 py-2.5 text-xs text-white/60 whitespace-nowrap pointer-events-none"
          style={{ animation: 'faq-float 5s ease-in-out infinite', boxShadow: '0 0 24px rgba(139,92,246,0.15)' }}
        >
          How much does a website cost?
        </div>
        <div
          className="hidden md:block absolute top-44 right-[3%] glass-panel border border-pink-500/30 rounded-2xl px-4 py-2.5 text-xs text-white/55 whitespace-nowrap pointer-events-none"
          style={{ animation: 'faq-float 6.5s ease-in-out infinite 1.2s reverse', boxShadow: '0 0 20px rgba(236,72,153,0.12)' }}
        >
          How long does SEO take?
        </div>
        <div
          className="hidden lg:block absolute top-28 right-[22%] glass-panel border border-cyan-500/20 rounded-2xl px-4 py-2.5 text-xs text-white/40 whitespace-nowrap pointer-events-none"
          style={{ animation: 'faq-float 8s ease-in-out infinite 0.5s', boxShadow: '0 0 16px rgba(34,211,238,0.08)' }}
        >
          Do I own my logo?
        </div>
        <div
          className="hidden lg:block absolute top-48 left-[20%] glass-panel border border-violet-500/20 rounded-2xl px-4 py-2.5 text-xs text-white/35 whitespace-nowrap pointer-events-none"
          style={{ animation: 'faq-float 7s ease-in-out infinite 2s reverse' }}
        >
          Which platform for my store?
        </div>

        {/* Main heading */}
        <div className="relative z-10 faq-hero-content max-w-3xl mx-auto">
          <p className="text-sm font-semibold tracking-widest text-violet-400 uppercase mb-5">
            Got Questions?
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Everything You Need to{' '}
            <span className="gradient-text">Know</span>
          </h1>
          <p className="text-brand-muted text-lg max-w-2xl mx-auto mb-10">
            {totalQuestions} questions answered across {faqCategories.length} service areas. Search below or pick a category.
          </p>
        </div>

        {/* Search bar */}
        <div className="relative z-10 max-w-xl mx-auto" style={{ animation: 'faq-fade-in 0.7s ease-out 0.4s both' }}>
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <svg className="w-5 h-5 text-brand-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search questions..."
            value={searchQuery}
            onChange={e => { setSearchQuery(e.target.value); setOpenIndex(null); }}
            className="w-full glass-panel border border-white/10 rounded-xl pl-12 pr-12 py-4 text-white placeholder-brand-muted focus:outline-none focus:border-violet-500/50 transition-colors"
            style={{ background: 'transparent' }}
          />
          {searchQuery && (
            <button
              onClick={() => { setSearchQuery(''); setOpenIndex(null); }}
              className="absolute inset-y-0 right-4 flex items-center text-brand-muted hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      </section>

      {/* ── Category Cards ────────────────────────────────────────────── */}
      {!searchQuery && (
        <section className="px-6 pb-12 max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {faqCategories.map(cat => {
              const isActive = activeId === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryClick(cat.id)}
                  className={`relative glass-panel rounded-2xl p-5 text-left transition-all duration-300 group outline-none ${
                    isActive
                      ? 'border border-violet-500/60 shadow-lg shadow-violet-500/20'
                      : 'border border-white/5 hover:border-white/20 hover:shadow-md'
                  }`}
                >
                  {/* Icon */}
                  <div
                    className={`w-11 h-11 rounded-xl bg-gradient-to-br ${cat.gradient} flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 text-white`}
                  >
                    {cat.icon}
                  </div>

                  <p className="text-white font-semibold text-sm mb-1">{cat.title}</p>
                  <p className="text-brand-muted text-xs">{cat.items.length} questions</p>

                  {/* Active indicator */}
                  {isActive && (
                    <span className="absolute top-3 right-3 w-2 h-2 rounded-full bg-violet-400" />
                  )}
                </button>
              );
            })}
          </div>

          {activeId && (
            <div className="mt-5 text-center">
              <button
                onClick={() => { setActiveId(null); setOpenIndex(null); }}
                className="text-brand-muted hover:text-white text-sm transition-colors underline underline-offset-4"
              >
                Show all categories
              </button>
            </div>
          )}
        </section>
      )}

      {/* ── FAQ Accordion ─────────────────────────────────────────────── */}
      <section
        ref={accordionRef}
        className="px-6 pb-20 max-w-3xl mx-auto scroll-mt-24"
      >
        {/* Search feedback */}
        {searchQuery && (
          <p className="text-brand-muted text-sm mb-6">
            {filteredItems.length === 0
              ? 'No results found. Try a different search term.'
              : `${filteredItems.length} result${filteredItems.length === 1 ? '' : 's'} for "${searchQuery}"`}
          </p>
        )}

        {/* Show-all prompt when nothing selected and not searching */}
        {showAll && (
          <p className="text-brand-muted text-sm mb-6 text-center">
            Showing all {totalQuestions} questions. Select a category above to filter.
          </p>
        )}

        {filteredItems.length === 0 && searchQuery && (
          <div className="text-center py-12">
            <p className="text-brand-muted">No questions matched your search.</p>
            <button
              onClick={() => setSearchQuery('')}
              className="mt-4 text-violet-400 hover:text-violet-300 text-sm underline underline-offset-4 transition-colors"
            >
              Clear search
            </button>
          </div>
        )}

        <div className="space-y-3">
          {filteredItems.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`glass-panel rounded-xl border transition-all duration-200 ${
                  isOpen ? 'border-violet-500/40' : 'border-white/5'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="text-white font-medium text-sm md:text-base leading-snug">
                    {item.q}
                  </span>
                  <span
                    className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-200 ${
                      isOpen
                        ? 'rotate-45 bg-violet-600'
                        : 'bg-white/10 group-hover:bg-white/20'
                    }`}
                  >
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5">
                    <p className="text-brand-muted text-sm md:text-base leading-relaxed">
                      {formatPrice(item.a)}
                    </p>
                    {item.link && (
                      <Link
                        to={item.link.href}
                        className="inline-flex items-center gap-1.5 mt-4 text-violet-400 hover:text-violet-300 text-sm font-medium transition-colors"
                      >
                        {item.link.text}
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    )}
                    {item.link2 && (
                      <Link
                        to={item.link2.href}
                        className="inline-flex items-center gap-1.5 mt-4 ml-4 text-violet-400 hover:text-violet-300 text-sm font-medium transition-colors"
                      >
                        {item.link2.text}
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="px-6 pb-28 max-w-2xl mx-auto text-center">
        <div className="glass-panel rounded-2xl p-10 border border-white/5">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Did Not Find Your Answer?
          </h2>
          <p className="text-brand-muted mb-8">
            Every project is different. If you have a specific question about your situation, just ask. We reply within one business day and there is no obligation to proceed.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white transition-opacity hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, #8B5CF6, #EC4899)' }}
          >
            Ask Us Directly
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
      </div>
    </>
  );
};

export default FAQPage;
