"use client";
import React from "react";

const AddButton = () => {
  return (
    <>
      <a href="#create" className="btn">
        <button className="btn">Add Blog</button>
      </a>
      <div className="modal" role="dialog" id="create">
        <div className="modal-box">
          <h3 className="text-lg font-bold mb-8">Add</h3>
          <label className="form-control w-full mb-4">
            <div className="label">
              <span className="label-text">Title</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Description</span>
            </div>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Type here..."
            ></textarea>
          </label>
          <div className="modal-action">
            <a href="#" className="btn">
              Add
            </a>
            <a href="#" className="btn">
              Cancel
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddButton;
