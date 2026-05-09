import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { X, Plus, Minus, Trash2, ArrowRight } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { getRelatedProducts } from '@/data/mockData';

const CartDrawer: React.FC = () => {
  const { items, isCartOpen, setIsCartOpen, removeItem, updateQuantity, subtotal } = useCart();
  const [isCheckoutWipe, setIsCheckoutWipe] = useState(false);
  const navigate = useNavigate();

  const handleCheckout = () => {
    setIsCheckoutWipe(true);
    setTimeout(() => {
      setIsCartOpen(false);
      setIsCheckoutWipe(false);
      // Simulate navigate to checkout
      navigate('/shop'); // In a real app: navigate('/checkout')
    }, 1500);
  };

  // Get a single upsell item based on the first item in the cart
  const upsellItem = items.length > 0 ? getRelatedProducts(items[0].product, 1)[0] : null;

  return (
    <AnimatePresence>
      {isCartOpen && (
        <div className="fixed inset-0 z-[70]">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-foreground/20"
            onClick={() => setIsCartOpen(false)}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="absolute inset-y-0 right-0 w-full max-w-md bg-background shadow-xl flex flex-col"
          >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h2 className="text-lg font-semibold tracking-wide">Your Cart</h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:bg-accent transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="text-muted-foreground mb-4">Your cart is empty</p>
              <Link
                to="/shop"
                onClick={() => setIsCartOpen(false)}
                className="btn-hero-primary text-xs"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item, index) => (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: index * 0.05, type: 'spring', stiffness: 300, damping: 24 }}
                  key={`${item.product.id}-${item.size}-${item.color}-${index}`}
                  className="flex gap-4 pb-4 border-b border-border"
                >
                  {/* Product Image */}
                  <div className="w-20 h-24 bg-muted flex-shrink-0">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-sm truncate">{item.product.name}</h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      {item.size} / {item.color}
                    </p>
                    <p className="text-sm font-medium mt-2">${item.product.price}</p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2 mt-3">
                      <button
                        onClick={() =>
                          updateQuantity(
                            item.product.id,
                            item.size,
                            item.color,
                            item.quantity - 1
                          )
                        }
                        className="p-1 border border-border hover:bg-accent transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(
                            item.product.id,
                            item.size,
                            item.color,
                            item.quantity + 1
                          )
                        }
                        className="p-1 border border-border hover:bg-accent transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.product.id, item.size, item.color)}
                        className="p-1 ml-auto text-muted-foreground hover:text-destructive transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Upsell Section */}
          {items.length > 0 && upsellItem && (
            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-xs tracking-wider uppercase text-muted-foreground mb-4">To complete the silhouette...</p>
              <Link 
                to={`/product/${upsellItem.slug}`}
                onClick={() => setIsCartOpen(false)}
                className="group flex gap-4 p-3 border border-border/50 hover:border-foreground transition-colors"
              >
                <div className="w-16 h-20 bg-muted flex-shrink-0">
                  <img src={upsellItem.images[0]} alt={upsellItem.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <h4 className="text-sm font-medium">{upsellItem.name}</h4>
                  <p className="text-sm text-muted-foreground mt-1">${upsellItem.price}</p>
                </div>
                <div className="flex items-center justify-center px-2 text-muted-foreground group-hover:text-foreground transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-4 border-t border-border space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Subtotal</span>
              <span className="text-lg font-semibold">${subtotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Shipping and taxes calculated at checkout.
            </p>
            <button onClick={handleCheckout} className="w-full btn-hero-primary">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsCartOpen(false)}
              className="w-full text-sm text-center text-muted-foreground hover:text-foreground transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </motion.div>
      {/* Full Screen Checkout Wipe */}
      <AnimatePresence>
        {isCheckoutWipe && (
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center"
          >
            <motion.h2 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-2xl font-display tracking-widest uppercase"
            >
              Preparing Your Order
            </motion.h2>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
