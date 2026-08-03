## 2024-03-24 - Inner Circle Gated Access Form Needs Label
**Learning:** Found an accessibility issue where the gated access form on `/shop` has an input field for email but it lacks an explicit `<label>` and an `id`, making it difficult for screen readers to properly announce the input's purpose. Even with a placeholder, an explicit or hidden label is necessary for proper accessibility (or at least `aria-label`).
**Action:** Always ensure inputs have an associated `<label>` or an `aria-label` attribute to improve screen reader support.
