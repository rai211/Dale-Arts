"use client";
import { useState } from "react"; 
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";


const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");




const handleSubmit = async (e) => {
  e.preventDefault();
  
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log("User Created:", userCredential.user);
  } catch (error) {
    console.error("Firebase Auth Error:", error.message);
  }
};


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-2" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 mt-4 bg-blue-600 hover:bg-blue-500 rounded-lg text-white font-semibold transition duration-200"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
