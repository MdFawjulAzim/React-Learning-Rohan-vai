import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import AdminSidebar from "../components/Dashboard/Sidebar/AdminSidebar";
import UserSidebar from "../components/Dashboard/Sidebar/UserSidebar";
import OrganizerSidebar from "../components/Dashboard/Sidebar/OrganizerSidebar";
import HeaderDashboard from "./HeaderDashboard";
import FooterDashboard from "./FooterDashboard";

const DashboardLayout = () => {
  const role = useSelector((state) => state.Auth.role);

  if (!role) return <Navigate to="/login" replace />;

  const renderSidebar = () => {
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
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="hidden md:block w-64 bg-gray-800 text-white h-full fixed top-0 left-0 z-10 overflow-y-auto">
        {renderSidebar()}
      </aside>

      {/* Main Layout */}
      <div className="flex flex-col flex-1 md:ml-64 h-screen">
        <HeaderDashboard />

        <main className="flex-1 overflow-y-auto p-6 bg-gray-100">
          <Outlet />
        </main>

        <FooterDashboard />
      </div>
    </div>
  );
};

export default DashboardLayout;
