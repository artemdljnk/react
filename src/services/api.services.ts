import axios from "axios";
import type IUserWithTokens from "../models/IUserWithTokens.ts";
import type IProducts from "../models/IProducts.ts";
import type {IBaseProductsModel} from "../models/IBaseProductsModel.ts";
import {retriveLocalStorage} from "./helpers.ts";

const axiosInstance = axios.create({
            baseURL: 'https://dummyjson.com/auth',
            headers: {}
        })

type LoginData = {
    username: string,
    password: string,
    expiresInMins: number,
}

axiosInstance.interceptors.request.use((requestObject) => {
    if(requestObject.method?.toUpperCase() === "GET") {
        requestObject.headers.Authorization = `Bearer ` + retriveLocalStorage<IUserWithTokens>('user').accessToken
    }
    return requestObject
})

export const login = async ({username, password, expiresInMins}:LoginData):Promise<IUserWithTokens> => {
    const {data: userWithTokens} = await axiosInstance.post<IUserWithTokens>('/login', {username, password, expiresInMins});
    console.log(userWithTokens);
    localStorage.setItem('user', JSON.stringify(userWithTokens));
    return userWithTokens
}

export const loadAuthProducts = async ():Promise<IProducts[]> => {
    const {data} = await axiosInstance.get<IBaseProductsModel>('/products')
    return data.products
}
