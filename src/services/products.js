import { ProductModel } from '../db/models/products.js';

export const getProducts = () => {
  return ProductModel.find();
};

export const getProductById = (productId) => {
  return ProductModel.findById(productId);
};

export const createProduct = (payload) => {
  return ProductModel.create(payload);
};


export const patchProduct = (productId, payload) => {
  return ProductModel.findByIdAndUpdate(productId, payload, {
    new: true,
  });
};