import { Types } from 'mongoose';

export type TBlog = {
  title: string;
  content: string;
  author: Types.ObjectId;
  isPublished?: boolean;
};

interface IUser {
  email: string;
}

export interface PopulatedBlog extends Omit<TBlog, 'author'> {
  author: IUser;
}
