import Joi from 'joi';


export const userSchema = Joi.object({
    login: Joi.string().required(),
    password:Joi.string().min(4).alphanum().required(),
    age:Joi.number().min(4).max(130).required()
});

export const authSchema = Joi.object({
    login: Joi.string().required(),
    password:Joi.string().min(4).alphanum().required(),
});

