import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import AdminSidebar from "../components/Dashboard/Sidebar/AdminSidebar";
import UserSidebar from "../components/Dashboard/Sidebar/UserSidebar";
import OrganizerSidebar from "./../components/Dashboard/Sidebar/OrganizerSidebar";
import HeaderDashboard from "./HeaderDashboard";
import FooterDashboard from "./FooterDashboard";

const DashboardLayout = () => {
  const role = useSelector((state) => state.Auth.role);

  if (!role) {
    return <Navigate to="/login" replace />;
  }

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
    <section className="flex min-h-screen bg-gray-100">
      {/* Sidebar fixed */}
      <aside className="fixed top-0 left-0 w-64 h-full bg-gray-800 text-white z-20">
        {renderSidebar()}
      </aside>

      {/* Main content with left margin for sidebar */}
      <div className="flex-1 ml-0 md:ml-64 flex flex-col min-h-screen">
        <HeaderDashboard />
        <main className="flex-grow p-6 overflow-y-auto">
          <Outlet />
        </main>
        <FooterDashboard />
      </div>
    </section>
  );
};

export default DashboardLayout;
