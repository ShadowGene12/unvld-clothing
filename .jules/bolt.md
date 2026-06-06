## 2024-06-06 - Chained Filters in E-commerce Grids
**Learning:** Using multiple chained `.filter()` array operations creates O(k*N) time complexity and allocates multiple intermediate arrays in memory. In React components, recalculating unique categories/sizes via Sets on every render also creates unnecessary computational overhead.
**Action:** Always combine multiple filter criteria into a single `.filter()` pass with early returns to maintain O(N) complexity. Wrap expensive operations like extracting unique grid options into a `useMemo` block.
