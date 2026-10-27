## 2026-10-27 - Dropdown Accessibility Learnings
**Learning:** Hover-based dropdowns often lack keyboard focus handling and ARIA attributes out of the box, breaking keyboard and screen reader accessibility.
**Action:** Always add `onFocus`, `onBlur`, `onClick` (with `e.preventDefault()`), `aria-expanded`, and `aria-haspopup` to dropdown triggers in addition to `onMouseEnter` and `onMouseLeave`.
