import React from 'react';
import { Helmet } from 'react-helmet-async';

const Privacy: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | UNVLD</title>
        <meta name="description" content="UNVLD privacy policy. Learn how we collect, use, and protect your personal information." />
      </Helmet>

      <div className="container-brand py-8 md:py-12">
        <h1 className="text-3xl md:text-4xl font-display mb-8">Privacy Policy</h1>

        <div className="max-w-3xl">
          <p className="text-muted-foreground mb-8">
            Last updated: January 2026
          </p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">Information We Collect</h2>
            <p className="text-muted-foreground mb-4">
              We collect information you provide directly, including:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Name, email, shipping address when you make a purchase</li>
              <li>Payment information (processed securely by our payment provider)</li>
              <li>Communication preferences when you subscribe to our newsletter</li>
              <li>Messages you send through our contact forms</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">How We Use Your Information</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Process and fulfill your orders</li>
              <li>Send order confirmations and shipping updates</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send marketing communications (with your consent)</li>
              <li>Improve our website and services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">Information Sharing</h2>
            <p className="text-muted-foreground">
              We do not sell your personal information. We share data only with service 
              providers who help us operate our business (payment processors, shipping 
              carriers, email services) and only as necessary to provide our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">Cookies</h2>
            <p className="text-muted-foreground">
              We use cookies to enhance your browsing experience, analyze site traffic, 
              and personalize content. You can control cookie preferences through your 
              browser settings.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">Data Security</h2>
            <p className="text-muted-foreground">
              We implement appropriate security measures to protect your personal 
              information. However, no method of transmission over the internet is 
              100% secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">Your Rights</h2>
            <p className="text-muted-foreground">
              You have the right to access, update, or delete your personal information. 
              To exercise these rights, contact us at privacy@unvld.com.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">Updates to This Policy</h2>
            <p className="text-muted-foreground">
              We may update this policy from time to time. We will notify you of 
              significant changes by email or through a notice on our website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
            <p className="text-muted-foreground">
              Questions about this policy? Contact us at privacy@unvld.com.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default Privacy;
