import type {ICommentsDJ} from "./ICommentsDJ.ts";

export interface IResponseComments {
    comments: ICommentsDJ[]
    total: number;
    skip: number;
    limit: number;
}
