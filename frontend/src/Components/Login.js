import React, { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();

  const handleAuth = async (e) => {
    e.preventDefault();
    try {
      if (isSignUp) {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Signup successful!");
        navigate("/signup"); // Redirect to signup page
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        alert("Login successful!");
        navigate("/home"); // Redirect to home page
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#ede9fe]">
      <div className="bg-white p-8 shadow-lg rounded-lg w-96 flex flex-col items-center">
        <h2 className="text-2xl font-bold text-center text-purple-800 mb-6">
          {isSignUp ? "Create Account" : "Welcome Back"}
        </h2>

        <form onSubmit={handleAuth} className="w-full flex flex-col space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full bg-purple-600 text-white text-lg p-3 rounded-md hover:bg-purple-700 transition duration-300"
          >
            {isSignUp ? "Sign Up" : "Login"}
          </button>
        </form>

        <p className="text-sm mt-4 text-gray-600">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}
          <button
            className="text-purple-500 font-medium ml-1"
            onClick={() => setIsSignUp(!isSignUp)}
          >
            {isSignUp ? "Login" : "Sign Up"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
