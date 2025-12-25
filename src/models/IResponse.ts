import type IProducts from "./IProducts.ts";

export default interface IResponse {
    products: IProducts[],
    total: number,
    skip: number,
    limit: number,
}
