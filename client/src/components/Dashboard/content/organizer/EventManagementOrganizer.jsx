import React from "react";
import { useGetAllEventsForOrganizerQuery } from "../../../../redux/Features/EventData/EventDateApi";
import Loader from "../../../../Loader/Loader";
import ErrorPage from "../../../Error/ErrorPage";

const EventManagementOrganizer = () => {
  const { data, isLoading, error } = useGetAllEventsForOrganizerQuery();

  if (isLoading) return <Loader />;
  if (error) return <ErrorPage Error={"Failed to load events."} />;

  const events = data?.data || [];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-4">
      <h2 className="text-xl font-bold mb-4 text-gray-800">My Events</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border border-gray-300 rounded-lg overflow-hidden text-sm">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="px-4 py-2 border">#</th>
              <th className="px-4 py-2 border">Image</th>
              <th className="px-4 py-2 border">Title</th>
              <th className="px-4 py-2 border">Location</th>
              <th className="px-4 py-2 border">Status</th>
              <th className="px-4 py-2 border">Price</th>
              <th className="px-4 py-2 border">Start Date</th>
              <th className="px-4 py-2 border">End Date</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event, index) => (
              <tr key={event.id} className="hover:bg-gray-50 text-gray-700">
                <td className="px-4 py-2 border">{index + 1}</td>

                <td className="px-4 py-2 border">
                  {event.image_url ? (
                    <img
                      src={event.image_url}
                      alt={event.title}
                      className="w-16 h-10 object-cover rounded"
                    />
                  ) : (
                    <span>No Image</span>
                  )}
                </td>

                <td className="px-4 py-2 border">{event.title}</td>
                <td className="px-4 py-2 border">{event.location}</td>
                <td className="px-4 py-2 border capitalize text-blue-600 font-medium">
                  {event.status}
                </td>
                <td className="px-4 py-2 border">৳{event.ticket_price}</td>
                <td className="px-4 py-2 border">
                  {new Date(event.start_date).toLocaleString()}
                </td>
                <td className="px-4 py-2 border">
                  {new Date(event.end_date).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-sm text-gray-600">
        Total Events: <strong>{events.length || 0}</strong>
      </p>
    </div>
  );
};

export default EventManagementOrganizer;
