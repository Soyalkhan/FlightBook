import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-9xl font-extrabold text-teal-600">404</h1>
      <p className="text-xl text-gray-700 mt-4">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-teal-600 text-white text-lg font-medium rounded-md hover:bg-teal-700"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
