import './App.css'
import {useState} from "react";
import {todos as dbTodo} from "./data/todos.ts";
import type {ITodo} from "./models/ITodo.ts";
import {Todos} from "./components/todos-component/Todos.tsx";

function App() {
  const [todos, setTodos] = useState<ITodo[]>(dbTodo)
  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }
  return (
    <>
      <Todos todos={todos} onDelete={deleteTodo}/>
    </>
  )
}

export default App
