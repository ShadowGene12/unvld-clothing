## 2024-06-02 - React Context & Render Optimization
**Learning:** Found static arrays being recalculated inside component render loops (`src/pages/Shop.tsx`) and derived state in context providers (`src/context/CartContext.tsx`) lacking memoization. This is a common pattern that causes unnecessary re-renders.
**Action:** Always move purely static calculations outside of React components and memoize derived context values (`useMemo` / `useCallback`) to prevent performance overhead.
