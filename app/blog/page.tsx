import Router from "next/router";
import React from "react";
import AddButton from "../ui/blog/add-button";

const BlogPage = () => {
  return (
    <>
      <div className="flex justify-end mb-8">
        <AddButton />
      </div>
      <div className="flex flex-col space-y-8">
        {/* <div className="card bg-primary-content shadow-xl">
        <div className="card-body">
          <h2 className="card-title">New album is released!</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div className="card-actions justify-end">
            <div>Created by Valerian</div>
          </div>
        </div>
      </div> */}
        <h1 className="flex justify-center mt-8">No Data</h1>
      </div>
    </>
  );
};

export default BlogPage;
