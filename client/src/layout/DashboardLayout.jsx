import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import AdminSidebar from "../components/Dashboard/Sidebar/AdminSidebar";
import UserSidebar from "../components/Dashboard/Sidebar/UserSidebar";
import OrganizerSidebar from "./../components/Dashboard/Sidebar/OrganizerSidebar";

const DashboardLayout = () => {
  const role = useSelector((state) => state.Auth.role);

  if (!role) {
    return <Navigate to="/login" replace />;
  }

  const sidebar = () => {
    switch (role) {
      case "admin":
        return <AdminSidebar />;
      case "user":
        return <UserSidebar />;
      case "organizer":
        return <OrganizerSidebar />;
      default:
        return <Navigate to="/login" replace />;
    }
  };

  return (
    <section className="flex flex-col h-screen">
      <div className="sidebar">{sidebar()}</div>

      <div className="content">
        <Outlet />
      </div>
    </section>
  );
};

export default DashboardLayout;
