import config from '../../config';
import AppError from '../../errors/AppError';
import { User } from '../user/user.model';
import { TLoginUser } from './auth.interface';
import { createToken } from './auth.utils';

const loginUser = async (payload: TLoginUser) => {
  const user = await User.findById(payload?.id).select('+password');
  if (!user) {
    throw new AppError(404, 'User not found !!');
  }

  const userStatus = user?.isBlocked;

  if (userStatus) {
    throw new AppError(403, 'This User is blocked by admin');
  }

  if (!(await User.isPasswordMatched(payload?.password, user?.password))) {
    throw new AppError(400, 'Password not matched. Try again !!');
  }

  const jwtPayload = {
    userId: user.id,
    role: user.role as string,
  };

  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string,
  );

  return {
    accessToken,
  };
};

export const AuthServices = {
  loginUser,
};
