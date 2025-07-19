import React from "react";
import { useGetMyTicketsQuery } from "../../../../redux/Features/TicketData/TicketDataApi";
import Loader from "../../../../Loader/Loader";
import ErrorPage from "../../../Error/ErrorPage";

const MyTicketsContent = () => {
  const { data, isLoading, isError } = useGetMyTicketsQuery();

  if (isLoading) return <Loader />;
  if (isError) return <ErrorPage Error={"Tickets not found"} />;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-4">
      <h2 className="text-xl font-bold mb-4 text-gray-800">My Tickets</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border border-gray-300 rounded-lg overflow-hidden text-sm">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="px-4 py-2 border">#</th>
              <th className="px-4 py-2 border">Event</th>
              <th className="px-4 py-2 border">Category</th>
              <th className="px-4 py-2 border">Location</th>
              <th className="px-4 py-2 border">Quantity</th>
              <th className="px-4 py-2 border">Total Price</th>
              <th className="px-4 py-2 border">Purchased</th>
              <th className="px-4 py-2 border">Status</th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.map((ticket, index) => (
              <tr key={ticket.id} className="hover:bg-gray-50 text-gray-700">
                <td className="px-4 py-2 border">{index + 1}</td>
                <td className="px-4 py-2 border">{ticket.event?.title}</td>
                <td className="px-4 py-2 border">{ticket.event?.category_name}</td>
                <td className="px-4 py-2 border">{ticket.event?.location}</td>
                <td className="px-4 py-2 border">{ticket.ticket_quantity}</td>
                <td className="px-4 py-2 border">
                  ৳
                  {(
                    parseFloat(ticket.price_per_ticket) * ticket.ticket_quantity
                  ).toFixed(2)}
                </td>
                <td className="px-4 py-2 border">
                  {new Date(ticket.purchased_at).toLocaleDateString()}
                </td>
                <td className="px-4 py-2 border capitalize text-blue-600 font-medium">
                  {ticket.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-sm text-gray-600">
        Total Booked Tickets: <strong>{data?.data?.length || 0}</strong>
      </p>
    </div>
  );
};

export default MyTicketsContent;