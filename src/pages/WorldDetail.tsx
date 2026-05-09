import React, { useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Bell } from 'lucide-react';
import { getCollectionBySlug, getProductsByCollection, products, journalPosts, collections } from '@/data/mockData';
import ProductCard from '@/components/product/ProductCard';
import { toast } from '@/hooks/use-toast';

const WorldDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const world = slug ? getCollectionBySlug(slug) : undefined;
  const [email, setEmail] = useState('');

  if (!world) {
    return <Navigate to="/worlds" replace />;
  }

  const worldProducts = getProductsByCollection(world.slug);
  const featuredProducts = worldProducts.slice(0, 4);
  const relatedJournal = journalPosts.filter(p => p.worldSlug === world.slug);
  const otherWorlds = collections.filter(c => c.slug !== world.slug);

  const handleJoinWorld = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: `Welcome to ${world.name}`,
        description: 'You\'ll be first to know when new pieces drop.',
      });
      setEmail('');
    }
  };

  return (
    <>
      <Helmet>
        <title>{world.name} World | UNVLD</title>
        <meta name="description" content={world.emotionalStatement + ' ' + world.description} />
      </Helmet>

      {/* Hero — Emotional Statement */}
      <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center bg-muted">
        <div className="absolute inset-0">
          <img src={world.heroImage} alt={world.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/40" />
        </div>
        <div className="relative container-brand text-background">
          <div className="max-w-3xl">
            <p className="text-xs tracking-[0.4em] uppercase mb-4 text-background/60">World</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display mb-6">{world.name}</h1>
            <p className="text-2xl md:text-3xl font-display italic text-background/90 mb-4">
              "{world.emotionalStatement}"
            </p>
            <p className="text-lg text-background/70 max-w-xl">{world.moodCaption}</p>
          </div>
        </div>
        <div className="absolute bottom-8 left-8">
          <span className="px-4 py-2 bg-background text-foreground text-sm font-medium tracking-wider">
            {world.accentWord}
          </span>
        </div>
      </section>

      {/* Design Philosophy */}
      <section className="section-spacing">
        <div className="container-brand">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="md:col-span-1">
                <p className="text-xs tracking-[0.4em] uppercase text-muted-foreground mb-2">Philosophy</p>
                <h2 className="text-2xl font-display">The Meaning</h2>
              </div>
              <div className="md:col-span-2">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {world.philosophy}
                </p>
              </div>
            </div>

            {/* Features / Pillars */}
            <div className="grid md:grid-cols-3 gap-8 pt-12 border-t border-border">
              {world.features.map((feature, index) => (
                <div key={index}>
                  <p className="text-xs tracking-[0.4em] uppercase text-primary mb-3">0{index + 1}</p>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Silhouettes */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container-brand">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <p className="text-xs tracking-[0.4em] uppercase text-muted-foreground mb-3">Featured Silhouettes</p>
              <h2 className="text-2xl md:text-3xl font-display">Pieces From {world.name}</h2>
            </div>
            {worldProducts.length > 4 && (
              <Link
                to={`/shop?world=${world.slug}`}
                className="inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all"
              >
                View All {worldProducts.length} Pieces
                <ArrowRight className="w-4 h-4" />
              </Link>
            )}
          </div>
          {featuredProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {featuredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-background border border-border">
              <Bell className="w-8 h-8 mx-auto mb-4 text-muted-foreground" />
              <h3 className="font-medium mb-2">Coming Soon</h3>
              <p className="text-sm text-muted-foreground mb-6 max-w-sm mx-auto">
                New pieces for {world.name} are in development. Join the waitlist to be first.
              </p>
              <Link
                to="/early-access"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
              >
                Get Early Access
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Journal / Editorial */}
      {relatedJournal.length > 0 && (
        <section className="section-spacing border-b border-border">
          <div className="container-brand">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
              <div>
                <p className="text-xs tracking-[0.4em] uppercase text-muted-foreground mb-3">From The Journal</p>
                <h2 className="text-2xl md:text-3xl font-display">Stories From {world.name}</h2>
              </div>
              <Link
                to="/journal"
                className="inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all"
              >
                All Stories
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {relatedJournal.map(post => (
                <Link key={post.id} to={`/journal/${post.slug}`} className="group">
                  <div className="aspect-[16/9] bg-muted mb-4 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <p className="text-xs tracking-wider uppercase text-muted-foreground mb-2">{post.category}</p>
                  <h3 className="font-medium group-hover:underline underline-offset-4">{post.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Join This World CTA */}
      <section className="py-20 md:py-28 bg-foreground text-background">
        <div className="container-brand">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xs tracking-[0.4em] uppercase text-background/50 mb-6">Join This World</p>
            <h2 className="text-3xl md:text-4xl font-display mb-4">
              Be First to {world.name}
            </h2>
            <p className="text-background/60 mb-8 max-w-lg mx-auto">
              New drops happen without warning. Get early access to {world.name} pieces, 
              behind-the-scenes content, and world-specific invitations.
            </p>
            <form onSubmit={handleJoinWorld} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 px-5 py-4 bg-transparent border border-background/20 text-background placeholder:text-background/40 focus:outline-none focus:border-background/60 transition-colors text-sm"
                required
              />
              <button
                type="submit"
                className="px-8 py-4 bg-primary text-primary-foreground text-sm font-medium tracking-wider uppercase hover:bg-primary/90 transition-colors"
              >
                Join {world.name}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Other Worlds */}
      <section className="py-12 md:py-16">
        <div className="container-brand">
          <p className="text-xs tracking-[0.4em] uppercase text-muted-foreground text-center mb-8">Explore Other Worlds</p>
          <div className="flex flex-wrap justify-center gap-4">
            {otherWorlds.map(w => (
              <Link
                key={w.slug}
                to={`/worlds/${w.slug}`}
                className="px-6 py-3 border border-border text-sm font-medium hover:bg-foreground hover:text-background hover:border-foreground transition-colors"
              >
                {w.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WorldDetail;
