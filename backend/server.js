/**
 * server.js
 * Application entry point
 */

import config from "./src/config/index.js";
import app from "./src/app.js";
import prisma from "./src/database/prisma.js";
import { logInfo, logError, logWarn } from "./src/utils/logger.js";

import './src/jobs/cron.job.js';   

/* ====================== Process Safety Nets ====================== */

// Catch synchronous errors (bugs)
process.on("uncaughtException", (err) => {
  logError("UNCAUGHT_EXCEPTION", err.message, { 
    stack: err.stack 
  });
  gracefulShutdown(1);
});

// Catch unhandled promise rejections
process.on("unhandledRejection", (reason, promise) => {
  logError("UNHANDLED_REJECTION", reason?.message || reason, { 
    stack: reason?.stack,
    promise 
  });
  gracefulShutdown(1);
});

// Graceful shutdown signals (from Docker, hosting platforms, Ctrl+C)
process.on("SIGTERM", () => {
  logWarn("SIGTERM_RECEIVED", "Received SIGTERM signal");
  gracefulShutdown(0);
});

process.on("SIGINT", () => {
  logWarn("SIGINT_RECEIVED", "Received SIGINT (Ctrl+C)");
  gracefulShutdown(0);
});

/* ====================== Bootstrap Application ====================== */
const bootstrap = async () => {
  try {
    logInfo("BOOTSTRAP_START", "Starting application bootstrap...");

    // Connect to Database using Prisma
    await prisma.$connect();
    logInfo("DATABASE_CONNECTED", "Successfully connected to database via Prisma");

    // Start HTTP Server
    const server = app.listen(config.port, "0.0.0.0", () => {
      logInfo("SERVER_STARTED", `Server is running on port ${config.port}`, {
        port: config.port,
        env: config.env,
      });
    });

    // Handle server errors
    server.on("error", (err) => {
      logError("SERVER_ERROR", err.message, { stack: err.stack });
      gracefulShutdown(1);
    });

  } catch (err) {
    logError("BOOTSTRAP_FAILED", err.message, { stack: err.stack });
    gracefulShutdown(1);
  }
};

// Start the application
bootstrap();