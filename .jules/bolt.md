## 2024-06-01 - Avoid autoPlay videos in lists
**Learning:** Having `autoPlay` on video tags inside components that are rendered in lists (like `ProductCard` in a shop grid) causes significant performance bottlenecks. All videos attempt to download and play concurrently on mount, even if they are just used for hover effects, draining bandwidth and CPU.
**Action:** Remove `autoPlay` and add `preload="none"`. Use a `useRef` to control the video playback manually on hover (`onMouseEnter`/`onMouseLeave`).
