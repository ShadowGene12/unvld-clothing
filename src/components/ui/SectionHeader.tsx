import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  linkText?: string;
  linkHref?: string;
  centered?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  linkText,
  linkHref,
  centered = false,
}) => {
  return (
    <div
      className={`flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8 md:mb-12 ${
        centered ? 'text-center md:flex-col md:items-center' : ''
      }`}
    >
      <div>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-display">{title}</h2>
        {subtitle && (
          <p className="text-muted-foreground mt-2 max-w-xl">{subtitle}</p>
        )}
      </div>
      {linkText && linkHref && (
        <Link
          to={linkHref}
          className="inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all group"
        >
          {linkText}
          <ArrowRight className="w-4 h-4" />
        </Link>
      )}
    </div>
  );
};

export default SectionHeader;
