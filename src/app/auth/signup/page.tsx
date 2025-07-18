"use client";

import React, { useState } from "react";
import { auth, googleProvider } from "../../../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import { Email, Google, Lock, User } from "../../../assets/icon/page";
import Link from "next/link";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { setUser, setError, setLoading } from "../../../store/authslice";
import { InputField } from "../../../commoncomponent/InputField";
import toast from "react-hot-toast";
import Image from "next/image";
import { FirebaseError } from "firebase/app";

function Signup() {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const validateForm = () => {
    if (password !== confirmPassword) return "Passwords do not match";
    if (password.length < 8) return "Password must be at least 8 characters";
    if (!email.includes("@") || !email.includes("."))
      return "Please enter a valid email address";
    return null;
  };
  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setError(""));
    dispatch(setLoading(true));

    const validationError = validateForm();
    if (validationError) {
      toast.error(validationError);
      dispatch(setLoading(false));
      return;
    }

    const toastId = toast.loading("Creating account...");

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (userCredential.user) {
        await updateProfile(userCredential.user, { displayName: username });
        await userCredential.user.reload();

        dispatch(setUser(userCredential.user));
        toast.success("Account created successfully!", { id: toastId });
        router.push("/");
      }
   } catch (error: unknown) {
  let errorMessage = "Signup failed. Please try again.";
  if (error instanceof FirebaseError) {
    switch (error.code) {
      case "auth/email-already-in-use":
        errorMessage = "Email is already in use.";
        break;
      case "auth/invalid-email":
        errorMessage = "Invalid email address.";
        break;
      case "auth/operation-not-allowed":
        errorMessage = "Email/password accounts are not enabled.";
        break;
      case "auth/weak-password":
        errorMessage = "Password is too weak.";
        break;
      default:
        errorMessage = error.message;
    }
  }
  toast.error(errorMessage, { id: toastId });
  dispatch(setError(errorMessage));
  console.error("Signup Error:", error);
}
 finally {
      dispatch(setLoading(false));
    }
  };

  const handleGoogleSignup = async () => {
    dispatch(setError(""));
    dispatch(setLoading(true));
    const toastId = toast.loading("Signing up with Google...");

    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      dispatch(
        setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
        })
      );

      toast.success("Google signup successful!", { id: toastId });
      router.push("/");
    } catch (error: unknown) {
  let errorMessage = "Google signup failed. Please try again.";

  if (error instanceof FirebaseError) {
    switch (error.code) {
      case "auth/account-exists-with-different-credential":
        errorMessage = "Account exists with different sign-in method.";
        break;
      case "auth/popup-closed-by-user":
        errorMessage = "Signup popup was closed.";
        break;
      default:
        errorMessage = error.message || errorMessage;
    }
  } else if (error instanceof Error) {
    errorMessage = error.message;
  }

  toast.error(errorMessage, { id: toastId });
  dispatch(setError(errorMessage));
  console.error("Google Signup Error:", error);
} finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FEF5E6] p-4">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden w-full max-w-md">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#EC9105] to-[#FBBC05]  p-6 text-center">
          <div className="flex justify-center mb-4">
            <Link href="/" passHref>
              <Image
                src="/images/Logo.png"
                alt="Travel Logo"
                width={160}
                height={60}
                className="object-contain"
              />
            </Link>
          </div>
          <h1 className="text-3xl tracking-wide font-extrabold text-white font-[ubuntu]">
            Create Your Travel Account
          </h1>
        </div>

        {/* Form */}
        <div className="p-8">
          <form onSubmit={handleSignup} className="space-y-5">
            <InputField
              label="Username"
              type="text"
              icon={<User />}
              value={username}
              onChange={setUsername}
              placeholder="e.g. travel_lover"
            />

            {/* Email */}
            <InputField
              label="Email"
              type="email"
              icon={<Email />}
              value={email}
              onChange={setEmail}
              placeholder="your@email.com"
            />

            {/* Password */}
            <InputField
              label="Password"
              type="password"
              icon={<Lock />}
              value={password}
              onChange={setPassword}
              placeholder="•••••••"
            />

            {/* Confirm Password */}
            <InputField
              label="Confirm Password"
              type="password"
              value={confirmPassword}
              onChange={setConfirmPassword}
              placeholder="•••••••"
            />

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#EC9105] to-[#FBBC05]  text-white font-bold py-3 px-4 rounded-full shadow-md hover:shadow-xl transition-all duration-300 hover:opacity-90"
            >
              Create Account
            </button>

            {/* OR Divider */}
            <div className="flex items-center my-3">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="mx-2 text-gray-500 text-sm font-medium">OR</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            {/* Google Signup */}
            <button
              type="button"
              onClick={handleGoogleSignup}
              className="w-full flex items-center justify-center gap-3 text-white bg-gradient-to-r from-[#EC9105] to-[#FBBC05] font-semibold py-3 px-4 rounded-full shadow hover:shadow-md transition duration-300"
            >
              <Google />
              <span>Sign up with Google</span>
            </button>
          </form>

          {/* Login Link */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600 font-[ubuntu]">
              Already have an account?{" "}
              <Link
                href="/auth/login"
                className="font-semibold text-[#EC9105] hover:text-[#d47f04] transition-colors"
              >
                Log In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
