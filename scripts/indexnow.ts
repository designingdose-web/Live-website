import { blogPosts } from '../data/blogData';

// IndexNow URL Submission Script
// Run this after every deployment: npx tsx scripts/indexnow.ts

const API_KEY = '0c5d969a1484d49788abb97ca0874e';
const HOST = 'designingdose.com';
const KEY_LOCATION = `https://${HOST}/${API_KEY}.txt`;

const urlsToSubmit = [
  `https://${HOST}/`,
  `https://${HOST}/about`,
  `https://${HOST}/contact`,
  `https://${HOST}/services/website-packages`,
  `https://${HOST}/services/search-engine-marketing-sem`,
  `https://${HOST}/services/social-media`,
  `https://${HOST}/services/logo-design`,
  `https://${HOST}/services/mobile-app-development`,
  `https://${HOST}/services/dropshipping`,
  `https://${HOST}/services/video-animation`,
  `https://${HOST}/services/illustration`,
  `https://${HOST}/blog`,
  `https://${HOST}/privacy-policy`,
  `https://${HOST}/refund-policy`,
  `https://${HOST}/terms-of-service`,
];

const submitToIndexNow = async (searchEngine: string) => {
  const endpoint = `https://${searchEngine}/indexnow`;
  
  const payload = {
    host: HOST,
    key: API_KEY,
    keyLocation: KEY_LOCATION,
    urlList: urlsToSubmit,
  };

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(payload),
    });
    
    if (response.status === 200) {
      console.log(`✅ ${searchEngine}: Successfully submitted ${urlsToSubmit.length} URLs`);
    } else if (response.status === 202) {
      console.log(`✅ ${searchEngine}: URLs accepted for processing`);
    } else {
      console.log(`⚠️ ${searchEngine}: Response ${response.status}`);
    }
  } catch (error) {
    console.error(`❌ ${searchEngine}: Failed -`, error);
  }
};

const run = async () => {
  console.log(`\n🚀 IndexNow Submission for ${HOST}`);
  
  // Dynamically add all blog post URLs
  blogPosts.forEach(post => urlsToSubmit.push(`https://${HOST}/blog/${post.id}`));
  console.log(`📝 Including ${blogPosts.length} blog posts. Total: ${urlsToSubmit.length} URLs`);
  console.log(`📋 Submitting ${urlsToSubmit.length} URLs...\n`);
  
  // Submit to both Bing and Google via IndexNow
  await submitToIndexNow('www.bing.com');
  await submitToIndexNow('api.indexnow.org');
  
  console.log('\n✅ IndexNow submission complete!');
};

run();
