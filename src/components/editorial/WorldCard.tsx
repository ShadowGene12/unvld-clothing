import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { World } from "@/lib/data";

interface WorldCardProps {
  world: World;
  index: number;
}

const WorldCard = ({ world, index }: WorldCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Link
        to={`/worlds/${world.slug}`}
        className="group block relative aspect-[4/5] overflow-hidden bg-muted rounded-sm"
      >
        {/* Image */}
        <motion.img
          src={world.moodImage}
          alt={world.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent transition-opacity duration-300" />
        
        {/* Content */}
        <div className="absolute inset-0 p-8 flex flex-col justify-end text-primary-foreground">
          <motion.h2
            className="font-display text-4xl md:text-5xl font-light mb-2"
          >
            {world.name}
          </motion.h2>
          <p className="text-primary-foreground/80 mb-4">{world.tagline}</p>
          <div className="flex items-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Enter the World
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default WorldCard;
