import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CTABannerProps {
  title: string;
  description: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  variant?: "default" | "minimal" | "inverted";
}

const CTABanner = ({
  title,
  description,
  primaryCta,
  secondaryCta,
  variant = "default",
}: CTABannerProps) => {
  return (
    <section
      className={cn(
        "px-6 py-24",
        variant === "inverted" && "bg-foreground text-background",
        variant === "minimal" && "border-t border-border"
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="font-display text-3xl md:text-4xl font-light mb-4">
          {title}
        </h2>
        <p
          className={cn(
            "mb-8",
            variant === "inverted" ? "text-background/70" : "text-muted-foreground"
          )}
        >
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            variant={variant === "inverted" ? "secondary" : "default"}
          >
            <Link to={primaryCta.href}>
              {primaryCta.label}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
          {secondaryCta && (
            <Button
              asChild
              size="lg"
              variant={variant === "inverted" ? "ghost" : "outline"}
              className={variant === "inverted" ? "text-background hover:text-background/80" : ""}
            >
              <Link to={secondaryCta.href}>{secondaryCta.label}</Link>
            </Button>
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default CTABanner;
