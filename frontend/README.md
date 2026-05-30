# ROOTBUILDERS – Talent Engagement Dashboard

A centralized talent engagement and cohort monitoring system for RootBuilders, designed to help program organizers, operations managers, program leads, team leads, and participants track engagement, attendance, task submissions, team activity, and inactivity across large learning cohorts.

The dashboard replaces fragmented manual tracking and spreadsheet-heavy workflows with a structured operational system that gives real-time visibility into participant performance, team health, and cohort engagement.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Product Context](#product-context)
- [The Problem](#the-problem)
- [The Solution](#the-solution)
- [Product Objectives](#product-objectives)
- [Target Users](#target-users)
- [User Personas](#user-personas)
- [Core Features](#core-features)
- [MVP Scope](#mvp-scope)
- [User Flows](#user-flows)
- [System Logic](#system-logic)
- [Non-Functional Requirements](#non-functional-requirements)
- [Out of Scope for MVP](#out-of-scope-for-mvp)
- [Future Enhancements](#future-enhancements)
- [Success Metrics](#success-metrics)
- [Proposed Timeline](#proposed-timeline)
- [Suggested Tech Stack](#suggested-tech-stack)
- [Suggested Repository Structure](#suggested-repository-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)
- [Testing and Quality](#testing-and-quality)
- [Project Status](#project-status)
- [Stakeholder Approvals](#stakeholder-approvals)

---

## Project Overview

RootBuilders is a structured talent development program across Product, Design, and Engineering tracks.

The **RootBuilders Talent Engagement Dashboard** is an internal operational dashboard built to monitor participant activity, team performance, learning engagement, and inactivity across cohorts of 200+ participants.

The dashboard acts as:

- An **engagement tracking system** for monitoring participant activity
- A **cohort management dashboard** for program-wide visibility
- A **team performance tool** for team leads and program operators
- An **inactivity detection system** for identifying participants who are at risk
- An **admin control center** for managing users, teams, roles, and engagement records

---

## Product Context

### Product Name

RootBuilders Talent Engagement Dashboard

### Product Owner

Fransunisoft

### Product Manager

Aisha Bolaji

### Version

1.0

### Status

Draft – Pending Review

### Date

April 2026

### Key Stakeholders

- Program Lead
- Operations Manager
- Product Manager
- Technical Lead
- Backend Developers
- Frontend Developers
- UI/UX Designers
- Team Leads

---

## The Problem

Current engagement tracking in RootBuilders is fragmented, manual, and heavily dependent on spreadsheets.

This creates operational challenges such as:

- No real-time visibility into participant engagement
- Delayed identification of inactive or struggling participants
- Heavy manual tracking burden on program organizers and team leads
- Poor team-level accountability
- Limited visibility into task submissions and attendance
- Reduced cohort completion rates due to late intervention

Without a centralized system, program managers and team leads may only discover inactivity after it has already affected learner progress and cohort outcomes.

---

## The Solution

The RootBuilders Talent Engagement Dashboard provides a centralized digital system for tracking participant activity, attendance, task submissions, team performance, and inactivity status.

The platform helps program organizers and team leads:

- View participant engagement in one place
- Monitor team health and performance
- Track attendance and weekly task submissions
- Automatically identify inactive participants
- Reduce dependency on spreadsheets
- Improve accountability across cohorts
- Support early intervention before participants drop off completely

---

## Product Objectives

The dashboard is designed to achieve the following objectives:

| Objective                      | Description                                                                            |
| ------------------------------ | -------------------------------------------------------------------------------------- |
| Centralize engagement tracking | Replace scattered spreadsheets and manual tracking with one operational dashboard.     |
| Improve activity visibility    | Give admins and team leads real-time access to cohort and participant activity.        |
| Detect inactivity early        | Automatically flag participants who have been inactive for 7 days or more.             |
| Reduce manual work             | Minimize repetitive tracking and reporting tasks for program operators.                |
| Improve accountability         | Make team leads and participants more aware of engagement status and expected actions. |
| Improve cohort completion      | Support early intervention to reduce participant drop-off.                             |
| Ensure data accuracy           | Keep activity records updated through login, attendance, and task submission triggers. |

---

## Target Users

| User Type          | Description                                                       | Access Level      |
| ------------------ | ----------------------------------------------------------------- | ----------------- |
| Program Organizers | Manage the full cohort operation and require complete visibility. | Full admin access |
| Operations Manager | Oversees daily program execution and participant engagement.      | Admin access      |
| Program Lead       | Tracks learning outcomes, activity, and progress across cohorts.  | Admin access      |
| Team Leads         | Manage assigned participant groups and monitor team activity.     | Team-level access |
| Participants       | Program learners across Product, Design, and Development tracks.  | Limited access    |

---

## User Personas

### 1. Program Organizer

**Role:** Oversees the entire RootBuilders cohort.

**Needs:**

- Full visibility into participant and team engagement
- A reliable reporting system
- Real-time activity insights
- Early warning signals for inactive participants

**Pain Points:**

- Manual spreadsheets
- No single source of truth
- Delayed updates
- Difficult reporting across a large cohort

---

### 2. Team Lead

**Role:** Manages a team of participants.

**Needs:**

- Ability to track team member activity
- Quick identification of inactive users
- Team-level engagement summary
- Easy access to task and attendance status

**Pain Points:**

- No structured tracking system
- Manual follow-up with team members
- Difficulty knowing who is active, at risk, or inactive

---

### 3. Participant

**Role:** Learner in the RootBuilders program.

**Needs:**

- Clear task visibility
- Personal progress visibility
- Simple task submission flow
- Awareness of activity status

**Pain Points:**

- Lack of feedback
- Unclear structure
- Limited visibility into progress or engagement status

---

## Core Features

### 1. Authentication System

The authentication system allows users to sign up and log in securely using a phone number and OTP verification.

Core capabilities:

- Phone number sign-up
- OTP verification
- Login validation
- Error handling
- Secure session handling
- Role-based access after authentication

---

### 2. Participant Profile

Each participant has a basic profile that allows the system to identify, group, and monitor them.

Profile data includes:

- Full name
- Role or learning track
- Assigned team
- Activity status
- Last active timestamp

Activity status options:

- Active
- At Risk
- Inactive

---

### 3. Activity Engine

The activity engine tracks key engagement actions and updates participant status based on recent activity.

Tracked activity includes:

- Login activity
- Attendance records
- Task submissions
- Weekly engagement updates

The activity engine helps determine whether a participant is active, at risk, or inactive.

---

### 4. Team System

The team system groups participants and gives team leads visibility into their assigned members.

Core capabilities:

- View assigned team members
- See active vs inactive counts
- Monitor team health
- Identify participants who require follow-up
- Aggregate engagement data by team

---

### 5. Admin System

The admin system gives authorized users control over participants, teams, roles, and engagement monitoring.

Core capabilities:

- View all participants
- Manage users
- Assign participants to teams
- Change user roles
- Monitor engagement status
- Review team performance

---

### 6. Task Submission System

The task submission system allows participants to submit weekly tasks and update their activity record.

Core capabilities:

- Submit task using a file upload or link
- Mark weekly task activity
- Trigger activity update after submission
- Help admins and team leads monitor task completion

---

## MVP Scope

The MVP focuses on the must-have functionality needed to make the dashboard operational for cohort monitoring.

### MVP Features

#### Authentication System

- Phone number sign-up
- OTP verification
- Sign-in system
- Session management

#### Participant System

- Basic participant profile
- Name, role, and team details
- Activity status tracking
- Last active tracking

#### Activity Tracking

- Login tracking
- Attendance tracking
- Task submission tracking
- Weekly activity updates

#### Inactivity Detection

- 7 days of no activity changes status to **At Risk**
- 14+ days of no activity changes status to **Inactive**
- Daily automated checks update participant status

#### Team Dashboard

- Team member list
- Active vs inactive count
- Basic team overview
- Team health summary

#### Admin Dashboard

- View participants
- Assign teams
- Change user roles
- Monitor engagement

#### Task Submission System

- Upload task file or link
- Weekly task marking
- Activity update trigger

---

## User Flows

### Participant Flow

```text
Sign Up → OTP Verification → Profile Setup → Dashboard → Task Submission → Activity Update
```

Participant flow explanation:

1. Participant signs up with a phone number.
2. Participant verifies identity using OTP.
3. Participant completes basic profile setup.
4. Participant accesses dashboard.
5. Participant submits weekly task.
6. System updates participant activity record.

---

### Admin Flow

```text
Login → Dashboard → Manage Participants → Monitor Engagement
```

Admin flow explanation:

1. Admin logs into the system.
2. Admin views overall dashboard.
3. Admin manages participants, teams, and roles.
4. Admin monitors cohort engagement and inactivity.

---

## System Logic

The inactivity logic is based on the participant’s last recorded activity.

| Condition                    | Status   |
| ---------------------------- | -------- |
| 0–6 days since last activity | Active   |
| 7 days with no activity      | At Risk  |
| 14+ days with no activity    | Inactive |

### Automated Status Check

The system should run a daily automated check to update every participant’s status based on their last active timestamp.

### Example Logic

```text
If participant activity is within the last 0–6 days:
  status = Active

If participant has no activity for 7–13 days:
  status = At Risk

If participant has no activity for 14 days or more:
  status = Inactive
```

---

## Non-Functional Requirements

The system must meet the following non-functional expectations:

- Support 300+ users per cohort
- Maintain 99% system uptime
- Use role-based access control
- Support mobile and desktop screens
- Provide scalable architecture for future cohorts
- Ensure reliable activity tracking
- Maintain secure authentication and session handling
- Provide a clear, responsive, and easy-to-use interface

---

## Out of Scope for MVP

The following features are not included in the first MVP release:

- AI engagement scoring
- Leaderboards and gamification
- Automated WhatsApp or email messaging
- Advanced analytics dashboards
- External integrations such as Slack or Discord
- Cohort comparison dashboards
- Portfolio generation
- Badges, rewards, or points system

---

## Future Enhancements

Future versions of the dashboard may include:

- AI-driven engagement scoring
- Automated reminders for inactive participants
- Cohort comparison dashboards
- Portfolio generation for participants
- Gamification system with badges and rewards
- WhatsApp, email, Slack, or Discord integrations
- Advanced reporting and analytics
- Exportable engagement reports
- Multi-cohort management
- Participant performance history

---

## Success Metrics

| Objective                      | Success Metric                       | Target                 |
| ------------------------------ | ------------------------------------ | ---------------------- |
| Centralize engagement tracking | Percentage of participants tracked   | 100% coverage          |
| Improve visibility of activity | Real-time cohort activity visibility | Full system visibility |
| Detect inactivity early        | Time to flag inactive users          | Within 7 days          |
| Reduce manual tracking         | Reduction in spreadsheet usage       | 80% reduction          |
| Improve accountability         | Cohort completion rate               | Increase vs baseline   |
| Ensure system reliability      | System uptime                        | 99%                    |
| Ensure data accuracy           | Consistency of activity logs         | Near real-time updates |

---

## Proposed Timeline

| Phase                     | Duration | Deliverables                                         |
| ------------------------- | -------- | ---------------------------------------------------- |
| Phase 1 – Planning        | Week 1   | Final PRD, wireframes, system architecture           |
| Phase 2 – Backend Setup   | Week 2–3 | Authentication system, database, APIs                |
| Phase 3 – Core Features   | Week 4–5 | Activity tracking, participant profiles, team system |
| Phase 4 – Admin Dashboard | Week 6   | Admin controls and monitoring dashboard              |
| Phase 5 – Testing         | Week 7   | QA testing and bug fixes                             |
| Phase 6 – Launch          | Week 8   | MVP deployment                                       |

---

## Suggested Tech Stack

> This section is suggested for implementation documentation. Update it based on the actual engineering decision.

### Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS

### Backend

- Node.js / NestJS / Express.js
- REST API or GraphQL API
- JWT or secure session-based authentication

### Database

- PostgreSQL or MongoDB

### Authentication

- Phone number authentication
- OTP verification
- Secure session handling

### Infrastructure

- Cloud hosting provider
- Automated daily background job for inactivity checks
- CI/CD pipeline for deployment

### Testing and Quality

- Unit testing
- Integration testing
- End-to-end testing
- Linting and formatting
- Role-based access testing

---

## Suggested Repository Structure

```text
rootbuilders-dashboard/
  src/
    app/
      auth/
      dashboard/
      admin/
      team/
      participant/
    components/
      auth/
      dashboard/
      forms/
      tables/
      ui/
    features/
      activity/
      participants/
      teams/
      tasks/
      users/
    lib/
      api/
      auth/
      utils/
    types/
    styles/
  tests/
    e2e/
    unit/
  public/
  .github/
    workflows/
  README.md
```

---

## Getting Started

> Update this section once the repository and final stack are confirmed.

### Prerequisites

- Node.js 20+
- pnpm or npm
- Git
- Access to the backend API or local backend server

### Installation

```bash
git clone <repository-url>
cd rootbuilders-dashboard
pnpm install
```

### Run Locally

```bash
pnpm dev
```

Open the local development server in your browser:

```text
http://localhost:3000
```

---

## Environment Variables

Create a `.env.local` file in the root directory.

```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:5000/api
NEXT_PUBLIC_APP_NAME=RootBuilders Dashboard
OTP_PROVIDER_API_KEY=your_otp_provider_key
AUTH_SECRET=your_auth_secret
DATABASE_URL=your_database_connection_string
```

> Do not commit real secret keys to the repository. Use `.env.example` for documentation and `.env.local` for local development.

---

## Scripts

Suggested project scripts:

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Run production build
pnpm lint         # Run linting
pnpm test         # Run tests
pnpm test:e2e     # Run end-to-end tests
```

---

## Testing and Quality

### Local Quality Checks

```bash
pnpm lint
pnpm test
pnpm test:e2e
```

### Quality Focus Areas

- OTP authentication flow
- Role-based access control
- Participant status updates
- Admin user management
- Team dashboard accuracy
- Task submission flow
- Inactivity detection logic
- Mobile responsiveness
- Data consistency between frontend and backend

---

## Project Status

**Status:** Draft / Pending Review  
**Product Phase:** MVP Planning  
**Product Category:** Talent Engagement / Cohort Monitoring / Learning Operations Dashboard  
**Market/Program Focus:** RootBuilders talent development program  
**Initial Cohort Capacity:** 200+ participants  
**Scalability Target:** 300+ users per cohort

---

## Stakeholder Approvals

This README is based on the RootBuilders PRD and should be reviewed alongside the official product requirements before development begins.

| Role            | Name |
| --------------- | ---- |
| Program Lead    |
| Product Manager |

| Operations Manager
| Tech Lead |

---

## Summary

RootBuilders Talent Engagement Dashboard is designed to make cohort monitoring easier, faster, and more accountable.

By centralizing participant engagement, attendance, task submissions, team performance, and inactivity detection, the platform gives program leaders and team leads the visibility they need to intervene early, reduce manual tracking, and improve participant completion outcomes.

## TO DO NEXT#

1. IMPLEMENT AVAILABLE DESIGN AND REPLACE PLACEHOLDERS AND MOCKUPS
2. Later to add authentication guards, role-based permissions, backend data fetching, and protected routes.
3. Dev Team Lead to ensure all devs install sonarqube ide Extension to catch hotspot issues early.
