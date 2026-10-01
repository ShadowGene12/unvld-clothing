## 2024-05-24 - Missing Authentication on Admin Route
**Vulnerability:** The `/admin` route is completely unprotected and accessible to anyone, exposing sensitive "demand capture" data (mocked currently, but conceptually sensitive).
**Learning:** In client-side routed React applications without a proper backend auth check or route guard, sensitive administrative interfaces can be accessed by anyone knowing or guessing the URL.
**Prevention:** Implement route guards (e.g., a `ProtectedRoute` component) that checks for valid authentication state before rendering administrative components.
