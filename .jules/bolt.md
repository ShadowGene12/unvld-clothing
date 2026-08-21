## 2024-05-24 - Static Filter Derivations
**Learning:** In the `/shop` route, the filter options (categories, sizes, colors) were being derived from the statically imported `products` array on every component render. Since the `products` array is static, these derivations never change after the module loads.
**Action:** Move variables derived solely from statically imported mock data completely outside the React component to the module scope, rather than using `useMemo` inside the component, as they only need to be evaluated once.
