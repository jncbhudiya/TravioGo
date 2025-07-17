// pages/forgot-password.js
"use client"
import { auth } from "../config/firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  interface ForgotPasswordFormEvent extends React.FormEvent<HTMLFormElement> {}

  interface FirebaseError {
    message: string;
  }

  const handleReset = async (e: ForgotPasswordFormEvent) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Password reset email sent!");
    } catch (err) {
      const error = err as FirebaseError;
      setError(error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded shadow">
      <h1 className="text-xl font-bold mb-4">Reset Password</h1>
      <form onSubmit={handleReset}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="w-full p-2 border rounded mb-4"
        />
        <button
          type="submit"
          className="w-full bg-[#EC9105] text-white p-2 rounded hover:bg-[#d47f04]"
        >
          Send Reset Link
        </button>
      </form>

      {message && <p className="text-green-600 mt-4">{message}</p>}
      {error && <p className="text-red-600 mt-4">{error}</p>}

      <button
        onClick={() => router.push("/login")}
        className="mt-4 text-sm text-blue-500 hover:underline"
      >
        Back to Login
      </button>
    </div>
  );
}
