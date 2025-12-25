import type {FC} from "react";
import type {IUsersJP} from "../../../../models/users/IUsersJP.ts";

type UsersPropTypeJP = {
    user: IUsersJP
}
export const UserJP:FC<UsersPropTypeJP> = ({user}) => {
    return (
        <div>{JSON.stringify(user)}</div>
    );
};
