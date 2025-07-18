import React from "react";

const AdminMainContent = () => {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-white rounded-xl shadow p-4 text-center">
        <h2 className="text-lg font-semibold">Total Users</h2>
        <p className="text-2xl font-bold text-blue-600">123</p>
      </div>
      <div className="bg-white rounded-xl shadow p-4 text-center">
        <h2 className="text-lg font-semibold">Total Events</h2>
        <p className="text-2xl font-bold text-green-600">15</p>
      </div>
      <div className="bg-white rounded-xl shadow p-4 text-center">
        <h2 className="text-lg font-semibold">Tickets Sold</h2>
        <p className="text-2xl font-bold text-red-600">340</p>
      </div>
    </div>
  );
};

export default AdminMainContent;
