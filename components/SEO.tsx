
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  preloadImage?: string; // Fallback for simple preload
  preloadSrcSet?: string; // New: For responsive image preloading
  preloadSizes?: string;  // New: For responsive image sizing
}

const SEO: React.FC<SEOProps> = ({ title, description, keywords, image, url, preloadImage, preloadSrcSet, preloadSizes }) => {
  const location = useLocation();
  const baseUrl = "https://designingdose.com";
  const canonicalUrl = url || `${baseUrl}${location.pathname}`;
  const defaultImage = "https://res.cloudinary.com/dmaqptknc/image/upload/v1765127202/new_web2_lbyr0c.webp";

  // SEO Standards
  const MAX_TITLE_LENGTH = 60;
  const MAX_DESC_LENGTH = 160;

  // Helper to truncate text intelligently (at word boundaries)
  const truncate = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substr(0, text.lastIndexOf(' ', maxLength)) + '...';
  };

  useEffect(() => {
    const brandName = "Designing Dose";
    let finalTitle = title;

    // Logic: Only append brand name if there is room.
    // If the provided title is short (< 40 chars), append brand.
    // If it's long, leave it alone to prioritize keywords.
    if (!title.includes(brandName)) {
        if (title.length + brandName.length + 3 <= MAX_TITLE_LENGTH) {
            finalTitle = `${title} | ${brandName}`;
        }
    }

    // Ensure title doesn't exceed 60 chars
    finalTitle = truncate(finalTitle, MAX_TITLE_LENGTH);
    
    // Ensure description doesn't exceed 160 chars
    const finalDescription = truncate(description, MAX_DESC_LENGTH);

    // Update Document Title
    document.title = finalTitle;

    const updateMeta = (name: string, content: string, attribute = 'name') => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    updateMeta('description', finalDescription);
    updateMeta('keywords', keywords || "Web Development, SEO, Mobile Apps, Designing Dose, Digital Marketing, Ireland, USA");

    updateMeta('og:title', finalTitle, 'property');
    updateMeta('og:description', finalDescription, 'property');
    updateMeta('og:url', canonicalUrl, 'property');
    updateMeta('og:image', image || defaultImage, 'property');
    updateMeta('og:type', 'website', 'property');
    updateMeta('og:site_name', 'Designing Dose', 'property');

    updateMeta('twitter:card', 'summary_large_image', 'property');
    updateMeta('twitter:title', finalTitle, 'property');
    updateMeta('twitter:description', finalDescription, 'property');
    updateMeta('twitter:image', image || defaultImage, 'property');

    // Canonical Link
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonicalUrl);

    // Image Preloading Logic (LCP Optimization)
    // Removes old preloads to prevent bloat, adds new one if requested
    const existingPreload = document.querySelector('link[rel="preload"][as="image"]');
    if (existingPreload) {
        document.head.removeChild(existingPreload);
    }

    if (preloadImage || preloadSrcSet) {
        const linkPreload = document.createElement('link');
        linkPreload.setAttribute('rel', 'preload');
        linkPreload.setAttribute('as', 'image');
        linkPreload.setAttribute('fetchpriority', 'high');
        
        if (preloadSrcSet) {
            linkPreload.setAttribute('imagesrcset', preloadSrcSet);
            if (preloadSizes) linkPreload.setAttribute('imagesizes', preloadSizes);
        } else if (preloadImage) {
            linkPreload.setAttribute('href', preloadImage);
        }
        
        document.head.appendChild(linkPreload);
    }

  }, [title, description, keywords, image, canonicalUrl, preloadImage, preloadSrcSet, preloadSizes]);

  return null;
};

export default SEO;
