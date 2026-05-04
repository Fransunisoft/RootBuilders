// middlewares/permissionGuard.js
// Permission-based Authorization Middleware

/**
 * Middleware to check if the authenticated user has ALL the required permissions
 * Usage: permissionGuard("create:task", "update:participant")
 */
export function permissionGuard(...required) {
  return (req, res, next) => {
    // Get user's permissions from req.user (set by protect middleware)
    const permissions = req.user?.permissions;
    const list = Array.isArray(permissions) ? permissions : [];

    // Check if user has ALL required permissions
    const hasAllPermissions = required.every((permission) => 
      list.includes(permission)
    );

    if (!hasAllPermissions) {
      return res.status(403).json({
        status: "fail",
        message: "You do not have permission to perform this action.",
      });
    }

    // User has all required permissions → proceed
    next();
  };
}