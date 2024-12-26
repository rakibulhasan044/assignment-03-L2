import { Router } from 'express';
import { UserRoutes } from '../module/user/user.routes';
import { BlogRoutes } from '../module/blog/blog.routes';
import { AuthRoutes } from '../module/auth/auth.routes';

const router = Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: UserRoutes,
  },
  {
    path: '/blogs',
    route: BlogRoutes,
  },
  {
    path: '/auth',
    route: AuthRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
