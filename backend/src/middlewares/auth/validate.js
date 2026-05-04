// middlewares/validate.js
// Validation Middleware - Supports Zod, Joi, and other schema libraries

/**
 * Helper function to normalize validation result from different libraries
 */
function pickValidationResult(result) {
  if (!result) return { value: undefined, error: new Error("Validation failed") };
  if (result.error) return { value: result.value, error: result.error };
  return { value: result.value ?? result, error: null };
}

/**
 * Universal validation function that works with Zod, Joi, and similar libraries
 */
function validateWithSchema(schema, data) {
  if (schema?.safeParse) {
    // Zod schema
    const r = schema.safeParse(data);
    return r.success 
      ? { value: r.data, error: null } 
      : { value: null, error: r.error };
  }

  if (schema?.parse) {
    // Zod schema (non-safe parse)
    try {
      return { value: schema.parse(data), error: null };
    } catch (e) {
      return { value: null, error: e };
    }
  }

  if (schema?.validate) {
    // Joi schema
    return pickValidationResult(
      schema.validate(data, { abortEarly: false, stripUnknown: true })
    );
  }

  throw new Error("Unsupported validation schema. Provide a Zod or Joi schema.");
}

/**
 * Main Validation Middleware
 * 
 * Usage:
 * validate({ body: createUserSchema })
 * validate({ body: createUserSchema, query: querySchema })
 */
export function validate({ body, query, params } = {}) {
  return (req, res, next) => {
    try {
      // Validate request body
      if (body) {
        req.body = validateWithSchema(body, req.body).value;
      }

      // Validate query parameters
      if (query) {
        req.query = validateWithSchema(query, req.query).value;
      }

      // Validate route parameters
      if (params) {
        req.params = validateWithSchema(params, req.params).value;
      }

      next(); // Proceed to controller if validation passes
    } catch (err) {
      // Send consistent validation error response
      res.status(400).json({
        status: "fail",
        message: "Validation error",
        details: err?.errors || err?.details || err?.message,
      });
    }
  };
}