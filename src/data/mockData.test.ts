import { describe, it, expect } from 'vitest';
import { getProductsByCollection, products } from './mockData';

describe('mockData', () => {
  describe('getProductsByCollection', () => {
    it('should return products belonging to the specified collection', () => {
      // Find a valid collection slug from existing products
      const validSlug = products[0]?.collectionSlug;
      if (!validSlug) {
        throw new Error("No products available to test");
      }

      const expectedProducts = products.filter(p => p.collectionSlug === validSlug);
      const result = getProductsByCollection(validSlug);

      expect(result.length).toBeGreaterThan(0);
      expect(result).toHaveLength(expectedProducts.length);

      result.forEach(product => {
        expect(product.collectionSlug).toBe(validSlug);
      });
    });

    it('should return an empty array for a non-existent collection', () => {
      const nonExistentSlug = 'non-existent-collection-12345';
      const result = getProductsByCollection(nonExistentSlug);

      expect(result).toBeInstanceOf(Array);
      expect(result).toHaveLength(0);
    });

    it('should return an empty array for an empty string', () => {
      const result = getProductsByCollection('');

      expect(result).toBeInstanceOf(Array);
      expect(result).toHaveLength(0);
    });
  });
});
