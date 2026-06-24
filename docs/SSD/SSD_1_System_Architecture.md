# AEGIS

# SSD 01 – System Architecture & High-Level Design

Version: 1.0

---

# 1. Purpose

This document defines the overall architecture of Aegis.

It describes how every major component of the system interacts, how data flows throughout the platform, the responsibilities of each layer, and the architectural decisions made for Version 1.

This document intentionally avoids implementation-specific code. Detailed implementation is covered in subsequent SSD documents.

---

# 2. Architecture Overview

Aegis follows a modular full-stack architecture consisting of four primary layers.

```text
                User
                  │
                  ▼
        ┌───────────────────┐
        │   Next.js Client  │
        │ (Frontend / UI)   │
        └───────────────────┘
                  │
          HTTPS / REST API
                  │
                  ▼
        ┌───────────────────┐
        │   FastAPI Server  │
        │ Business Logic    │
        └───────────────────┘
                  │
      ┌───────────┼────────────┐
      │           │            │
      ▼           ▼            ▼
SQLite Database  AI Engine   Scan Engine
                 (Ollama)     (Nmap, WhatWeb,
                               Gobuster, Nuclei)
```

The frontend never communicates directly with the scanners.

All communication flows through the FastAPI backend.

---

# 3. Architectural Principles

The system is designed around the following principles:

* Modular
* Simple to understand
* Easy to extend
* Beginner-friendly architecture
* Clear separation of responsibilities
* Independent scan modules
* Future-ready for cloud security expansion

Version 1 intentionally avoids microservices and distributed systems.

---

# 4. High-Level Components

## Frontend

Responsibilities:

* Authentication UI
* Project management
* Investigation dashboard
* Timeline visualization
* Case viewer
* Report viewer
* Learning Mode
* User settings

The frontend never executes security tools.

Its responsibility is presenting information and interacting with backend APIs.

---

## Backend

Responsibilities:

* Authentication
* Project management
* Investigation orchestration
* Scanner execution
* AI communication
* Report generation
* Database operations
* API responses

The backend acts as the central coordinator for the entire platform.

---

## Database

SQLite stores:

* Users
* Projects
* Investigations
* Cases
* Reports
* Settings

The database never stores temporary scanner output directly.

Instead, processed findings are stored as structured investigation data.

---

## Scan Engine

The Scan Engine is responsible for running cybersecurity tools.

Version 1 modules:

* Nmap
* WhatWeb
* Gobuster
* Nuclei

Each module executes independently.

Outputs are normalized before being passed to the backend.

No module directly communicates with another module.

---

## AI Intelligence Engine

The AI Engine is responsible only for interpretation.

Responsibilities:

* Explain findings
* Summarize investigations
* Suggest remediation
* Generate learning content

The AI Engine never performs vulnerability detection.

---

# 5. Folder Structure

```text
Aegis/

frontend/
│
├── app/
├── components/
├── hooks/
├── lib/
├── services/
├── types/
├── public/

backend/
│
├── app/
│
├── routes/
├── services/
├── modules/
├── database/
├── models/
├── schemas/
├── auth/
├── ai/
├── reports/
├── utils/
└── main.py

docs/
```

Every major responsibility has its own directory.

Business logic should never exist inside route files.

---

# 6. System Workflow

Every investigation follows the same architecture.

```text
User

↓

Frontend

↓

FastAPI

↓

Create Investigation Session

↓

Run Scan Modules

↓

Collect Results

↓

Normalize Results

↓

Store Investigation

↓

Generate AI Explanations

↓

Generate Report

↓

Return Investigation to Frontend
```

Every investigation is treated as an independent session.

---

# 7. Investigation Session

An Investigation Session is the central object in Aegis.

Everything generated during an investigation belongs to that session.

An Investigation Session contains:

* Investigation ID
* Project
* Target
* Profile
* Status
* Timeline
* Technologies
* Cases
* Evidence
* AI Intelligence
* Generated Reports
* Start Time
* Completion Time

Future versions may include:

* Resuming investigations
* Comparing investigations
* Scheduled investigations

---

# 8. Data Flow

A simplified request flow:

```text
User starts investigation

↓

Frontend sends request

↓

Backend validates target

↓

Create Investigation Session

↓

Execute Nmap

↓

Execute WhatWeb

↓

Execute Gobuster

↓

Execute Nuclei

↓

Normalize outputs

↓

Store structured findings

↓

Generate AI explanations

↓

Generate report

↓

Return complete investigation
```

The frontend should receive structured investigation objects rather than raw scanner output.

---

# 9. Communication Between Components

Communication follows strict boundaries.

Frontend

↓

Backend APIs

↓

Services

↓

Modules

↓

Database / AI / Scanner

Modules never communicate directly with the frontend.

The frontend never communicates directly with security tools.

This separation improves maintainability.

---

# 10. Error Handling Philosophy

Failures should remain isolated.

Examples:

If Gobuster fails:

* Nmap results remain available.
* WhatWeb results remain available.
* Nuclei continues if possible.
* The investigation completes with a warning.

The platform should never terminate an entire investigation because one module failed.

Users should be informed which modules completed successfully.

---

# 11. Scalability

The architecture is intentionally modular.

Adding a future security module should require:

* Creating a new module.
* Registering it in the Investigation Engine.
* Mapping its output into the standard investigation format.

Existing modules should remain unchanged.

---

# 12. Security Considerations

Version 1 includes:

* JWT authentication
* Password hashing
* Input validation
* Target validation
* API validation

Future versions will expand authentication and authorization capabilities.

---

# 13. Future Expansion

The architecture supports adding new investigation types without redesign.

Examples:

Website Investigation

↓

Cloud Investigation

↓

API Investigation

↓

Container Investigation

↓

Infrastructure Investigation

Each investigation type follows the same lifecycle while using different investigation modules.

---

# 14. Version 1 Technology Stack

Frontend

* Next.js
* TypeScript
* Tailwind CSS
* Framer Motion

Backend

* FastAPI
* Python

Database

* SQLite

AI

* Ollama

Security Modules

* Nmap
* WhatWeb
* Gobuster
* Nuclei

Deployment

* Vercel (Frontend)
* Render / Railway (Backend)

---

# 15. Architectural Decisions

The following decisions were made intentionally:

* Monolithic architecture instead of microservices.
* SQLite instead of PostgreSQL for Version 1.
* Local Ollama inference instead of paid APIs by default.
* REST APIs instead of GraphQL.
* Modular services instead of tightly coupled business logic.
* Investigation Sessions as the central data model.
* Security tools remain independent modules.
* AI augments scanner output rather than replacing scanners.

These decisions optimize for rapid development, maintainability, and learning while keeping the architecture extensible for future releases.

---

# 16. Success Criteria

The architecture is considered successful when:

* New security modules can be added with minimal changes.
* Investigations remain independent.
* Frontend and backend remain loosely coupled.
* AI explanations are generated without affecting scanner execution.
* Reports accurately represent completed investigations.
* The platform remains easy to understand and maintain.

This architecture serves as the foundation for all future versions of Aegis.
