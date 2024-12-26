import express from 'express'
import validateRequest from '../../middlewares/validateRequest';
import { UserValidation } from './user.validation';
import { UserControllers } from './user.controllers';

const router = express.Router();

router.post(
    '/register',
    validateRequest(UserValidation.createUserValidationSchema),
    UserControllers.userRegistration
)

export const UserRoutes = router