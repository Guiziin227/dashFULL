import React from "react";
import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";

const Page = async () => {

  const session = await getSession();

  if (!session || !session.user) {
    redirect("/auth/signin");
  }

  return (
    <div>
      Dashboard Page
    </div>
  );
};

export default Page;