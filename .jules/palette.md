## 2024-05-20 - Keyboard Accessibility for Hover Menus
**Learning:** Hover-based dropdown menus in this app lack keyboard support, trapping keyboard users or making content inaccessible.
**Action:** Always add onClick toggles, onFocus, onBlur handling (checking relatedTarget), aria-haspopup, and aria-expanded attributes to hover-based menus to ensure full keyboard navigation.