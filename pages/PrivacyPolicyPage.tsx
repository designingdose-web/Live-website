import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const PrivacyPolicyPage: React.FC = () => {
  const pageRef = useScrollAnimation('fade-in');

  return (
    <div ref={pageRef} className="py-20 bg-brand-primary animate-on-scroll">
      <div className="container mx-auto px-6 text-brand-muted">
        <h1 className="text-4xl font-extrabold text-white mb-8">Privacy Policy</h1>
        
        <div className="space-y-6 prose prose-invert max-w-none">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <p>Designing Dose ("us", "we", or "our") operates the Designing Dose website (the "Service"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.</p>
          
          <h2 className="text-2xl font-bold text-white">Information Collection and Use</h2>
          <p>We collect several different types of information for various purposes to provide and improve our Service to you. This may include, but is not limited to, your email address, name, and usage data.</p>
          
          <h2 className="text-2xl font-bold text-white">Use of Data</h2>
          <p>Designing Dose uses the collected data for various purposes: to provide and maintain the Service, to notify you about changes to our Service, to provide customer care and support, and to gather analysis or valuable information so that we can improve the Service.</p>
          
          <h2 className="text-2xl font-bold text-white">Security of Data</h2>
          <p>The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</p>
          
          <h2 className="text-2xl font-bold text-white">Changes to This Privacy Policy</h2>
          <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.</p>
          
          <h2 className="text-2xl font-bold text-white">Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:info@designingtools.com" className="text-brand-accent hover:underline">info@designingtools.com</a>.</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;