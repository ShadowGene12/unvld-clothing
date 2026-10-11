## 2024-03-24 - Accessible Hover Menus

**Learning:** When building custom hover-based dropdown menus that open on `onMouseEnter` and close on `onMouseLeave`, relying solely on mouse events makes the component completely inaccessible to keyboard and screen reader users.

**Action:** Always implement a complementary keyboard interaction model for hover menus:
1. Add `onClick` to toggle the menu state.
2. Add `onFocus` to the container to open the menu when tabbing into it.
3. Add `onBlur` with a check (`!e.currentTarget.contains(e.relatedTarget)`) to close the menu only when focus leaves the entire component, allowing users to tab through the inner links.
4. Apply explicit `focus-visible` styles to the trigger button.
5. Provide appropriate ARIA attributes (`aria-expanded`, `aria-haspopup`, `aria-controls`) to communicate state and relationships to screen readers.