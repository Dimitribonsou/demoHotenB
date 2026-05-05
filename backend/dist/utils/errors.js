export class AppError extends Error {
    constructor(statusCode, message, code = "INTERNAL_ERROR") {
        super(message);
        this.statusCode = statusCode;
        this.message = message;
        this.code = code;
        Object.setPrototypeOf(this, AppError.prototype);
    }
}
export class ValidationError extends AppError {
    constructor(message, details) {
        super(400, message, "VALIDATION_ERROR");
        this.details = details;
        Object.setPrototypeOf(this, ValidationError.prototype);
    }
}
export class NotFoundError extends AppError {
    constructor(message = "Resource not found") {
        super(404, message, "NOT_FOUND");
        Object.setPrototypeOf(this, NotFoundError.prototype);
    }
}
export class DatabaseError extends AppError {
    constructor(message = "Database operation failed") {
        super(500, message, "DATABASE_ERROR");
        Object.setPrototypeOf(this, DatabaseError.prototype);
    }
}
export const handleError = (error) => {
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
//# sourceMappingURL=errors.js.map