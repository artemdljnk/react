import {useEffect, useState} from "react";
import type ITodos from "../../models/ITodos.ts";
import {loadTodos} from "../../services/api.services.ts";
import {Todo} from "../todo-component/Todo.tsx";

export const Todos = () => {
    const [todos, setTodos] = useState<ITodos[]>([])
    useEffect(() => {
        loadTodos().then(value => setTodos(value));
    })
    return (
        <>
            {
                todos.map(value => <Todo todo={value} key={value.id}/>)
            }
        </>
    );
};
