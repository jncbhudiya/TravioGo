"use client";
import { Email, LeftArrow, LeftOrangeArrow, Lock } from "@/assets/icon/page";
import { auth } from "../../../config/firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleReset = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Password reset link sent! Check your email.");
      toast.success("Password reset link sent! Check your email.");
      setEmail("");
    } catch (err: any) {
      if (err.code === "auth/user-not-found") {
        setError("No account found with this email.");
        toast.error("No account found with this email.");
      } else if (err.code === "auth/invalid-email") {
        setError("Invalid email address.");
        toast.error("Invalid email address.");
      } else {
        setError("Something went wrong. Please try again.");
        toast.error("Something went wrong. Try again.");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br bg-[#FEF5E6] p-6">
      <div className="bg-white rounded-3xl shadow-xl w-full max-w-md p-8">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-[#d47f04] mt-2 font-[ubuntu]">
            Reset Password
          </h1>
          <p className="text-sm text-gray-500 mt-1 font-[ubuntu]">
            We'll send you a link to reset your password
          </p>
        </div>

        <form onSubmit={handleReset} className="space-y-4">
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full pl-3 pr-4 py-2 font-[ubuntu] text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EC9105] outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#EC9105] font-[ubuntu] text-white py-2 rounded-lg hover:bg-[#d47f04] transition-colors"
          >
            Send Reset Link
          </button>
        </form>

        {message && (
          <p className="text-green-600 text-center mt-4">{message}</p>
        )}
        {error && <p className="text-red-600 text-center mt-4">{error}</p>}

        <div className="flex justify-center mt-6">
          <button
            onClick={() => router.push("/auth/login")}
            className="flex items-center gap-2 text-sm font-[ubuntu] text-[#EC9105] hover:text-[#d47f04] transition-colors"
          >
            <div className="group w-[32px] h-[32px] border border-[#EC9105] rounded-full flex items-center justify-center shadow hover:bg-[#EC9105]/10 transition-all duration-200">
              <LeftOrangeArrow  />
            </div>
            <span className="mt-[2px]">Back to Login</span>
          </button>
        </div>
      </div>
    </div>
  );
}
