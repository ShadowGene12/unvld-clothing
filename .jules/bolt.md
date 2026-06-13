## 2024-05-24 - Module Level Static Array Caching
**Learning:** React components containing expensive array operations like `map`, `flatMap`, and `Set` on static mock data (e.g. `products` in `Shop.tsx`) recalculate O(N) operations on every re-render, leading to performance bottlenecks when component state changes (like filter updates).
**Action:** Always move static data transformations (like computing unique categories, sizes, or colors) outside the React component body to the module level so they are computed only once at load time instead of every re-render.
