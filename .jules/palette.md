## 2024-05-15 - Add visually hidden labels to placeholder-only inputs
**Learning:** The application uses several inputs with only placeholder text (e.g., newsletter signup, restock notification). These inputs lack accessible names, making them difficult for screen reader users to understand.
**Action:** Ensure all inputs, even those designed to only show placeholders visually, have a `<label>` element with the `sr-only` class to provide an accessible name without breaking the visual design.
