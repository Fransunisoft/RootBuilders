// middlewares/errorHandler.js
// Global Error Handler - Catches all errors in the application

/**
 * Normalizes different types of errors into a consistent format
 */
function normalizeError(err) {
  const statusCode = err.statusCode || err.status || 500;
  const status = statusCode >= 500 ? "error" : "fail";

  return {
    statusCode,
    status,
    message: err.message || "Something went wrong",
    details: err.details,
  };
}

/**
 * Global Error Handling Middleware
 * This should be the LAST middleware in your app.js
 */
export function globalErrorHandler(err, req, res, next) {
  const normalized = normalizeError(err);
  const requestId = req?.requestId;

  // Log error in development and production (except during tests)
  if (process.env.NODE_ENV !== "test") {
    console.error({
      requestId,
      message: normalized.message,
      statusCode: normalized.statusCode,
      stack: err?.stack,
    });
  }

  // Send consistent error response to client
  res.status(normalized.statusCode).json({
    status: normalized.status,
    message: normalized.message,
    requestId,
    ...(normalized.details ? { details: normalized.details } : {}),
  });
}