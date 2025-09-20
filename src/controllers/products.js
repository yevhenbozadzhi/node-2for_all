import createHttpError from 'http-errors';
import { getProducts, getProductById } from '../services/products.js';

export const getProductsControllers = async (req, res) => {
  const products = await getProducts();
  res.json({
    status: 200,
    message: 'Successfully found products!',
    data: products,
  });
};

export const getProductByIdController = async (req, res) => {
  const { productId } = req.params;
  const product = await getProductById(productId);
  if (!product) {
    throw createHttpError(404, 'Product not found');
  }
  res.status(200).json({
    status: 200,
    message: 'Successfully found product with id {productId}!',
    data: product,
  });
};
