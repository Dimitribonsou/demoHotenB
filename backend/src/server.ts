import Fastify from "fastify";
import mercurius from "mercurius";
import cors from "@fastify/cors";

import { config } from "./config/index.js";
import { logger } from "./utils/logger.js";
import { typeDefs } from "./modules/property/property.typeDefs.js";
import { resolvers } from "./modules/property/property.resolver.js";

const startServer = async () => {
  try {
    const app = Fastify({
      logger: false,
    });

    await app.register(cors, {
      origin: "http://localhost:5173",
      methods: ["GET", "POST", "OPTIONS"]
    });

    await app.register(mercurius, {
      schema: typeDefs,
      resolvers,
      graphiql: config.graphql.graphiql,
    });

    await app.listen({ port: config.server.port, host: config.server.host });

    logger.info(
      `🚀 Server running at http://${config.server.host}:${config.server.port}/graphiql`
    );
  } catch (error) {
    logger.error(error, "Failed to start server");
    process.exit(1);
  }
};

startServer();