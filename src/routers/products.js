import { Router } from 'express';
import {
  getProductsControllers,
  getProductByIdController,
  createProductController,
  deleteProductController,
} from '../controllers/products.js';

const router = Router();

router.get('/products', getProductsControllers);
router.get('/products/:productId', getProductByIdController);
router.post('/products', createProductController);
router.delete('/products/:productId', deleteProductController);

export default router;
