import { useParams, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import PageContainer from "@/components/layout/PageContainer";
import WaitlistSignupForm from "@/components/editorial/WaitlistSignupForm";
import TraitTags from "@/components/editorial/TraitTags";
import { Button } from "@/components/ui/button";
import { getWorldBySlug, getPieceBySlug, worlds } from "@/lib/data";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CampaignLanding = () => {
  const { slug } = useParams<{ slug: string }>();
  const [searchParams] = useSearchParams();
  const source = searchParams.get("utm_source") || searchParams.get("from") || "direct";

  // Try to find as world first, then as piece
  const world = slug ? getWorldBySlug(slug) : null;
  const piece = !world && slug ? getPieceBySlug(slug) : null;
  const pieceWorld = piece ? worlds.find(w => w.id === piece.worldId) : null;

  // If neither found, show generic landing
  if (!world && !piece) {
    return (
      <PageContainer
        title="UNVLD | Premium Identity-Driven Fashion"
        description="Discover your world. Wear your truth."
      >
        <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-display text-5xl md:text-7xl font-light mb-6">UNVLD</h1>
            <p className="text-xl text-muted-foreground mb-12 max-w-lg">
              One house. Four worlds. Find where you belong.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/">
                  Explore Worlds <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/find-your-line">Find Your Line</Link>
              </Button>
            </div>
          </motion.div>
        </section>
      </PageContainer>
    );
  }

  // World-focused landing
  if (world) {
    return (
      <PageContainer
        title={`${world.name} | UNVLD`}
        description={world.tagline}
      >
        <section className="min-h-screen flex flex-col">
          {/* Hero Image */}
          <div className="relative h-[60vh] overflow-hidden">
            <motion.img
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.2 }}
              src={world.moodImage}
              alt={world.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col items-center justify-center px-6 py-16 -mt-24 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center max-w-2xl"
            >
              <span className="text-sm tracking-[0.3em] uppercase text-accent mb-4 block">
                UNVLD World
              </span>
              <h1 className="font-display text-5xl md:text-7xl font-light mb-4">
                {world.name}
              </h1>
              <p className="text-xl text-muted-foreground mb-6">{world.tagline}</p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                {world.manifesto}
              </p>

              <TraitTags traits={world.traits} className="justify-center mb-12" />

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <Button asChild size="lg">
                  <Link to={`/worlds/${world.slug}`}>
                    Enter the World <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/">View All Worlds</Link>
                </Button>
              </div>

              {/* Signup */}
              <div className="border-t border-border pt-12 max-w-md mx-auto">
                <h2 className="text-lg font-medium mb-4">Get Early Access</h2>
                <WaitlistSignupForm 
                  worldId={world.id} 
                  worldName={world.name}
                  source={source}
                  compact
                />
              </div>
            </motion.div>
          </div>
        </section>
      </PageContainer>
    );
  }

  // Piece-focused landing
  if (piece && pieceWorld) {
    return (
      <PageContainer
        title={`${piece.title} | UNVLD`}
        description={piece.description}
      >
        <section className="min-h-screen grid md:grid-cols-2">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="h-[50vh] md:h-screen"
          >
            <img
              src={piece.heroImage}
              alt={piece.title}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Content */}
          <div className="flex flex-col items-center justify-center px-6 md:px-12 py-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-md"
            >
              <span className="text-sm tracking-[0.2em] uppercase text-accent mb-4 block">
                {pieceWorld.name} World
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-light mb-4">
                {piece.title}
              </h1>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {piece.description}
              </p>

              <TraitTags traits={piece.tags} className="mb-8" />

              {/* Status */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-sm mb-8">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-sm font-medium">
                  {piece.status === 'coming_soon' ? 'Coming Soon' : 'Available'}
                </span>
              </div>

              <div className="flex flex-col gap-4 mb-12">
                <Button asChild size="lg">
                  <Link to={`/pieces/${piece.slug}`}>
                    View Full Details <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to={`/worlds/${pieceWorld.slug}`}>
                    Explore {pieceWorld.name} World
                  </Link>
                </Button>
              </div>

              {/* Signup */}
              <div className="border-t border-border pt-8">
                <h2 className="text-lg font-medium mb-4">Get Notified</h2>
                <WaitlistSignupForm 
                  worldId={pieceWorld.id} 
                  worldName={pieceWorld.name}
                  pieceId={piece.id}
                  pieceName={piece.title}
                  source={source}
                  compact
                />
              </div>
            </motion.div>
          </div>
        </section>
      </PageContainer>
    );
  }

  return null;
};

export default CampaignLanding;
