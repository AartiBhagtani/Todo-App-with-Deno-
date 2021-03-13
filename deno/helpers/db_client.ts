// import { MongoClient, Database } from 'https://deno.land/x/mongo/mod.ts';

let db: Database;

export function connect() {
  const client = new MongoClient();
  client.connectWithUri("MONGODB_CONNECTION_STRING=mongodb+srv://aarti:GOMongo890@cluster0.k8mns.mongodb.net/?retryWrites=true&w=majority");
  db = client.database('todo-app');  
}

export function getDb() {
  return db;
} 