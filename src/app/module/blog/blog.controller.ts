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

export const BlogControllers = {
  createBlog,
};
