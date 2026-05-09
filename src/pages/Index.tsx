import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { getNewProducts, getBestsellers } from '@/data/mockData';
import ProductCard from '@/components/product/ProductCard';

import HeroSection from '@/components/home/HeroSection';
import BrandThesis from '@/components/home/BrandThesis';
import WorldsGrid from '@/components/home/WorldsGrid';
import EarlyAccessForm from '@/components/home/EarlyAccessForm';

const Index: React.FC = () => {
  const featured = [...getNewProducts(), ...getBestsellers()].slice(0, 4);

  return (
    <>
      <Helmet>
        <title>UNVLD - One House, Four Worlds</title>
        <meta
          name="description"
          content="UNVLD is a premium streetwear house built on four emotional worlds: Ascend, Japanese, Streetwear, and Subtle. Find your line."
        />
      </Helmet>

      <HeroSection />
      
      <BrandThesis />
      
      <WorldsGrid />

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
              className="inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all duration-300"
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
              <Link to="/dream-fund" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all duration-300">
                Learn More <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Early Access Capture */}
      <section className="section-spacing">
        <div className="container-brand">
          <EarlyAccessForm />
        </div>
      </section>
    </>
  );
};

export default Index;
