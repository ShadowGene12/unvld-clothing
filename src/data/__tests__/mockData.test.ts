import { describe, it, expect } from 'vitest';
import {
  getNewProducts,
  getProductsByCollection,
  getBestsellers,
  getProductBySlug,
  products,
} from '../mockData';

describe('mockData helpers', () => {
  describe('getNewProducts', () => {
    it('should return only products that have isNew set to true', () => {
      const newProducts = getNewProducts();

      // Ensure we actually got some products back (based on mockData having some)
      expect(newProducts.length).toBeGreaterThan(0);

      // Every returned product must have isNew === true
      newProducts.forEach((product) => {
        expect(product.isNew).toBe(true);
      });

      // Ensure the count matches the actual number of new products in the source array
      const expectedCount = products.filter(p => p.isNew).length;
      expect(newProducts.length).toBe(expectedCount);
    });
  });

  describe('getProductsByCollection', () => {
    it('should return products that match the given collection slug', () => {
      // Find a collection slug to test with
      const testSlug = products[0]?.collectionSlug;
      if (!testSlug) return; // Skip if no products

      const collectionProducts = getProductsByCollection(testSlug);

      expect(collectionProducts.length).toBeGreaterThan(0);
      collectionProducts.forEach((product) => {
        expect(product.collectionSlug).toBe(testSlug);
      });

      const expectedCount = products.filter(p => p.collectionSlug === testSlug).length;
      expect(collectionProducts.length).toBe(expectedCount);
    });

    it('should return an empty array for a non-existent collection slug', () => {
      const result = getProductsByCollection('non-existent-collection-12345');
      expect(result).toEqual([]);
    });
  });

  describe('getBestsellers', () => {
    it('should return only products that have isBestseller set to true', () => {
      const bestsellers = getBestsellers();

      // Assuming we have some bestsellers in mock data
      if (bestsellers.length > 0) {
        bestsellers.forEach((product) => {
          expect(product.isBestseller).toBe(true);
        });
      }

      const expectedCount = products.filter(p => p.isBestseller).length;
      expect(bestsellers.length).toBe(expectedCount);
    });
  });

  describe('getProductBySlug', () => {
    it('should return the correct product for a valid slug', () => {
      const testProduct = products[0];
      if (!testProduct) return;

      const result = getProductBySlug(testProduct.slug);
      expect(result).toBeDefined();
      expect(result?.id).toBe(testProduct.id);
      expect(result?.slug).toBe(testProduct.slug);
    });

    it('should return undefined for an invalid slug', () => {
      const result = getProductBySlug('non-existent-slug-12345');
      expect(result).toBeUndefined();
    });
  });
});
