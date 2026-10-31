## 2026-10-31 - Dropdown Accessibility Insight
**Learning:** Custom hover-based dropdown menus that lack comprehensive keyboard and touch event handlers (e.g., `onClick`, `onFocus`, `onBlur`) along with proper ARIA attributes (`aria-expanded`, `aria-haspopup`, `aria-controls`) break accessibility on touch devices and screen readers.
**Action:** When adding accessibility to custom hover-based components, implement an `onClick` toggle with `e.preventDefault()`, an `onFocus` handler, and an `onBlur` handler alongside explicit `focus-visible` styles and appropriate ARIA attributes.
