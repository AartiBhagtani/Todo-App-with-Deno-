## KickStart Learning Deno 

Deno is a simple, modern and secure runtime for JavaScript and TypeScript that uses V8 and is built in Rust.

### About Project

We have explored the TypeScript runtime of Deno in this Repository to create an basic Todo App where in a new post/task can be added, deleted, updated. 

U can clone the project and follow the instructions below.

#### Basic App: 
  Here we have used in memory - list which is used to store the posts inpersistently. Oak package is used for Deno's http server.
  `cd Basic_App`
  Start the server using `deno run --allow-net app.ts`
  Use postman to run following APIs (http://localhost:8000)
  * get /todos - to get all posts.
  * post /todos - body {text: 'new todo'} | to add a new todo
  * put /todos/:todoId - JSON body {text: 'update todo'} | to update a existing todo
  * delete /todos/:todoId -to update a existing todo
  
#### Complete App: 
  Here we have used in MongoDB - to store the posts persistently. `Oak` package is used for Deno's http server & `mongo` package for mongodb support.
  `cd Complete_App/Deno` 
  Start the server using `deno run --allow-net --allow-read --allow-write --unstable app.ts`
  Use postman to run following APIs (http://localhost:8000)
  * get /todos - to get all posts.
  * post /todos - body {text: 'new todo'} | to add a new todo
  * put /todos/:todoId - JSON body {text: 'update todo'} | to update a existing todo
  * delete /todos/:todoId -to update a existing todo

##### Note:
An clonned react app is used for frontend of complete App for Which cd `cd Complete_App/frontend-app` start node server using `npm start`
