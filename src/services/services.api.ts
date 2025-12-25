import type IProducts from "../models/IProducts.ts";
import type IResponse from "../models/IResponse.ts";

const endpoint = import.meta.env.VITE_API_BASE_URL + '/products'

export const loadProducts = async ():Promise<IProducts[]> => {
    const response:IResponse = await fetch(endpoint)
    .then(response => response.json())
    return response.products
}
