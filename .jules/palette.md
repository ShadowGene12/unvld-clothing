## 2024-07-29 - Missing Screen Reader Associations for Inline Forms

**Learning:** When building minimal, design-led interfaces (like this repository's inline forms and icon-only buttons), visual design often omits visible text labels and rely on placeholders or icons. This creates a recurring pattern where screen-reader accessibility is overlooked.
**Action:** Always add a visually hidden label (`sr-only` class) to form inputs that rely on placeholders instead of visible labels, and provide `aria-label` attributes to any icon-only buttons (like the restock notification submit button) to ensure semantic meaning without disrupting the visual aesthetic.
