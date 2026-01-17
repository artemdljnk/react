import type {ITodo} from "../../models/ITodo.ts";
import type {FC} from "react";
import {Todo} from "../todo-component/Todo.tsx";

type PropType = {
    todos: ITodo[]
    onDelete: (id: number) => void
}

export const Todos:FC<PropType> = ({todos, onDelete}) => {
    return (
        <div>
            {
                todos.map(value => <Todo todo={value} onDelete={onDelete}/>)
            }
        </div>
    );
};
