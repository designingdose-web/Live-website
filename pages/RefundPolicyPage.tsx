import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const RefundPolicyPage: React.FC = () => {
  const pageRef = useScrollAnimation('fade-in');

  return (
    <div ref={pageRef} className="py-20 bg-brand-primary animate-on-scroll">
      <div className="container mx-auto px-6 text-brand-muted">
        <h1 className="text-4xl font-extrabold text-white mb-8">Refund Policy</h1>
        
        <div className="space-y-6 prose prose-invert max-w-none">
          <p>Last updated: {new Date().toLocaleDateString()}</p>

          <p>Thank you for shopping at Designing Dose. We appreciate the fact that you like to buy the stuff we build. We also want to make sure you have a rewarding experience while you’re exploring, evaluating, and purchasing our products.</p>
          
          <h2 className="text-2xl font-bold text-white">General Policy</h2>
          <p>Due to the nature of our services (digital services), we do not generally offer refunds once the work has commenced. However, we want to ensure our clients are satisfied. If you are not happy with the service, please contact us to discuss the issue.</p>
          
          <h2 className="text-2xl font-bold text-white">Exceptions</h2>
          <p>A refund may be considered in the following situations:</p>
          <ul className="list-disc pl-5">
            <li>The service was not delivered as described in the package details.</li>
            <li>There was a critical error in our service that we are unable to resolve.</li>
          </ul>
          <p>Refund requests will be evaluated on a case-by-case basis. A deposit for a project is non-refundable as it covers the initial costs and resources allocated to your project.</p>
          
          <h2 className="text-2xl font-bold text-white">Contact Us</h2>
          <p>If you have any questions about our Refunds Policy, please contact us at <a href="mailto:info@designingdose.com" className="text-brand-accent hover:underline">info@designingdose.com</a>.</p>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicyPage;