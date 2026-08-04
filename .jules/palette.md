## 2024-05-18 - Missing ARIA labels on icon-only notification buttons
**Learning:** Icon-only buttons used for form submissions (like the "Bell" icon for back-in-stock notifications) frequently lack ARIA labels in this application's components, making them inaccessible to screen readers.
**Action:** Always verify icon-only submission buttons have clear, descriptive `aria-label` attributes.
