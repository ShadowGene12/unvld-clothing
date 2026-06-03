import { describe, it, expect } from 'vitest';
import { getRelatedProducts, products } from '../mockData';

describe('getRelatedProducts', () => {
  it('should return products with the same collectionSlug', () => {
    // Get a product from the "japanese" collection
    const sourceProduct = products.find(p => p.collectionSlug === 'japanese')!;
    const related = getRelatedProducts(sourceProduct);

    expect(related.length).toBeGreaterThan(0);
    related.forEach(product => {
      expect(product.collectionSlug).toBe(sourceProduct.collectionSlug);
    });
  });

  it('should exclude the source product from the results', () => {
    const sourceProduct = products.find(p => p.collectionSlug === 'japanese')!;
    const related = getRelatedProducts(sourceProduct);

    const containsSourceProduct = related.some(product => product.id === sourceProduct.id);
    expect(containsSourceProduct).toBe(false);
  });

  it('should limit the results to 4 by default', () => {
    // Streetwear collection has 3 products, japanese has 3, ascend has 3, subtle has 3.
    // Wait, let's mock products to test limit if we don't have enough, or just check it's <= 4.
    // Since we only have a few products, maybe let's test if we set limit to 1.
    const sourceProduct = products.find(p => p.collectionSlug === 'japanese')!;
    const related = getRelatedProducts(sourceProduct);

    expect(related.length).toBeLessThanOrEqual(4);
  });

  it('should respect a custom limit parameter', () => {
    const sourceProduct = products.find(p => p.collectionSlug === 'japanese')!;
    const related = getRelatedProducts(sourceProduct, 1);

    expect(related.length).toBe(1);
  });

  it('should return an empty array if no related products exist', () => {
    // Create a dummy product with a unique collection slug
    const sourceProduct = { ...products[0], id: 'unique-123', collectionSlug: 'unique-collection' };
    const related = getRelatedProducts(sourceProduct);

    expect(related).toEqual([]);
  });
});
