## 2024-06-06 - Interactive Dropdown Accessibility
**Learning:** Custom dropdown toggles (like the 'Worlds' menu) often lack explicit linkage to their content, hindering screen reader users from understanding their state or relationship.
**Action:** Ensure custom dropdown toggles always use 'aria-expanded' tied to their open state, and 'aria-controls' pointing to the unique ID of the corresponding menu container.
