"use client";

import PasswordIcon from "@/app/assets/icons/password-icon";
import UserIcon from "@/app/assets/icons/user-icon";
import { CreateUserInput, createUserSchema } from "@/app/lib/user-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

const RegisterForm = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false);

  const methods = useForm<CreateUserInput>({
    resolver: zodResolver(createUserSchema),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = methods;

  const onSubmitHandler: SubmitHandler<CreateUserInput> = async (values) => {
    try {
      setIsSubmitting(true);

      const res = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        const errorData = await res.json();

        if (Array.isArray(errorData.errors) && errorData.errors.length > 0) {
          errorData.errors.forEach((error: any) => {
            toast.error(error.message);
          });

          return;
        }

        toast.error(errorData.message);
        return;
      }

      toast.success("User register successfully");
      router.push("/login");
    } catch (error: any) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmitHandler)}
      className="flex flex-col gap-4"
    >
      <label className="form-control w-full">
        <div className="input input-bordered flex items-center gap-4">
          <UserIcon />
          <input
            {...register("name")}
            type="text"
            className="grow"
            placeholder="Name"
            name="name"
            autoComplete="username"
          />
        </div>
        {errors["name"] && (
          <div className="label">
            <span className="label-text-alt text-error">
              {errors["name"]?.message}
            </span>
          </div>
        )}
      </label>
      <label className="form-control w-full">
        <div className="input input-bordered flex items-center gap-4">
          <UserIcon />
          <input
            {...register("email")}
            type="email"
            className="grow"
            placeholder="Email"
            name="email"
            autoComplete="email"
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
            name="password"
            autoComplete="new-password"
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
      <label className="form-control w-full">
        <div className="input input-bordered flex items-center gap-4">
          <PasswordIcon />
          <input
            {...register("passwordConfirm")}
            type="password"
            name="passwordConfirm"
            className="grow"
            placeholder="Confirmation Password"
            autoComplete="new-password"
          />
        </div>
        {errors["passwordConfirm"] && (
          <div className="label">
            <span className="label-text-alt text-error">
              {errors["passwordConfirm"]?.message}
            </span>
          </div>
        )}
      </label>
      <button type="submit" className="btn btn-neutral" disabled={isSubmitting}>
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
