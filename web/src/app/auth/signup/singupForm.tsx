"use client"

import React from 'react';
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import SubmitButton from "@/components/ui/submitButton";
import { useFormState } from "react-dom";
import { signUp } from "@/lib/auth";

const SingupForm = () => {

    const [state,action] = useFormState(signUp,undefined);

    return (
        <form action={action}>
            <div className="flex flex-col gap-4">
              {state?.message && (
                <div className="text-red-500 text-sm">{state.message}</div>
              )}

                <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" type="text" placeholder="John Doe"/>
                </div>
              {state?.error?.name && (
                <div className="text-red-500 text-sm">{state.error.name}</div>
              )}

                <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="text" placeholder="Johndoe@email.com"/>
                </div>

              {state?.error?.email && (
                <div className="text-red-500 text-sm">{state.error.email}</div>
              )}

                <div>
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" name="password" type="password" />
                </div>

              {state?.error?.password && (
                <div className="text-red-500 text-sm">
                  <p>Password must:</p>
                  <ul>
                    {state.error.password.map((err, index) => (
                      <li key={index}>- {err}</li>
                    ))}
                  </ul>
                </div>
              )}


                <SubmitButton>Sign Up</SubmitButton>
            </div>
        </form>
    );
};

export default SingupForm;