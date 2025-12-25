import type {FC} from "react";
import type {IPostsJP} from "../../../../models/posts/IPostsJP.ts";

type CommentsPropTypeJP = {
    comment: IPostsJP
}
export const CommentJP:FC<CommentsPropTypeJP> = ({comment}) => {
    return (
        <div>{JSON.stringify({comment})}</div>
    );
};
