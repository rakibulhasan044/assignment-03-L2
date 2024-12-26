import AppError from '../../errors/AppError';
import { User } from '../user/user.model';
import { TBlog } from './blog.interface';
import { Blog } from './blog.model';

const createBlogIntoDB = async (payload: TBlog) => {
  const isUserExists = await User.findById(payload.author);

  if (!isUserExists) {
    throw new AppError(404, 'Author not found');
  }
  const result = await Blog.create(payload);
  return result;
};

const getAllBlogFromDB = async () => {
  const result = await Blog.find();
  return result;
};
export const BlogServices = {
  createBlogIntoDB,
  getAllBlogFromDB,
};
