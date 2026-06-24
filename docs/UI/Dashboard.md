# AEGIS

# UI Specification – Dashboard

Version: 1.0

---

# 1. Purpose

The Dashboard is the user's workspace after logging in.

Unlike the cinematic landing page, the Dashboard prioritizes speed, clarity and productivity.

This is where users manage projects, review investigations, access reports and start new security assessments.

The Dashboard should feel like a professional SaaS application rather than a cybersecurity tool.

---

# 2. Design Philosophy

The Dashboard should feel inspired by:

* Linear
* Vercel
* GitHub
* Notion
* Arc Browser

It should **not** feel like:

* Kali Linux
* Hacker terminals
* Matrix themes
* SIEM dashboards
* Dense enterprise software

The interface should remain calm, minimal and distraction-free.

Animations should only support usability.

---

# 3. User Flow

```text
Login

↓

Dashboard

↓

Select Project

↓

View Investigations

↓

Start New Investigation

↓

Open Investigation

↓

Open Case

↓

Generate Report
```

The Dashboard acts as the central navigation hub.

---

# 4. Overall Layout

```text
────────────────────────────────────────────

Top Navigation

────────────────────────────────────────────

Sidebar

|

Main Workspace

|

Project Panel

────────────────────────────────────────────
```

The interface uses a modern three-panel layout.

---

# 5. Top Navigation

Contains

* Aegis Logo
* Global Search
* Notifications (Future)
* Theme Toggle
* User Profile

The navigation remains fixed while scrolling.

Height should remain compact.

---

# 6. Sidebar

Primary navigation.

Items

Dashboard

Projects

Investigations

Reports

Settings

Future

Documentation

Notifications

Organizations

Each item includes an icon and label.

The active page is clearly highlighted.

The sidebar should be collapsible.

---

# 7. Welcome Section

The first section greets the user.

Example

```text
Good Evening,

Ekansh

Ready for your next investigation?
```

Below

Quick statistics

Projects

Investigations

Reports

Recent Activity

The design should feel clean and spacious.

---

# 8. Quick Actions

Prominent action cards.

Examples

➕ New Investigation

📁 Create Project

📄 View Reports

🕒 Continue Last Investigation

Cards should be visually distinct and easy to click.

---

# 9. Project Grid

Projects are displayed as premium cards.

Each card contains

Project Name

Description

Number of Investigations

Last Updated

Status

Hovering over a card slightly elevates it and reveals quick actions.

Clicking a card opens the project workspace.

---

# 10. Recent Investigations

Display as a clean table.

Columns

Target

Profile

Status

Duration

Date

Quick Action

Status indicators

Running

Completed

Failed

Queued

Clicking a row opens the Investigation page.

---

# 11. Reports Section

Shows recently generated reports.

Each report card displays

Report Name

Generated Date

Target

Download

Open

Reports should be searchable.

---

# 12. Search

Global search should allow users to quickly find

Projects

Investigations

Reports

Typing filters results instantly.

Future versions may support finding specific vulnerabilities.

---

# 13. Empty States

If the user has no projects

Display

```text
No projects yet.

Create your first project to begin investigating websites.
```

Show a prominent "Create Project" button.

Avoid empty tables.

---

# 14. Loading States

Use skeleton loaders for

Project cards

Investigation table

Reports

Statistics

Avoid spinner-only loading.

---

# 15. Microinteractions

Subtle animations only.

Examples

* Cards lift slightly on hover.
* Buttons animate smoothly.
* Sidebar expands/collapses with a short transition.
* Table rows highlight on hover.
* Search results appear instantly.
* Statistics animate once when loaded.

Avoid decorative animations that distract from productivity.

---

# 16. Color Palette

Primary Background

Dark charcoal

Cards

Slightly lighter surface

Accent

Blue

Secondary Accent

Purple

Success

Green

Warning

Amber

Critical

Red

Colors should communicate information rather than dominate the interface.

---

# 17. Typography

Use a modern sans-serif font.

Large headings.

Comfortable spacing.

Readable tables.

Consistent hierarchy.

The interface should feel premium and uncluttered.

---

# 18. Responsive Design

Desktop

Three-column layout.

Tablet

Sidebar collapses.

Cards become two columns.

Mobile

Single-column layout.

Bottom navigation replaces the sidebar.

Tables become stacked cards.

---

# 19. Accessibility

Support

Keyboard navigation

Screen readers

High contrast mode

Reduced motion

Visible focus indicators

Large click targets

---

# 20. Future Enhancements

Dashboard Analytics

Security Trends

Weekly Activity

Project Tags

Favorites

Pinned Projects

Team Collaboration

Cloud Investigations

---

# 21. Success Criteria

A successful Dashboard allows users to:

* Understand the current state of their projects at a glance.
* Quickly start a new investigation.
* Resume previous work.
* Access reports with minimal effort.
* Navigate the platform intuitively.

The Dashboard should feel like the command center of Aegis—professional, efficient and polished—setting the stage for investigations without overwhelming users with unnecessary complexity.
