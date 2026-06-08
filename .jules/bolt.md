## 2026-06-08 - Extracted static filter options
**Learning:** The memory mentions that expensive array operations (e.g., map, flatMap, Set) on static mock data should be computed at the module level, outside of the React component body.
**Action:** Always extract `Set`s and `map` calculations on static imported data like `products` to module level to avoid O(N) recalculations on component re-renders.
