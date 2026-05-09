import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { journalPosts, collections } from '@/data/mockData';

const Journal: React.FC = () => {
  const featuredPost = journalPosts[0];
  const otherPosts = journalPosts.slice(1);

  return (
    <>
      <Helmet>
        <title>Journal | UNVLD</title>
        <meta
          name="description"
          content="Stories, philosophies, and behind-the-scenes from the UNVLD universe. Explore the thinking behind our four worlds."
        />
      </Helmet>

      {/* Hero */}
      <section className="py-16 md:py-24 border-b border-border">
        <div className="container-brand">
          <div className="max-w-3xl">
            <p className="text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4">The Journal</p>
            <h1 className="text-4xl md:text-5xl font-display mb-6">
              Stories From the Universe
            </h1>
            <p className="text-lg text-muted-foreground">
              Behind the fabric. Beyond the silhouette. The thinking, the process, 
              and the philosophy that shapes everything we make.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16 md:py-24">
          <div className="container-brand">
            <Link to={`/journal/${featuredPost.slug}`} className="group grid md:grid-cols-2 gap-8 items-center">
              <div className="aspect-[4/3] bg-muted overflow-hidden">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div>
                <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4">Featured</p>
                <p className="text-xs tracking-wider uppercase text-muted-foreground mb-3">
                  {featuredPost.category} · {featuredPost.date}
                </p>
                <h2 className="text-2xl md:text-3xl font-display mb-4 group-hover:underline underline-offset-4">
                  {featuredPost.title}
                </h2>
                <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
                <span className="inline-flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all">
                  Read Story
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Filter by World */}
      <section className="py-8 border-y border-border bg-secondary/30">
        <div className="container-brand">
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-xs tracking-wider uppercase text-muted-foreground">Filter:</span>
            <button className="px-4 py-2 text-sm font-medium bg-foreground text-background">All</button>
            {collections.map(world => (
              <button
                key={world.slug}
                className="px-4 py-2 text-sm font-medium border border-border hover:bg-foreground hover:text-background hover:border-foreground transition-colors"
              >
                {world.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="section-spacing">
        <div className="container-brand">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherPosts.map(post => (
              <Link key={post.id} to={`/journal/${post.slug}`} className="group">
                <div className="aspect-[4/3] bg-muted mb-4 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="text-xs tracking-wider uppercase text-muted-foreground mb-2">
                  {post.category} · {post.date}
                </p>
                <h3 className="font-medium mb-2 group-hover:underline underline-offset-4">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 md:py-20 bg-foreground text-background">
        <div className="container-brand text-center">
          <h2 className="text-2xl md:text-3xl font-display mb-4">Stay in the Loop</h2>
          <p className="text-background/60 mb-8 max-w-lg mx-auto">
            New stories drop alongside new pieces. Be the first to read them.
          </p>
          <Link
            to="/early-access"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground text-sm font-medium tracking-wider uppercase hover:bg-primary/90 transition-colors"
          >
            Get Early Access
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Journal;
