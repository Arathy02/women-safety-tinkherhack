import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

const EmergencySiren = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const playSiren = () => {
    const audio = new Audio("/siren.mp3"); // Path to the siren audio file
    audio.play();
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-purple-100"
      style={{
        padding: "20px", // Padding around the content
      }}
    >
      {/* Heading */}
      <h1 className="text-3xl font-semibold text-center text-purple-900 mb-10">
        Emergency Siren Activation
      </h1>

      {/* Buttons Wrapper */}
      <div className="flex flex-col items-center justify-center space-y-6">
        {/* Activate Siren Button */}
        <button
          className="bg-purple-600 text-white text-lg px-6 py-3 rounded-md hover:bg-purple-700 transition duration-300 w-72"
          onClick={playSiren} // Play the siren sound when clicked
        >
          Activate Siren
        </button>

        {/* Back to Home Button */}
        <button
          onClick={() => navigate("/home")}  // Navigate to the home page
          className="bg-purple-500 text-white text-lg px-6 py-3 rounded-md hover:bg-purple-600 transition duration-300 w-72"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default EmergencySiren;
