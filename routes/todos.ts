import { Router } from 'https://deno.land/x/oak/mod.ts';

const router = new Router();

interface Todo{
  id: string;
  text: string;
}

let todos: Todo[] = [];

router.get('/todos', (context) => {
  context.response.body = {todos: todos};
})

router.post('/todo', async (context) => {
  const result = context.request.body();
  const data = await result.value;
  const newtodo: Todo = {
    id: new Date().toISOString(),
    text: data.text
  };
  todos.push(newtodo);
  context.response.body = {message: 'post added succesfully', todos: todos}; 
})

router.put('/todo/:todoId', async (context) => {
  const result = context.request.body();
  const data = await result.value;

  const tid = context.params.todoId;
  const todoIndex = todos.findIndex((todo) => {
    return todo.id === tid;
  })
  todos[todoIndex] = {id: todos[todoIndex].id, text: data.text};
  context.response.body = { message: 'post updated succesfully', todos: todos};
})

router.delete('/todo/:todoId', (context) => {
  const tid = context.params.todoId;
  todos = todos.filter(todo => { todo.id !== tid });
  context.response.body = {message: 'post deleted succesfully', todos: todos}
})

export default router;