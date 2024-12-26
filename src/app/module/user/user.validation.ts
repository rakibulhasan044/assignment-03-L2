import { z } from 'zod';

const createUserValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(6),
    role: z.string(),
  }),
});

export const UserValidation = {
  createUserValidationSchema,
};
