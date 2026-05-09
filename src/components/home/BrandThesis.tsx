import React from 'react';

const BrandThesis: React.FC = () => {
  return (
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
  );
};

export default BrandThesis;
