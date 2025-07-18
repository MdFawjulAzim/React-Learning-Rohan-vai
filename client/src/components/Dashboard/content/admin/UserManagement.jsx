import React from "react";

const UserManagement = () => {
  const users = [
    { id: 1, name: "Fawjul", email: "fawjul@example.com", role: "user" },
    { id: 2, name: "Admin", email: "admin@example.com", role: "admin" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">User Management</h1>
      <table className="w-full border text-sm">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">#</th>
            <th className="p-2">Name</th>
            <th className="p-2">Email</th>
            <th className="p-2">Role</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, idx) => (
            <tr key={user.id} className="border-b">
              <td className="p-2">{idx + 1}</td>
              <td className="p-2">{user.name}</td>
              <td className="p-2">{user.email}</td>
              <td className="p-2">{user.role}</td>
              <td className="p-2 space-x-2">
                <button className="text-blue-600">Edit</button>
                <button className="text-red-600">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
