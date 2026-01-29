import LoginFrom from "@/components/auth/LoginFrom";
import React from "react";

export const metadata = {
  title: "Login",
  description: "Login to your Care.xyz account to manage your bookings and profile.",
};

const page = () => {
  return (
    <div>
      <LoginFrom />
    </div>
  );
};

export default page;
