import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-10">
      {/* Main Header */}
      <h1 className="text-5xl font-extrabold text-center text-gray-800">Welcome to Nirbhaya</h1>
      <p className="mt-3 text-lg text-center text-gray-600">Your safety, our priority!</p>

      {/* Action Buttons */}
      <div className="mt-8 flex space-x-6 justify-center">
        <Link to="/safe-route" className="bg-blue-600 text-white text-xl px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
          Find Safe Routes
        </Link>
        <Link to="/guardian" className="bg-green-600 text-white text-xl px-6 py-3 rounded-lg hover:bg-green-700 transition duration-300">
          Live Guardian
        </Link>
        <Link to="/alerts" className="bg-red-600 text-white text-xl px-6 py-3 rounded-lg hover:bg-red-700 transition duration-300">
          Emergency Alerts
        </Link>
      </div>

      {/* Back to Home Button */}
      <div className="mt-8">
        <Link to="/home" className="bg-gray-700 text-white text-xl px-6 py-3 rounded-lg hover:bg-gray-800 transition duration-300">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Landing;
