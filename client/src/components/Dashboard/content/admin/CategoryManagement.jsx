import React from "react";

const CategoryManagement = () => {
  const categories = [
    { id: 1, name: "Music" },
    { id: 2, name: "Tech" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Category Management</h1>
      <button className="bg-blue-600 text-white px-3 py-1 rounded mb-4">
        Add Category
      </button>
      <table className="w-full border text-sm">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">#</th>
            <th className="p-2">Name</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((cat, idx) => (
            <tr key={cat.id} className="border-b">
              <td className="p-2">{idx + 1}</td>
              <td className="p-2">{cat.name}</td>
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

export default CategoryManagement;
