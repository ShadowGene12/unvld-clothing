import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { collections } from '@/data/mockData';

const worldDescriptions: Record<string, string> = {
  ascend: 'For those climbing toward something greater. Technical fabrics, refined silhouettes, relentless momentum.',
  japanese: 'Where meticulous craft meets wabi-sabi philosophy. Minimalism as a way of being.',
  streetwear: 'Raw urban energy distilled into wearable art. Bold, unapologetic, limited.',
  subtle: 'Quiet luxury that speaks volumes. For those who know style needs no announcement.',
};

const WorldsGrid: React.FC = () => {
  return (
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
                alt={`${collection.name} World - ${collection.shortDescription}`}
                loading="lazy"
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
  );
};

export default WorldsGrid;
