## 2024-03-24 - Dropdown Keyboard Accessibility
**Learning:** Hover-based dropdown menus using onMouseEnter/Leave are inaccessible to keyboard users unless they also implement onClick/onFocus/onBlur with proper ARIA attributes like aria-expanded.
**Action:** Always pair onMouseEnter with onFocus/onClick and onMouseLeave with onBlur when building custom dropdowns.