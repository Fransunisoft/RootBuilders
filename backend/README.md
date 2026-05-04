
# RootBuilders – Talent Engagement Dashboard

A centralized talent engagement and cohort monitoring system for RootBuilders.

## Project Structure

RootBuilders/
├── frontend/          # Next.js Frontend
├── backend/           # Node.js + Express + Prisma Backend
├── .gitignore
└── README.md

Backend Tech StackRuntime: Node.js
Framework: Express.js
Database: Prisma ORM + PostgreSQL/MySQL
Authentication: JWT + OTP (Phone)
Language: JavaScript

Backend Setup1. Navigate to backendbash

cd backend

2. Install dependenciesbash

npm install

3. Environment VariablesCopy the example file and fill in your values:bash

cp .env.example .env

Then edit .env with your DATABASE_URL and JWT_SECRET.4. Run Database Migrationsbash

npm run prisma:migrate:dev

5. Start Development Serverbash

npm run dev

Server will run on http://localhost:5000Available Scriptsbash

npm run dev                    # Start development server
npm run prisma:generate        # Generate Prisma Client
npm run prisma:migrate:dev     # Create and apply migration
npm run prisma:migrate:deploy  # Deploy migrations to production
npm run prisma:studio          # Open Prisma Studio

API Endpoints (Current)GET / → Health check
GET /health → Health check
POST /api/v1/auth/login → Temporary login (for development)

Project StatusBackend structure initialized
Prisma setup with adapter
Basic Express server with middleware
Authentication foundation ready

Next Steps:Complete Authentication (OTP-based)
Implement Participant, Team, and Activity modules
Build proper onboarding flows per role

