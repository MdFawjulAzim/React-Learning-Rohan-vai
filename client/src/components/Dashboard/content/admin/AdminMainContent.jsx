import React from "react";
import { useGetAdminDashboardQuery } from "../../../../redux/Features/Dashboard/DashboardApi";

const AdminMainContent = () => {
  const { data, isLoading, error } = useGetAdminDashboardQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Failed to load dashboard data.</p>;

  const totalUsers = data?.data?.users?.total || 0;
  const totalEvents = data?.data?.events?.total || 0;
  const ticketsSold = data?.data?.tickets?.total || 0;

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-white rounded-xl shadow p-4 text-center">
        <h2 className="text-lg font-semibold">Total Users</h2>
        <p className="text-2xl font-bold text-blue-600">{totalUsers}</p>
      </div>
      <div className="bg-white rounded-xl shadow p-4 text-center">
        <h2 className="text-lg font-semibold">Total Events</h2>
        <p className="text-2xl font-bold text-green-600">{totalEvents}</p>
      </div>
      <div className="bg-white rounded-xl shadow p-4 text-center">
        <h2 className="text-lg font-semibold">Tickets Sold</h2>
        <p className="text-2xl font-bold text-red-600">{ticketsSold}</p>
      </div>
    </div>
  );
};

export default AdminMainContent;
