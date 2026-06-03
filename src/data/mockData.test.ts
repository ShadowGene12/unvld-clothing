import { describe, it, expect } from 'vitest';
import { getProductBySlug, products } from './mockData';

describe('getProductBySlug', () => {
  it('should return the correct product when given an existing slug', () => {
    // Select an existing product dynamically from the mock data to prevent brittle tests
    const existingProduct = products[0];
    const product = getProductBySlug(existingProduct.slug);

    expect(product).toBeDefined();
    expect(product?.slug).toBe(existingProduct.slug);
    expect(product?.name).toBe(existingProduct.name);
  });

  it('should return undefined when given a non-existent slug', () => {
    const nonExistentSlug = "this-slug-does-not-exist-12345";
    const product = getProductBySlug(nonExistentSlug);

    expect(product).toBeUndefined();
  });

  it('should return undefined when given an empty string as slug', () => {
    const product = getProductBySlug("");

    expect(product).toBeUndefined();
  });
});
