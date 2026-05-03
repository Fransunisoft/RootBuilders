// database/index.js
// Prisma Client initialization

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  // Log queries only in development
  log: process.env.NODE_ENV === "development" 
    ? ["query", "info", "warn", "error"] 
    : ["error"],
});

// Optional: Auto disconnect when process ends
process.on("beforeExit", async () => {
  await prisma.$disconnect();
});

export default prisma;