import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-main.jpg';

const About: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About | UNVLD</title>
        <meta
          name="description"
          content="UNVLD is one house, four emotional worlds. A brand philosophy rooted in authenticity, intentional craft, and the belief that clothing should reflect who you are."
        />
      </Helmet>

      {/* Hero — Brand Philosophy Statement */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center bg-muted">
        <div className="absolute inset-0">
          <img src={heroImage} alt="UNVLD Philosophy" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/40" />
        </div>
        <div className="relative container-brand text-background">
          <div className="max-w-3xl">
            <p className="text-xs tracking-[0.4em] uppercase mb-6 text-background/60">Philosophy</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display leading-tight mb-6">
              Clothing Should Reflect{' '}
              <span className="italic">Who You Are</span>
            </h1>
            <p className="text-xl text-background/80 max-w-2xl">
              Not who you're expected to be. Not who the algorithm thinks you should become.
            </p>
          </div>
        </div>
      </section>

      {/* The Thesis */}
      <section className="section-spacing">
        <div className="container-brand">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="md:col-span-1">
                <p className="text-xs tracking-[0.4em] uppercase text-muted-foreground mb-2">The Thesis</p>
                <h2 className="text-2xl font-display">Why We Exist</h2>
              </div>
              <div className="md:col-span-2 space-y-6">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Fashion has become noise. Trends that last weeks. Aesthetic prescriptions that flatten 
                  individuality into marketable categories. "Minimalism." "Streetwear." "Quiet luxury." 
                  Labels that tell you what to wear before you've asked yourself what you actually want.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  UNVLD started from a rejection of that. We don't believe you fit into one box. 
                  We believe you contain multitudes—moods, contexts, versions of yourself that 
                  deserve different expressions.
                </p>
                <p className="text-lg leading-relaxed text-foreground font-medium">
                  So we built four worlds. Not product categories. Emotional frequencies. 
                  Each one a complete philosophy. Each one a different answer to the question: 
                  who do you want to be today?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Four Worlds */}
      <section className="py-16 md:py-24 bg-foreground text-background">
        <div className="container-brand">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-xs tracking-[0.4em] uppercase text-background/50 mb-6">The Universe</p>
            <h2 className="text-3xl md:text-4xl font-display mb-6">One House. Four Worlds.</h2>
            <p className="text-background/70 max-w-2xl mx-auto">
              Japanese. Streetwear. Ascend. Subtle. Each world has its own fabric language, 
              its own silhouette philosophy, its own emotional center. Some people live in one. 
              Some travel between them. There's no wrong way.
            </p>
          </div>
          <div className="flex justify-center">
            <Link
              to="/worlds"
              className="inline-flex items-center gap-2 px-8 py-4 bg-background text-foreground text-sm font-medium tracking-wider uppercase hover:bg-background/90 transition-colors"
            >
              Explore the Worlds
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="section-spacing">
        <div className="container-brand">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4">How We Work</p>
              <h2 className="text-3xl md:text-4xl font-display">Guiding Principles</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-xs tracking-[0.4em] uppercase text-primary mb-3">01</p>
                <h3 className="text-xl font-display mb-3">Intentional Over Fast</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Every piece is developed over months. We test silhouettes, refine fabrics, 
                  and reject anything that doesn't feel right. We'd rather release four perfect 
                  pieces than forty forgettable ones.
                </p>
              </div>
              <div>
                <p className="text-xs tracking-[0.4em] uppercase text-primary mb-3">02</p>
                <h3 className="text-xl font-display mb-3">Quality as Ethics</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We believe in making things that last. Not because sustainability is a marketing 
                  angle—because it's the only honest approach to making clothing. Build it right. 
                  Keep it longer.
                </p>
              </div>
              <div>
                <p className="text-xs tracking-[0.4em] uppercase text-primary mb-3">03</p>
                <h3 className="text-xl font-display mb-3">Community Over Customers</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The Dream Fund exists because we believe in reciprocity. 1% of every purchase 
                  supports creatives pursuing their vision. Your style fuels someone else's ambition.
                </p>
              </div>
              <div>
                <p className="text-xs tracking-[0.4em] uppercase text-primary mb-3">04</p>
                <h3 className="text-xl font-display mb-3">No Borrowed Identity</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We don't tell you who to be. We give you tools for self-expression. 
                  The worlds are options, not prescriptions. Mix them. Reject them. Make them yours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Team */}
      <section className="py-16 md:py-24 bg-secondary/30 border-y border-border">
        <div className="container-brand">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4">The Crew</p>
            <h2 className="text-2xl md:text-3xl font-display mb-6">Small Team. Big Intention.</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              We're a distributed collective of designers, makers, and thinkers based between 
              Los Angeles and Tokyo. No massive headquarters. No corporate structure. Just people 
              who care deeply about craft and believe in what we're building.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container-brand text-center">
          <h2 className="text-3xl md:text-4xl font-display mb-4">
            Ready to Find Your Line?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Explore the four worlds and discover which emotional frequency resonates with you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/find-your-line"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-background text-foreground text-sm font-medium tracking-wider uppercase hover:bg-background/90 transition-colors"
            >
              Find Your Line
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/worlds"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-primary-foreground text-primary-foreground text-sm font-medium tracking-wider uppercase hover:bg-primary-foreground hover:text-primary transition-colors"
            >
              Explore Worlds
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
