import React from "react";
import { useGetUserDashboardQuery } from "../../../../redux/Features/Dashboard/DashboardApi";
import Loader from "../../../../Loader/Loader";
import ErrorPage from "../../../Error/ErrorPage";

const UserMainContent = () => {
  const { data, isLoading, error } = useGetUserDashboardQuery();

  if (isLoading) return <Loader />;
  if (error) return <ErrorPage Error={"Dashboard not found"} />;

  const stats = data?.data || {};

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-white rounded-xl shadow p-4 text-center">
        <h2 className="text-lg font-semibold">Total Tickets</h2>
        <p className="text-2xl font-bold text-blue-600">
          {stats.total_tickets || 0}
        </p>
      </div>

      <div className="bg-white rounded-xl shadow p-4 text-center">
        <h2 className="text-lg font-semibold">Events Participated</h2>
        <p className="text-2xl font-bold text-green-600">
          {stats.events_participated || 0}
        </p>
      </div>

      <div className="bg-white rounded-xl shadow p-4 text-center">
        <h2 className="text-lg font-semibold">Total Spent</h2>
        <p className="text-2xl font-bold text-red-600">৳ {stats.total_spent}</p>
      </div>
    </div>
  );
};

export default UserMainContent;
