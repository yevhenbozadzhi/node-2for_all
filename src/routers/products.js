import { Router } from 'express';
import {
  getProductsControllers,
  getProductByIdController,
} from '../controllers/products.js';

const router = Router();

router.get('/products', getProductsControllers);
router.get('/products/:productId', getProductByIdController);

export default router;
