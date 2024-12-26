import { Types } from 'mongoose';

export type TLoginUser = {
  id: Types.ObjectId;
  password: string;
};
