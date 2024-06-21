import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { isLoggedIn } from "./MainLayout";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";


const AuthLayout = () => {

const [user, isLoading] = useAuthState(auth)

  if (user) {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
};

export default AuthLayout;
