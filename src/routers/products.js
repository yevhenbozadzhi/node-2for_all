import { Router } from 'express';
import {
  getProductsControllers,
  getProductByIdController,
  createProductController,
} from '../controllers/products.js';

const router = Router();

router.get('/products', getProductsControllers);
router.get('/products/:productId', getProductByIdController);
router.post('/products', createProductController);

export default router;
