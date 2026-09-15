## 2024-05-14 - Initial Setup
**Learning:** Initial Palette setup.
**Action:** None.

## 2024-05-15 - Dropdown Keyboard Navigation A11y
**Learning:** Hover-based dropdown menus (like the "Worlds" nav) fail to support keyboard navigation (Tabs) and screen readers without explicit ARIA Disclosure patterns (`aria-expanded`, `aria-controls`) and toggle events (`onClick` or `onKeyDown`).
**Action:** When creating or modifying dropdowns intended for hover interactions, ensure an `onClick` toggle handler, explicit `focus-visible` styles, and correct ARIA states are implemented so keyboard and screen reader users are not excluded.