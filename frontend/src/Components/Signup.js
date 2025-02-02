// src/Components/Signup.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    
    // Set loading state
    setLoading(true);
    setErrorMessage('');

    const user = {
      email: email,
      password: password,
    };

    try {
      const response = await fetch("http://127.0.0.1:5000/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      const data = await response.json();

      if (response.ok) {
        // On success, navigate to login page
        alert('Signup successful!');
        navigate('/login');
      } else {
        // Show error message if signup fails
        setErrorMessage(data.message || 'Signup failed. Please try again.');
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage('Signup failed. Please try again.');
    } finally {
      // Reset loading state after request
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="bg-white p-8 shadow-xl rounded-lg w-96 flex flex-col items-center">
        <h2 className="text-3xl font-bold text-center text-purple-700 mb-6">
          Create Account
        </h2>

        {errorMessage && (
          <div className="bg-red-100 text-red-700 p-3 mb-4 rounded-md w-full">
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleSignup} className="w-full flex flex-col space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white text-lg p-3 rounded-md hover:bg-gradient-to-r hover:from-purple-700 hover:via-pink-700 hover:to-red-700 transition duration-300"
            disabled={loading}
          >
            {loading ? 'Creating Account...' : 'Create Account'}
          </button>
        </form>

        <p className="text-sm mt-4 text-gray-700">
          Already have an account?
          <button
            className="text-purple-600 font-medium ml-1"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default Signup;
