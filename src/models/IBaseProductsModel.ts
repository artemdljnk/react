import type IProducts from "./IProducts.ts";

export interface IBaseProductsModel {
    total: number,
    skip: number,
    limit: number,
    products: IProducts[],
}
