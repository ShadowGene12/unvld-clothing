## 2024-06-20 - Unhandled JSON.parse from LocalStorage
**Vulnerability:** The application was calling `JSON.parse()` directly on data retrieved from `localStorage` without error handling.
**Learning:** Because `localStorage` can be modified by the user or corrupted, malformed JSON would cause an unhandled exception, potentially breaking the Quiz page permanently for that user.
**Prevention:** Always wrap `JSON.parse` calls on client-side storage data in a `try...catch` block and implement a fallback mechanism (like removing the corrupted item) to ensure the application fails securely and recovers.
