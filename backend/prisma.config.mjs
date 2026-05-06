// prisma.config.js
// Prisma Configuration File
// This file configures how Prisma behaves (migrations, schema location, etc.)

import "dotenv/config";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  // Path to your Prisma schema file
  schema: "prisma/schema.prisma",

  // Migration settings
  migrations: {
    // Where migration files will be stored
    path: "prisma/migrations",

    // Optional: Path to seed script (currently disabled)
    // seed: "node prisma/seed.js",
  },

  // Datasource configuration
  datasource: {
    // DIRECT_URL is typically used for migrations (especially with connection pooling)
    url: env("DIRECT_URL"),
  },
});