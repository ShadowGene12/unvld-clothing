## 2024-05-18 - Moved static derived state out of render loop
**Learning:** Found static data derived from mock data (categories, sizes, colors) inside a React component's render function, causing expensive flatMap and Set operations on every render.
**Action:** Always move derivation of completely static options (that depend only on imported static constants) outside the component definition to run once at module initialization time, saving O(n) array mapping and allocations per render.
