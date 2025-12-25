import type {IUsersJP} from "../models/users/IUsersJP.ts";
import type {IUsersDJ} from "../models/users/IUsersDJ.ts";
import type {IResponseUsers} from "../models/users/IResponseUsers.ts";
import type {IPostsJP} from "../models/posts/IPostsJP.ts";
import type {IPostsDJ} from "../models/posts/IPostsDJ.ts";
import type {IResponsePosts} from "../models/posts/IResponsePosts.ts";
import type {ICommentsJP} from "../models/comments/ICommentsJP.ts";
import type {IResponseComments} from "../models/comments/IResponseComments.ts";
import type {ICommentsDJ} from "../models/comments/ICommentsDJ.ts";

// ------------------users---------

const endpointUsersJP = import.meta.env.VITE_API_BASE_URL_JP + '/users';
export const loadUsersJP = async ():Promise<IUsersJP[]> => {
    return await fetch(endpointUsersJP)
        .then(value => value.json())
}

const endpointUsersDJ = import.meta.env.VITE_API_BASE_URL_DJ + '/users';
export const loadUsersDJ = async ():Promise<IUsersDJ[]> => {
    const response:IResponseUsers = await fetch(endpointUsersDJ)
        .then(value => value.json())
    return response.users
}

// --------------------posts-----------------

const endpointPostsJP = import.meta.env.VITE_API_BASE_URL_JP + '/posts';
export const loadPostsJP = async ():Promise<IPostsJP[]> => {
    return await fetch(endpointPostsJP)
        .then(value => value.json())
}

const endpointPostsDJ = import.meta.env.VITE_API_BASE_URL_DJ + '/posts';
export const loadPostsDJ = async ():Promise<IPostsDJ[]> => {
    const response:IResponsePosts = await fetch(endpointPostsDJ)
        .then(value => value.json())
    return response.posts
}

//-------------comments-------

const endpointCommentsJP = import.meta.env.VITE_API_BASE_URL_JP + '/comments';
export const loadCommentsJP = async ():Promise<ICommentsJP[]> => {
    return await fetch(endpointCommentsJP)
        .then(value => value.json())
}

const endpointCommentsDJ = import.meta.env.VITE_API_BASE_URL_DJ + '/comments';
export const loadCommentsDJ = async ():Promise<ICommentsDJ[]> => {
    const response: IResponseComments = await fetch(endpointCommentsDJ)
        .then(value => value.json())
    return response.comments
}
