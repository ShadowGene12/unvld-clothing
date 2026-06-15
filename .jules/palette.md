## 2026-06-15 - Custom Dropdown Accessibility
**Learning:** Custom dropdown components built without native HTML elements often lack necessary semantic roles, making them opaque to screen readers. Specifically, they need explicit state tracking to indicate when a menu is expanded.
**Action:** Always include `aria-expanded` (linked to the boolean open state) and `aria-controls` (pointing to the dropdown container's ID) on the trigger button of custom dropdowns to ensure screen readers can navigate and understand the interaction.
