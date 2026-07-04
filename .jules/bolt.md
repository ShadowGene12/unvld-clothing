## 2025-02-12 - Prevent Re-calculation of Static Derived Arrays in Render Loop
**Learning:** In React components like `Shop`, deriving static arrays (e.g., categories, sizes, colors) from a static mock data source inside the component body causes O(N) recalculations on every render, which is inefficient, especially when using complex operations like `flatMap` and `Set`.
**Action:** Always extract calculations derived purely from static module-level constants (like imported mock data) to the module level itself, rather than calculating them inside the component's render body.
