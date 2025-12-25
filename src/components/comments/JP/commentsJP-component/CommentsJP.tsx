import {useEffect, useState} from "react";
import {loadUsersJP} from "../../../../services/api.services.ts";
import {CommentJP} from "../commentJP-components/CommentJP.tsx";
import type {ICommentsJP} from "../../../../models/comments/ICommentsJP.ts";

export const CommentsJP = () => {
    const [commentsJP, setCommentsJP] = useState<ICommentsJP[]>([])
    useEffect(() => {
        loadUsersJP().then(value => setCommentsJP(value))
    }, []);
    return (
        <div>
            {
                commentsJP.map((comment) => <CommentJP comment={comment} key={comment.id} />)
            }
        </div>
    );
};
