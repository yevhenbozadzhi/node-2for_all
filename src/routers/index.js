import { Router } from 'express';
import UserRouter from './auth.js';
import ProductRouter from './products.js';

const router = Router();

router.use('/users', UserRouter);
router.use('/products', ProductRouter);

export default router;
