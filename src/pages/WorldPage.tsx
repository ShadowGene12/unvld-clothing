import { useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import PageContainer from "@/components/layout/PageContainer";
import WorldHeroSection from "@/components/editorial/WorldHeroSection";
import MoodStrip from "@/components/editorial/MoodStrip";
import TraitTags from "@/components/editorial/TraitTags";
import PiecePreviewGrid from "@/components/editorial/PiecePreviewGrid";
import InteractiveLookbook, { LookbookHotspot } from "@/components/editorial/InteractiveLookbook";
import DropPreviewModule from "@/components/editorial/DropPreviewModule";
import WaitlistSignupForm from "@/components/editorial/WaitlistSignupForm";
import CTABanner from "@/components/editorial/CTABanner";
import { getWorldBySlug, getPiecesByWorld } from "@/lib/data";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const WorldPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const world = slug ? getWorldBySlug(slug) : null;
  const pieces = world ? getPiecesByWorld(world.id) : [];

  if (!world) {
    return <Navigate to="/" replace />;
  }

  return (
    <PageContainer
      title={`${world.name} | UNVLD Worlds`}
      description={`${world.tagline}. ${world.manifesto}`}
    >
      {/* Back Link */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="px-6 pt-6"
      >
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          All Worlds
        </Link>
      </motion.div>

      {/* Hero */}
      <WorldHeroSection world={world} />

      {/* Mood Strip */}
      <MoodStrip images={world.moodImages} />

      {/* Traits */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-8"
          >
            Signature Traits
          </motion.h2>
          <TraitTags traits={world.traits} size="lg" />
        </div>
      </section>

      {/* Featured Pieces */}
      {pieces.length > 0 && (
        <section className="px-6 py-16 bg-secondary/30">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-3xl md:text-4xl mb-4">Featured Pieces</h2>
              <p className="text-muted-foreground">Curated selections from the {world.name} world</p>
            </motion.div>
            <PiecePreviewGrid pieces={pieces} />
          </div>
        </section>
      )}

      {/* Interactive Lookbook */}
      {pieces.length >= 2 && (
        <section className="py-0">
          <InteractiveLookbook 
            imageUrl="https://images.unsplash.com/photo-1550614000-4b95d4ed1871?q=80&w=2000&auto=format&fit=crop"
            alt={`${world.name} Lookbook`}
            hotspots={[
              {
                id: "hotspot-1",
                x: 45,
                y: 35,
                product: {
                  name: pieces[0].name,
                  price: `$${pieces[0].price}`,
                  slug: pieces[0].slug,
                  image: pieces[0].heroImage
                }
              },
              {
                id: "hotspot-2",
                x: 55,
                y: 65,
                product: {
                  name: pieces[1].name,
                  price: `$${pieces[1].price}`,
                  slug: pieces[1].slug,
                  image: pieces[1].heroImage
                }
              }
            ]}
          />
        </section>
      )}

      {/* Drop Preview */}
      <DropPreviewModule
        title={`${world.name} Collection — Coming Soon`}
        description={`Be the first to access the full ${world.name} collection. Limited quantities, intentional design.`}
        releaseDate="Spring 2024"
      />

      {/* Waitlist Signup */}
      <section className="px-6 py-24">
        <div className="max-w-xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl mb-4">Join the {world.name} World</h2>
            <p className="text-muted-foreground mb-8">
              Get early access to drops, styling notes, and exclusive content from the {world.name} universe.
            </p>
            <WaitlistSignupForm worldId={world.id} worldName={world.name} />
          </motion.div>
        </div>
      </section>

      {/* Navigation CTA */}
      <CTABanner
        title="Explore Other Worlds"
        description="Each world offers a distinct emotional experience. Find where you belong."
        primaryCta={{ label: "View All Worlds", href: "/" }}
        secondaryCta={{ label: "Find Your Line", href: "/find-your-line" }}
        variant="minimal"
      />
    </PageContainer>
  );
};

export default WorldPage;
