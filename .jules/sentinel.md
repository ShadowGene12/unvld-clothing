## 2024-05-18 - Missing Content Security Policy (CSP)
**Vulnerability:** The application was lacking a Content Security Policy (CSP), which is a critical defense-in-depth measure against Cross-Site Scripting (XSS) and data injection attacks.
**Learning:** Even in frontend-heavy SPAs with no obvious direct injection vulnerabilities, establishing a CSP early on to whitelist necessary domains (like Supabase and image providers) is vital to restrict what external assets can be loaded and executed by the browser.
**Prevention:** Always include a baseline CSP via a meta tag or HTTP header that restricts `default-src` to `self` and explicitly allows trusted third-party resources (APIs, CDNs, media hosts) used by the application.
