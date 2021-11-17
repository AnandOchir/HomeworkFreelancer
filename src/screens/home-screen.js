import React, { useContext } from "react";
import { AuthContext } from "../Providers/auth-provider";

export const HomeScreen = () => {
  const { user } = useContext(AuthContext);

  console.log("user: ", user);

  return <div>Home</div>;
};
