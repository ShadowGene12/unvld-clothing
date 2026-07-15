## 2024-07-15 - Defense in Depth via CSP
**Vulnerability:** The application was missing a Content Security Policy (CSP), making it more susceptible to XSS given its reliance on complex UI components (e.g., shadcn charts using dangerouslySetInnerHTML, even if safely constrained).
**Learning:** Adding a CSP in Vite/React apps heavily utilizing external media and fonts requires careful whitelist mapping (e.g., Supabase, Unsplash, Google Fonts) to avoid breaking the UI. Development environments need 'unsafe-inline'/'unsafe-eval' for Hot Module Replacement (HMR).
**Prevention:** Integrate CSP formulation directly into the architectural planning phase to track external domain dependencies and ensure defense-in-depth from day one.
