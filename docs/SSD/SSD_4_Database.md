# AEGIS

# SSD 04 – Database, Data Models & API Contracts

Version: 1.0

---

# 1. Purpose

This document defines the data layer of Aegis.

It specifies:

* Database structure
* Data relationships
* Core entities
* API request formats
* API response formats
* Object lifecycle

The objective is to ensure that every component of Aegis shares a consistent data model.

---

# 2. Database Philosophy

Version 1 intentionally uses SQLite.

Reasons:

* Simple setup
* Zero external dependencies
* Perfect for local development
* Easy migration to PostgreSQL later

The database stores structured investigation data rather than raw scanner output.

Every record should have a clear purpose.

---

# 3. Database Structure

```text
Users

↓

Projects

↓

Investigations

↓

Cases

↓

Reports
```

One user owns multiple projects.

One project contains multiple investigations.

One investigation contains multiple cases.

One investigation can generate multiple reports.

---

# 4. Core Tables

## Users

Stores authentication and account information.

Fields

* id
* name
* email
* password_hash
* created_at
* updated_at

---

## Projects

Represents a logical workspace.

Fields

* id
* user_id
* name
* description
* created_at
* updated_at

A project groups multiple investigations.

---

## Investigations

Represents one completed or running investigation.

Fields

* id
* project_id
* target
* investigation_profile
* status
* started_at
* completed_at
* duration

Possible Status Values

* Queued
* Running
* Completed
* Failed
* Cancelled

---

## Cases

Stores validated security findings.

Fields

* id
* investigation_id
* title
* category
* severity
* summary
* evidence
* recommendation
* references

Cases are generated from normalized scanner results.

---

## Reports

Stores generated reports.

Fields

* id
* investigation_id
* report_type
* generated_at
* file_path

Supported Types

* PDF
* HTML
* Markdown

---

# 5. Relationships

```text
User

1

↓

Many Projects

↓

1

↓

Many Investigations

↓

1

↓

Many Cases

↓

Many Reports
```

Deleting a project should remove all associated investigations, cases, and reports.

---

# 6. Investigation Object

The Investigation object is the central data structure of Aegis.

Example

```json
{
  "id": "INV-001",
  "target": "example.com",
  "profile": "Standard",
  "status": "Completed",
  "duration": "4m 21s",
  "technologies": [],
  "cases": [],
  "timeline": [],
  "report": {}
}
```

Every major feature references this object.

---

# 7. Case Object

Every security finding shares the same structure.

```json
{
  "title": "",
  "severity": "",
  "category": "",
  "summary": "",
  "evidence": "",
  "recommendation": "",
  "references": []
}
```

This structure remains consistent regardless of which scanner generated the finding.

---

# 8. Timeline Object

Each investigation stores a timeline.

Example

```json
[
  {
    "module": "Nmap",
    "status": "Completed",
    "duration": "18s"
  },
  {
    "module": "Gobuster",
    "status": "Running"
  }
]
```

The frontend uses this object to render the live investigation timeline.

---

# 9. API Contracts

Every API follows the same response format.

Success

```json
{
  "success": true,
  "message": "",
  "data": {}
}
```

Failure

```json
{
  "success": false,
  "message": "",
  "error": {}
}
```

This consistency simplifies frontend integration.

---

# 10. Primary API Endpoints

Authentication

```
POST /auth/register

POST /auth/login

GET /auth/profile
```

Projects

```
GET /projects

POST /projects

PUT /projects/{id}

DELETE /projects/{id}
```

Investigations

```
POST /investigations

GET /investigations/{id}

GET /investigations/history
```

Reports

```
POST /reports/generate

GET /reports/{id}
```

---

# 11. Request Examples

Create Project

```json
{
  "name": "Personal Portfolio",
  "description": "Security assessment project"
}
```

Start Investigation

```json
{
  "project_id": 1,
  "target": "example.com",
  "profile": "Standard"
}
```

---

# 12. Response Examples

Project Created

```json
{
  "success": true,
  "message": "Project created successfully.",
  "data": {
    "id": 1
  }
}
```

Investigation Completed

```json
{
  "success": true,
  "message": "Investigation completed.",
  "data": {
    "investigation_id": "INV-001"
  }
}
```

---

# 13. Data Lifecycle

Every investigation follows this lifecycle.

```text
Project

↓

Investigation Created

↓

Modules Generate Evidence

↓

Evidence Creates Cases

↓

AI Generates Intelligence

↓

Report Generated

↓

Investigation Stored

↓

Visible in History
```

No investigation data should be lost after completion.

---

# 14. Future Compatibility

Future versions may introduce additional entities.

Examples

Cloud Investigations

API Investigations

Container Investigations

Scheduled Investigations

Organizations

Notifications

The database should be extensible without changing the existing Investigation object.

---

# 15. Success Criteria

The data layer is considered successful when:

* All modules share the same Investigation object.
* API responses remain consistent.
* The frontend never depends on raw scanner output.
* Every investigation can be reconstructed from stored data.
* Future modules can extend the schema without breaking existing functionality.

The database and API contracts should provide a stable foundation for both the backend and frontend throughout the evolution of Aegis.
