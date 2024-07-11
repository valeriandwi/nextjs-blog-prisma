"use client";
import React from "react";
import AddButton from "../ui/blog/add-button";
import toast from "react-hot-toast";
import type { Post } from "@prisma/client";
import DeleteButton from "../ui/blog/delete-button";

const BlogPage = () => {
  const [postList, setPostList] = React.useState([]);

  React.useEffect(() => {
    const fetchPostData = async () => {
      try {
        const postListData = await fetch("/api/blog", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          cache: "no-cache",
        });
        if (!postListData.ok) {
          toast.error(
            `Error: ${postListData.status} ${postListData.statusText}`
          );
        }
        const result = await postListData.json();
        setPostList(result.data);
      } catch (error: any) {
        toast.error(error.message);
      }
    };

    fetchPostData();
  }, []);

  return (
    <>
      <div className="flex justify-end mb-8">
        <AddButton />
      </div>
      <div className="flex flex-col space-y-8">
        {postList && postList.length > 0 ? (
          postList.map(({ id, title, content }: Post, index: number) => (
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
