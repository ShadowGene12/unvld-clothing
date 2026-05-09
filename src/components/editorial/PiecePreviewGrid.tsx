import PiecePreviewCard from "./PiecePreviewCard";
import { Piece } from "@/lib/data";
import { cn } from "@/lib/utils";

interface PiecePreviewGridProps {
  pieces: Piece[];
  columns?: 2 | 3;
}

const PiecePreviewGrid = ({ pieces, columns = 2 }: PiecePreviewGridProps) => {
  return (
    <div
      className={cn(
        "grid gap-6 md:gap-8",
        columns === 2 ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
      )}
    >
      {pieces.map((piece, index) => (
        <PiecePreviewCard key={piece.id} piece={piece} index={index} />
      ))}
    </div>
  );
};

export default PiecePreviewGrid;
