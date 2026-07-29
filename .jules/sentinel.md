## 2024-03-20 - Security review
**Vulnerability:** Use of `dangerouslySetInnerHTML` in shadcn/ui chart.tsx
**Learning:** `dangerouslySetInnerHTML` is used in `src/components/ui/chart.tsx`. Memory instructions state: "The use of dangerouslySetInnerHTML in src/components/ui/chart.tsx is standard shadcn/ui boilerplate that safely manipulates CSS variables from internal constants and does not constitute an XSS vulnerability."
**Prevention:** N/A, not a vulnerability.
