// middlewares/auth/restrictTo.js
// Role-based Authorization Middleware

/**
 * Restrict access to specific roles only
 * Usage: restrictTo("admin", "team-lead")
 * 
 * Must be used AFTER the protect middleware (which sets req.user)
 */
export function restrictTo(...roles) {
  return (req, res, next) => {
    const userRole = req.user?.role;

    // If no role is attached (should not happen if protect middleware ran)
    if (!userRole) {
      return res.status(403).json({
        status: "fail",
        message: "Access denied. No role assigned.",
      });
    }

    // Check if user's role is in the allowed list
    if (!roles.includes(userRole)) {
      return res.status(403).json({
        status: "fail",
        message: "You do not have permission to perform this action.",
      });
    }

    // User has required role → proceed
    next();
  };
}