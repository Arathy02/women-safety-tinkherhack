import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const LiveGuardian = () => {
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  const sendLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation(`Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`);
        alert("Location sent to guardian!");
      },
      (error) => {
        alert("Unable to retrieve location. Please enable location services.");
      }
    );
  };

  return (
    <div className="p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold">Live Guardian</h1>

      {/* Button Container */}
      <div className="mt-6 flex justify-center space-x-4">
        {/* Share Location Button */}
        <button className="bg-green-500 text-white px-6 py-3 rounded text-xl" onClick={sendLocation}>
          Share Location
        </button>

        {/* Back to Home Button */}
        <button
          className="bg-gray-700 text-white px-6 py-3 rounded text-xl"
          onClick={() => navigate("/home")} // Navigate to home when clicked
        >
          Back to Home
        </button>
      </div>

      {location && <p className="mt-4 text-lg">Current Location: {location}</p>}
    </div>
  );
};

export default LiveGuardian;
