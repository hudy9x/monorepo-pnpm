import { Router } from 'express';
import { UserController } from '../controllers/users';

const router = Router();
const userController = new UserController();

router.get('/me', userController.getCurrentUser);
router.put('/profile', userController.updateProfile);

export const userRoutes = router; 
