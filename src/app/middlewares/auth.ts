import config from '../config';
import AppError from '../errors/AppError';
import { TUserRole } from '../module/user/user.interface';
import { User } from '../module/user/user.model';
import catchAsync from '../utils/catchAsync';
import jwt, { JwtPayload } from 'jsonwebtoken';

const auth = (...requiredRoles: TUserRole[]) => {
  return catchAsync(async (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
      throw new AppError(401, 'Unauthorized request');
    }

    const decoded = jwt.verify(
      token,
      config.jwt_access_secret as string,
    ) as JwtPayload;

    const { role, userId } = decoded;
    const user = await User.findById(userId);
    if (!user) {
      throw new AppError(404, 'User not found');
    }

    const userStatus = user?.isBlocked;

    if (userStatus) {
      throw new AppError(403, 'This user is blocked');
    }

    if (requiredRoles && !requiredRoles.includes(role)) {
      throw new AppError(401, 'You are not authorized');
    }

    req.user = decoded as JwtPayload;
    next();
  });
};

export default auth;
