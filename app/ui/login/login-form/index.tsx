"use client";
import PasswordIcon from "@/app/assets/icons/password-icon";
import UserIcon from "@/app/assets/icons/user-icon";
import React from "react";

const LoginForm = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-8">
        <button className="btn btn-outline">Github</button>
        <button className="btn btn-outline">Google Sign In</button>
      </div>
      <div className="divider">OR</div>
      <label className="form-control w-full">
        <div className="input input-bordered flex items-center gap-4">
          <UserIcon />
          <input type="email" className="grow" placeholder="Email" />
        </div>
        {/* <div className="label">
          <span className="label-text-alt text-error">Error</span>
        </div> */}
      </label>
      <label className="form-control w-full">
        <div className="input input-bordered flex items-center gap-4">
          <PasswordIcon />
          <input type="password" className="grow" placeholder="Password" />
        </div>
        {/* <div className="label">
          <span className="label-text-alt text-error">Error</span>
        </div> */}
      </label>
      <button className="btn btn-neutral">Login</button>
    </>
  );
};

export default LoginForm;
