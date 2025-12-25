import type {IPostsDJ} from "./IPostsDJ.ts";

export interface IResponsePosts {
    posts: IPostsDJ[]
    total: number;
    skip: number;
    limit: number;
}
