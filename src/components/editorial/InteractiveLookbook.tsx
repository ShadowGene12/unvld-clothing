import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

export interface LookbookHotspot {
  id: string;
  x: number; // Percentage (0-100)
  y: number; // Percentage (0-100)
  product: {
    name: string;
    price: string;
    slug: string;
    image: string;
  };
}

interface InteractiveLookbookProps {
  imageUrl: string;
  alt: string;
  hotspots: LookbookHotspot[];
}

const InteractiveLookbook = ({ imageUrl, alt, hotspots }: InteractiveLookbookProps) => {
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);

  return (
    <div className="relative w-full overflow-hidden bg-muted group">
      <img
        src={imageUrl}
        alt={alt}
        className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-[1.02]"
      />
      
      {hotspots.map((hotspot) => (
        <div
          key={hotspot.id}
          className="absolute z-10"
          style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%`, transform: 'translate(-50%, -50%)' }}
          onMouseEnter={() => setActiveHotspot(hotspot.id)}
          onMouseLeave={() => setActiveHotspot(null)}
        >
          {/* Pulse animation ring */}
          <div className="absolute inset-0 rounded-full bg-white/40 animate-ping" />
          
          {/* Hotspot button */}
          <button 
            className="relative w-8 h-8 bg-background text-foreground rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110 focus:outline-none"
            aria-label={`View ${hotspot.product.name}`}
          >
            <Plus className="w-4 h-4 transition-transform duration-300" style={{ transform: activeHotspot === hotspot.id ? 'rotate(45deg)' : 'none' }} />
          </button>

          {/* Product Tooltip */}
          <AnimatePresence>
            {activeHotspot === hotspot.id && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute left-1/2 bottom-full mb-3 -translate-x-1/2 w-48 bg-background border border-border shadow-xl overflow-hidden pointer-events-auto"
              >
                <Link to={`/product/${hotspot.product.slug}`} className="block group/link">
                  <div className="aspect-[4/5] bg-muted overflow-hidden">
                    <img 
                      src={hotspot.product.image} 
                      alt={hotspot.product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover/link:scale-105"
                    />
                  </div>
                  <div className="p-3 bg-background">
                    <h4 className="text-xs font-medium uppercase tracking-wider mb-1 line-clamp-1">{hotspot.product.name}</h4>
                    <p className="text-xs text-muted-foreground">{hotspot.product.price}</p>
                  </div>
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default InteractiveLookbook;
