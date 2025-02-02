import React from "react";
import { useNavigate } from "react-router-dom";  // Import useNavigate

const SafeRoute = () => {
  const navigate = useNavigate();  // Initialize navigate function

  return (
    <div className="p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold">Find Safe Routes</h1>
      <p>Interactive map to show safe routes.</p>

      <div className="mt-4">
        {/* Integrate Google Maps API */}
        <iframe
          width="100%"
          height="400"
          src="https://www.google.com/maps/embed/v1/directions?key=YOUR_GOOGLE_MAPS_API_KEY&origin=PLACE_A&destination=PLACE_B"
          allowFullScreen
        ></iframe>
      </div>

      {/* Back to Home Button using useNavigate */}
      <div className="mt-6">
        <button
          onClick={() => navigate("/home")}  // Navigate to the home page
          className="bg-gray-700 text-white px-4 py-2 rounded"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default SafeRoute;
