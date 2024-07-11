"use client";
import { postBlogSchema, PostBlogSchema } from "@/app/lib/blog-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

const AddButton = () => {
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
  const router = useRouter();
  const methods = useForm<PostBlogSchema>({
    resolver: zodResolver(postBlogSchema),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = methods;

  const onSubmitHandler: SubmitHandler<PostBlogSchema> = async (values) => {
    try {
      toast.promise(
        fetch(process.env.API_URL + "/api/blog", {
          method: "POST",
          body: JSON.stringify(values),
          headers: {
            "Content-Type": "application/json",
          },
        }),
        {
          loading: "Loading",
          success: "Add post successfully",
          error: "Error",
        }
      );
      router.refresh();
      setIsModalOpen(false);
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <button className="btn" onClick={() => setIsModalOpen(true)}>
        Add Blog
      </button>
      <input
        type="checkbox"
        id="my_modal_7"
        className="modal-toggle"
        checked={isModalOpen}
      />
      <div className="modal" role="dialog" id="create-modal">
        <div className="modal-box">
          <h3 className="text-lg font-bold mb-8">Add</h3>
          <form onSubmit={handleSubmit(onSubmitHandler)}>
            <label className="form-control w-full mb-4">
              <div className="label">
                <span className="label-text">Title</span>
              </div>
              <input
                {...register("title")}
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
              {errors["title"] && (
                <div className="label">
                  <span className="label-text-alt text-error">
                    {errors["title"]?.message}
                  </span>
                </div>
              )}
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Description</span>
              </div>
              <textarea
                {...register("content")}
                className="textarea textarea-bordered h-24"
                placeholder="Type here..."
              />
              {errors["content"] && (
                <div className="label">
                  <span className="label-text-alt text-error">
                    {errors["content"]?.message}
                  </span>
                </div>
              )}
            </label>
            <div className="modal-action">
              <button type="submit" className="btn">
                Add
              </button>
              <button
                type="button"
                className="btn"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddButton;
