"use client";
import { auth } from "../../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";



const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  
  const validateLogin = () => {
    if (!email.trim()) {
      toast.error("Email is required.");
      return false;
    }
    if (!password.trim()) {
      toast.error("Password is required.");
      return false;
    }
    return true;
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    if (!validateLogin()) return;

    try {
      const userCredentials = await signInWithEmailAndPassword(auth, email, password);
      console.log("User:", userCredentials.user);
      toast.success("Login successful!");
      router.push("/dashboard");
    } catch (error) {
      setError(error.message);
      console.error("Sign-in error:", error);
      toast.error("Invalid email or password.");
    }
  };

  const redirectToSignup = () => {
    window.location.assign("/sign-up");
  };
  


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
        <form onSubmit={handleSignIn} className="mt-6">
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          </div>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full py-2 mt-4 bg-blue-600 hover:bg-blue-500 rounded-lg text-white font-semibold transition duration-200"
          >
            Sign In
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-4">
          Don't have an account?    
          <button
            onClick={redirectToSignup}
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Sign Up
            </button>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
