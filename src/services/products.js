import { ProductModel } from '../db/models/products.js';

export const getProducts = () => {
  return ProductModel.find();
};
