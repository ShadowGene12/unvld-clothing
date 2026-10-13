## 2024-05-14 - Moved static derivations outside component
**Learning:** Deriving static filter categories from mock data inside the main Shop component causes unnecessary arrays to be reconstructed on every render.
**Action:** Move derivations like [...new Set(products.map(...))] outside of the React component when the source data (products) is static, or memoize them if dynamic.