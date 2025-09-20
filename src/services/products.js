import { ProductModel } from '../db/models/products.js';

export const getProducts = () => {
  return ProductModel.find();
};

export const getProductById = (productId) => {
  return ProductModel.findById(productId);
};
