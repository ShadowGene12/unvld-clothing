import { describe, it, expect, afterEach } from 'vitest';
import { getPiecesByWorld, pieces } from './data';

describe('getPiecesByWorld', () => {
  const originalLength = pieces.length;

  afterEach(() => {
    // Restore the pieces array to its original state after each test
    // to avoid cross-test contamination
    pieces.length = originalLength;
  });

  it('returns pieces for a valid worldId', () => {
    const result = getPiecesByWorld('ascend');
    expect(result.length).toBeGreaterThan(0);
    expect(result.every(p => p.worldId === 'ascend')).toBe(true);
  });

  it('returns an empty array for a non-existent worldId', () => {
    const result = getPiecesByWorld('non-existent-world-123');
    expect(result).toEqual([]);
  });

  it('filters out pieces with status "draft"', () => {
    // Inject a draft piece
    pieces.push({
      id: 'draft-piece',
      slug: 'draft-piece',
      title: 'Draft Piece',
      worldId: 'ascend',
      status: 'draft',
      sortOrder: 10,
      heroImage: '',
      images: [],
      description: 'Draft',
      tags: [],
    });

    const result = getPiecesByWorld('ascend');
    expect(result.find(p => p.id === 'draft-piece')).toBeUndefined();
  });

  it('filters out pieces with status "archived"', () => {
    // Inject an archived piece
    pieces.push({
      id: 'archived-piece',
      slug: 'archived-piece',
      title: 'Archived Piece',
      worldId: 'ascend',
      status: 'archived',
      sortOrder: 11,
      heroImage: '',
      images: [],
      description: 'Archived',
      tags: [],
    });

    const result = getPiecesByWorld('ascend');
    expect(result.find(p => p.id === 'archived-piece')).toBeUndefined();
  });

  it('includes pieces with status "live" and "coming_soon"', () => {
    // Inject a live piece
    pieces.push({
      id: 'live-piece',
      slug: 'live-piece',
      title: 'Live Piece',
      worldId: 'ascend',
      status: 'live',
      sortOrder: 12,
      heroImage: '',
      images: [],
      description: 'Live',
      tags: [],
    });

    // Inject a coming_soon piece (some already exist, but adding one specifically to test)
    pieces.push({
      id: 'coming-soon-piece',
      slug: 'coming-soon-piece',
      title: 'Coming Soon Piece',
      worldId: 'ascend',
      status: 'coming_soon',
      sortOrder: 13,
      heroImage: '',
      images: [],
      description: 'Coming Soon',
      tags: [],
    });

    const result = getPiecesByWorld('ascend');
    expect(result.find(p => p.id === 'live-piece')).toBeDefined();
    expect(result.find(p => p.id === 'coming-soon-piece')).toBeDefined();
  });
});
