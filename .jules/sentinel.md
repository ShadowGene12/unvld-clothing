## 2024-07-06 - Unhandled Exception on JSON Parse
**Vulnerability:** The Quiz page retrieved `unvld_quiz_state` from `localStorage` and immediately passed it to `JSON.parse` without a try-catch block.
**Learning:** This is a DoS vulnerability because manipulated, corrupted, or incompatible stored state causes `JSON.parse` to throw an unhandled exception, completely breaking the React component tree and rendering the page unusable for the user until they manually clear their local storage.
**Prevention:** Always wrap `JSON.parse` calls that depend on external/user-controlled inputs (including `localStorage`) in a `try...catch` block. If parsing fails, fall back to a safe default state or clear the corrupted item to allow recovery.
