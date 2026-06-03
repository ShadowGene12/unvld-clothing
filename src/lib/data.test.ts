import { describe, it, expect } from "vitest";
import { getWorldById, worlds } from "./data";

describe("getWorldById", () => {
  it("should return the correct world when a valid ID is provided", () => {
    const validId = "ascend";
    const result = getWorldById(validId);
    expect(result).toBeDefined();
    expect(result?.id).toBe(validId);
    expect(result?.name).toBe("Ascend");
  });

  it("should return undefined when an invalid ID is provided", () => {
    const invalidId = "invalid-world-id-123";
    const result = getWorldById(invalidId);
    expect(result).toBeUndefined();
  });

  it("should return undefined when an empty string is provided", () => {
    const result = getWorldById("");
    expect(result).toBeUndefined();
  });
});
