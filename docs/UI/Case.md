# AEGIS

# UI Specification – Case

Version: 1.0

---

# 1. Purpose

The Case page is the final destination of every investigation.

It presents a single security finding as a complete investigation rather than a scanner result.

The objective is to transform a technical vulnerability into a structured learning experience.

The user should finish reading the page understanding:

* What was found.
* Why it exists.
* How attackers abuse it.
* How to fix it.
* How to prevent it in the future.

This page is the primary differentiator of Aegis.

---

# 2. Design Philosophy

Traditional scanners show findings.

Aegis tells the story behind the finding.

The page should feel like reading a premium security investigation prepared by an experienced consultant.

The interface should resemble modern SaaS products such as:

* Apple
* Linear
* Stripe
* Vercel
* Notion

Avoid:

* Hacker aesthetics
* Matrix effects
* Green terminals
* Large warning banners
* Dense tables

The interface should feel calm, premium and trustworthy.

---

# 3. User Flow

```text
Investigation

↓

User clicks a Finding

↓

Case Page Opens

↓

Understand Finding

↓

Review Evidence

↓

Understand Risk

↓

See Attack Story

↓

Learn Fix

↓

Continue Investigation
```

Every section naturally leads into the next.

The page should never feel overwhelming.

---

# 4. Page Layout

Desktop Layout

```text
────────────────────────────────────────────────────────

← Back to Investigation

                       HIGH

Missing Content Security Policy

Detected by Nuclei

────────────────────────────────────────────────────────

LEFT (70%)

Story

RIGHT (30%)

Sticky Sidebar

────────────────────────────────────────────────────────
```

The page scrolls vertically.

The sidebar remains visible.

---

# 5. Sticky Sidebar

The sidebar acts as a quick summary.

Contents

Severity

Category

Scanner

Affected Target

Investigation Name

Discovery Time

Estimated Reading Time

Quick Actions

• Copy Finding

• Generate Report

• Back to Investigation

Future

• Mark Reviewed

• Share

• Assign

The sidebar should remain fixed while scrolling.

---

# 6. Hero Section

Large title.

Example

```text
Missing Content Security Policy
```

Immediately below

```text
High Risk

Detected by Nuclei

OWASP Security Misconfiguration
```

Then

A one-line summary.

Example

```text
Your website does not define a Content Security Policy,
allowing browsers to execute scripts with fewer restrictions.
```

This is the first thing users read.

---

# 7. Story Structure

Every case always follows the same structure.

```text
🔍 What We Discovered

↓

📌 Technical Evidence

↓

⚠ Why It Matters

↓

💥 How An Attacker Could Exploit This

↓

🌍 Real World Example

↓

🛠 Recommended Fix

↓

📚 Learn More
```

Users quickly learn where information is located.

---

# 8. Section — What We Discovered

Purpose

Explain the finding in simple language.

Avoid technical jargon.

Example

```text
Aegis discovered that your website does not send
the Content-Security-Policy HTTP header.

As a result, browsers receive no instructions
restricting where scripts may execute from.
```

Estimated reading time

15–20 seconds.

---

# 9. Section — Technical Evidence

Evidence always appears before AI explanations.

This builds trust.

Display

Scanner

↓

Affected URL

↓

HTTP Request

↓

HTTP Response

↓

Headers

↓

Relevant Output

↓

Metadata

Example

```text
Scanner

Nuclei

────────────

GET /

────────────

HTTP 200 OK

────────────

Server

Apache

────────────

Content-Security-Policy

Missing
```

Long outputs should collapse.

A "Copy" button should be available for code blocks.

---

# 10. Section — Why It Matters

Explain consequences.

Not textbook definitions.

Instead of

"CSP protects against XSS."

Explain

```text
Without a Content Security Policy,
the browser cannot restrict where JavaScript loads from.

If another vulnerability exists,
this missing protection significantly increases its impact.
```

This section should answer

"So what?"

---

# 11. Section — How An Attacker Could Exploit This

This section differentiates Aegis from scanners.

Present a realistic attack chain.

Example

```text
Imagine an attacker discovers an XSS vulnerability.

Normally,
a strict Content Security Policy could prevent
many malicious scripts from executing.

Without CSP,

the attacker injects JavaScript,

the browser trusts it,

sessions may be stolen,

accounts compromised,

or sensitive information exfiltrated.
```

Avoid sensationalism.

Explain realistic scenarios.

---

# 12. Section — Real World Example

Learning becomes memorable.

Reference

Major companies

Historical incidents

Security best practices

Example

```text
GitHub, Google and many banking applications
enforce strict Content Security Policies
to reduce the impact of Cross-Site Scripting attacks.

Although CSP is not a replacement
for secure code,
it provides an important additional layer of defense.
```

When appropriate, include CVEs or notable incidents.

---

# 13. Section — Recommended Fix

This section focuses on practical remediation.

Display

Configuration example

↓

Explanation

↓

Additional recommendations

Example

```text
Content-Security-Policy:

default-src 'self';
```

Then explain

Why it works.

Below that,

display framework-specific examples.

Tabs

Apache

Nginx

Express

Spring

Only show tabs relevant to the detected technology.

---

# 14. Section — Learn More

Always finish with trusted resources.

Cards

OWASP

MDN

CWE

Official Documentation

RFC

PortSwigger

Every card opens in a new tab.

---

# 15. Related Findings

If similar findings exist,

display them below.

Example

```text
Missing X-Frame-Options

↓

Missing X-Content-Type-Options

↓

Weak TLS Configuration
```

Users can navigate directly.

This encourages exploration.

---

# 16. Empty States

Evidence unavailable

```text
Evidence could not be collected for this finding.

The investigation still gathered enough information
to validate this issue.
```

AI unavailable

```text
AI explanation is currently unavailable.

Technical evidence remains accessible.
```

Never leave empty white space.

---

# 17. Loading States

Avoid blank pages.

Use skeleton loaders for

Title

Summary

Cards

Evidence

AI sections

Cards should appear progressively.

---

# 18. Microinteractions

Every interaction should feel premium.

Examples

Cards lift slightly on hover.

Buttons animate smoothly.

Expandable sections slide open.

Sidebar transitions gently.

Code blocks copy with visual confirmation.

Links underline on hover.

Animations should support usability rather than attract attention.

---

# 19. Typography & Spacing

Large headings.

Comfortable line spacing.

Readable paragraph width.

Generous whitespace.

Every section feels independent.

The page should never appear cluttered.

---

# 20. Accessibility

Support

Keyboard navigation

Screen readers

High contrast mode

Reduced motion preferences

Responsive layouts

Large touch targets

Code block scrolling

---

# 21. Future Enhancements

Version 2

Ask AI About This Finding

Related CVEs

MITRE ATT&CK Mapping

Risk Comparison

Version 3

Interactive Remediation Assistant

Threat Intelligence

Compliance Mapping

---

# 22. Success Criteria

The Case page is successful when a user can open any finding and answer the following questions without leaving Aegis:

* What exactly was discovered?
* How was it detected?
* What evidence supports it?
* Why is it dangerous?
* How could it be exploited?
* How do I fix it?
* Where can I learn more?

A successful Case page transforms a scanner result into an engaging cybersecurity investigation that is educational, actionable and memorable. It should feel closer to an interactive security report than a vulnerability details page, reinforcing Aegis' identity as an investigation platform rather than a collection of security tools.
