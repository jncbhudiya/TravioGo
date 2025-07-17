"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import Link from "next/link";
import { useSelector } from "react-redux";
import { auth } from "@/config/firebase";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { RootState } from "@/store";
import { clearError, setError, setLoading, setUser } from "@/store/authslice";
import { Email, Eye, EyeOff, Lock } from "@/assets/icon/page";
import { InputField } from "@/app/commoncomponent/InputField";
import toast from "react-hot-toast";

function Login() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const { error: errorMsg, isLoading } = useSelector(
    (state: RootState) => state.auth
  );

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(clearError());
    dispatch(setLoading(true));

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      dispatch(setUser(userCredential.user));
      toast.success("Logged in successfully!");

      router.push("/");
    } catch (error: any) {
      toast.error("Invalid credentials. Please try again or sign up.");
      console.error("Login Error:", error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FEF5E6] p-4">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden w-full max-w-md">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#EC9105] to-[#FBBC05] p-6 text-center">
          <div className="flex justify-center mb-2">
            <Link href="/" passHref>
              <img
                src="/images/Logo.png"
                alt="Travel Logo"
                className="w-40 h-auto object-contain"
              />
            </Link>
          </div>
          <h1 className="text-2xl font-bold text-white font-[ubuntu]">Login</h1>
        </div>

        {/* Form section */}
        <div className="p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Field */}
            <InputField
              label="Email Address"
              type="email"
              value={email}
              onChange={setEmail}
              placeholder="your@email.com"
              icon={<Email />}
            />

            {/* Password Field */}
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700 font-[ubuntu] mb-1">
                Password
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-amber-500">
                  <Lock />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-10 py-3 border border-gray-300 font-[ubuntu] text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-amber-500 hover:text-amber-700"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </button>
              </div>
            </div>

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between">
              <label className="flex items-center text-sm font-[ubuntu] text-gray-700">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-[#EC9105] focus:ring-[#EC9105] border-gray-300 rounded"
                />
                <span className="ml-2">Remember me</span>
              </label>

              <Link
                href="/auth/forgot-password"
                className="text-sm font-medium text-[#EC9105] hover:text-[#d47f04] font-[ubuntu]"
              >
                Forgot password?
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-[#EC9105] to-[#FBBC05] text-white font-bold py-3 px-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:opacity-90 disabled:opacity-50"
            >
              {isLoading ? "Logging in..." : "Log In"}
            </button>
          </form>

          {/* Divider */}
          <div className="mt-6 relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500 font-[ubuntu]">
                New to Travel?
              </span>
            </div>
          </div>

          {/* Signup Link */}
          <div className="mt-6 text-center">
            <Link
              href="/auth/signup"
              className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-full shadow-sm text-white bg-gradient-to-r from-[#EC9105] to-[#FBBC05] hover:shadow-md font-[ubuntu] transition-all"
            >
              Create your Travel account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
