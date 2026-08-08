## 2024-03-20 - Form Accessibility & Error Association
**Learning:** Found a pattern of missing `sr-only` labels for inline forms (Footer, ProductDetail) and missing `aria-describedby` for error states (EarlyAccessForm), which leaves screen reader users without context for inputs and validation errors.
**Action:** Always pair inputs with `<label>` (using `sr-only` if visual design omits it), link validation messages via `aria-describedby`, and ensure icon-only buttons have `aria-label`.
