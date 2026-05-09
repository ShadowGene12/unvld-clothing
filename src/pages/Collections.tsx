import React from 'react';
import { Helmet } from 'react-helmet-async';
import { collections } from '@/data/mockData';
import CollectionCard from '@/components/collection/CollectionCard';

const Collections: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Collections | UNVLD</title>
        <meta
          name="description"
          content="Explore UNVLD's four distinctive collections: Japanese, Streetwear, Ascend, and Subtle. Find your style."
        />
      </Helmet>

      <div className="container-brand py-8 md:py-12">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display mb-4">
            Our Collections
          </h1>
          <p className="text-lg text-muted-foreground">
            Four distinct expressions of style. Each collection tells its own story while 
            sharing the UNVLD commitment to quality and authentic self-expression.
          </p>
        </div>

        {/* Collections Grid */}
        <div className="collection-grid">
          {collections.map(collection => (
            <CollectionCard key={collection.id} collection={collection} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Collections;
