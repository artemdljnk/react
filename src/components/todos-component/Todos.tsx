import type {ITodo} from "../../models/ITodo.ts";
import type {FC} from "react";
import {Todo} from "../todo-component/Todo.tsx";

type Props = {
    todos: ITodo[]
    onDelete: (id: number) => void
}

export const Todos:FC<Props> = ({todos, onDelete}) => {
    return (
        <div>
            {
                todos.map(value => <Todo todo={value} key={value.id} onDelete={onDelete}/>)
            }
        </div>
    );
};
