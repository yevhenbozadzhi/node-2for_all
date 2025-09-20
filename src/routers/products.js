import { Router } from 'express';
import {
  getProductsControllers,
  getProductByIdController,
  createProductController,
  deleteProductController,
  patchProductController,
} from '../controllers/products.js';

const router = Router();

router.get('/', getProductsControllers);
router.get('/:productId', getProductByIdController);
router.post('/', createProductController);
router.patch('/:productId', patchProductController);
router.delete('/:productId', deleteProductController);

export default router;
