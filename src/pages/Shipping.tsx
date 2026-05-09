import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Package, Truck, Globe } from 'lucide-react';

const Shipping: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Shipping | UNVLD</title>
        <meta name="description" content="UNVLD shipping information. Free shipping on orders over $150. Worldwide delivery available." />
      </Helmet>

      <div className="container-brand py-8 md:py-12">
        <h1 className="text-3xl md:text-4xl font-display mb-8">Shipping</h1>

        <div className="max-w-3xl space-y-12">
          {/* Shipping Options */}
          <section>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 border border-border">
                <Package className="w-8 h-8 mb-4" />
                <h3 className="font-semibold mb-2">Standard</h3>
                <p className="text-sm text-muted-foreground mb-2">5-7 business days</p>
                <p className="text-sm font-medium">$8 or FREE over $150</p>
              </div>
              <div className="p-6 border border-border">
                <Truck className="w-8 h-8 mb-4" />
                <h3 className="font-semibold mb-2">Express</h3>
                <p className="text-sm text-muted-foreground mb-2">2-3 business days</p>
                <p className="text-sm font-medium">$15</p>
              </div>
              <div className="p-6 border border-border">
                <Globe className="w-8 h-8 mb-4" />
                <h3 className="font-semibold mb-2">International</h3>
                <p className="text-sm text-muted-foreground mb-2">7-14 business days</p>
                <p className="text-sm font-medium">$25</p>
              </div>
            </div>
          </section>

          {/* Details */}
          <section className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-3">Processing Time</h2>
              <p className="text-muted-foreground">
                Orders are processed within 1-2 business days. You'll receive a confirmation 
                email with tracking information once your order ships.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">International Orders</h2>
              <p className="text-muted-foreground">
                We ship worldwide. International customers may be responsible for duties 
                and taxes upon delivery. These fees are not included in your order total.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">Order Tracking</h2>
              <p className="text-muted-foreground">
                Once your order ships, you'll receive an email with tracking information. 
                You can also track your order through your account page.
              </p>
            </div>
          </section>

          {/* Contact */}
          <section className="bg-secondary/30 p-8">
            <h2 className="text-xl font-semibold mb-3">Questions?</h2>
            <p className="text-muted-foreground mb-4">
              If you have questions about your shipment, reach out to our team.
            </p>
            <a
              href="mailto:shipping@unvld.com"
              className="inline-flex items-center text-sm font-medium underline underline-offset-4"
            >
              shipping@unvld.com
            </a>
          </section>
        </div>
      </div>
    </>
  );
};

export default Shipping;
