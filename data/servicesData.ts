
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
          { name: 'Budget', price: '€449', features: ['4-5 pages Custom Website', { feature: 'Basic on-page SEO', tooltip: 'We optimize your page titles, meta descriptions, and keywords to improve visibility on search engines for relevant queries.' }, { feature: 'Cross Browser Compatibility', tooltip: 'Ensures your website looks and works correctly on all major web browsers like Chrome, Firefox, and Safari.' }, { feature: 'Lead capture form with auto-email response', tooltip: 'Collect visitor details and automatically send them a confirmation or welcome email.' }, 'Social media link integration', 'Google Map embed for location', '1 Design Concept', '5 Stock Photos', '1 Banner Design', 'Complete Deployment', 'Dedicated Project Manager', '100% Ownership Rights', '100% Satisfaction Guarantee', '100% Money Back-Guarantee'],
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
          { name: 'Standard', price: '€749', isPopular: true, features: ['6-8 pages Custom Website', { feature: 'Mobile Responsive Website', tooltip: 'Your website will look and function perfectly on all devices, including desktops, tablets, and smartphones.' }, 'Custom visuals & icons', { feature: 'Enhanced SEO for key pages', tooltip: 'Advanced SEO techniques applied to your most important pages to boost their ranking for targeted keywords.' }, 'Click-to-call & WhatsApp chat functionality', 'Testimonial or case study section', { feature: 'Blog with category filters', tooltip: 'A section to share news and articles, organized by topics for easy navigation.' }, 'Image gallery or portfolio section', 'Embedded Video (Customer will provide)', { feature: 'Secure admin tools for easy updates', tooltip: 'A user-friendly dashboard that allows you to manage and update your website content without any coding knowledge.' }, 'Cross Browser Compatibility', 'Lead capture form with auto-email response', 'Social media link integration', 'Google Map embed for location', 'Stock Photos', 'Complete Deployment', 'Dedicated Project Manager', '100% Ownership Rights', '100% Satisfaction Guarantee', '100% Money Back-Guarantee'],
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
          { name: 'Professional', price: '€1299', features: ['8-10 pages Custom Website', { feature: 'Appointment Booking System/calendar integration', tooltip: 'Allow clients to book appointments with you directly through your website.' }, 'Sliding Promotional Banners', 'Advanced Animations & Scroll Effects', { feature: 'Google Analytics setup', tooltip: 'We integrate Google Analytics to track your website traffic, user behavior, and other key metrics, providing valuable insights for your business.' }, 'Live chat integration', 'Social media feed display', { feature: 'Newsletter signup with email automation', tooltip: 'Capture leads with a newsletter form and automatically send welcome emails or add them to your marketing campaigns.' }, 'FAQ or resources section', 'Priority Support', { feature: 'Website Optimization Package for Speed', tooltip: 'We implement techniques like image compression, caching, and code minification to ensure your website loads quickly for all users.' }, 'Advanced Hover Effects', 'Search Engine Submission', 'Mobile Responsive Website', 'Custom visuals & icons', 'Enhanced SEO for key pages', 'Click-to-call & WhatsApp chat functionality', 'Testimonial or case study section', 'Blog with category filters', 'Image gallery or portfolio section', 'Embedded Video (Customer will provide)', 'Secure admin tools for easy updates', 'Cross Browser Compatibility', 'Lead capture form with auto-email response', 'Social media link integration', 'Google Map embed for location', 'Stock Photos', 'Complete Deployment', 'Dedicated Project Manager', '100% Ownership Rights', '100% Satisfaction Guarantee', '100% Money Back-Guarantee'],
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
          { name: 'Premium', price: '€1899', features: ['10-15 Pages Custom Website', { feature: 'Membership Portal', tooltip: 'A restricted area of your site accessible only to registered members or subscribers.' }, 'Customer Signup Area', { feature: 'Multi-language option', tooltip: 'Make your website accessible to a global audience by offering it in multiple languages.' }, { feature: 'Advanced local SEO (schema, geo-targeting)', tooltip: 'Optimize your site for local search results, including schema markup for rich snippets and targeting specific geographic areas.' }, { feature: 'Content Management System Integration', tooltip: 'We integrate a user-friendly CMS like WordPress, allowing you to easily update your website\'s content, images, and blog posts without needing to code.' }, 'Dedicated Team of Designers Developers', '30 Days Post-Launch Support', '1 Hour Strategy Call Included', 'Email Auto Responder', 'Appointment Booking System/calendar integration', 'Sliding Promotional Banners', 'Advanced Animations & Scroll Effects', 'Google Analytics setup', 'Live chat integration', 'Social media feed display', 'Newsletter signup with email automation', 'FAQ or resources section', 'Priority Support', 'Website Optimization Package for Speed', 'Advanced Hover Effects', 'Search Engine Submission', 'Mobile Responsive Website', 'Custom visuals & icons', 'Enhanced SEO for key pages', 'Click-to-call & WhatsApp chat functionality', 'Testimonial or case study section', 'Blog with category filters', 'Image gallery or portfolio section', 'Embedded Video (Customer will provide)', 'Secure admin tools for easy updates', 'Cross Browser Compatibility', 'Lead capture form with auto-email response', 'Google Map embed for location', 'Stock Photos', 'Complete Deployment', 'Dedicated Project Manager', '100% Ownership Rights', '100% Satisfaction Guarantee', '100% Money Back-Guarantee'],
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
          { name: 'Ultimate', price: '€2499', features: ['Unlimited Pages Custom Website', '2 Design Concepts', { feature: 'Online Payment Module Integration (Optional)', tooltip: 'Accept payments directly on your site for services or digital products.' }, { feature: 'CRM integration (HubSpot, Mailchimp)', tooltip: 'Connect your website forms directly to your Customer Relationship Management (CRM) software to streamline lead management.' }, { feature: 'Advanced Forms (Multi-step/Conditional)', tooltip: 'Complex forms that change based on user input, ideal for detailed inquiries or applications.' }, 'Multilingual Setup', '1 Month Maintenance', 'Premium graphics/illustrations/animations', 'Custom lead magnets (PDFs, checklists)', 'Multi-location setup', { feature: 'Blog automation (RSS or YouTube)', tooltip: 'Automatically populate your blog with content from your RSS feeds or YouTube channel.' }, 'VIP Support Access', 'Advanced site analytics dashboard setup', 'Membership Portal', 'Customer Signup Area', 'Multi-language option', 'Advanced local SEO (schema, geo-targeting)', 'Content Management System Integration', 'Dedicated Team of Designers Developers', '30 Days Post-Launch Support', '1 Hour Strategy Call Included', 'Email Auto Responder', 'Appointment Booking System/calendar integration', 'Sliding Promotional Banners', 'Advanced Animations & Scroll Effects', 'Google Analytics setup', 'Live chat integration', 'Social media feed display', 'Newsletter signup with email automation', 'FAQ or resources section', 'Priority Support', 'Website Optimization Package for Speed', 'Advanced Hover Effects', 'Search Engine Submission', 'Mobile Responsive Website', 'Custom visuals & icons', 'Enhanced SEO for key pages', 'Click-to-call & WhatsApp chat functionality', 'Testimonial or case study section', 'Blog with category filters', 'Image gallery or portfolio section', 'Embedded Video (Customer will provide)', 'Secure admin tools for easy updates', 'Cross Browser Compatibility', 'Lead capture form with auto-email response', 'Google Map embed for location', 'Stock Photos', 'Complete Deployment', 'Dedicated Project Manager', '100% Ownership Rights', '100% Satisfaction Guarantee', '100% Money Back-Guarantee'], note: 'Fair Use Policy (FUP) applies: Up to 30 pages are included.',
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
                'CMS / Admin Panel': false,
                'Internationalization': false,
                'Advanced Features': false,
                'Post-Launch Support': false
            }
          },
          { name: 'Standard Store', price: '€649', isPopular: true, features: ['Up to 30 products', { feature: 'Advanced navigation setup', tooltip: 'Organization of products into collections, categories, and intuitive menus for better user experience.' }, 'Mobile-responsive design', 'Homepage banner/slider design', 'Checkout & payment gateway setup (PayPal, Stripe, cards)', 'Mini shopping cart integration', 'Basic shipping configuration', 'Email order notifications', 'Basic store styling', 'Social media shop link', 'Complete Deployment', 'Dedicated Project Manager', '100% Ownership Rights', '100% Satisfaction Guarantee', '100% Money Back-Guarantee'],
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
          { name: 'Advanced Store', price: '€999', features: ['Custom design matching your brand', 'Add up to 75 products', 'Full shopping cart', 'payment integration', { feature: 'Smart product search', tooltip: 'Advanced search bar that predicts and suggests products as customers type.' }, { feature: 'Basic app installations', tooltip: 'Installation of essential e-commerce apps for features like product reviews, live chat, or a customer wishlist.' }, 'Shipping & tax configuration', 'Email order notifications', 'Product reviews integration', 'Store analytics dashboard', { feature: 'Low stock alerts', tooltip: 'Get notified automatically when product inventory drops below a certain level.' }, 'Social media integration', 'Advanced navigation setup (collections, categories, menus)', 'Mobile-responsive design', 'Complete Deployment', 'Dedicated Project Manager', '100% Ownership Rights', '100% Satisfaction Guarantee', '100% Money Back-Guarantee'],
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
          { name: 'Professional Store', price: '€1499', features: ['Up to 125 products', { feature: 'Abandoned cart recovery setup', tooltip: 'Automatically send reminder emails to customers who add products to their cart but don\'t complete the purchase, helping you recover lost sales.' }, 'Blog setup for content marketing', 'Product reviews & rating system integration', 'Promotional banners & announcement bars', { feature: 'Upsell & cross-sell functionality', tooltip: 'Suggest related or higher-value products to customers during browsing or checkout to increase order value.' }, 'Discount codes & coupon setup', 'Gift card setup', 'Newsletter popup', 'Advanced product filtering', { feature: 'Product Variants (Size, Color, etc.)', tooltip: 'Support for products that come in multiple options, like different sizes or colors.' }, 'Multi-payment gateways (Stripe, PayPal, Apple Pay, Klarna)', { feature: 'Email marketing integration', tooltip: 'Connect your store to platforms like Klaviyo or Mailchimp to build email lists and run marketing campaigns.' }, 'Performance & sales analytics dashboard', 'Wishlist, reviews, & loyalty system', 'Smart product search', 'Shipping & tax configuration', 'Email order notifications', 'Low stock alerts', 'Social media integration', 'Advanced navigation setup (collections, categories, menus)', 'Mobile-responsive design', 'Complete Deployment', 'Dedicated Project Manager', '100% Ownership Rights', '100% Satisfaction Guarantee', '100% Money-Back Guarantee'],
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
          { name: 'Business Store', price: '€2499', features: ['Up to 500 products', 'Conversion-Focused Design', { feature: 'Customer Login Area', tooltip: 'Allow customers to create accounts, view order history, and manage their details.' }, { feature: 'Multi-currency support', tooltip: 'Display prices in different currencies based on the customer\'s location.' }, 'Multiple Shipping Module Integration', { feature: 'Advanced shipping rules', tooltip: 'Set complex shipping rates based on weight, location, or cart value (e.g., free shipping over €50).' }, 'Inventory management system setup', { feature: 'Loyalty program / reward points', tooltip: 'Encourage repeat business by rewarding customers with points for purchases.' }, 'Custom Shopping Cart Integration', { feature: 'CMS / Backend Administrative System', tooltip: 'A powerful and secure backend system that gives you full control over your products, orders, customers, and store settings.' }, 'Store speed & performance optimization', 'Free unlimited revisions', 'Abandoned cart recovery setup', 'Blog setup for content marketing', 'Product reviews & rating system integration', 'Promotional banners & announcement bars', 'Upsell & cross-sell functionality', 'Discount codes & coupon setup', 'Gift card setup', 'Newsletter popup', 'Advanced product filtering', 'Product Variants (Size, Color, etc.)', 'Multi-payment gateways (Stripe, PayPal, Apple Pay, Klarna)', 'Email marketing integration (Klaviyo, Mailchimp, etc.)', 'Performance & sales analytics dashboard', 'Wishlist, reviews, & loyalty system', 'Smart product search', 'Tax configuration', 'Email order notifications', 'Low stock alerts', 'Social media integration', 'Advanced navigation setup (collections, categories, menus)', 'Mobile-responsive design', 'Complete Deployment', 'Dedicated Project Manager', '100% Ownership Rights', '100% Satisfaction Guarantee', '100% Money-Back Guarantee'],
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
          { name: 'Enterprise Store', price: '€4999', features: ['Unlimited Products', 'High-end interactive custom design', 'unique logo concepts', 'Unlimited categories & advanced product filters', { feature: 'Wholesale / B2B functionality', tooltip: 'Enable special pricing and ordering options for your wholesale or business-to-business customers.' }, { feature: 'ERP & CRM integrations', tooltip: 'Seamlessly connect your e-commerce store with your existing enterprise resource planning (ERP) or customer relationship management (CRM) systems.' }, { feature: 'Digital Downloads or Subscriptions', tooltip: 'Sell digital files or set up recurring payments for subscription boxes or services.' }, 'Invoicing System', { feature: 'POS & Inventory Sync', tooltip: 'Sync your online store with your physical Point of Sale system to manage inventory in real-time.' }, 'Multi-currency & multi-language support', { feature: 'Affiliate & referral programs', tooltip: 'Let other people market your products for a commission, tracking sales automatically.' }, 'Advanced analytics & reporting dashboard setup', 'Admin panel for complete store control', 'Social media page linking & live feed integration', 'SEO-optimized & mobile responsive', 'Full deployment + W3C validation', 'Priority support & 30-day post-launch assistance', { feature: 'Google Analytics & Facebook Pixel integration', tooltip: 'Advanced tracking setup for in-depth analysis of user behavior and for running effective retargeting ad campaigns.' }, 'Complete Database Creation', 'Custom Dynamic Forms', 'Customer Login Area (Sign-Up & Sign-In)', 'Multiple Shipping Module Integration', 'Advanced shipping rules (zones, weight, custom rates)', 'Loyalty program / reward points integration', 'Custom Shopping Cart Integration', 'Store speed & performance optimization', 'Free unlimited revisions', 'abandoned cart recovery setup', 'Blog setup for content marketing', 'Product reviews & rating system integration', 'Promotional banners & announcement bars', 'Upsell & cross-sell functionality', 'Discount codes & coupon setup', 'Gift card setup', 'Newsletter popup', 'Advanced product filtering', 'Product Variants (Size, Color, etc.)', 'Multi-payment gateways (Stripe, PayPal, Apple Pay, Klarna)', 'Email marketing integration (Klaviyo, Mailchimp, etc.)', 'Performance & sales analytics dashboard', 'Wishlist, reviews, & loyalty system', 'Smart product search', 'Tax configuration', 'Email order notifications', 'Low stock alerts', 'Social media integration', 'Advanced navigation setup (collections, categories, menus)', 'Mobile-responsive design', 'Complete Deployment', 'Dedicated Project Manager', '100% Ownership Rights', '100% Satisfaction Guarantee', '100% Money-Back Guarantee'], note: 'Fair Use Policy (FUP) applies: Up to 1000 products are included.',
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
      },
      {
        question: 'Do I need to provide my own content and images?',
        answer: 'It depends. If you have existing content and high-quality images, we can use them. However, if you need help, we can provide stock photos and professional copywriting services as an add-on or as part of our higher-tier packages.'
      },
      {
        question: 'What platform do you use for website development?',
        answer: 'We primarily build on WordPress for its flexibility and ease of use, but we are also proficient in Shopify for e-commerce, and can develop custom solutions using React/Next.js for specific needs.'
      },
      {
        question: 'Is hosting and domain included in the package price?',
        answer: 'Hosting and domain registration are typically separate costs as they are recurring annual fees paid to providers. However, we can assist you in setting these up and selecting the best provider for your needs.'
      },
      {
        question: 'Can you help with logo design if I don\'t have one?',
        answer: 'Yes, absolutely! We offer dedicated Logo Design & Branding packages. If you bundle a logo design with a website package, we can often offer a special discount.'
      }
    ]
  },
  {
    id: 'seo',
    title: 'Search Engine Optimization (SEO)',
    description: 'Boost your visibility and climb the search rankings. Our SEO strategies are designed to drive organic traffic and deliver measurable results.',
    plans: [
        { name: 'Startup', price: '€299', priceDetails: '/month', features: [
            { feature: 'Site Audit', tooltip: 'A comprehensive health check of your website to identify technical issues hindering your search performance.' },
            '5-10 Keywords',
            { feature: 'Competitor Analysis', tooltip: 'We analyze your top competitors to understand their strengths and find opportunities for you to outperform them.' },
            { feature: 'Keyword Grouping', tooltip: 'Organizing your target keywords into logical groups to create focused and relevant content clusters.' },
            { feature: 'Keyword Mapping', tooltip: 'Assigning specific keywords to specific pages on your site to prevent pages from competing with each other.' },
            { feature: 'XML Sitemap Optimization', tooltip: 'Creating and optimizing a map of your website to help search engines find and crawl your pages efficiently.' },
            { feature: 'Robots.txt Check', tooltip: 'Ensuring this file correctly instructs search engine bots on which pages to crawl and which to ignore.' },
            { feature: 'Meta Tags Creation', tooltip: 'Writing compelling Title Tags and Meta Descriptions that appear in search results to improve click-through rates.' },
            'Web Content Optimization',
            'Keyword Optimization',
            { feature: 'Anchor Text Optimization', tooltip: 'Optimizing the clickable text in hyperlinks to help search engines understand what the linked page is about.' },
            { feature: 'Google Analytics Installation', tooltip: 'Setting up Google\'s tool to track website traffic and user behavior.' },
            { feature: 'Google Webmaster Installation', tooltip: 'Setting up Google Search Console to monitor your site\'s presence in Google Search results.' },
            'Webpage Copywriting (1000 words)',
            '2 Articles (400 words)',
            '2 On-Page Blogs (500 words)',
            '2 Off-Page Blogs (500 words)',
            { feature: 'Social Bookmarking', tooltip: 'Saving your website links on public social bookmarking sites to gain backlinks and traffic.' },
            'Forums/FAQ\'s',
            'Link Building',
            { feature: 'Directory Submission', tooltip: 'Submitting your website URL to various web directories to build authority.' },
            'Local Business Listings',
            'Monthly Reporting',
            'Google Analytics Report',
            'Monthly Progress Report',
            'Dedicated Project Manager'
        ],
            comparisonFeatures: {
                'Strategy & Audits': 'Site Audit', 'Keywords': '5-10', 'Competitor Analysis': true, 'On-Page SEO': 'Standard', 'Technical SEO': 'Standard', 'Analytics & GMB': 'GA + GSC Install', 'Content: Copywriting': '1000 words', 'Content: Articles': '2 (400 words)', 'Content: On-Page Blogs': '2 (500 words)', 'Content: Off-Page Blogs': '2 (500 words)', 'Off-Page SEO': 'Standard', 'Reporting': 'Monthly', 'Support': 'Dedicated PM'
            }
        },
        { name: 'Standard', price: '€499', priceDetails: '/month', isPopular: true, features: [
            'Site Audit',
            '20-25 Keywords',
            'Competitor Analysis',
            'Keyword Grouping',
            'Keyword Mapping',
            'XML Sitemap Optimization',
            'Robots.txt Check',
            'Meta Tags Creation',
            'Web Content Optimization',
            'Keyword Optimization',
            'Anchor Text Optimization',
            { feature: 'Landing Page Optimization', tooltip: 'Improving specific pages to maximize conversions (sales or leads) from visitors.' },
            { feature: 'Image Optimization', tooltip: 'Compressing images and adding Alt Tags to improve load speed and help search engines understand your visuals.' },
            { feature: 'Conversion Tracking', tooltip: 'Setting up tools to measure specific actions users take, like form submissions or purchases.' },
            'Google Analytics Installation',
            'Google Webmaster Installation',
            { feature: 'Google My Business (GMB) Listing', tooltip: 'Optimizing your business profile on Google Maps and Search for local visibility.' },
            'Google Places Submissions',
            'Webpage Copywriting (2000 Words)',
            '4 Articles (400 Words)',
            '4 On-Page Blogs (500 Words)',
            '4 Off-Page Blogs (500 Words)',
            { feature: '1 Press Releases', tooltip: 'Writing and distributing news about your company to media outlets for exposure and backlinks.' },
            'Promotional Content',
            '1 Infographics',
            'Business Profiles',
            'Social Bookmarking',
            'Classifieds',
            'Forums / FAQ\'s',
            'Link Building',
            'Directory Submission',
            'Local Business Listings',
            'Google Analytics Report',
            'Monthly Progress Report',
            'Dedicated Project Manager'
        ],
            comparisonFeatures: {
                'Strategy & Audits': 'Site Audit', 'Keywords': '20-25', 'Competitor Analysis': true, 'On-Page SEO': 'Advanced', 'Technical SEO': 'Standard', 'Analytics & GMB': 'GA + GSC + GMB', 'Content: Copywriting': '2000 words', 'Content: Articles': '4 (400 words)', 'Content: On-Page Blogs': '4 (500 words)', 'Content: Off-Page Blogs': '4 (500 words)', 'Content: Press Releases': '1', 'Content: Infographics': '1', 'Off-Page SEO': 'Advanced', 'Reporting': 'Monthly', 'Support': 'Dedicated PM'
            }
        },
        { name: 'Advanced', price: '€999', priceDetails: '/month', features: [
            'Comprehensive Site & Technical SEO Audit',
            '40-60 Keywords (clustered by intent & funnel stage)',
            { feature: 'Competitor Gap Analysis', tooltip: 'Identifying keywords and backlinks your competitors have but you don\'t.' },
            'Keyword Grouping & Mapping',
            { feature: 'Page Speed & Core Web Vitals Review', tooltip: 'Analyzing site performance metrics that Google uses as ranking factors (loading, interactivity, stability).' },
            'Mobile Usability Audit',
            'Full XML Sitemap Optimization',
            'Robots.txt Validation',
            'Meta Tags Creation & CTR Optimization',
            'Web Content Optimization (existing pages)',
            { feature: 'Keyword Optimization (LSI)', tooltip: 'Using Latent Semantic Indexing (related terms) to help search engines better understand your content context.' },
            'Anchor Text Optimization',
            'Landing Page Optimization (A/B test variants)',
            'Image Optimization (alt tags + compression)',
            { feature: 'Schema Markup Implementation', tooltip: 'Adding code that helps search engines return more informative results (rich snippets) like reviews, FAQs, or events.' },
            { feature: 'Internal Linking Strategy', tooltip: 'Optimizing how pages on your site link to one another to distribute authority and help navigation.' },
            { feature: 'Conversion Tracking (GTM)', tooltip: 'Advanced tracking setup using Google Tag Manager for flexible and detailed data collection.' },
            'Webpage Copywriting (3,000 words total)',
            '6 Articles (600 words each)',
            '6 On-Page Blogs (700 words each)',
            '4 Off-Page Blogs (600 words each)',
            '2 Press Releases',
            '2 Infographics',
            { feature: 'Basic Video SEO', tooltip: 'Optimizing titles, tags, and descriptions for your videos on YouTube and your site.' },
            'Content Calendar & Topic Strategy',
            'Business Profiles & Local Citations',
            { feature: 'High-DA Guest Posts (2/month)', tooltip: 'Publishing articles on other high-authority websites to earn powerful backlinks.' },
            'Social Bookmarking',
            'Classifieds & Forums',
            'Targeted Link Building Campaign',
            'Directory Submissions',
            'Local Business Listings & Map Citations',
            'Niche Directory Submissions',
            { feature: 'Broken Link Building', tooltip: 'Finding broken links on other sites and suggesting your content as a replacement to gain a backlink.' },
            'Monthly Performance Report',
            'Keyword Ranking Report',
            'Google Analytics & Search Console Insights',
            'Traffic Growth & Conversion Summary',
            'Quarterly Strategy Call',
            'Dedicated SEO Strategist',
            'Monthly Strategy Review Meeting',
            'Competitor Watchlist Alerts',
            'Email & Chat Support (Priority)'
        ],
            comparisonFeatures: {
                'Strategy & Audits': 'Comprehensive', 'Keywords': '40-60 (clustered)', 'Competitor Analysis': 'Gap Analysis', 'On-Page SEO': 'Full Suite', 'Technical SEO': 'Advanced (Schema, Speed)', 'Analytics & GMB': 'GTM Tracking', 'Content: Copywriting': '3000 words', 'Content: Articles': '6 (600 words)', 'Content: On-Page Blogs': '6 (700 words)', 'Content: Off-Page Blogs': '4 (600 words)', 'Content: Press Releases': '2', 'Content: Infographics': '2', 'Content: Video SEO': 'Basic', 'Off-Page SEO': 'Targeted + Guest Posts', 'Reporting': 'Performance Insights', 'Support': 'Dedicated Strategist'
            }
        },
        { name: 'Enterprise', price: '€1999', priceDetails: '/month', features: [
            'Enterprise-Level SEO Audit (Technical + UX + Conversion)',
            '100-300 Keywords / Topic Clusters',
            'Competitor Intelligence & Market Share Analysis',
            'Content Gap & Opportunity Mapping',
            { feature: 'Backlink Profile Audit (Toxic Link Removal)', tooltip: 'Analyzing your backlinks and disavowing harmful, low-quality links that could hurt your ranking.' },
            'Technical Health Monitoring Dashboard',
            'Advanced Schema Markup (Product, Review, Organization)',
            'Custom Meta & Title Tag Strategy',
            'Full Content Optimization for 15+ Pages',
            { feature: 'Conversion Rate Optimization (CRO) Setup', tooltip: 'Systematic process of increasing the percentage of website visitors who take a desired action.' },
            'Core Web Vitals Optimization',
            { feature: 'Internal Linking & Silo Structure Design', tooltip: 'Grouping related content into distinct sections (silos) to establish topical authority.' },
            'Multilingual SEO (if applicable)',
            { feature: 'Voice Search Optimization', tooltip: 'Optimizing content to appear in voice search results (Siri, Alexa, Google Assistant).' },
            'Al/Chatbot SEO Integration',
            'Google Tag Manager Event Tracking',
            'Webpage Copywriting (Up to 10,000 Words)',
            '12 Articles (800–1000 Words)',
            '8 On-Page Blogs (800 Words)',
            '6 Off-Page Blogs (800 Words)',
            '4 Press Releases',
            '4 Infographics / Visual Content Assets',
            { feature: '1 Whitepaper / eBook (lead magnet)', tooltip: 'Creating a high-value downloadable resource to capture email leads.' },
            'Content Strategy & Editorial Calendar',
            'Custom Video SEO (YouTube + Site Embed)',
            'High-Authority Guest Posting (5+/month)',
            { feature: 'Digital PR Outreach', tooltip: 'Networking with journalists and bloggers to get press coverage and high-quality backlinks.' },
            'Industry-Specific Backlink Acquisition',
            'Business Listings in Premium Directories',
            { feature: 'Reputation Management', tooltip: 'Monitoring and managing online reviews and mentions to maintain a positive brand image.' },
            'Local SEO Domination (Google Maps + Citations)',
            { feature: 'Competitor Link Reclamation', tooltip: 'Finding links your competitors have lost and trying to acquire them for yourself.' },
            'Press Syndication (Google News, Medium, etc.)',
            'Google Analytics 4 Custom Dashboards',
            'Goal Tracking & Funnel Setup',
            'E-commerce Tracking (if applicable)',
            { feature: 'Heatmap & Session Recording', tooltip: 'Tools like Hotjar/Clarity that visually show where users click, scroll, and move on your site.' },
            'User Behavior Reports',
            'Comprehensive Monthly Report',
            'Real-Time Analytics Dashboard Access',
            'Bi-Weekly Progress Check-In',
            'Quarterly Growth Strategy Meeting',
            'ROI & KPI Tracking',
            'Dedicated SEO Manager + Content Team',
            'Technical Support (Priority)',
            'Competitor Monitoring & Alerts',
            'Custom SEO Automation Setup',
            'Slack or WhatsApp Communication Channel'
        ],
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
      },
      {
        question: 'Do I need to change my website for SEO?',
        answer: 'In most cases, yes. SEO often requires technical adjustments to your site\'s structure, speed, and meta tags, as well as content optimization. We handle these changes for you to ensure your site is fully optimized for search engines.'
      },
      {
        question: 'How do you track the progress of my SEO campaign?',
        answer: 'We provide detailed monthly reports that show key metrics such as keyword rankings, organic traffic growth, and conversions. We also set up Google Analytics so you can monitor your site\'s performance in real-time.'
      },
      {
        question: 'What happens if a customer returns a product?',
        answer: 'Returns are handled based on the policy we help you set up. Typically, the customer returns the item to you or the supplier. We guide you on setting up a clear Refund & Return policy to manage expectations.'
      },
      {
        question: 'Do you offer local SEO services?',
        answer: 'Yes, local SEO is a key part of our strategy for businesses serving specific geographic areas. We optimize your Google My Business profile, build local citations, and target location-specific keywords to help you dominate your local market.'
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
      },
      {
        question: 'Do I need to provide you with images and videos?',
        answer: 'While original content from you (like team photos or product shots) is always best, we can create high-quality graphics and use stock footage if needed. For the best results, a mix of your authentic content and our designed assets works wonders.'
      },
      {
        question: 'Can I approve the posts before they go live?',
        answer: 'Absolutely. We use a content calendar system where you can view, review, and approve all posts before they are scheduled for publishing. Nothing goes live without your green light.'
      },
      {
        question: 'Do you handle community management and reply to comments?',
        answer: 'Yes, our Standard and higher packages include community management. We monitor your accounts, reply to comments, and handle direct messages to keep your audience engaged and supported.'
      },
      {
        question: 'What is the difference between organic posts and paid ads?',
        answer: 'Organic posts are the regular content on your feed that reaches your existing followers. Paid ads are sponsored content shown to a targeted audience (who may not follow you yet) to drive specific actions like website visits or sales.'
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
                'Format': 'Bi-Fold (4 Panel)', 'Design Concepts': '2', 'Print Ready': true, 'Source Files': false, 'Stock Photos': '2', 'Revisions': '2 Rounds', 'Custom Icons': false, 'Infographics': false
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
                'Format': 'Tri-Fold (6 Panel)', 'Design Concepts': '3', 'Print Ready': true, 'Source Files': true, 'Stock Photos': '5', 'Revisions': 'Unlimited', 'Custom Icons': '5', 'Infographics': false
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
                'Format': 'Booklet (4-8 Pages)', 'Design Concepts': 'Custom Layouts', 'Print Ready': true, 'Source Files': true, 'Stock Photos': 'Unlimited', 'Revisions': 'Unlimited', 'Custom Icons': 'Full Set', 'Infographics': 'Data Visualization'
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
                'Format': 'Catalog (12+ Pages)', 'Design Concepts': 'Premium', 'Print Ready': true, 'Source Files': true, 'Stock Photos': 'Unlimited', 'Revisions': 'Unlimited', 'Custom Icons': 'Custom Illustrations', 'Infographics': 'Advanced'
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
        question: 'What files will I receive with my logo package?',
        answer: 'You will receive your logo in various formats suitable for both web and print, including high-resolution JPG, transparent PNG, and vector files (AI, EPS, SVG) for scalability. The exact file types depend on the package you choose.'
      },
      {
        question: 'How many revisions can I request?',
        answer: 'The number of revision rounds varies by package. Our Standard and Pro packages often offer unlimited revisions to ensure you are 100% satisfied with the final design.'
      },
      {
        question: 'Do I get full ownership of the final design?',
        answer: 'Yes, absolutely. Upon completion of the project and final payment, you will have 100% ownership rights to the final logo, brochure, or flyer design.'
      },
      {
        question: 'What is a brand guide?',
        answer: 'A brand guide, included in our Standard and Pro logo packages, is a document that outlines your brand\'s visual identity. It includes your final logo, color palette (with color codes), and typography, ensuring your brand is presented consistently everywhere.'
      },
      {
        question: 'What is the difference between a Bi-Fold and Tri-Fold brochure?',
        answer: 'A Bi-Fold brochure is a single sheet folded once to create 4 panels (front, back, and two inside panels). A Tri-Fold brochure is folded twice to create 6 panels. Tri-folds are great for displaying more segmented information.'
      },
      {
        question: 'Can you print the brochures or flyers for me?',
        answer: 'Our primary service is design. We provide you with high-resolution, print-ready files (with bleed and trim marks) that you can send to any professional printer. However, we can recommend trusted printing partners if needed.'
      },
      {
        question: 'Do you provide stock photos for the designs?',
        answer: 'Yes, most of our packages include the sourcing of high-quality licensed stock photography. If you have specific proprietary images (like team photos or products), you can provide those for us to include.'
      },
      {
        question: 'For digital creatives, can I edit the templates myself?',
        answer: 'Yes! For our "Social Starter" plan, we can provide editable links for tools like Canva. For higher-tier packages, we provide source files like Photoshop (PSD) or Figma files, which require specific software to edit.'
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
            'Development Type': 'Visual Prototype (No Code)',
            'Platforms': 'Visuals for iOS & Android',
            'Core Screens': 'Up to 10',
            'Authentication': false,
            'Database & Backend': false,
            'Admin Panel': false,
            'Commerce Features': false,
            'Advanced Integrations': false,
            'Support': 'Design Handover',
            'Timeline': '2-3 Weeks'
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
            'Development Type': 'Functional MVP',
            'Platforms': 'iOS & Android (Hybrid)',
            'Core Screens': 'Up to 5 Functional',
            'Authentication': 'Email & Social',
            'Database & Backend': 'Basic Cloud DB',
            'Admin Panel': 'Basic',
            'Commerce Features': false,
            'Advanced Integrations': 'Google Maps (Basic)',
            'Push Notifications': 'Basic Alerts',
            'Support': '1 Month Bug Support',
            'Timeline': '6-8 Weeks'
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
            'Development Type': 'Full Business App',
            'Platforms': 'iOS & Android (Hybrid)',
            'Core Screens': 'Up to 10 Functional',
            'Authentication': 'Advanced Profiles',
            'Database & Backend': 'Scalable Cloud DB',
            'Admin Panel': 'Robust',
            'Commerce Features': false,
            'Advanced Integrations': 'Location, Messaging',
            'Push Notifications': 'Standard',
            'Support': '2 Months Bug Support',
            'Timeline': '3-4 Months'
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
            'Development Type': 'E-commerce App',
            'Platforms': 'iOS & Android (Hybrid)',
            'Core Screens': 'Up to 15 Functional',
            'Authentication': 'Secure Customer Accounts',
            'Database & Backend': 'Commerce Backend',
            'Admin Panel': 'Sales & Order Mgmt',
            'Commerce Features': 'Full Cart & Payments',
            'Advanced Integrations': 'Payment Gateways',
            'Push Notifications': 'Deep Linking',
            'Security': 'SSL & Secure Payments',
            'Support': '3 Months Bug Support',
            'Timeline': '4-5 Months'
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
            'Development Type': 'Scalable Custom Solution',
            'Platforms': 'Mobile & Tablet',
            'Core Screens': '20+ Functional',
            'Authentication': 'Multi-Role RBAC + MFA',
            'Database & Backend': 'Custom REST/GraphQL APIs',
            'Admin Panel': 'Enterprise Grade',
            'Commerce Features': 'Subscription/Custom Logic',
            'Advanced Integrations': 'CRM/ERP, Legacy Systems',
            'Offline Mode': 'Full Sync',
            'Push Notifications': 'Targeted & Automated',
            'Security': 'MFA & Compliance',
            'Support': '6 Months Priority',
            'Timeline': '5-7 Months'
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
            'Development Type': 'Enterprise Ecosystem',
            'Platforms': 'Native or Cross-Platform',
            'Core Screens': 'Unlimited (Scope Dependent)',
            'Authentication': 'SSO / Biometric',
            'Database & Backend': 'Microservices / Dedicated',
            'Admin Panel': 'Full Custom Suite',
            'Commerce Features': 'Global/Complex',
            'Advanced Integrations': 'AI/ML, IoT, Big Data',
            'Security': 'End-to-End Encryption',
            'Offline Mode': 'Full Sync & Encrypted',
            'Push Notifications': 'AI-Personalized',
            'Support': '1 Year Premium SLA',
            'Timeline': '6+ Months'
        }
      }
    ],
    faqs: [
      {
        question: 'What is the difference between a Prototype and an MVP?',
        answer: 'A **Prototype** is a visual, interactive simulation of your app (often created in tools like Figma). It looks and feels like a real app but has no functional code or database behind it. It is used for design validation, user testing, and investor pitches. An **MVP (Minimum Viable Product)** is a functional application with actual code, databases, and core features that users can download, install, and use.'
      },
      {
        question: 'How much does it cost to build a mobile app?',
        answer: 'Our packages range from €2,499 for a design prototype to €6,499 for an MVP, and up to €74,999+ for enterprise-grade solutions. The final cost depends on the complexity of features, design requirements, and platform needs.'
      },
      {
        question: 'Do you develop for both iOS and Android?',
        answer: 'Yes. Our MVP and Business packages typically use cross-platform technologies (like Flutter or React Native) to deploy to both iOS and Android simultaneously, saving time and cost. For Enterprise plans, we can also offer native development (Swift/Kotlin) if specific performance needs dictate it.'
      },
      {
        question: 'Will you help me publish my app to the app stores?',
        answer: 'Absolutely. All our development packages (MVP and above) include full support for the submission and approval process for both the Apple App Store and Google Play Store.'
      },
      {
        question: 'Do you offer post-launch maintenance for apps?',
        answer: 'Yes, we offer ongoing maintenance packages to ensure your app remains compatible with new OS updates (iOS and Android), fix any bugs that arise, and ensure security standards are met.'
      },
      {
        question: 'Can you integrate third-party APIs into my app?',
        answer: 'Absolutely. We have extensive experience integrating payment gateways (Stripe, PayPal), mapping services (Google Maps), social media logins, and various other third-party tools to enhance your app\'s functionality.'
      },
      {
        question: 'Who owns the source code after development?',
        answer: 'You do. Once the project is fully paid for, we transfer 100% of the intellectual property and source code to you. You have full control over your digital asset.'
      },
      {
        question: 'How do you ensure the security of the app?',
        answer: 'We implement industry-standard security practices including SSL encryption, secure authentication (OAuth), data encryption at rest and in transit, and regular security audits to protect user data.'
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
            'Research & Strategy': 'Niche Guidance', 'Products Imported': 'Up to 25', 'Supplier Sourcing': 'Vetted', 'Automation': 'Inventory & Price Sync', 'Branding': 'Basic Logo & Storefront', 'Marketing & Sales Tools': 'Abandoned Cart', 'Post-Launch Support': '5 Days (Email)', 'Training': 'Quick Guide'
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
            'Research & Strategy': 'Niche Validation + Competitor Analysis', 'Products Imported': '100', 'Supplier Sourcing': 'Verified', 'Automation': 'Pricing Rules', 'Branding': 'Custom Logo (2 concepts)', 'Marketing & Sales Tools': 'Welcome Email + App Integration', 'Post-Launch Support': '7 Days', 'Training': '1 Hour'
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
            'Research & Strategy': 'Data-Driven + Keyword Analysis', 'Products Imported': '250', 'Supplier Sourcing': 'Vetted + Backup', 'Automation': 'Inventory & Stock Sync', 'Branding': 'Premium Logo (3 concepts)', 'Marketing & Sales Tools': 'Upsell/Cross-Sell + Live Chat', 'SEO Optimization': true, 'Post-Launch Support': '15 Days', 'Training': '2 Sessions (1-on-1)'
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
            'Research & Strategy': 'Multi-Niche + Market Positioning', 'Products Imported': 'Up to 500', 'Supplier Sourcing': 'Preferred Partnerships', 'Automation': 'Full Funnel', 'Branding': 'Full Custom Identity', 'Marketing & Sales Tools': 'Advanced Analytics', 'SEO Optimization': true, 'Internationalization': 'Multi-Language & Currency', 'Post-Launch Support': '30 Days (Technical)', 'Training': '3 Sessions + Strategy Call'
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
      },
      {
        question: 'Which e-commerce platform do you use for dropshipping stores?',
        answer: 'We primarily use Shopify as it is the gold standard for dropshipping, offering robust integrations with suppliers, ease of use, and scalability. We can also work with WooCommerce if preferred.'
      },
      {
        question: 'Can I add my own products later?',
        answer: 'Yes, absolutely. The store is yours to manage. We provide training on how to add, remove, or edit products so you can keep your inventory fresh and updated.'
      },
      {
        question: 'What happens if a customer returns a product?',
        answer: 'Returns are handled based on the policy we help you set up. Typically, the customer returns the item to you or the supplier. We guide you on setting up a clear Refund & Return policy to manage expectations.'
      },
      {
        question: 'Do you help with marketing the dropshipping store?',
        answer: 'While our dropshipping packages focus on build and setup, we have separate Social Media Marketing and SEO services designed specifically to drive traffic and sales to your new store.'
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
            'Duration': '15 Seconds', 'Style': '2D / Logo Intro', 'Scriptwriting': 'Assistance', 'Voiceover': 'AI-Generated', 'Sound Design': 'Background Music', 'Resolution': 'HD 1080p', 'Revisions': '2 Rounds', 'Delivery Time': '5 Days', 'Source Files': false
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
            'Duration': '30 Seconds', 'Style': '2D Character Animation', 'Scriptwriting': 'Professional Script', 'Voiceover': 'AI-Generated', 'Sound Design': 'BGM + SFX', 'Resolution': 'HD 1080p', 'Revisions': 'Unlimited', 'Delivery Time': '10 Days', 'Source Files': false
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
            'Duration': '60 Seconds', 'Style': 'Motion Graphics', 'Scriptwriting': 'Script + Storyboard', 'Voiceover': 'AI-Generated', 'Sound Design': 'Advanced SFX', 'Resolution': 'HD 1080p + Resizing', 'Revisions': 'Unlimited', 'Delivery Time': '15 Days', 'Source Files': true
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
            'Duration': '90 Seconds', 'Style': 'Isometric / VFX', 'Scriptwriting': 'Full Development', 'Voiceover': 'AI-Generated', 'Sound Design': 'Custom Mixing', 'Resolution': '4K Ultra HD', 'Revisions': 'Unlimited', 'Delivery Time': 'Priority', 'Source Files': true
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
            'Duration': '2 Minutes', 'Style': 'Complex/High-End', 'Scriptwriting': 'Full Creative Direction', 'Voiceover': 'AI-Generated', 'Sound Design': 'Advanced + Foley', 'Resolution': '4K Ultra HD', 'Revisions': 'Unlimited', 'Delivery Time': '3-4 Weeks', 'Source Files': true
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
            'Duration': '3 Minutes', 'Style': 'Cinematic/Custom', 'Scriptwriting': 'Cinematic Storytelling', 'Voiceover': 'AI-Generated', 'Sound Design': 'Broadcast Quality', 'Resolution': '4K Ultra HD', 'Revisions': 'Unlimited', 'Delivery Time': '4-6 Weeks', 'Source Files': true
        }
      }
    ],
    faqs: [
        {
            question: 'What is the typical process for creating an explainer video?',
            answer: 'Our process typically involves 5 steps: Scriptwriting, Storyboarding (sketching the scenes), Voiceover generation (using advanced AI), Animation, and finally, Sound Design & Delivery. We keep you involved at every stage for approval.'
        },
        {
            question: 'What kind of voiceover do you provide?',
            answer: 'We use state-of-the-art AI voiceover technology that produces incredibly natural, human-sounding narration. You can choose from a wide variety of accents, tones, and languages to perfectly match your brand\'s personality.'
        },
        {
            question: 'Can I write my own script?',
            answer: 'Absolutely. If you have a script ready, we can review it to ensure it fits the desired video length. If you don\'t have one, our professional scriptwriters can create one for you based on your brief.'
        },
        {
            question: 'How long does it take to make a video?',
            answer: 'A typical 30-60 second video takes about 2-3 weeks. Longer videos (2-3 minutes) may take 4-6 weeks due to the increased complexity and animation work. We also offer expedited delivery for urgent projects.'
        },
        {
            question: 'Do I own the rights to the video?',
            answer: 'Yes, once the project is completed and paid for, you have full ownership and commercial rights to the video. You can use it on your website, social media, TV, or anywhere else.'
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
                    'Cover Type': 'Front Only (Digital)', 'Design Concepts': '2', 'Illustration Style': 'Stock Manipulation', 'Revisions': '3 Rounds', 'Source Files': false, '3D Mockup': true, 'Commercial Rights': true
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
                    'Cover Type': 'Full Wrap (Print)', 'Design Concepts': '3', 'Illustration Style': 'Advanced Manipulation', 'Revisions': 'Unlimited', 'Source Files': true, '3D Mockup': true, 'Commercial Rights': true
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
                    'Cover Type': 'Full Wrap (Custom Art)', 'Design Concepts': 'Custom Illustration', 'Illustration Style': 'Hand-Drawn / Digital Paint', 'Revisions': 'Unlimited', 'Source Files': true, '3D Mockup': true, 'Commercial Rights': true
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
                    'Cover Type': '3x Full Wraps', 'Design Concepts': 'Series Branding', 'Illustration Style': 'Consistent Custom Art', 'Revisions': 'Unlimited', 'Source Files': true, '3D Mockup': 'Box Set + Individual', 'Commercial Rights': true
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
                    'Quantity': '5 Spot Illustrations', 'Style': 'Simple / Vector', 'Color': 'B&W', 'Complexity': 'Low', 'Revisions': '2 Rounds', 'Source Files': false
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
                    'Quantity': '10 Headers', 'Style': 'Detailed Line Art', 'Color': 'B&W / Grayscale', 'Complexity': 'Medium', 'Revisions': 'Unlimited', 'Source Files': true
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
                    'Quantity': '5 Full Page', 'Style': 'Full Color / Painted', 'Color': 'Full Color', 'Complexity': 'High', 'Revisions': 'Unlimited', 'Source Files': true
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
                    'Quantity': '10 Full Page', 'Style': 'Premium Digital Art', 'Color': 'Full Color', 'Complexity': 'Very High', 'Revisions': 'Unlimited', 'Source Files': true
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
                    'Quantity': '20 Illustrations', 'Style': 'Graphic Novel / Comic', 'Color': 'Full Color', 'Complexity': 'Sequential Art', 'Revisions': 'Unlimited', 'Source Files': true
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
                    'Quantity': '30+ Mixed', 'Style': 'Cinematic Masterpiece', 'Color': 'Full Color', 'Complexity': 'Ultimate', 'Revisions': 'Unlimited', 'Source Files': true
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
                    'Scope': 'Single Character Sheet', 'Illustration Count': '1 Character Studies', 'Page Count': 'N/A', 'Style': 'Cartoon / Whimsical', 'Backgrounds': 'None', 'Text Layout': false, 'Revisions': 'Unlimited', 'Source Files': true
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
                    'Scope': 'Full Cast Design', 'Illustration Count': '3 Character Studies', 'Page Count': 'N/A', 'Style': 'Cartoon / Whimsical', 'Backgrounds': 'None', 'Text Layout': false, 'Revisions': 'Unlimited', 'Source Files': true
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
                    'Scope': 'Full Book Storyboard', 'Illustration Count': '24 Sketches', 'Page Count': 'Up to 24 Pages', 'Style': 'Rough Sketch', 'Backgrounds': 'Sketch Only', 'Text Layout': 'Planning', 'Revisions': 'Unlimited', 'Source Files': false
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
                    'Scope': 'Completed Short Book', 'Illustration Count': '10-12 Full Color', 'Page Count': '10-12 Pages', 'Style': 'Full Color Digital', 'Backgrounds': 'Detailed', 'Text Layout': 'Included', 'Revisions': 'Unlimited', 'Source Files': true
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
                    'Scope': 'Standard Industry Book', 'Illustration Count': '20-24 Full Color', 'Page Count': '20-24 Pages', 'Style': 'Premium Texture/Paint', 'Backgrounds': 'Complex/Immersive', 'Text Layout': 'Included + eBook', 'Revisions': 'Unlimited', 'Source Files': true
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
                    'Scope': 'Deluxe Publishing Package', 'Illustration Count': '28-32 Full Color', 'Page Count': '28-32 Pages', 'Style': 'Cinematic High-End', 'Backgrounds': 'Masterpiece Level', 'Text Layout': 'Full Suite', 'Revisions': 'Unlimited', 'Source Files': true
                }}
            ]
        }
    ],
    faqs: [
        {
            question: 'How does the illustration process work?',
            answer: 'It typically starts with the character design phase to ensure we get the protagonist right. Then, we move to storyboarding (rough sketches of all pages) to plan the flow. Once sketches are approved, we move to final coloring and finally, text layout.'
        },
        {
            question: 'Do I own the copyright to the illustrations?',
            answer: 'Yes! Upon final payment and delivery, you hold 100% of the commercial rights and copyright to the artwork. You can print, sell, and distribute your book without any royalties to us.'
        },
        {
            question: 'Can you match a specific artistic style?',
            answer: 'Absolutely. If you have reference images or a specific style in mind (e.g., watercolor, Disney-style, flat vector), share them with us, and we will assign an illustrator who specializes in that style.'
        },
        {
            question: 'Do you handle the text placement (typesetting)?',
            answer: 'Yes, our Standard, Full Story, and Publishing Master packages include professional typesetting. We place your text on the pages, choose readable fonts, and ensure the layout is print-ready.'
        },
        {
            question: 'What format will the files be?',
            answer: 'We deliver high-resolution (300 DPI) PDFs for printing, as well as JPG/PNGs for digital use. If your package includes source files, we will provide the editable PSD or AI files.'
        },
        {
            question: 'What is the difference between a "page" and a "spread"?',
            answer: 'A "page" is a single side of a leaf of paper (e.g., page 1). A "spread" consists of the two facing pages when the book is open (e.g., pages 2 and 3 together). One spread equals two pages of illustration.'
        },
        {
            question: 'Can I see a sketch before you color the final illustrations?',
            answer: 'Yes, this is a crucial part of our process. We provide rough sketches for every single page/illustration first. We only proceed to final coloring once you have approved the sketches, ensuring the composition is exactly what you envisioned.'
        },
        {
            question: 'Do you help with Amazon KDP uploading?',
            answer: 'Our "Publishing Master" package includes KDP upload assistance. For other packages, we provide "Print-Ready" files that are formatted correctly for KDP, making the upload process smooth for you.'
        },
        {
            question: 'How long does a children\'s book take to illustrate?',
            answer: 'It depends on the style and number of pages. A standard 24-page book typically takes 8-12 weeks from start to finish. We prioritize quality to ensure your book can compete in the market.'
        },
         {
            question: 'Do I need to have the text finalized before we start?',
            answer: 'It is highly recommended. While small edits can be made later, changing the story significantly after illustrations have begun can require re-drawing scenes, which may incur extra costs.'
        },
        {
            question: 'For Ebooks, what file format do I get?',
            answer: 'For simple ebooks, we provide PDF and High-Res images. For our higher-tier packages, we can assist with converting your book into ePub or Mobi formats compatible with Kindle and other e-readers.'
        },
        {
            question: 'What is a "Full Wrap" cover design?',
            answer: 'A Full Wrap cover includes the Front Cover, the Back Cover, and the Spine. This is essential for printed books. We calculate the exact spine width based on your page count and paper type to ensure it fits perfectly.'
        },
        {
            question: 'Can I use the illustrations for merchandise?',
            answer: 'Yes! Since you own 100% of the rights, you can use the characters or artwork for t-shirts, mugs, posters, or any other merchandise you wish to sell.'
        }
    ]
  }
];
