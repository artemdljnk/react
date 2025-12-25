import type {FC} from "react";
import type {IPostsJP} from "../../../../models/posts/IPostsJP.ts";

type PostsPropTypeJP = {
    post: IPostsJP
}
export const PostJP:FC<PostsPropTypeJP> = ({post}) => {
    return (
        <div>{JSON.stringify({post})}</div>
    );
};
