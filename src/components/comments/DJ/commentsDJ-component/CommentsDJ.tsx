import {useEffect, useState} from "react";
import {loadUsersDJ} from "../../../../services/api.services.ts";
import {CommentDJ} from "../commentDJ-component/CommentDJ.tsx";
import type {ICommentsDJ} from "../../../../models/comments/ICommentsDJ.ts";

export const CommentsDJ = () => {
    const [commentsDJ, setCommentsDJ] = useState<ICommentsDJ[]>([])
    useEffect(() => {
        loadUsersDJ().then(value => setCommentsDJ(value))
    }, []);
    return (
        <div>
            {
                commentsDJ.map(comment => <CommentDJ comment={comment} key={comment.id} />)
            }
        </div>
    );
};
