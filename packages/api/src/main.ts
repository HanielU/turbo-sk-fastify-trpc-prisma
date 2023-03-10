import cors from "@fastify/cors";
import fastify from "fastify";
import { appRouter } from "./router";
import { createContext } from "./context";
import { fastifyTRPCPlugin } from "@trpc/server/adapters/fastify";

const app = fastify({ maxParamLength: 5000 });

app.register(cors, { origin: "*" });

app.register(fastifyTRPCPlugin, {
  prefix: "/trpc",
  trpcOptions: { router: appRouter, createContext },
});

(async () => {
  try {
    await app.listen({ port: 5000 });
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
})();
