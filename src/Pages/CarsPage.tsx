import {useEffect} from "react";
import {loadCars} from "../services/api.service.ts";

export const CarsPage = () => {

    useEffect(() => {
        loadCars().then(() => {
            console.log("CarsPage");
        })
    }, []);
    return (
        <>Cars Page</>
    );
};
