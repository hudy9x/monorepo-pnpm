import { Router } from 'express';
import { AuthController } from '../controllers/auth';

const router = Router();
const authController = new AuthController();

router.post('/login', authController.login);
router.post('/logout', authController.logout);

export const authRoutes = router; 