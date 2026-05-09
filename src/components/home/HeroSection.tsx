import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, Compass } from 'lucide-react';
import heroImage from '@/assets/hero-main.jpg';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-muted">
      <div className="absolute inset-0 overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          poster={heroImage}
          className="w-full h-full object-cover scale-105"
          style={{ filter: "brightness(0.5)" }}
        >
          <source src="https://cdn.coverr.co/videos/coverr-walking-through-the-city-at-night-8133/1080p.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
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
  );
};

export default HeroSection;
