## 2025-03-08 - Accessible Hover Menus
**Learning:** Custom hover-based dropdown menus using just `onMouseEnter` and `onMouseLeave` are completely inaccessible to keyboard users and screen readers, and often behave poorly on touch devices.
**Action:** Always complement hover interactions with explicit keyboard event handlers (`onFocus`, `onBlur`, `onClick`), standard ARIA attributes (`aria-expanded`, `aria-controls`), and clear focus rings (`focus-visible`).
