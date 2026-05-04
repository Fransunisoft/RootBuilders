// middlewares/requestLogger.js
// Request Logger Middleware - Logs every HTTP request with useful details

import crypto from "crypto";

/**
 * Middleware that logs incoming requests and their response details
 * including duration, status code, and request ID for tracing
 */
export function requestLogger(req, res, next) {
  const start = process.hrtime.bigint();

  // Generate or reuse request ID for tracing across logs
  const existingId =
    req.headers["x-request-id"] ||
    req.headers["x-correlation-id"] ||
    req.headers["x-trace-id"];

  req.requestId = typeof existingId === "string" 
    ? existingId 
    : crypto.randomUUID();

  // Add request ID to response headers for client tracing
  res.setHeader("x-request-id", req.requestId);

  // Log after response is finished
  res.on("finish", () => {
    const end = process.hrtime.bigint();
    const durationMs = Number(end - start) / 1_000_000;

    const entry = {
      requestId: req.requestId,
      method: req.method,
      path: req.originalUrl,
      statusCode: res.statusCode,
      durationMs: Math.round(durationMs * 100) / 100, // e.g. 12.45ms
      ip: req.ip,
      userAgent: req.get("user-agent"),
    };

    // Use different log levels based on status code
    const isError = res.statusCode >= 500;
    const isWarn = res.statusCode >= 400 && res.statusCode < 500;

    const logger = isError ? console.error : isWarn ? console.warn : console.info;
    logger(entry);
  });

  next();
}