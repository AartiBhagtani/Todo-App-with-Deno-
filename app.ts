import { Application } from 'https://deno.land/x/oak/mod.ts';

import todoRoutes from "./routes/todos.ts";

const app = new Application();

// here this middleware will sends a response which will be recorded once it is done
// with all below middleware and as below once use async function we will need to add it 
// to our next function as well.. else it will not wait.
app.use(async (context, next) => {
  context.response.body = "hello word!!!!";
  await next();
})

app.use(todoRoutes.routes());

app.use(todoRoutes.allowedMethods());

await app.listen({ port: 3000 });