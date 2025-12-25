import type {FC} from "react";
import type {IUsersDJ} from "../../../../models/users/IUsersDJ.ts";

type PostsPropTypeDJ = {
    post: IUsersDJ
}
export const PostDJ:FC<PostsPropTypeDJ> = ({post}) => {
    return (
        <div>{JSON.stringify({post})}</div>
    );
};
