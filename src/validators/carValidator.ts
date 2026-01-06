import * as Joi from "joi";

export const carValidator = Joi.object({
    brand: Joi.string().pattern(/^[A-Za-z0-9]+$/),
    price: Joi.number(),
    year: Joi.number(),
})
