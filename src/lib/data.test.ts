import { describe, it, expect } from "vitest";
import { getWorldBySlug, worlds } from "./data";

describe("getWorldBySlug", () => {
  it("should return the world when a valid slug is provided", () => {
    const validSlug = "ascend";
    const expectedWorld = worlds.find(w => w.slug === validSlug);

    // We make sure it exists to test properly
    expect(expectedWorld).toBeDefined();

    const result = getWorldBySlug(validSlug);

    expect(result).toBeDefined();
    expect(result).toEqual(expectedWorld);
    expect(result?.slug).toBe(validSlug);
  });

  it("should return undefined when an invalid slug is provided", () => {
    const invalidSlug = "non-existent-world-slug";

    const result = getWorldBySlug(invalidSlug);

    expect(result).toBeUndefined();
  });

  it("should return undefined when an empty string is provided", () => {
    const result = getWorldBySlug("");

    expect(result).toBeUndefined();
  });
});
