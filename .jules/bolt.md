## 2024-06-16 - Prevent O(N) Array Operations on Re-renders
**Learning:** Initializing filter options arrays (like categories, sizes, colors) using `Set`, `map`, and `flatMap` directly inside the React component body causes expensive O(N) recalculations on every single re-render. Since these derived lists are based on static mock data, this causes unnecessary performance overhead.
**Action:** Extract such static array derivations (using expensive methods) to the module level so they are computed only once when the file is evaluated, avoiding recalculations during React re-renders.
