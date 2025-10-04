import { Router } from 'express';
import { UserRegisterController } from '../controllers/auth.js';

const router = Router();

router.post('/register', UserRegisterController);

export default router;
