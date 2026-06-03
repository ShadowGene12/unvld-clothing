import { describe, it, expect } from "vitest";
import { getBestsellers, products } from "../mockData";

describe("mockData - getBestsellers", () => {
  it("should return only products that are marked as bestsellers", () => {
    const bestsellers = getBestsellers();

    // Ensure that at least one bestseller exists to make the test meaningful
    expect(bestsellers.length).toBeGreaterThan(0);

    // Ensure that all returned products have isBestseller set to true
    expect(bestsellers.every(product => product.isBestseller)).toBe(true);
  });

  it("should return the correct number of bestseller products", () => {
    const bestsellers = getBestsellers();

    // Count how many products in the mock data are actually bestsellers
    const expectedCount = products.filter(product => product.isBestseller).length;

    expect(bestsellers.length).toBe(expectedCount);
  });
});
