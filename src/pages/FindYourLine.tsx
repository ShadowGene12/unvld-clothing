import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass } from 'lucide-react';

const FindYourLine: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Find Your Line | UNVLD</title>
        <meta
          name="description"
          content="Discover which UNVLD world resonates with your energy. Take our quiz to find your emotional frequency."
        />
      </Helmet>

      {/* Hero */}
      <section className="py-20 md:py-28 bg-foreground text-background min-h-screen flex items-center">
        <div className="container-brand">
          <div className="max-w-3xl mx-auto text-center">
            <Compass className="w-10 h-10 mx-auto mb-6 text-primary" />
            <h1 className="text-4xl md:text-5xl font-display mb-6">Find Your Line</h1>
            <p className="text-lg text-background/70 max-w-xl mx-auto mb-12">
              Our four worlds aren't product categories—they're emotional frequencies. 
              Answer a few questions to discover which one resonates with you.
            </p>
            <Link
              to="/find-your-line/quiz"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground text-sm font-medium tracking-wider uppercase hover:bg-primary/90 transition-colors"
            >
              Begin Quiz
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default FindYourLine;
