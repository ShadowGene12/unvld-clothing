import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass } from 'lucide-react';
import { collections } from '@/data/mockData';

const Worlds: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Worlds | UNVLD</title>
        <meta
          name="description"
          content="UNVLD is one house, four emotional worlds. Ascend, Japanese, Streetwear, and Subtle—each carries its own frequency. Find yours."
        />
      </Helmet>

      {/* Editorial Hero */}
      <section className="py-20 md:py-32 bg-foreground text-background">
        <div className="container-brand">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs tracking-[0.4em] uppercase text-background/50 mb-6">The UNVLD Universe</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display leading-tight mb-6">
              Four Worlds.{' '}
              <span className="italic">One House.</span>
            </h1>
            <p className="text-lg md:text-xl text-background/70 max-w-2xl mx-auto leading-relaxed">
              We don't believe in one aesthetic. We believe in emotional frequencies. 
              Each world has its own philosophy, its own fabric language, its own reason to exist.
            </p>
          </div>
        </div>
      </section>

      {/* Worlds Editorial Grid */}
      <section className="py-16 md:py-24">
        <div className="container-brand space-y-24 md:space-y-32">
          {collections.map((world, index) => (
            <div
              key={world.id}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <Link
                to={`/worlds/${world.slug}`}
                className={`relative aspect-[4/5] overflow-hidden bg-muted group ${
                  index % 2 === 1 ? 'lg:order-2' : ''
                }`}
              >
                <img
                  src={world.heroImage}
                  alt={world.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/10 group-hover:bg-foreground/20 transition-colors" />
                <div className="absolute bottom-6 left-6">
                  <span className="px-4 py-2 bg-background/90 text-foreground text-xs font-medium tracking-wider uppercase">
                    {world.accentWord}
                  </span>
                </div>
              </Link>

              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <p className="text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4">
                  World {String(index + 1).padStart(2, '0')}
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display mb-4">
                  {world.name}
                </h2>
                <p className="text-xl md:text-2xl font-display text-primary mb-6 italic">
                  "{world.emotionalStatement}"
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {world.moodCaption}
                </p>
                <Link
                  to={`/worlds/${world.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all"
                >
                  Enter {world.name}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Find Your Line CTA */}
      <section className="py-20 md:py-28 bg-secondary/30 border-y border-border">
        <div className="container-brand">
          <div className="max-w-3xl mx-auto text-center">
            <Compass className="w-8 h-8 mx-auto mb-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-display mb-4">Not Sure Where to Start?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Our worlds aren't product categories—they're emotional frequencies. Take the quiz 
              to discover which world resonates with your energy.
            </p>
            <Link
              to="/find-your-line"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground text-sm font-medium tracking-wider uppercase hover:bg-primary/90 transition-colors"
            >
              Find Your Line
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Worlds;
