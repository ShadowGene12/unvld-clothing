import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, collections } from '@/data/mockData';
import ProductCard from '@/components/product/ProductCard';

type SortOption = 'newest' | 'bestselling' | 'price-asc' | 'price-desc';

const Shop: React.FC = () => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [selectedCollection, setSelectedCollection] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);
  const [sortBy, setSortBy] = useState<SortOption>('newest');

  const categories = [...new Set(products.map(p => p.category))];
  const sizes = [...new Set(products.flatMap(p => p.sizes))];
  const colors = [...new Set(products.flatMap(p => p.colors.map(c => c.name)))];

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCollection) {
      result = result.filter(p => p.collectionSlug === selectedCollection);
    }
    if (selectedCategory) {
      result = result.filter(p => p.category === selectedCategory);
    }
    if (selectedSize) {
      result = result.filter(p => p.sizes.includes(selectedSize));
    }
    if (selectedColor) {
      result = result.filter(p => p.colors.some(c => c.name === selectedColor));
    }
    result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Sort
    switch (sortBy) {
      case 'newest':
        result = result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      case 'bestselling':
        result = result.sort((a, b) => (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0));
        break;
      case 'price-asc':
        result = result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result = result.sort((a, b) => b.price - a.price);
        break;
    }

    return result;
  }, [selectedCollection, selectedCategory, selectedSize, selectedColor, priceRange, sortBy]);

  const activeFiltersCount = [
    selectedCollection,
    selectedCategory,
    selectedSize,
    selectedColor,
  ].filter(Boolean).length;

  const clearFilters = () => {
    setSelectedCollection('');
    setSelectedCategory('');
    setSelectedSize('');
    setSelectedColor('');
    setPriceRange([0, 500]);
  };

  const FilterSelect = ({
    label,
    value,
    options,
    onChange,
  }: {
    label: string;
    value: string;
    options: { value: string; label: string }[];
    onChange: (value: string) => void;
  }) => (
    <div className="space-y-2">
      <label className="text-xs font-medium tracking-wider uppercase text-muted-foreground">
        {label}
      </label>
      <div className="relative">
        <select
          value={value}
          onChange={e => onChange(e.target.value)}
          className="w-full appearance-none px-4 py-3 bg-background border border-border text-sm focus:outline-none focus:border-foreground transition-colors cursor-pointer"
        >
          <option value="">All</option>
          {options.map(opt => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" />
      </div>
    </div>
  );

  return (
    <>
      <Helmet>
        <title>Shop All | UNVLD</title>
        <meta
          name="description"
          content="Shop the complete UNVLD collection. Premium streetwear featuring Japanese minimalism, urban essentials, and quiet luxury."
        />
      </Helmet>

      <div className="container-brand py-8 md:py-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-display">Shop All</h1>
            <p className="text-muted-foreground mt-1">
              {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
            </p>
          </div>

          <div className="flex items-center gap-4">
            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setIsFiltersOpen(!isFiltersOpen)}
              className="lg:hidden flex items-center gap-2 px-4 py-2 border border-border hover:bg-accent transition-colors"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
              {activeFiltersCount > 0 && (
                <span className="w-5 h-5 bg-primary text-primary-foreground text-xs flex items-center justify-center">
                  {activeFiltersCount}
                </span>
              )}
            </button>

            {/* Sort Dropdown */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value as SortOption)}
                className="appearance-none px-4 py-2 pr-10 bg-background border border-border text-sm focus:outline-none focus:border-foreground transition-colors cursor-pointer"
              >
                <option value="newest">Newest</option>
                <option value="bestselling">Bestselling</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Desktop Filters Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24 space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="font-medium">Filters</h2>
                {activeFiltersCount > 0 && (
                  <button
                    onClick={clearFilters}
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Clear all
                  </button>
                )}
              </div>

              <FilterSelect
                label="Collection"
                value={selectedCollection}
                options={collections.map(c => ({ value: c.slug, label: c.name }))}
                onChange={setSelectedCollection}
              />

              <FilterSelect
                label="Category"
                value={selectedCategory}
                options={categories.map(c => ({ value: c, label: c.charAt(0).toUpperCase() + c.slice(1) }))}
                onChange={setSelectedCategory}
              />

              <FilterSelect
                label="Size"
                value={selectedSize}
                options={sizes.map(s => ({ value: s, label: s }))}
                onChange={setSelectedSize}
              />

              <FilterSelect
                label="Color"
                value={selectedColor}
                options={colors.map(c => ({ value: c, label: c }))}
                onChange={setSelectedColor}
              />
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-muted-foreground mb-4">No products match your filters.</p>
                <button
                  onClick={clearFilters}
                  className="text-sm font-medium underline underline-offset-4"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="product-grid">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filters Modal */}
      {isFiltersOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div
            className="absolute inset-0 bg-foreground/20"
            onClick={() => setIsFiltersOpen(false)}
          />
          <div className="absolute inset-y-0 left-0 w-full max-w-sm bg-background animate-slide-in-right flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <h2 className="font-semibold">Filters</h2>
              <button
                onClick={() => setIsFiltersOpen(false)}
                className="p-2 hover:bg-accent transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-6">
              <FilterSelect
                label="Collection"
                value={selectedCollection}
                options={collections.map(c => ({ value: c.slug, label: c.name }))}
                onChange={setSelectedCollection}
              />

              <FilterSelect
                label="Category"
                value={selectedCategory}
                options={categories.map(c => ({ value: c, label: c.charAt(0).toUpperCase() + c.slice(1) }))}
                onChange={setSelectedCategory}
              />

              <FilterSelect
                label="Size"
                value={selectedSize}
                options={sizes.map(s => ({ value: s, label: s }))}
                onChange={setSelectedSize}
              />

              <FilterSelect
                label="Color"
                value={selectedColor}
                options={colors.map(c => ({ value: c, label: c }))}
                onChange={setSelectedColor}
              />
            </div>

            <div className="p-4 border-t border-border flex gap-4">
              <button
                onClick={clearFilters}
                className="flex-1 py-3 border border-border text-sm font-medium"
              >
                Clear
              </button>
              <button
                onClick={() => setIsFiltersOpen(false)}
                className="flex-1 py-3 bg-foreground text-background text-sm font-medium"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Shop;
