import React from "react";
import { useGetAllCategoriesQuery } from "../../../../redux/Features/CategoryData/CategoryDataApi";

const CategoryManagement = () => {
  const { data, isLoading, isError } = useGetAllCategoriesQuery();

  if (isLoading) return <p>Loading categories...</p>;
  if (isError) return <p>Failed to load categories.</p>;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-4">
      <h2 className="text-xl font-bold mb-4 text-gray-800">
        Category Management
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border border-gray-300 rounded-lg overflow-hidden text-sm">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="px-4 py-2 border">#</th>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Status</th>
              <th className="px-4 py-2 border">Created At</th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.map((category, index) => (
              <tr key={category.id} className="hover:bg-gray-50 text-gray-700">
                <td className="px-4 py-2 border">{index + 1}</td>
                <td className="px-4 py-2 border">{category.name}</td>
                <td className="px-4 py-2 border capitalize">
                  {category.status}
                </td>
                <td className="px-4 py-2 border">
                  {new Date(category.created_at).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-sm text-gray-600">
        Total Categories: <strong>{data?.data?.length || 0}</strong>
      </p>
    </div>
  );
};

export default CategoryManagement;
