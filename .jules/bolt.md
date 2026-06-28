## 2024-06-28 - Prevent O(N) recalculations on static arrays
**Learning:** Static mock data was being mapped and formatted inside the React component body causing O(N) recalculation on every render.
**Action:** Always move static data calculations (like computing distinct sets of categories, sizes, and colors) to the module level instead of doing them on every render cycle.
