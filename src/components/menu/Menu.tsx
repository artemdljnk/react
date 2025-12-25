import {Link} from "react-router-dom";

export const Menu = () => {
    return (
        <ul>
            <li><Link to={'users/jsonplaceholder'}>UsersJP</Link></li>
            <li><Link to={'users/dummyjson'}>UsersDJ</Link></li>
            <li><Link to={'posts/jsonplaceholder'}>PostsJP</Link></li>
            <li><Link to={'posts/dummyjson'}>PostsDJ</Link></li>
            <li><Link to={'comments/jsonplaceholder'}>CommentsJP</Link></li>
            <li><Link to={'comments/dummyjson'}>CommentsDJ</Link></li>
        </ul>
    );
};
