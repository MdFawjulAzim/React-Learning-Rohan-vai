import React from "react";

const EventDetails = ({ eventDetails }) => {
  if (!eventDetails) return <div>Loading...</div>;

  const {
    title,
    event_description,
    location,
    start_date,
    end_date,
    image_url,
    organizer,
    category,
    ticket_price,
    privacy_policy,
  } = eventDetails;

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8">
      <div className="max-w-full lg:max-w-7xl xl:max-w-full mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
        <img
          className="w-full h-72 object-cover object-center"
          src={image_url || "https://via.placeholder.com/1200x500"}
          alt="Event Banner"
        />

        <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Event Content */}
          <div className="lg:col-span-2">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
              {title}
            </h1>

            {/* Date & Time */}
            <p className="text-xl text-gray-700 mb-2 flex items-center">
              📅 <span className="font-semibold ml-2">Date:</span>{" "}
              {new Date(start_date).toLocaleDateString()} —{" "}
              {new Date(end_date).toLocaleDateString()}
            </p>
            <p className="text-xl text-gray-700 mb-6 flex items-center">
              ⏰ <span className="font-semibold ml-2">Time:</span>{" "}
              {new Date(start_date).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}{" "}
              -{" "}
              {new Date(end_date).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}{" "}
              (GMT+6)
            </p>

            {/* Location */}
            <p className="text-xl text-gray-700 mb-6 flex items-center">
              📍 <span className="font-semibold ml-2">Location:</span>{" "}
              {location}
            </p>

            {/* Description */}
            <div className="mb-8 text-lg text-gray-800 leading-relaxed">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                About the Event
              </h2>
              <p>{event_description}</p>
            </div>

            {/* Ticket Price */}
            <p className="text-xl text-gray-700 mb-6">
              🎟️ <span className="font-semibold">Ticket Price:</span> $
              {ticket_price}
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 text-lg">
                Register Now
              </button>
              <button className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 text-lg">
                Add to Calendar
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Category */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Category</h3>
              <p className="text-indigo-600 text-lg">{category?.name}</p>
            </div>

            {/* Privacy Policy */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Policy</h3>
              <p className="text-gray-700 text-base">{privacy_policy}</p>
            </div>

            {/* Organizer Info */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Contact Organizer
              </h3>
              <div className="flex items-center mb-4">
                <img
                  className="w-16 h-16 rounded-full object-cover mr-4"
                  src="https://via.placeholder.com/150/9370DB/ffffff?text=Org"
                  alt={organizer?.name}
                />
                <div>
                  <p className="text-xl font-semibold text-gray-900">
                    {organizer?.name}
                  </p>
                  <p className="text-indigo-600">{organizer?.email}</p>
                </div>
              </div>
              <p className="text-gray-700">
                For inquiries and sponsorship, reach out to the organizer.
              </p>
              <button className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
