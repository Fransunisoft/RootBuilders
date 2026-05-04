// database/index.js
// Prisma Client configuration - Central database connection

import "dotenv/config";
import { PrismaClient } from "@prisma/client";

// This helps prevent multiple Prisma instances during development (hot reload)
const globalForPrisma = globalThis;

// Check if DATABASE_URL is set in .env
if (!process.env.DATABASE_URL) {
  throw new Error("❌ DATABASE_URL is not defined in .env file");
}

// Initialize Prisma Client
const prisma = globalForPrisma.prisma || new PrismaClient({
  log: process.env.NODE_ENV === "development" 
    ? ["query", "info", "warn", "error"]   // Show detailed logs in development
    : ["error"],                           // Only show errors in production
});

// Store prisma instance globally in development to avoid multiple connections
if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

export default prisma;