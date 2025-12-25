import type {FC} from "react";
import type {IUsersDJ} from "../../../../models/users/IUsersDJ.ts";

type UsersPropTypeDJ = {
    user: IUsersDJ
}
export const UserDJ:FC<UsersPropTypeDJ> = ({user}) => {
    return (
        <div>{JSON.stringify({user})}</div>
    );
};
