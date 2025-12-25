import type {FC} from "react";
import type {ICommentsDJ} from "../../../../models/comments/ICommentsDJ.ts";

type CommentPropTypeDJ = {
    comment: ICommentsDJ
}
export const CommentDJ:FC<CommentPropTypeDJ> = ({comment}) => {
    return (
        <div>{JSON.stringify({comment})}</div>
    );
};
