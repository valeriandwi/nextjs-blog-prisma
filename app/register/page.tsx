import Link from "next/link";
import React from "react";
import RegisterForm from "../ui/register/register-form";

const RegisterPage = () => {
  return (
    <div className="flex flex-col space-y-6">
      <h1 className="text-4xl font-bold text-center mb-8">Register</h1>
      <RegisterForm />
      <Link className="flex justify-end w-full link-primary" href="/login">
        Back to Login
      </Link>
    </div>
  );
};

export default RegisterPage;
