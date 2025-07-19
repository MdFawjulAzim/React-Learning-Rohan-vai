import React, { useState } from "react";
import { useGetEventDataQuery } from "../../../../redux/Features/EventData/EventDateApi";
import Loader from "../../../../Loader/Loader";
import ErrorPage from "../../../Error/ErrorPage";

const EventManagement = () => {
  const [page, setPage] = useState(1);
  const count = 10; // fixed items per page

  // isFetching: data fetching hocche (page change etc), isLoading: first time load
  const { data, isLoading, isError, isFetching } = useGetEventDataQuery({ page, count });

  if (isLoading) return <Loader />; // full page loader only first load
  if (isError) return <ErrorPage Error={"Failed to load events"} />;

  const total = data?.total_event || 0;
  const totalPages = Math.ceil(total / count);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-4">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Event Management</h2>

      <div className="overflow-x-auto">
        {/* 
          isFetching && !isLoading mane: data already ase, but reload hocche
          Tai ei khetre loader data er jaygay dakhabo, pagination er pase na
        */}
        {isFetching && !isLoading ? (
          <div className="flex justify-center items-center h-48">
            <Loader />
          </div>
        ) : (
          <table className="min-w-full table-auto border border-gray-300 rounded-lg overflow-hidden text-sm">
            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="px-4 py-2 border">#</th>
                <th className="px-4 py-2 border">Image</th>
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
                  <td className="px-4 py-2 border">{(page - 1) * count + index + 1}</td>
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
                  <td className="px-4 py-2 border line-clamp-2 max-w-xs">{event.event_description}</td>
                  <td className="px-4 py-2 border">{event.location}</td>
                  <td className="px-4 py-2 border">{new Date(event.start_date).toLocaleString()}</td>
                  <td className="px-4 py-2 border">{new Date(event.end_date).toLocaleString()}</td>
                  <td className="px-4 py-2 border capitalize">{event.status}</td>
                  <td className="px-4 py-2 border">{event.organizer?.name || "-"}</td>
                  <td className="px-4 py-2 border">{event.category?.name || "-"}</td>
                  <td className="px-4 py-2 border">{new Date(event.created_at).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 mt-6 flex-wrap">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className="px-3 py-1 border rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
          <button
            key={p}
            onClick={() => setPage(p)}
            className={`px-3 py-1 border rounded ${page === p ? "bg-blue-500 text-white" : "bg-gray-100"}`}
          >
            {p}
          </button>
        ))}

        <button
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={page === totalPages}
          className="px-3 py-1 border rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
        >
          Next
        </button>
      </div>

      <p className="mt-4 text-sm text-gray-600 text-center">
        Total Events: <strong>{total}</strong>
      </p>
    </div>
  );
};

export default EventManagement;
