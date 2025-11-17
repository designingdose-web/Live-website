import type { ServiceCategory } from '../types';

export const testimonials = [
  {
    heading: "Exceptional service and communication!",
    review: "The Designing Dose team was amazing. They were patient and attentive, making sure the website was exactly what I wanted. I've received numerous compliments on the design and functionality. Highly recommend their services to everyone.",
    name: "Amber Moreland",
    title: "Founder, Amber's Creations"
  },
  {
    heading: "Transformed our online presence",
    review: "Our old website was outdated and didn't reflect our brand. Designing Dose gave us a fresh, modern look that has significantly boosted our online engagement. The process was smooth and professional from start to finish.",
    name: "John M.",
    title: "Marketing Director, JM Solutions"
  },
  {
    heading: "A pleasure to work with.",
    review: "I can't say enough good things about my experience. The team is not only talented but also incredibly easy to work with. They listened to my vision and brought it to life, exceeding all my expectations.",
    name: "Aiden Moon",
    title: "CEO, Moonshot Innovations"
  },
  {
    heading: "Professional, efficient, and creative.",
    review: "From the initial consultation to the final launch, the team at Designing Dose was top-notch. They delivered a high-quality website on time and on budget. Their creativity and attention to detail are second to none.",
    name: "Hasnain Ali",
    title: "Owner, Ali's Fine Goods"
  },
  {
    heading: "The results speak for themselves.",
    review: "Our organic traffic has increased by over 200% since we partnered with Designing Dose for our SEO. Their team is knowledgeable, proactive, and provides clear, actionable reports. It's been a fantastic investment.",
    name: "Samantha Riley",
    title: "E-commerce Manager, VertaStore"
  },
  {
    heading: "A truly collaborative partner.",
    review: "They took the time to understand our niche market and developed a social media strategy that resonated with our audience. Engagement is up, and we're seeing real community growth. They feel like an extension of our own team.",
    name: "David Chen",
    title: "Co-founder, Artisan Roast Co."
  },
  {
    heading: "Our new logo is perfect!",
    review: "The branding process was incredibly thorough. They presented several amazing concepts, and the final logo perfectly captures our company's essence. It's modern, memorable, and we're proud to show it off.",
    name: "Maria Garcia",
    title: "Owner, Bloom & Petal Florist"
  },
  {
    heading: "An absolute game-changer for our business.",
    review: "We had a complex idea for a mobile app, and Designing Dose executed it flawlessly. The UI is intuitive, and the performance is solid. They turned our vision into a tangible product that our users love.",
    name: "Tomisin Adebayo",
    title: "CEO, ConnectSphere"
  },
  {
    heading: "Flawless execution and support.",
    review: "The entire process, from design to development and launch, was seamless. The team is responsive, professional, and delivered a website that is both beautiful and functional. I couldn't be happier with the outcome.",
    name: "Isabella Rossi",
    title: "Photographer & Artist"
  },
  {
    heading: "They delivered on time and exceeded expectations.",
    review: "In the fast-paced world of e-commerce, you need a reliable team. Designing Dose built our dropshipping store quickly and equipped it with all the tools we needed to succeed. Their post-launch support has been invaluable.",
    name: "Kenji Tanaka",
    title: "Entrepreneur, GadgetFlow"
  },
  {
    heading: "Finally, an agency that gets it.",
    review: "We've worked with other agencies before, but Designing Dose is in a league of their own. The strategic insights they provide are top-notch, and they are genuinely invested in our success. It's a true partnership.",
    name: "Fatima Al-Jamil",
    title: "Marketing VP, Horizon Dynamics"
  },
  {
    heading: "The communication was outstanding.",
    review: "Throughout the project, I was kept in the loop with regular updates. They were always available to answer my questions and were incredibly receptive to feedback. It made the whole process stress-free.",
    name: "Liam O'Connell",
    title: "Restaurateur, The Gilded Spoon"
  },
  {
    heading: "Stunning design and powerful functionality.",
    review: "I'm blown away by the website they created for me. It looks incredible and works perfectly on all devices. They managed to blend artistic design with practical, user-friendly features. Highly recommended!",
    name: "Chloé Dubois",
    title: "Fashion Blogger, Chic & Sage"
  },
  {
    heading: "A massive ROI.",
    review: "The marketing campaign they ran for us generated leads almost immediately. We saw a return on our investment within the first month. Their data-driven approach is incredibly effective.",
    name: "Markus Schmidt",
    title: "General Manager, Precision Engineering"
  }
];

export const servicesData: ServiceCategory[] = [
  {
    id: 'website',
    title: 'Website Development Packages',
    description: 'Crafting stunning, high-performance websites tailored to your business needs. Choose between our informative and e-commerce solutions to build your online presence.',
    tabs: [
      {
        tabName: 'Informative',
        plans: [
          { name: 'Beginner', price: '€199', features: ['1-page Custom Website', '1 Design Concept', 'Content Integration', '3 Stock Photos', '1 Banner Design', 'Contact/Query Form', 'Complete Deployment', 'Dedicated Project Manager', '100% Ownership Rights', '100% Satisfaction Guarantee', '100% Money Back-Guarantee'],
            comparisonFeatures: {
                'Pages': '1',
                'Design Concepts': '1',
                'Mobile Responsive': false,
                'On-Page SEO': false,
                'CMS / Admin Panel': false,
                'Blog Functionality': false,
                'Stock Photos': 'Up to 3',
                'Banners': '1 Static',
                'Forms': 'Contact Form',
                'Key Integrations': false,
                'Analytics': false,
                'Advanced Features': false,
                'Speed Optimization': false,
                'Support Level': 'Standard',
                'Post-Launch Support': false
            }
          },
          { name: 'Budget', price: '€449', features: ['4-5 pages Custom Website', { feature: 'Basic on-page SEO', tooltip: 'We optimize your page titles, meta descriptions, and keywords to improve visibility on search engines for relevant queries.' }, 'Cross Browser Compatibility', 'Lead capture form with auto-email response', 'Social media link integration', 'Google Map embed for location', '1 Design Concept', '5 Stock Photos', '1 Banner Design', 'Complete Deployment', 'Dedicated Project Manager', '100% Ownership Rights', '100% Satisfaction Guarantee', '100% Money Back-Guarantee'],
            comparisonFeatures: {
                'Pages': '4-5',
                'Design Concepts': '1',
                'Mobile Responsive': false,
                'On-Page SEO': 'Basic',
                'CMS / Admin Panel': false,
                'Blog Functionality': false,
                'Stock Photos': 'Up to 5',
                'Banners': '1 Static',
                'Forms': 'Lead Capture',
                'Key Integrations': 'Socials & Maps',
                'Analytics': false,
                'Advanced Features': 'Cross-browser Compatibility',
                'Speed Optimization': false,
                'Support Level': 'Standard',
                'Post-Launch Support': false
            }
          },
          { name: 'Standard', price: '€749', isPopular: true, features: ['6-8 pages Custom Website', { feature: 'Mobile Responsive Website', tooltip: 'Your website will look and function perfectly on all devices, including desktops, tablets, and smartphones.' }, 'Custom visuals & icons', { feature: 'Enhanced SEO for key pages', tooltip: 'Advanced SEO techniques applied to your most important pages to boost their ranking for targeted keywords.' }, 'Click-to-call & WhatsApp chat functionality', 'Testimonial or case study section', 'Blog with category filters', 'Image gallery or portfolio section', 'Embedded Video (Customer will provide)', { feature: 'Secure admin tools for easy updates', tooltip: 'A user-friendly dashboard that allows you to manage and update your website content without any coding knowledge.' }, 'Cross Browser Compatibility', 'Lead capture form with auto-email response', 'Social media link integration', 'Google Map embed for location', 'Stock Photos', 'Complete Deployment', 'Dedicated Project Manager', '100% Ownership Rights', '100% Satisfaction Guarantee', '100% Money Back-Guarantee'],
            comparisonFeatures: {
                'Pages': '6-8',
                'Design Concepts': '1',
                'Mobile Responsive': true,
                'On-Page SEO': 'Enhanced',
                'CMS / Admin Panel': true,
                'Blog Functionality': true,
                'Stock Photos': 'Included',
                'Banners': '2 Static',
                'Forms': 'Lead Capture',
                'Key Integrations': 'Socials & Maps',
                'Analytics': false,
                'Advanced Features': 'Mobile Responsiveness',
                'Speed Optimization': false,
                'Support Level': 'Standard',
                'Post-Launch Support': false
            }
          },
          { name: 'Professional', price: '€1299', features: ['8-10 pages Custom Website', 'Appointment Booking System/calendar integration', 'Sliding Promotional Banners', 'Advanced Animations & Scroll Effects', { feature: 'Google Analytics setup', tooltip: 'We integrate Google Analytics to track your website traffic, user behavior, and other key metrics, providing valuable insights for your business.' }, 'Live chat integration', 'Social media feed display', { feature: 'Newsletter signup with email automation', tooltip: 'Capture leads with a newsletter form and automatically send welcome emails or add them to your marketing campaigns.' }, 'FAQ or resources section', 'Priority Support', { feature: 'Website Optimization Package for Speed', tooltip: 'We implement techniques like image compression, caching, and code minification to ensure your website loads quickly for all users.' }, 'Advanced Hover Effects', 'Search Engine Submission', 'Mobile Responsive Website', 'Custom visuals & icons', 'Enhanced SEO for key pages', 'Click-to-call & WhatsApp chat functionality', 'Testimonial or case study section', 'Blog with category filters', 'Image gallery or portfolio section', 'Embedded Video (Customer will provide)', 'Secure admin tools for easy updates', 'Cross Browser Compatibility', 'Lead capture form with auto-email response', 'Social media link integration', 'Google Map embed for location', 'Stock Photos', 'Complete Deployment', 'Dedicated Project Manager', '100% Ownership Rights', '100% Satisfaction Guarantee', '100% Money Back-Guarantee'],
            comparisonFeatures: {
                'Pages': '8-10',
                'Design Concepts': '1',
                'Mobile Responsive': true,
                'On-Page SEO': 'Enhanced',
                'CMS / Admin Panel': true,
                'Blog Functionality': true,
                'Stock Photos': 'Included',
                'Banners': 'Sliding',
                'Forms': 'Newsletter Signup',
                'Key Integrations': 'Live Chat, Social Feed',
                'Analytics': 'GA Setup',
                'Advanced Features': 'Booking System',
                'Speed Optimization': true,
                'Support Level': 'Priority',
                'Post-Launch Support': false
            }
          },
          { name: 'Premium', price: '€1899', features: ['10-15 Pages Custom Website', 'Membership Portal', 'Customer Signup Area', { feature: 'Multi-language option', tooltip: 'Make your website accessible to a global audience by offering it in multiple languages.' }, { feature: 'Advanced local SEO (schema, geo-targeting)', tooltip: 'Optimize your site for local search results, including schema markup for rich snippets and targeting specific geographic areas.' }, { feature: 'Content Management System Integration', tooltip: 'We integrate a user-friendly CMS like WordPress, allowing you to easily update your website\'s content, images, and blog posts without needing to code.' }, 'Dedicated Team of Designers Developers', '30 Days Post-Launch Support', '1 Hour Strategy Call Included', 'Email Auto Responder', 'Appointment Booking System/calendar integration', 'Sliding Promotional Banners', 'Advanced Animations & Scroll Effects', 'Google Analytics setup', 'Live chat integration', 'Social media feed display', 'Newsletter signup with email automation', 'FAQ or resources section', 'Priority Support', 'Website Optimization Package for Speed', 'Advanced Hover Effects', 'Search Engine Submission', 'Mobile Responsive Website', 'Custom visuals & icons', 'Enhanced SEO for key pages', 'Click-to-call & WhatsApp chat functionality', 'Testimonial or case study section', 'Blog with category filters', 'Image gallery or portfolio section', 'Embedded Video (Customer will provide)', 'Secure admin tools for easy updates', 'Cross Browser Compatibility', 'Lead capture form with auto-email response', 'Google Map embed for location', 'Stock Photos', 'Complete Deployment', 'Dedicated Project Manager', '100% Ownership Rights', '100% Satisfaction Guarantee', '100% Money Back-Guarantee'],
            comparisonFeatures: {
                'Pages': '10-15',
                'Design Concepts': '1',
                'Mobile Responsive': true,
                'On-Page SEO': 'Advanced Local',
                'CMS / Admin Panel': true,
                'Blog Functionality': true,
                'Stock Photos': 'Included',
                'Banners': 'Sliding',
                'Forms': 'Newsletter Signup',
                'Key Integrations': 'Live Chat, Social Feed',
                'Analytics': 'GA Setup',
                'Advanced Features': 'Membership Portal',
                'Speed Optimization': true,
                'Support Level': 'Priority',
                'Post-Launch Support': '30 Days'
            }
          },
          { name: 'Ultimate', price: '€2499', features: ['Unlimited Pages Custom Website', '2 Design Concepts', 'Online Payment Module Integration (Optional)', { feature: 'CRM integration (HubSpot, Mailchimp)', tooltip: 'Connect your website forms directly to your Customer Relationship Management (CRM) software to streamline lead management.' }, 'Advanced Forms (Multi-step/Conditional)', 'Multilingual Setup', '1 Month Maintenance', 'Premium graphics/illustrations/animations', 'Custom lead magnets (PDFs, checklists)', 'Multi-location setup', 'Blog automation (RSS or YouTube)', 'VIP Support Access', 'Advanced site analytics dashboard setup', 'Membership Portal', 'Customer Signup Area', 'Multi-language option', 'Advanced local SEO (schema, geo-targeting)', 'Content Management System Integration', 'Dedicated Team of Designers Developers', '30 Days Post-Launch Support', '1 Hour Strategy Call Included', 'Email Auto Responder', 'Appointment Booking System/calendar integration', 'Sliding Promotional Banners', 'Advanced Animations & Scroll Effects', 'Google Analytics setup', 'Live chat integration', 'Social media feed display', 'Newsletter signup with email automation', 'FAQ or resources section', 'Priority Support', 'Website Optimization Package for Speed', 'Advanced Hover Effects', 'Search Engine Submission', 'Mobile Responsive Website', 'Custom visuals & icons', 'Enhanced SEO for key pages', 'Click-to-call & WhatsApp chat functionality', 'Testimonial or case study section', 'Blog with category filters', 'Image gallery or portfolio section', 'Embedded Video (Customer will provide)', 'Secure admin tools for easy updates', 'Cross Browser Compatibility', 'Lead capture form with auto-email response', 'Google Map embed for location', 'Stock Photos', 'Complete Deployment', 'Dedicated Project Manager', '100% Ownership Rights', '100% Satisfaction Guarantee', '100% Money Back-Guarantee'], note: 'Fair Use Policy (FUP) applies: Up to 30 pages are included.',
            comparisonFeatures: {
                'Pages': 'Unlimited (FUP: 30)',
                'Design Concepts': '2',
                'Mobile Responsive': true,
                'On-Page SEO': 'Advanced Local',
                'CMS / Admin Panel': true,
                'Blog Functionality': true,
                'Stock Photos': 'Included',
                'Banners': 'Sliding',
                'Forms': 'Advanced (Multi-step)',
                'Key Integrations': 'CRM Integration',
                'Analytics': 'Advanced Dashboard',
                'Advanced Features': 'Multilingual, Automation',
                'Speed Optimization': true,
                'Support Level': 'VIP Access',
                'Post-Launch Support': '1 Month Maintenance'
            }
          },
        ],
      },
      {
        tabName: 'E-commerce',
        plans: [
          { name: 'Store Starter', price: '€349', features: ['Customized design', 'Store with 1-10 products', 'Mobile-friendly product pages', 'Simple cart & checkout', { feature: 'Secure payment setup (Stripe/PayPal)', tooltip: 'Integration of leading payment gateways to ensure your customers can pay securely and easily.' }, 'Basic store styling', 'Social media shop link', 'Complete Deployment', 'Dedicated Project Manager', '100% Ownership Rights', '100% Satisfaction Guarantee', '100% Money Back-Guarantee'],
            comparisonFeatures: {
                'Product Count': '1-10',
                'Design Level': 'Customized',
                'Payment Gateways': 'Basic (Stripe/PayPal)',
                'Shipping & Tax': false,
                'Abandoned Cart Recovery': false,
                'Discounts & Gift Cards': false,
                'Upsell & Cross-sell': false,
                'Product Reviews': false,
                'Customer Accounts': false,
                'Inventory Management': false,
                'Store Analytics': false,
                'CMS / Admin Panel': 'Basic',
                'Internationalization': false,
                'Advanced Features': false,
                'Post-Launch Support': false
            }
          },
          { name: 'Standard Store', price: '€649', isPopular: true, features: ['Up to 30 products', 'Advanced navigation setup (collections, categories, menus)', 'Mobile-responsive design', 'Homepage banner/slider design', 'Checkout & payment gateway setup (PayPal, Stripe, cards)', 'Mini shopping cart integration', 'Basic shipping configuration', 'Email order notifications', 'Basic store styling', 'Social media shop link', 'Complete Deployment', 'Dedicated Project Manager', '100% Ownership Rights', '100% Satisfaction Guarantee', '100% Money Back-Guarantee'],
            comparisonFeatures: {
                'Product Count': 'Up to 30',
                'Design Level': 'Mobile-Responsive',
                'Payment Gateways': 'Standard (Cards)',
                'Shipping & Tax': 'Basic Shipping',
                'Abandoned Cart Recovery': false,
                'Discounts & Gift Cards': false,
                'Upsell & Cross-sell': false,
                'Product Reviews': false,
                'Customer Accounts': false,
                'Inventory Management': false,
                'Store Analytics': false,
                'CMS / Admin Panel': 'Basic',
                'Internationalization': false,
                'Advanced Features': 'Homepage Slider',
                'Post-Launch Support': false
            }
          },
          { name: 'Advanced Store', price: '€999', features: ['Custom design matching your brand', 'Add up to 75 products', 'Full shopping cart', 'payment integration', 'Smart product search', { feature: 'Basic app installations', tooltip: 'Installation of essential e-commerce apps for features like product reviews, live chat, or a customer wishlist.' }, 'Shipping & tax configuration', 'Email order notifications', 'Product reviews integration', 'Store analytics dashboard', 'Low stock alerts', 'Social media integration', 'Advanced navigation setup (collections, categories, menus)', 'Mobile-responsive design', 'Complete Deployment', 'Dedicated Project Manager', '100% Ownership Rights', '100% Satisfaction Guarantee', '100% Money Back-Guarantee'],
            comparisonFeatures: {
                'Product Count': 'Up to 75',
                'Design Level': 'Custom Branded',
                'Payment Gateways': 'Standard (Cards)',
                'Shipping & Tax': 'Configured',
                'Abandoned Cart Recovery': false,
                'Discounts & Gift Cards': false,
                'Upsell & Cross-sell': false,
                'Product Reviews': true,
                'Customer Accounts': false,
                'Inventory Management': 'Low Stock Alerts',
                'Store Analytics': 'Dashboard',
                'CMS / Admin Panel': 'Basic',
                'Internationalization': false,
                'Advanced Features': 'Smart Product Search',
                'Post-Launch Support': false
            }
          },
          { name: 'Professional Store', price: '€1499', features: ['Up to 125 products', { feature: 'Abandoned cart recovery setup', tooltip: 'Automatically send reminder emails to customers who add products to their cart but don\'t complete the purchase, helping you recover lost sales.' }, 'Blog setup for content marketing', 'Product reviews & rating system integration', 'Promotional banners & announcement bars', 'Upsell & cross-sell functionality', 'Discount codes & coupon setup', 'Gift card setup', 'Newsletter popup', 'Advanced product filtering', 'Product Variants (Size, Color, etc.)', 'Multi-payment gateways (Stripe, PayPal, Apple Pay, Klarna)', { feature: 'Email marketing integration', tooltip: 'Connect your store to platforms like Klaviyo or Mailchimp to build email lists and run marketing campaigns.' }, 'Performance & sales analytics dashboard', 'Wishlist, reviews, & loyalty system', 'Smart product search', 'Shipping & tax configuration', 'Email order notifications', 'Low stock alerts', 'Social media integration', 'Advanced navigation setup (collections, categories, menus)', 'Mobile-responsive design', 'Complete Deployment', 'Dedicated Project Manager', '100% Ownership Rights', '100% Satisfaction Guarantee', '100% Money-Back Guarantee'],
            comparisonFeatures: {
                'Product Count': 'Up to 125',
                'Design Level': 'Brand-Focused',
                'Payment Gateways': 'Multi-Gateway',
                'Shipping & Tax': 'Configured',
                'Abandoned Cart Recovery': true,
                'Discounts & Gift Cards': true,
                'Upsell & Cross-sell': true,
                'Product Reviews': true,
                'Customer Accounts': false,
                'Inventory Management': 'Low Stock Alerts',
                'Store Analytics': 'Performance & Sales',
                'CMS / Admin Panel': 'Basic',
                'Internationalization': false,
                'Advanced Features': 'Blog',
                'Post-Launch Support': false
            }
          },
          { name: 'Business Store', price: '€2499', features: ['Up to 500 products', 'Conversion-Focused Design', 'Customer Login Area (Sign-Up & Sign-In)', 'Multi-currency support', 'Multiple Shipping Module Integration', 'Advanced shipping rules (zones, weight, custom rates)', 'Inventory management system setup', 'Loyalty program / reward points integration', 'Custom Shopping Cart Integration', { feature: 'CMS / Backend Administrative System', tooltip: 'A powerful and secure backend system that gives you full control over your products, orders, customers, and store settings.' }, 'Store speed & performance optimization', 'Free unlimited revisions', 'Abandoned cart recovery setup', 'Blog setup for content marketing', 'Product reviews & rating system integration', 'Promotional banners & announcement bars', 'Upsell & cross-sell functionality', 'Discount codes & coupon setup', 'Gift card setup', 'Newsletter popup', 'Advanced product filtering', 'Product Variants (Size, Color, etc.)', 'Multi-payment gateways (Stripe, PayPal, Apple Pay, Klarna)', 'Email marketing integration (Klaviyo, Mailchimp, etc.)', 'Performance & sales analytics dashboard', 'Wishlist, reviews, & loyalty system', 'Smart product search', 'Tax configuration', 'Email order notifications', 'Low stock alerts', 'Social media integration', 'Advanced navigation setup (collections, categories, menus)', 'Mobile-responsive design', 'Complete Deployment', 'Dedicated Project Manager', '100% Ownership Rights', '100% Satisfaction Guarantee', '100% Money-Back Guarantee'],
            comparisonFeatures: {
                'Product Count': 'Up to 500',
                'Design Level': 'Conversion-Focused',
                'Payment Gateways': 'Multi-Gateway',
                'Shipping & Tax': 'Advanced Rules',
                'Abandoned Cart Recovery': true,
                'Discounts & Gift Cards': true,
                'Upsell & Cross-sell': true,
                'Product Reviews': true,
                'Customer Accounts': true,
                'Inventory Management': 'System Setup',
                'Store Analytics': 'Performance & Sales',
                'CMS / Admin Panel': 'Full Backend',
                'Internationalization': 'Multi-Currency',
                'Advanced Features': 'Loyalty Program',
                'Post-Launch Support': false
            }
          },
          { name: 'Enterprise Store', price: '€4999', features: ['Unlimited Products', 'High-end interactive custom design', 'unique logo concepts', 'Unlimited categories & advanced product filters', { feature: 'Wholesale / B2B functionality', tooltip: 'Enable special pricing and ordering options for your wholesale or business-to-business customers.' }, { feature: 'ERP & CRM integrations', tooltip: 'Seamlessly connect your e-commerce store with your existing enterprise resource planning (ERP) or customer relationship management (CRM) systems.' }, 'Digital Downloads or Subscriptions', 'Subscriptions & memberships setup (recurring billing)', 'Invoicing System', 'POS & Inventory Sync', 'Multi-currency & multi-language support', 'Affiliate & referral programs', 'Advanced analytics & reporting dashboard setup', 'Admin panel for complete store control', 'Social media page linking & live feed integration', 'SEO-optimized & mobile responsive', 'Full deployment + W3C validation', 'Priority support & 30-day post-launch assistance', { feature: 'Google Analytics & Facebook Pixel integration', tooltip: 'Advanced tracking setup for in-depth analysis of user behavior and for running effective retargeting ad campaigns.' }, 'Complete Database Creation', 'Custom Dynamic Forms', 'Customer Login Area (Sign-Up & Sign-In)', 'Multiple Shipping Module Integration', 'Advanced shipping rules (zones, weight, custom rates)', 'Loyalty program / reward points integration', 'Custom Shopping Cart Integration', 'Store speed & performance optimization', 'Free unlimited revisions', 'abandoned cart recovery setup', 'Blog setup for content marketing', 'Product reviews & rating system integration', 'Promotional banners & announcement bars', 'Upsell & cross-sell functionality', 'Discount codes & coupon setup', 'Gift card setup', 'Newsletter popup', 'Advanced product filtering', 'Product Variants (Size, Color, etc.)', 'Multi-payment gateways (Stripe, PayPal, Apple Pay, Klarna)', 'Email marketing integration (Klaviyo, Mailchimp, etc.)', 'Performance & sales analytics dashboard', 'Wishlist, reviews, & loyalty system', 'Smart product search', 'Tax configuration', 'Email order notifications', 'Low stock alerts', 'Social media integration', 'Advanced navigation setup (collections, categories, menus)', 'Mobile-responsive design', 'Complete Deployment', 'Dedicated Project Manager', '100% Ownership Rights', '100% Satisfaction Guarantee', '100% Money-Back Guarantee'], note: 'Fair Use Policy (FUP) applies: Up to 1000 products are included.',
            comparisonFeatures: {
                'Product Count': 'Unlimited (FUP: 1000)',
                'Design Level': 'High-End Interactive',
                'Payment Gateways': 'Global Payments',
                'Shipping & Tax': 'Multi-Region Fulfillment',
                'Abandoned Cart Recovery': true,
                'Discounts & Gift Cards': true,
                'Upsell & Cross-sell': true,
                'Product Reviews': true,
                'Customer Accounts': true,
                'Inventory Management': 'POS & Inventory Sync',
                'Store Analytics': 'Advanced Reporting',
                'CMS / Admin Panel': 'Full Backend',
                'Internationalization': 'Multi-Currency & Language',
                'Advanced Features': 'Wholesale, Subscriptions, ERP/CRM',
                'Post-Launch Support': '30 Days Priority'
            }
          },
        ],
      },
    ],
    faqs: [
      {
        question: 'How long does it take to build a website?',
        answer: 'The timeline for building a website depends on its complexity. A basic informative website can take 1-2 weeks, while a more complex e-commerce site could take 4-8 weeks. We provide a detailed timeline after our initial consultation.'
      },
      {
        question: 'Will my website be mobile-friendly?',
        answer: 'Absolutely. All websites we build are fully responsive, meaning they will look great and function perfectly on all devices, including desktops, tablets, and smartphones.'
      },
      {
        question: 'Can I update the website content myself?',
        answer: 'Yes. For most of our packages (Standard and above), we integrate a Content Management System (CMS) that allows you to easily update text, images, and blog posts without any technical knowledge.'
      },
      {
        question: 'Do you provide website maintenance and support after launch?',
        answer: 'Yes, we offer ongoing maintenance and support packages to ensure your website remains secure, up-to-date, and running smoothly. Some of our higher-tier packages include a period of post-launch support for free.'
      },
      {
        question: 'What is the difference between an Informative and an E-commerce website?',
        answer: 'An informative website is designed to provide information about your business, services, and contact details, essentially acting as a digital brochure. An e-commerce website includes all the features of an informative site but also has full online store functionality, allowing you to sell products directly to customers.'
      }
    ]
  },
  {
    id: 'seo',
    title: 'Search Engine Optimization (SEO)',
    description: 'Boost your visibility and climb the search rankings. Our SEO strategies are designed to drive organic traffic and deliver measurable results.',
    plans: [
        { name: 'Startup', price: '€299', priceDetails: '/month', features: ['Site Audit', '5-10 Keywords', 'Competitor Analysis', 'Keyword Grouping', 'Keyword Mapping', 'XML Sitemap Optimization', 'Robots.txt Check', 'Meta Tags Creation', 'Web Content Optimization', 'Keyword Optimization', 'Anchor Text Optimization', 'Google Analytics Installation', 'Google Webmaster Installation', 'Webpage Copywriting (1000 words)', '2 Articles (400 words)', '2 On-Page Blogs (500 words)', '2 Off-Page Blogs (500 words)', 'Social Bookmarking', 'Forums/FAQ\'s', 'Link Building', 'Directory Submission', 'Local Business Listings', 'Monthly Reporting', 'Google Analytics Report', 'Monthly Progress Report', 'Dedicated Project Manager'],
            comparisonFeatures: {
                'Strategy & Audits': 'Site Audit', 'Keywords': '5-10', 'Competitor Analysis': true, 'On-Page SEO': 'Standard', 'Technical SEO': 'Standard', 'Analytics & GMB': 'GA + GSC Install', 'Content: Copywriting': '1000 words', 'Content: Articles': '2 (400 words)', 'Content: On-Page Blogs': '2 (500 words)', 'Content: Off-Page Blogs': '2 (500 words)', 'Off-Page SEO': 'Standard', 'Reporting': 'Monthly', 'Support': 'Dedicated PM'
            }
        },
        { name: 'Standard', price: '€499', priceDetails: '/month', isPopular: true, features: ['Site Audit', '20-25 Keywords', 'Competitor Analysis', 'Keyword Grouping', 'Keyword Mapping', 'XML Sitemap Optimization', 'Robots.txt Check', 'Meta Tags Creation', 'Web Content Optimization', 'Keyword Optimization', 'Anchor Text Optimization', 'Landing Page Optimization', 'Image Optimization', 'Conversion Tracking', 'Google Analytics Installation', 'Google Webmaster Installation', 'Google My Business (GMB) Listing', 'Google Places Submissions', 'Webpage Copywriting (2000 Words)', '4 Articles (400 Words)', '4 On-Page Blogs (500 Words)', '4 Off-Page Blogs (500 Words)', '1 Press Releases', 'Promotional Content', '1 Infographics', 'Business Profiles', 'Social Bookmarking', 'Classifieds', 'Forums / FAQ\'s', 'Link Building', 'Directory Submission', 'Local Business Listings', 'Google Analytics Report', 'Monthly Progress Report', 'Dedicated Project Manager'],
            comparisonFeatures: {
                'Strategy & Audits': 'Site Audit', 'Keywords': '20-25', 'Competitor Analysis': true, 'On-Page SEO': 'Advanced', 'Technical SEO': 'Standard', 'Analytics & GMB': 'GA + GSC + GMB', 'Content: Copywriting': '2000 words', 'Content: Articles': '4 (400 words)', 'Content: On-Page Blogs': '4 (500 words)', 'Content: Off-Page Blogs': '4 (500 words)', 'Content: Press Releases': '1', 'Content: Infographics': '1', 'Off-Page SEO': 'Advanced', 'Reporting': 'Monthly', 'Support': 'Dedicated PM'
            }
        },
        { name: 'Advanced', price: '€999', priceDetails: '/month', features: ['Comprehensive Site & Technical SEO Audit', '40-60 Keywords (clustered by intent & funnel stage)', 'Competitor Gap Analysis (keyword + backlink)', 'Keyword Grouping & Mapping', 'Page Speed & Core Web Vitals Review', 'Mobile Usability Audit', 'Full XML Sitemap Optimization', 'Robots.txt Validation', 'Meta Tags Creation & CTR Optimization', 'Web Content Optimization (existing pages)', 'Keyword Optimization (LSI + semantic keywords)', 'Anchor Text Optimization', 'Landing Page Optimization (A/B test variants)', 'Image Optimization (alt tags + compression)', 'Schema Markup Implementation (FAQ, Article, Local)', 'Internal Linking Strategy', 'Conversion Tracking Setup (Google Tag Manager)', 'Webpage Copywriting (3,000 words total)', '6 Articles (600 words each)', '6 On-Page Blogs (700 words each)', '4 Off-Page Blogs (600 words each)', '2 Press Releases', '2 Infographics', 'Basic Video SEO (YouTube tags, titles, description)', 'Content Calendar & Topic Strategy', 'Business Profiles & Local Citations', 'High-DA Guest Posts (2/month)', 'Social Bookmarking', 'Classifieds & Forums', 'Targeted Link Building Campaign', 'Directory Submissions', 'Local Business Listings & Map Citations', 'Niche Directory Submissions', 'Broken Link Building', 'Monthly Performance Report', 'Keyword Ranking Report', 'Google Analytics & Search Console Insights', 'Traffic Growth & Conversion Summary', 'Quarterly Strategy Call', 'Dedicated SEO Strategist', 'Monthly Strategy Review Meeting', 'Competitor Watchlist Alerts', 'Email & Chat Support (Priority)'],
            comparisonFeatures: {
                'Strategy & Audits': 'Comprehensive', 'Keywords': '40-60 (clustered)', 'Competitor Analysis': 'Gap Analysis', 'On-Page SEO': 'Full Suite', 'Technical SEO': 'Advanced (Schema, Speed)', 'Analytics & GMB': 'GTM Tracking', 'Content: Copywriting': '3000 words', 'Content: Articles': '6 (600 words)', 'Content: On-Page Blogs': '6 (700 words)', 'Content: Off-Page Blogs': '4 (600 words)', 'Content: Press Releases': '2', 'Content: Infographics': '2', 'Content: Video SEO': 'Basic', 'Off-Page SEO': 'Targeted + Guest Posts', 'Reporting': 'Performance Insights', 'Support': 'Dedicated Strategist'
            }
        },
        { name: 'Enterprise', price: '€1999', priceDetails: '/month', features: ['Enterprise-Level SEO Audit (Technical + UX + Conversion)', '100-300 Keywords / Topic Clusters', 'Competitor Intelligence & Market Share Analysis', 'Content Gap & Opportunity Mapping', 'Backlink Profile Audit (Toxic Link Removal)', 'Technical Health Monitoring Dashboard', 'Advanced Schema Markup (Product, Review, Organization)', 'Custom Meta & Title Tag Strategy', 'Full Content Optimization for 15+ Pages', 'Conversion Rate Optimization (CRO) Setup', 'Core Web Vitals Optimization', 'Internal Linking & Silo Structure Design', 'Multilingual SEO (if applicable)', 'Voice Search Optimization', 'Al/Chatbot SEO Integration', 'Google Tag Manager Event Tracking', 'Webpage Copywriting (Up to 10,000 Words)', '12 Articles (800–1000 Words)', '8 On-Page Blogs (800 Words)', '6 Off-Page Blogs (800 Words)', '4 Press Releases', '4 Infographics / Visual Content Assets', '1 Whitepaper / eBook (lead magnet)', 'Content Strategy & Editorial Calendar', 'Custom Video SEO (YouTube + Site Embed)', 'High-Authority Guest Posting (5+/month)', 'Digital PR Outreach & Influencer Collaboration', 'Industry-Specific Backlink Acquisition', 'Business Listings in Premium Directories', 'Reputation Management (Reviews & Mentions)', 'Local SEO Domination (Google Maps + Citations)', 'Competitor Link Reclamation', 'Press Syndication (Google News, Medium, etc.)', 'Google Analytics 4 Custom Dashboards', 'Goal Tracking & Funnel Setup', 'E-commerce Tracking (if applicable)', 'Heatmap & Session Recording (Hotjar/Clarity)', 'User Behavior Reports', 'Comprehensive Monthly Report', 'Real-Time Analytics Dashboard Access', 'Bi-Weekly Progress Check-In', 'Quarterly Growth Strategy Meeting', 'ROI & KPI Tracking', 'Dedicated SEO Manager + Content Team', 'Technical Support (Priority)', 'Competitor Monitoring & Alerts', 'Custom SEO Automation Setup', 'Slack or WhatsApp Communication Channel'],
            comparisonFeatures: {
                'Strategy & Audits': 'Enterprise Level', 'Keywords': '100-300 (clusters)', 'Competitor Analysis': 'Intelligence & Market Share', 'On-Page SEO': 'CRO Focused', 'Technical SEO': 'Enterprise (Voice, Multilingual)', 'Analytics & GMB': 'GA4 Custom Dashboards', 'Content: Copywriting': '10,000 words', 'Content: Articles': '12 (800-1000 words)', 'Content: On-Page Blogs': '8 (800 words)', 'Content: Off-Page Blogs': '6 (800 words)', 'Content: Press Releases': '4', 'Content: Infographics': '4', 'Content: Whitepaper/eBook': '1', 'Content: Video SEO': 'Custom', 'Off-Page SEO': 'Digital PR & Outreach', 'Reporting': 'Real-Time Dashboard', 'Support': 'Dedicated Team + Slack'
            }
        },
    ],
    faqs: [
      {
        question: 'How long does it take to see results from SEO?',
        answer: 'SEO is a long-term strategy. While you may see some initial improvements within the first 3 months, it typically takes 6-12 months to see significant and stable results in organic traffic and rankings.'
      },
      {
        question: 'What\'s the difference between on-page and off-page SEO?',
        answer: 'On-page SEO refers to optimizing elements on your website, like content, keywords, meta tags, and site speed. Off-page SEO involves activities outside of your website to build its authority and reputation, primarily through link building from other reputable sites.'
      },
      {
        question: 'Do you guarantee a #1 ranking on Google?',
        answer: 'No reputable SEO agency can guarantee a #1 ranking. Search engine algorithms are complex and constantly changing. We do, however, guarantee that we will use the latest, ethical, and most effective strategies to significantly improve your rankings and organic visibility.'
      },
      {
        question: 'Is SEO a one-time thing or an ongoing process?',
        answer: 'SEO is an ongoing process. Search engines constantly update their algorithms, and your competitors are always working to outrank you. Continuous effort is needed to maintain and improve your rankings over time.'
      }
    ]
  },
  {
    id: 'social-media',
    title: 'Social Media Marketing',
    description: 'Engage your audience and build a strong brand presence across social platforms. From content creation to ad management, we have you covered.',
    plans: [
        { name: 'Starter', price: '€399', priceDetails: '/month', features: ['Social Media Audit', 'Basic Recommendations', '08 Posts Per Month (static graphics)', '02 Stories / Highlights', '02 Carousel Posts', 'Facebook & Instagram Supported', 'Monthly Post Scheduling', 'Page Setup (Profile Picture, Bio, Cover Photo)', 'Hashtag Research', 'Monthly Monitoring of Social Assets', 'Monthly Progress Report', 'Dedicated Project Manager'],
            comparisonFeatures: {
                'Strategy & Audit': 'Audit + Recommendations',
                'Competitor Research': false,
                'Audience Targeting': false,
                'Supported Platforms': 'Facebook & Instagram',
                'Monthly Posts': '8 (Static)',
                'Stories / Highlights': '2',
                'Carousel Posts': '2',
                'GIF Posts': false,
                'SEO Blog Posts': false,
                'Short-Form Video Production': false,
                'Page Setup & Cosmetics': true,
                'Scheduling': 'Monthly',
                'Community Management': false,
                'Reputation Management': false,
                'Spam Monitoring': false,
                'Influencer Management': false,
                'Facebook Shop Setup': false,
                'Chatbot Integration': false,
                'Ads Management': false,
                'FB Business Manager & Pixel': false,
                'Hashtag Research': true,
                'Asset Monitoring': 'Monthly',
                'Reporting': 'Monthly',
                'Performance Tracking': false,
                'Support': 'Dedicated PM',
            }
        },
        { name: 'Basic', price: '€549', priceDetails: '/month', features: ['Social Media Strategy', 'Social Media Audit', 'Social Recommendations', '12 Posts Per Month', '5 Graphic Social Posts', '03 Stories / Highlights', '02 Carousel Posts', 'Facebook & Instagram Supported', 'Monthly Social Posts Scheduling', 'Social Pages Cosmetics (Cover Photo, About Section, Display Picture and more)', 'Community Management (Comments + DMs)', 'Facebook Business Manager Setup', 'Basic Pixel Integration', 'Weekly Monitoring of Social Assets', 'Weekly Monitoring of Boosted Posts', 'Dedicated Project Manager', 'Monthly Progress Report'],
            comparisonFeatures: {
                'Strategy & Audit': 'Full Strategy & Audit',
                'Competitor Research': false,
                'Audience Targeting': false,
                'Supported Platforms': 'Facebook & Instagram',
                'Monthly Posts': '12 (5 Graphic)',
                'Stories / Highlights': '3',
                'Carousel Posts': '2',
                'GIF Posts': false,
                'SEO Blog Posts': false,
                'Short-Form Video Production': false,
                'Page Setup & Cosmetics': true,
                'Scheduling': 'Monthly',
                'Community Management': true,
                'Reputation Management': false,
                'Spam Monitoring': false,
                'Influencer Management': false,
                'Facebook Shop Setup': false,
                'Chatbot Integration': false,
                'Ads Management': 'Boosted Posts',
                'FB Business Manager & Pixel': 'Basic Setup',
                'Hashtag Research': true,
                'Asset Monitoring': 'Weekly',
                'Reporting': 'Monthly',
                'Performance Tracking': 'Boost Monitoring',
                'Support': 'Dedicated PM',
            }
        },
        { name: 'Standard', price: '€999', priceDetails: '/month', isPopular: true, features: ['Social Media Strategy', 'Social Media Audit', 'Competitor Research', 'Social Recommendations', '24 Posts Per Month', '10 Graphic Social Posts', '05 Stories / Highlights', '03 Carousel Posts', '01 GIF Post', 'Facebook, Instagram, LinkedIn Supported', 'Monthly Social Posts Scheduling', 'Social Community Management (Query + Comment Responses)', 'Social Pages Cosmetics (Cover Photo, About Section, Display Picture and more)', 'Facebook Business Manager Setup', 'Facebook Pixel Integration', 'Daily Monitoring of Social Assets', 'Daily Monitoring of Boosted Posts', 'Reputation Management (Reviews, Q/A)', 'Facebook Shop Setup', 'Target Page Likes & Followers', 'Spam monitoring', 'Social Ads Management', 'Campaigns Across All Platforms', 'Up to 3 Campaigns Per Month', '6 Ad Sets Per Month', 'All Ad Objectives Supported', 'Campaign Monitoring + Optimization', 'Ad Spend (Budget Required)', 'Dedicated Ads Expert', 'Value-added services', 'Dedicated Project Manager', 'Monthly Progress Report'],
            comparisonFeatures: {
                'Strategy & Audit': 'Full Strategy & Audit',
                'Competitor Research': true,
                'Audience Targeting': 'Basic',
                'Supported Platforms': 'FB, IG, LinkedIn',
                'Monthly Posts': '24 (10 Graphic)',
                'Stories / Highlights': '5',
                'Carousel Posts': '3',
                'GIF Posts': '1',
                'SEO Blog Posts': false,
                'Short-Form Video Production': false,
                'Page Setup & Cosmetics': true,
                'Scheduling': 'Bi-weekly',
                'Community Management': 'Full',
                'Reputation Management': 'Bi-weekly',
                'Spam Monitoring': true,
                'Influencer Management': false,
                'Facebook Shop Setup': true,
                'Chatbot Integration': false,
                'Ads Management': '3 Campaigns / 6 Ad Sets',
                'FB Business Manager & Pixel': 'Full Integration',
                'Hashtag Research': true,
                'Asset Monitoring': 'Daily',
                'Reporting': 'Monthly',
                'Performance Tracking': 'Campaign Monitoring',
                'Support': 'Dedicated Ads Expert',
            }
        },
        { name: 'Professional', price: '€1999', priceDetails: '/month', features: ['Social Media Strategy', 'Social Media Audit', 'Competitor Research', 'Social Recommendations', '36 Posts Per Month', '20 Graphic Social Posts', '10 Stories / Highlights', '07 Carousel Posts', '03 GIFS Post', '02 Articles / SEO Blog Posts', 'Facebook, Instagram, LinkedIn, Twitter, Pinterest Supported', 'Monthly Social Posts Scheduling', 'Social Community Management (Query + Comment Responses)', 'Social Pages Cosmetics (Cover Photo, About Section, Display Picture and more)', 'Facebook Business Manager Setup', 'Facebook Pixel Integration', 'Daily Monitoring of Social Assets', 'Daily Monitoring of Boosted Posts', 'Reputation Management (Reviews, Q/A)', 'Facebook Shop Setup', 'Target Page Likes & Followers', 'Chatbot Integration', 'Spam monitoring', 'Social Ads Management', 'All Social Ad Platforms', 'Up to 5 Campaigns Per Month', '10 Ad Sets Per Month', 'All Ad Objectives Supported', 'Detailed Campaign Monitoring', 'Daily Campaign Optimization', 'Ad Spend (Budget Required)', 'Dedicated Ads Expert', 'Value-added services', 'Dedicated Project Manager', 'Bi-weekly Progress Report', 'Priority Support'],
            comparisonFeatures: {
                'Strategy & Audit': 'Full Strategy & Audit',
                'Competitor Research': true,
                'Audience Targeting': 'Advanced',
                'Supported Platforms': 'FB, IG, LinkedIn, Twitter, Pinterest',
                'Monthly Posts': '36 (20 Graphic)',
                'Stories / Highlights': '10',
                'Carousel Posts': '7',
                'GIF Posts': '3',
                'SEO Blog Posts': '2',
                'Short-Form Video Production': false,
                'Page Setup & Cosmetics': true,
                'Scheduling': 'Weekly',
                'Community Management': 'Full',
                'Reputation Management': 'Weekly',
                'Spam Monitoring': true,
                'Influencer Management': false,
                'Facebook Shop Setup': true,
                'Chatbot Integration': true,
                'Ads Management': '5 Campaigns / 10 Ad Sets',
                'FB Business Manager & Pixel': 'Full Integration',
                'Hashtag Research': true,
                'Asset Monitoring': 'Daily',
                'Reporting': 'Bi-weekly',
                'Performance Tracking': 'Detailed Monitoring',
                'Support': 'Priority',
            }
        },
        { name: 'Enterprise Plus', price: '€3,499', priceDetails: '/month', features: ['Comprehensive Social Strategy (Quarterly Roadmap)', 'In-depth Competitor & Market Analysis', 'Advanced Audience Segmentation', '60+ Posts Per Month', '30 Graphic Social Posts', '15 Stories / Highlights', '10 Carousel Posts', '05 GIF Posts', '04 SEO Blog Posts / Articles', 'Short-Form Video Production (Reels, Shorts, TikToks)', 'Facebook, Instagram, LinkedIn, Twitter, Pinterest, YouTube / TikTok Supported', 'Daily Post Scheduling', 'Full Community Management (24/7 Query & Comment Response)', 'Page Cosmetics & Branding Consistency', 'Advanced Pixel & Tracking Integrations', 'Real-Time Reputation Monitoring', 'Facebook / Instagram Shop Setup', 'Influencer Collaboration Management', 'Spam & Crisis Management', 'Conversion Funnel Tracking', 'All Social Ad Platforms Supported', 'Unlimited Campaigns + Ad Sets', 'Retargeting + Lookalike Audiences', 'Multi-Country Ad Targeting', 'Al-driven Optimization', 'Ad Spend (Budget Required)', 'Dedicated Ads & Analytics Team', 'Dedicated Project Manager & Creative Strategist', 'Weekly Progress & Analytics Report', 'Custom Dashboard Access', 'Priority Support'],
            comparisonFeatures: {
                'Strategy & Audit': 'Quarterly Roadmap',
                'Competitor Research': 'In-depth Analysis',
                'Audience Targeting': 'Advanced Segmentation',
                'Supported Platforms': 'All major platforms',
                'Monthly Posts': '60+',
                'Stories / Highlights': '15',
                'Carousel Posts': '10',
                'GIF Posts': '5',
                'SEO Blog Posts': '4',
                'Short-Form Video Production': true,
                'Page Setup & Cosmetics': true,
                'Scheduling': 'Daily',
                'Community Management': '24/7',
                'Reputation Management': 'Real-Time',
                'Spam Monitoring': 'Crisis Management',
                'Influencer Management': true,
                'Facebook Shop Setup': true,
                'Chatbot Integration': true,
                'Ads Management': 'Unlimited Campaigns',
                'FB Business Manager & Pixel': 'Advanced + Funnel Tracking',
                'Hashtag Research': true,
                'Asset Monitoring': 'Daily',
                'Reporting': 'Weekly + Custom Dashboard',
                'Performance Tracking': 'Funnel Tracking',
                'Support': 'Dedicated Team',
            }
        },
    ],
    faqs: [
      {
        question: 'Which social media platforms are right for my business?',
        answer: 'The best platforms depend on your industry and target audience. For B2C businesses, platforms like Facebook, Instagram, and Pinterest are often effective. For B2B, LinkedIn is usually the primary focus. We conduct an audit to determine the most suitable platforms for your specific goals.'
      },
      {
        question: 'How do you measure the success of a social media campaign?',
        answer: 'Success is measured using key performance indicators (KPIs) aligned with your goals. These can include metrics like engagement rate, reach, website clicks, conversion rate, and return on ad spend (ROAS). We provide detailed monthly reports to track progress.'
      },
      {
        question: 'Will you create the content for my social media posts?',
        answer: 'Yes, our packages include content creation, which involves designing graphics, writing copy, and producing other forms of content like GIFs or short videos, depending on your chosen plan.'
      },
      {
        question: 'How much should I spend on social media ads?',
        answer: 'Your ad budget (ad spend) is separate from our management fee. The amount you should spend depends on your goals, industry, and target audience. We can provide recommendations for a starting budget based on our initial strategy session.'
      }
    ]
  },
  {
    id: 'logo-design',
    title: 'Logo Design & Branding',
    description: 'Craft a memorable brand identity with a unique, professional logo. Our design process ensures your vision comes to life.',
    plans: [
      { name: 'Starter', price: '€49', features: ['2 Original Logo Concepts', '2 Revision Rounds', 'Choice of 2 Color Variations', 'Transparent PNG File', 'JPG & PNG Formats', 'Basic Font & Color Recommendations', 'Delivery in 48 Hours', 'Dedicated Project Manager', '100% Ownership Rights', '100% Satisfaction Guarantee', '100% Money-Back Guarantee'],
        comparisonFeatures: {
            'Logo Concepts': '2', 'Revision Rounds': '2', 'Color Variations': '2', 'File Formats': 'JPG, PNG', 'Vector Files': false, 'Brand Guide': 'Basic Recommendations', 'Social Media Kit': false, 'Stationery Design': false, 'Delivery Time': '48 Hours'
        }
      },
      { name: 'Basic', price: '€99', features: ['3 Unique Logo Concepts', 'Up to 4 Revision Rounds', 'Full-Color, Black, and White Variants', 'Transparent & Background Versions', 'JPG, PNG, and PDF Files (Print-Ready)', 'Simple Icon or Symbol Design', 'Basic Typography & Color Palette', 'Delivery in 72 Hours', 'Dedicated Project Manager', '100% Ownership Rights', '100% Satisfaction Guarantee', '100% Money-Back Guarantee'],
        comparisonFeatures: {
            'Logo Concepts': '3', 'Revision Rounds': '4', 'Color Variations': 'Full, B&W', 'File Formats': 'JPG, PNG, PDF', 'Vector Files': false, 'Brand Guide': 'Basic Palette', 'Social Media Kit': false, 'Stationery Design': false, 'Delivery Time': '72 Hours'
        }
      },
      { name: 'Standard', price: '€199', isPopular: true, features: ['5 Unique Logo Concepts', 'Unlimited Revisions (within scope)', 'Versions for Light & Dark Backgrounds', 'JPG, PNG, PDF, AI, and EPS Files', 'Full Vector & Scalable Formats', 'Icon & Symbol Variations', 'Complete Color Palette (Full Brand Spectrum)', 'Typography Recommendations', 'Mini Brand Guide (Usage Rules, Color Codes, Fonts)', 'Facebook & Instagram Profile Logos', 'Business Card & Letterhead Mockups', 'Delivery in 5 Business Days', 'Dedicated Project Manager', '100% Ownership Rights', '100% Satisfaction Guarantee', '100% Money-Back Guarantee'],
        comparisonFeatures: {
            'Logo Concepts': '5', 'Revision Rounds': 'Unlimited', 'Color Variations': 'Full, B&W, Inverse', 'File Formats': 'JPG, PNG, PDF, AI, EPS', 'Vector Files': true, 'Brand Guide': 'Mini Guide', 'Social Media Kit': 'Profile Logos', 'Stationery Design': 'Mockups', 'Delivery Time': '5 Business Days'
        }
      },
      { name: 'Pro', price: '€399', features: ['Unlimited Logo Concepts by 2 Designers', 'Unlimited Revisions', 'Horizontal, Vertical & Icon-Only Versions', 'JPG, PNG, PDF, AI, EPS & SVG Files', 'CMYK + RGB Color Profiles', 'Full Color Palette (Primary, Secondary, Accent)', 'Advanced Typography System', 'Comprehensive Brand Identity Sheet', 'Iconography & Favicon Design', 'Social Media Kit (Profile, Banner, Cover Images)', 'Business Card & Letterhead Design', 'Product Mockups (Apparel, Signage, Packaging)', 'Priority Delivery in 3-4 Business Days', 'Dedicated Project Manager', '100% Ownership Rights', '100% Satisfaction Guarantee', '100% Money-Back Guarantee'],
        comparisonFeatures: {
            'Logo Concepts': 'Unlimited (2 Designers)', 'Revision Rounds': 'Unlimited', 'Color Variations': 'Full Suite + Profiles', 'File Formats': 'JPG, PNG, PDF, AI, EPS, SVG', 'Vector Files': true, 'Brand Guide': 'Comprehensive Sheet', 'Social Media Kit': 'Full Kit', 'Stationery Design': 'Full Design Files', 'Delivery Time': '3-4 Business Days (Priority)'
        }
      },
    ],
    faqs: [
      {
        question: 'What files will I receive with my logo package?',
        answer: 'You will receive your logo in various formats suitable for both web and print, including high-resolution JPG, transparent PNG, and vector files (AI, EPS, SVG) for scalability. The exact file types depend on the package you choose.'
      },
      {
        question: 'How many revisions can I request?',
        answer: 'The number of revision rounds varies by package. Our Standard and Pro packages offer unlimited revisions to ensure you are 100% satisfied with the final design.'
      },
      {
        question: 'Do I get full ownership of the final logo?',
        answer: 'Yes, absolutely. Upon completion of the project, you will have 100% ownership rights to the final logo design.'
      },
      {
        question: 'What is a brand guide?',
        answer: 'A brand guide, included in our Standard and Pro packages, is a document that outlines your brand\'s visual identity. It includes your final logo, color palette (with color codes), and typography, ensuring your brand is presented consistently everywhere.'
      }
    ]
  },
  {
    id: 'mobile-app',
    title: 'Mobile App Development',
    description: 'From concept to launch, we build intuitive and powerful mobile applications for iOS and Android that engage users and achieve business goals.',
    plans: [
      { name: 'Startup MVP', price: '€5,449', features: ['Single Platform (iOS or Android)', 'Up to 5 Core Screens', 'User Login & Social Signup', 'Custom Dashboard Design', 'Advanced Data Display', 'Custom UI/UX Design', 'Interactive Prototyping', 'Firebase Backend Integration', 'Basic Admin Panel', 'Testing on 10+ Devices', 'App Store Deployment Support', '15 Days Free Bug Support', 'Push Notifications', 'Basic Analytics Integration', 'Contact/Support Form', 'Splash Screen & App Icons', 'Basic Animation Effects', 'Crash Reporting', 'Performance Optimization', 'Source Code Delivery'],
        comparisonFeatures: {
            'Platforms': '1 (iOS or Android)', 'Core Screens': 'Up to 5', 'UI/UX Design': 'Custom', 'User Login': 'Email & Social', 'Backend': 'Firebase', 'Admin Panel': 'Basic', 'Push Notifications': true, 'Analytics': 'Basic', 'In-App Purchases': false, 'Live Chat': false, 'Maps Integration': false, 'Post-Launch Support': '15 Days Bug Support'
        }
      },
      { name: 'Business Growth', price: '€9,999', isPopular: true, features: ['Both iOS & Android', 'User Login (Email & Social)', 'Custom UI/UX with Prototype', 'In-App Purchases / E-commerce', 'Payment Gateway (Stripe, PayPal)', 'Advanced Shopping Cart', 'Push Notifications', 'Messaging & Live Chat API', 'Social Sharing', 'Google Maps & Location Services', 'Data Import/Export Functionality', 'Custom Web APIs & Online Database', 'Product Gallery & Showcase', 'Product Categories & Subcategories', 'Crashlytics & Analytics Dashboard', 'Audio/Video Streaming Capability', 'Wishlist & Favorites', 'Order History & Tracking', 'Rating & Review System', 'Custom Backend & Admin Panel', 'Comprehensive Testing', 'Full App Store Deployment', '1 Month of Bug Support'],
        comparisonFeatures: {
            'Platforms': '2 (iOS & Android)', 'Core Screens': 'Not Limited', 'UI/UX Design': 'Custom + Prototype', 'User Login': 'Email & Social', 'Backend': 'Custom Web APIs', 'Admin Panel': 'Custom', 'Push Notifications': true, 'Analytics': 'Dashboard', 'In-App Purchases': true, 'Live Chat': true, 'Maps Integration': true, 'Post-Launch Support': '1 Month Bug Support'
        }
      },
      { name: 'Enterprise Scale', price: '€19,999', features: ['Everything in Business Growth, PLUS:', 'Native Tablet Support', 'Multi-tier User Roles & Permissions', 'Complex API Integration (ERP, CRM, Legacy Systems)', 'Advanced Analytics & Reporting Dashboard', 'Full Offline Functionality & Sync', 'Biometric/Fingerprint Login', 'Deep Linking', 'Scalable Microservices Architecture (AWS/Azure)', 'Automated Testing Suite', 'Security Penetration Testing', 'Performance & Load Testing', 'CI/CD Pipeline Setup', 'SLA-Backed Hosting & Maintenance', '3 Months of Support & Priority Enhancements'],
        comparisonFeatures: {
            'Platforms': '2 + Tablet', 'Core Screens': 'Not Limited', 'UI/UX Design': 'Custom + Prototype', 'User Login': 'Biometric', 'Backend': 'Microservices Architecture', 'Admin Panel': 'Custom + Multi-tier Roles', 'Push Notifications': true, 'Analytics': 'Advanced Reporting', 'In-App Purchases': true, 'Live Chat': true, 'Maps Integration': true, 'Post-Launch Support': '3 Months Priority', 'Complex API Integrations': true, 'Offline Functionality': true, 'Security Testing': true
        }
      },
    ],
    faqs: [
      {
        question: 'How much does it cost to build a mobile app?',
        answer: 'The cost varies widely based on the complexity, features, and platforms (iOS, Android, or both). Our packages provide a clear starting point, from an MVP to a full-scale enterprise app. Contact us for a custom quote based on your specific requirements.'
      },
      {
        question: 'Do you develop for both iOS and Android?',
        answer: 'Yes, we develop for both platforms. Our "Business Growth" and "Enterprise Scale" packages include development for both iOS and Android. We can build native apps for each platform or use cross-platform technologies depending on the project needs.'
      },
      {
        question: 'What is an MVP (Minimum Viable Product)?',
        answer: 'An MVP is a version of your app that includes just the core features needed to solve a primary user problem. It\'s a strategic way to launch quickly, gather user feedback, and validate your idea before investing in a full-featured application.'
      },
      {
        question: 'Will you help me publish my app to the app stores?',
        answer: 'Yes, all of our mobile app development packages include full support for deploying and publishing your app to the Apple App Store and Google Play Store.'
      }
    ]
  },
  {
    id: 'dropshipping',
    title: 'Dropshipping Solutions',
    description: 'Launch your e-commerce empire without the hassle of inventory. We build and optimize dropshipping stores for maximum profitability.',
    plans: [
      { name: 'Micro', price: '€999', features: ['Niche Selection Guidance', 'Supplier & Product Category Research', 'Customized Website design & development', 'Payment Gateway Integration', 'Up to 25 Products Imported', 'Supplier Vetting (Delivery, Quality, Ratings)', 'Automated Inventory & Price Sync Setup', 'Product Title & Description Optimization', 'Basic Logo Creation', 'Storefront Customization (Colors, Fonts, Layout)', 'Homepage Banner Design', 'Product Page Formatting', 'Abandoned Cart Recovery Setup', 'Order Tracking Integration', 'Shipping Policy & Terms Setup', '5 Days Post-Launch Support via Email', 'Store Management Quick Guide', 'Dedicated Project Manager', '100% Ownership Rights', '100% Satisfaction Guarantee', '100% Money Back Guarantee'],
        comparisonFeatures: {
            'Research & Strategy': 'Niche Guidance', 'Products Imported': 'Up to 25', 'Supplier Sourcing': 'Vetted', 'Automation': 'Inventory & Price Sync', 'Branding': 'Basic Logo & Storefront', 'Marketing & Sales Tools': 'Abandoned Cart', 'Post-Launch Support': '5 Days (Email)', 'Training': 'Quick Guide'
        }
      },
      { name: 'Basic', price: '€2,999', features: ['Complete Niche Validation', 'Competitor Analysis', 'Customized Website design & development', 'Tax & Shipping Zone Configuration', 'Payment Gateway & Currency Setup', '100 Products Imported', 'Verified Supplier Sourcing (AliExpress, CJ, etc.)', 'Product Image Optimization', 'Product Pricing Rule Automation', 'Custom Logo Design (2 Concepts)', 'Branded Homepage Design', 'Banner & Hero Section Design', 'Product Page Copywriting (SEO-Optimized)', 'Abandoned Cart & Welcome Email Setup', 'Order Tracking Dashboard', 'App Integration (Trust Badges, Reviews, Timer)', 'Store Speed Optimization', '7 Days Post-Launch Support', 'Store Management Training (1 Hour)', 'Dedicated Project Manager', '100% Ownership Rights', '100% Satisfaction Guarantee', '100% Money Back Guarantee'],
        comparisonFeatures: {
            'Research & Strategy': 'Niche Validation + Competitor Analysis', 'Products Imported': '100', 'Supplier Sourcing': 'Verified', 'Automation': 'Pricing Rules', 'Branding': 'Custom Logo (2 concepts)', 'Marketing & Sales Tools': 'Welcome Email + App Integration', 'Post-Launch Support': '7 Days', 'Training': '1 Hour'
        }
      },
      { name: 'Standard', price: '€5,999', isPopular: true, features: ['Advanced Niche Research (Data-Driven)', 'Competitor & Keyword Analysis', 'Customized Website design & development', 'Branded Email Setup (info@yourdomain.com)', 'SEO Optimization (Meta Titles, Tags, Descriptions)', '250 Products Imported', 'Supplier Vetting + Backup Supplier Options', 'Bulk Product Upload & Optimization', 'Automated Inventory & Stock Sync', 'Premium Logo Design (3 Concepts)', 'Custom Homepage + Inner Pages', 'Product Page Aesthetic design', 'Homepage & Collection Banner Design', 'Upsell & Cross-Sell Plugin Setup', 'Abandoned Cart Email Workflow', 'Tracking Page Integration', 'Live Chat & Customer Inquiry Setup', '15 Days Post-Launch Support', '1-on-1 Store Training (2 Sessions)', 'Dedicated Project Manager', '100% Ownership Rights', '100% Satisfaction Guarantee', '100% Money Back Guarantee'],
        comparisonFeatures: {
            'Research & Strategy': 'Data-Driven + Keyword Analysis', 'Products Imported': '250', 'Supplier Sourcing': 'Vetted + Backup', 'Automation': 'Inventory & Stock Sync', 'Branding': 'Premium Logo (3 concepts)', 'Marketing & Sales Tools': 'Upsell/Cross-Sell + Live Chat', 'SEO Optimization': true, 'Post-Launch Support': '15 Days', 'Training': '2 Sessions (1-on-1)'
        }
      },
      { name: 'Pro', price: '€8,999', features: ['Multi-Niche Analysis & Validation', 'Competitor Benchmarking & Market Positioning', 'Customized Website design & development', 'Currency Conversion & International Shipping Setup', 'Email Domain & Google Workspace Integration', 'Up to 500 High-Margin Products', 'Verified & Preferred Supplier Partnerships', 'Advanced Pricing Automation (Profit Margin Rules)', 'Bulk Product Import with Category Mapping', 'Full Custom Brand Identity (Logo, Fonts, Palette)', 'Premium UI/UX Store Design', 'Animated Homepage Banners', 'Mobile & Tablet Responsive Design', 'Full Funnel Automation (Cart Recovery, Retargeting)', 'Order Management Dashboard Setup', 'Advanced Analytics (Sales, Traffic, Conversion)', 'Multi-Language & Multi-Currency Setup', '30 Days Post-Launch Technical Support', 'Store Training (3 Sessions)', '1 Strategy Consultation Call', 'Dedicated Operations Team', 'Dedicated Project Manager', 'Priority Support', '100% Ownership Rights', '100% Satisfaction Guarantee', '100% Money Back Guarantee'],
        comparisonFeatures: {
            'Research & Strategy': 'Multi-Niche + Market Positioning', 'Products Imported': 'Up to 500', 'Supplier Sourcing': 'Preferred Partnerships', 'Automation': 'Full Funnel', 'Branding': 'Full Custom Identity', 'Marketing & Sales Tools': 'Advanced Analytics', 'SEO Optimization': true, 'Internationalization': 'Multi-Language & Currency', 'Post-Launch Support': '30 Days (Technical)', 'Training': '3 Sessions + Strategy Call'
        }
      },
      { name: 'Enterprise', price: '€11,999', features: ['Brand & Business Roadmap', 'Niche Diversification Strategy', 'Global Payment & Multi-Region Fulfillment Setup', 'Tax, Duty & Compliance Configuration', 'Unlimited Product Import', 'Private Label / White Label Supplier Sourcing', 'Verified & Preferred Supplier Partnerships', 'Bulk Supplier Negotiation Assistance', 'Custom Product Bundling & Pricing Strategy', 'Custom High-End Store Design (Tailored to Brand)', 'Full Brand Kit (Logo, Colors, Typography, Icons)', 'Homepage Video Banner + Motion Graphics', 'Branded Product Mockups & Lifestyle Imagery', 'Complete eCommerce Automation System', 'CRM & Email Marketing Integrations', 'AI-Based Product Recommendation Setup', 'Advanced Analytics Dashboard (Real-Time Reporting)', '60 Days Post-Launch Support', 'Dedicated Team Training Session', 'Business Scaling Consultation', 'Dedicated full team: account manager, product manager, logistics specialist', 'VIP support', '100% Ownership Rights', '100% Satisfaction Guarantee', '100% Money Back Guarantee'], note: 'Fair Use Policy (FUP) applies: Up to 1000 products are included.',
        comparisonFeatures: {
            'Research & Strategy': 'Business Roadmap', 'Products Imported': 'Unlimited (FUP: 1000)', 'Supplier Sourcing': 'Private Label / White Label', 'Automation': 'Complete System + CRM/Email', 'Branding': 'Full Brand Kit + Video/Motion', 'Marketing & Sales Tools': 'AI Recommendations', 'SEO Optimization': true, 'Internationalization': 'Global Fulfillment', 'Post-Launch Support': '60 Days + VIP', 'Training': 'Team Training + Scaling Consultation'
        }
      }
    ],
    faqs: [
      {
        question: 'What is dropshipping?',
        answer: 'Dropshipping is an e-commerce model where you sell products online without holding any inventory yourself. When a customer places an order, you purchase the item from a third-party supplier who then ships it directly to the customer.'
      },
      {
        question: 'How do you find winning products to sell?',
        answer: 'Our process involves in-depth market research, trend analysis, and competitor analysis to identify high-demand, profitable products. We use specialized tools to validate product potential and vet suppliers for quality and reliability.'
      },
      {
        question: 'Do I need to handle shipping and inventory?',
        answer: 'No, that\'s the beauty of dropshipping! The supplier handles all aspects of inventory management, packaging, and shipping. Your primary focus is on marketing and growing your brand.'
      },
      {
        question: 'Is dropshipping still profitable?',
        answer: 'Yes, dropshipping can be very profitable when done correctly. Success depends on choosing the right niche, sourcing quality products, effective marketing, and providing excellent customer service. Our packages are designed to set you up with all the tools and strategies needed to succeed.'
      }
    ]
  }
];