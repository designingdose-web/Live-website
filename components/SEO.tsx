
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, keywords, image, url }) => {
  const location = useLocation();
  // Ensure we have a clean canonical URL
  const baseUrl = "https://designingdose.com";
  const canonicalUrl = url || `${baseUrl}${location.pathname}`;
  const defaultImage = "https://res.cloudinary.com/dmaqptknc/image/upload/v1765127202/new_web2_lbyr0c.webp";

  useEffect(() => {
    // 1. Update Document Title
    document.title = `${title} | Designing Dose`;

    // 2. Helper to update or create meta tags
    const updateMeta = (name: string, content: string, attribute = 'name') => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 3. Update Standard SEO Tags
    updateMeta('description', description);
    updateMeta('keywords', keywords || "Web Development, SEO, Mobile Apps, Designing Dose, Digital Marketing, Ireland, USA, UK, Europe, Australia, Canada, Pakistan");

    // 4. Update Open Graph Tags
    updateMeta('og:title', title, 'property');
    updateMeta('og:description', description, 'property');
    updateMeta('og:url', canonicalUrl, 'property');
    updateMeta('og:image', image || defaultImage, 'property');
    updateMeta('og:type', 'website', 'property');
    updateMeta('og:site_name', 'Designing Dose', 'property');

    // 5. Update Twitter Tags
    updateMeta('twitter:card', 'summary_large_image', 'property');
    updateMeta('twitter:title', title, 'property');
    updateMeta('twitter:description', description, 'property');
    updateMeta('twitter:image', image || defaultImage, 'property');

    // 6. Update Canonical Link
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonicalUrl);

  }, [title, description, keywords, image, canonicalUrl]);

  return null;
};

export default SEO;
