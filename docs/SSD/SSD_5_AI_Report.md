# AEGIS

# SSD 05 – AI Intelligence & Report Engine

Version: 1.0

---

# 1. Purpose

This document defines the AI Intelligence Engine and Report Generation Engine of Aegis.

These components transform structured investigation data into meaningful explanations, educational content, remediation guidance, and professional investigation reports.

The Intelligence Engine never performs vulnerability discovery. Instead, it interprets validated findings produced by the Security Assessment Engine.

---

# 2. Design Philosophy

Cybersecurity tools answer:

> What was found?

The Intelligence Engine answers:

* What does this finding mean?
* Why is it important?
* How could it be exploited?
* How should it be fixed?
* What should the user learn next?

The objective is to convert technical findings into understandable knowledge.

---

# 3. AI Responsibilities

The AI Engine is responsible for:

* Investigation summaries
* Case explanations
* Business impact descriptions
* Real-world attack scenarios
* Remediation guidance
* Learning resources
* Report summaries

The AI is **never** responsible for discovering vulnerabilities.

---

# 4. AI Workflow

Every investigation follows the same AI pipeline.

```text id="5czg75"
Security Modules

↓

Evidence Engine

↓

Case Generation

↓

AI Intelligence

↓

Learning Content

↓

Report Generation

↓

Frontend
```

AI always receives structured investigation data.

It never consumes raw scanner output directly.

---

# 5. AI Input

The Intelligence Engine receives:

Investigation Metadata

↓

Technology Profile

↓

Attack Surface

↓

Cases

↓

Evidence

↓

Risk Levels

↓

Timeline

The AI has sufficient context to generate meaningful explanations while remaining grounded in validated evidence.

---

# 6. AI Output

For every investigation, the AI generates:

## Investigation Summary

A concise overview of the assessment.

Includes:

* Scope
* Key findings
* Overall security posture
* High-priority issues

---

## Case Explanations

Every case receives:

* Plain-language explanation
* Why it was detected
* Why it matters
* Possible attacker actions

---

## Remediation Guidance

Each case includes:

Immediate Fix

↓

Recommended Configuration

↓

Best Practices

↓

Prevention Tips

The guidance should be actionable and beginner-friendly.

---

## Learning Content

Each case automatically includes:

What is this?

↓

Why is it dangerous?

↓

How attackers exploit it

↓

Real-world examples

↓

Further reading

Learning Mode is generated from the investigation data.

---

# 7. Prompt Strategy

The AI should always receive structured context.

Prompt structure:

1. Investigation metadata
2. Technology profile
3. Evidence
4. Cases
5. User request

The AI should never be asked to infer information that is not present in the investigation.

This minimizes hallucinations and keeps explanations accurate.

---

# 8. Local AI

Version 1 uses Ollama as the default provider.

Reasons:

* No API cost
* Runs locally
* Privacy-friendly
* Easy to replace

The AI layer should remain provider-agnostic.

Future providers may include:

* OpenAI
* Anthropic
* Google Gemini
* Local Hugging Face models

Changing providers should not affect the rest of the application.

---

# 9. Learning Mode

Learning Mode is integrated directly into every Investigation Case.

Each case expands into the following sections:

## Overview

A simple explanation of the issue.

---

## Why It Matters

Explains the security impact.

---

## Real-World Example

References similar vulnerabilities or attack scenarios observed in real systems.

---

## How To Fix

Provides practical remediation guidance.

Whenever possible, include:

* Configuration examples
* Security headers
* Best practices

---

## Learn More

Links to trusted resources such as:

* OWASP
* MDN
* Official documentation
* Relevant RFCs

Learning Mode should educate without overwhelming the user.

---

# 10. Report Engine

The Report Engine converts completed investigations into professional reports.

Supported formats:

* PDF
* HTML
* Markdown

The report is generated from structured investigation data.

No additional scans are performed during report generation.

---

# 11. Report Structure

Every report follows the same layout.

```text id="hrmy8t"
Cover Page

↓

Executive Summary

↓

Target Information

↓

Technology Profile

↓

Attack Surface

↓

Investigation Timeline

↓

Security Cases

↓

Evidence

↓

Recommendations

↓

Learning Resources

↓

Appendix
```

This structure remains consistent across all report formats.

---

# 12. Report Design Principles

Reports should resemble professional consulting documents.

They should be:

* Easy to read
* Visually clean
* Well-structured
* Suitable for technical and non-technical audiences

Raw scanner output should never dominate the report.

Instead, reports emphasize:

* Findings
* Evidence
* Explanations
* Recommendations

---

# 13. Report Generation Workflow

```text id="8aebrm"
Investigation Completed

↓

Collect Investigation Data

↓

Generate AI Summary

↓

Assemble Report Sections

↓

Render Output

↓

Store Report

↓

Return Download Link
```

The report becomes part of the Investigation Session.

---

# 14. Report Storage

Each generated report is associated with a single Investigation.

Stored information includes:

* Investigation ID
* Report Type
* Generation Time
* File Location

Users can regenerate reports without rerunning the investigation.

---

# 15. Error Handling

If the AI Engine is unavailable:

* Investigation still completes.
* Evidence remains available.
* Cases remain available.
* Reports are generated without AI explanations.

If report generation fails:

* Investigation remains stored.
* AI explanations remain available.
* Users can retry report generation.

Failures should not invalidate completed investigations.

---

# 16. Future Expansion

Future versions may introduce:

* Chat with Investigation
* AI Follow-up Questions
* Risk Prioritization
* Compliance Mapping (OWASP, CIS, ISO)
* Executive Reports
* Multi-language Reports
* Comparative Reports
* Cloud Security Explanations

These capabilities should build upon the existing Intelligence Engine.

---

# 17. Success Criteria

The AI Intelligence & Report Engine is considered successful when it can:

* Transform technical findings into understandable explanations.
* Generate useful remediation guidance.
* Provide educational content for every case.
* Produce professional reports without requiring additional user input.
* Remain independent of the underlying AI provider.
* Continue functioning even when AI services are unavailable.

The Intelligence Engine should enhance the investigation experience while remaining grounded in validated evidence. Every explanation must help the user understand and improve their security posture without inventing facts or overstating risk.
