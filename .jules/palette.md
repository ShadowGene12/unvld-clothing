## 2024-03-20 - Accessible Hover Dropdown
**Learning:** Relying solely on onMouseEnter/onMouseLeave for dropdowns breaks accessibility on touch devices and keyboard navigation (Tab).
**Action:** Add onClick with preventDefault() (for touch), onFocus/onBlur for keyboard support, explicit focus-visible styles, and ARIA attributes (aria-expanded, aria-haspopup, aria-controls) to custom hover-based dropdown triggers.
