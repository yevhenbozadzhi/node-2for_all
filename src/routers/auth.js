import { Router } from 'express';
import {
  UserRegisterController,
  UserLoginController,
} from '../controllers/auth.js';

const router = Router();

router.post('/register', UserRegisterController);

router.post('/login', UserLoginController);

export default router;
