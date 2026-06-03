import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '@/data/mockData';

import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { toast } from '@/hooks/use-toast';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';


interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isQuickAddOpen, setIsQuickAddOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const { addItem, setIsCartOpen } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!selectedSize) {
      toast({ title: 'Select a size', description: 'Please choose a size before adding to cart.', variant: 'destructive' });
      return;
    }
    if (!selectedColor) {
      toast({ title: 'Select a color', description: 'Please choose a color before adding to cart.', variant: 'destructive' });
      return;
    }

    addItem(product, selectedSize, selectedColor);
    setIsCartOpen(true);
    setIsQuickAddOpen(false);

    // Reset selections
    setSelectedSize('');
    setSelectedColor('');
  };

  return (
    <>
    <Link to={`/product/${product.slug}`} className="group product-card block">
      {/* Image Container */}
      <div className="relative aspect-[3/4] bg-muted overflow-hidden mb-4">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover product-card-image transition-opacity duration-500 group-hover:opacity-0"
        />
        {/* Placeholder Video for Cinematic Hover State */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        >
          <source src="https://cdn.coverr.co/videos/coverr-walking-through-the-city-at-night-8133/1080p.mp4" type="video/mp4" />
        </video>
        
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
              e.stopPropagation();
              setIsQuickAddOpen(true);
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

      <Dialog open={isQuickAddOpen} onOpenChange={setIsQuickAddOpen}>
        <DialogContent onClick={(e) => e.stopPropagation()} className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{product.name}</DialogTitle>
            <DialogDescription>
              ${product.price}
            </DialogDescription>
          </DialogHeader>

          <div className="py-4 space-y-6">
            {/* Color Selection */}
            <div>
              <p className="text-sm font-medium mb-3">Color: {selectedColor || 'Select'}</p>
              <div className="flex gap-2">
                {product.colors.map(color => (
                  <button
                    key={color.name}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setSelectedColor(color.name);
                    }}
                    className={`w-8 h-8 rounded-full border-2 transition-all ${selectedColor === color.name ? 'border-foreground scale-110' : 'border-border hover:border-muted-foreground'}`}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                    aria-label={color.name}
                  />
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-medium">Size: {selectedSize || 'Select'}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes?.map(size => (
                  <button
                    key={size}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setSelectedSize(size);
                    }}
                    className={`min-w-[48px] px-3 py-1.5 border text-sm font-medium transition-colors ${selectedSize === size ? 'border-foreground bg-foreground text-background' : 'border-border hover:border-foreground'}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            className="w-full py-3 text-sm font-medium tracking-wider uppercase bg-foreground text-background hover:bg-foreground/90 transition-colors"
          >
            Add to Cart
          </button>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProductCard;
