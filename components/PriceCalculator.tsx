
import React, { useState, useEffect, useMemo } from 'react';
import type { Plan } from '../types';
import { Link } from 'react-router-dom';

interface PriceCalculatorProps {
  serviceId: string;
  categoryTitle: string;
  plans: Plan[];
}

// Helper to extract numeric price from string (e.g. "€199" -> 199)
const parsePrice = (priceStr: string): number => {
  if (!priceStr) return 0;
  const numeric = priceStr.replace(/[^0-9.]/g, '');
  return numeric ? parseFloat(numeric) : 0;
};

// Configuration helper to tailor the calculator per service
const getCalculatorConfig = (serviceId: string, categoryTitle: string) => {
  const id = serviceId.toLowerCase();
  const cat = categoryTitle.toLowerCase();

  // Default values
  let unitName = 'Extra Units';
  let unitPrice = 50;
  let min = 0;
  let max = 50;
  let step = 1;
  let addOns = [
    { label: 'Priority Support (24/7)', price: 299 },
    { label: 'Express Delivery (Rush Order)', price: 499 },
    { label: 'Dedicated Project Manager', price: 249 },
    { label: 'Non-Disclosure Agreement (NDA)', price: 199 }
  ];

  // --- Website Development ---
  if (id === 'website') {
    if (cat.includes('e-commerce') || cat.includes('store')) {
      unitName = 'Additional Products';
      unitPrice = 2; // Reduced to €2
      max = 500;
      step = 10;
      addOns = [
        { label: 'Payment Gateway Setup (Stripe/PayPal)', price: 399 },
        { label: 'Advanced Shipping Rules Configuration', price: 499 },
        { label: 'Abandoned Cart Email Automation', price: 599 },
        { label: 'Product Reviews & Ratings System', price: 399 },
        { label: 'Upsell & Cross-sell Functionality', price: 449 },
        { label: 'Professional Blog Setup', price: 499 },
        { label: 'Newsletter Popup & Lead Gen', price: 349 },
        { label: 'Wishlist Functionality', price: 299 },
        { label: 'Multi-Currency & Language Switcher', price: 649 },
        { label: 'Store Management Training (2 Hours)', price: 499 },
        { label: 'Loyalty Program Integration', price: 699 },
        { label: 'Live Chat Integration', price: 349 }
      ];
    } else {
      // Informative / Custom Website
      unitName = 'Additional Pages';
      unitPrice = 50; // Reduced to €50
      max = 20;
      addOns = [
        { label: 'Online Payment Integration', price: 299 },
        { label: 'Professional Copywriting (Per 5 Pages)', price: 799 },
        { label: 'Advanced On-Page SEO Setup', price: 599 },
        { label: 'Custom Logo Design Package', price: 449 },
        { label: 'Speed Optimization (Core Web Vitals)', price: 549 },
        { label: 'Google Analytics 4 & GTM Setup', price: 399 },
        { label: 'Live Chat / WhatsApp Integration', price: 249 },
        { label: 'Multi-language Setup (1 Extra Lang)', price: 799 },
        { label: 'Premium Stock Photo Pack (10)', price: 299 },
        { label: 'Privacy Policy & Terms Pages', price: 399 },
        { label: 'Booking / Appointment System', price: 699 },
        { label: 'Interactive Google Map', price: 249 }
      ];
    }
  } 
  // --- SEO Services ---
  else if (id === 'seo') {
    unitName = 'Additional Keywords';
    unitPrice = 10; // Reduced to €10
    max = 50;
    step = 5;
    addOns = [
      { label: 'Extra Blog Article (1000 words)', price: 349 },
      { label: 'High DA Backlink (DA 50+)', price: 499 },
      { label: 'Local Citation Building (20 Listings)', price: 399 },
      { label: 'Comprehensive Technical Audit', price: 799 },
      { label: 'Competitor Analysis Report', price: 449 },
      { label: 'Google My Business Optimization', price: 449 },
      { label: 'Schema Markup Implementation', price: 499 },
      { label: 'Video SEO Optimization', price: 399 },
      { label: 'Conversion Rate Optimization (CRO)', price: 999 },
      { label: 'Monthly Strategy Call', price: 399 }
    ];
  } 
  // --- Social Media ---
  else if (id === 'social-media') {
    unitName = 'Additional Posts/Month';
    unitPrice = 25; // Reduced to €25
    max = 20;
    addOns = [
      { label: 'Reels / TikTok Video Editing (Per Video)', price: 199 },
      { label: 'Daily Community Management', price: 599 },
      { label: 'Paid Ad Campaign Setup', price: 699 },
      { label: 'Influencer Outreach List (10)', price: 499 }, // Increased
      { label: 'Monthly Strategy Consultation', price: 299 },
      { label: 'Custom Story Highlight Covers', price: 179 },
      { label: 'LinkedIn Profile Optimization', price: 349 },
      { label: 'Competitor Social Audit', price: 349 },
      { label: 'Social Media Contest Setup', price: 399 },
      { label: 'Crisis Management Plan', price: 499 }
    ];
  } 
  // --- Logo & Branding ---
  else if (id === 'logo-design') {
    if(cat.includes('logo')) {
        unitName = 'Additional Concepts';
        unitPrice = 49; // Reduced to €49
        max = 5;
        addOns = [
          { label: 'Social Media Kit (Covers/Profiles)', price: 179 },
          { label: 'Business Card Design', price: 129 },
          { label: 'Comprehensive Brand Style Guide', price: 399 },
          { label: 'Vector / Source Files', price: 199 },
          { label: '3D Logo Mockup', price: 99 },
          { label: 'Letterhead & Envelope Design', price: 179 },
          { label: 'Favicon Design', price: 79 },
          { label: 'Copyright Transfer Document', price: 249 },
          { label: 'Email Signature Design', price: 129 },
          { label: 'Iconography Set (5 Icons)', price: 299 }
        ];
    } else if (cat.includes('brochure')) {
        unitName = 'Additional Panels/Pages';
        unitPrice = 49; // Reduced to €49
        max = 12;
        addOns = [
            { label: 'Editable Source Files (AI/InDesign)', price: 199 },
            { label: 'Professional Copywriting (Per Page)', price: 149 },
            { label: 'Custom Infographic Design', price: 249 },
            { label: 'High-Res Stock Photo Pack (5)', price: 129 },
            { label: 'Digital Flipbook Version', price: 199 },
            { label: 'Rush Delivery (48h)', price: 299 },
            { label: 'Print Coordination Service', price: 149 },
            { label: 'Interactive PDF Links', price: 129 }
        ];
    } else if (cat.includes('flyer')) {
        unitName = 'Additional Variants';
        unitPrice = 70;
        max = 5;
        addOns = [
            { label: 'Editable Source Files (PSD/AI)', price: 299 }, // Increased
            { label: 'Social Media Resizing Pack (3 Sizes)', price: 249 }, // Increased
            { label: 'Double-Sided Design Upgrade', price: 249 }, // Increased
            { label: 'QR Code Tracking Integration', price: 199 }, // Increased
            { label: 'Animated Digital Version', price: 399 }, // Increased
            { label: 'Express Delivery (24h)', price: 399 }, // Increased
            { label: 'A/B Testing Designs (2)', price: 299 } // Increased
        ];
    } else {
        // Digital Creatives
        unitName = 'Additional Assets';
        unitPrice = 49; // Reduced to €49
        max = 20;
        addOns = [
            { label: 'Source Files (PSD/Figma)', price: 349 }, // Increased
            { label: 'Animation / Motion Effects', price: 499 }, // Increased
            { label: 'All-Platform Resizing', price: 449 }, // Increased
            { label: 'Stock Video Licensing', price: 349 }, // Increased
            { label: 'Custom Iconography', price: 299 }, // Increased
            { label: 'Rapid Delivery (24h)', price: 399 }, // Increased
            { label: 'Carousel Sequence Design', price: 349 } // Increased
        ];
    }
  } 
  // --- Mobile App ---
  else if (id === 'mobile-app') {
    unitName = 'Additional Functional Screens';
    unitPrice = 500; // Reduced to €500
    max = 20;
    addOns = [
      { label: 'Web Admin Panel', price: 2999 },
      { label: 'Advanced Push Notification System', price: 999 },
      { label: 'Social Media Login Integration', price: 599 },
      { label: 'In-App Purchases Setup', price: 1499 },
      { label: 'Google Maps & Location Services', price: 999 },
      { label: 'Real-Time Chat Functionality', price: 1999 },
      { label: 'Multi-Language Support', price: 1299 },
      { label: 'Advanced Analytics Integration', price: 699 },
      { label: 'App Store Submission Assistance', price: 799 },
      { label: 'Payment Gateway Integration', price: 1199 },
      { label: 'Tablet Optimization', price: 1499 },
      { label: 'Offline Mode Functionality', price: 1999 }
    ];
  } 
  // --- Dropshipping ---
  else if (id === 'dropshipping') {
    unitName = 'Additional Products';
    unitPrice = 2; // Reduced to €2
    max = 200;
    step = 20;
    addOns = [
      { label: 'Video Ad Creative (1 Video)', price: 199 },
      { label: 'Custom Logo Design', price: 249 },
      { label: 'Supplier Price Negotiation', price: 499 },
      { label: 'Social Media Page Setup (FB/IG)', price: 249 },
      { label: 'Email Marketing Flows Setup', price: 499 },
      { label: 'Influencer Marketing List (20)', price: 349 },
      { label: 'Deep Niche Research Report', price: 399 },
      { label: 'SEO Optimization Package', price: 499 },
      { label: 'Blog Content (3 Articles)', price: 349 },
      { label: 'Trust Badge Integration', price: 99 },
      // New Add-ons for variety
      { label: 'User Generated Content (UGC) Video Pack (3 Videos)', price: 499 },
      { label: 'Competitor Ad Spy Report', price: 199 },
      { label: 'Private Agent Introduction (Faster Shipping)', price: 599 },
      { label: 'Custom Packaging Design', price: 349 },
      { label: 'TikTok Ad Account Setup & Pixel', price: 299 }
    ];
  } 
  // --- Video Animation ---
  else if (id === 'video-animation') {
    unitName = 'Additional Duration (10s)';
    unitPrice = 199; // Reduced to €199
    max = 12; // 120 seconds max extra
    step = 1; 
    addOns = [
      { label: 'Professional Scriptwriting', price: 499 }, // Increased
      { label: 'Premium Human Voiceover', price: 599 }, // Increased
      { label: 'Background Music License', price: 299 }, // Increased
      { label: 'Advanced Sound Effects (SFX)', price: 399 }, // Increased
      { label: '4K Ultra HD Render', price: 599 }, // Increased
      { label: 'Source Files (After Effects)', price: 799 }, // Increased
      { label: 'Subtitles / Captions', price: 249 }, // Increased
      { label: 'Expedited Delivery (5 Days)', price: 999 }, // Increased
      { label: 'Social Media Resizing (Square/Vertical)', price: 399 }, // Increased
      { label: 'Character Design Customization', price: 699 } // Increased
    ];
  } 
  // --- Illustration ---
  else if (id === 'illustration') {
    if (cat.includes('book cover')) {
        unitName = 'Additional Concepts';
        unitPrice = 49; // Reduced to €49
        max = 5;
        addOns = [
            { label: 'Full Wrap (Spine + Back) Upgrade', price: 249 },
            { label: 'Source Files (PSD/AI)', price: 349 },
            { label: '3D Marketing Mockups', price: 179 },
            { label: 'Social Media Promo Kit', price: 299 },
            { label: 'Audiobook Cover Adaptation', price: 199 },
            { label: 'Custom Title Typography', price: 249 },
            { label: 'Bookmark & Postcard Design', price: 179 }
        ];
    } else if (cat.includes('children')) {
        unitName = 'Additional Illustrations';
        unitPrice = 120; // Reduced to €120
        max = 15;
        addOns = [
            { label: 'Character Design Sheet', price: 399 },
            { label: 'Full Page Spread Upgrade', price: 299 },
            { label: 'Professional Typesetting', price: 499 },
            { label: 'KDP Upload Assistance', price: 299 },
            { label: 'Animated Book Trailer', price: 899 },
            { label: 'Coloring Book Line Art Version', price: 449 },
            { label: 'Hardcover Print Formatting', price: 249 },
            { label: 'Source Files', price: 599 }
        ];
    } else {
        // Ebook / General Illustration
        unitName = 'Additional Illustrations';
        unitPrice = 79; // Reduced to €79
        max = 10;
        addOns = [
            { label: 'Source Files (PSD/AI)', price: 299 },
            { label: 'Commercial Usage License', price: 499 },
            { label: 'Fast Delivery (48h)', price: 249 },
            { label: 'Complex Background Detail', price: 299 },
            { label: 'Additional Character in Scene', price: 199 },
            { label: '3D Mockup Presentation', price: 149 },
            { label: 'Color Upgrade (from B&W)', price: 129 },
            { label: 'Interactive PDF Elements', price: 349 }
        ];
    }
  }

  return { unitName, unitPrice, min, max, step, addOns };
};

const PriceCalculator: React.FC<PriceCalculatorProps> = ({ serviceId, categoryTitle, plans }) => {
  const config = useMemo(() => getCalculatorConfig(serviceId, categoryTitle), [serviceId, categoryTitle]);
  
  // Use the first plan as default if available
  const [selectedPlanIndex, setSelectedPlanIndex] = useState(0);
  const [sliderValue, setSliderValue] = useState(0);
  const [selectedAddons, setSelectedAddons] = useState<number[]>([]);

  // Reset logic when service changes
  useEffect(() => {
    setSliderValue(0);
    setSelectedAddons([]);
    setSelectedPlanIndex(0);
  }, [serviceId, categoryTitle]);

  const handleAddonToggle = (index: number) => {
    setSelectedAddons(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const basePrice = plans.length > 0 ? parsePrice(plans[selectedPlanIndex].price) : 0;
  const sliderCost = sliderValue * config.unitPrice;
  const addonsCost = selectedAddons.reduce((acc, index) => acc + config.addOns[index].price, 0);
  const totalCost = basePrice + sliderCost + addonsCost;

  return (
    <div id="price-calculator" className="py-16 md:py-24 bg-brand-secondary/30 border-t border-brand-secondary scroll-mt-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-16">
          <span className="text-brand-accent-middle font-bold tracking-wider uppercase text-xs md:text-sm">Custom Quote</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-2">Build Your <span className="gradient-text">Own Package</span></h2>
          <p className="text-brand-muted mt-4 max-w-2xl mx-auto text-base md:text-lg">
            Tailor our services to your exact requirements. Start with a base plan and add exactly what you need.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 max-w-7xl mx-auto">
          {/* Controls Column */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* 1. Select Base Plan */}
            <div className="bg-brand-primary p-6 md:p-8 rounded-2xl border border-gray-800 shadow-lg">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <span className="w-8 h-8 rounded-full bg-brand-accent-start/20 text-brand-accent-start flex items-center justify-center text-sm mr-3 border border-brand-accent-start/50 font-bold">1</span>
                Select Base Plan
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {plans.map((plan, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedPlanIndex(index)}
                    className={`p-5 rounded-xl border text-left transition-all duration-300 relative overflow-hidden group ${
                      selectedPlanIndex === index 
                        ? 'bg-brand-secondary border-brand-accent-middle shadow-[0_0_20px_rgba(236,72,153,0.15)] transform scale-[1.02]' 
                        : 'bg-brand-secondary/30 border-gray-700 hover:border-gray-500 hover:bg-brand-secondary/50'
                    }`}
                  >
                    {selectedPlanIndex === index && (
                        <div className="absolute top-0 right-0 w-6 h-6 bg-brand-accent-middle rounded-bl-xl flex items-center justify-center">
                            <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                        </div>
                    )}
                    <div className={`font-bold text-lg mb-1 transition-colors ${selectedPlanIndex === index ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>{plan.name}</div>
                    <div className="text-brand-muted text-sm">{plan.price}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Customize Quantity */}
            <div className="bg-brand-primary p-6 md:p-8 rounded-2xl border border-gray-800 shadow-lg">
              <h3 className="text-xl font-bold text-white mb-8 flex items-center">
                <span className="w-8 h-8 rounded-full bg-brand-accent-middle/20 text-brand-accent-middle flex items-center justify-center text-sm mr-3 border border-brand-accent-middle/50 font-bold">2</span>
                {config.unitName}
              </h3>
              <div className="px-2 md:px-4">
                <div className="flex justify-between text-sm text-brand-muted mb-4 font-medium">
                    <span>+{config.min}</span>
                    <span className="text-white font-bold text-xl bg-brand-secondary px-4 py-1 rounded-lg border border-gray-700">
                        {sliderValue} <span className="text-brand-muted text-sm font-normal ml-1">{config.unitName.split(' ').slice(1).join(' ')}</span>
                    </span>
                    <span>+{config.max}</span>
                </div>
                <div className="relative h-10 flex items-center">
                    <input
                    type="range"
                    min={config.min}
                    max={config.max}
                    step={config.step}
                    value={sliderValue}
                    onChange={(e) => setSliderValue(parseInt(e.target.value))}
                    className="w-full h-3 bg-brand-secondary rounded-full appearance-none cursor-pointer accent-brand-accent-middle hover:accent-brand-accent-end transition-all focus:outline-none focus:ring-2 focus:ring-brand-accent-middle/50"
                    />
                </div>
                <p className="text-sm text-brand-muted mt-4 text-center bg-brand-secondary/30 py-2 rounded-lg border border-gray-800">
                    Adding <span className="text-white font-bold">{sliderValue}</span> extra units at <span className="text-white font-bold">€{config.unitPrice}</span> each.
                </p>
              </div>
            </div>

            {/* 3. Add-ons */}
            <div className="bg-brand-primary p-6 md:p-8 rounded-2xl border border-gray-800 shadow-lg">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <span className="w-8 h-8 rounded-full bg-brand-accent-end/20 text-brand-accent-end flex items-center justify-center text-sm mr-3 border border-brand-accent-end/50 font-bold">3</span>
                Select Premium Add-ons
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {config.addOns.map((addon, index) => (
                  <label 
                    key={index}
                    className={`flex items-center p-4 rounded-xl border cursor-pointer transition-all duration-200 group ${
                        selectedAddons.includes(index)
                        ? 'bg-brand-secondary border-brand-accent-end shadow-[0_0_10px_rgba(34,211,238,0.1)]'
                        : 'bg-brand-secondary/10 border-gray-700 hover:bg-brand-secondary/30 hover:border-gray-600'
                    }`}
                  >
                    <div className={`w-6 h-6 rounded-md border flex items-center justify-center mr-4 transition-all duration-200 flex-shrink-0 ${
                        selectedAddons.includes(index) ? 'bg-brand-accent-end border-brand-accent-end' : 'border-gray-500 group-hover:border-brand-accent-end/50'
                    }`}>
                        {selectedAddons.includes(index) && (
                            <svg className="w-4 h-4 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                        )}
                    </div>
                    <input 
                        type="checkbox" 
                        className="hidden" 
                        checked={selectedAddons.includes(index)} 
                        onChange={() => handleAddonToggle(index)} 
                    />
                    <div className="flex-grow flex justify-between items-center">
                        <span className={`text-sm font-medium transition-colors ${selectedAddons.includes(index) ? 'text-white' : 'text-gray-300'}`}>{addon.label}</span>
                        <span className={`text-xs font-bold ml-2 ${selectedAddons.includes(index) ? 'text-brand-accent-end' : 'text-brand-muted'}`}>+€{addon.price}</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

          </div>

          {/* Summary Column */}
          <div className="lg:col-span-4">
            <div className="bg-brand-secondary/80 backdrop-blur-xl p-6 md:p-8 rounded-2xl border border-brand-accent-start/30 sticky top-24 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-accent-start via-brand-accent-middle to-brand-accent-end rounded-t-2xl"></div>
                
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <svg className="w-6 h-6 mr-2 text-brand-accent-start" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                    Estimated Cost
                </h3>
                
                <div className="space-y-4 mb-8 text-sm max-h-[40vh] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-brand-muted scrollbar-track-transparent">
                    <div className="flex justify-between items-center text-white font-medium pb-4 border-b border-gray-700">
                        <span>Base Plan ({plans[selectedPlanIndex]?.name})</span>
                        <span>€{basePrice}</span>
                    </div>
                    
                    {sliderValue > 0 && (
                        <div className="flex justify-between text-gray-300 animate-fade-in">
                            <span className="flex items-center">
                                <span className="w-1.5 h-1.5 rounded-full bg-brand-accent-middle mr-2"></span>
                                {sliderValue} x {config.unitName.split(' ').slice(1).join(' ')}
                            </span>
                            <span className="text-white">€{sliderCost}</span>
                        </div>
                    )}
                    
                    {selectedAddons.length > 0 && (
                        <div className="pt-2 space-y-3">
                            {selectedAddons.map(idx => (
                                <div key={idx} className="flex justify-between text-brand-muted animate-fade-in">
                                    <span className="flex items-start">
                                        <span className="w-1.5 h-1.5 rounded-full bg-brand-accent-end mr-2 mt-1.5 flex-shrink-0"></span>
                                        <span className="text-gray-400">{config.addOns[idx].label}</span>
                                    </span>
                                    <span className="text-white ml-2">€{config.addOns[idx].price}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div className="border-t border-gray-700 pt-6 mb-8">
                    <div className="flex justify-between items-end">
                        <span className="text-brand-muted font-medium uppercase tracking-wider text-xs">Total Estimated</span>
                        <span className="text-4xl font-extrabold text-white tracking-tight">€{totalCost.toLocaleString()}</span>
                    </div>
                </div>

                <Link 
                    to="/contact" 
                    state={{ 
                        subject: `Custom Quote Request: ${plans[selectedPlanIndex]?.name} + ${sliderValue} Extras`,
                        messageBody: `I am interested in a custom package based on the ${plans[selectedPlanIndex]?.name} plan.\n\nConfiguration:\n- Service: ${categoryTitle}\n- Base Plan: ${plans[selectedPlanIndex]?.name} (€${basePrice})\n- Customization: ${sliderValue} ${config.unitName} (€${sliderCost})\n\nSelected Add-ons:\n${selectedAddons.map(i => `- ${config.addOns[i].label} (€${config.addOns[i].price})`).join('\n')}\n\nTotal Estimated Price: €${totalCost}`
                    }}
                    className="relative overflow-hidden group block w-full py-4 bg-gradient-to-r from-brand-accent-start via-brand-accent-middle to-brand-accent-end text-white font-bold text-center rounded-xl shadow-[0_0_20px_rgba(236,72,153,0.4)] hover:shadow-[0_0_35px_rgba(236,72,153,0.6)] hover:scale-[1.02] transition-all duration-300 text-lg"
                >
                    <span className="relative z-10">Request This Custom Plan</span>
                    <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 transition-all duration-700 group-hover:left-[100%]"></div>
                </Link>
                <p className="text-[10px] text-center text-gray-500 mt-4 leading-relaxed">
                    *This is an estimate. Final pricing may vary slightly based on specific project complexities discussed during your consultation.
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceCalculator;
