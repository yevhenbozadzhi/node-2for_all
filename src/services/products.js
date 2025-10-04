import { ProductModel } from '../db/models/products.js';

export const getProducts = (filter) => {
  const productQuery = ProductModel.find();

  if (filter.category) {
    productQuery.where('category').equals(filter.category);
  }

  if (filter.minPrice) {
    productQuery.where('price').gte(filter.minPrice);
  }

  if (filter.maxPrice) {
    productQuery.where('price').lte(filter.maxPrice);
  }

  return productQuery;
};

export const getProductById = (productId) => {
  return ProductModel.findById(productId);
};

export const createProduct = (payload) => {
  return ProductModel.create(payload);
};

export const deleteProduct = async (productId) => {
  const deleteProduct = await ProductModel.findByIdAndDelete(productId);

  return deleteProduct;
};

export const patchProduct = (productId, payload) => {
  return ProductModel.findByIdAndUpdate(productId, payload, {
    new: true,
  });
};
