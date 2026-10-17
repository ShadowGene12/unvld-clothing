## 2025-02-27 - Unnecessary computations inside React components
**Learning:** Arrays derived from static data like `products` inside functional components are unnecessarily recalculated on every render.
**Action:** Move static derivations (e.g., mapping, Sets) out of the component scope to avoid `O(N)` re-computations and object creations per render.
