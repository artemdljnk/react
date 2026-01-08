import {useEffect} from "react";
import {loadAuthProducts} from "../services/api.services.ts";

export const AuthResourcesPage = () => {
    useEffect(() => {
        loadAuthProducts().then(products => {
            console.log(products);
        })
    }, []);
    return (
        <>
        Auth Resources Page
        </>
    );
};
