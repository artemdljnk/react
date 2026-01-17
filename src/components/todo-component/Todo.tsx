import type {ITodo} from "../../models/ITodo.ts";
import type {FC} from "react";

type Props = {
    todo: ITodo
    onDelete: (id:number) => void
}

export const Todo:FC<Props> = ({todo, onDelete}) => {
    return (
        <div>
            <h3>{todo.title}</h3>
            {todo.isDone ? <p>Status: Done</p> : <p>Status: In Progress</p>}
            <button onClick={() => onDelete(todo.id)}>Delete</button>
        </div>
    );
};
