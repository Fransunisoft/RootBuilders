// utils/logger.js
// Centralized Structured Logging System
// All logging in the application should go through this file

/**
 * Core logging function
 * Creates a consistent structured log format
 */
const log = ({ level = "info", event, message, data = {} }) => {
  const logEntry = {
    timestamp: new Date().toISOString(),
    level,
    event,
    message,
    data,
  };

  // Different console methods based on log level
  if (level === "error") {
    console.error(JSON.stringify(logEntry, null, 2));
  } else if (level === "warn") {
    console.warn(JSON.stringify(logEntry, null, 2));
  } else if (level === "debug") {
    console.debug(JSON.stringify(logEntry, null, 2));
  } else {
    console.log(JSON.stringify(logEntry, null, 2));
  }
};

/**
 * Log Info - General information messages
 */
export const logInfo = (event, message, data = {}) => {
  log({
    level: "info",
    event,
    message,
    data,
  });
};

/**
 * Log Warning - Something unexpected but not critical
 */
export const logWarn = (event, message, data = {}) => {
  log({
    level: "warn",
    event,
    message,
    data,
  });
};

/**
 * Log Error - Errors and exceptions
 */
export const logError = (event, message, data = {}) => {
  log({
    level: "error",
    event,
    message,
    data,
  });
};

/**
 * Log Debug - Detailed debugging information (only in development)
 */
export const logDebug = (event, message, data = {}) => {
  if (process.env.NODE_ENV === "development") {
    log({
      level: "debug",
      event,
      message,
      data,
    });
  }
};

// Export all loggers as a single object (optional, for convenience)
export const logger = {
  info: logInfo,
  warn: logWarn,
  error: logError,
  debug: logDebug,
};

export default logger;