import { Router } from 'express';
import { getProductsControllers } from '../controllers/products.js';

const router = Router();

router.get('/products', getProductsControllers);

export default router;
