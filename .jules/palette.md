## 2024-03-24 - Accessibility for Custom Dropdowns
**Learning:** Custom dropdown components implemented without Radix UI primitives often lack essential ARIA attributes (like aria-expanded and aria-controls) that link the trigger to the menu, making them invisible or confusing to screen reader users.
**Action:** Always ensure that custom dropdown triggers include aria-expanded reflecting their open state, and aria-controls linking directly to the ID of the menu container when creating or reviewing custom navigation menus.
