import { z } from 'zod';

const createBlogValidationSchema = z.object({
  body: z.object({
    title: z.string({ message: 'Title is required' }),
    content: z.string({ message: 'Content is required' }),
    author: z.string({ message: 'Author ID is required' }),
  }),
});

const updateBlogValidationSchema = z.object({
  body: z.object({
    title: z.string({ message: 'Blog title is required' }).optional(),
    content: z.string({ message: 'Blog content is required' }).optional(),
  }),
});

export const BlogValidation = {
  createBlogValidationSchema,
  updateBlogValidationSchema,
};
