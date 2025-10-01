import React from "react";
import { getSession } from "@/lib/session";
import Link from "next/link";

const SignInButton = async () => {
  const session = await getSession();

  return (
    <div className="flex gap-2 items-center ml-auto">
      {!session || !session.user ? (
        <>
          <Link
            href={"/auth/signin"}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Sign In
          </Link>

          <Link
            href={"/auth/signup"}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Sign Up
          </Link>
        </>
      ) : (
        <>
          <span className="text-white">{session.user.name}!</span>
          <a
            href={"/api/auth/signout"}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
          >
            Sign Out
          </a>
        </>
      )}
    </div>
  );
};

export default SignInButton;
