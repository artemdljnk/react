import type {IUsersDJ} from "./IUsersDJ.ts";

export interface IResponseUsers {
    users: IUsersDJ[];
    total: number;
    skip: number;
    limit: number
}
