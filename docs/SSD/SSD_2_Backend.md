# AEGIS

# SSD 02 – Backend Architecture

Version: 1.0

---

# 1. Purpose

This document defines the backend architecture of Aegis.

It specifies how the FastAPI application is organized, how requests flow through the system, how business logic is separated, and how backend components interact.

The objective is to create a clean, modular backend that is easy to maintain and extend as new cybersecurity capabilities are added.

---

# 2. Backend Philosophy

The backend serves as the central coordinator of Aegis.

It is responsible for:

* Authentication
* Authorization
* Project Management
* Investigation Orchestration
* Security Tool Execution
* AI Communication
* Database Operations
* Report Generation
* API Responses

The backend should contain all business logic.

The frontend should remain presentation-focused.

---

# 3. Backend Folder Structure

```text
backend/

app/

├── auth/
├── routes/
├── services/
├── modules/
├── database/
├── models/
├── schemas/
├── ai/
├── reports/
├── utils/
├── config.py
└── main.py
```

Every folder has one responsibility.

---

# 4. Folder Responsibilities

## routes/

Contains all REST API endpoints.

Responsibilities:

* Receive requests
* Validate input
* Call services
* Return responses

Routes should never contain business logic.

---

## services/

Contains application business logic.

Examples:

* Authentication Service
* Investigation Service
* Project Service
* Report Service

Services coordinate multiple modules.

---

## modules/

Contains integrations with security tools.

Each module wraps one security tool.

Version 1:

* nmap.py
* whatweb.py
* gobuster.py
* nuclei.py

Future:

* burp.py
* ffuf.py
* sqlmap.py
* nikto.py
* aws.py

Modules should remain independent.

---

## models/

Contains database models.

Examples:

* User
* Project
* Investigation
* Case
* Report

---

## schemas/

Contains request and response schemas.

Examples:

* LoginRequest
* CreateProjectRequest
* InvestigationResponse

These ensure API consistency.

---

## database/

Database initialization.

Connection management.

Session management.

Migrations (future).

---

## ai/

Contains the Intelligence Engine.

Responsibilities:

* Prompt generation
* LLM communication
* AI summaries
* Learning content

---

## reports/

Responsible for generating:

* HTML reports
* Markdown reports
* PDF reports

---

## utils/

Utility functions.

Examples:

* Validators
* Logger
* File helpers
* Time formatting

---

# 5. Request Lifecycle

Every API request follows the same flow.

```text
Client Request

↓

Route

↓

Validation

↓

Service

↓

Database / Module / AI

↓

Service

↓

Response Schema

↓

Client Response
```

This separation should be maintained across the application.

---

# 6. Authentication Flow

Authentication uses JWT.

Workflow:

Register

↓

Hash Password

↓

Store User

↓

Login

↓

Verify Credentials

↓

Generate JWT

↓

Return Token

↓

Authenticated Requests

↓

Protected Endpoints

Passwords are never stored in plain text.

---

# 7. Investigation Lifecycle

When a user starts an investigation:

```text
User

↓

Create Investigation

↓

Validate Target

↓

Create Investigation Session

↓

Execute Scan Modules

↓

Store Results

↓

Generate AI Intelligence

↓

Generate Report

↓

Return Investigation
```

The Investigation Service coordinates this process.

---

# 8. API Design

The backend exposes REST APIs.

Examples:

Authentication

```text
POST /auth/register

POST /auth/login

GET /auth/profile
```

Projects

```text
GET /projects

POST /projects

DELETE /projects/{id}
```

Investigations

```text
POST /investigations

GET /investigations/{id}

GET /investigations/history
```

Reports

```text
GET /reports/{id}

POST /reports/generate
```

Future endpoints should follow the same naming convention.

---

# 9. Response Format

Every API should return a consistent structure.

Example:

```json
{
  "success": true,
  "message": "Investigation completed.",
  "data": {}
}
```

Errors should follow the same format.

```json
{
  "success": false,
  "message": "Target validation failed.",
  "error": {}
}
```

Consistency simplifies frontend development.

---

# 10. Investigation Orchestrator

The Investigation Service acts as the orchestrator.

Responsibilities:

* Create investigation sessions.
* Execute modules in order.
* Handle failures.
* Aggregate findings.
* Trigger AI.
* Trigger report generation.

Individual modules never coordinate with each other.

---

# 11. Module Execution

Version 1 execution order:

```text
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

The orchestrator waits for one module to finish before starting the next.

Future versions may support parallel execution where appropriate.

---

# 12. Error Handling

Errors should remain isolated.

Example:

Gobuster fails.

Result:

* Investigation continues.
* Timeline records the failure.
* Report indicates incomplete module.
* Other findings remain available.

One failed module must never invalidate the entire investigation.

---

# 13. Logging

The backend should log:

Authentication events

Project creation

Investigation lifecycle

Module execution

Errors

Report generation

Logs should assist debugging without exposing sensitive information.

---

# 14. Configuration

Sensitive configuration values should be stored using environment variables.

Examples:

JWT Secret

Database Path

Ollama Endpoint

Report Directory

Future API Keys

Configuration should never be hardcoded.

---

# 15. Security Considerations

The backend must enforce:

JWT authentication

Password hashing

Input validation

Target validation

Protected endpoints

Rate limiting (future)

Secure error handling

Sensitive information should never be returned in API responses.

---

# 16. Extensibility

Future modules should require minimal backend changes.

Adding a new scanner should involve:

1. Creating a new module.

2. Registering the module with the Investigation Service.

3. Mapping its output into the common investigation format.

No existing modules should require modification.

---

# 17. Success Criteria

The backend architecture is considered successful when:

* Business logic remains independent of routes.
* Security modules remain modular.
* APIs remain consistent.
* New modules can be added easily.
* AI integrates without changing scanner logic.
* Frontend changes do not affect backend architecture.
* Backend remains understandable for new contributors.

This backend architecture provides a scalable and maintainable foundation for all future versions of Aegis.
