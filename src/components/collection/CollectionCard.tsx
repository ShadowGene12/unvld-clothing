import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Collection } from '@/data/mockData';

interface CollectionCardProps {
  collection: Collection;
  useWorldRoutes?: boolean;
}

const CollectionCard: React.FC<CollectionCardProps> = ({ collection, useWorldRoutes = false }) => {
  const basePath = useWorldRoutes ? '/worlds' : '/collections';

  return (
    <Link
      to={`${basePath}/${collection.slug}`}
      className="group relative aspect-[4/5] overflow-hidden bg-muted"
    >
      <img
        src={collection.heroImage}
        alt={collection.name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-foreground/30 group-hover:bg-foreground/40 transition-colors duration-300" />
      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 text-background">
        <h3 className="text-2xl md:text-3xl font-display mb-2">{collection.name}</h3>
        <p className="text-sm text-background/80 mb-4 max-w-xs">{collection.shortDescription}</p>
        <div className="flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all duration-300">
          <span>{useWorldRoutes ? 'Enter World' : 'Explore Collection'}</span>
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </Link>
  );
};

export default CollectionCard;
