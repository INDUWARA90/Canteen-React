import React from 'react';
import { Link } from 'react-router-dom';

function Error() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-100 to-white p-6 text-center">
      <h1 className="text-8xl font-extrabold text-green-600 animate-bounce mb-4">404</h1>
      <h2 className="text-3xl font-bold text-gray-800 mb-2">Oops! Page not found</h2>
      <p className="text-gray-500 text-lg max-w-md mb-6">
        The page you are looking for might have been removed or is temporarily unavailable.
      </p>
      <Link
        to="/"
        className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-all duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
}

export default Error;
