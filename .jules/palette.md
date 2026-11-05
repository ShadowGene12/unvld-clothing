## 2023-10-27 - Accessible Dropdown Menus
**Learning:** Hover-only dropdowns lack keyboard accessibility, making navigation impossible for non-mouse users.
**Action:** Add onClick toggles, onFocus/onBlur handlers with e.currentTarget.contains checks, aria-expanded attributes, and explicit focus-visible styles to custom dropdowns.