import React from "react";
import { useGetEventDataQuery } from "../../../../redux/Features/EventData/EventDateApi";
import Loader from "../../../../Loader/Loader";
import ErrorPage from "../../../Error/ErrorPage";

const EventManagement = () => {
  const { data, isLoading, isError } = useGetEventDataQuery();

  if (isLoading) return <Loader />;
  if (isError) return <ErrorPage Error={"Failed to load events"} />;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-4">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Event Management</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border border-gray-300 rounded-lg overflow-hidden text-sm">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="px-4 py-2 border">#</th>
              <th className="px-4 py-2 border">Title</th>
              <th className="px-4 py-2 border">Description</th>
              <th className="px-4 py-2 border">Location</th>
              <th className="px-4 py-2 border">Start Date</th>
              <th className="px-4 py-2 border">End Date</th>
              <th className="px-4 py-2 border">Status</th>
              <th className="px-4 py-2 border">Organizer</th>
              <th className="px-4 py-2 border">Category</th>
              <th className="px-4 py-2 border">Created At</th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.map((event, index) => (
              <tr key={event.id} className="hover:bg-gray-50 text-gray-700">
                <td className="px-4 py-2 border">{index + 1}</td>
                <td className="px-4 py-2 border">{event.title}</td>
                <td className="px-4 py-2 border">{event.event_description}</td>
                <td className="px-4 py-2 border">{event.location}</td>
                <td className="px-4 py-2 border">
                  {new Date(event.start_date).toLocaleString()}
                </td>
                <td className="px-4 py-2 border">
                  {new Date(event.end_date).toLocaleString()}
                </td>
                <td className="px-4 py-2 border capitalize">{event.status}</td>
                <td className="px-4 py-2 border">
                  {event.organizer?.name || "-"}
                </td>
                <td className="px-4 py-2 border">
                  {event.category?.name || "-"}
                </td>
                <td className="px-4 py-2 border">
                  {new Date(event.created_at).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-sm text-gray-600">
        Total Events:{" "}
        <strong>{data?.total_event || data?.data?.length || 0}</strong>
      </p>
    </div>
  );
};

export default EventManagement;
