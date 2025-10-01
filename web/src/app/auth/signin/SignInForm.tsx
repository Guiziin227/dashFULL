"use client";
import { Input } from "@/components/ui/input";
import React from "react";
import { Label } from "@/components/ui/label";
import SubmitButton from "@/components/ui/submitButton";
import Link from "next/link";
import { useFormState } from "react-dom";
import { signIn } from "@/lib/auth";

const SignInForm = () => {

  const [state, action] = useFormState(signIn, undefined);

  return (
    <form action={action}>
      <div className="flex flex-col gap-2 w-64">
        {state?.message && (
          <p className="text-sm text-red-600">{state.message}</p>
        )}
        <div>
          <Label htmlFor="email" className="pb-2">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {state?.error?.email && (
          <p className="text-red-500 text-sm">{state.error.email}</p>
        )}

        <div>
          <Label htmlFor="password" className="pb-2">Password</Label>
          <Input
            type="password"
            id="password"
            name="password"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {state?.error?.password && (
          <p className="text-red-500 text-sm">{state.error.password}</p>
        )}

        <Link className="text-sm underline" href="#">Forgot your password?</Link>

        <SubmitButton>Sign In</SubmitButton>

        <div className="flex justify-between text-sm">
          <p>Don't have an account?</p>
          <Link className="underline" href={"/auth/signup"}>
            Sign Up
          </Link>
        </div>
      </div>
    </form>
);
};

export default SignInForm;
