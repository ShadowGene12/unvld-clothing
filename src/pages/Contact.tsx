import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, MapPin } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "We've received your message and will get back to you soon.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <Helmet>
        <title>Contact | UNVLD</title>
        <meta name="description" content="Get in touch with UNVLD. Questions about orders, products, or partnerships? We're here to help." />
      </Helmet>

      <div className="container-brand py-8 md:py-12">
        <h1 className="text-3xl md:text-4xl font-display mb-8">Contact Us</h1>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl">
          {/* Contact Info */}
          <div className="space-y-8">
            <p className="text-lg text-muted-foreground">
              Questions, feedback, or just want to say hi? We'd love to hear from you.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 mt-1" />
                <div>
                  <h3 className="font-medium mb-1">General Inquiries</h3>
                  <a
                    href="mailto:hello@unvld.com"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    hello@unvld.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 mt-1" />
                <div>
                  <h3 className="font-medium mb-1">Order Support</h3>
                  <a
                    href="mailto:help@unvld.com"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    help@unvld.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 mt-1" />
                <div>
                  <h3 className="font-medium mb-1">Press & Partnerships</h3>
                  <a
                    href="mailto:press@unvld.com"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    press@unvld.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 mt-1" />
                <div>
                  <h3 className="font-medium mb-1">Studio</h3>
                  <p className="text-muted-foreground">
                    Los Angeles, CA<br />
                    (By appointment only)
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <p className="text-sm text-muted-foreground">
                We typically respond within 24-48 hours.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border bg-background focus:outline-none focus:border-foreground transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border bg-background focus:outline-none focus:border-foreground transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Subject *</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border bg-background focus:outline-none focus:border-foreground transition-colors appearance-none"
                >
                  <option value="">Select a topic</option>
                  <option value="order">Order Question</option>
                  <option value="product">Product Inquiry</option>
                  <option value="returns">Returns & Exchanges</option>
                  <option value="dreamfund">Dream Fund</option>
                  <option value="press">Press & Media</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-border bg-background focus:outline-none focus:border-foreground transition-colors resize-none"
                />
              </div>

              <button type="submit" className="w-full btn-hero-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
