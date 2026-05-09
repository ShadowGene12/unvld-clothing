import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowDown, Compass } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { collections, getNewProducts, getBestsellers } from '@/data/mockData';
import ProductCard from '@/components/product/ProductCard';
import heroImage from '@/assets/hero-main.jpg';
import { toast } from '@/hooks/use-toast';

const worldDescriptions: Record<string, string> = {
  ascend: 'For those climbing toward something greater. Technical fabrics, refined silhouettes, relentless momentum.',
  japanese: 'Where meticulous craft meets wabi-sabi philosophy. Minimalism as a way of being.',
  streetwear: 'Raw urban energy distilled into wearable art. Bold, unapologetic, limited.',
  subtle: 'Quiet luxury that speaks volumes. For those who know style needs no announcement.',
};

const Index: React.FC = () => {
  const [email, setEmail] = useState('');
  const featured = [...getNewProducts(), ...getBestsellers()].slice(0, 4);

  const handleEarlyAccess = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({ title: 'You\'re on the list', description: 'We\'ll be in touch with early access details.' });
      setEmail('');
    }
  };

  return (
    <>
      <Helmet>
        <title>UNVLD - One House, Four Worlds</title>
        <meta
          name="description"
          content="UNVLD is a premium streetwear house built on four emotional worlds: Ascend, Japanese, Streetwear, and Subtle. Find your line."
        />
      </Helmet>

      {/* Hero — Master Brand Statement */}
      <section className="relative min-h-[90vh] flex items-center bg-muted">
        <div className="absolute inset-0 overflow-hidden">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            poster={heroImage}
            className="w-full h-full object-cover scale-105"
            style={{ filter: "brightness(0.8) contrast(1.1)" }}
          >
            <source src="https://cdn.coverr.co/videos/coverr-walking-through-the-city-at-night-8133/1080p.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-foreground/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/10 via-transparent to-background/90" />
        </div>
        <div className="relative container-brand text-background">
          <div className="max-w-2xl stagger-children">
            <p className="text-xs tracking-[0.35em] uppercase mb-6 text-background/70">One House · Four Worlds</p>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-display leading-[1.1] mb-6">
              Dare to Be <span className="italic">Unveiled</span>
            </h1>
            <p className="text-lg md:text-xl text-background/80 mb-10 max-w-lg leading-relaxed">
              Premium streetwear rooted in authenticity. Four emotional worlds, one vision—wear what you are.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/worlds" className="btn-hero-primary">
                <Compass className="w-4 h-4 mr-2" />
                Find Your Line
              </Link>
              <Link to="/shop" className="btn-hero-secondary border-background text-background hover:bg-background hover:text-foreground">
                Shop the Drop
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-background animate-bounce">
          <ArrowDown className="w-6 h-6" />
        </div>
      </section>

      {/* Brand Thesis */}
      <section className="section-spacing">
        <div className="container-brand">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs tracking-[0.35em] uppercase text-muted-foreground mb-6">The UNVLD Universe</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display mb-6 leading-tight">
              One House,{' '}
              <span className="text-primary">Four Worlds</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              UNVLD isn't a single aesthetic—it's a constellation of moods. Each world carries its own 
              emotional frequency, its own fabric language, its own reason to exist. Together, they form a 
              house that refuses to be one thing.
            </p>
          </div>
        </div>
      </section>

      {/* Four Worlds */}
      <section className="pb-16 md:pb-24 lg:pb-32">
        <div className="container-brand">
          <div className="collection-grid">
            {collections.map(collection => (
              <Link
                key={collection.id}
                to={`/worlds/${collection.slug}`}
                className="group relative aspect-[4/5] overflow-hidden bg-muted"
              >
                <img
                  src={collection.heroImage}
                  alt={`${collection.name} World`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/30 group-hover:bg-foreground/45 transition-colors duration-500" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10 text-background">
                  <p className="text-[10px] tracking-[0.4em] uppercase mb-2 text-background/60">World</p>
                  <h3 className="text-3xl md:text-4xl font-display mb-3">{collection.name}</h3>
                  <p className="text-sm text-background/75 mb-5 max-w-xs leading-relaxed">
                    {worldDescriptions[collection.slug] || collection.shortDescription}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all duration-300">
                    <span>Enter World</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Find Your Line CTA */}
      <section className="py-20 md:py-28 bg-foreground text-background">
        <div className="container-brand">
          <div className="max-w-3xl mx-auto text-center">
            <Compass className="w-8 h-8 mx-auto mb-6 text-primary" />
            <h2 className="text-3xl md:text-4xl font-display mb-4">Find Your Line</h2>
            <p className="text-background/60 mb-8 max-w-xl mx-auto leading-relaxed">
              Not sure where you belong? Explore our worlds and discover the emotional frequency 
              that resonates with you. Every line has a story—find yours.
            </p>
            <Link
              to="/worlds"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground text-sm font-medium tracking-wider uppercase hover:bg-primary/90 transition-colors"
            >
              Explore All Worlds
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Curated Featured Pieces */}
      <section className="section-spacing">
        <div className="container-brand">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <p className="text-xs tracking-[0.35em] uppercase text-muted-foreground mb-3">Curated Selection</p>
              <h2 className="text-3xl md:text-4xl font-display">Featured Pieces</h2>
            </div>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all"
            >
              View All
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {featured.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Brand / Process / Editorial Strip */}
      <section className="py-16 md:py-24 bg-secondary/30 border-y border-border">
        <div className="container-brand">
          <div className="grid md:grid-cols-3 gap-12 md:gap-16">
            <div className="text-center">
              <p className="text-xs tracking-[0.35em] uppercase text-muted-foreground mb-4">Philosophy</p>
              <h3 className="text-xl font-display mb-3">More Than Clothing</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                What you wear should reflect who you are, not who you're expected to be.
              </p>
            </div>
            <div className="text-center">
              <p className="text-xs tracking-[0.35em] uppercase text-muted-foreground mb-4">Process</p>
              <h3 className="text-xl font-display mb-3">Intentional Craft</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Every piece is developed over months—tested, refined, and released only when it's right.
              </p>
            </div>
            <div className="text-center">
              <p className="text-xs tracking-[0.35em] uppercase text-muted-foreground mb-4">Impact</p>
              <h3 className="text-xl font-display mb-3">The Dream Fund</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                1% of every purchase supports creatives pursuing their dreams.
              </p>
              <Link to="/dream-fund" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all">
                Learn More <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Early Access Capture */}
      <section className="section-spacing">
        <div className="container-brand">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xs tracking-[0.35em] uppercase text-muted-foreground mb-6">Be First</p>
            <h2 className="text-3xl md:text-4xl font-display mb-4">Get Early Access</h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto leading-relaxed">
              New worlds drop without warning. Join the inner circle for first access to pieces, stories, and invitations before anyone else.
            </p>
            <form onSubmit={handleEarlyAccess} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 px-5 py-4 bg-transparent border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors text-sm"
                required
              />
              <button
                type="submit"
                className="px-8 py-4 bg-primary text-primary-foreground text-sm font-medium tracking-wider uppercase hover:bg-primary/90 transition-colors"
              >
                Join
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
