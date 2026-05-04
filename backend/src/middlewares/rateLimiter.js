// middlewares/rateLimiter.js
// Rate Limiter Middleware - Prevents abuse and DDoS attacks

import config from "../config/index.js";

// In-memory store for rate limiting (Simple implementation)
// Note: For production with multiple servers, use Redis instead
const store = new Map();

/**
 * Generates a unique key for rate limiting (currently based on IP address)
 */
function getKey(req) {
  return req.ip || req.headers["x-forwarded-for"] || "unknown";
}

/**
 * Rate Limiter Middleware
 * Limits the number of requests from the same IP within a time window
 */
export function rateLimiter(req, res, next) {
  const windowMs = config.rateLimitWindowMs;
  const max = config.rateLimitMax;
  const now = Date.now();

  const key = getKey(req);
  const existing = store.get(key);

  // First request or window has expired → reset counter
  if (!existing || existing.resetAt <= now) {
    store.set(key, { count: 1, resetAt: now + windowMs });

    // Add rate limit headers for client awareness
    res.setHeader("x-ratelimit-limit", String(max));
    res.setHeader("x-ratelimit-remaining", String(max - 1));
    res.setHeader("x-ratelimit-reset", String(Math.ceil((now + windowMs) / 1000)));

    return next();
  }

  // Increment request count
  existing.count += 1;
  store.set(key, existing);

  const remaining = Math.max(0, max - existing.count);

  // Update rate limit headers
  res.setHeader("x-ratelimit-limit", String(max));
  res.setHeader("x-ratelimit-remaining", String(remaining));
  res.setHeader("x-ratelimit-reset", String(Math.ceil(existing.resetAt / 1000)));

  // Block request if limit exceeded
  if (existing.count > max) {
    return res.status(429).json({
      status: "fail",
      message: "Too many requests, please try again later.",
    });
  }

  // Allow request
  next();
}