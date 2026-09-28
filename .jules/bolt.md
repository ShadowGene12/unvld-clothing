## 2024-05-24 - Module scope derived data
**Learning:** Derived values from static data (like unique categories, sizes, colors from a static `products` array) shouldn't be calculated inside the component on every render, even with `useMemo`.
**Action:** Move static data derivation entirely outside the component to module scope so it runs exactly once when the file is loaded.
