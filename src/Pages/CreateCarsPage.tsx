import {useForm} from "react-hook-form";
import type {ICars} from "../models/ICars.ts";
// import {addCar} from "../services/api.service.ts";
import {carValidator} from "../validators/carValidator.ts";
import {joiResolver} from "@hookform/resolvers/joi";

export const CreateCarsPage = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<ICars>({mode: 'all', resolver:joiResolver(carValidator)})

    const createHandler = (data:ICars) => {
        // addCar(data)
        console.log(data);
    }

    return (
        <>
            <form onSubmit={handleSubmit(createHandler)}>
                <div>
                <input type="text {...register('brand'}"/>
                    <div>{errors.brand?.message}</div>
                </div>
                <div>
                    <input type="number {...registerч('price'}"/>
                    <div>{errors.price?.message}</div>
                </div>
                <div>
                    <input type="number {...register('year'}"/>
                    <div>{errors.year?.message}</div>
                </div>
                <button>Save</button>
            </form>
        </>
    );
};
