import {useEffect, useState} from "react";
import type IProducts from "../../models/IProducts.ts";
import {loadProducts} from "../../services/services.api.ts";
import {Product} from "../product-component/Product.tsx";

export const Products = () => {
    const [products, setProducts] = useState<IProducts[]>([])
    useEffect(() => {
        loadProducts().then(value => setProducts(value));
    })
    return (
        <div>
            {
                products.map(value => <Product product={value} key={value.id}/>)
            }
        </div>
    );
};
