## 2024-05-18 - Memoizing Statically Imported Data
**Learning:** When using `useMemo` to optimize derived calculations from statically imported mock data (e.g., `import { products } from '@/data/mockData'`), including the statically imported object in the dependency array causes linting errors.
**Action:** Always use an empty dependency array (`[]`) when memoizing derived state from static imports.
