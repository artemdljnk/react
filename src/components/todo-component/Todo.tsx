import type {ITodo} from "../../models/ITodo.ts";
import type {FC} from "react";

type PropType = {
    todo: ITodo
    onDelete: (id: number) => void
}

export const Todo:FC<PropType> = ({todo, onDelete}) => {
    return (
        <div>
            <h1>{todo.title}</h1>
            {todo.isDone ? <h2>Done</h2> : <h2>In Progress</h2>}
            <button onClick={() => onDelete(todo.id)}>Delete</button>
        </div>
    );
};
