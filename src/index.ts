import { Elysia } from "elysia";
import { logger } from "@chneau/elysia-logger";
import swagger from "@elysiajs/swagger";
import { autoload } from "elysia-autoload";

const port = process.env.PORT || 3001;

const app = new Elysia()
  .use(logger())
  .use(swagger())
  .use(await autoload())
  .listen(port);

console.log(
  `>>> Server running at http://${app.server?.hostname}:${app.server?.port} <<<`
);

export type ElysiaApp = typeof app;
