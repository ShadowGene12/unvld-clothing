import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, ChevronDown, Compass } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { collections } from '@/data/mockData';
import { cn } from '@/lib/utils';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isWorldsOpen, setIsWorldsOpen] = useState(false);
  const { itemCount, setIsCartOpen } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsWorldsOpen(false);
  }, [location]);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
        )}
      >
        <div className="container-brand">
          <div className="flex items-center justify-between h-[72px]">
            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 -ml-2 hover:bg-accent transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>

            {/* Logo */}
            <Link to="/" className="text-xl md:text-2xl font-semibold tracking-[0.2em] uppercase">
              UNVLD
            </Link>

            {/* Desktop Navigation — brand-led order */}
            <nav className="hidden lg:flex items-center gap-8">
              <Link
                to="/"
                className={cn('text-sm tracking-wide link-underline py-1', location.pathname === '/' && 'font-medium')}
              >
                Home
              </Link>

              {/* Worlds Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsWorldsOpen(true)}
                onMouseLeave={() => setIsWorldsOpen(false)}
              >
                <button
                  className={cn(
                    'flex items-center gap-1 text-sm tracking-wide py-1',
                    location.pathname.includes('/worlds') && 'font-medium'
                  )}
                >
                  Worlds
                  <ChevronDown className={cn('w-4 h-4 transition-transform duration-200', isWorldsOpen && 'rotate-180')} />
                </button>
                {isWorldsOpen && (
                  <div className="absolute top-full left-0 pt-2 animate-fade-in">
                    <div className="bg-background border border-border shadow-lg min-w-[200px]">
                      <Link to="/worlds" className="block px-4 py-3 text-sm hover:bg-accent transition-colors border-b border-border">
                        All Worlds
                      </Link>
                      {collections.map(c => (
                        <Link key={c.slug} to={`/worlds/${c.slug}`} className="block px-4 py-3 text-sm hover:bg-accent transition-colors">
                          {c.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link
                to="/journal"
                className={cn('text-sm tracking-wide link-underline py-1', location.pathname === '/journal' && 'font-medium')}
              >
                Journal
              </Link>
              <Link
                to="/dream-fund"
                className={cn('text-sm tracking-wide link-underline py-1', location.pathname === '/dream-fund' && 'font-medium')}
              >
                Dream Fund
              </Link>
              <Link
                to="/about"
                className={cn('text-sm tracking-wide link-underline py-1', location.pathname === '/about' && 'font-medium')}
              >
                About
              </Link>
              <Link
                to="/shop"
                className={cn('text-sm tracking-wide link-underline py-1 text-muted-foreground', location.pathname === '/shop' && 'font-medium text-foreground')}
              >
                Shop
              </Link>
            </nav>

            {/* Right side: Find Your Line + Cart */}
            <div className="flex items-center gap-3">
              <Link
                to="/worlds"
                className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium tracking-wider uppercase border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Compass className="w-3.5 h-3.5" />
                Find Your Line
              </Link>
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 -mr-2 hover:bg-accent transition-colors"
                aria-label="Open cart"
              >
                <ShoppingBag className="w-6 h-6" />
                {itemCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-primary text-primary-foreground text-xs flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div className="absolute inset-0 bg-foreground/20" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="absolute inset-y-0 left-0 w-full max-w-sm bg-background animate-slide-in-right">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <span className="text-lg font-semibold tracking-[0.2em] uppercase">UNVLD</span>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 hover:bg-accent transition-colors" aria-label="Close menu">
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="p-4">
              <Link to="/" className="block py-3 text-lg border-b border-border">Home</Link>

              <div className="py-3 border-b border-border">
                <button onClick={() => setIsWorldsOpen(!isWorldsOpen)} className="flex items-center justify-between w-full text-lg">
                  Worlds
                  <ChevronDown className={cn('w-5 h-5 transition-transform duration-200', isWorldsOpen && 'rotate-180')} />
                </button>
                {isWorldsOpen && (
                  <div className="mt-2 pl-4 space-y-2">
                    <Link to="/worlds" className="block py-2 text-muted-foreground">All Worlds</Link>
                    {collections.map(c => (
                      <Link key={c.slug} to={`/worlds/${c.slug}`} className="block py-2 text-muted-foreground">
                        {c.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link to="/journal" className="block py-3 text-lg border-b border-border">Journal</Link>
              <Link to="/dream-fund" className="block py-3 text-lg border-b border-border">Dream Fund</Link>
              <Link to="/about" className="block py-3 text-lg border-b border-border">About</Link>
              <Link to="/shop" className="block py-3 text-lg border-b border-border text-muted-foreground">Shop</Link>

              <Link
                to="/find-your-line"
                className="mt-6 flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-sm font-medium tracking-wider uppercase"
              >
                <Compass className="w-4 h-4" />
                Find Your Line
              </Link>
            </nav>
          </div>
        </div>
      )}

      <div className="h-[72px]" />
    </>
  );
};

export default Header;
