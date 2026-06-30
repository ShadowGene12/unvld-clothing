## 2024-06-30 - Dropdown & Toggle Accessibility
**Learning:** Custom Radix/Tailwind dropdowns and toggles in the layout header lacked critical ARIA attributes linking state and content (`aria-expanded`, `aria-controls`), which is a recurring pattern to watch out for.
**Action:** When working on navigation or complex layout components, explicitly check that all dropdown toggles manage both `aria-expanded` and link to their content containers via `id` and `aria-controls`.
