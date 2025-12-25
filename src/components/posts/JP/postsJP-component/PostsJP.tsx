import {useEffect, useState} from "react";
import {loadUsersJP} from "../../../../services/api.services.ts";
import {PostJP} from "../postJP-components/PostJP.tsx";
import type {IPostsJP} from "../../../../models/posts/IPostsJP.ts";

export const PostsJP = () => {
    const [postsJP, setPostsJP] = useState<IPostsJP[]>([])
    useEffect(() => {
        loadUsersJP().then(value => setPostsJP(value))
    }, []);
    return (
        <div>
            {
                postsJP.map(post => <PostJP post={post} key={post.id} />)
            }
        </div>
    );
};
