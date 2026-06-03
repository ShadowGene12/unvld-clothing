import { describe, it, expect } from "vitest";
import { getProductBySlug } from "./mockData";

describe("getProductBySlug", () => {
  it("should return a product object when a valid slug is provided", () => {
    const product = getProductBySlug("kyoto-oversized-tee");
    expect(product).toBeDefined();
    expect(product?.slug).toBe("kyoto-oversized-tee");
    expect(product?.name).toBe("Kyoto Oversized Tee");
  });

  it("should return undefined when a non-existent slug is provided", () => {
    const product = getProductBySlug("non-existent-product-slug");
    expect(product).toBeUndefined();
  });

  it("should return undefined when an empty string is provided", () => {
    const product = getProductBySlug("");
    expect(product).toBeUndefined();
  });

  it("should be case-sensitive", () => {
    const product = getProductBySlug("KYOTO-OVERSIZED-TEE");
    expect(product).toBeUndefined();
  });
});
