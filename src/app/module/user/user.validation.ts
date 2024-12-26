import { z } from 'zod';

const createUserValidationSchema = z.object({
  body: z.object({
    name: z.string({message: "name is required"}),
    email: z.string().email({message: "Invalid email address !!"}),
    password: z.string().min(6, {message: "Password must be minimum 6 characters !!"}),
  }),
});

export const UserValidation = {
  createUserValidationSchema,
};
