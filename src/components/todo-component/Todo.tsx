import type {FC} from "react";
import type ITodos from "../../models/ITodos.ts";

type PropType = {
    todo: ITodos
}

export const Todo:FC<PropType> = ({todo}) => {
    return (
        <>
            <div>{todo.completed}</div>
            <div>{todo.title}</div>
            <div>{todo.userId}</div>
            <hr/>
        </>
    );
};
