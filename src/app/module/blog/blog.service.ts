import AppError from '../../errors/AppError';
import { User } from '../user/user.model';
import { PopulatedBlog, TBlog } from './blog.interface';
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
  const result = await Blog.find().populate('author');
  return result;
};

const updateBlogToDB = async (
  id: string,
  payload: Partial<TBlog>,
  userEmail: string,
) => {
  const isBlogExist = await Blog.findById(id).populate<PopulatedBlog>('author');

  if (!isBlogExist) {
    throw new AppError(404, 'Blog not found');
  }

  if (isBlogExist.author?.email !== userEmail) {
    throw new AppError(403, 'You do not have permission to update this blog');
  }
  const result = await Blog.findByIdAndUpdate(id, payload, {
    new: true,
  }).select('title content -_id');
  return result;
};

const deleteBlogFromDB = async (id: string, userEmail: string) => {
  const isBlogExist = await Blog.findById(id).populate<PopulatedBlog>('author');

  if (!isBlogExist) {
    throw new AppError(404, 'Blog not found');
  }

  if (isBlogExist.author?.email !== userEmail) {
    throw new AppError(403, 'You do not have permission to delete this blog');
  }

  const result = await Blog.findByIdAndDelete(id);

  if (!result) {
    throw new AppError(400, 'Failed to delete blog');
  }

  return result;
};

export const BlogServices = {
  createBlogIntoDB,
  getAllBlogFromDB,
  updateBlogToDB,
  deleteBlogFromDB,
};
