import { motion } from "framer-motion";
import { World } from "@/lib/data";

interface WorldHeroSectionProps {
  world: World;
}

const WorldHeroSection = ({ world }: WorldHeroSectionProps) => {
  return (
    <section className="relative min-h-[80vh] flex items-end pb-16 overflow-hidden">
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0"
      >
        <img
          src={world.moodImage}
          alt={world.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 px-6 w-full max-w-4xl mx-auto">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm tracking-[0.3em] uppercase text-accent mb-4 block"
        >
          UNVLD World
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-6xl md:text-8xl lg:text-9xl font-light tracking-tight mb-4"
        >
          {world.name}
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-muted-foreground mb-8"
        >
          {world.tagline}
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base md:text-lg leading-relaxed max-w-2xl"
        >
          {world.manifesto}
        </motion.p>
      </div>
    </section>
  );
};

export default WorldHeroSection;
