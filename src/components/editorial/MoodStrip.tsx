import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface MoodStripProps {
  images: string[];
}

const MoodStrip = ({ images }: MoodStripProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <section ref={containerRef} className="py-16 overflow-hidden">
      <motion.div style={{ x }} className="flex gap-4 px-6">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="flex-shrink-0 w-[300px] md:w-[400px] aspect-[3/4] bg-muted rounded-sm overflow-hidden"
          >
            <img
              src={image}
              alt={`Mood ${index + 1}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default MoodStrip;
