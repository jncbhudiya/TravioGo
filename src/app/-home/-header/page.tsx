import { CloseIcon, HamburgerIocn } from "@/app/icon/page";
import React, { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      {" "}
      <div className="relative z-10">
        <nav className="max-w-[1320px] h-[80px] mx-auto flex items-center justify-between px-4 mt-10 relative z-50">
          <img
            src="/images/Logo.png"
            alt="Logo"
            className="w-[138px] h-[40px]"
          />

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <HamburgerIocn />
            </button>
          </div>

          <ul className="hidden md:flex gap-8 text-sm font-medium">
            <li className="text-[#EC9105] cursor-pointer hover:text-gray-900 transition-colors duration-200">
              Home
            </li>
            <li className="cursor-pointer hover:text-[#EC9105] transition-colors duration-200">
              About Us
            </li>
            <li className="cursor-pointer hover:text-[#EC9105] transition-colors duration-200">
              Destinations
            </li>
            <li className="cursor-pointer hover:text-[#EC9105] transition-colors duration-200">
              Tours
            </li>
            <li className="cursor-pointer hover:text-[#EC9105] transition-colors duration-200">
              Contact Us
            </li>
          </ul>

          <div className="hidden md:flex items-center gap-6 text-sm">
            <span className="cursor-pointer hover:text-[#EC9105] transition-colors duration-200">
              USD
            </span>
            <button className="hover:underline text-white hover:text-[#EC9105] transition-colors duration-200">
              Sign up
            </button>
            <button className="bg-[#EC9105] text-white px-4 py-2 rounded-full shadow-md hover:bg-[#d47f04] transition-colors duration-200">
              Log in
            </button>
          </div>

          {/* Mobile Menu Overlay  */}
          {isMenuOpen && (
            <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center md:hidden">
              <button
                onClick={toggleMenu}
                className="absolute top-6 right-4 text-gray-800 focus:outline-none"
              >
                <CloseIcon />
              </button>

              {/* Mobile Navigation Links */}
              <ul className="flex flex-col gap-6 text-xl font-medium mb-8">
                <li
                  className="text-[#EC9105] cursor-pointer hover:text-gray-900 transition-colors duration-200"
                  onClick={toggleMenu}
                >
                  Home
                </li>
                <li
                  className="cursor-pointer text-[#EC9105] hover:text-[#EC9105] transition-colors duration-200"
                  onClick={toggleMenu}
                >
                  About Us
                </li>
                <li
                  className="cursor-pointer text-[#EC9105] hover:text-[#EC9105] transition-colors duration-200"
                  onClick={toggleMenu}
                >
                  Destinations
                </li>
                <li
                  className="cursor-pointer text-[#EC9105] hover:text-[#EC9105] transition-colors duration-200"
                  onClick={toggleMenu}
                >
                  Tours
                </li>
                <li
                  className="cursor-pointer text-[#EC9105] hover:text-[#EC9105] transition-colors duration-200"
                  onClick={toggleMenu}
                >
                  Contact Us
                </li>
              </ul>

              {/* Mobile Buttons */}
              <div className="flex flex-col text-[#EC9105]  gap-4 text-lg">
                <span
                  className="cursor-pointer hover:text-[#EC9105] transition-colors duration-200"
                  onClick={toggleMenu}
                >
                  USD
                </span>
                <span
                  className="cursor-pointer hover:text-[#EC9105] transition-colors duration-200"
                  onClick={toggleMenu}
                >
                  Sign Up
                </span>
                <button
                  className="bg-[#EC9105] text-white px-6 py-3 rounded-full shadow-md hover:bg-[#d47f04] transition-colors duration-200"
                  onClick={toggleMenu}
                >
                  Log in
                </button>
              </div>
            </div>
          )}
        </nav>

        <div className="mt-[220px]  px-4 text-center flex flex-col gap-4">
          <p className="text-lg md:text-xl font-semibold opacity-75">
            Seamless Booking: 15,000+ Multi-Day Adventures Await
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-wider">
            Await Your Exploration with <br />
            <span className="text-white">Tailored Tours & Packages</span>
          </h1>
        </div>
      </div>
    </>
  );
}

export default Header;
