import { z } from "zod";


const createBlogValidationSchema = z.object({
    body: z.object({
        title: z.string({message: "Title is required"}),
        content: z.string({message: "Content is required"}),
        author: z.string({message: "Author name is required"}),
    })
})

export const BlogValidation = {
    createBlogValidationSchema
}