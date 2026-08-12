## 2024-10-24 - Deferring Video Playback in Product Cards
**Learning:** Using `autoPlay` on videos in product cards causes a significant performance and resource bottleneck when multiple cards are rendered simultaneously, as it triggers multiple concurrent video playbacks and network requests.
**Action:** Remove `autoPlay`, add `preload="none"`, and use React `useRef` to trigger `.play()` and `.pause()` only during hover events to save CPU and network bandwidth.
