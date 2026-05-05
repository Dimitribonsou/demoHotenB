import { PrismaClient } from "@prisma/client";
import { logger } from "../utils/logger.js";
export const prisma = global.prisma ||
    new PrismaClient({
        log: [
            {
                emit: "event",
                level: "query",
            },
            {
                emit: "event",
                level: "error",
            },
        ],
    });
if (process.env.NODE_ENV === "development") {
    prisma.$on("query", (e) => {
        logger.debug({ query: e.query, params: e.params }, "Database query");
    });
    prisma.$on("error", (e) => {
        logger.error({ message: e.message }, "Database error");
    });
}
if (process.env.NODE_ENV !== "production") {
    global.prisma = prisma;
}
process.on("SIGINT", async () => {
    await prisma.$disconnect();
    process.exit(0);
});
process.on("SIGTERM", async () => {
    await prisma.$disconnect();
    process.exit(0);
});
//# sourceMappingURL=prisma.js.map