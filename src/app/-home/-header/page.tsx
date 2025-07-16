"use client";
import {
  AboutIcon,
  CloseIcon,
  ContactUsIcon,
  DestinationsIcon,
  HamburgerIocn,
  HomeIcon,
  Logout,
  ToursIcon,
  User,
} from "@/app/icon/page";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../config/firebase";
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [user, setUser] = useState<any | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setUserEmail(user.email ?? null);
      } else {
        setUser(null);
        setUserEmail(null);
      }
    });

    return () => unsubscribe();
  }, []);
  const handleLogout = () => {
    signOut(auth);
    setUser(null);
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
              className="w-[138px] h-[40px]"
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
                      {user.displayName?.slice(0, 2) || userEmail?.slice(0,1)}
                    </div>
                  </button>

                  {isProfileOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border-2 border-[#EC9105]">
                      <div className="px-4 py-2 border-b border-[#EC9105]">
                        <p className="flex gap-2 text-sm font-[ubuntu] text-gray-700">
                          <User /> {user.displayName || "User"}
                        </p>
                      </div>

                      <button
                        onClick={handleLogout}
                        className="flex gap-2  w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-[ubuntu]"
                      >
                        <Logout /> Log Out
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <>
                  <Link href="/signup" passHref>
                    <button className="font-[ubuntu] hover:underline text-white hover:text-[#EC9105] transition-colors duration-200">
                      Sign up
                    </button>
                  </Link>
                  <Link href="/login" passHref>
                    <button className="bg-[#EC9105] font-[ubuntu] text-white px-4 py-2 rounded-full shadow-md hover:bg-[#d47f04] transition-colors duration-200">
                      Log in
                    </button>
                  </Link>
                </>
              )}
            </div>
            {/* Mobile Menu Overlay  */}
            {isMenuOpen && (
              <div className="fixed inset-y-0 right-0 z-50 w-[280px]  bg-white p-6 shadow-lg  animate-slide-in-right overflow-hidden">
                <div
                  className="flex-1 bg-black bg-opacity-50"
                  onClick={toggleMenu}
                />

                <div className="relative w-[280px] h-full flex flex-col justify-between animate-slide-in-right p-[2px] bg-gradient-to-r from-amber-400 to-amber-800 rounded-lg">
                  <div className="bg-white h-full w-full rounded-[calc(0.5rem-2px)] p-6 flex flex-col justify-between">
                    <button
                      onClick={toggleMenu}
                      className="absolute top-4 right-8 text-[#EC9105] hover:text-amber-600 transition duration-200"
                    >
                      <CloseIcon />
                    </button>

                    <ul className="flex flex-col gap-6 text-lg font-medium text-[#EC9105] mt-12">
                      {[
                        {
                          label: "Home",
                          icon: <HomeIcon />,
                        },
                        {
                          label: "About Us",
                          icon: <AboutIcon />,
                        },
                        {
                          label: "Destinations",
                          icon: <DestinationsIcon />,
                        },
                        {
                          label: "Tours",
                          icon: <ToursIcon />,
                        },
                        {
                          label: "Contact Us",
                          icon: <ContactUsIcon />,
                        },
                      ].map(({ label, icon }) => (
                        <li
                          key={label}
                          onClick={toggleMenu}
                          className="cursor-pointer font-[ubuntu] gap-4 flex items-center transition duration-200 border-b border-amber-100 py-3 hover:bg-amber-50 px-2 rounded-md"
                        >
                          {icon}
                          {label}
                        </li>
                      ))}
                    </ul>

                    <div className="p-6 border-t border-amber-100">
                      <div className="flex justify-between items-center mb-5 text-[#EC9105]">
                        <button className="font-[ubuntu] hover:text-amber-900 transition-colors">
                          USD
                        </button>
                        <span className="h-6 w-px bg-amber-300"></span>
                        <button className="font-[ubuntu] hover:text-amber-900 transition-colors">
                          Sign Up
                        </button>
                      </div>
                      <button
                        className="w-full py-3 px-6 font-[ubuntu] bg-gradient-to-r from-amber-500 to-amber-600 text-white font-medium rounded-full shadow-lg hover:shadow-amber-200/50 hover:from-amber-600 hover:to-amber-700 transition-all duration-300"
                        onClick={toggleMenu}
                      >
                        Log in
                      </button>
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
    </>
  );
}

export default Header;
