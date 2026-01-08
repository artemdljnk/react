import {useContext} from "react";
import {MyContext} from "../context/MyContextProvider.tsx";

export const BA = () => {
    const {changeTheme} = useContext(MyContext)
    const handlerDark = () => {
        changeTheme('dark')
    }
    const handlerLight = () => {
        changeTheme('light')
    }
    return (
        <div>
            <button onClick={handlerDark}>Change Theme To Dark</button>
            <button onClick={handlerLight}>Change Theme To Light</button>
        </div>
    );
};
