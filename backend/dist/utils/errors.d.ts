export declare class AppError extends Error {
    statusCode: number;
    message: string;
    code: string;
    constructor(statusCode: number, message: string, code?: string);
}
export declare class ValidationError extends AppError {
    details?: Record<string, string> | undefined;
    constructor(message: string, details?: Record<string, string> | undefined);
}
export declare class NotFoundError extends AppError {
    constructor(message?: string);
}
export declare class DatabaseError extends AppError {
    constructor(message?: string);
}
export declare const handleError: (error: unknown) => {
    details?: Record<string, string> | undefined;
    statusCode: number;
    message: string;
    code: string;
};
//# sourceMappingURL=errors.d.ts.map