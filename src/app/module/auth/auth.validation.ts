import { z } from 'zod';

const createLoginValidationSchema = z.object({
  body: z.object({
    email: z.string({ required_error: 'Email address is required' }),
    password: z.string({ required_error: 'Password is required' }),
  }),
});

export const AuthValidation = {
  createLoginValidationSchema,
};
