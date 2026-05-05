export const config = {
    server: {
        port: parseInt(process.env.PORT || "3000", 10),
        host: process.env.HOST || "0.0.0.0",
        nodeEnv: process.env.NODE_ENV || "development",
    },
    database: {
        url: process.env.DATABASE_URL || "file:./dev.db",
    },
    graphql: {
        graphiql: process.env.NODE_ENV !== "production",
    },
};
export const isDevelopment = config.server.nodeEnv === "development";
export const isProduction = config.server.nodeEnv === "production";
//# sourceMappingURL=index.js.map