import React from "react";
import { useGetAllTicketsQuery } from "../../../../redux/Features/TicketData/TicketDataApi";

const TicketManagement = () => {
  const { data, isLoading, isError } = useGetAllTicketsQuery();

  if (isLoading) return <p>Loading tickets...</p>;
  if (isError) return <p>Failed to load ticket data.</p>;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-4">
      <h2 className="text-xl font-bold mb-4 text-gray-800">
        Ticket Management
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border border-gray-300 rounded-lg overflow-hidden text-sm">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="px-4 py-2 border">#</th>
              <th className="px-4 py-2 border">User</th>
              <th className="px-4 py-2 border">Email</th>
              <th className="px-4 py-2 border">Event</th>
              <th className="px-4 py-2 border">Quantity</th>
              <th className="px-4 py-2 border">Total Price</th>
              <th className="px-4 py-2 border">Purchased</th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.map((ticket, index) => (
              <tr key={ticket.id} className="hover:bg-gray-50 text-gray-700">
                <td className="px-4 py-2 border">{index + 1}</td>
                <td className="px-4 py-2 border">{ticket.user?.name}</td>
                <td className="px-4 py-2 border">{ticket.user?.email}</td>
                <td className="px-4 py-2 border">{ticket.event?.title}</td>
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

export default TicketManagement;
