import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const TermsOfServicePage: React.FC = () => {
  const pageRef = useScrollAnimation('fade-in');

  return (
    <div ref={pageRef} className="py-20 bg-brand-primary animate-on-scroll">
      <div className="container mx-auto px-6 text-brand-muted">
        <h1 className="text-4xl font-extrabold text-white mb-8">Terms of Service</h1>
        
        <div className="space-y-6 prose prose-invert max-w-none">
          <p>Last updated: {new Date().toLocaleDateString()}</p>

          <h2 className="text-2xl font-bold text-white">1. Terms</h2>
          <p>By accessing this Website, accessible from designingdose.com, you are agreeing to be bound by these Website Terms and Conditions of Use and agree that you are responsible for the agreement with any applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this site. The materials contained in this Website are protected by copyright and trade mark law.</p>

          <h2 className="text-2xl font-bold text-white">2. Use License</h2>
          <p>Permission is granted to temporarily download one copy of the materials on Designing Dose's Website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not: modify or copy the materials; use the materials for any commercial purpose or for any public display; attempt to reverse engineer any software contained on Designing Dose's Website; remove any copyright or other proprietary notations from the materials; or transferring the materials to another person or "mirror" the materials on any other server.</p>

          <h2 className="text-2xl font-bold text-white">3. Disclaimer</h2>
          <p>All the materials on Designing Dose’s Website are provided "as is". Designing Dose makes no warranties, may it be expressed or implied, therefore negates all other warranties. Furthermore, Designing Dose does not make any representations concerning the accuracy or reliability of the use of the materials on its Website or otherwise relating to such materials or any sites linked to this Website.</p>

          <h2 className="text-2xl font-bold text-white">4. Governing Law</h2>
          <p>Any claim related to Designing Dose's Website shall be governed by the laws of our country without regards to its conflict of law provisions.</p>
          
          <h2 className="text-2xl font-bold text-white">Contact Us</h2>
          <p>If you have any questions about these Terms, please contact us at <a href="mailto:info@designingtools.com" className="text-brand-accent hover:underline">info@designingtools.com</a>.</p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServicePage;