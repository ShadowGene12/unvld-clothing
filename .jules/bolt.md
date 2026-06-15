## 2024-06-15 - Prevent Recalculation of Static Constants in React Components
**Learning:** Expensive O(N) operations like `map`, `flatMap`, and `Set` on static mock data within the component body execute on every re-render, creating an unnecessary performance bottleneck.
**Action:** Always hoist computations that rely entirely on static external data outside the React component body to ensure they only run once per module load.
