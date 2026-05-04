// auth.routes.js
// Authentication Routes - Handles login, register, and other auth-related endpoints

import express from "express";
import jwt from "jsonwebtoken";
import config from "../../../config/index.js";

const router = express.Router();

/**
 * Temporary Login Endpoint (for development)
 * 
 * This is a simplified login for testing purposes.
 * In production, this should be replaced with proper OTP-based login.
 */
router.post("/login", (req, res) => {
  if (!config.jwtSecret) {
    return res.status(500).json({
      status: "error",
      message: "JWT_SECRET is not configured on the server.",
    });
  }

  const { userId, role, permissions } = req.body || {};

  if (!userId) {
    return res.status(400).json({
      status: "fail",
      message: "userId is required to login (temporary dev login).",
    });
  }

  // Create JWT payload
  const payload = {
    sub: String(userId),                    // subject (user identifier)
    role: role || "user",
    permissions: Array.isArray(permissions) ? permissions : [],
  };

  // Generate JWT token
  const token = jwt.sign(payload, config.jwtSecret, {
    expiresIn: config.jwtExpiresIn || "7d",
  });

  res.json({
    status: "success",
    token,
    message: "Login successful (temporary endpoint)",
  });
});

/**
 * Register Endpoint
 * Currently not implemented
 */
router.post("/register", (req, res) => {
  res.status(501).json({
    status: "fail",
    message: "Register endpoint not implemented yet.",
  });
});

export default router;