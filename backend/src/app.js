/**
 * app.js
 * Application assembly layer
 *
 * Responsibilities:
 * - Create Express app instance
 * - Register global middleware
 * - Mount routes
 * - Attach global error handler
 *
 * Does NOT:
 * - Start server
 * - Connect to database
 * - Contain business logic
 */

import express from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import morgan from "morgan";

import { requestLogger } from "./middlewares/requestLogger.js";
import { rateLimiter } from "./middlewares/rateLimiter.js";
import { protect } from "./middlewares/auth/protect.js";
import { globalErrorHandler } from "./middlewares/errorHandler.js";

import apiV1Routes from "./api/v1/routes.js";

// Create Express app
const app = express();

// Security & transport middleware
app.use(helmet());           // Security headers
app.use(cors());             // CORS policy
app.use(compression());      // Response compression

// Request parsing
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true }));

// Observability
app.use(morgan("combined"));        // Standard HTTP logging
app.use(requestLogger);             // Structured request logging

// Protection
app.use(rateLimiter);               // Global rate limiting

// Public routes (before auth)
app.get("/", (req, res) => {
  res.json({
    message: "RootBuilders Backend API",
    status: "running",
    version: "1.0.0"
  });
});

app.get("/health", (req, res) => {
  res.json({ status: "healthy" });
});

// API Routes
app.use("/api/v1", protect, apiV1Routes);

// 404 Handler
app.all(/.*/, (req, res, next) => {
  const err = new Error(`Route not found: ${req.originalUrl}`);
  err.statusCode = 404;
  err.status = "fail";
  next(err);
});

// Global Error Handler (must be last)
app.use(globalErrorHandler);

export default app;