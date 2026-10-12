## 2024-05-18 - Keyboard Accessibility for Hover Menus
**Learning:** Custom hover-based components like dropdown menus that rely solely on `onMouseEnter` and `onMouseLeave` are inaccessible to keyboard users.
**Action:** When creating custom hover components, always implement `onClick` toggle, `onFocus` handler, and `onBlur` handler, alongside explicit `focus-visible` styles and appropriate ARIA attributes.
