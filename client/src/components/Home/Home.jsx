import React, { useState } from "react";
import { useGetEventDataQuery } from "../../redux/Features/EventData/EventDateApi.js";
import Loader from "../../Loader/Loader.jsx";

const Home = () => {
  const [page, setPage] = useState(1);
  const count = 10;

  const { data, error, isLoading, isFetching } = useGetEventDataQuery({
    page,
    count,
  });

  const total = data?.total_event || 0;
  const totalPages = Math.ceil(total / count);

  if (error) {
    return (
      <div className="text-center text-red-600 mt-10">
        Error: {error.message || "Failed to load data."}
      </div>
    );
  }

  return (
    <div className="container mx-auto px-5 py-10 max-w-[1140px]">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-2">Explore Upcomings!</h1>
        <p className="text-sm text-gray-600">
          Explore the Universe of Events at Your Fingertips.
        </p>
      </div>

      {/* Data Area: Loader or Cards */}
      {isLoading ? (
        <Loader />
      ) : isFetching ? (
        <div className="h-96 flex justify-center items-center">
          <Loader />
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data?.data?.map((item) => (
            <div
              key={item.id}
              className="p-6 bg-white border border-indigo-200 rounded-2xl hover:shadow-xl transition-shadow flex flex-col"
            >
              <img
                src={item.image_url}
                alt={item.title}
                className="rounded-xl h-48 object-cover"
              />
              <div className="mt-5 flex-grow">
                <h4 className="font-bold text-xl text-gray-900">
                  {item.title}
                </h4>
                <p className="mt-2 text-gray-600 line-clamp-3">
                  {item.event_description}
                </p>
                <p className="mt-2 text-sm text-indigo-600 font-medium">
                  📍 {item.location}
                </p>
                <p className="text-sm text-gray-500">
                  📅 {new Date(item.start_date).toLocaleDateString()} -{" "}
                  {new Date(item.end_date).toLocaleDateString()}
                </p>
                <p className="text-sm text-gray-700 font-semibold mt-1">
                  🎟️ ৳{item.ticket_price}
                </p>
              </div>
              <div className="mt-5">
                <button
                  type="button"
                  className="cursor-pointer inline-flex items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pagination */}
      <div className="flex justify-center gap-2 mt-10 flex-wrap">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className="px-4 py-2 border rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
          <button
            key={p}
            onClick={() => setPage(p)}
            className={`px-4 py-2 border rounded ${
              page === p ? "bg-indigo-600 text-white" : "bg-gray-100"
            }`}
          >
            {p}
          </button>
        ))}

        <button
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={page === totalPages}
          className="px-4 py-2 border rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
        >
          Next
        </button>
      </div>

      <p className="text-center text-sm text-gray-600 mt-6">
        Total Events: <strong>{total}</strong>
      </p>
    </div>
  );
};

export default Home;
