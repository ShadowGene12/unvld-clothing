## 2024-09-26 - Accessible Hover Menus pattern

**Learning:** Hover-based dropdown menus in this application typically rely on `onMouseEnter` and `onMouseLeave`, causing accessibility and keyboard navigation failure.
**Action:** Always upgrade hover-based menus into ARIA Disclosure patterns using `onClick`, `onFocus`, `onBlur` (checking `!e.currentTarget.contains(e.relatedTarget)`), and `aria-expanded`/`aria-controls` for full accessibility.
