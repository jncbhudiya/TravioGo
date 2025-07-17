"use client";
import {
  AboutIcon,
  CloseIcon,
  ContactUsIcon,
  DestinationsIcon,
  DollarIocn,
  Edit,
  HamburgerIocn,
  HomeIcon,
  LoginIcon,
  Logout,
  ToursIcon,
  User,
  UserAddIcon,
} from "@/assets/icon/page";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { updateProfile } from "firebase/auth";

import { auth } from "@/config/firebase";
import toast from "react-hot-toast";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [user, setUser] = useState<any | null>(null);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const profileRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setUserEmail(currentUser?.email ?? null);
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(e.target as Node)
      ) {
        setIsProfileOpen(false);
      }
    };
    if (isProfileOpen)
      document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isProfileOpen]);

  const handleLogout = () => {
    signOut(auth);
    setUser(null);
  };

  const handleProfileUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    const newName = nameRef.current?.value;
    if (!newName || !auth.currentUser) return;
    try {
      await updateProfile(auth.currentUser, { displayName: newName });
      setUser({ ...auth.currentUser });
      setIsEditOpen(false);
    } catch (err) {
       toast.error("Update failed");
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };
  return (
    <>
      <div className="relative z-10">
        <div className="header-container max-w-[1320px] mx-auto px-4 md:px-10 lg:px-16 xl:px-0 space-y-4 mb-10">
          <nav className="header-nav max-w-[1320px] h-[80px] mx-auto flex items-center justify-between mt-[20px] relative z-50 gap-4 lg:gap-8 xl:gap-10">
            <img
              src="/images/Logo.png"
              alt="Logo"
              className="w-[138px] h-[40px] z-[9999]"
            />
            <div className="below-800:flex hidden items-center">
              <button onClick={toggleMenu} className="text-[#EC9105]">
                <HamburgerIocn />
              </button>
            </div>

            <ul className="below-800:hidden flex h-[24px] w-[452px] ml-[78px] gap-[30px] text-sm font-medium">
              <li className=" w-[45px] font-medium font-[ubuntu] cursor-pointer  hover:text-[#EC9105]  transition-colors duration-200">
                Home
              </li>
              <li className="cursor-pointer w-[69px] font-[ubuntu] font-medium hover:text-[#EC9105] transition-colors duration-200">
                About Us
              </li>
              <li className="cursor-pointer w-[95px] font-[ubuntu] font-medium hover:text-[#EC9105] transition-colors duration-200">
                Destinations
              </li>
              <li className="cursor-pointer w-[42px]  font-[ubuntu] font-medium hover:text-[#EC9105] transition-colors duration-200">
                Tours
              </li>
              <li className="cursor-pointer w-[81px] h-[24px] font-[ubuntu]  font-medium hover:text-[#EC9105] transition-colors duration-200">
                Contact Us
              </li>
            </ul>

            <div className="below-800:hidden flex items-center gap-[30px] text-sm">
              <span className="cursor-pointer font-[ubuntu] hover:text-[#EC9105] transition-colors duration-200">
                USD
              </span>
              {user ? (
                <div className="relative">
                  <button
                    onClick={toggleProfile}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <div className="w-10 h-10 bg-[#EC9105] text-white font-[ubuntu] flex items-center justify-center rounded-full text-lg uppercase">
                      {user.displayName?.slice(0, 2) || userEmail?.slice(0, 1)}
                    </div>
                  </button>

                  {isProfileOpen && (
                    <div
                      ref={profileRef}
                      className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border-2 border-[#EC9105]"
                    >
                      <div className="px-4 py-2 border-b border-[#EC9105]">
                        <p className="flex gap-2 text-sm font-[ubuntu] text-gray-700">
                          <User /> {user.displayName || userEmail}
                        </p>
                      </div>
                      <button
                        onClick={() => setIsEditOpen(true)}
                        className="flex gap-2 w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-[ubuntu]"
                      >
                        <Edit />
                        Edit Profile
                      </button>
                      <button
                        onClick={handleLogout}
                        className="flex gap-2 w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-[ubuntu]"
                      >
                        <Logout /> Log Out
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <>
                  <Link href="auth/signup" passHref>
                    <button className="font-[ubuntu] hover:underline text-white hover:text-[#EC9105] transition-colors duration-200">
                      Sign up
                    </button>
                  </Link>
                  <Link href="auth/login" passHref>
                    <button className="bg-[#EC9105] font-[ubuntu] text-white px-4 py-2 rounded-full shadow-md hover:bg-[#d47f04] transition-colors duration-200">
                      Log in
                    </button>
                  </Link>
                </>
              )}
            </div>
            {/* Mobile Menu Overlay  */}
            {isMenuOpen && (
              <div className="fixed inset-0 z-50">
                {/* Overlay */}
                <div
                  className="absolute inset-0 w-[0px] bg-black bg-opacity-50 backdrop-blur-sm"
                  onClick={toggleMenu}
                />

                {/* Menu Container */}
                <div className="absolute inset-y-0 right-0 w-[300px] bg-gradient-to-br from-amber-400 to-amber-600 p-1 shadow-xl animate-slide-in-right">
                  <div className="relative h-full w-full bg-white rounded-l-lg overflow-hidden flex flex-col">
                    {/* Close Button */}
                    <button
                      onClick={toggleMenu}
                      className="absolute top-5 right-5 p-2 rounded-full bg-amber-50 text-amber-600 hover:bg-amber-100 transition-all duration-300 shadow-sm"
                    >
                      <CloseIcon />
                    </button>

                    {/* Menu Items */}
                    <ul className="flex flex-col gap-1 pt-20 px-4">
                      {[
                        { label: "Home", icon: <HomeIcon />, href: "/" },
                        {
                          label: "About Us",
                          icon: <AboutIcon />,
                          href: "/about",
                        },
                        {
                          label: "Destinations",
                          icon: <DestinationsIcon />,
                          href: "/destinations",
                        },
                        { label: "Tours", icon: <ToursIcon />, href: "/tours" },
                        {
                          label: "Contact Us",
                          icon: <ContactUsIcon />,
                          href: "/contact",
                        },
                      ].map(({ label, icon, href }) => (
                        <Link href={href} passHref key={label}>
                          <li
                            onClick={toggleMenu}
                            className="cursor-pointer font-[ubuntu] gap-4 flex items-center py-4 px-4 rounded-lg transition-all duration-300 hover:bg-amber-50 hover:text-amber-700 text-gray-700 hover:pl-6"
                          >
                            <span className="text-amber-500">{icon}</span>
                            <span className="font-medium">{label}</span>
                          </li>
                        </Link>
                      ))}
                      <div
                        onClick={() => setIsEditOpen(true)}
                        className="flex gap-4 w-full text-left px-4 py-2  font-medium text-sm text-gray-700 hover:bg-gray-100 font-[ubuntu]"
                      >
                        <Edit />
                        Edit Profile
                      </div>
                    </ul>

                    {/* User Section */}
                    <div className="mt-auto p-6 border-t border-amber-100 bg-gradient-to-t from-amber-50 to-white">
                      {/* Currency Selector */}
                      <div className="flex justify-between items-center mb-6">
                        <button className="flex items-center gap-2 font-[ubuntu] text-amber-700 hover:text-amber-900 transition-colors">
                          <DollarIocn />
                          USD
                        </button>

                        <span className="h-6 w-px bg-amber-300"></span>

                        {user ? (
                          <button
                            onClick={handleLogout}
                            className="flex items-center gap-2 font-[ubuntu] text-amber-700 hover:text-amber-900 transition-colors"
                          >
                            <Logout />
                            Log Out
                          </button>
                        ) : (
                          <Link href="auth/signup" passHref>
                            <button
                              onClick={toggleMenu}
                              className="flex items-center gap-2 font-[ubuntu] text-amber-700 hover:text-amber-900 transition-colors"
                            >
                              <UserAddIcon />
                              Sign Up
                            </button>
                          </Link>
                        )}
                      </div>

                      {/* User Profile or Login */}
                      {user ? (
                        <div className="flex items-center gap-4 p-4 bg-amber-50 rounded-xl border border-amber-200">
                          <div className="relative">
                            <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-amber-700 text-white font-[ubuntu] flex items-center justify-center rounded-full text-lg uppercase shadow-md">
                              {user.displayName?.slice(0, 2) ||
                                userEmail?.slice(0, 1)}
                            </div>
                            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-700 rounded-full border-2 border-white"></div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-[ubuntu] font-medium text-gray-800 truncate">
                              {user.displayName || "Welcome To Travigo"}
                            </p>
                          </div>
                        </div>
                      ) : (
                        <Link href="auth/login" passHref>
                          <button
                            className="w-full py-4 px-6 font-[ubuntu] bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold rounded-xl shadow-lg hover:shadow-amber-300/50 hover:from-amber-600 hover:to-amber-700 transition-all duration-300 flex items-center justify-center gap-2"
                            onClick={toggleMenu}
                          >
                            <LoginIcon />
                            Log in
                          </button>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </nav>
        </div>

        <div className="mt-55 sm:mt-30 md:mt-40 lg:mt-58 font-[ubuntu] text-base/8 leading-8 tracking-wide items-center justify-center px-4 text-center flex flex-col gap-[24px]">
          <p className="text-lg md:text-xl font-semibold opacity-75">
            Seamless Booking: 15,000+ Multi-Day Adventures Await
          </p>

          <h1 className="text-4xl font-[ubuntu] md:text-[70px] font-bold leading-tight">
            Await Your Exploration with <br />
            <span className="text-white">Tailored Tours & Packages</span>
          </h1>
        </div>
      </div>
      {isEditOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center  bg-opacity-50">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6 relative border border-[#EC9105]">
            <button
              onClick={() => setIsEditOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
            >
              <CloseIcon />
            </button>

            <h2 className="text-xl font-bold mb-4 font-[ubuntu]">
              Edit Profile
            </h2>
            <form className="space-y-4" onSubmit={handleProfileUpdate}>
              <div>
                <label className="block text-sm font-[ubuntu] text-gray-600 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  ref={nameRef}
                  className="w-full border text-black border-gray-300 rounded-md px-4 py-2 font-[ubuntu] focus:ring-[#EC9105] focus:outline-none"
                  placeholder="Enter your name"
                  defaultValue={user?.displayName || ""}
                />
              </div>

              <div>
                <label className="block text-sm font-[ubuntu] text-gray-600 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  disabled
                  value={userEmail || ""}
                  className="w-full border border-gray-200 bg-gray-100 text-gray-500 rounded-md px-4 py-2 font-[ubuntu] cursor-not-allowed"
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-[#EC9105] to-[#FBBC05] text-white font-bold py-2 px-6 rounded-md hover:opacity-90 font-[ubuntu]"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
