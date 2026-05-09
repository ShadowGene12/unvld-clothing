import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Heart, Users, Lightbulb, ArrowRight } from 'lucide-react';
import { dreamFundUpdates } from '@/data/mockData';
import { toast } from '@/hooks/use-toast';

const DreamFund: React.FC = () => {
  const [impactCount] = useState(23);
  const [totalFunded] = useState(47500);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    dreamDescription: '',
    amountRequested: '',
    whyItMatters: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted",
      description: "We've received your Dream Fund application. We'll be in touch soon.",
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      location: '',
      dreamDescription: '',
      amountRequested: '',
      whyItMatters: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <Helmet>
        <title>Dream Fund | UNVLD</title>
        <meta
          name="description"
          content="The UNVLD Dream Fund supports creatives pursuing their passions. 1% of every purchase fuels someone's ambition."
        />
      </Helmet>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container-brand text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display mb-6">
            The Dream Fund
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Every purchase you make fuels someone's dream. We dedicate 1% of all sales 
            to supporting creatives, entrepreneurs, and dreamers in their pursuit of 
            something extraordinary.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="section-spacing">
        <div className="container-brand">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-display mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At UNVLD, we believe that fashion is about more than what you wear—it's about 
              who you are and what you stand for. The Dream Fund embodies our commitment to 
              community, creativity, and the courage to pursue your vision. When you buy from 
              us, you're not just getting clothes. You're investing in dreams.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 md:py-16 bg-secondary/30">
        <div className="container-brand">
          <h2 className="text-2xl md:text-3xl font-display text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center border-2 border-primary text-primary">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">You Shop</h3>
              <p className="text-sm text-muted-foreground">
                1% of every purchase automatically goes to the Dream Fund. 
                No extra cost, no extra steps.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center border-2 border-primary text-primary">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">We Collect</h3>
              <p className="text-sm text-muted-foreground">
                Contributions pool together monthly. Our community reviews 
                applications and selects recipients.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center border-2 border-primary text-primary">
                <Lightbulb className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">Dreams Happen</h3>
              <p className="text-sm text-muted-foreground">
                Funds go directly to dreamers—for equipment, education, 
                or whatever they need to take the next step.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Tracker */}
      <section className="py-12 md:py-16 border-b border-border">
        <div className="container-brand">
          <h2 className="text-2xl md:text-3xl font-display text-center mb-12">Our Impact</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="text-center p-8 bg-secondary/30">
              <p className="text-5xl md:text-6xl font-display text-primary mb-2">{impactCount}</p>
              <p className="text-sm text-muted-foreground uppercase tracking-wider">Dreams Funded</p>
            </div>
            <div className="text-center p-8 bg-secondary/30">
              <p className="text-5xl md:text-6xl font-display text-primary mb-2">
                ${totalFunded.toLocaleString()}
              </p>
              <p className="text-sm text-muted-foreground uppercase tracking-wider">Total Contributed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="section-spacing">
        <div className="container-brand">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display text-center mb-4">
              Apply or Nominate
            </h2>
            <p className="text-center text-muted-foreground mb-8">
              Have a dream you're chasing? Know someone who deserves support? 
              Tell us about it.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
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
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Phone (optional)</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border bg-background focus:outline-none focus:border-foreground transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Location *</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    placeholder="City, State/Country"
                    className="w-full px-4 py-3 border border-border bg-background focus:outline-none focus:border-foreground transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Describe the Dream *</label>
                <textarea
                  name="dreamDescription"
                  value={formData.dreamDescription}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="What's the dream you're chasing?"
                  className="w-full px-4 py-3 border border-border bg-background focus:outline-none focus:border-foreground transition-colors resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Amount Requested *</label>
                <input
                  type="text"
                  name="amountRequested"
                  value={formData.amountRequested}
                  onChange={handleChange}
                  required
                  placeholder="$500 - $5,000"
                  className="w-full px-4 py-3 border border-border bg-background focus:outline-none focus:border-foreground transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Why It Matters *</label>
                <textarea
                  name="whyItMatters"
                  value={formData.whyItMatters}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="How will this support help you take the next step?"
                  className="w-full px-4 py-3 border border-border bg-background focus:outline-none focus:border-foreground transition-colors resize-none"
                />
              </div>

              <button type="submit" className="w-full btn-hero-primary">
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Updates Section */}
      <section className="section-spacing bg-secondary/30">
        <div className="container-brand">
          <h2 className="text-2xl md:text-3xl font-display text-center mb-12">
            Dream Fund Stories
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {dreamFundUpdates.map(update => (
              <article key={update.id} className="bg-background">
                <div className="aspect-video bg-muted">
                  <img
                    src={update.image}
                    alt={update.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                    {update.date}
                  </p>
                  <h3 className="font-semibold mb-2">{update.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {update.excerpt}
                  </p>
                  <button className="mt-4 inline-flex items-center gap-1 text-sm font-medium hover:gap-2 transition-all">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default DreamFund;
