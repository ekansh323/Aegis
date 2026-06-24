# AEGIS

# UI Specification – Investigation

Version: 1.0

---

# 1. Purpose

The Investigation page is the operational heart of Aegis.

It is where users launch, monitor and explore a complete security investigation.

Unlike traditional scanners that simply display "Scanning...", Aegis visualizes every stage of the investigation, allowing users to understand exactly what the platform is doing.

The goal is to make security assessments feel like an active investigation rather than a black-box process.

---

# 2. Design Philosophy

This page should feel like a modern Mission Control.

Not

* Kali Linux
* Burp Suite
* Terminal windows
* Matrix animations
* Hacker aesthetics

Instead think

* Linear
* Vercel
* Apple
* Arc Browser
* Stripe Dashboard

Everything should feel intentional, calm and professional.

Animations should communicate progress—not decorate the interface.

---

# 3. User Journey

```text
Dashboard

↓

Select Project

↓

Start Investigation

↓

Watch Investigation Progress

↓

Review Technologies

↓

Review Attack Surface

↓

Open Findings

↓

Generate Report

↓

Complete Mission
```

Every stage naturally flows into the next.

---

# 4. Overall Layout

```text
──────────────────────────────────────────────────────────

← Back

example.com

Standard Investigation

Running

──────────────────────────────────────────────────────────

Mission Timeline

──────────────────────────────────────────────────────────

Investigation Progress

──────────────────────────────────────────────────────────

Technology Profile

Attack Surface

──────────────────────────────────────────────────────────

Security Findings

──────────────────────────────────────────────────────────

AI Summary

──────────────────────────────────────────────────────────
```

The page scrolls naturally.

No information overload.

---

# 5. Hero Section

The hero introduces the investigation.

Display

Target

Investigation Profile

Current Status

Start Time

Estimated Duration

Example

```text
example.com

Standard Investigation

Running

Started 2 minutes ago

Estimated Time

5 minutes
```

A subtle animated pulse indicates an active investigation.

---

# 6. Mission Timeline (Signature Feature)

This is one of Aegis' defining features.

Instead of

```text
Loading...
```

Display a live investigation pipeline.

```text
Reconnaissance

████████████

Completed

↓

Technology Detection

██████

Running

↓

Content Discovery

Waiting

↓

Vulnerability Assessment

Waiting

↓

AI Intelligence

Waiting

↓

Mission Complete
```

Each stage updates live.

Users always know what is happening.

---

# 7. Timeline States

Every stage supports five states.

Queued

Running

Completed

Failed

Skipped

Visual indicators

Queued

Muted

Running

Animated progress bar

Completed

Checkmark animation

Failed

Warning icon

Skipped

Grey indicator

State transitions should animate smoothly.

---

# 8. Live Investigation Feed

Below the timeline, display a live event stream.

Example

```text
10:21:13

Investigation started

────────────────

10:21:18

Nmap completed

4 open ports discovered

────────────────

10:21:32

WhatWeb identified

Apache

PHP

Bootstrap

────────────────

10:21:51

Gobuster discovered

/admin

/login

/uploads

────────────────

10:22:27

Nuclei discovered

Missing CSP

Missing HSTS

```

This gives users confidence that work is happening.

---

# 9. Technology Profile

Instead of listing technologies as plain text,

display them as premium cards.

Example

```text
Apache

Version

2.4

────────────

PHP

8.2

────────────

Bootstrap

5

────────────

Cloudflare

Enabled
```

Each card contains

Technology

Version

Status

Short Description

Future versions may include links to official documentation.

---

# 10. Attack Surface Overview

Summarize the discovered attack surface.

Cards

Open Ports

Directories

Technologies

Headers

Certificates

Each card displays

Count

↓

Short Description

↓

Quick View

This gives users an immediate understanding of the target.

---

# 11. Security Findings

This is the main section after the investigation completes.

Never display

```text
Port

Severity

Status
```

Instead,

every finding appears as a premium investigation card.

Each card contains

Title

Severity

Short Summary

Scanner

Affected Resource

Open Investigation

Example

```text
Missing Content Security Policy

High

Your website does not define a CSP header.

Found by Nuclei

View Investigation →
```

Clicking a card opens the Case page.

---

# 12. AI Investigation Summary

Once all modules complete,

generate a concise executive summary.

Example

```text
Aegis completed the investigation successfully.

The assessment identified two high-risk findings
related to missing security headers and one medium-risk
configuration issue.

No critical remote code execution vulnerabilities
were detected.

Priority should be given to implementing CSP
and HSTS.
```

This summary appears above the findings list.

---

# 13. Investigation Statistics

Display compact summary cards.

Example

```text
4

Open Ports

────────────

12

Directories

────────────

7

Technologies

────────────

5

Findings
```

Statistics animate into view once the investigation completes.

---

# 14. Quick Actions

Available actions

Generate Report

Restart Investigation

Download Results

Copy Target

Return to Dashboard

Future

Schedule Investigation

Share Investigation

Export JSON

---

# 15. Empty States

If no vulnerabilities are discovered

Never display

```text
No vulnerabilities.
```

Instead

```text
No significant vulnerabilities were identified
during this investigation.

This does not guarantee the website is secure.

Continue following security best practices
and perform periodic assessments.
```

Avoid giving users a false sense of security.

---

# 16. Error States

If a module fails

Display

```text
Gobuster was unable to complete.

The remaining investigation continued successfully.
```

Users should understand what happened.

Never expose stack traces.

---

# 17. Loading Experience

The investigation page should never feel idle.

Instead of spinners,

continuously update

Timeline

Statistics

Technology cards

Event feed

Progress indicators

This creates the feeling of a real investigation.

---

# 18. Animations

Animations should communicate activity.

Examples

Timeline progresses sequentially.

Cards fade in as modules complete.

Technology cards appear one by one.

Statistics count upward.

Event feed appends smoothly.

Buttons elevate slightly on hover.

Avoid excessive motion.

The focus should remain on the investigation.

---

# 19. Responsive Design

Desktop

Two-column content layout.

Tablet

Cards stack vertically.

Mobile

Timeline becomes vertical.

Technology cards become horizontally scrollable.

Finding cards occupy full width.

---

# 20. Accessibility

Support

Keyboard navigation

Screen readers

Reduced motion

High contrast

Readable typography

Clear status indicators

Accessible color usage

---

# 21. Future Enhancements

Future versions may introduce

Real-time WebSockets

Parallel module execution

Interactive attack surface graph

Cloud investigation modules

Historical comparison

Compliance scoring

Threat intelligence integration

Scheduled investigations

---

# 22. Success Criteria

The Investigation page is successful when users can:

* Understand what stage the investigation is currently in.
* Observe progress in real time.
* Explore discovered technologies.
* Review the attack surface.
* Access findings without information overload.
* Transition naturally into detailed Case investigations.
* Feel that Aegis is actively conducting a professional security investigation rather than simply running command-line tools.

The Investigation page should make users feel like they are supervising a live cybersecurity operation, combining transparency, clarity and professionalism into a single experience.
