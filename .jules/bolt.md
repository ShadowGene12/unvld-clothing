## 2024-06-04 - Initializing Bolt Journal
## 2024-06-04 - Avoid Chained Array Methods in Filter Generation

**Learning:** When generating filtered arrays, especially for shop catalogs where multiple criteria exist (like category, size, color, price), chaining `.filter()` method calls creates an O(M*N) execution path, repeatedly iterating and creating intermediary arrays. In `Shop.tsx` this was evident for 6 different criteria. Additionally, generating filter configurations on every render using `[...new Set(array.map())]` causes unneeded allocation overhead that scales linearly with product count.

**Action:** Consolidate multiple chained `filter()` methods into a single `.filter()` call containing early returns. This optimizes the complexity from O(6*N) down to O(N). Also, wrap static filter generation (e.g. `sizes`, `categories`, `colors` derived from base products array) in a `useMemo` so they only calculate when the base `products` array actually changes, avoiding recalculation on every render.
