## 2024-05-24 - Missing Input Length Limits on Early Access Form
**Vulnerability:** The Early Access forms lack input validation max lengths on form fields like email, name, or Instagram handles, which can potentially lead to client-side or server-side denial of service (DoS) and application layer resource exhaustion.
**Learning:** React Hook Form and Zod combinations should define `max()` boundaries out-of-the-box, complemented by `maxLength` in the JSX inputs for defense-in-depth, preventing extremely large payloads.
**Prevention:** Establish a baseline security requirement that all free-text input fields are capped to a reasonable `maxLength` attribute at the HTML level and validated with a strict max boundary in the validation schema.
