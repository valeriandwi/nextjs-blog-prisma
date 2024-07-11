"use client";
import PasswordIcon from "@/app/assets/icons/password-icon";
import UserIcon from "@/app/assets/icons/user-icon";
import { LoginUserInput, loginUserSchema } from "@/app/lib/user-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

const LoginForm = () => {
  const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false);

  const methods = useForm<LoginUserInput>({
    resolver: zodResolver(loginUserSchema),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = methods;

  const onSubmitHandler: SubmitHandler<LoginUserInput> = async (values) => {
    try {
      setIsSubmitting(true);
      await signIn("credentials", {
        redirect: true,
        email: values.email,
        password: values.password,
        callbackUrl: "/blog",
      });
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const onGithubLoginClick = async () => {
    try {
      await signIn("github");
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const onGoogleLoginClick = async () => {
    try {
      await signIn("google");
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-8">
        <button
          className="btn btn-outline"
          disabled={isSubmitting}
          onClick={onGithubLoginClick}
        >
          Github
        </button>
        <button
          className="btn btn-outline"
          disabled={isSubmitting}
          onClick={onGoogleLoginClick}
        >
          Google Sign In
        </button>
      </div>
      <div className="divider">OR</div>
      <form
        className="flex flex-col gap-4"
        onSubmit={handleSubmit(onSubmitHandler)}
      >
        <label className="form-control w-full">
          <div className="input input-bordered flex items-center gap-4">
            <UserIcon />
            <input
              {...register("email")}
              type="email"
              className="grow"
              placeholder="Email"
            />
          </div>
          {errors["email"] && (
            <div className="label">
              <span className="label-text-alt text-error">
                {errors["email"]?.message}
              </span>
            </div>
          )}
        </label>
        <label className="form-control w-full">
          <div className="input input-bordered flex items-center gap-4">
            <PasswordIcon />
            <input
              {...register("password")}
              type="password"
              className="grow"
              placeholder="Password"
            />
          </div>
          {errors["password"] && (
            <div className="label">
              <span className="label-text-alt text-error">
                {errors["password"]?.message}
              </span>
            </div>
          )}
        </label>
        <button className="btn btn-neutral" disabled={isSubmitting}>
          Login
        </button>
      </form>
    </>
  );
};

export default LoginForm;
