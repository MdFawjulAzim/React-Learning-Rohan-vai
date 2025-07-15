import React from "react";

const Card = ({ cards }) => {
  const EventData = cards?.data;

  if (!Array.isArray(EventData)) return <div>Loading...</div>;

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-5">
      {EventData.map((item, index) => (
        <a
          key={index}
          className="p-6 bg-white border border-indigo-200 rounded-2xl hover:shadow-xl transition-shadow flex flex-col"
          href="#"
        >
          <img
            src={item.image_url}
            alt={item.title}
            className="rounded-xl h-48 object-cover"
          />
          <div className="mt-5 flex-grow">
            <h4 className="font-bold text-xl text-gray-900">{item.title}</h4>
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
              🎟️ ${item.ticket_price}
            </p>
          </div>
          <div className="mt-5">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700"
            >
              View Details
            </button>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Card;
