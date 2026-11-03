## 2024-11-03 - Suspense Key Placement
**Learning:** When code-splitting with React.lazy and Suspense inside framer-motion's <AnimatePresence>, the unique key prop must be on the <Suspense> wrapper instead of its inner children to ensure animations work correctly.
**Action:** Always place the key on the <Suspense> wrapper when lazy loading routes within an AnimatePresence block.