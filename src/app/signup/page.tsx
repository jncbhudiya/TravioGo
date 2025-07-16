"use client";

import React, { useState } from "react";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useRouter } from "next/navigation";
import { Email, Lock, User } from "../icon/page";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const router = useRouter();

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMsg("");

    if (password !== confirmPassword) {
      setErrorMsg("Passwords do not match");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await updateProfile(userCredential.user, {
        displayName: username,
      });

      router.push("/");
    } catch (error: any) {
      setErrorMsg(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FEF5E6] p-4">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden w-full max-w-md">
        <div className="bg-gradient-to-r from-[#EC9105] to-[#ffb74d] p-6 text-center">
          <div className="flex justify-center mb-4">
            <img
              src="/images/Logo.png"
              alt="Travel Logo"
              className="w-40 h-auto object-contain"
            />
          </div>
          <h1 className="text-2xl font-bold text-white font-[ubuntu]">
            Sign Up
          </h1>
        </div>

        {/* Form section */}
        <div className="p-8">
          {errorMsg && (
            <div className="bg-red-50 border-l-4 border-red-500 p-3 mb-6 rounded">
              <p className="text-red-700 font-medium text-sm">{errorMsg}</p>
            </div>
          )}

          <form onSubmit={handleSignup} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 font-[ubuntu]">
                Username
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 font-[ubuntu] text-black rounded-md focus:outline-none focus:ring-2 focus:ring-[#EC9105]"
                  placeholder="e.g. travel_lover"
                  required
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <User />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 font-[ubuntu]">
                Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  autoComplete="username"
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
                  autoComplete="new-password"
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

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 font-[ubuntu]">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  autoComplete="new-password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 font-[ubuntu] text-black rounded-md focus:outline-none focus:ring-2 focus:ring-[#EC9105]"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#EC9105] to-[#ffb74d] text-white font-bold py-3 px-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:opacity-90"
            >
              Create Account
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600 font-[ubuntu]">
              Already have an account?{" "}
              <a
                href="/login"
                className="font-semibold text-[#EC9105] hover:text-[#d47f04] transition-colors"
              >
                Log In
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
