import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import {useAuthState} from "react-firebase-hooks/auth"
import { auth } from "../firebase";

export const isLoggedIn = false;

const MainLayout = () => {


const [user,isLoading] = useAuthState(auth)


if(isLoading){
  return <h1>Loading....</h1>                
}
  if (!user) {
    return <Navigate to="/sign-in" replace />;
  }
  return <Outlet />;
};

export default MainLayout;
