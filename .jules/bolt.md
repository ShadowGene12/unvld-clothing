## 2025-05-18 - Hoisting Expensive Static Calculations

**Learning:** When calculating derived datasets (like arrays of unique categories, sizes, or colors) from static, immutable imported arrays (like mock data), doing so inside a React functional component causes expensive operations to run on every render.
**Action:** Move these calculations outside of the component function so they are evaluated only once when the module is loaded, yielding significant performance gains (e.g., transforming O(N) operations into O(1) lookups per render).
