import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Piece } from "@/lib/data";

interface PiecePreviewCardProps {
  piece: Piece;
  index?: number;
}

const PiecePreviewCard = ({ piece, index = 0 }: PiecePreviewCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        to={`/pieces/${piece.slug}`}
        className="group block"
      >
        {/* Image */}
        <div className="aspect-[3/4] bg-muted rounded-sm overflow-hidden mb-4">
          <img
            src={piece.heroImage}
            alt={piece.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Info */}
        <div className="space-y-1">
          <h3 className="font-medium group-hover:text-accent transition-colors">
            {piece.title}
          </h3>
          <p className="text-sm text-muted-foreground">
            {piece.status === 'coming_soon' ? 'Coming Soon' : 'Available'}
          </p>
        </div>
      </Link>
    </motion.div>
  );
};

export default PiecePreviewCard;
