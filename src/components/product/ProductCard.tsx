import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '@/data/mockData';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link to={`/product/${product.slug}`} className="group product-card block">
      {/* Image Container */}
      <div className="relative aspect-[3/4] bg-muted overflow-hidden mb-4">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover product-card-image"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <span className="px-2 py-1 text-[10px] font-medium tracking-wider uppercase bg-primary text-primary-foreground">
              New
            </span>
          )}
          {product.isBestseller && (
            <span className="px-2 py-1 text-[10px] font-medium tracking-wider uppercase bg-foreground text-background">
              Bestseller
            </span>
          )}
        </div>

        {/* Quick Add - Shows on hover */}
        <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={(e) => {
              e.preventDefault();
              // TODO: Quick add modal
            }}
            className="w-full py-3 text-xs font-medium tracking-wider uppercase bg-background/95 text-foreground hover:bg-foreground hover:text-background transition-colors"
          >
            Quick Add
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-1">
        <p className="text-xs text-muted-foreground uppercase tracking-wider">
          {product.collectionSlug}
        </p>
        <h3 className="font-medium text-sm group-hover:underline underline-offset-4">
          {product.name}
        </h3>
        <div className="flex items-center gap-2">
          <span className="font-medium">${product.price}</span>
          {product.originalPrice && (
            <span className="text-muted-foreground line-through text-sm">
              ${product.originalPrice}
            </span>
          )}
        </div>

        {/* Colors */}
        <div className="flex gap-1.5 pt-2">
          {product.colors.slice(0, 4).map(color => (
            <span
              key={color.name}
              className="w-4 h-4 rounded-full border border-border"
              style={{ backgroundColor: color.hex }}
              title={color.name}
            />
          ))}
          {product.colors.length > 4 && (
            <span className="text-xs text-muted-foreground">
              +{product.colors.length - 4}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
