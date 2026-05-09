import { useParams, Navigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageContainer from "@/components/layout/PageContainer";
import WaitlistSignupForm from "@/components/editorial/WaitlistSignupForm";
import TraitTags from "@/components/editorial/TraitTags";
import PiecePreviewGrid from "@/components/editorial/PiecePreviewGrid";
import { getPieceBySlug, getWorldById, getPiecesByWorld } from "@/lib/data";
import { ArrowLeft } from "lucide-react";

const PieceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const piece = slug ? getPieceBySlug(slug) : null;
  const world = piece ? getWorldById(piece.worldId) : null;
  const relatedPieces = world 
    ? getPiecesByWorld(world.id).filter(p => p.id !== piece?.id).slice(0, 3)
    : [];

  if (!piece || !world) {
    return <Navigate to="/" replace />;
  }

  return (
    <PageContainer
      title={`${piece.title} | ${world.name} | UNVLD`}
      description={piece.description}
    >
      {/* Back Link */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="px-6 pt-6"
      >
        <Link
          to={`/worlds/${world.slug}`}
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to {world.name}
        </Link>
      </motion.div>

      {/* Hero */}
      <section className="px-6 py-12 md:py-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="aspect-[3/4] bg-muted rounded-sm overflow-hidden"
          >
            <img
              src={piece.heroImage}
              alt={piece.title}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <span className="text-sm tracking-[0.2em] uppercase text-accent mb-4">
              {world.name} World
            </span>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light mb-6">
              {piece.title}
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {piece.description}
            </p>

            {/* Tags */}
            <div className="mb-8">
              <TraitTags traits={piece.tags} />
            </div>

            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-sm w-fit mb-8">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-medium">
                {piece.status === 'coming_soon' ? 'Coming Soon' : 'Available'}
              </span>
            </div>

            {/* Fabric & Fit Notes */}
            {piece.fabricNotes && (
              <div className="border-t border-border pt-6 mb-6">
                <h3 className="text-sm font-medium mb-2">Fabric & Construction</h3>
                <p className="text-sm text-muted-foreground">{piece.fabricNotes}</p>
              </div>
            )}

            {piece.stylingNotes && (
              <div className="border-t border-border pt-6">
                <h3 className="text-sm font-medium mb-2">Styling Notes</h3>
                <p className="text-sm text-muted-foreground">{piece.stylingNotes}</p>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      {piece.images.length > 0 && (
        <section className="px-6 py-16 bg-secondary/30">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center text-sm tracking-[0.2em] uppercase text-muted-foreground mb-8"
            >
              Gallery
            </motion.h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {piece.images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="aspect-square bg-muted rounded-sm overflow-hidden"
                >
                  <img
                    src={image}
                    alt={`${piece.title} - View ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Notify Me */}
      <section className="px-6 py-24">
        <div className="max-w-xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl mb-4">Get Notified</h2>
            <p className="text-muted-foreground mb-8">
              Be the first to know when {piece.title} becomes available.
            </p>
            <WaitlistSignupForm 
              worldId={world.id} 
              worldName={world.name}
              pieceId={piece.id}
              pieceName={piece.title}
            />
          </motion.div>
        </div>
      </section>

      {/* Related Pieces */}
      {relatedPieces.length > 0 && (
        <section className="px-6 py-16 border-t border-border">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center font-display text-2xl mb-12"
            >
              More from {world.name}
            </motion.h2>
            <PiecePreviewGrid pieces={relatedPieces} columns={3} />
          </div>
        </section>
      )}
    </PageContainer>
  );
};

export default PieceDetail;
