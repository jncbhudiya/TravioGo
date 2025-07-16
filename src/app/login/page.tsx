"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { Email, Lock } from "../icon/page";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMsg(""); 

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/");
    } catch (error) {
      setErrorMsg("Invalid credentials. Please try again or sign up.");
      console.error("Login Error:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FEF5E6] p-4">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden w-full max-w-md">
        <div className="bg-gradient-to-r from-[#EC9105] to-[#ffb74d] p-6 text-center">
          <div className="flex justify-center mb-2">
            <img
              src="/images/Logo.png"
              alt="Travel Logo"
              className="w-40 h-auto object-contain"
            />
          </div>
          <h1 className="text-2xl font-bold text-white font-[ubuntu]">Login</h1>
        </div>

        {/* Form section */}
        <div className="p-8">
          {errorMsg && (
            <div className="bg-red-50 border-l-4 border-red-500 p-3 mb-6 rounded">
              <p className="text-red-700 font-medium text-sm">{errorMsg}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 font-[ubuntu]">
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 font-[ubuntu] text-black rounded-md focus:outline-none focus:ring-2 focus:ring-[#EC9105]"
                  placeholder="your@email.com"
                  required
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <Email />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 font-[ubuntu]">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 font-[ubuntu] text-black rounded-md focus:outline-none focus:ring-2 focus:ring-[#EC9105]"
                  placeholder="••••••••"
                  required
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <Lock />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-[#EC9105] focus:ring-[#EC9105] border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-700 font-[ubuntu]"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-[#EC9105] hover:text-[#d47f04] font-[ubuntu]"
                >
                  Forgot password?
                </a>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#EC9105] to-[#ffb74d] text-white font-bold py-3 px-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:opacity-90"
            >
              Log In
            </button>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500 font-[ubuntu]">
                  New to Travel?
                </span>
              </div>
            </div>

            <div className="mt-6 text-center">
              <a
                href="/signup"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-all font-[ubuntu]"
              >
                Create your Travel account
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
