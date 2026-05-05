export class AppError extends Error {
  constructor(
    public statusCode: number,
    override message: string,
    public code: string = "INTERNAL_ERROR"
  ) {
    super(message);
    Object.setPrototypeOf(this, AppError.prototype);
  }
}

export class ValidationError extends AppError {
  constructor(message: string, public details?: Record<string, string>) {
    super(400, message, "VALIDATION_ERROR");
    Object.setPrototypeOf(this, ValidationError.prototype);
  }
}

export class NotFoundError extends AppError {
  constructor(message: string = "Resource not found") {
    super(404, message, "NOT_FOUND");
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }
}

export class DatabaseError extends AppError {
  constructor(message: string = "Database operation failed") {
    super(500, message, "DATABASE_ERROR");
    Object.setPrototypeOf(this, DatabaseError.prototype);
  }
}

export const handleError = (error: unknown) => {
  if (error instanceof AppError) {
    return {
      statusCode: error.statusCode,
      message: error.message,
      code: error.code,
      ...(error instanceof ValidationError && { details: error.details }),
    };
  }

  if (error instanceof Error) {
    return {
      statusCode: 500,
      message: error.message,
      code: "INTERNAL_ERROR",
    };
  }

  return {
    statusCode: 500,
    message: "An unexpected error occurred",
    code: "INTERNAL_ERROR",
  };
};
