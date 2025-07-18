import React from "react";

const TicketManagement = () => {
  const tickets = [
    { id: 1, event: "Concert", user: "John", status: "Paid" },
    { id: 2, event: "Workshop", user: "Anna", status: "Pending" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Ticket Management</h1>
      <table className="w-full border text-sm">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">#</th>
            <th className="p-2">Event</th>
            <th className="p-2">User</th>
            <th className="p-2">Status</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((t, idx) => (
            <tr key={t.id} className="border-b">
              <td className="p-2">{idx + 1}</td>
              <td className="p-2">{t.event}</td>
              <td className="p-2">{t.user}</td>
              <td className="p-2">{t.status}</td>
              <td className="p-2 space-x-2">
                <button className="text-green-600">Approve</button>
                <button className="text-red-600">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TicketManagement;
