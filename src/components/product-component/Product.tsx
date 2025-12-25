import type {FC} from "react";
import type IProducts from "../../models/IProducts.ts";

type PropType = {
    product: IProducts
}

export const Product:FC<PropType> = ({product}) => {
    return (
        <>
            <div>{JSON.stringify(product)}</div>
            <hr/>
        </>
    );
};
