import RegisterFrom from "@/components/auth/RegisterFrom";
import React from "react";

export const metadata = {
  title: "Register",
  description: "Create a new account on Care.xyz to start finding or providing care services.",
};

const page = () => {
  return (
    <div className="">
      <RegisterFrom />
    </div>
  );
};

export default page;
