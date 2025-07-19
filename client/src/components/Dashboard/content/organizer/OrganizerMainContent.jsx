import React from "react";
import { MdEvent, MdConfirmationNumber, MdAttachMoney } from "react-icons/md";
import { useGetOrganizerDashboardQuery } from "../../../../redux/Features/Dashboard/DashboardApi";

const OrganizerMainContent = () => {
  const { data, isLoading, error } = useGetOrganizerDashboardQuery();

  if (isLoading)
    return (
      <p className="text-center py-10 text-gray-500 text-lg">Loading...</p>
    );
  if (error)
    return (
      <p className="text-center py-10 text-red-500 text-lg">
        Failed to load dashboard data.
      </p>
    );

  const totalEvents = data?.data?.total_events || 0;
  const totalTicketsSold = data?.data?.total_tickets_sold || 0;
  const totalEarnings = data?.data?.total_earnings || "0.00";
  const eventStatus = data?.data?.event_status || [];

  return (
    <div className="p-6 space-y-6">
      {/* Summary cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center space-y-3 hover:shadow-lg transition-shadow duration-300">
          <MdEvent size={40} className="text-green-600" />
          <h2 className="text-xl font-semibold text-green-600">Total Events</h2>
          <p className="text-3xl font-bold text-green-600">{totalEvents}</p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center space-y-3 hover:shadow-lg transition-shadow duration-300">
          <MdConfirmationNumber size={40} className="text-red-600" />
          <h2 className="text-xl font-semibold text-red-600">Tickets Sold</h2>
          <p className="text-3xl font-bold text-red-600">{totalTicketsSold}</p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center space-y-3 hover:shadow-lg transition-shadow duration-300">
          <MdAttachMoney size={40} className="text-yellow-600" />
          <h2 className="text-xl font-semibold text-yellow-600">
            Total Earnings
          </h2>
          <p className="text-3xl font-bold text-yellow-600">
            ৳ {totalEarnings}
          </p>
        </div>
      </div>

      {/* Event Status breakdown */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-semibold mb-4">Event Status Breakdown</h3>
        <ul className="space-y-2">
          {eventStatus.map(({ status, count }) => (
            <li
              key={status}
              className="flex justify-between px-4 py-2 bg-gray-50 rounded-md"
            >
              <span className="capitalize">{status}</span>
              <span className="font-semibold">{count}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OrganizerMainContent;
