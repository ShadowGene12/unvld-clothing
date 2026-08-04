## 2024-08-04 - ProductCard Re-renders in Gated Shop
**Learning:** Sibling state updates (like typing in the email capture form on the gated Shop view) cause the parent component to re-render, leading to expensive and unnecessary re-renders of all unmemoized `ProductCard` components in large grids.
**Action:** Always memoize list/grid item components (`React.memo`) that rely on stable props (like a `product` object) when they are rendered alongside highly volatile state (like text inputs) in the same parent.
