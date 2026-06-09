## 2024-05-24 - Static Array Computations in Render Loop
**Learning:** Performing O(N) operations like `.map()`, `.flatMap()`, and `new Set()` on static data inside a component body runs unnecessarily on every re-render, blocking the main thread.
**Action:** Move computations derived exclusively from static data outside the component to the module scope so they run only once.
