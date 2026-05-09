import React from 'react';
import { Helmet } from 'react-helmet-async';

const Returns: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Returns | UNVLD</title>
        <meta name="description" content="UNVLD return policy. Free returns within 30 days. Learn how to return or exchange your order." />
      </Helmet>

      <div className="container-brand py-8 md:py-12">
        <h1 className="text-3xl md:text-4xl font-display mb-8">Returns & Exchanges</h1>

        <div className="max-w-3xl space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-3">Our Policy</h2>
            <p className="text-muted-foreground">
              We want you to love what you wear. If something doesn't work out, we offer 
              free returns within 30 days of delivery for items in original condition with 
              tags attached.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">How to Return</h2>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>Email returns@unvld.com with your order number and reason for return.</li>
              <li>You'll receive a prepaid shipping label within 24 hours.</li>
              <li>Pack items in original packaging if possible.</li>
              <li>Drop off at any carrier location.</li>
              <li>Refund processes within 5-7 business days of receipt.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Exchanges</h2>
            <p className="text-muted-foreground">
              Need a different size or color? We're happy to exchange. Follow the return 
              process above and indicate your preferred exchange in the email. If the item 
              is available, we'll ship it as soon as we receive your return.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Final Sale Items</h2>
            <p className="text-muted-foreground">
              Items marked "Final Sale" cannot be returned or exchanged. This typically 
              includes limited edition releases and heavily discounted items.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">International Returns</h2>
            <p className="text-muted-foreground">
              International customers are responsible for return shipping costs. We 
              recommend using a tracked shipping method for your protection.
            </p>
          </section>

          {/* Contact */}
          <section className="bg-secondary/30 p-8">
            <h2 className="text-xl font-semibold mb-3">Need Help?</h2>
            <p className="text-muted-foreground mb-4">
              Our team is here to make returns easy.
            </p>
            <a
              href="mailto:returns@unvld.com"
              className="inline-flex items-center text-sm font-medium underline underline-offset-4"
            >
              returns@unvld.com
            </a>
          </section>
        </div>
      </div>
    </>
  );
};

export default Returns;
