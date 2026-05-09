import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TraitTagsProps {
  traits: string[];
  size?: "sm" | "md" | "lg";
  className?: string;
}

const TraitTags = ({ traits, size = "md", className }: TraitTagsProps) => {
  const sizeClasses = {
    sm: "px-2 py-1 text-xs",
    md: "px-3 py-1.5 text-sm",
    lg: "px-4 py-2 text-sm",
  };

  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {traits.map((trait, index) => (
        <motion.span
          key={trait}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          className={cn(
            "border border-border rounded-sm text-muted-foreground",
            sizeClasses[size]
          )}
        >
          {trait}
        </motion.span>
      ))}
    </div>
  );
};

export default TraitTags;
