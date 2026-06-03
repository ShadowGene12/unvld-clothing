import { describe, it, expect } from 'vitest';
import { getCollectionBySlug, collections } from './mockData';

describe('getCollectionBySlug', () => {
  it('should return the collection when a valid slug is provided', () => {
    // We use the first collection from the mock data to test the happy path
    const validCollection = collections[0];
    const result = getCollectionBySlug(validCollection.slug);

    expect(result).toBeDefined();
    expect(result?.slug).toBe(validCollection.slug);
    expect(result).toEqual(validCollection);
  });

  it('should return undefined when an invalid slug is provided', () => {
    // Testing with a slug that is extremely unlikely to exist
    const invalidSlug = 'non-existent-collection-slug-123';
    const result = getCollectionBySlug(invalidSlug);

    expect(result).toBeUndefined();
  });

  it('should return undefined when an empty string is provided', () => {
    // Testing edge case of empty string
    const result = getCollectionBySlug('');
    expect(result).toBeUndefined();
  });
});
