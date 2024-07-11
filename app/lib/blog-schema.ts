import { object, string, TypeOf } from "zod";

export const deleteBlogSchema = object({
  id: string({ required_error: "Email is required" }),
});

export const postBlogSchema = object({
  title: string({ required_error: "Title is required" }).min(
    1,
    "Title is required"
  ),
  content: string({ required_error: "Content is required" }).min(
    1,
    "Content is required"
  ),
});

export type DeleteBlogSchema = TypeOf<typeof deleteBlogSchema>;
export type PostBlogSchema = TypeOf<typeof postBlogSchema>;
