import {useEffect, useState} from "react";
import {loadUsersDJ} from "../../../../services/api.services.ts";
import type {IUsersDJ} from "../../../../models/users/IUsersDJ.ts";
import {UserDJ} from "../userDJ-component/UserDJ.tsx";

export const UsersDJ = () => {
    const [usersDJ, setUsersDJ] = useState<IUsersDJ[]>([])
    useEffect(() => {
        loadUsersDJ().then(value => setUsersDJ(value))
    }, []);
    return (
        <div>
            {
                usersDJ.map(user => <UserDJ user={user} key={user.id}/>)
            }
        </div>
    );
};
