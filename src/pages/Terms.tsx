import React from 'react';
import { Helmet } from 'react-helmet-async';

const Terms: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | UNVLD</title>
        <meta name="description" content="UNVLD terms of service and conditions of use." />
      </Helmet>

      <div className="container-brand py-8 md:py-12">
        <h1 className="text-3xl md:text-4xl font-display mb-8">Terms of Service</h1>

        <div className="max-w-3xl prose prose-neutral">
          <p className="text-muted-foreground mb-8">
            Last updated: January 2026
          </p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">1. Agreement to Terms</h2>
            <p className="text-muted-foreground">
              By accessing and using the UNVLD website and services, you agree to be bound 
              by these Terms of Service. If you do not agree to these terms, please do not 
              use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">2. Use of Website</h2>
            <p className="text-muted-foreground">
              You agree to use this website for lawful purposes only. You may not use this 
              site to engage in any activity that violates local, state, national, or 
              international laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">3. Product Information</h2>
            <p className="text-muted-foreground">
              We strive to display product colors and images as accurately as possible. 
              However, we cannot guarantee that your device's display will accurately 
              reflect actual colors. Product availability is subject to change.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">4. Pricing</h2>
            <p className="text-muted-foreground">
              All prices are in USD unless otherwise stated. We reserve the right to change 
              prices at any time. If an item is mispriced, we reserve the right to cancel 
              the order and refund your payment.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">5. Payment</h2>
            <p className="text-muted-foreground">
              We accept major credit cards and other payment methods as displayed at 
              checkout. By submitting payment, you represent that you are authorized to 
              use the payment method.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">6. Intellectual Property</h2>
            <p className="text-muted-foreground">
              All content on this website, including text, graphics, logos, images, and 
              software, is the property of UNVLD and protected by intellectual property 
              laws. You may not reproduce, distribute, or create derivative works without 
              our written permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">7. Limitation of Liability</h2>
            <p className="text-muted-foreground">
              UNVLD shall not be liable for any indirect, incidental, special, or 
              consequential damages arising from the use of our website or products.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">8. Changes to Terms</h2>
            <p className="text-muted-foreground">
              We reserve the right to update these terms at any time. Changes will be 
              posted on this page with an updated revision date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">9. Contact</h2>
            <p className="text-muted-foreground">
              For questions about these Terms, contact us at legal@unvld.com.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default Terms;
