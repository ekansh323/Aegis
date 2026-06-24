# AEGIS

# SSD 03 – Security Assessment Engine

Version: 1.0

---

# 1. Purpose

The Security Assessment Engine is the core of Aegis.

It coordinates every website investigation by orchestrating security tools, collecting technical evidence, normalizing results, creating investigation cases, triggering AI explanations, and generating the final investigation report.

Rather than exposing individual tools to users, the Security Assessment Engine combines multiple security modules into a single investigation pipeline.

---

# 2. Design Philosophy

Aegis is **not** a collection of scanners.

It is an investigation platform.

Users never manually execute Nmap, Gobuster or Nuclei.

Instead they start an investigation.

The engine decides:

* Which modules execute
* Execution order
* Information sharing
* Evidence collection
* AI context
* Final report

The user experiences one investigation instead of several disconnected scans.

---

# 3. Investigation Lifecycle

Every investigation follows the same lifecycle.

```text
User Starts Investigation

↓

Target Validation

↓

Investigation Session Created

↓

Reconnaissance

↓

Technology Fingerprinting

↓

Content Discovery

↓

Vulnerability Assessment

↓

Evidence Processing

↓

Risk Classification

↓

AI Intelligence

↓

Report Generation

↓

Investigation Completed
```

Every investigation follows this order.

---

# 4. Investigation Profiles

Version 1 supports three predefined profiles.

## Quick

Purpose

Rapid overview.

Modules

* WhatWeb
* Basic Security Headers
* SSL Check

Duration

~1 minute

---

## Standard (Default)

Purpose

Complete website assessment.

Modules

* Nmap
* WhatWeb
* Gobuster
* Nuclei

Duration

3–10 minutes

---

## Deep

Purpose

Extended assessment.

Changes

* Larger Gobuster wordlists
* Additional Nuclei templates
* Longer timeout values
* More comprehensive enumeration

Deep mode prioritizes completeness over speed.

---

# 5. Module Execution Order

Modules execute sequentially.

```text
Target Validation

↓

Nmap

↓

WhatWeb

↓

Gobuster

↓

Nuclei

↓

AI Intelligence

↓

Report Generation
```

The output of one module may provide additional context for later modules, but modules remain logically independent.

---

# 6. Module Responsibilities

## Nmap

Purpose

Understand the exposed network surface.

Collects

* Open ports
* Running services
* Service versions
* Operating system (when available)

Output

Network Profile

---

## WhatWeb

Purpose

Identify technologies.

Collects

* Web server
* Framework
* CMS
* Libraries
* Programming language
* Security headers

Output

Technology Profile

---

## Gobuster

Purpose

Discover hidden resources.

Collects

* Directories
* Admin panels
* Backup files
* Sensitive endpoints

Output

Content Discovery Map

---

## Nuclei

Purpose

Detect known security issues.

Collects

* Misconfigurations
* Missing security headers
* Exposed files
* CVEs
* Weak configurations

Output

Security Findings

---

# 7. Evidence Engine

Every module produces raw output.

Raw output should **never** be shown directly to users.

Instead, outputs are converted into structured evidence.

Every evidence object contains:

* Source Module
* Timestamp
* Raw Result
* Processed Summary
* Supporting Metadata

Evidence becomes the foundation for Investigation Cases.

---

# 8. Case Generation Engine

The Case Engine converts evidence into user-facing findings.

Each case contains:

Title

Category

Severity

Summary

Evidence

Technical Details

Business Impact

Recommended Fix

Learning Resources

Cases are generated only from validated evidence.

Duplicate findings should be merged into a single case.

---

# 9. Risk Classification

Risk levels should remain consistent across the platform.

Levels

Critical

High

Medium

Low

Informational

Severity alone is not sufficient.

Every case must include an explanation describing **why** that severity was assigned.

---

# 10. AI Intelligence Engine

After all modules finish, structured investigation data is passed to the AI Engine.

The AI receives:

Technology Profile

Attack Surface

Cases

Evidence

Risk Levels

The AI returns:

* Investigation Summary
* Case Explanations
* Real-world Attack Scenarios
* Remediation Guidance
* Learning Resources

The AI never analyzes raw scanner output directly.

---

# 11. Learning Engine

Learning Mode is automatically generated from investigation cases.

Each case expands into:

What is this?

↓

Why is it dangerous?

↓

How attackers exploit it

↓

Real-world incidents

↓

How to fix it

↓

Further reading

Learning Mode should remain available even after the investigation completes.

---

# 12. Timeline Engine

Every module updates the investigation timeline.

States

Queued

Running

Completed

Failed

Skipped

Each completed module records:

* Start Time
* End Time
* Duration
* Status

Users should always understand what the engine is doing.

---

# 13. Failure Handling

Investigations should degrade gracefully.

Examples

Nmap fails

↓

Continue with WhatWeb

Gobuster fails

↓

Continue with Nuclei

Nuclei crashes

↓

Generate report using available evidence

One module failing should never terminate the entire investigation.

The report should clearly indicate incomplete modules.

---

# 14. Investigation Session

Every investigation creates a unique Investigation Session.

Session stores:

* Investigation ID
* Project ID
* Target
* Profile
* Status
* Timeline
* Technology Profile
* Evidence
* Cases
* AI Intelligence
* Reports
* Start Time
* End Time

Everything generated during the investigation belongs to this session.

---

# 15. Future Module Integration

Future scanners should integrate using the same lifecycle.

Version 2

* Burp Suite
* ffuf

Version 3

* SQLMap
* Nikto

Version 4

* AWS Security Assessment

New modules must:

* Produce structured evidence
* Integrate with the Case Engine
* Integrate with the Timeline
* Integrate with AI
* Integrate with Reports

No existing modules should require modification.

---

# 16. Success Criteria

The Security Assessment Engine is considered complete when it can:

* Execute an investigation from start to finish.
* Coordinate multiple security tools.
* Convert raw scanner output into structured evidence.
* Generate investigation cases.
* Produce AI-assisted explanations.
* Create professional reports.
* Preserve a complete investigation history.

The user should experience a single coherent investigation rather than a collection of independent security scans.
