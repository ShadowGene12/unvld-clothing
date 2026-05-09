import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight } from 'lucide-react';
import { getCollectionBySlug, getProductsByCollection, products } from '@/data/mockData';
import ProductCard from '@/components/product/ProductCard';
import SectionHeader from '@/components/ui/SectionHeader';

const CollectionDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const collection = slug ? getCollectionBySlug(slug) : undefined;

  if (!collection) {
    return <Navigate to="/collections" replace />;
  }

  const collectionProducts = getProductsByCollection(collection.slug);

  // Style suggestions - products from other collections
  const styleSuggestions = products
    .filter(p => p.collectionSlug !== collection.slug)
    .slice(0, 4);

  return (
    <>
      <Helmet>
        <title>{collection.name} Collection | UNVLD</title>
        <meta name="description" content={collection.description} />
      </Helmet>

      {/* Hero Banner */}
      <section className="relative h-[50vh] md:h-[60vh] bg-muted">
        <img
          src={collection.heroImage}
          alt={collection.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/30" />
        <div className="absolute inset-0 flex items-center">
          <div className="container-brand text-background">
            <p className="text-sm font-medium tracking-wider uppercase mb-2 text-background/80">
              Collection
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display mb-4">
              {collection.name}
            </h1>
            <p className="text-lg md:text-xl text-background/80 max-w-2xl">
              {collection.shortDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Collection Description */}
      <section className="section-spacing border-b border-border">
        <div className="container-brand">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
              {collection.description}
            </p>
          </div>
        </div>
      </section>

      {/* Feature Callouts */}
      <section className="py-12 md:py-16 bg-secondary/30">
        <div className="container-brand">
          <div className="grid md:grid-cols-3 gap-8">
            {collection.features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center border border-border text-lg font-display">
                  {index + 1}
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-spacing">
        <div className="container-brand">
          <SectionHeader
            title="Shop the Collection"
            subtitle={`${collectionProducts.length} pieces in ${collection.name}`}
          />
          {collectionProducts.length > 0 ? (
            <div className="product-grid">
              {collectionProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                New pieces coming soon. Check back for updates.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Style Suggestions */}
      <section className="section-spacing bg-secondary/30">
        <div className="container-brand">
          <SectionHeader
            title="Complete Your Look"
            subtitle="Pieces from our other collections that pair perfectly."
            linkText="View All Products"
            linkHref="/shop"
          />
          <div className="product-grid">
            {styleSuggestions.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Other Collections */}
      <section className="py-12 md:py-16 border-t border-border">
        <div className="container-brand">
          <div className="flex items-center justify-center">
            <Link
              to="/collections"
              className="inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all"
            >
              Explore All Collections
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default CollectionDetail;
