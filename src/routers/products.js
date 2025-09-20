import { Router } from 'express';
import {
  getProductsControllers,
  getProductByIdController,
  createProductController,
  patchProductController,
} from '../controllers/products.js';

const router = Router();

router.get('/', getProductsControllers);
router.get('/:productId', getProductByIdController);
router.post('/', createProductController);
router.patch('/:productId', patchProductController);
export default router;
