import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Sidebar from "./Sidebar";

const isAuthenticated = true;

const DashboardLayout = () => {

  if(!isAuthenticated){
    return <Navigate to="/auth/login" />
  }
  return (
    <Stack direction="row">
      <Sidebar />
      <Outlet />
    </Stack>
  );
};

export default DashboardLayout;
