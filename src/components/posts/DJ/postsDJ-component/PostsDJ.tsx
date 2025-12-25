import {useEffect, useState} from "react";
import {loadUsersDJ} from "../../../../services/api.services.ts";
import {PostDJ} from "../postDJ-component/PostDJ.tsx";
import type {IPostsDJ} from "../../../../models/posts/IPostsDJ.ts";

export const PostsDJ = () => {
    const [postsDJ, setPostsDJ] = useState<IPostsDJ[]>([])
    useEffect(() => {
        loadUsersDJ().then(value => setPostsDJ(value))
    }, []);
    return (
        <div>
            {
                postsDJ.map(post => <PostDJ post={post} key={post.id} />)
            }
        </div>
    );
};
