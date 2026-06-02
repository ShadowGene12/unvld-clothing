## 2024-03-08 - Prevent PII Disclosure in Console Logs
**Vulnerability:** Personal Identifiable Information (PII) like names, emails, and cities were being logged to the browser console during form submissions.
**Learning:** Even mock form submissions shouldn't log PII, as this data can be exposed to browser extensions, third-party scripts, or in user-provided screenshots.
**Prevention:** Remove `console.log` statements that print user input, especially from authentication or signup forms.
