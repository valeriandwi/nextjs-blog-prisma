"use client";

import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

const DeleteButton = ({ id }: { id: string }) => {
  const router = useRouter();
  const onDeleteClick = async () => {
    try {
      toast.promise(
        fetch(process.env.API_URL + "/api/blog", {
          method: "DELETE",
          body: JSON.stringify({
            id: id,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }),
        {
          loading: "Loading",
          success: "Delete post successfully",
          error: "Error",
        }
      );
      router.refresh();
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <button className="btn btn-active" onClick={onDeleteClick}>
      Delete
    </button>
  );
};

export default DeleteButton;
