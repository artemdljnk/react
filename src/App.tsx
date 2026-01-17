import './App.css'
import {useState} from "react";
import type {ITodo} from "./models/ITodo.ts";
import {todos as dbTodos} from "./data/todos.ts";
import {Todos} from "./components/todos-component/Todos.tsx";

function App() {
  const [todos, setTodos] = useState<ITodo[]>(dbTodos)
  const deleteTodoHandler = (id: number) => {
    const filterTodos = todos.filter(todo => todo.id !== id);
    setTodos(filterTodos);
  }
  return (
    <>
      <Todos todos={todos} onDelete={deleteTodoHandler} />
    </>
  )
}

export default App
