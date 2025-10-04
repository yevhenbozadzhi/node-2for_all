import { Router } from 'express';
import {
  getProductsControllers,
  getProductByIdController,
  createProductController,
  deleteProductController,
  patchProductController,
} from '../controllers/products.js';
import { validateBody } from '../middlewares/validateBody.js';
import {
  createProductSchema,
  updateProductSchema,
} from '../validation/productSchema.js';
import { validateId } from '../middlewares/validateId.js';

const router = Router();

router.get('/', getProductsControllers);
router.get('/:productId', validateId, getProductByIdController);
router.post('/', validateBody(createProductSchema), createProductController);
router.patch(
  '/:productId',
  validateId,
  validateBody(updateProductSchema),
  patchProductController,
);
router.delete('/:productId', validateId, deleteProductController);

export default router;
