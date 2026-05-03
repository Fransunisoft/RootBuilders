// config/index.js

import dotenv from "dotenv";

dotenv.config();

const config = {
  env: process.env.NODE_ENV || "development",
  
  port: parseInt(process.env.PORT) || 5000,
  
  // Database (Prisma will use DATABASE_URL from .env)
  databaseUrl: process.env.DATABASE_URL,
  
  // JWT
  jwtSecret: process.env.JWT_SECRET,
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || "7d",
  
  // Bcrypt
  saltRounds: parseInt(process.env.SALT_ROUNDS) || 10,
  
  // App settings
  appName: "RootBuilders Backend",
  apiVersion: "v1",
  
  // CORS 
  corsOrigin: process.env.CORS_ORIGIN 
    ? process.env.CORS_ORIGIN.split(",") 
    : ["http://localhost:3000", "http://localhost:3001"],
  
  // Rate limiting
  rateLimitMax: parseInt(process.env.RATE_LIMIT_MAX) || 100,
  rateLimitWindowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS) || 15 * 60 * 1000, // 15 minutes
};

export default config;