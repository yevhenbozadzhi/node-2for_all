import Joi from 'joi';
import { validCategoryList } from '../constants/index.js';

export const createProductSchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().required(),
  category: Joi.string()
    .valid(...validCategoryList)
    .required(),
  description: Joi.string(),
});

export const updateProductSchema = Joi.object({
  name: Joi.string(),
  price: Joi.number(),
  category: Joi.string().valid(...validCategoryList),
  description: Joi.string(),
});
