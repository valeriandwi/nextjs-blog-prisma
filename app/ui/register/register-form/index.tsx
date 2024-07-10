import PasswordIcon from "@/app/assets/icons/password-icon";
import UserIcon from "@/app/assets/icons/user-icon";
import React from "react";

const RegisterForm = () => {
  return (
    <>
      <label className="form-control w-full">
        <div className="input input-bordered flex items-center gap-4">
          <UserIcon />
          <input type="text" className="grow" placeholder="Name" name="name" />
        </div>
        {/* <div className="label">
          <span className="label-text-alt text-error">Error</span>
        </div> */}
      </label>
      <label className="form-control w-full">
        <div className="input input-bordered flex items-center gap-4">
          <UserIcon />
          <input
            type="email"
            className="grow"
            placeholder="Email"
            name="email"
          />
        </div>
        {/* <div className="label">
          <span className="label-text-alt text-error">Error</span>
        </div> */}
      </label>
      <label className="form-control w-full">
        <div className="input input-bordered flex items-center gap-4">
          <PasswordIcon />
          <input
            type="password"
            className="grow"
            placeholder="Password"
            name="password"
          />
        </div>
        {/* <div className="label">
          <span className="label-text-alt text-error">Error</span>
        </div> */}
      </label>
      <label className="form-control w-full">
        <div className="input input-bordered flex items-center gap-4">
          <PasswordIcon />
          <input
            type="password"
            name="passwordConfirm"
            className="grow"
            placeholder="Confirmation Password"
          />
        </div>
        {/* <div className="label">
          <span className="label-text-alt text-error">Error</span>
        </div> */}
      </label>
      <button className="btn btn-neutral">Register</button>
    </>
  );
};

export default RegisterForm;
