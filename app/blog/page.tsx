import React from "react";
import AddButton from "../ui/blog/add-button";
import toast from "react-hot-toast";
import type { Post } from "@prisma/client";
import DeleteButton from "../ui/blog/delete-button";

const BlogPage = async () => {
  const postListFetch = await fetch(process.env.API_URL + "/api/blog", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-cache",
  });

  if (!postListFetch.ok) {
    toast.error(`Error: ${postListFetch.status} ${postListFetch.statusText}`);
  }

  const postList = await postListFetch.json();

  return (
    <>
      <div className="flex justify-end mb-8">
        <AddButton />
      </div>
      <div className="flex flex-col space-y-8">
        {postList.data && postList.data.length > 0 ? (
          postList.data.map(({ id, title, content }: Post, index: number) => (
            <div className="card bg-primary-content shadow-xl" key={index}>
              <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{content}</p>
                <div className="card-actions justify-end">
                  <DeleteButton id={id} />
                </div>
              </div>
            </div>
          ))
        ) : (
          <h1 className="flex justify-center mt-8">No Data</h1>
        )}
      </div>
    </>
  );
};

export default BlogPage;
