// database/prisma.js
// Prisma Client Setup using PrismaPg Adapter

import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from '@prisma/adapter-pg';

const globalForPrisma = globalThis;

// Get database connection string from environment
const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error('DATABASE_URL is not defined in .env file');
}

// Create adapter (better performance for PostgreSQL databases like Supabase, Neon, etc.)
const adapter = new PrismaPg({
  connectionString,
  ssl: { rejectUnauthorized: false }, // Good for hosted databases (Supabase, Neon, Railway, etc.)
});

// Initialize Prisma Client
const prisma = globalForPrisma.prisma || new PrismaClient({
  adapter,
  log: process.env.NODE_ENV === 'development'
    ? ['query', 'error', 'warn']     // Show detailed logs in development
    : ['error'],                     // Only show errors in production
});

// Prevent multiple Prisma instances in development (important when using nodemon)
if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}

export default prisma;