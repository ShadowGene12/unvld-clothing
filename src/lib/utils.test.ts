import { describe, it, expect } from "vitest";
import { cn } from "./utils";

describe("cn", () => {
  it("should merge basic classes", () => {
    expect(cn("class1", "class2")).toBe("class1 class2");
  });

  it("should handle conditional classes", () => {
    const isTrue = true;
    const isFalse = false;
    expect(cn("class1", isTrue && "class2", isFalse && "class3")).toBe("class1 class2");
  });

  it("should handle array of classes", () => {
    expect(cn(["class1", "class2"])).toBe("class1 class2");
  });

  it("should resolve tailwind class conflicts correctly", () => {
    expect(cn("p-2", "p-4")).toBe("p-4");
    expect(cn("bg-red-500", "bg-blue-500")).toBe("bg-blue-500");
    expect(cn("text-sm", "text-lg")).toBe("text-lg");
  });

  it("should handle mixed inputs", () => {
    expect(cn("p-2", { "bg-red-500": true, "text-sm": false }, ["flex", "items-center"])).toBe("p-2 bg-red-500 flex items-center");
  });
});
