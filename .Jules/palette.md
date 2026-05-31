## 2026-05-31 - Added ARIA labels to Restock Form
**Learning:** The restock notification form input and icon-only submit button lacked ARIA labels, making them inaccessible. Forms missing visible labels need to use `aria-label` to make them accessible.
**Action:** Always verify form inputs and icon-only buttons have either a visual label or an `aria-label` attribute.
