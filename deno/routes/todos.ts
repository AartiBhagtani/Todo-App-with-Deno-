import { Router } from 'https://deno.land/x/oak/mod.ts';
import { ObjectId } from "https://deno.land/x/mongo/mod.ts";

import { getDb } from '../helpers/db_client.ts';

const router = new Router();

interface Todo{
  id?: {$oid: string};
  text: string;
}

let todos: Todo[] = [];

router.get('/todos', async (context) => {
  const todos = await getDb().collection('todos').find();
  const transformedTodo = todos.map(
    (todo: {_id: ObjectId, text: string}) => {
    return {id: todo._id.$oid, text: todo.text}
  })
  context.response.body = {todos: transformedTodo };
})

router.post('/todo', async (context) => {
  const result = context.request.body();
  const data = await result.value;
  const newtodo: Todo = {
    // id: new Date().toISOString(),
    text: data.text
  };

  const id = await getDb().collection('todos').insertOne(newTodo);
  newtodo.id = id.$oid;
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