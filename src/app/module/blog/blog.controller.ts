import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { BlogServices } from './blog.service';

const createBlog = catchAsync(async (req, res) => {
  const result = await BlogServices.createBlogIntoDB(req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Blog is created successfully',
    data: result,
  });
});

const getAllBlog = catchAsync(async (req, res) => {
  const result = await BlogServices.getAllBlogFromDB();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'All blogs fetched successfully',
    data: result,
  });
});

const updateBlog = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await BlogServices.updateBlogToDB(
    id,
    req.body,
    req.user.email,
  );

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Blog updated successfully',
    data: result,
  });
});

const deleteBlog = catchAsync(async (req, res) => {
  const { id } = req.params;

  await BlogServices.deleteBlogFromDB(id, req.user.email);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Blog deleted successfully',
    data: '',
  });
});

export const BlogControllers = {
  createBlog,
  getAllBlog,
  updateBlog,
  deleteBlog,
};
