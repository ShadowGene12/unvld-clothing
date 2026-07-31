## 2024-07-31 - Missing labels on icon-only forms
**Learning:** Found an accessibility issue pattern in the app where small icon-only forms (like the Restock Notification form) are missing screen reader labels for inputs and buttons.
**Action:** Always ensure that icon-only buttons have an `aria-label` and input fields have a visually hidden `<label>` associated via `id`.
