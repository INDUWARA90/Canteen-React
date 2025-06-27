import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';

function ThankYou() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-100 via-green-50 to-green-100 p-6 text-center animate-fade-in">
      {/* Success Icon */}
      <FaCheckCircle className="text-green-500 text-7xl mb-6 animate-bounce" />

      {/* Message */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-green-700 mb-4">
        Thank You!
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        Your payment was successful and your order has been placed.
      </p>

      {/* Back to Home Button */}
      <Link
        to="/"
        className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition"
      >
        Back to Home
      </Link>
    </div>
  );
}

export default ThankYou;
