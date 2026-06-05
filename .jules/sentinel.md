## 2025-02-24 - Content Security Policy (CSP) blocking external APIs
**Vulnerability:** A Content Security Policy (CSP) was missing, which is a key security enhancement to prevent XSS. Adding one without verifying dependencies blocked the Supabase client library from communicating with the backend.
**Learning:** `connect-src 'self'` restricts the application to only making network requests to the exact same origin. Since the project uses `@supabase/supabase-js`, it relies on external connections (`https://*.supabase.co` and `wss://*.supabase.co`).
**Prevention:** Always check `package.json` for external dependencies (like Supabase, Firebase, etc.) before enforcing a strict `connect-src` CSP to ensure core functionality is not broken.
