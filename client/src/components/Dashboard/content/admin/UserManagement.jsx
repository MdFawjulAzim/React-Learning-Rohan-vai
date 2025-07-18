import React from "react";
import { useGetAllUsersQuery } from "../../../../redux/Features/UserData/UserDataApi";
import Loader from "./../../../../Loader/Loader";
import ErrorPage from "./../../../Error/ErrorPage";

const UserManagement = () => {
  const { data, isLoading, isError } = useGetAllUsersQuery();

  if (isLoading) return <Loader />;
  if (isError) return <ErrorPage Error={"User not found"} />;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-4">
      <h2 className="text-xl font-bold mb-4 text-gray-800">User Management</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border border-gray-300 rounded-lg overflow-hidden">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="px-4 py-2 border">#</th>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Email</th>
              <th className="px-4 py-2 border">Role</th>
              <th className="px-4 py-2 border">Created At</th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.map((user, index) => (
              <tr
                key={user.id}
                className="hover:bg-gray-50 text-sm text-gray-700"
              >
                <td className="px-4 py-2 border">{index + 1}</td>
                <td className="px-4 py-2 border">{user.name}</td>
                <td className="px-4 py-2 border">{user.email}</td>
                <td className="px-4 py-2 border">{user.role?.name ?? "N/A"}</td>
                <td className="px-4 py-2 border">
                  {new Date(user.created_at).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-sm text-gray-600">
        Total Users: <strong>{data?.total_user}</strong>
      </p>
    </div>
  );
};

export default UserManagement;
