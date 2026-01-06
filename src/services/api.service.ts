import axios from "axios";
import type {ICars} from "../models/ICars.ts";

    const axiosInstance = axios.create({
            baseURL: 'http://owu.linkpc.net/carsAPI/v1',
            headers: {'Content-Type': 'application/json'}
        })
export const loadCars = async ():Promise<ICars[]> => {
        const axiosResponse = await axiosInstance.get<ICars[]>('/cars')
    console.log(axiosResponse)
        const cars = axiosResponse.data;
        console.log(cars);
        return cars;
}

export const addCar = async (car: ICars) => {
        await axiosInstance.post('/cars', car)
}
