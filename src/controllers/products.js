import createHttpError from 'http-errors';
import {
  getProducts,
  getProductById,
  createProduct,
  deleteProduct,
  patchProduct,
} from '../services/products.js';
import { parseFilterParams } from '../utils/parseFilterParams.js';

export const getProductsControllers = async (req, res) => {
  const filter = parseFilterParams(req.query);

  const products = await getProducts(filter);
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

export const createProductController = async (req, res) => {
  const body = req.body;
  const product = await createProduct(body);
  res.status(201).json({
    status: 201,
    message: 'Successfully created a product!',
    data: product,
  });
};
export const deleteProductController = async (req, res) => {
  const { productId } = req.params;
  const result = await deleteProduct(productId);
  if (!result) {
    throw createHttpError(404, 'Product not found');
  }
  res.status(204).send();
};
export const patchProductController = async (req, res) => {
  const { productId } = req.params;
  const product = await patchProduct(productId, req.body);
  if (!product) {
    throw createHttpError(404, 'Product not found');
  }
  res.status(200).json({
    status: 200,
    message: 'Successfully patched a product!',
    data: product,
  });
};
