import {useEffect, useState} from "react";
import type {IUsersJP} from "../../../../models/users/IUsersJP.ts";
import {loadUsersJP} from "../../../../services/api.services.ts";
import {UserJP} from "../userJP-components/UserJP.tsx";

export const UsersJP = () => {
    const [usersJP, setUsersJP] = useState<IUsersJP[]>([])
    useEffect(() => {
        loadUsersJP().then(value => setUsersJP(value))
    }, []);
    return (
        <div>
            {
                usersJP.map(user => <UserJP user={user} key={user.id} />)
            }
        </div>
    );
};
