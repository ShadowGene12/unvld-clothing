## 2024-05-24 - Accessible Dropdown Menu
**Learning:** Hover-based dropdown menus that only rely on onMouseEnter and onMouseLeave are inaccessible to keyboard and touch users.
**Action:** Always implement an onClick toggle, focus handlers (onFocus, onBlur), explicit focus-visible styles, and ARIA attributes (aria-expanded, aria-haspopup, aria-controls) when building custom hover-based components.