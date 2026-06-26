
import type { ServiceCategory } from '../types';

export const testimonials = [
  {
    heading: "Mobile app perfection",
    review: "We had this crazy mobile app idea that we weren't even sure could be pulled off, but Designing Dose made it happen. The app looks amazing, runs like butter, and just feels right. What I loved most was how easy they were to work with; no tech jargon, no stress, just results. If you've got an idea you actually care about, they're the team you want building it.",
    name: "Isabella Rossi",
    title: "Trustpilot Review"
  },
  {
    heading: "I'm blown away by the stunning website...",
    review: "I'm blown away by the stunning website development and logo design created by Designingdose! Their attention to detail and creativity have taken my brand to the next level.",
    name: "Pierre Dupont",
    title: "Trustpilot Review"
  },
  {
    heading: "Quality work in best prices",
    review: "They were very professional and supportive. I personally find their prices to be the best and the work was exceptional too. I'm satisfied with my website and would love to try them again if needed and definitely would recommend others. Although, they could improve their response time, sometimes I wasn't catered right away but still they managed to respond the same day. So it was a good experience overall.",
    name: "Jasper",
    title: "Trustpilot Review"
  },
  {
    heading: "Exceeded my expectations",
    review: "Hired them just to get a basic website and ended up with a whole lot more. Trevor and team were very professional and cooperative throughout our entire journey. The prices were so good that at the beginning I was reluctant and thought maybe I'm getting played lol but all ended well, very well. Got a website, logo, hosting add-ons and whatnot. They are now working on the SEO, we're just 2nd month in but I can feel it's going in a good direction. Highly recommend!!",
    name: "Daniel Prescott",
    title: "Trustpilot Review"
  },
  {
    heading: "I highly recommend them",
    review: "I highly recommend them Trevor is a very friendly and cooperative person, he guided me step by step in my website journey. Much appreciated.",
    name: "Tilal Mahgoub",
    title: "Trustpilot Review"
  },
  {
    heading: "Excellent Logo Design and Website Development",
    review: "I recently worked with Designingdose for logo design and website development, and I couldn't be happier with the results! The team took the time to understand my vision and delivered a unique logo that perfectly represents my brand. Their website development service was equally impressive - the site is sleek, user-friendly, and responsive across all devices. Their communication was clear, and they made revisions until everything was perfect.",
    name: "Amber Moreland",
    title: "Trustpilot Review"
  },
  {
    heading: "Excellent Service with Creative Input",
    review: "I hired Designingdose to build a website for my business, and I couldn't be happier with the results! Not only did they listen to my needs, but they also provided their own creative ideas that improved the final product. The result was a high-quality, user-friendly design that was up to my expectations. Their professionalism, pro-activeness and timely delivery made the whole process smooth. Highly recommend their services!",
    name: "Hasnain Ali",
    title: "Trustpilot Review"
  },
  {
    heading: "Excellent from start to finish",
    review: "Trevor and the team were excellent from start to finish. They created a website within a short time period with no issues and excellent communication throughout.",
    name: "Johnm",
    title: "Trustpilot Review"
  },
  {
    heading: "Good communications",
    review: "Good communications and good website made for good quote.",
    name: "Aidan Mone",
    title: "Trustpilot Review"
  },
  {
    heading: "Incredible ROI on our SEO campaign",
    review: "We were struggling to get noticed online until we partnered with Designing Dose. Their SEO strategy was comprehensive and transparent. Within 4 months, our organic traffic doubled, and the quality of leads has improved significantly. Professional, data-driven, and effective.",
    name: "Sarah Jenkins",
    title: "Marketing Director, TechFlow"
  },
  {
    heading: "A partner, not just a vendor",
    review: "What sets Designing Dose apart is their genuine care for your business growth. They don't just deliver a product; they provide strategy. The e-commerce store they built for us is robust, fast, and converting higher than our old site ever did.",
    name: "Michael O'Connor",
    title: "CEO, O'Connor Retail"
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
          { name: 'Beginner', price: '€199', features: ['1-page Custom Website', '1 Design Concept', 'Content Integration', '3 Stock Photos', '1 Banner Design', { feature: 'Contact/Query Form', tooltip: 'A simple form allowing visitors to send you messages directly from your website.' }, 'Complete Deployment', 'Dedicated Project Manager', '100% Ownership Rights', '100% Satisfaction Guarantee', '100% Money Back-Guarantee'],
            comparisonFeatures: {
                'Pages': '1', 'Design Concepts': '1', 'Mobile Responsive': false, 'On-Page SEO': false, 'CMS / Admin Panel': false, 'Blog Functionality': false, 'Stock Photos': 'Up to 3', 'Banners': '1 Static', 'Forms': 'Contact Form', 'Support Level': 'Standard'
            }
          },
          { name: 'Budget', price: '€449', features: ['4-5 pages Custom Website', { feature: 'Basic on-page SEO', tooltip: 'We optimize your page titles, meta descriptions, and keywords to improve visibility on search engines for relevant queries.' }, { feature: 'Cross Browser Compatibility', tooltip: 'Ensures your website looks and works correctly on all major web browsers like Chrome, Firefox, and Safari.' }, { feature: 'Lead capture form with auto-email response', tooltip: 'Collect visitor details and automatically send them a confirmation or welcome email.' }, 'Social media link integration', 'Google Map embed for location', '1 Design Concept', '5 Stock Photos', '1 Banner Design', 'Complete Deployment', 'Dedicated Project Manager', '100% Ownership Rights', '100% Satisfaction Guarantee', '100% Money Back-Guarantee'],
            comparisonFeatures: {
                'Pages': '4-5', 'Design Concepts': '1', 'Mobile Responsive': false, 'On-Page SEO': 'Basic', 'CMS / Admin Panel': false, 'Blog Functionality': false, 'Stock Photos': 'Up to 5', 'Banners': '1 Static', 'Forms': 'Lead Capture', 'Support Level': 'Standard'
            }
          },
          { name: 'Standard', price: '€749', isPopular: true, features: ['6-8 pages Custom Website', { feature: 'Mobile Responsive Website', tooltip: 'Your website will look and function perfectly on all devices, including desktops, tablets, and smartphones.' }, 'Custom visuals & icons', { feature: 'Enhanced SEO for key pages', tooltip: 'Advanced SEO techniques applied to your most important pages to boost their ranking for targeted keywords.' }, 'Click-to-call & WhatsApp chat functionality', 'Testimonial or case study section', { feature: 'Blog with category filters', tooltip: 'A section to share news and articles, organized by topics for easy navigation.' }, 'Image gallery or portfolio section', 'Embedded Video (Customer will provide)', { feature: 'Secure admin tools for easy updates', tooltip: 'A user-friendly dashboard that allows you to manage and update your website content without any coding knowledge.' }, 'Cross Browser Compatibility', 'Lead capture form with auto-email response', 'Social media link integration', 'Google Map embed for location', 'Stock Photos', 'Complete Deployment', 'Dedicated Project Manager', '100% Ownership Rights', '100% Satisfaction Guarantee', '100% Money Back-Guarantee'],
            comparisonFeatures: {
                'Pages': '6-8', 'Design Concepts': '1', 'Mobile Responsive': true, 'On-Page SEO': 'Enhanced', 'CMS / Admin Panel': true, 'Blog Functionality': true, 'Stock Photos': 'Included', 'Forms': 'Lead Capture', 'Support Level': 'Standard'
            }
          },
          { name: 'Professional', price: '€1299', features: ['8-10 pages Custom Website', { feature: 'Appointment Booking System/calendar integration', tooltip: 'Allow clients to book appointments with you directly through your website.' }, 'Sliding Promotional Banners', 'Advanced Animations & Scroll Effects', { feature: 'Google Analytics setup', tooltip: 'We integrate Google Analytics to track your website traffic, user behavior, and other key metrics, providing valuable insights for your business.' }, 'Live chat integration', 'Social media feed display', { feature: 'Newsletter signup with email automation', tooltip: 'Capture leads with a newsletter form and automatically send welcome emails or add them to your marketing campaigns.' }, 'FAQ or resources section', 'Priority Support', { feature: 'Website Optimization Package for Speed', tooltip: 'We implement techniques like image compression, caching, and code minification to ensure your website loads quickly for all users.' }, 'Advanced Hover Effects', 'Search Engine Submission', 'Mobile Responsive Website', 'Custom visuals & icons', 'Enhanced SEO for key pages', 'Click-to-call & WhatsApp chat functionality', 'Testimonial or case study section', 'Blog with category filters', 'Image gallery or portfolio section', 'Embedded Video (Customer will provide)', 'Secure admin tools for easy updates', 'Cross Browser Compatibility', 'Lead capture form with auto-email response', 'Social media link integration', 'Google Map embed for location', 'Stock Photos', 'Complete Deployment', 'Dedicated Project Manager', '100% Ownership Rights', '100% Satisfaction Guarantee', '100% Money Back-Guarantee'],
            comparisonFeatures: {
                'Pages': '8-10', 'Design Concepts': '1', 'Mobile Responsive': true, 'On-Page SEO': 'Enhanced', 'CMS / Admin Panel': true, 'Blog Functionality': true, 'Analytics': 'GA Setup', 'Support Level': 'Priority'
            }
          },
          { name: 'Premium', price: '€1899', features: ['10-15 Pages Custom Website', { feature: 'Membership Portal', tooltip: 'A restricted area of your site accessible only to registered members or subscribers.' }, 'Customer Signup Area', { feature: 'Multi-language option', tooltip: 'Make your website accessible to a global audience by offering it in multiple languages.' }, { feature: 'Advanced local SEO (schema, geo-targeting)', tooltip: 'Optimize your site for local search results, including schema markup for rich snippets and targeting specific geographic areas.' }, { feature: 'Content Management System Integration', tooltip: 'We integrate a user-friendly CMS like WordPress, allowing you to easily update your website\'s content, images, and blog posts without needing to code.' }, 'Dedicated Team of Designers Developers', '30 Days Post-Launch Support', '1 Hour Strategy Call Included', 'Email Auto Responder', 'Appointment Booking System/calendar integration', 'Sliding Promotional Banners', 'Advanced Animations & Scroll Effects', 'Google Analytics setup', 'Live chat integration', 'Social media feed display', 'Newsletter signup with email automation', 'FAQ or resources section', 'Priority Support', 'Website Optimization Package for Speed', 'Advanced Hover Effects', 'Search Engine Submission', 'Mobile Responsive Website', 'Custom visuals & icons', 'Enhanced SEO for key pages', 'Click-to-call & WhatsApp chat functionality', 'Testimonial or case study section', 'Blog with category filters', 'Image gallery or portfolio section', 'Embedded Video (Customer will provide)', 'Secure admin tools for easy updates', 'Cross Browser Compatibility', 'Lead capture form with auto-email response', 'Google Map embed for location', 'Stock Photos', 'Complete Deployment', 'Dedicated Project Manager', '100% Ownership Rights', '100% Satisfaction Guarantee', '100% Money Back-Guarantee'],
            comparisonFeatures: {
                'Pages': '10-15', 'Design Concepts': '1', 'Mobile Responsive': true, 'On-Page SEO': 'Advanced Local', 'CMS / Admin Panel': true, 'Blog Functionality': true, 'Analytics': 'GA Setup', 'Support Level': 'Priority', 'Post-Launch Support': '30 Days'
            }
          },
          { name: 'Ultimate', price: '€2499', features: ['Unlimited Pages Custom Website', '2 Design Concepts', { feature: 'Online Payment Module Integration (Optional)', tooltip: 'Accept payments directly on your site for services or digital products.' }, { feature: 'CRM integration (HubSpot, Mailchimp)', tooltip: 'Connect your website forms directly to your Customer Relationship Management (CRM) software to streamline lead management.' }, { feature: 'Advanced Forms (Multi-step/Conditional)', tooltip: 'Complex foam that change based on user input, ideal for detailed inquiries or applications.' }, 'Multilingual Setup', '1 Month Maintenance', 'Premium graphics/illustrations/animations', 'Custom lead magnets (PDFs, checklists)', 'Multi-location setup', { feature: 'Blog automation (RSS or YouTube)', tooltip: 'Automatically populate your blog with content from your RSS feeds or YouTube channel.' }, 'VIP Support Access', 'Advanced site analytics dashboard setup', 'Membership Portal', 'Customer Signup Area', 'Multi-language option', 'Advanced local SEO (schema, geo-targeting)', 'Content Management System Integration', 'Dedicated Team of Designers Developers', '30 Days Post-Launch Support', '1 Hour Strategy Call Included', 'Email Auto Responder', 'Appointment Booking System/calendar integration', 'Sliding Promotional Banners', 'Advanced Animations & Scroll Effects', 'Google Analytics setup', 'Live chat integration', 'Social media feed display', 'Newsletter signup with email automation', 'FAQ or resources section', 'Priority Support', 'Website Optimization Package for Speed', 'Advanced Hover Effects', 'Search Engine Submission', 'Mobile Responsive Website', 'Custom visuals & icons', 'Enhanced SEO for key pages', 'Click-to-call & WhatsApp chat functionality', 'Testimonial or case study section', 'Blog with category filters', 'Image gallery or portfolio section', 'Embedded Video (Customer will provide)', 'Secure admin tools for easy updates', 'Cross Browser Compatibility', 'Lead capture form with auto-email response', 'Google Map embed for location', 'Stock Photos', 'Complete Deployment', 'Dedicated Project Manager', '100% Ownership Rights', '100% Satisfaction Guarantee', '100% Money Back-Guarantee'], note: 'Fair Use Policy (FUP) applies: Up to 30 pages are included.',
            comparisonFeatures: {
                'Pages': 'Unlimited (FUP: 30)', 'Design Concepts': '2', 'Mobile Responsive': true, 'On-Page SEO': 'Advanced Local', 'CMS / Admin Panel': true, 'Blog Functionality': true, 'Analytics': 'Advanced Dashboard', 'Support Level': 'VIP Access', 'Post-Launch Support': '1 Month Maintenance'
            }
          },
        ],
      },
      {
        tabName: 'E-commerce',
        plans: [
          { name: 'Store Starter', price: '€349', features: ['Customized design', 'Store with 1-10 products', 'Mobile-friendly product pages', 'Simple cart & checkout', { feature: 'Secure payment setup (Stripe/PayPal)', tooltip: 'Integration of leading payment gateways to ensure your customers can pay securely and easily.' }, 'Basic store styling', 'Social media shop link', 'Complete Deployment', 'Dedicated Project Manager', '100% Ownership Rights', '100% Satisfaction Guarantee', '100% Money Back-Guarantee'],
            comparisonFeatures: {
                'Product Count': '1-10', 'Design Level': 'Customized', 'Payment Gateways': 'Basic (Stripe/PayPal)', 'Store Analytics': false, 'Internationalization': false
            }
          },
          { name: 'Standard Store', price: '€649', isPopular: true, features: ['Up to 30 products', { feature: 'Advanced navigation setup', tooltip: 'Organization of products into collections, categories, and intuitive menus for better user experience.' }, 'Mobile-responsive design', 'Homepage banner/slider design', 'Checkout & payment gateway setup (PayPal, Stripe, cards)', 'Mini shopping cart integration', 'Basic shipping configuration', 'Email order notifications', 'Basic store styling', 'Social media shop link', 'Complete Deployment', 'Dedicated Project Manager', '100% Ownership Rights', '100% Satisfaction Guarantee', '100% Money Back-Guarantee'],
            comparisonFeatures: {
                'Product Count': 'Up to 30', 'Design Level': 'Mobile-Responsive', 'Payment Gateways': 'Standard (Cards)', 'Store Analytics': false, 'Internationalization': false
            }
          },
          { name: 'Advanced Store', price: '€999', features: ['Custom design matching your brand', 'Add up to 75 products', 'Full shopping cart', 'payment integration', { feature: 'Smart product search', tooltip: 'Advanced search bar that predicts and suggests products as customers type.' }, { feature: 'Basic app installations', tooltip: 'Installation of essential e-commerce apps for features like product reviews, live chat, or a customer wishlist.' }, 'Shipping & tax configuration', 'Email order notifications', 'Product reviews integration', 'Store analytics dashboard', { feature: 'Low stock alerts', tooltip: 'Get notified automatically when product inventory drops below a certain level.' }, 'Social media integration', 'Advanced navigation setup (collections, categories, menus)', 'Mobile-responsive design', 'Complete Deployment', 'Dedicated Project Manager', '100% Ownership Rights', '100% Satisfaction Guarantee', '100% Money Back-Guarantee'],
            comparisonFeatures: {
                'Product Count': 'Up to 75', 'Design Level': 'Custom Branded', 'Payment Gateways': 'Standard (Cards)', 'Store Analytics': 'Dashboard', 'Internationalization': false
            }
          },
          { name: 'Professional Store', price: '€1499', features: ['Up to 125 products', { feature: 'Abandoned cart recovery setup', tooltip: 'Automatically send reminder emails to customers who add products to their cart but don\'t complete the purchase, helping you recover lost sales.' }, 'Blog setup for content marketing', 'Product reviews & rating system integration', 'Promotional banners & announcement bars', { feature: 'Upsell & cross-sell functionality', tooltip: 'Suggest related or higher-value products to customers during browsing or checkout to increase order value.' }, 'Discount codes & coupon setup', 'Gift card setup', 'Newsletter popup', 'Advanced product filtering', { feature: 'Product Variants (Size, Color, etc.)', tooltip: 'Support for products that come in multiple options, like different sizes or colors.' }, 'Multi-payment gateways (Stripe, PayPal, Apple Pay, Klarna)', { feature: 'Email marketing integration', tooltip: 'Connect your store to platforms like Klaviyo or Mailchimp to build email lists and run marketing campaigns.' }, 'Performance & sales analytics dashboard', 'Wishlist, reviews, & loyalty system', 'Smart product search', 'Shipping & tax configuration', 'Email order notifications', 'Low stock alerts', 'Social media integration', 'Advanced navigation setup (collections, categories, menus)', 'Mobile-responsive design', 'Complete Deployment', 'Dedicated Project Manager', '100% Ownership Rights', '100% Satisfaction Guarantee', '100% Money-Back Guarantee'],
            comparisonFeatures: {
                'Product Count': 'Up to 125', 'Design Level': 'Brand-Focused', 'Payment Gateways': 'Multi-Gateway', 'Store Analytics': 'Performance & Sales', 'Internationalization': false
            }
          },
          { name: 'Business Store', price: '€2499', features: ['Up to 500 products', 'Conversion-Focused Design', { feature: 'Customer Login Area', tooltip: 'Allow customers to create accounts, view order history, and manage their details.' }, { feature: 'Multi-currency support', tooltip: 'Display prices in different currencies based on the customer\'s location.' }, 'Multiple Shipping Module Integration', { feature: 'Advanced shipping rules', tooltip: 'Set complex shipping rates based on weight, location, or cart value (e.g., free shipping over €50).' }, 'Inventory management system setup', { feature: 'Loyalty program / reward points', tooltip: 'Encourage repeat business by rewarding customers with points for purchases.' }, 'Custom Shopping Cart Integration', { feature: 'CMS / Backend Administrative System', tooltip: 'A powerful and secure backend system that gives you full control over your products, orders, customers, and store settings.' }, 'Store speed & performance optimization', 'Free unlimited revisions', 'Abandoned cart recovery setup', 'Blog setup for content marketing', 'Product reviews & rating system integration', 'Promotional banners & announcement bars', 'Upsell & cross-sell functionality', 'Discount codes & coupon setup', 'Gift card setup', 'Newsletter popup', 'Advanced product filtering', 'Product Variants (Size, Color, etc.)', 'Multi-payment gateways (Stripe, PayPal, Apple Pay, Klarna)', 'Email marketing integration (Klaviyo, Mailchimp, etc.)', 'Performance & sales analytics dashboard', 'Wishlist, reviews, & loyalty system', 'Smart product search', 'Tax configuration', 'Email order notifications', 'Low stock alerts', 'Social media integration', 'Advanced navigation setup (collections, categories, menus)', 'Mobile-responsive design', 'Complete Deployment', 'Dedicated Project Manager', '100% Ownership Rights', '100% Satisfaction Guarantee', '100% Money-Back Guarantee'],
            comparisonFeatures: {
                'Product Count': 'Up to 500', 'Design Level': 'Conversion-Focused', 'Payment Gateways': 'Multi-Gateway', 'Store Analytics': 'Performance & Sales', 'Internationalization': 'Multi-Currency'
            }
          },
          { name: 'Enterprise Store', price: '€4999', features: ['Unlimited Products', 'High-end interactive custom design', 'unique logo concepts', 'Unlimited categories & advanced product filters', { feature: 'Wholesale / B2B functionality', tooltip: 'Enable special pricing and ordering options for your wholesale or business-to-business customers.' }, { feature: 'ERP & CRM integrations', tooltip: 'Seamlessly connect your e-commerce store with your existing enterprise resource planning (ERP) or customer relationship management (CRM) systems.' }, { feature: 'Digital Downloads or Subscriptions', tooltip: 'Sell digital files or set up recurring payments for subscription boxes or services.' }, 'Invoicing System', { feature: 'POS & Inventory Sync', tooltip: 'Sync your online store with your physical Point of Sale system to manage inventory in real-time.' }, 'Multi-currency & multi-language support', { feature: 'Affiliate & referral programs', tooltip: 'Let other people market your products for a commission, tracking sales automatically.' }, 'Advanced analytics & reporting dashboard setup', 'Admin panel for complete store control', 'Social media page linking & live feed integration', 'SEO-optimized & mobile responsive', 'Full deployment + W3C validation', 'Priority support & 30-day post-launch assistance', { feature: 'Google Analytics & Facebook Pixel integration', tooltip: 'Advanced tracking setup for in-depth analysis of user behavior and for running effective retargeting ad campaigns.' }, 'Complete Database Creation', 'Custom Dynamic Forms', 'Customer Login Area (Sign-Up & Sign-In)', 'Multiple Shipping Module Integration', 'Advanced shipping rules (zones, weight, custom rates)', 'Loyalty program / reward points integration', 'Custom Shopping Cart Integration', 'Store speed & performance optimization', 'Free unlimited revisions', 'abandoned cart recovery setup', 'Blog setup for content marketing', 'Product reviews & rating system integration', 'Promotional banners & announcement bars', 'Upsell & cross-sell functionality', 'Discount codes & coupon setup', 'Gift card setup', 'Newsletter popup', 'Advanced product filtering', 'Product Variants (Size, Color, etc.)', 'Multi-payment gateways (Stripe, PayPal, Apple Pay, Klarna)', 'Email marketing integration (Klaviyo, Mailchimp, etc.)', 'Performance & sales analytics dashboard', 'Wishlist, reviews, & loyalty system', 'Smart product search', 'Tax configuration', 'Email order notifications', 'Low stock alerts', 'Social media integration', 'Advanced navigation setup (collections, categories, menus)', 'Mobile-responsive design', 'Complete Deployment', 'Dedicated Project Manager', '100% Ownership Rights', '100% Satisfaction Guarantee', '100% Money-Back Guarantee'], note: 'Fair Use Policy (FUP) applies: Up to 1000 products are included.',
            comparisonFeatures: {
                'Product Count': 'Unlimited (FUP: 1000)', 'Design Level': 'High-End Interactive', 'Payment Gateways': 'Global Payments', 'Store Analytics': 'Advanced Reporting', 'Internationalization': 'Multi-Currency & Language'
            }
          },
        ],
      },
    ],
    faqs: [
      {
        question: 'How much does an informative website cost?',
        answer: 'Informative website packages start from €199 for a single-page site. A 4 to 5 page site starts from €449, a 6 to 8 page site from €749, and a 8 to 10 page site with booking and analytics from €1,299. Larger sites with membership areas and CMS start from €1,899, and fully custom builds with unlimited pages start from €2,499. Every package includes full deployment and a dedicated project manager.'
      },
      {
        question: 'How much does an e-commerce website cost?',
        answer: 'E-commerce stores start from €349 for a store with up to 10 products. A store with up to 30 products starts from €649, and a store with up to 75 products with smart search and product reviews starts from €999. Larger stores with up to 125 products, abandoned cart recovery and loyalty systems start from €1,499. Stores with up to 500 products and full CMS start from €2,499, and enterprise stores with unlimited products start from €4,999.'
      },
      {
        question: 'What is the difference between an informative and an e-commerce website?',
        answer: 'An informative website tells visitors who you are, what you do, and how to reach you. It works like a digital brochure. An e-commerce website does all of that but also lets visitors browse products, add items to a cart, and pay online. If you want to sell products directly from your site, you need an e-commerce build.'
      },
      {
        question: 'How long does it take to build a website?',
        answer: 'A basic informative website typically takes 1 to 2 weeks. A multi-page site with custom features takes 2 to 4 weeks. E-commerce stores generally take 3 to 6 weeks depending on the number of products and the level of customisation. We give you a clear timeline after the initial call so you know exactly when to expect the finished site.'
      },
      {
        question: 'Will my website work on mobile and tablet?',
        answer: 'Yes. Every website we build is fully responsive, meaning it adapts automatically to any screen size from a desktop monitor down to a smartphone. We test across devices and browsers before handing over the finished site.'
      },
      {
        question: 'Can I update the website content myself after launch?',
        answer: 'Yes, for Standard packages and above we integrate a Content Management System so you can update text, swap out images, and add blog posts without touching any code. If you are on a Beginner or Budget package and want a CMS, we can add one as an upgrade.'
      },
      {
        question: 'Which e-commerce platform do you build on?',
        answer: 'We primarily build on Shopify and WooCommerce. The right choice depends on your business needs. Shopify is easier to manage and suits most product-based businesses. WooCommerce gives more flexibility if you need custom logic or are already on WordPress. We recommend the best fit during the discovery call.'
      },
      {
        question: 'Do you set up payment gateways?',
        answer: 'Yes. We handle the full setup of payment gateways including Stripe, PayPal, Apple Pay, and Klarna. All payments are processed securely and go directly to your account. We configure tax and shipping rules at the same time.'
      },
      {
        question: 'Do you provide support after the site goes live?',
        answer: 'Yes. Some of our higher-tier packages include 30 days of post-launch support at no extra charge. We also offer ongoing maintenance packages to keep your site secure, updated, and running at full speed. Ask us about this on the discovery call.'
      },
      {
        question: 'Do I need to provide my own content and images?',
        answer: 'Not necessarily. If you have existing copy and photos we are happy to use them. If not, our higher-tier packages include stock photos and we offer professional copywriting as an add-on. Let us know on the call and we will factor it into your quote.'
      },
      {
        question: 'Will my website rank on Google?',
        answer: 'All our websites are built with clean code, fast loading times, and on-page SEO foundations in place. Budget and Standard packages include basic on-page SEO. Higher packages include enhanced SEO across all key pages, schema markup, and Google Analytics setup. For an ongoing SEO campaign on top of this, take a look at our SEO packages.',
        link: { text: 'Explore our SEO packages', href: '/services/search-engine-marketing-sem?tab=seo-services' }
      },
      {
        question: 'How do I get started?',
        answer: 'The easiest way is to book a free discovery call. We will talk through what you need, ask about your goals and timeline, and recommend the right package. There is no hard sell and no commitment. If you are ready to proceed, we send a proposal and get started within a few days.',
        link: { text: 'Book a free discovery call', href: '/contact' }
      }
    ]
  },
  {
    id: 'search-engine-marketing-sem',
    title: 'Search Engine Marketing (SEM)',
    description: 'Master the search landscape through a combined force of organic dominance and instant visibility. Our SEM solutions are engineered to capture high-intent traffic and maximize your digital ROI.',
    tabs: [
      {
        tabName: 'SEO Services',
        plans: [
            { name: 'Startup', price: '€299', priceDetails: '/month', features: [
                { feature: 'Site Audit', tooltip: 'A comprehensive health check of your website to identify technical issues hindering your search performance.' },
                '5-10 Targeted Keywords',
                { feature: 'Competitor Analysis', tooltip: 'We analyze your top competitors to understand their strengths and find opportunities for you to outperform them.' },
                { feature: 'Keyword Grouping', tooltip: 'Organizing your target keywords into logical groups to create focused and relevant content clusters.' },
                { feature: 'Keyword Mapping', tooltip: 'Assigning specific keywords to specific pages on your site to prevent pages from competing with each other.' },
                { feature: 'XML Sitemap Optimization', tooltip: 'Creating and optimizing a map of your website to help search engines find and crawl your pages efficiently.' },
                { feature: 'Robots.txt Optimization', tooltip: 'Ensuring this file correctly instructs search engine bots on which pages to crawl and which to ignore.' },
                { feature: 'Meta Tags Creation', tooltip: 'Writing compelling Title Tags and Meta Descriptions that appear in search results to improve click-through rates.' },
                'Core Content Optimization',
                'LSI Keyword Optimization',
                { feature: 'Anchor Text Strategy', tooltip: 'Optimizing the clickable text in hyperlinks to help search engines understand what the linked page is about.' },
                { feature: 'Google Analytics Setup', tooltip: 'Setting up Google\'s tool to track website traffic and user behavior.' },
                { feature: 'Search Console Setup', tooltip: 'Setting up Google Search Console to monitor your site\'s presence in Google Search results.' },
                'Article Writing (2 x 400 words)',
                'Blog Post Creation (2 x 500 words)',
                { feature: 'Directory Submissions', tooltip: 'Submitting your website URL to various web directories to build authority.' },
                'Monthly Performance Report',
                'Dedicated Account Manager'
            ],
                comparisonFeatures: {
                    'Strategy & Audits': 'Site Audit', 'Keywords': '5-10', 'Competitor Analysis': true, 'On-Page SEO': 'Standard', 'Technical SEO': 'Standard', 'Analytics & GMB': 'GA + GSC Install', 'Content: Copywriting': '1000 words', 'Reporting': 'Monthly', 'Support': 'Dedicated PM'
                }
            },
            { name: 'Standard', price: '€499', priceDetails: '/month', isPopular: true, features: [
                'Includes Everything in Startup +',
                '20-25 Targeted Keywords',
                { feature: 'Schema Markup Setup', tooltip: 'Adding structured data to help Google show rich snippets like reviews or prices.' },
                { feature: 'GMB Management', tooltip: 'Optimizing your Google My Business profile for maximum local search visibility.' },
                { feature: 'Internal Link Siloing', tooltip: 'Structuring your internal links to flow authority to your most important pages.' },
                { feature: 'Image Compression & Alt Tags', tooltip: 'Optimizing visuals for speed and search engine reading.' },
                { feature: 'Conversion Goal Tracking', tooltip: 'Setting up digital milestones to measure exactly where your leads come from.' },
                'Webpage Copywriting (2000 Words)',
                'Articles (4 x 400 Words)',
                'Blogs (4 x 500 Words)',
                { feature: 'Press Release Syndication', tooltip: 'Distributing news about your brand to high-authority news outlets for authority links.' },
                'Infographic Design (1/month)',
                'Local Business Listings',
                'Map Citation Building',
                'Monthly Growth Deep-Dive',
                'Direct Slack Access'
            ],
                comparisonFeatures: {
                    'Strategy & Audits': 'Site Audit', 'Keywords': '20-25', 'Competitor Analysis': true, 'On-Page SEO': 'Advanced', 'Technical SEO': 'Standard', 'Analytics & GMB': 'GA + GSC + GMB', 'Content: Copywriting': '2000 words', 'Reporting': 'Monthly', 'Support': 'Dedicated PM'
                }
            },
            { name: 'Advanced', price: '€999', priceDetails: '/month', features: [
                'Includes Everything in Standard +',
                '40-60 Targeted Keywords',
                { feature: 'Competitor Gap Analysis', tooltip: 'Identifying exactly what keywords your competitors rank for that you don\'t.' },
                { feature: 'Core Web Vitals Fixes', tooltip: 'Advanced technical optimizations for speed, stability, and mobile responsiveness.' },
                { feature: 'Heatmap Integration', tooltip: 'Visualizing user clicks to improve conversion rate optimization (CRO).' },
                { feature: 'High-DA Guest Posts (2/mo)', tooltip: 'Securing placements on top-tier industry blogs to boost domain authority.' },
                'Video SEO Optimization',
                'Content Calendar Strategy',
                { feature: 'Broken Link Building', tooltip: 'Recovering lost link equity from broken URLs across the web.' },
                'Detailed ROI Analysis',
                'Quarterly Strategy Roadmap',
                'Senior SEO Specialist assigned'
            ],
                comparisonFeatures: {
                    'Strategy & Audits': 'Comprehensive', 'Keywords': '40-60 (clustered)', 'Competitor Analysis': 'Gap Analysis', 'On-Page SEO': 'Full Suite', 'Technical SEO': 'Advanced (Schema, Speed)', 'Analytics & GMB': 'GTM Tracking', 'Content: Copywriting': '3000 words', 'Reporting': 'Performance Insights', 'Support': 'Senior Specialist'
                }
            },
            { name: 'Enterprise', price: '€1999', priceDetails: '/month', features: [
                'Includes Everything in Advanced +',
                '100-300 Keyword Clusters',
                { feature: 'Market Share Monitoring', tooltip: 'Real-time tracking of your search dominance compared to major competitors.' },
                { feature: 'Multilingual SEO Strategy', tooltip: 'Optimizing your presence for international markets and languages.' },
                { feature: 'Voice Search Optimization', tooltip: 'Ensuring your content answers conversational queries from Alexa, Siri, and Google Assistant.' },
                { feature: 'Digital PR Outreach', tooltip: 'High-level media outreach to gain massive authority links from top publications.' },
                'Whitepaper/eBook Lead Magnet',
                'Reputation Management Audit',
                'Custom API Reporting Dashboards',
                'Dedicated 24/7 Support Team',
                'Bi-Weekly VIP Strategy Syncs'
            ],
                comparisonFeatures: {
                    'Strategy & Audits': 'Enterprise Level', 'Keywords': '100-300 (clusters)', 'Competitor Analysis': 'Intelligence & Market Share', 'On-Page SEO': 'CRO Focused', 'Technical SEO': 'Enterprise (Voice, Multilingual)', 'Analytics & GMB': 'GA4 Custom Dashboards', 'Content: Copywriting': '10,000 words', 'Reporting': 'Real-Time Dashboard', 'Support': 'Dedicated 24/7 Team'
                }
            },
        ]
      },
      {
        tabName: 'PPC Management',
        plans: [
            { name: 'Starter Spark', price: '€549', priceDetails: '/month', features: [
                { feature: 'Account Infrastructure Setup', tooltip: 'Building the foundational settings, billing, and access levels for your ad accounts.' },
                { feature: 'Search Platform Forensic Audit', tooltip: 'A full forensic review of your existing accounts or market landscape to find hidden opportunities.' },
                { feature: 'Intent-Based Keyword Discovery', tooltip: 'Finding keywords that signal a user is ready to buy right now, not just browse.' },
                { feature: 'High-Intent Search Term Mapping', tooltip: 'Connecting your ads to the specific terms users search when they are ready to purchase.' },
                { feature: 'Negative Keyword Library Construction', tooltip: 'Creating a massive list of terms we DON\'T want to show for, saving you wasted budget from day one.' },
                { feature: 'Ad Copywriting (3 headline variants)', tooltip: 'Writing multiple versions of your ads to see which headline gets the most clicks and conversions.' },
                { feature: 'Basic Conversion Pixel Setup', tooltip: 'Installing tracking code on your site to see when a click turns into a sale.' },
                { feature: 'Manual Bid Monitoring', tooltip: 'Manually adjusting how much you pay for clicks to stay competitive at the lowest possible cost.' },
                { feature: 'Monthly Data Visualization Report', tooltip: 'A visual report that breaks down your spend, clicks, and results in plain English.' },
                { feature: 'Monthly Strategic Progress Review', tooltip: 'A monthly meeting to discuss results and plan the next month\'s strategy.' },
                { feature: 'Dedicated Account Success Manager', tooltip: 'Your primary point of contact for all things related to your PPC campaigns.' }
            ],
                comparisonFeatures: {
                    'Platforms': '1 Platform', 'Campaign Count': 'Up to 2', 'Remarketing': false, 'A/B Testing': false, 'Reporting': 'Monthly', 'Monitoring': 'Daily', 'Tracking': 'Basic Pixel', 'Competitor Intelligence': 'Basic', 'Support': 'Account Manager'
                }
            },
            { name: 'Growth Engine', price: '€999', priceDetails: '/month', isPopular: true, features: [
                'Everything in Starter Spark +',
                { feature: 'Dual-Platform Management (e.g. Google + Meta)', tooltip: 'Managing ads on two major platforms simultaneously to catch users across their entire day.' },
                { feature: 'Dynamic Remarketing & Retargeting Setup', tooltip: 'Showing specific ads to users who visited your site but didn\'t buy, following them across the web.' },
                { feature: 'Competitor Ad Intel & Spy Monitoring', tooltip: 'Using professional tools to see exactly what ads your competitors are running and how much they are spending.' },
                { feature: 'A/B Split Testing for Ad Creatives', tooltip: 'Running two different ads against each other to scientifically prove which one makes more money.' },
                { feature: 'Audience Segment Personalization', tooltip: 'Segmenting your target audience by age, location, and interests for hyper-relevant ads.' },
                { feature: 'Ad Extension Optimization (Call, Location)', tooltip: 'Adding phone numbers, locations, and extra links to your ads to take up more space and increase CTR.' },
                { feature: 'Weekly Budget Pacing & Adjustment', tooltip: 'Ensuring your monthly budget is spent evenly and efficiently across all days without overspending.' },
                { feature: 'Advanced GTM Event Tracking', tooltip: 'Using Google Tag Manager to track complex actions like button clicks, scroll depth, or video views.' },
                { feature: 'Bi-Weekly Performance Sync Calls', tooltip: 'Regular calls every two weeks to keep you updated on progress, trends, and upcoming opportunities.' },
                { feature: 'ROI & Lead Attribution Analysis', tooltip: 'Deep analysis showing exactly which ad resulted in which customer call or sale, ensuring you know your ROI.' },
                { feature: 'Intent-Based Keyword Discovery', tooltip: 'Finding keywords that signal a user is ready to buy right now, not just browse.' },
                { feature: 'High-Intent Search Term Mapping', tooltip: 'Connecting your ads to the specific terms users search when they are ready to purchase.' },
                { feature: 'Negative Keyword Library Construction', tooltip: 'Creating a massive list of terms we DON\'T want to show for, saving you wasted budget from day one.' },
                { feature: 'Bid Management', tooltip: 'Adjusting how much you pay for clicks to stay competitive at the lowest possible cost.' },
                { feature: 'Account Infrastructure Setup', tooltip: 'Building the foundational settings, billing, and access levels for your ad accounts.' }
            ],
                comparisonFeatures: {
                    'Platforms': '2 Platforms', 'Campaign Count': 'Up to 5', 'Remarketing': true, 'A/B Testing': 'Standard', 'Reporting': 'Bi-weekly', 'Monitoring': 'Daily', 'Tracking': 'GTM Advanced', 'Competitor Intelligence': 'Full Monitoring', 'Support': 'Strategy Team'
                }
            },
            { name: 'Market Dominator', price: '€1899', priceDetails: '/month', features: [
                'Everything in Growth Engine +',
                { feature: 'Full-Funnel Search Marketing Strategy', tooltip: 'A total SEM strategy covering awareness, consideration, and conversion stages to own the entire user journey.' },
                { feature: 'Unlimited Campaign & Ad Group Architecture', tooltip: 'Building as many campaigns and ad groups as needed for maximum market coverage without limitations.' },
                { feature: 'Landing Page Conversion Audit & Heatmaps', tooltip: 'Using visual heatmaps to see where users get stuck on your landing page and fixing it to boost sales.' },
                { feature: 'Video Ad Management (YouTube/TikTok)', tooltip: 'Managing your YouTube, TikTok, or Instagram video ad placements for high-impact visual reach.' },
                { feature: 'Smart Bidding & AI Optimization', tooltip: 'Leveraging Google\'s machine learning to automatically bid for users most likely to convert in real-time.' },
                { feature: 'Cross-Device Attribution Modeling', tooltip: 'Tracking users who click an ad on mobile but finish the purchase later on their desktop.' },
                { feature: 'Market Share & Impression Share Analysis', tooltip: 'Analyzing how much of the total available market search volume you are currently capturing.' },
                { feature: 'Priority Creative Asset Design Advice', tooltip: 'Expert guidance and wireframes for what images or videos will perform best for your specific audience.' },
                { feature: 'Weekly Performance Deep-Dive Meetings', tooltip: 'High-level analytical meetings every week to squeeze every drop of ROI from your ad spend.' },
                { feature: 'Direct Messaging Support Access', tooltip: 'Direct access to your lead strategist via Slack or WhatsApp for instant answers and quick pivots.' },
                { feature: 'Dual-Platform Management', tooltip: 'Managing ads on two major platforms simultaneously to catch users across their entire day.' },
                { feature: 'Remarketing & Retargeting Setup', tooltip: 'Showing specific ads to users who visited your site but didn\'t buy.' },
                { feature: 'Competitor Ad Intel', tooltip: 'Using professional tools to see exactly what ads your competitors are running.' },
                { feature: 'A/B Split Testing', tooltip: 'Running two different ads against each other to scientifically prove which one makes more money.' },
                { feature: 'Advanced GTM Event Tracking', tooltip: 'Using Google Tag Manager to track complex actions like button clicks.' }
            ],
                comparisonFeatures: {
                    'Platforms': '3+ Platforms', 'Campaign Count': 'Unlimited', 'Remarketing': 'Omni-channel', 'A/B Testing': 'Continuous', 'Reporting': 'Weekly Deep-Dive', 'Monitoring': 'Real-time', 'Tracking': 'Heatmap Integration', 'Competitor Intelligence': 'Takeover Strategy', 'Support': 'Direct Messaging'
                }
            },
            { name: 'Enterprise Elite', price: '€3499', priceDetails: '/month', features: [
                'Everything in Market Dominator +',
                { feature: 'Full Global Multi-Language Targeting', tooltip: 'Running coordinated ad campaigns across multiple countries and in local languages for global reach.' },
                { feature: 'Omni-Channel Search Dominance (SEO+PPC)', tooltip: 'Coordinating SEO and PPC teams to take up almost the entire first page of Google for your key terms.' },
                { feature: 'CRM Data Integration (HubSpot/Salesforce)', tooltip: 'Connecting your ad accounts directly to your CRM to see exactly which ad led to a signed contract.' },
                { feature: 'Predictive Lead Scoring Analytics', tooltip: 'Using past data to identify which ad audiences provide the highest quality leads over the long term.' },
                { feature: 'Dedicated Team of Analysts & Specialists', tooltip: 'A full squad of PPC specialists, data analysts, and copywriters dedicated solely to your account.' },
                { feature: 'Custom Real-Time Performance Dashboard', tooltip: 'A bespoke live dashboard showing your business KPIs (Sales, ROAS, CPA) in real-time, 24/7.' },
                { feature: 'Quarterly Strategic Growth Roadmap', tooltip: 'A long-term strategic plan updated every three months to ensure sustainable, aggressive scale.' },
                { feature: 'Aggressive Competitor Takeover Strategies', tooltip: 'Advanced bidding strategies designed to specifically target and steal market share from your top rivals.' },
                { feature: 'VIP Priority Support (Slack/WhatsApp)', tooltip: 'Immediate response times and access to our highest-level executive team whenever you need us.' },
                { feature: 'Enterprise-Scale Budget Management', tooltip: 'Managing massive ad budgets (50k+/mo) with extreme precision, fraud protection, and ROI optimization.' },
                { feature: 'Full-Funnel SEM Strategy', tooltip: 'A total SEM strategy covering awareness, consideration, and conversion stages.' },
                { feature: 'Unlimited Campaign Architecture', tooltip: 'Building as many campaigns and ad groups as needed.' },
                { feature: 'Heatmap Audit', tooltip: 'Using visual heatmaps to see where users get stuck on your landing page.' },
                { feature: 'Video Ad Management', tooltip: 'Managing your YouTube, TikTok, or Instagram video ad placements.' },
                { feature: 'Smart Bidding', tooltip: 'Leveraging Google\'s machine learning to automatically bid for users.' }
            ],
                comparisonFeatures: {
                    'Platforms': 'Unlimited', 'Campaign Count': 'Unlimited', 'Remarketing': 'Global Dynamic', 'A/B Testing': 'AI Driven', 'Reporting': 'Custom Dashboard', 'Monitoring': '24/7 Team', 'Tracking': 'CRM Data Sync', 'Competitor Intelligence': 'Market Dominance', 'Support': 'VIP Slack Channel'
                }
            },
        ]
      }
    ],
    faqs: [
      {
        question: 'How much does SEO cost per month?',
        answer: 'SEO packages start from €299 per month for a local or startup campaign targeting 5 to 10 keywords. A standard growth plan with 20 to 25 keywords, content, and link building starts from €499 per month. Competitive campaigns targeting 40 to 60 keywords with guest posting and heatmap analysis start from €999 per month. For national or multi-region campaigns with 100 to 300 keyword clusters, enterprise plans start from €1,999 per month.'
      },
      {
        question: 'How long before I see results from SEO?',
        answer: 'SEO is a long-term investment. Most clients see early movement in rankings within the first 2 to 3 months. Meaningful traffic and lead growth typically comes between months 4 and 6. Stable, compounding results that you can rely on usually take 6 to 12 months. The timeline depends on your site\'s current health, your niche competition, and how consistently the work is done.'
      },
      {
        question: 'What is included in an SEO package?',
        answer: 'All SEO packages include a site audit, keyword research and mapping, meta tag optimisation, XML sitemap and robots.txt setup, Google Analytics and Search Console configuration, content creation, and a monthly performance report. Higher tiers add schema markup, Google Business Profile management, Core Web Vitals fixes, high-authority guest posts, heatmap integration, and quarterly strategy roadmaps.'
      },
      {
        question: 'Do you guarantee a number 1 ranking on Google?',
        answer: 'No reputable agency can guarantee a specific ranking position because Google\'s algorithm is proprietary and changes constantly. What we can guarantee is that we follow Google\'s best practice guidelines, do the work consistently, and report transparently on progress. Any agency that promises a guaranteed position is making a promise they cannot keep.'
      },
      {
        question: 'Is SEO still worth it now that AI is changing search?',
        answer: 'More than ever. AI search tools like Google AI Overviews, ChatGPT and Perplexity still pull answers from authoritative, well-structured websites. Getting your site to rank well in traditional search also increases the likelihood of being cited as a source in AI-generated answers. The fundamentals of quality content, strong technical SEO and authoritative backlinks have not changed.'
      },
      {
        question: 'What is local SEO and do I need it?',
        answer: 'Local SEO is the process of getting your business to appear in Google Maps results and the local search pack when people nearby search for your services. It involves optimising your Google Business Profile, building local citations in directories, and creating content that targets location-specific searches. If your business serves a specific city or region, local SEO typically delivers faster results than national campaigns.',
        link: { text: 'See our Dublin local SEO services', href: '/digital-agency-dublin' }
      },
      {
        question: 'How much does PPC management cost?',
        answer: 'PPC management packages start from €549 per month for a Starter Spark campaign covering up to 2 ad campaigns on Google Ads or Meta. A Growth Engine plan with multi-platform management and advanced optimisation starts from €999 per month. Larger market dominator campaigns start from €1,899 per month, and enterprise-level management with dedicated teams starts from €3,499 per month. The management fee is always separate from your ad spend budget.'
      },
      {
        question: 'What is the difference between the management fee and ad spend?',
        answer: 'The management fee is what you pay Designing Dose to build, run, and optimise your campaigns. Ad spend is the budget that goes directly to Google or Meta to show your ads to potential customers. These are always two separate costs. We are transparent about this from day one and will recommend a realistic ad spend budget based on your goals and market.'
      },
      {
        question: 'Which platforms do you run ads on?',
        answer: 'We manage campaigns on Google Ads, Meta (Facebook and Instagram), LinkedIn, TikTok, and Bing. The right platforms depend on where your customers spend their time. B2C businesses often do well on Meta and Google. B2B businesses typically get stronger results on LinkedIn and Google. We recommend the right mix on the discovery call.'
      },
      {
        question: 'How do you measure whether ads are actually profitable?',
        answer: 'We focus on what we call profit-driven metrics: Cost Per Acquisition (CPA), Return on Ad Spend (ROAS), and total conversions. We set up proper conversion tracking from the start so every sale, lead or form submission is attributed to the right ad. You always know exactly what your budget is generating.'
      },
      {
        question: 'What is negative keyword mapping and why does it matter?',
        answer: 'Negative keywords tell Google not to show your ads for irrelevant searches. For example, if you sell premium accounting software, you would add "free" and "cheap" as negative keywords so you are not paying for clicks from people who will never convert. Without this, a significant portion of your ad budget gets wasted on the wrong audience. We build a negative keyword list from day one of every campaign.'
      },
      {
        question: 'Can I run SEO and PPC at the same time?',
        answer: 'Yes, and we recommend it. PPC gets you in front of customers immediately while SEO builds long-term organic authority. Running both gives you full coverage of the search results page, which increases trust and often lowers your cost per acquisition because users see your brand in multiple places before clicking. We can build a combined strategy if that fits your budget.',
        link: { text: 'See our PPC management packages', href: '/services/search-engine-marketing-sem?tab=ppc-management' }
      },
      {
        question: 'Will you audit my existing ad account before starting?',
        answer: 'Yes. Every new PPC engagement starts with a full account audit. We look for wasted spend, tracking gaps, poorly structured campaigns, and ads that are already performing well. This gives us a clear baseline to build from instead of starting blind.'
      },
      {
        question: 'How often will I receive reports?',
        answer: 'All SEO clients receive a monthly performance report. Standard SEO clients and above also get access to direct communication with their account manager. Enterprise clients get bi-weekly strategy calls and a real-time custom analytics dashboard. For PPC, reporting frequency matches your package, ranging from monthly summaries to daily monitoring with direct Slack access.'
      },
      {
        question: 'How do I know which package is right for me?',
        answer: 'The best way to figure this out is on a free discovery call. We look at your industry competition, your current site health, your target keywords, and your growth goals before recommending anything. We will be straight with you about what it will take and what a realistic timeline looks like. No pressure, no upselling you into something you do not need.',
        link: { text: 'Book a free discovery call', href: '/contact' }
      }
    ]
  },
  {
    id: 'social-media',
    title: 'Social Media Marketing',
    description: 'Engage your audience and build a strong brand presence across social platforms. From content creation to ad management, we have you covered.',
    plans: [
        { name: 'Starter', price: '€399', priceDetails: '/month', features: [
            { feature: 'Social Media Audit', tooltip: 'Reviewing your current social media presence to identify strengths, weaknesses, and opportunities.' },
            'Basic Recommendations',
            '08 Posts Per Month (static graphics)',
            '02 Stories / Highlights',
            { feature: '02 Carousel Posts', tooltip: 'Posts containing multiple swipeable images or videos, great for storytelling.' },
            'Facebook & Instagram Supported',
            'Monthly Post Scheduling',
            'Page Setup (Profile Picture, Bio, Cover Photo)',
            { feature: 'Hashtag Research', tooltip: 'Finding the best hashtags to use to increase the reach and discoverability of your posts.' },
            'Monthly Monitoring of Social Assets',
            'Monthly Progress Report',
            'Dedicated Project Manager'
        ],
            comparisonFeatures: {
                'Strategy & Audit': 'Audit + Recommendations', 'Supported Platforms': 'Facebook & Instagram', 'Monthly Posts': '8 (Static)', 'Stories / Highlights': '2', 'Carousel Posts': '2', 'Scheduling': 'Monthly', 'Hashtag Research': true, 'Asset Monitoring': 'Monthly', 'Reporting': 'Monthly', 'Support': 'Dedicated PM'
            }
        },
        { name: 'Basic', price: '€549', priceDetails: '/month', features: [
            'Social Media Strategy',
            'Social Media Audit',
            'Social Recommendations',
            '12 Posts Per Month',
            '5 Graphic Social Posts',
            '03 Stories / Highlights',
            '02 Carousel Posts',
            'Facebook & Instagram Supported',
            'Monthly Social Posts Scheduling',
            'Social Pages Cosmetics (Cover Photo, About Section, Display Picture and more)',
            { feature: 'Community Management (Comments + DMs)', tooltip: 'We actively respond to comments and direct messages on your behalf to engage your audience.' },
            { feature: 'Facebook Business Manager Setup', tooltip: 'Setting up the central hub for managing your Facebook assets, ads, and pages.' },
            { feature: 'Basic Pixel Integration', tooltip: 'Adding tracking code to your website to measure the effectiveness of your Facebook ads.' },
            'Weekly Monitoring of Social Assets',
            'Weekly Monitoring of Boosted Posts',
            'Dedicated Project Manager',
            'Monthly Progress Report'
        ],
            comparisonFeatures: {
                'Strategy & Audit': 'Full Strategy & Audit', 'Supported Platforms': 'Facebook & Instagram', 'Monthly Posts': '12 (5 Graphic)', 'Stories / Highlights': '3', 'Carousel Posts': '2', 'Scheduling': 'Monthly', 'Community Management': true, 'Ads Management': 'Boosted Posts', 'FB Business Manager & Pixel': 'Basic Setup', 'Hashtag Research': true, 'Asset Monitoring': 'Weekly', 'Reporting': 'Monthly', 'Support': 'Dedicated PM'
            }
        },
        { name: 'Standard', price: '€999', priceDetails: '/month', isPopular: true, features: [
            'Social Media Strategy',
            'Social Media Audit',
            'Competitor Research',
            'Social Recommendations',
            '24 Posts Per Month',
            '10 Graphic Social Posts',
            '05 Stories / Highlights',
            '03 Carousel Posts',
            '01 GIF Post',
            'Facebook, Instagram, LinkedIn Supported',
            'Monthly Social Posts Scheduling',
            'Social Community Management (Query + Comment Responses)',
            'Social Pages Cosmetics (Cover Photo, About Section, Display Picture and more)',
            'Facebook Business Manager Setup',
            'Facebook Pixel Integration',
            'Daily Monitoring of Social Assets',
            'Daily Monitoring of Boosted Posts',
            { feature: 'Reputation Management (Reviews, Q/A)', tooltip: 'Monitoring and addressing public reviews and questions to maintain a positive brand image.' },
            'Facebook Shop Setup',
            'Target Page Likes & Followers',
            'Spam monitoring',
            'Social Ads Management',
            'Campaigns Across All Platforms',
            { feature: 'Up to 3 Campaigns Per Month', tooltip: 'Running three distinct advertising initiatives, e.g., one for awareness, one for traffic, one for sales.' },
            { feature: '6 Ad Sets Per Month', tooltip: 'Variations within campaigns targeting different audiences or using different placements.' },
            { feature: 'All Ad Objectives Supported', tooltip: 'We can optimize for clicks, video views, leads, messages, or conversions.' },
            'Campaign Monitoring + Optimization',
            { feature: 'Ad Spend (Budget Required)', tooltip: 'The money paid directly to social platforms for ads is separate from our management fee.' },
            'Dedicated Ads Expert',
            'Value-added services',
            'Dedicated Project Manager',
            'Monthly Progress Report'
        ],
            comparisonFeatures: {
                'Strategy & Audit': 'Full Strategy & Audit', 'Supported Platforms': 'FB, IG, LinkedIn', 'Monthly Posts': '24 (10 Graphic)', 'Stories / Highlights': '5', 'Carousel Posts': '3', 'GIF Posts': '1', 'Scheduling': 'Bi-weekly', 'Community Management': 'Full', 'Ads Management': '3 Campaigns / 6 Ad Sets', 'FB Business Manager & Pixel': 'Full Integration', 'Asset Monitoring': 'Daily', 'Reporting': 'Monthly', 'Support': 'Dedicated Ads Expert'
            }
        },
        { name: 'Professional', price: '€1999', priceDetails: '/month', features: [
            'Social Media Strategy',
            'Social Media Audit',
            'Competitor Research',
            'Social Recommendations',
            '36 Posts Per Month',
            '20 Graphic Social Posts',
            '10 Stories / Highlights',
            '07 Carousel Posts',
            '03 GIFS Post',
            '02 Articles / SEO Blog Posts',
            'Facebook, Instagram, LinkedIn, Twitter, Pinterest Supported',
            'Monthly Social Posts Scheduling',
            'Social Community Management (Query + Comment Responses)',
            'Social Pages Cosmetics (Cover Photo, About Section, Display Picture and more)',
            'Facebook Business Manager Setup',
            'Facebook Pixel Integration',
            'Daily Monitoring of Social Assets',
            'Daily Monitoring of Boosted Posts',
            'Reputation Management (Reviews, Q/A)',
            'Facebook Shop Setup',
            'Target Page Likes & Followers',
            { feature: 'Chatbot Integration', tooltip: 'Setting up automated messaging to handle common customer queries instantly.' },
            'Spam monitoring',
            'Social Ads Management',
            'All Social Ad Platforms',
            'Up to 5 Campaigns Per Month',
            '10 Ad Sets Per Month',
            'All Ad Objectives Supported',
            'Detailed Campaign Monitoring',
            'Daily Campaign Optimization',
            'Ad Spend (Budget Required)',
            'Dedicated Ads Expert',
            'Value-added services',
            'Dedicated Project Manager',
            'Bi-weekly Progress Report',
            'Priority Support'
        ],
            comparisonFeatures: {
                'Strategy & Audit': 'Full Strategy & Audit', 'Supported Platforms': 'FB, IG, LinkedIn, Twitter, Pinterest', 'Monthly Posts': '36 (20 Graphic)', 'Stories / Highlights': '10', 'Carousel Posts': '7', 'GIF Posts': '3', 'SEO Blog Posts': '2', 'Scheduling': 'Weekly', 'Community Management': 'Full', 'Ads Management': '5 Campaigns / 10 Ad Sets', 'FB Business Manager & Pixel': 'Full Integration', 'Asset Monitoring': 'Daily', 'Reporting': 'Bi-weekly', 'Support': 'Priority'
            }
        },
        { name: 'Enterprise Plus', price: '€3,499', priceDetails: '/month', features: [
            'Comprehensive Social Strategy (Quarterly Roadmap)',
            'In-depth Competitor & Market Analysis',
            'Advanced Audience Segmentation',
            '60+ Posts Per Month',
            '30 Graphic Social Posts',
            '15 Stories / Highlights',
            '10 Carousel Posts',
            '05 GIF Posts',
            '04 SEO Blog Posts / Articles',
            'Short-Form Video Production (Reels, Shorts, TikToks)',
            'Facebook, Instagram, LinkedIn, Twitter, Pinterest, YouTube / TikTok Supported',
            'Daily Post Scheduling',
            'Full Community Management (24/7 Query & Comment Response)',
            'Page Cosmetics & Branding Consistency',
            'Advanced Pixel & Tracking Integrations',
            'Real-Time Reputation Monitoring',
            'Facebook / Instagram Shop Setup',
            'Influencer Collaboration Management',
            'Spam & Crisis Management',
            { feature: 'Conversion Funnel Tracking', tooltip: 'Tracking user journey from social click to website purchase to optimize ROI.' },
            'All Social Ad Platforms Supported',
            'Unlimited Campaigns + Ad Sets',
            { feature: 'Retargeting + Lookalike Audiences', tooltip: 'Showing ads to people who visited your site and finding new people similar to your best customers.' },
            'Multi-Country Ad Targeting',
            'Al-driven Optimization',
            'Ad Spend (Budget Required)',
            'Dedicated Ads & Analytics Team',
            'Dedicated Project Manager & Creative Strategist',
            'Weekly Progress & Analytics Report',
            'Custom Dashboard Access',
            'Priority Support'
        ],
            comparisonFeatures: {
                'Strategy & Audit': 'Quarterly Roadmap', 'Supported Platforms': 'All major platforms', 'Monthly Posts': '60+', 'Stories / Highlights': '15', 'Carousel Posts': '10', 'GIF Posts': '5', 'SEO Blog Posts': '4', 'Short-Form Video Production': true, 'Scheduling': 'Daily', 'Community Management': '24/7', 'Ads Management': 'Unlimited Campaigns', 'FB Business Manager & Pixel': 'Advanced + Funnel Tracking', 'Asset Monitoring': 'Daily', 'Reporting': 'Weekly + Custom Dashboard', 'Support': 'Dedicated Team'
            }
        },
    ],
    faqs: [
      {
        question: 'How much does social media management cost?',
        answer: 'Social media management starts from €399 per month for the Starter plan, which covers 8 posts per month on Facebook and Instagram. A Basic plan with 12 posts and community management starts from €549 per month. The Standard plan with 24 posts across Facebook, Instagram and LinkedIn, plus ad management, starts from €999 per month. A Professional plan with 36 posts across all major platforms starts from €1,999 per month. For brands needing 60 or more posts, full video production, influencer management and unlimited ad campaigns, the Enterprise Plus plan starts from €3,499 per month.'
      },
      {
        question: 'Which social media platforms do you manage?',
        answer: 'We manage Facebook, Instagram, LinkedIn, Twitter, Pinterest, TikTok, and YouTube depending on the plan. Our entry-level plans cover Facebook and Instagram. Standard and above add LinkedIn. Professional plans extend to Twitter and Pinterest. The Enterprise Plus plan covers all platforms including TikTok and YouTube Shorts. We recommend platforms based on where your target audience actually spends time, not based on what is currently trending.'
      },
      {
        question: 'How many posts will I get per month?',
        answer: 'Post volume depends on your plan. The Starter plan includes 8 posts per month. The Basic plan includes 12 posts. The Standard plan includes 24 posts. The Professional plan includes 36 posts. The Enterprise Plus plan covers 60 or more posts per month. Each post is designed and written by our team to match your brand and engage your audience.'
      },
      {
        question: 'Do you create the content or do I need to provide it?',
        answer: 'We handle the full content creation process including graphic design, copywriting, scheduling, and publishing. You do not need to provide anything beyond your logo, brand colours, and any product images or photos you want featured. If you prefer to be involved in content approval, we share a content calendar before posts go live.'
      },
      {
        question: 'Is paid advertising included in the social media packages?',
        answer: 'Paid social ad management is included from the Standard plan upward. The Standard plan covers up to 3 campaigns per month across all ad objectives on Facebook and Instagram. The Professional plan extends to all social platforms with up to 5 campaigns and 10 ad sets per month. The Enterprise Plus plan includes unlimited campaigns, retargeting, lookalike audiences, and multi-country targeting. The management fee covers the strategy and execution. Your ad spend budget is separate and goes directly to the platform.',
        link: { text: 'Learn about our dedicated PPC packages', href: '/services/search-engine-marketing-sem?tab=ppc-management' }
      },
      {
        question: 'What results can I realistically expect from social media?',
        answer: 'Results depend on your industry, starting audience size, budget, and consistency. In the first 1 to 3 months you should see improved content quality, growing engagement, and a more consistent brand presence. Follower growth and lead generation typically build more meaningfully from month 3 onward, especially when combined with paid ads. We set clear goals at the start so you always know what you are working toward.'
      },
      {
        question: 'How do you measure social media success?',
        answer: 'We track metrics tied to your actual business goals, not just vanity numbers. Key metrics include engagement rate, reach, follower growth, website clicks, lead form completions, cost per result on ads, and return on ad spend where applicable. Every client receives a monthly report. Standard and above also get access to a dedicated account manager for ongoing conversations about performance.'
      },
      {
        question: 'Do you respond to comments and messages on our behalf?',
        answer: 'Community management is included from the Basic plan upward. This covers responding to comments and direct messages in line with your brand voice. The Standard plan adds reputation management including review monitoring. The Enterprise Plus plan includes 24/7 community management and crisis response.'
      },
      {
        question: 'Can I approve posts before they go live?',
        answer: 'Yes. We prepare a monthly content calendar in advance which you can review and approve before anything is published. If you want changes to a post, just let your account manager know and we will adjust it. The goal is to give you full visibility without the time burden of doing it yourself.'
      },
      {
        question: 'Do you set up the Facebook Business Manager and Pixel?',
        answer: 'Yes. Basic plans and above include Facebook Business Manager setup and basic Pixel integration. Standard plans and above include full Pixel integration with event tracking so we can attribute results accurately. If you already have a Business Manager account, we can work within your existing setup.'
      },
      {
        question: 'Is the ad spend included in the monthly fee?',
        answer: 'No. The monthly fee covers the management, strategy, creative, and reporting. Your ad spend is a separate budget that goes directly to Facebook, Instagram, LinkedIn or whichever platforms your campaigns run on. We will recommend a realistic ad spend budget based on your goals during the onboarding call.'
      },
      {
        question: 'How do I get started?',
        answer: 'Book a free discovery call and we will walk through your current social presence, your goals, and which plan makes the most sense for your business. We handle the full onboarding including page setup, brand kit alignment, and content calendar creation. Most clients are live with their first posts within 7 to 10 days of signing.',
        link: { text: 'Book a free discovery call', href: '/contact' }
      }
    ]
  },
  {
    id: 'logo-design',
    title: 'Logo Design & Branding',
    description: 'Craft a memorable brand identity with a unique, professional logo and cohesive marketing materials. Our design process ensures your vision comes to life.',
    tabs: [
      {
        tabName: 'Logo Design',
        plans: [
          { name: 'Starter', price: '€49', features: [
              '2 Original Logo Concepts',
              '2 Revision Rounds',
              'Choice of 2 Color Variations',
              { feature: 'Transparent PNG File', tooltip: 'A logo file with no background, perfect for placing over images or colored backgrounds.' },
              'JPG & PNG Formats',
              'Basic Font & Color Recommendations',
              'Delivery in 48 Hours',
              'Dedicated Project Manager',
              '100% Ownership Rights',
              '100% Satisfaction Guarantee',
              '100% Money-Back Guarantee'
            ],
            comparisonFeatures: {
                'Design Concepts': '2', 'Revision Rounds': '2', 'Color Variations': '2', 'File Formats': 'JPG, PNG', 'Vector Files': false, 'Brand Guide': 'Basic Recommendations', 'Social Media Kit': false, 'Stationery Design': false, 'Delivery Time': '48 Hours'
            }
          },
          { name: 'Basic', price: '€99', features: [
              '3 Unique Logo Concepts',
              'Up to 4 Revision Rounds',
              'Full-Color, Black, and White Variants',
              'Transparent & Background Versions',
              { feature: 'JPG, PNG, and PDF Files (Print-Ready)', tooltip: 'High-quality files suitable for both digital use and printing.' },
              'Simple Icon or Symbol Design',
              'Basic Typography & Color Palette',
              'Delivery in 72 Hours',
              'Dedicated Project Manager',
              '100% Ownership Rights',
              '100% Satisfaction Guarantee',
              '100% Money-Back Guarantee'
            ],
            comparisonFeatures: {
                'Design Concepts': '3', 'Revision Rounds': '4', 'Color Variations': 'Full, B&W', 'File Formats': 'JPG, PNG, PDF', 'Vector Files': false, 'Brand Guide': 'Basic Palette', 'Social Media Kit': false, 'Stationery Design': false, 'Delivery Time': '72 Hours'
            }
          },
          { name: 'Standard', price: '€199', isPopular: true, features: [
              '5 Unique Logo Concepts',
              'Unlimited Revisions (within scope)',
              'Versions for Light & Dark Backgrounds',
              'JPG, PNG, PDF, AI, and EPS Files',
              { feature: 'Full Vector & Scalable Formats', tooltip: 'Master files (AI, EPS) that can be resized to any size (from business card to billboard) without losing quality.' },
              'Icon & Symbol Variations',
              'Complete Color Palette (Full Brand Spectrum)',
              'Typography Recommendations',
              { feature: 'Mini Brand Guide', tooltip: 'A document outlining your logo usage rules, color codes, and fonts to ensure consistency.' },
              'Facebook & Instagram Profile Logos',
              { feature: 'Business Card & Letterhead Mockups', tooltip: 'Visual previews of how your logo will look on printed stationery.' },
              'Delivery in 5 Business Days',
              'Dedicated Project Manager',
              '100% Ownership Rights',
              '100% Satisfaction Guarantee',
              '100% Money-Back Guarantee'
            ],
            comparisonFeatures: {
                'Design Concepts': '5', 'Revision Rounds': 'Unlimited', 'Color Variations': 'Full, B&W, Inverse', 'File Formats': 'JPG, PNG, PDF, AI, EPS', 'Vector Files': true, 'Brand Guide': 'Mini Guide', 'Social Media Kit': 'Profile Logos', 'Stationery Design': 'Mockups', 'Delivery Time': '5 Business Days'
            }
          },
          { name: 'Pro', price: '€399', features: [
              'Unlimited Logo Concepts by 2 Designers',
              'Unlimited Revisions',
              'Horizontal, Vertical & Icon-Only Versions',
              { feature: 'JPG, PNG, PDF, AI, EPS & SVG Files', tooltip: 'Every file format you will ever need for web, print, and editing.' },
              { feature: 'CMYK + RGB Color Profiles', tooltip: 'Files optimized for both screens (RGB) and professional printing (CMYK).' },
              'Full Color Palette (Primary, Secondary, Accent)',
              'Advanced Typography System',
              { feature: 'Comprehensive Brand Identity Sheet', tooltip: 'A detailed guide defining your brand\'s visual language, ensuring a cohesive look across all media.' },
              { feature: 'Iconography & Favicon Design', tooltip: 'Custom icons for your website and the small icon appearing in browser tabs.' },
              { feature: 'Social Media Kit', tooltip: 'Ready-to-use profile pictures, banners, and cover images sized perfectly for all major platforms.' },
              'Business Card & Letterhead Design',
              { feature: 'Product Mockups', tooltip: 'Realistic 3D previews of your logo on apparel, signage, or packaging.' },
              'Priority Delivery in 3-4 Business Days',
              'Dedicated Project Manager',
              '100% Ownership Rights',
              '100% Satisfaction Guarantee',
              '100% Money-Back Guarantee'
            ],
            comparisonFeatures: {
                'Design Concepts': 'Unlimited (2 Designers)', 'Revision Rounds': 'Unlimited', 'Color Variations': 'Full Suite + Profiles', 'File Formats': 'JPG, PNG, PDF, AI, EPS, SVG', 'Vector Files': true, 'Brand Guide': 'Comprehensive Sheet', 'Social Media Kit': 'Full Kit', 'Stationery Design': 'Full Design Files', 'Delivery Time': '3-4 Business Days (Priority)'
            }
          },
        ],
      },
      {
        tabName: 'Brochures',
        plans: [
            { name: 'Starter (Bi-Fold)', price: '€149', features: [
                '4-Panel Bi-Fold Layout',
                '2 Custom Design Concepts',
                'Print-Ready High-Res PDF',
                'Standard Typography',
                '2 Rounds of Revisions',
                'Stock Photo Integration (Up to 2 images)',
                'Full Ownership Rights',
                'Dedicated Project Manager',
                '100% Satisfaction Guarantee'
            ],
            comparisonFeatures: {
                'Format': 'Bi-Fold (4 Panel)', 'Design Concepts': '2', 'Print Ready': true, 'Source Files': false, 'Stock Photos': '2', 'Revisions': '2 Rounds'
            }},
            { name: 'Classic (Tri-Fold)', price: '€249', isPopular: true, features: [
                '6-Panel Tri-Fold Layout',
                '3 Custom Design Concepts',
                'Print-Ready PDF + Digital PDF (Web)',
                'Custom Iconography (Up to 5 icons)',
                'Unlimited Revisions',
                'Photo Retouching & Enhancement',
                'Editable Source Files (AI/InDesign)',
                'Full Ownership Rights',
                'Dedicated Project Manager',
                '100% Satisfaction Guarantee'
            ],
            comparisonFeatures: {
                'Format': 'Tri-Fold (6 Panel)', 'Design Concepts': '3', 'Print Ready': true, 'Source Files': true, 'Stock Photos': '5', 'Revisions': 'Unlimited'
            }},
            { name: 'Corporate (4-8 Pages)', price: '€499', features: [
                'Multi-page Booklet or Company Profile',
                'Cover Design + Inner Layouts',
                'Advanced Typography & Grid Systems',
                'Infographic & Data Visualization',
                'Unlimited Revisions',
                'Full Stock Photo Library Access',
                'Print-Ready + Interactive Digital PDF',
                'Editable Source Files',
                'Priority Support',
                'Full Ownership Rights'
            ],
            comparisonFeatures: {
                'Format': 'Booklet (4-8 Pages)', 'Design Concepts': 'Custom Layouts', 'Print Ready': true, 'Source Files': true, 'Stock Photos': 'Unlimited', 'Revisions': 'Unlimited'
            }},
            { name: 'Catalog / Pro (12+ Pages)', price: '€899', features: [
                'Extensive Catalog or Annual Report',
                '12+ Pages Custom Layout',
                'Table of Contents & Indexing Design',
                'High-End Image Manipulation',
                'Custom Illustration Elements',
                'Brand Consistency Audit',
                'Unlimited Revisions',
                'Print, Web & Interactive Formats',
                'Full Source Code / Files',
                'Dedicated Art Director'
            ],
            comparisonFeatures: {
                'Format': 'Catalog (12+ Pages)', 'Design Concepts': 'Premium', 'Print Ready': true, 'Source Files': true, 'Stock Photos': 'Unlimited', 'Revisions': 'Unlimited'
            }}
        ]
      },
      {
        tabName: 'Flyers',
        plans: [
             { name: 'Event Promo', price: '€79', features: [
                'Single-Sided Design',
                'Optimized for Digital / Social Media',
                '1 Creative Concept',
                'Standard Resolution (72/150 DPI)',
                '2 Rounds of Revisions',
                'Quick Turnaround (48 Hours)',
                'Full Ownership Rights',
                '100% Satisfaction Guarantee'
            ],
            comparisonFeatures: {
                'Sides': 'Single Sided', 'Format': 'Digital Only', 'Design Concepts': '1', 'Resolution': 'Standard', 'Source Files': false, 'Revisions': '2 Rounds', 'Turnaround': '48 Hours'
            }},
            { name: 'Business One-Pager', price: '€129', features: [
                'Single-Sided Design (A4/A5/Letter)',
                'Print-Ready High-Res (300 DPI)',
                '2 Creative Concepts',
                'Bleed & Trim Marks Included',
                'Photo Enhancement',
                '3 Rounds of Revisions',
                'PDF & JPG Deliverables',
                'Full Ownership Rights',
                '100% Satisfaction Guarantee'
            ],
            comparisonFeatures: {
                'Sides': 'Single Sided', 'Format': 'Print Ready', 'Design Concepts': '2', 'Resolution': 'High-Res (300 DPI)', 'Source Files': false, 'Revisions': '3 Rounds', 'Turnaround': '72 Hours'
            }},
            { name: 'Double Impact', price: '€199', isPopular: true, features: [
                'Double-Sided Design',
                'Print-Ready + Digital Versions',
                '3 Creative Concepts',
                'QR Code Generation & Integration',
                'Custom Icons & Graphics',
                'Unlimited Revisions',
                'Editable Source Files (PSD/AI)',
                'Full Ownership Rights',
                'Priority Support'
            ],
            comparisonFeatures: {
                'Sides': 'Double Sided', 'Format': 'Print + Digital', 'Design Concepts': '3', 'Resolution': 'High-Res Vector', 'Source Files': true, 'Revisions': 'Unlimited', 'Turnaround': '3-4 Days'
            }},
            { name: 'Marketing Suite', price: '€349', features: [
                'Bundle of 3 Distinct Flyer Designs',
                '(e.g., Sale, Event, General Info)',
                'Double-Sided Options Included',
                'Cohesive Brand Theme',
                'Social Media Resize for Each',
                'Unlimited Revisions',
                'All Source Files',
                'Dedicated Senior Designer',
                '100% Satisfaction Guarantee'
            ],
            comparisonFeatures: {
                'Sides': 'Double Sided (x3)', 'Format': 'Multi-Format Bundle', 'Design Concepts': '3 Distinct Flyers', 'Resolution': 'High-Res Vector', 'Source Files': true, 'Revisions': 'Unlimited', 'Turnaround': '5-7 Days'
            }}
        ]
      },
      {
        tabName: 'Digital Creatives',
        plans: [
             { name: 'Social Starter', price: '€99', features: [
                '3 Static Social Media Templates',
                'Optimized for Instagram/Facebook Feed',
                'Branded with your Colors/Logo',
                'Canva or Figma Source Link',
                '2 Rounds of Revisions',
                'Standard Licensing',
                'Fast Delivery'
            ],
            comparisonFeatures: {
                'Asset Count': '3 Templates', 'Type': 'Static', 'Platform': 'IG/FB Feed', 'Animation': false, 'Source Files': 'Canva/Figma', 'Revisions': '2 Rounds', 'Resizing': false
            }},
            { name: 'Ad Creative Pack', price: '€199', isPopular: true, features: [
                '5 High-Conversion Ad Creatives',
                'Mix of Feed & Story Sizes',
                'Psychology-Driven Design for Clicks',
                'A/B Testing Variations Included',
                'Stock Photo Sourcing',
                'Unlimited Revisions',
                'Source Files (PSD/Figma)',
                'Commercial Usage Rights'
            ],
            comparisonFeatures: {
                'Asset Count': '5 Ads', 'Type': 'Static High-Conversion', 'Platform': 'Feed + Story', 'Animation': false, 'Source Files': 'PSD/Figma', 'Revisions': 'Unlimited', 'Resizing': 'Included'
            }},
            { name: 'Motion & Signage', price: '€399', features: [
                '3 Animated Screens / Stories',
                'HD Video Export (MP4/MOV)',
                'Ideal for Digital Signage or Reels',
                'Custom Motion Graphics',
                'Background Music Licensing',
                'Unlimited Revisions',
                'Project Files (After Effects)',
                'Priority Support'
            ],
            comparisonFeatures: {
                'Asset Count': '3 Animated Assets', 'Type': 'Motion/Video', 'Platform': 'Signage/Reels', 'Animation': true, 'Source Files': 'After Effects', 'Revisions': 'Unlimited', 'Resizing': 'Upon Request'
            }},
            { name: 'Campaign Master', price: '€699', features: [
                '15+ Assets (Static + Motion Mix)',
                'Cohesive Campaign Theme Strategy',
                'Covers All Platforms (IG, FB, LinkedIn, YouTube)',
                'Carousel & Story Sequences',
                'Advanced Photo Manipulation',
                'Dedicated Creative Director',
                'All Source Files & Assets',
                'VIP Support Channel'
            ],
            comparisonFeatures: {
                'Asset Count': '15+ Assets', 'Type': 'Static + Motion Mix', 'Platform': 'All Platforms', 'Animation': true, 'Source Files': 'All Formats', 'Revisions': 'Unlimited', 'Resizing': 'All Sizes'
            }}
        ]
      }
    ],
    faqs: [
      {
        question: 'How much does a logo design cost?',
        answer: 'Logo design starts from €49 for a 2-concept starter package with JPG and PNG files, delivered in 48 hours. A 3-concept package with vector files (AI, EPS, PDF) starts from €99. The Standard package with 5 concepts, unlimited revisions, a full colour palette, mini brand guide and social media profile logos starts from €199. A Pro package with unlimited concepts from 2 designers, a comprehensive brand identity sheet, social media kit and source files in all formats starts from €399.'
      },
      {
        question: 'What file formats will I receive?',
        answer: 'The files you receive depend on the package you choose. All packages include JPG and PNG. From the Basic package upward you also receive a print-ready PDF. Standard and Pro packages include full vector files (AI, EPS, SVG) which are scalable to any size without losing quality. The Pro package also includes CMYK and RGB colour profiles, making the files ready for both digital and professional print use.'
      },
      {
        question: 'How many revisions are included?',
        answer: 'The Starter package includes 2 revision rounds. The Basic package includes up to 4 revision rounds. The Standard and Pro packages both include unlimited revisions within the agreed scope so you can keep refining until the design is exactly right.'
      },
      {
        question: 'Will I own the logo once it is finished?',
        answer: 'Yes. Full commercial ownership rights transfer to you on every package once payment is complete. You can use the logo on your website, printed materials, social media, packaging, signage, and anywhere else without restriction or ongoing fees.'
      },
      {
        question: 'How much does brochure design cost?',
        answer: 'Brochure design starts from €149 for a bi-fold brochure with 2 design concepts and print-ready files. A tri-fold brochure with unlimited revisions and source files starts from €249. Corporate brochures of 4 to 8 pages with advanced typography and illustration start from €499. Catalogue and professional brochures of 12 or more pages start from €899.',
        link: { text: 'See our brochure packages', href: '/services/logo-design?tab=brochures' }
      },
      {
        question: 'What types of brochures do you design?',
        answer: 'We design bi-fold brochures, tri-fold brochures, corporate multi-page brochures, and full product catalogues of 12 or more pages. All brochure designs are delivered as print-ready PDFs at 300 DPI and include source files so you can make text updates in future. We also provide a digital version optimised for screens and email sharing.'
      },
      {
        question: 'How much does flyer design cost?',
        answer: 'Flyer design starts from €79 for a single-sided event promo flyer with 2 design concepts and print-ready files. A business one-pager with double-sided design and unlimited revisions starts from €129. A double-sided impact flyer with premium typography and source files starts from €199. A full marketing suite with multiple sizes and digital variants starts from €349.',
        link: { text: 'See our flyer packages', href: '/services/logo-design?tab=flyers' }
      },
      {
        question: 'Do flyer designs come print-ready?',
        answer: 'Yes. All flyer packages are delivered as high-resolution print-ready PDFs at 300 DPI with bleed and crop marks included. We also provide a digital version sized for social media and email if you want to use the design online as well. Source files are included from the Double Impact package upward.'
      },
      {
        question: 'What are digital creatives and how much do they cost?',
        answer: 'Digital creatives are visual assets built specifically for online use, including social media posts, paid ad banners in multiple sizes, animated stories, and full campaign graphic suites. The Social Starter pack starts from €99 and covers basic static social post templates. The Ad Creative Pack with multiple ad sizes and banner variations starts from €199. Motion and signage packs with animated content start from €399. A full Campaign Master bundle covering all formats starts from €699.',
        link: { text: 'See our digital creatives packages', href: '/services/logo-design?tab=digital-creatives' }
      },
      {
        question: 'Can you create animated content for social media ads?',
        answer: 'Yes. Animated social content is included in the Motion and Signage pack from €399 and the Campaign Master bundle from €699. Animated assets are delivered in formats ready for Facebook, Instagram, TikTok, and Google Display ads. If you need a single animated piece as a one-off, get in touch and we can quote based on the specific requirement.'
      },
      {
        question: 'How long does a design project take to complete?',
        answer: 'Logo projects are delivered within 48 hours for the Starter package and within 3 to 5 business days for Standard and Pro packages. Brochure and flyer projects typically take 3 to 7 business days depending on complexity. Digital creative packs take 3 to 5 business days. Rush delivery is available on request for an additional fee.'
      },
      {
        question: 'Can you match my existing brand guidelines?',
        answer: 'Yes. If you already have brand guidelines, a style guide, or an existing colour palette, just share them when you brief us and we will design within those parameters. This applies to all services including logos, brochures, flyers, and digital creatives. Consistency across your brand touchpoints is something we take seriously.'
      }
    ]
  },
  {
    id: 'mobile-app',
    title: 'Mobile App Development',
    description: 'From clickable prototypes to enterprise-grade ecosystems. We build intuitive, high-performance mobile applications for iOS and Android tailored to the Irish and global market.',
    plans: [
      { name: 'App Prototype', price: '€2,499', features: [
          'Discovery Workshop & Idea Validation',
          { feature: 'User Flow & Journey Mapping', tooltip: 'Visualizing the path a user takes through your app to achieve their goal.' },
          { feature: 'Low-Fidelity Wireframing', tooltip: 'Blueprint sketches of your app layout without colors or images.' },
          { feature: 'High-Fidelity UI Design', tooltip: 'Pixel-perfect designs showing exactly how the app will look.' },
          { feature: 'Clickable Interactive Prototype', tooltip: 'A realistic simulation of the app used for investor pitches and user testing. No functional code.' },
          'Brand Asset Creation (App Icon, Splash)',
          'Color Palette & Typography Selection',
          '2 Rounds of Design Revisions',
          'Source File Delivery (Figma/XD)',
          '100% Design Ownership Rights',
          'Dedicated Project Manager'
        ],
        comparisonFeatures: {
            'Development Type': 'Visual Prototype (No Code)', 'Platforms': 'Visuals for iOS & Android', 'Core Screens': 'Up to 10', 'Support': 'Design Handover', 'Timeline': '2-3 Weeks'
        }
      },
      { name: 'MVP Launch', price: '€6,499', features: [
          'Includes all features from Previous Plan',
          'Includes Prototype Phase Findings',
          { feature: 'Cross-Platform Development (Flutter/React Native)', tooltip: 'Building one codebase that works on both iOS and Android devices.' },
          'Deploy to iOS (App Store)',
          'Deploy to Android (Google Play)',
          { feature: 'User Authentication (Email/Social)', tooltip: 'Secure login systems using email or social media accounts like Google or Facebook.' },
          'Up to 5 Core Functional Screens',
          'Basic Database Integration (Firebase/AWS)',
          'Contact & Enquiry Forms',
          { feature: 'Push Notifications (Basic)', tooltip: 'Send alerts to users\' devices to keep them engaged.' },
          'Basic Admin Dashboard',
          'Privacy Policy & Terms Pages',
          'App Store Submission Handling',
          '1 Month Bug Support',
          '100% Code Ownership'
        ],
        comparisonFeatures: {
            'Development Type': 'Functional MVP', 'Platforms': 'iOS & Android (Hybrid)', 'Core Screens': 'Up to 5 Functional', 'Authentication': 'Email & Social', 'Database & Backend': 'Basic Cloud DB', 'Admin Panel': 'Basic', 'Support': '1 Month Bug Support', 'Timeline': '6-8 Weeks'
        }
      },
      { name: 'Business Standard', price: '€10,999', isPopular: true, features: [
          'Includes all features from Previous Plan',
          'Includes all MVP Launch features',
          'Cross-Platform Development (Flutter/React Native)',
          'iOS & Android App Deployment',
          { feature: 'Advanced User Profiles', tooltip: 'Users can manage avatars, bios, and personal settings.' },
          { feature: 'Social Media Integrations', tooltip: 'Social login, sharing to feeds, and friend invites.' },
          'Up to 10 Core Functional Screens',
          { feature: 'In-App Messaging System', tooltip: 'Allow users to chat with each other or support within the app.' },
          { feature: 'Google Maps & Location Services', tooltip: 'Geolocation, route plotting, and nearby search.' },
          { feature: 'Media Upload & Gallery', tooltip: 'Image/video compression, uploading, and gallery viewing.' },
          { feature: 'Robust Admin Panel', tooltip: 'A comprehensive web-based dashboard to manage users, content, and app settings.' },
          { feature: 'Google Analytics Integration', tooltip: 'Track active users, retention rates, and screen views.' },
          { feature: 'Search & Filtering', tooltip: 'Advanced search capabilities within the app content.' },
          'FAQ & Support Section Integration',
          '2 Months Bug Support',
          '100% Code Ownership'
        ],
        comparisonFeatures: {
            'Development Type': 'Full Business App', 'Platforms': 'iOS & Android (Hybrid)', 'Core Screens': 'Up to 10 Functional', 'Authentication': 'Advanced Profiles', 'Database & Backend': 'Scalable Cloud DB', 'Admin Panel': 'Robust', 'Support': '2 Months Bug Support', 'Timeline': '3-4 Months'
        }
      },
      { name: 'Pro Commerce', price: '€24,999', features: [
          'Includes all features from Previous Plan',
          'Includes Business Standard Architecture',
          'Full E-commerce Mobile App Logic',
          'iOS & Android App Deployment',
          { feature: 'Secure User Accounts', tooltip: 'Encrypted login with password recovery and session management.' },
          { feature: 'Dynamic Product Catalog', tooltip: 'Cloud-managed product listings with variants (size, color).' },
          { feature: 'Initial Product Setup', tooltip: 'We will upload and configure your initial batch of products to get you started.' },
          { feature: 'Smart Search', tooltip: 'Auto-complete search with history and trending items.' },
          { feature: 'Shopping Cart System', tooltip: 'Persistent cart functionality with edit capabilities.' },
          { feature: 'Secure Checkout', tooltip: 'Multi-step checkout flow optimized for conversion.' },
          { feature: 'Payment Gateway Integration', tooltip: 'Stripe, PayPal, Apple Pay, and Google Pay support.' },
          { feature: 'Order Management', tooltip: 'User order history, status tracking, and re-order functions.' },
          { feature: 'Push Notifications with Deep Linking', tooltip: 'Marketing notifications that open specific products directly.' },
          'Wishlist & Favorites System',
          'Product Reviews & Ratings',
          { feature: 'Real-Time Chat Support', tooltip: 'Live chat integration for instant customer service.' },
          'Discount Codes & Coupons Engine',
          { feature: 'Advanced Admin Dashboard', tooltip: 'Web portal for managing inventory, orders, and viewing sales reports.' },
          'Up to 15 Core Functional Screens',
          { feature: 'Native Device Features', tooltip: 'Camera access, photo library, GPS, and contacts integration.' },
          'Performance Optimization',
          '3 Months Bug Support',
          '100% Code Ownership'
        ],
        comparisonFeatures: {
            'Development Type': 'E-commerce App', 'Platforms': 'iOS & Android (Hybrid)', 'Core Screens': 'Up to 15 Functional', 'Authentication': 'Secure Customer Accounts', 'Database & Backend': 'Commerce Backend', 'Admin Panel': 'Sales & Order Mgmt', 'Support': '3 Months Bug Support', 'Timeline': '4-5 Months'
        }
      },
      { name: 'Advanced Scale', price: '€44,999', features: [
          'Includes all features from Previous Plan',
          'Includes all Pro Commerce & Business features',
          { feature: 'Custom Backend Architecture', tooltip: 'High-performance server infrastructure built for scale.' },
          { feature: 'API Development & Integration', tooltip: 'Custom REST/GraphQL APIs connecting to third-party services.' },
          { feature: 'Real-Time Data Synchronization', tooltip: 'WebSockets implementation for instant data updates across all devices.' },
          { feature: 'Role-Based Access Control (RBAC)', tooltip: 'Granular permissions for Super Admins, Managers, and Users.' },
          { feature: 'CRM Integration (Salesforce/HubSpot)', tooltip: 'Two-way sync with your existing customer relationship tools.' },
          { feature: 'ERP System Integration', tooltip: 'Connect with enterprise resource planning software like SAP or Oracle.' },
          { feature: 'Advanced Analytics & Reporting', tooltip: 'Integration with tools like Mixpanel or Amplitude for deep user insights.' },
          { feature: 'Offline Functionality & Sync', tooltip: 'Robust local database caching allowing usage without internet and auto-sync when online.' },
          { feature: 'Automated Workflows', tooltip: 'Background jobs, scheduled tasks, and email triggers.' },
          { feature: 'Complex Data Visualization', tooltip: 'Interactive charts, graphs, and dashboards within the app.' },
          'Tablet & iPad Optimization',
          { feature: 'Multi-Language Support', tooltip: 'Localization framework for global audiences.' },
          { feature: 'Security Audits & Compliance', tooltip: 'GDPR/CCPA compliance checks and data encryption.' },
          { feature: 'Performance Monitoring', tooltip: 'Real-time crash reporting (Sentry) and performance tracking.' },
          'File Management System (AWS S3)',
          'Multi-Factor Authentication (MFA)',
          'Automated CI/CD Pipelines',
          '6 Months Priority Support',
          '100% Code Ownership'
        ],
        comparisonFeatures: {
            'Development Type': 'Scalable Custom Solution', 'Platforms': 'Mobile & Tablet', 'Core Screens': '20+ Functional', 'Authentication': 'Multi-Role RBAC + MFA', 'Database & Backend': 'Custom REST/GraphQL APIs', 'Admin Panel': 'Enterprise Grade', 'Support': '6 Months Priority', 'Timeline': '5-7 Months'
        }
      },
      { name: 'Enterprise Elite', price: '€74,999', features: [
          'Includes all features from Previous Plan',
          'Includes ALL Advanced Scale features',
          { feature: 'Native Development Option', tooltip: 'Choice of Swift (iOS) and Kotlin (Android) for maximum performance.' },
          { feature: 'Microservices Architecture', tooltip: 'Scalable, decoupled service architecture for massive growth and fault tolerance.' },
          { feature: 'AI & Machine Learning Integration', tooltip: 'Personalization engines, chatbots, predictive models, or image recognition.' },
          'High-Volume Data Processing',
          { feature: 'Biometric Security', tooltip: 'FaceID and TouchID integration for enterprise-grade security.' },
          { feature: 'End-to-End Encryption', tooltip: 'Advanced cryptography for sensitive data transmission.' },
          { feature: 'Dedicated Infrastructure', tooltip: 'Private cloud setup (AWS/Azure/GCP) with load balancing and auto-scaling.' },
          'White-Label Solution Capability',
          { feature: 'Advanced DevOps & SecOps', tooltip: 'Automated security scanning, containerization (Docker/Kubernetes).' },
          'Disaster Recovery & Backups Strategy',
          { feature: 'Predictive Analytics Dashboard', tooltip: 'AI-driven insights to forecast trends and user behavior.' },
          'IoT (Internet of Things) Integration',
          'Real-Time Socket Connections (Chat/Live Streaming)',
          'Source Code Escrow Agreement',
          'Comprehensive SLA (Service Level Agreement)',
          'Dedicated QA Team & Penetration Testing',
          'Audit Logging & Compliance Modules (HIPAA/FinTech)',
          '1 Year Premium Support & Maintenance',
          '100% Code Ownership'
        ],
        comparisonFeatures: {
            'Development Type': 'Enterprise Ecosystem', 'Platforms': 'Native or Cross-Platform', 'Core Screens': 'Unlimited (Scope Dependent)', 'Authentication': 'SSO / Biometric', 'Database & Backend': 'Microservices / Dedicated', 'Admin Panel': 'Full Custom Suite', 'Support': '1 Year Premium SLA', 'Timeline': '6+ Months'
        }
      }
    ],
    faqs: [
      {
        question: 'How much does it cost to build a mobile app?',
        answer: 'App development starts from €2,499 for a high-fidelity clickable prototype, which is ideal for pitching investors or validating your concept before committing to a full build. A functional MVP with working code, user authentication, and up to 5 core screens starts from €6,499. A full business app with up to 10 screens, in-app messaging, maps, and a robust admin panel starts from €10,999. E-commerce apps with a full shopping and payment system start from €24,999. Large-scale apps with custom backends and CRM integrations start from €44,999. Enterprise-grade apps with AI features, biometric security, and a dedicated support SLA start from €74,999.'
      },
      {
        question: 'What is the difference between a Prototype and an MVP?',
        answer: 'A Prototype is a visual, interactive simulation of your app built in a design tool like Figma. It looks and behaves like a real app but has no working code or database behind it. It is used for user testing, design validation, and investor presentations. An MVP (Minimum Viable Product) is a fully functional app with real code, a live database, and core features that users can download and use. If you need to raise funding or validate an idea cheaply, start with the prototype. If you are ready to launch to real users, go straight to the MVP.'
      },
      {
        question: 'Do you build for both iOS and Android?',
        answer: 'Yes. We build cross-platform apps using Flutter and React Native, which means your app runs on both iOS and Android from a single codebase. This is significantly more cost-effective than building two separate native apps and still delivers a high-quality, native-feeling experience. For enterprise clients with specific performance requirements, native development is also available.'
      },
      {
        question: 'How long does it take to build an app?',
        answer: 'A prototype typically takes 2 to 3 weeks. An MVP takes 6 to 8 weeks. A Business Standard app takes 3 to 4 months. E-commerce apps take 4 to 5 months. Advanced Scale builds take 6 months or more depending on the scope. We provide a detailed project timeline after the discovery workshop so you know exactly when to expect each milestone.'
      },
      {
        question: 'What technology do you use to build apps?',
        answer: 'We use Flutter and React Native for cross-platform development, Firebase and AWS for backend infrastructure and databases, and tools like Figma for design and prototyping. For enterprise builds we implement custom backend architectures, REST and GraphQL APIs, and integrate with CRM and ERP systems. We use the right technology for each project rather than forcing every build into the same stack.'
      },
      {
        question: 'Do I own the code after the project is finished?',
        answer: 'Yes. Full code ownership transfers to you on completion of every package. You receive all source files, design files, and access credentials. We do not retain any rights to the code. If you decide to work with a different developer in future, everything you need to hand over is yours.'
      },
      {
        question: 'What happens after the app is built and launched?',
        answer: 'Every package includes a period of post-launch bug support ranging from 1 month on the MVP plan to 1 year on the Enterprise Elite plan. During the support window we fix any bugs that surface in production at no extra charge. After the support period ends, we offer ongoing maintenance and update packages. We also handle App Store and Google Play submissions as part of the build.'
      },
      {
        question: 'Can you add e-commerce functionality to a mobile app?',
        answer: 'Yes. The Pro Commerce plan starting from €24,999 is built specifically for mobile e-commerce and includes a full product catalogue, shopping cart, secure checkout, payment gateway integrations (Stripe, PayPal, Apple Pay, Google Pay), order management, push notifications, and a discount and coupon engine. If you have an existing e-commerce site and want to extend it to mobile, we can discuss a custom scope.',
        link: { text: 'See our e-commerce website packages', href: '/services/website?tab=e-commerce' }
      },
      {
        question: 'What is a Discovery Workshop?',
        answer: 'A Discovery Workshop is the structured first phase of any app project. We work through your idea in detail, map the user journeys, identify the core features, and flag any technical risks before a line of code is written. It results in validated wireframes and a clear project scope. Every package from the Prototype upward includes a Discovery Workshop because building without this phase is one of the main reasons app projects go over budget.'
      },
      {
        question: 'Do you help with App Store and Google Play submission?',
        answer: 'Yes. App Store and Google Play submission handling is included from the MVP Launch package upward. We prepare all the required metadata, screenshots, descriptions, and privacy documentation, and manage the review process. Apple and Google reviews can take anywhere from a few hours to a few days and we handle any feedback or rejections on your behalf.'
      },
      {
        question: 'How many functional screens are included in each package?',
        answer: 'The MVP Launch plan includes up to 5 core functional screens. The Business Standard plan includes up to 10 screens. The Pro Commerce plan includes up to 15 screens. The Advanced Scale and Enterprise Elite plans are scoped based on your specific requirements. Additional screens can be added to any plan at €500 per screen.'
      },
      {
        question: 'Can I start with a basic app and add features later?',
        answer: 'Yes, and this is often the smartest approach. Starting with an MVP lets you launch quickly, gather real user feedback, and invest in features you know people actually want rather than features you assumed they would want. We build with scalability in mind from day one so the codebase can grow without needing to be rewritten.',
        link: { text: 'Talk to us about your app idea', href: '/contact' }
      }
    ]
  },
  {
    id: 'dropshipping',
    title: 'Dropshipping Solutions',
    description: 'Launch your e-commerce empire without the hassle of inventory. We build and optimize dropshipping stores for maximum profitability.',
    plans: [
      { name: 'Micro', price: '€999', features: [
          { feature: 'Niche Selection Guidance', tooltip: 'We help you identify a profitable market segment with high demand and low competition.' },
          'Supplier & Product Category Research',
          'Customized Website design & development',
          'Payment Gateway Integration',
          'Up to 25 Products Imported',
          { feature: 'Supplier Vetting', tooltip: 'We check suppliers for delivery speed, product quality, and ratings to ensure reliability.' },
          { feature: 'Automated Inventory & Price Sync Setup', tooltip: 'Your store automatically updates stock levels and prices when suppliers make changes.' },
          'Product Title & Description Optimization',
          'Basic Logo Creation',
          'Storefront Customization (Colors, Fonts, Layout)',
          'Homepage Banner Design',
          'Product Page Formatting',
          { feature: 'Abandoned Cart Recovery Setup', tooltip: 'Emails sent to customers who leave without buying, encouraging them to complete the purchase.' },
          'Order Tracking Integration',
          'Shipping Policy & Terms Setup',
          '5 Days Post-Launch Support via Email',
          'Store Management Quick Guide',
          'Dedicated Project Manager',
          '100% Ownership Rights',
          '100% Satisfaction Guarantee',
          '100% Money Back Guarantee'
        ],
        comparisonFeatures: {
            'Research & Strategy': 'Niche Guidance', 'Products Imported': 'Up to 25', 'Supplier Sourcing': 'Vetted', 'Automation': 'Inventory & Price Sync', 'Training': 'Quick Guide'
        }
      },
      { name: 'Basic', price: '€2,999', features: [
          { feature: 'Includes all features from Previous Plan', tooltip: 'Includes all features from the plan below this one.' },
          'Complete Niche Validation',
          'Competitor Analysis',
          'Customized Website design & development',
          'Tax & Shipping Zone Configuration',
          'Payment Gateway & Currency Setup',
          '100 Products Imported',
          'Verified Supplier Sourcing (AliExpress, CJ, etc.)',
          'Product Image Optimization',
          { feature: 'Product Pricing Rule Automation', tooltip: 'Automatically set prices based on a formula (e.g., Cost + 50%) to maintain margins.' },
          'Custom Logo Design (2 Concepts)',
          'Branded Homepage Design',
          'Banner & Hero Section Design',
          'Product Page Copywriting (SEO-Optimized)',
          'Abandoned Cart & Welcome Email Setup',
          'Order Tracking Dashboard',
          { feature: 'App Integration', tooltip: 'Adding trust badges, review widgets, or countdown timers to increase conversions.' },
          'Store Speed Optimization',
          '7 Days Post-Launch Support',
          'Store Management Training (1 Hour)',
          'Dedicated Project Manager',
          '100% Ownership Rights',
          '100% Satisfaction Guarantee',
          '100% Money Back Guarantee'
        ],
        comparisonFeatures: {
            'Research & Strategy': 'Validation + Competitor Analysis', 'Products Imported': '100', 'Supplier Sourcing': 'Verified', 'Automation': 'Pricing Rules', 'Training': '1 Hour'
        }
      },
      { name: 'Standard', price: '€5,999', isPopular: true, features: [
          { feature: 'Includes all features from Previous Plan', tooltip: 'Includes all features from the plan below this one.' },
          'Advanced Niche Research (Data-Driven)',
          'Competitor & Keyword Analysis',
          'Customized Website design & development',
          'Branded Email Setup (info@yourdomain.com)',
          'SEO Optimization (Meta Titles, Tags, Descriptions)',
          '250 Products Imported',
          'Supplier Vetting + Backup Supplier Options',
          'Bulk Product Upload & Optimization',
          'Automated Inventory & Stock Sync',
          'Premium Logo Design (3 Concepts)',
          'Custom Homepage + Inner Pages',
          'Product Page Aesthetic design',
          'Homepage & Collection Banner Design',
          { feature: 'Upsell & Cross-Sell Plugin Setup', tooltip: 'Automatically suggest related products or upgrades to increase average order value.' },
          'Abandoned Cart Email Workflow',
          'Tracking Page Integration',
          'Live Chat & Customer Inquiry Setup',
          '15 Days Post-Launch Support',
          '1-on-1 Store Training (2 Sessions)',
          'Dedicated Project Manager',
          '100% Ownership Rights',
          '100% Satisfaction Guarantee',
          '100% Money Back Guarantee'
        ],
        comparisonFeatures: {
            'Research & Strategy': 'Data-Driven + Keywords', 'Products Imported': '250', 'Supplier Sourcing': 'Vetted + Backup', 'Automation': 'Inventory & Stock Sync', 'Training': '2 Sessions (1-on-1)'
        }
      },
      { name: 'Pro', price: '€8,999', features: [
          { feature: 'Includes all features from Previous Plan', tooltip: 'Includes all features from the plan below this one.' },
          'Multi-Niche Analysis & Validation',
          'Competitor Benchmarking & Market Positioning',
          'Customized Website design & development',
          'Currency Conversion & International Shipping Setup',
          'Email Domain & Google Workspace Integration',
          'Up to 500 High-Margin Products',
          'Verified & Preferred Supplier Partnerships',
          { feature: 'Advanced Pricing Automation', tooltip: 'Dynamic pricing strategies based on profit margin rules and competitor prices.' },
          'Bulk Product Import with Category Mapping',
          'Full Custom Brand Identity (Logo, Fonts, Palette)',
          'Premium UI/UX Store Design',
          'Animated Homepage Banners',
          'Mobile & Tablet Responsive Design',
          { feature: 'Full Funnel Automation', tooltip: 'Automated emails and ads targeting customers at every stage, from browsing to buying.' },
          'Order Management Dashboard Setup',
          'Advanced Analytics (Sales, Traffic, Conversion)',
          'Multi-Language & Multi-Currency Setup',
          '30 Days Post-Launch Technical Support',
          'Store Training (3 Sessions)',
          '1 Strategy Consultation Call',
          'Dedicated Operations Team',
          'Dedicated Project Manager',
          'Priority Support',
          '100% Ownership Rights',
          '100% Satisfaction Guarantee',
          '100% Money Back Guarantee'
        ],
        comparisonFeatures: {
            'Research & Strategy': 'Market Positioning', 'Products Imported': 'Up to 500', 'Supplier Sourcing': 'Preferred Partners', 'Automation': 'Full Funnel', 'Training': '3 Sessions + Strategy Call'
        }
      },
      { name: 'Enterprise', price: '€11,999', features: [
          { feature: 'Includes all features from Previous Plan', tooltip: 'Includes all features from the plan below this one.' },
          'Brand & Business Roadmap',
          'Niche Diversification Strategy',
          'Global Payment & Multi-Region Fulfillment Setup',
          'Tax, Duty & Compliance Configuration',
          'Unlimited Product Import',
          { feature: 'Private Label / White Label Sourcing', tooltip: 'Sourcing generic products to sell under your own brand name and logo.' },
          'Verified & Preferred Supplier Partnerships',
          'Bulk Supplier Negotiation Assistance',
          'Custom Product Bundling & Pricing Strategy',
          'Custom High-End Store Design (Tailored to Brand)',
          'Full Brand Kit (Logo, Colors, Typography, Icons)',
          'Homepage Video Banner + Motion Graphics',
          'Branded Product Mockups & Lifestyle Imagery',
          'Complete eCommerce Automation System',
          'CRM & Email Marketing Integrations',
          { feature: 'AI-Based Product Recommendation Setup', tooltip: 'Using artificial intelligence to show customers the products they are most likely to buy.' },
          'Advanced Analytics Dashboard (Real-Time Reporting)',
          '60 Days Post-Launch Support',
          'Dedicated Team Training Session',
          'Business Scaling Consultation',
          'Dedicated full team: account manager, product manager, logistics specialist',
          'VIP support',
          '100% Ownership Rights',
          '100% Satisfaction Guarantee',
          '100% Money Back Guarantee'
        ], note: 'Fair Use Policy (FUP) applies: Up to 1000 products are included.',
        comparisonFeatures: {
            'Research & Strategy': 'Business Roadmap', 'Products Imported': 'Unlimited (FUP: 1000)', 'Supplier Sourcing': 'Private Label / White Label', 'Automation': 'Complete System', 'Training': 'Team Training + Scaling Call'
        }
      }
    ],
    faqs: [
      {
        question: 'What is dropshipping and how does it work?',
        answer: 'Dropshipping is an e-commerce model where you sell products online without ever holding any inventory. When a customer places an order on your store, the order is automatically sent to your supplier, who packs and ships the product directly to the customer on your behalf. You never touch the stock. Your profit is the margin between what the customer pays you and what you pay the supplier.'
      },
      {
        question: 'How much does it cost to set up a dropshipping store?',
        answer: 'Dropshipping store setup starts from €999 for the Micro plan, which covers niche guidance, a custom store build, up to 25 products imported, automated inventory sync, and 5 days of post-launch support. The Basic plan with 100 products, competitor analysis, and branded design starts from €2,999. The Standard plan with 250 products, SEO optimisation, and live chat setup starts from €5,999. The Pro plan with up to 500 products and full funnel automation starts from €8,999. The Enterprise plan with unlimited product import, private label sourcing, and 60 days of post-launch support starts from €11,999.'
      },
      {
        question: 'Which suppliers do you work with?',
        answer: 'We connect stores with vetted suppliers on AliExpress, CJ Dropshipping, Spocket, and Zendrop. We also source backup suppliers for every product category so your store keeps running if a primary supplier has stock issues. For Enterprise clients, we can negotiate directly with private label and white label manufacturers to give you better margins and faster shipping than standard dropshipping suppliers.'
      },
      {
        question: 'How long does it take to launch a dropshipping store?',
        answer: 'A Micro or Basic store is typically ready to launch within 7 to 10 business days. Standard and Pro stores take 2 to 3 weeks depending on the number of products and the level of customisation. Enterprise stores are scoped individually and generally take 4 to 6 weeks. We do not rush the supplier vetting or product research phase because choosing the wrong products is the most common reason new stores fail.'
      },
      {
        question: 'Do I need to hold any inventory or rent warehouse space?',
        answer: 'No. That is the core advantage of dropshipping. You never purchase stock upfront, hold it in a warehouse, or handle shipping logistics. Orders go directly from the supplier to your customer. Your only investment is the store setup and your marketing budget. This makes dropshipping one of the lowest-risk ways to start an e-commerce business.'
      },
      {
        question: 'How are orders fulfilled and tracked?',
        answer: 'We set up automated order fulfilment so that when a customer places an order on your store, it is automatically forwarded to your supplier. The supplier ships directly to your customer and the tracking number is automatically passed back to your store and emailed to the customer. You do not need to manually process any orders. We integrate an order tracking page into your store so customers can check their delivery status at any time.'
      },
      {
        question: 'Can you help me choose a profitable niche?',
        answer: 'Yes. Every plan from Micro upward includes niche guidance or full niche validation research. We use product trend data, competitor analysis, and supplier availability to identify niches with genuine demand and manageable competition. A solid niche decision at the start saves a significant amount of time and money compared to pivoting after launch.',
        link: { text: 'Book a free discovery call', href: '/contact' }
      },
      {
        question: 'What platform do you build the store on?',
        answer: 'We build primarily on Shopify, which is the most reliable and widely supported platform for dropshipping. It has native integrations with all major dropshipping supplier apps including DSers for AliExpress, Spocket, Zendrop, and CJ Dropshipping. Shopify handles payments, inventory sync, abandoned cart recovery, and order management cleanly out of the box.'
      },
      {
        question: 'Is the store automated after launch?',
        answer: 'Yes. From the Micro plan upward we set up automated inventory and price sync so your product listings automatically update when a supplier changes stock levels or pricing. Higher plans add full funnel automation including abandoned cart emails, welcome sequences, upsell triggers, and order tracking notifications. The goal is to have the store run without you needing to manually process anything day to day.'
      },
      {
        question: 'What ongoing support do I get after launch?',
        answer: 'Post-launch support ranges from 5 days on the Micro plan to 60 days on the Enterprise plan. During the support window we help with technical issues, product adjustments, and supplier queries. We also provide a store management guide and training sessions depending on your plan. After the support period we offer ongoing maintenance and management packages for clients who want continued hands-on help.'
      },
      {
        question: 'What is the difference between the plans?',
        answer: 'The main differences are the number of products imported, the depth of niche research, the level of branding and design, the degree of automation, and the amount of post-launch support. Entry-level plans are best for testing a concept with a lean budget. Mid-range plans suit people who want a properly branded store with strong SEO from day one. Pro and Enterprise plans are for people building a serious e-commerce business with multiple niches, private label potential, and a long-term growth strategy.'
      },
      {
        question: 'How do I get started?',
        answer: 'Book a free discovery call and we will talk through your goals, your budget, and whether dropshipping is the right model for what you are trying to build. We will recommend a niche direction and a package based on your situation. There is no commitment on the call and no pressure to go with the most expensive option if a smaller plan fits your needs better.',
        link: { text: 'Book a free discovery call', href: '/contact' }
      }
    ]
  },
  {
    id: 'video-animation',
    title: 'Video Animation Services',
    description: 'Bring your brand story to life with captivating video content. From 2D explainers to high-end motion graphics, we create visuals that engage and convert.',
    plans: [
      { name: 'Teaser / Intro', price: '€399', features: [
          '15-Second Animation',
          '2D Logo Animation or Intro',
          { feature: 'AI-Generated Voiceover', tooltip: 'High-quality, human-sounding voiceover generated by advanced AI.' },
          { feature: 'Professional Script Assistance', tooltip: 'We help refine your core message into a punchy script.' },
          'Background Music Included',
          'Full HD 1080p Resolution',
          'Custom Colors Matching Brand',
          '2 Rounds of Revisions',
          'Delivery in 5 Business Days',
          'Dedicated Project Manager',
          '100% Ownership Rights'
        ],
        comparisonFeatures: {
            'Duration': '15 Seconds', 'Style': '2D / Logo Intro', 'Voiceover': 'AI-Generated', 'Resolution': 'HD 1080p', 'Delivery Time': '5 Days'
        }
      },
      { name: 'Explainer (30s)', price: '€799', isPopular: true, features: [
          'Up to 30 Seconds Running Time',
          { feature: 'Professional Scriptwriting', tooltip: 'A compelling narrative written by expert copywriters to sell your idea.' },
          { feature: 'AI-Generated Voiceover', tooltip: 'Choose from a library of accents and tones generated by AI.' },
          { feature: 'Custom Characters & Scenes', tooltip: 'Unique visuals tailored to your brand style, not generic templates.' },
          'HD 1080p Resolution',
          { feature: 'Background Music & SFX', tooltip: 'Sound effects and music mixed to create an immersive atmosphere.' },
          'Unlimited Revisions',
          'Commercial Usage Rights',
          'Delivery in 10 Business Days',
          'Dedicated Project Manager'
        ],
        comparisonFeatures: {
            'Duration': '30 Seconds', 'Style': '2D Character Animation', 'Voiceover': 'AI-Generated', 'Resolution': 'HD 1080p', 'Delivery Time': '10 Days'
        }
      },
      { name: 'Business Motion (60s)', price: '€1,499', features: [
          'Up to 60 Seconds Running Time',
          { feature: 'Premium Motion Graphics', tooltip: 'Smooth, professional animation often used for tech or B2B explanations.' },
          { feature: 'Scriptwriting & Storyboard', tooltip: 'We provide a visual sketch of every scene before animating.' },
          'AI-Generated Voiceover (Multiple Styles)',
          'Custom Illustrations & Branding',
          'Background Music & Sound Effects',
          'Unlimited Revisions',
          'HD 1080p + Social Media Resize',
          'Delivery in 15 Business Days',
          'Dedicated Project Manager'
        ],
        comparisonFeatures: {
            'Duration': '60 Seconds', 'Style': 'Motion Graphics', 'Voiceover': 'AI-Generated', 'Resolution': 'HD 1080p + Resizing', 'Delivery Time': '15 Days'
        }
      },
      { name: 'Premium Narrative (90s)', price: '€2,499', features: [
          'Up to 90 Seconds Running Time',
          { feature: 'Isometric or Mixed Media Style', tooltip: 'High-end 3D-like visuals or a blend of different animation styles.' },
          'Advanced Visual Effects (VFX)',
          'Full Script & Storyboard Development',
          'AI-Generated Voiceover (Premium)',
          'Custom Sound Design & Mixing',
          '4K Ultra HD Resolution',
          'Unlimited Revisions',
          { feature: 'Source Files Included', tooltip: 'You get the editable project files (After Effects/Illustrator).' },
          'Priority Support & Delivery'
        ],
        comparisonFeatures: {
            'Duration': '90 Seconds', 'Style': 'Isometric / VFX', 'Voiceover': 'AI-Generated', 'Resolution': '4K Ultra HD', 'Delivery Time': 'Priority'
        }
      },
      { name: 'Corporate Deep Dive (2 mins)', price: '€3,499', features: [
          'Up to 120 Seconds (2 Minutes)',
          { feature: 'Complex Concept Visualization', tooltip: 'Breaking down intricate processes or data into easy-to-understand visuals.' },
          'High-End Character & Environment Design',
          'Full Creative Direction',
          'AI-Generated Voiceover',
          'Advanced Sound Design & Foley',
          '4K Ultra HD Resolution',
          'Unlimited Revisions',
          'All Source Assets & Files',
          'Dedicated Art Director'
        ],
        comparisonFeatures: {
            'Duration': '2 Minutes', 'Style': 'Complex/High-End', 'Voiceover': 'AI-Generated', 'Resolution': '4K Ultra HD', 'Delivery Time': '3-4 Weeks'
        }
      },
      { name: 'Enterprise Documentary (3 mins)', price: '€4,999', features: [
          'Up to 180 Seconds (3 Minutes)',
          { feature: 'Full Custom Animation Pipeline', tooltip: 'Frame-by-frame or highly complex motion design tailored specifically for TV or large screens.' },
          'Cinematic Storytelling',
          'Multi-Scene & Multi-Character Setup',
          'AI-Generated Voiceover',
          { feature: 'Broadcast Quality Audio Mix', tooltip: 'Professional audio mastering suitable for television and large events.' },
          '4K Ultra HD Resolution',
          'Unlimited Revisions',
          'White-Label Rights',
          'Dedicated Creative Team'
        ],
        comparisonFeatures: {
            'Duration': '3 Minutes', 'Style': 'Cinematic/Custom', 'Voiceover': 'AI-Generated', 'Resolution': '4K Ultra HD', 'Delivery Time': '4-6 Weeks'
        }
      }
    ],
    faqs: [
      {
        question: 'How much does a video animation cost?',
        answer: 'Video animation starts from €399 for a 15-second logo animation or brand intro. A 30-second explainer video with custom characters, scriptwriting, and unlimited revisions starts from €799. A 60-second business motion video with premium motion graphics and a social media resize starts from €1,499. A 90-second video with advanced visual effects and 4K resolution starts from €2,499. A 2-minute corporate video with complex concept visualisation starts from €3,499. A 3-minute cinematic animation with a full custom pipeline starts from €4,999.'
      },
      {
        question: 'What types of animation do you produce?',
        answer: '2D character animation, logo animation and intros, motion graphics, explainer videos, isometric and mixed media styles, social media reels and stories, and corporate documentary-style animations. We work across all common styles and will recommend the right approach for your message, your brand, and your intended platform.'
      },
      {
        question: 'What is the process from brief to finished video?',
        answer: 'The process runs in 5 stages. First is scriptwriting, where we develop or refine your message into a clear narrative. Second is storyboarding, where we sketch every scene so you can visualise the flow before animation starts. Third is voiceover, where we record or generate the narration. Fourth is animation, where the scenes are built and brought to life. Fifth is sound design, where background music and sound effects are mixed in. You review and approve at each stage before we move to the next.'
      },
      {
        question: 'How long does it take to produce a video?',
        answer: 'A 15-second logo animation takes about 5 business days. A 30-second explainer takes 10 business days. A 60-second business video takes 15 business days. Longer and more complex productions take 3 to 4 weeks. If you have a hard deadline, ask about expedited delivery. A 5-day rush turnaround is available as an add-on for €999.'
      },
      {
        question: 'Do you write the script or do I need to provide one?',
        answer: 'We handle scriptwriting from the Explainer (30s) package upward. If you already have a script or a detailed brief you are happy with, we can work from that instead. For the Teaser and Intro package we provide script assistance to help you shape your core message into something that works for a 15-second format.'
      },
      {
        question: 'Who provides the voiceover?',
        answer: 'All packages include an AI-generated voiceover, which we select from a library of natural-sounding voices across multiple accents and tones to match your brand. If you prefer a professional human voiceover artist, this is available as an add-on from €599. We can also work with a voiceover file you record or source yourself.'
      },
      {
        question: 'What resolution and file formats will I receive?',
        answer: 'All packages up to the Business Motion (60s) level are delivered in Full HD 1080p. The Premium Narrative (90s), Corporate Deep Dive, and Enterprise Documentary packages are delivered in 4K Ultra HD. You receive the final video as an MP4 ready for web, social media, and presentations. Source files in After Effects format are available as an add-on for €799.'
      },
      {
        question: 'Can the video be resized for different social media formats?',
        answer: 'Yes. A social media resizing add-on is available for €399 and delivers your video in square (1:1) and vertical (9:16) formats alongside the standard widescreen version. This covers Instagram feed posts, Instagram Reels, TikTok, YouTube Shorts, and Facebook Stories. The Business Motion (60s) package includes the social media resize as standard.'
      },
      {
        question: 'How many revision rounds are included?',
        answer: 'The Teaser and Intro package includes 2 revision rounds. All other packages include unlimited revisions so you can refine the animation until you are fully satisfied. Revisions are reviewed and applied at each stage of production rather than all at the end, which keeps the process moving efficiently.'
      },
      {
        question: 'Will I own the rights to the finished video?',
        answer: 'Yes. Full commercial ownership rights are included in every package. You can use the video on your website, in paid advertising, at conferences, in pitch decks, on social media, or anywhere else without restriction. The Explainer (30s) package and above specifically include commercial usage rights in the package description. The Enterprise Documentary package also includes white-label rights.'
      },
      {
        question: 'Can the video be used in paid advertising?',
        answer: 'Yes. Every video we produce is cleared for use in paid advertising including Google Video Ads, Facebook and Instagram ads, YouTube pre-roll, LinkedIn Sponsored Video, and TikTok ads. For paid ad campaigns we recommend the 15-second Teaser, 30-second Explainer, or the vertical social media resized versions depending on the platform and objective.',
        link: { text: 'Explore our PPC ad management packages', href: '/services/search-engine-marketing-sem?tab=ppc-management' }
      },
      {
        question: 'Do you create animated logo intros?',
        answer: 'Yes. The Teaser and Intro package starting from €399 is specifically designed for 2D logo animation and brand intros at up to 15 seconds. It includes professional script assistance, AI voiceover, background music, and delivery in Full HD. Logo intros are commonly used as openers for YouTube videos, presentations, webinars, and company showreels.',
        link: { text: 'See our logo design packages too', href: '/services/logo-design' }
      }
    ]
  },
  {
    id: 'illustration',
    title: 'Illustration Services',
    description: 'Bespoke illustration services for authors and publishers. Whether it\'s a gripping book cover or a whimsical children\'s book, our artists create visuals that sell.',
    tabs: [
        {
            tabName: 'Book Cover',
            plans: [
                { name: 'E-book Cover', price: '€99', features: [
                    { feature: 'Front Cover Design Only', tooltip: 'Professional design focused solely on the front cover, optimized for digital stores like Kindle.' },
                    { feature: 'Optimized for Amazon KDP/Kindle', tooltip: 'Files formatted to exact specifications required by major self-publishing platforms.' },
                    '2 Design Concepts',
                    { feature: 'Stock Image Manipulation', tooltip: 'Professional blending and editing of licensed stock photos to create unique art.' },
                    'Standard Typography',
                    '3 Rounds of Revisions',
                    { feature: 'High-Res JPG & PNG', tooltip: 'Crystal clear image files suitable for digital screens and thumbnails.' },
                    { feature: '3D Mockup included', tooltip: 'A realistic 3D rendering of your book to use for marketing and social media.' },
                    '100% Ownership Rights'
                ], comparisonFeatures: {
                    'Cover Type': 'Front Only (Digital)', 'Design Concepts': '2', 'Illustration Style': 'Stock Manipulation', 'Revisions': '3 Rounds', '3D Mockup': true
                }},
                { name: 'Standard Print', price: '€199', isPopular: true, features: [
                    { feature: 'Full Wrap (Front, Back, Spine)', tooltip: 'Complete cover design including the spine width calculated for your specific page count.' },
                    { feature: 'Print-Ready PDF (300 DPI)', tooltip: 'Industry-standard high-resolution file required for professional printing presses.' },
                    '3 Design Concepts',
                    'Custom Photo Manipulation',
                    'Advanced Typography',
                    'Unlimited Revisions',
                    { feature: 'Source Files (PSD)', tooltip: 'Original editable Photoshop files, allowing future text or layout changes.' },
                    { feature: '3D Mockup for Marketing', tooltip: 'Realistic 3D visual of your printed book for promotional use.' },
                    { feature: 'Barcode Generation', tooltip: 'Creation of a scannable ISBN barcode for the back of your book.' }
                ], comparisonFeatures: {
                    'Cover Type': 'Full Wrap (Print)', 'Design Concepts': '3', 'Illustration Style': 'Advanced Manipulation', 'Revisions': 'Unlimited', '3D Mockup': true
                }},
                { name: 'Premium Illustrative', price: '€349', features: [
                    { feature: 'Custom Illustrated Cover Art', tooltip: 'Original artwork drawn from scratch, unique to your story, not stock photos.' },
                    { feature: 'Unique Character or Scene Design', tooltip: 'Bespoke design of your main character or a key scene from your book.' },
                    'Full Wrap (Front, Back, Spine)',
                    { feature: 'Hand-Drawn Typography options', tooltip: 'Custom lettering designed specifically for your title, not a standard font.' },
                    'Unlimited Revisions',
                    'Social Media Promo Kit',
                    { feature: 'Source Files (PSD/AI)', tooltip: 'Full access to original design files in Photoshop or Illustrator formats.' },
                    'Priority Support',
                    'Dedicated Art Director'
                ], comparisonFeatures: {
                    'Cover Type': 'Full Wrap (Custom Art)', 'Design Concepts': 'Custom Illustration', 'Illustration Style': 'Hand-Drawn', 'Revisions': 'Unlimited', '3D Mockup': true
                }},
                { name: 'Series Bundle', price: '€599', features: [
                    { feature: 'Design for up to 3 Books', tooltip: 'Complete cover design package for a trilogy or book series.' },
                    { feature: 'Consistent Series Branding', tooltip: 'Ensuring all books look like they belong together for better brand recognition.' },
                    'Full Wrap for Each Book',
                    'Custom Illustrations',
                    'Box Set 3D Mockup',
                    'Unlimited Revisions',
                    { feature: 'Marketing Assets for Launch', tooltip: 'Banners and social media posts to help you launch your series.' },
                    'All Source Files',
                    'VIP Support'
                ], comparisonFeatures: {
                    'Cover Type': '3x Full Wraps', 'Design Concepts': 'Series Branding', 'Illustration Style': 'Consistent Custom Art', 'Revisions': 'Unlimited', '3D Mockup': 'Box Set'
                }}
            ]
        },
        {
            tabName: 'Ebook Illustration',
            plans: [
                { name: 'Spot Art Starter', price: '€149', features: [
                    { feature: '5 Spot Illustrations', tooltip: 'Small, simple illustrations used to decorate chapter endings or break up text.' },
                    { feature: 'Black & White / Grayscale', tooltip: 'Classic style perfect for standard e-readers and print compatibility.' },
                    'Simple Vector Style',
                    '2 Design Concepts per illustration',
                    '2 Rounds of Revisions',
                    { feature: 'Transparent PNG Delivery', tooltip: 'Files with no background, ready to be placed anywhere in your document.' },
                    'Commercial Usage Rights'
                ], comparisonFeatures: {
                    'Quantity': '5 Spot Illustrations', 'Style': 'Simple / Vector', 'Color': 'B&W', 'Revisions': '2 Rounds'
                }},
                { name: 'Chapter Decor', price: '€299', features: [
                    { feature: '10 Chapter Header Illustrations', tooltip: 'Decorative artwork placed at the beginning of each chapter to set the mood.' },
                    'Detailed Line Art Style',
                    'Custom Theme Matching Book',
                    'High-Resolution Files',
                    'Unlimited Revisions',
                    { feature: 'Source Files Included', tooltip: 'Original editable files for future adjustments.' },
                    'Fast Turnaround',
                    'Dedicated Illustrator'
                ], comparisonFeatures: {
                    'Quantity': '10 Headers', 'Style': 'Detailed Line Art', 'Color': 'B&W', 'Revisions': 'Unlimited'
                }},
                { name: 'Visual Highlights', price: '€649', isPopular: true, features: [
                    { feature: '5 Full-Page Illustrations', tooltip: 'Large, detailed illustrations that take up an entire page.' },
                    { feature: 'Full Color', tooltip: 'Vibrant, fully colored artwork to bring your story to life.' },
                    { feature: 'Character Design Included', tooltip: 'We create a consistent look for your characters across all illustrations.' },
                    'Scenic Backgrounds',
                    'Unlimited Revisions',
                    'Source Files Included',
                    'Commercial Rights',
                    'Priority Support'
                ], comparisonFeatures: {
                    'Quantity': '5 Full Page', 'Style': 'Full Color / Painted', 'Color': 'Full Color', 'Revisions': 'Unlimited'
                }},
                { name: 'Narrative Flow', price: '€1,199', features: [
                    { feature: '10 Full-Page Illustrations', tooltip: 'A comprehensive set of illustrations to visualize key moments in your story.' },
                    'Complex Backgrounds & Textures',
                    'Dynamic Lighting & Shading',
                    'Full Color',
                    'Unlimited Revisions',
                    'Source Files & Ownership',
                    { feature: '3D Ebook Mockup', tooltip: 'Marketing visual showing your book on a tablet or e-reader.' },
                    'Dedicated Art Director'
                ], comparisonFeatures: {
                    'Quantity': '10 Full Page', 'Style': 'Premium Digital Art', 'Color': 'Full Color', 'Revisions': 'Unlimited'
                }},
                { name: 'Graphic Story', price: '€2,199', features: [
                    { feature: '20 Illustrations (Graphic Style)', tooltip: 'Sequential art style similar to comics or graphic novels.' },
                    { feature: 'Paneling & Text Bubble Layout', tooltip: 'We arrange the art and dialogue in standard comic panels.' },
                    'Consistent Character Models',
                    'Action-Oriented Poses',
                    'Full Color',
                    'Unlimited Revisions',
                    'All Source Files',
                    'VIP Support'
                ], comparisonFeatures: {
                    'Quantity': '20 Illustrations', 'Style': 'Graphic Novel / Comic', 'Color': 'Full Color', 'Revisions': 'Unlimited'
                }},
                { name: 'Premium Artistry', price: '€3,499', features: [
                    { feature: '30+ Illustrations (Mix of Sizes)', tooltip: 'A complete visual suite including spots, headers, and full-page art.' },
                    'Cinematic Concept Art Style',
                    { feature: 'Full Book Typesetting', tooltip: 'We handle the text layout and formatting for the entire book.' },
                    'Cover Design Included',
                    'Marketing Assets Kit',
                    'Unlimited Revisions',
                    'White-Label Rights',
                    'Dedicated Creative Team'
                ], comparisonFeatures: {
                    'Quantity': '30+ Mixed', 'Style': 'Cinematic Masterpiece', 'Color': 'Full Color', 'Revisions': 'Unlimited'
                }}
            ]
        },
        {
            tabName: 'Children Book Illustration',
            plans: [
                { name: 'Character Concept', price: '€149', features: [
                    { feature: 'Design of 1 Main Character', tooltip: 'Visualizing your protagonist to establish the style of the book.' },
                    'Front, Side, Back Views',
                    { feature: '3 Facial Expressions', tooltip: 'Showing your character happy, sad, and surprised to define their personality.' },
                    'Full Color',
                    'Unlimited Revisions',
                    'High-Res Files (300 DPI)',
                    { feature: '100% Ownership', tooltip: 'You own the character design and can use it for merchandise or sequels.' },
                    'Great for Pitching Stories'
                ], comparisonFeatures: {
                    'Scope': 'Single Character Sheet', 'Style': 'Cartoon / Whimsical', 'Revisions': 'Unlimited'
                }},
                { name: 'The Cast', price: '€349', features: [
                    { feature: 'Design of 3 Characters', tooltip: 'Perfect for defining the interactions between your main characters.' },
                    'Full Character Sheets (Turnarounds)',
                    'Dynamic Action Poses',
                    'Interaction Studies',
                    'Full Color',
                    'Unlimited Revisions',
                    'High-Res & Source Files',
                    'Dedicated Illustrator'
                ], comparisonFeatures: {
                    'Scope': 'Full Cast Design', 'Style': 'Cartoon / Whimsical', 'Revisions': 'Unlimited'
                }},
                { name: 'Visual Blueprint', price: '€699', features: [
                    { feature: 'Full Book Storyboard (up to 24 pages)', tooltip: 'A rough sketch of every page to plan the visual flow before final art begins.' },
                    { feature: 'Rough Sketches for Every Page', tooltip: 'Pencil-style drawings to approve composition and layout.' },
                    { feature: 'Layout Planning for Text', tooltip: 'Allocating space for your story text so it doesn\'t cover important art.' },
                    'Character Consistency Check',
                    'Unlimited Revisions on Sketches',
                    'PDF Delivery',
                    'Consultation with Illustrator',
                    'Perfect for Publisher Pitches'
                ], comparisonFeatures: {
                    'Scope': 'Full Book Storyboard', 'Style': 'Rough Sketch', 'Revisions': 'Unlimited'
                }},
                 { name: 'Standard Story (12pg)', price: '€1,699', isPopular: true, features: [
                    { feature: '10-12 Full Color Illustrations', tooltip: 'Complete artwork for a short story or board book.' },
                    { feature: 'Single Page or Spread Mix', tooltip: 'Combination of single-page art and double-page spreads spanning the open book.' },
                    'Cover Design Included (Front & Back)',
                    { feature: 'Professional Typesetting', tooltip: 'We place your text professionally on the pages using readable, kid-friendly fonts.' },
                    { feature: 'Print-Ready PDF (KDP/IngramSpark)', tooltip: 'Files ready to upload directly to Amazon KDP or IngramSpark without error.' },
                    'Unlimited Revisions',
                    'Source Files Included',
                    '3D Mockups for Marketing'
                ], comparisonFeatures: {
                    'Scope': 'Completed Short Book', 'Style': 'Full Color Digital', 'Revisions': 'Unlimited'
                }},
                { name: 'The Full Story (24pg)', price: '€2,999', features: [
                    { feature: '20-24 Full Color Illustrations', tooltip: 'Standard industry length for most picture books.' },
                    'Premium Cover Design (Front, Back, Spine)',
                    { feature: 'Complex Backgrounds & Textures', tooltip: 'Rich, immersive environments with high attention to detail and texture.' },
                    'Professional Typesetting & Formatting',
                    { feature: 'eBook Conversion (ePub/Mobi)', tooltip: 'Your book converted into a format readable on Kindle and iPads.' },
                    'Marketing Assets (Social Media Kit)',
                    'Unlimited Revisions',
                    'Source Files & Ownership'
                ], comparisonFeatures: {
                    'Scope': 'Standard Industry Book', 'Style': 'Premium Texture/Paint', 'Revisions': 'Unlimited'
                }},
                 { name: 'Publishing Master (32pg)', price: '€4,999', features: [
                    { feature: '28-32 Full Color Illustrations', tooltip: 'Extended length for more complex stories.' },
                    'High-End Cinematic Style',
                    'Deluxe Cover with Effects',
                    'Full Formatting (Print + Ebook)',
                    { feature: 'KDP Upload Assistance', tooltip: 'We guide you through the process of uploading your files to Amazon.' },
                    { feature: 'Author Website Landing Page', tooltip: 'A one-page website design to help you sell your book.' },
                    { feature: 'Animated Book Trailer (15s)', tooltip: 'A short video bringing your characters to life for social media ads.' },
                    'Unlimited Revisions',
                    'VIP Priority Support'
                ], comparisonFeatures: {
                    'Scope': 'Deluxe Publishing Package', 'Style': 'Cinematic High-End', 'Revisions': 'Unlimited'
                }}
            ]
        }
    ],
    faqs: [
      {
        question: 'How much does book cover design cost?',
        answer: 'Book cover design starts from €99 for an e-book front cover with 2 design concepts, stock image manipulation, and a 3D mockup, optimised for Amazon KDP and Kindle. A full wrap cover for print (front, back, and spine) with 3 concepts and a print-ready PDF starts from €199. A premium illustrative cover with fully custom hand-drawn artwork and a social media promo kit starts from €349. A series bundle covering up to 3 books with consistent branding and marketing assets starts from €599.'
      },
      {
        question: 'What types of book covers do you design?',
        answer: 'We design e-book covers optimised for Kindle and Amazon KDP, full wrap print covers for self-publishing platforms, custom illustrated covers with original hand-drawn artwork, and series bundles for trilogies and book collections. All print covers are delivered as print-ready PDFs at 300 DPI with correct bleed and a generated barcode for the back cover where needed.'
      },
      {
        question: 'Will my cover work for both print and digital publishing?',
        answer: 'Yes. From the Standard Print package upward, we design a full wrap cover that works for print-on-demand platforms like IngramSpark and KDP Print, and we also provide a digital front-only version optimised for online store thumbnails on Amazon, Apple Books, and Kobo. We calculate the spine width based on your page count and paper type.'
      },
      {
        question: 'Do you design covers for book series?',
        answer: 'Yes. The Series Bundle package starting from €599 covers up to 3 books with consistent series branding, custom illustrations for each book, a box set 3D mockup, and marketing assets for launch. The branding across the series is designed to work individually and as a set so customers immediately recognise the books as part of the same collection.',
        link: { text: 'See all our book cover packages', href: '/services/illustration?tab=book-cover' }
      },
      {
        question: 'How much does ebook illustration cost?',
        answer: 'Ebook illustration starts from €149 for the Spot Art Starter package, which includes a small number of decorative spot illustrations to support your text. A Chapter Decor package with illustrations for each chapter starts from €299. A Visual Highlights package with full-page or half-page illustrations starts from €649. A Narrative Flow package with integrated sequential illustrations starts from €1,199. Graphic story illustration starts from €2,199. A full Premium Artistry package with consistent high-end artwork throughout starts from €3,499.',
        link: { text: 'See all our ebook illustration packages', href: '/services/illustration?tab=ebook-illustration' }
      },
      {
        question: 'What does ebook illustration include?',
        answer: 'Ebook illustration packages cover spot art, chapter heading illustrations, full-page scenes, character portraits, and decorative borders and motifs depending on the package you choose. All illustrations are delivered in high-resolution formats suitable for both digital and print publishing. Source files are included on higher packages.'
      },
      {
        question: 'What style of illustration do you use for ebooks?',
        answer: 'We work across a range of styles including clean line art, watercolour-style digital painting, detailed ink-style illustration, and minimalist vector illustration. When you brief us, share any reference images that capture the feel you are going for and we will match or adapt our style accordingly. Consistency across all illustrations in your book is something we treat as non-negotiable.'
      },
      {
        question: 'How much does children\'s book illustration cost?',
        answer: 'Children\'s book illustration starts from €149 for a Character Concept, which delivers a fully designed main character in multiple poses. A full cast with up to 4 characters starts from €349. A Visual Blueprint with character designs and 3 to 5 sample spreads starts from €699. A Standard Story covering 12 pages of full illustration starts from €1,699. A Full Story covering 24 pages starts from €2,999. A Publishing Master covering 32 pages with print-ready files and an author bio page starts from €4,999.',
        link: { text: 'See all our children\'s book packages', href: '/services/illustration?tab=children-book-illustration' }
      },
      {
        question: 'How many pages are included in each children\'s book package?',
        answer: 'The Standard Story package covers 12 illustrated pages. The Full Story package covers 24 illustrated pages. The Publishing Master package covers 32 illustrated pages. All page counts refer to illustrated spreads. If your manuscript is longer, additional pages can be added at a per-page rate. Get in touch with your page count and we will give you an accurate quote.'
      },
      {
        question: 'Do you design characters and scenes from scratch?',
        answer: 'Yes. Every character, scene, and background is created as original artwork for your book. We do not use stock illustrations or clipart. The character design phase is always the first step, where we develop the main character and supporting cast in multiple poses and expressions before any scene illustration begins. This ensures the characters look consistent throughout the entire book.'
      },
      {
        question: 'How long does an illustration project take?',
        answer: 'A book cover design takes 3 to 5 business days for standard packages and up to 7 to 10 business days for premium illustrative covers. Ebook illustration timelines depend on the number of pieces and range from 1 to 3 weeks. Children\'s book projects take between 4 and 12 weeks depending on page count and complexity. We give you a clear milestone schedule at the start of every project.'
      },
      {
        question: 'Do I own the rights to the illustrations after the project?',
        answer: 'Yes. Full commercial ownership rights transfer to you on completion of every illustration project. You can publish, sell, and distribute the work without restriction or ongoing royalties. The illustrations are yours permanently. We retain the right to display the finished work in our portfolio unless you specifically request otherwise.'
      }
    ]
  }
];
