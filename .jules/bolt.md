## 2024-05-25 - Extracted static computations from component render loops
**Learning:** The project relies on static mock data for products and collections. Performing expensive array operations (e.g., `map`, `flatMap`, `Set`) inside React components like `Shop.tsx` causes unnecessary O(N) recalculations on every single re-render.
**Action:** Always compute derived data from static mocks at the module level (outside the component body) to prevent redundant processing during component updates.
