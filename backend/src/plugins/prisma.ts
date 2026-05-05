import { PrismaClient } from "@prisma/client";
import { logger } from "../utils/logger.js";

declare global {
  var prisma: PrismaClient | undefined;
}

export const prisma =
  global.prisma ||
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

// Log queries in development
if (process.env.NODE_ENV === "development") {
  (prisma as any).$on("query", (e: any) => {
    logger.debug({ query: e.query, params: e.params }, "Database query");
  });

  (prisma as any).$on("error", (e: any) => {
    logger.error({ message: e.message }, "Database error");
  });
}

// Ensure we don't create multiple instances in development
if (process.env.NODE_ENV !== "production") {
  global.prisma = prisma;
}

// Graceful shutdown
process.on("SIGINT", async () => {
  await prisma.$disconnect();
  process.exit(0);
});

process.on("SIGTERM", async () => {
  await prisma.$disconnect();
  process.exit(0);
});