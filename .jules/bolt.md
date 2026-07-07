## 2023-10-27 - Hoisting Static Filter Calculations
**Learning:** Found static mock data calculations (`Set` + `map`/`flatMap`) directly inside the `Shop` React component body, causing unnecessary O(N) array processing on every component re-render.
**Action:** Always hoist expensive array transformations on static module-level mock data out of the component scope to prevent useless recalculations.
