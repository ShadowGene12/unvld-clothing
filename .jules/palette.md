## 2024-07-14 - Navigation Accessibility
**Learning:** Found that the "Worlds" dropdown toggle button in `src/components/layout/Header.tsx` lacks `aria-expanded` and `aria-controls` attributes, which are crucial for screen reader users to understand the state and relationship of custom dropdowns.
**Action:** Always add `aria-expanded` and `aria-controls` (and `id` to the controlled element) to custom dropdowns like the mobile and desktop "Worlds" toggles.
