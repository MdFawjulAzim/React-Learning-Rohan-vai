import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

const ProtectionRouter = ({ allowRole }) => {
  const role = useSelector((state) => state.Auth.role);

  if (!role) {
    return <Navigate to="/login" replace />;
  }

  if (role !== allowRole) {
    toast.error("You are not allowed to access this page");
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectionRouter;
