
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  preloadImage?: string; // Fallback for simple preload
  preloadSrcSet?: string; // New: For responsive image preloading
  preloadSizes?: string;  // New: For responsive image sizing
  noindex?: boolean;      // New: For 404 pages or private content
  schema?: object | object[];
}

const SEO: React.FC<SEOProps> = ({ title, description, image, url, preloadImage, preloadSrcSet, preloadSizes, noindex, schema }) => {
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
    if (!title.includes(brandName)) {
        if (title.length + brandName.length + 3 <= MAX_TITLE_LENGTH) {
            finalTitle = `${title} | ${brandName}`;
        }
    }

    finalTitle = truncate(finalTitle, MAX_TITLE_LENGTH);
    const finalDescription = truncate(description, MAX_DESC_LENGTH);

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

    // Robots Logic: Force noindex for 404s to satisfy SEO audit tools
    const robotsContent = noindex ? 'noindex, nofollow' : 'index, follow';

    // Actively remove obsolete keywords meta tag
    const keywordsMeta = document.querySelector('meta[name="keywords"]');
    if (keywordsMeta) keywordsMeta.parentNode?.removeChild(keywordsMeta);

    updateMeta('robots', robotsContent);
    updateMeta('googlebot', robotsContent);

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

    // Image Preloading Logic
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

    // Schema injection
    const existingSchema = document.querySelector('script[type="application/ld+json"][data-dd-schema]');
    if (existingSchema) {
      document.head.removeChild(existingSchema);
    }
    if (schema) {
      const schemaScript = document.createElement('script');
      schemaScript.setAttribute('type', 'application/ld+json');
      schemaScript.setAttribute('data-dd-schema', 'true');
      schemaScript.textContent = JSON.stringify(schema);
      document.head.appendChild(schemaScript);
    }

  }, [title, description, image, canonicalUrl, preloadImage, preloadSrcSet, preloadSizes, noindex, schema]);

  return null;
};

export default SEO;
