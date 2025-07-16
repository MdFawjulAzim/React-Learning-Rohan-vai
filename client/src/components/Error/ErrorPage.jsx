import React from "react";
import { Link } from "react-router-dom";
import { AlertTriangle } from "lucide-react"; // Optional icon (if using lucide)

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center px-4">
      <div className="bg-white p-10 rounded-2xl shadow-lg">
        <div className="flex flex-col items-center gap-2">
          <AlertTriangle className="text-red-500 w-12 h-12" />
          <h1 className="text-4xl font-bold text-red-600">
            Oops! Page not found
          </h1>
          <p className="text-gray-600 mt-2">
            The page you are looking for might be removed or temporarily
            unavailable.
          </p>

          <Link
            to="/"
            className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
