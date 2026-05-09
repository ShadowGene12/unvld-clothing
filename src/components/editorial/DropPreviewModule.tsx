import { motion } from "framer-motion";
import { Bell } from "lucide-react";

interface DropPreviewModuleProps {
  title: string;
  description: string;
  releaseDate?: string;
}

const DropPreviewModule = ({ title, description, releaseDate }: DropPreviewModuleProps) => {
  return (
    <section className="px-6 py-24 bg-foreground text-background">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <Bell className="w-8 h-8 mb-6 opacity-60" />
          
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light mb-4">
            {title}
          </h2>
          
          <p className="text-background/70 mb-6 max-w-lg">
            {description}
          </p>
          
          {releaseDate && (
            <span className="inline-block px-4 py-2 border border-background/30 rounded-sm text-sm">
              Expected {releaseDate}
            </span>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default DropPreviewModule;
