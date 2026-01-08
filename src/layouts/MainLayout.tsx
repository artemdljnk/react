import {Outlet} from "react-router/internal/react-server-client";
import {Menu} from "../components/menu/Menu.tsx";

export const MainLayout = () => {
    return (
        <>
            <Menu/>
            <hr/>
        <Outlet/>
        </>
    );
};
