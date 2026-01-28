import React from "react";
import UsersContent from "@/components/dashboard/UsersContent";
import { getAllUsers } from "@/actions/serverData/dashbordApi";

const UsersPage = async () => {
  const users = await getAllUsers();
  console.log(users);
  

  return <UsersContent initialUsers={users} />;
};

export default UsersPage;
