import React, { useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Minus, Plus, Bell, ArrowRight } from 'lucide-react';
import { getProductBySlug, getRelatedProducts, getCollectionBySlug } from '@/data/mockData';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/product/ProductCard';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { toast } from '@/hooks/use-toast';

const ProductDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getProductBySlug(slug) : undefined;
  const { addItem, setIsCartOpen } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [notifyEmail, setNotifyEmail] = useState('');

  if (!product) {
    return <Navigate to="/shop" replace />;
  }

  const world = getCollectionBySlug(product.collectionSlug);
  const relatedProducts = getRelatedProducts(product);

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast({ title: 'Select a size', description: 'Please choose a size before adding to cart.', variant: 'destructive' });
      return;
    }
    if (!selectedColor) {
      toast({ title: 'Select a color', description: 'Please choose a color before adding to cart.', variant: 'destructive' });
      return;
    }
    for (let i = 0; i < quantity; i++) {
      addItem(product, selectedSize, selectedColor);
    }
    setIsCartOpen(true);
  };

  const handleNotify = (e: React.FormEvent) => {
    e.preventDefault();
    if (notifyEmail) {
      toast({ title: 'You\'re on the list', description: 'We\'ll notify you when this piece is available.' });
      setNotifyEmail('');
    }
  };

  const nextImage = () => setSelectedImage(prev => (prev + 1) % product.images.length);
  const prevImage = () => setSelectedImage(prev => (prev - 1 + product.images.length) % product.images.length);

  // Editorial "why this piece exists" copy based on category
  const pieceStory: Record<string, string> = {
    tops: 'Built to become a cornerstone. The kind of piece you reach for without thinking—because it works with everything and feels like nothing else.',
    bottoms: 'Engineered for movement, designed for presence. These are the foundation pieces that anchor a wardrobe built on intention.',
    outerwear: 'The layer that defines the look. Designed to protect without weighing you down—physically or aesthetically.',
  };

  return (
    <>
      <Helmet>
        <title>{product.name} | UNVLD</title>
        <meta name="description" content={`${product.name} from the ${world?.name} World. ${product.description}`} />
      </Helmet>

      <div className="container-brand py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link to="/worlds" className="hover:text-foreground transition-colors">Worlds</Link>
          <span>/</span>
          {world && (
            <>
              <Link to={`/worlds/${world.slug}`} className="hover:text-foreground transition-colors">{world.name}</Link>
              <span>/</span>
            </>
          )}
          <span className="text-foreground">{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-[3/4] bg-muted overflow-hidden">
              <img src={product.images[selectedImage]} alt={product.name} className="w-full h-full object-cover" />
              {product.images.length > 1 && (
                <>
                  <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 flex items-center justify-center hover:bg-background transition-colors" aria-label="Previous image">
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 flex items-center justify-center hover:bg-background transition-colors" aria-label="Next image">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
              {/* World Badge */}
              {world && (
                <Link
                  to={`/worlds/${world.slug}`}
                  className="absolute top-4 left-4 px-3 py-1.5 bg-foreground text-background text-[10px] font-medium tracking-wider uppercase hover:bg-primary transition-colors"
                >
                  {world.name} World
                </Link>
              )}
              <div className="absolute top-4 right-4 flex flex-col gap-2">
                {product.isNew && (
                  <span className="px-3 py-1 text-xs font-medium tracking-wider uppercase bg-primary text-primary-foreground">New</span>
                )}
                {product.isBestseller && (
                  <span className="px-3 py-1 text-xs font-medium tracking-wider uppercase bg-background text-foreground">Bestseller</span>
                )}
              </div>
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-2">
                {product.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-24 bg-muted overflow-hidden border-2 transition-colors ${selectedImage === index ? 'border-foreground' : 'border-transparent'}`}
                  >
                    <img src={img} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            {/* World Link */}
            {world && (
              <Link
                to={`/worlds/${world.slug}`}
                className="inline-flex items-center gap-2 text-xs font-medium tracking-wider uppercase text-primary hover:gap-3 transition-all mb-3"
              >
                From the {world.name} World
                <ArrowRight className="w-3 h-3" />
              </Link>
            )}

            <h1 className="text-2xl md:text-3xl font-display mb-2">{product.name}</h1>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xl font-semibold">${product.price}</span>
              {product.originalPrice && <span className="text-muted-foreground line-through">${product.originalPrice}</span>}
            </div>

            {/* Why This Piece Exists */}
            <div className="mb-8 p-5 bg-secondary/30 border-l-2 border-primary">
              <p className="text-xs tracking-wider uppercase text-muted-foreground mb-2">Why This Piece</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {pieceStory[product.category] || product.description}
              </p>
            </div>

            <p className="text-muted-foreground mb-8">{product.description}</p>

            {/* Color Selection */}
            <div className="mb-6">
              <p className="text-sm font-medium mb-3">Color: {selectedColor || 'Select'}</p>
              <div className="flex gap-2">
                {product.colors.map(color => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-10 h-10 rounded-full border-2 transition-all ${selectedColor === color.name ? 'border-foreground scale-110' : 'border-border hover:border-muted-foreground'}`}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                    aria-label={color.name}
                  />
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-medium">Size: {selectedSize || 'Select'}</p>
                <Link to="/size-guide" className="text-xs text-muted-foreground underline underline-offset-4 hover:text-foreground transition-colors">Size Guide</Link>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`min-w-[48px] px-4 py-2 border text-sm font-medium transition-colors ${selectedSize === size ? 'border-foreground bg-foreground text-background' : 'border-border hover:border-foreground'}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-sm font-medium mb-3">Quantity</p>
              <div className="flex items-center border border-border w-fit">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-3 hover:bg-accent transition-colors" aria-label="Decrease quantity">
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="p-3 hover:bg-accent transition-colors" aria-label="Increase quantity">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleAddToCart} 
              className="w-full btn-hero-primary mb-4"
            >
              Acquire Piece — ${product.price * quantity}
            </motion.button>

            {/* Notify / Early Access */}
            <form onSubmit={handleNotify} className="flex gap-2 mb-8">
              <input
                type="email"
                value={notifyEmail}
                onChange={e => setNotifyEmail(e.target.value)}
                placeholder="Notify me of restocks"
                className="flex-1 px-4 py-3 bg-transparent border border-border text-sm placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
              />
              <button type="submit" className="px-4 py-3 border border-border hover:bg-foreground hover:text-background hover:border-foreground transition-colors">
                <Bell className="w-4 h-4" />
              </button>
            </form>

            {/* Details Accordion */}
            <Accordion type="single" collapsible className="border-t border-border">
              <AccordionItem value="fabric">
                <AccordionTrigger className="text-sm font-medium py-4">Fabric & Fit</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground pb-4">
                  <div className="space-y-6 mt-2">
                    <p className="text-foreground">{product.details.fabric}</p>
                    <p className="text-foreground">{product.details.fit}</p>
                    
                    <div className="space-y-4 pt-4 border-t border-white/10">
                      <div>
                        <div className="flex justify-between text-xs mb-1.5">
                          <span>Structure</span>
                          <span>Medium</span>
                        </div>
                        <div className="w-full h-[1px] bg-white/10 relative">
                          <div className="absolute top-0 left-0 h-full w-[60%] bg-foreground" />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-xs mb-1.5">
                          <span>Breathability</span>
                          <span>High</span>
                        </div>
                        <div className="w-full h-[1px] bg-white/10 relative">
                          <div className="absolute top-0 left-0 h-full w-[85%] bg-foreground" />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-xs mb-1.5">
                          <span>Weight</span>
                          <span>240GSM</span>
                        </div>
                        <div className="w-full h-[1px] bg-white/10 relative">
                          <div className="absolute top-0 left-0 h-full w-[45%] bg-foreground" />
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="styling">
                <AccordionTrigger className="text-sm font-medium py-4">Styling Notes</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground pb-4">
                  <p className="mb-3">
                    This piece lives in the {world?.name} world. Pair with other {world?.name} silhouettes for a cohesive look, 
                    or mix across worlds to create tension.
                  </p>
                  <Link to={`/worlds/${world?.slug}`} className="inline-flex items-center gap-1 text-primary hover:gap-2 transition-all">
                    Explore {world?.name}
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="care">
                <AccordionTrigger className="text-sm font-medium py-4">Care Instructions</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground pb-4">
                  <ul className="space-y-1">
                    {product.details.care.map((instruction, index) => (
                      <li key={index}>{instruction}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="shipping">
                <AccordionTrigger className="text-sm font-medium py-4">Shipping & Returns</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground pb-4">
                  <p className="mb-2">Free shipping on orders over $150. Standard delivery 5-7 business days.</p>
                  <p>Free returns within 30 days. See our <Link to="/returns" className="underline underline-offset-4">return policy</Link> for details.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* Related Products from Same World */}
        {relatedProducts.length > 0 && (
          <section className="mt-16 md:mt-24 pt-12 border-t border-border">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <p className="text-xs tracking-wider uppercase text-muted-foreground mb-2">More From {world?.name}</p>
                <h2 className="text-2xl font-display">Complete the Look</h2>
              </div>
              <Link to={`/worlds/${world?.slug}`} className="inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all">
                View All {world?.name}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="product-grid">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default ProductDetail;
