// middlewares/auth/protect.js
// Main Authentication Middleware - Verifies JWT token on protected routes

import jwt from "jsonwebtoken";
import config from "../../config/index.js";

/**
 * Extracts Bearer token from Authorization header
 */
function getToken(req) {
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith("Bearer ")) {
    return authHeader.slice("Bearer ".length).trim();
  }
  return null;
}

/**
 * Checks if the current route should skip authentication
 * (Public routes like login, register, health check, etc.)
 */
function shouldSkipAuth(req) {
  const url = req.originalUrl || req.url || "";
  
  if (url === "/" || url.startsWith("/health")) return true;
  if (url.startsWith("/api/v1/auth")) return true;   // All auth routes are public
  
  return false;
}

/**
 * Protect Middleware
 * Verifies JWT token and attaches user data to req.user
 * Should be used on all protected routes
 */
export function protect(req, res, next) {
  // Skip authentication for public routes
  if (shouldSkipAuth(req)) {
    return next();
  }

  // Check if JWT secret is configured
  if (!config.jwtSecret) {
    return res.status(500).json({
      status: "error",
      message: "JWT_SECRET is not configured on the server.",
    });
  }

  const token = getToken(req);

  if (!token) {
    return res.status(401).json({
      status: "fail",
      message: "You are not logged in. Please provide a valid token.",
    });
  }

  try {
    // Verify token and decode payload
    const decoded = jwt.verify(token, config.jwtSecret);
    
    // Attach user data to request object
    req.user = decoded;
    
    next();   // Proceed to next middleware/controller
  } catch (err) {
    return res.status(401).json({
      status: "fail",
      message: "Invalid or expired token.",
    });
  }
}