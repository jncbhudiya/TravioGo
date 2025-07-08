"use client";
import {
  AboutIcon,
  CloseIcon,
  ContactUsIcon,
  DestinationsIcon,
  HamburgerIocn,
  HomeIcon,
  ToursIcon,
} from "@/app/icon/page";
import React, { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      {" "}
      <div className="relative z-10 ">
        <nav className="max-w-[1320px] h-[80px] mx-auto flex items-center justify-between px-4 mt-[24px] ml-[204px] relative z-50">
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

          <ul className="hidden h-[24px] w-[452px] ml-[270px] gap-[30px]  md:flex text-sm font-medium">
            <li className="text-[#EC9105]  w-[45px] font-medium cursor-pointer  transition-colors duration-200">
              Home
            </li>
            <li className="cursor-pointer w-[69px]  font-medium hover:text-[#EC9105] transition-colors duration-200">
              About Us
            </li>
            <li className="cursor-pointer w-[95px]  font-medium hover:text-[#EC9105] transition-colors duration-200">
              Destinations
            </li>
            <li className="cursor-pointer w-[42px]   font-medium hover:text-[#EC9105] transition-colors duration-200">
              Tours
            </li>
            <li className="cursor-pointer w-[81px] h-[24px]  font-medium hover:text-[#EC9105] transition-colors duration-200">
              Contact Us
            </li>
          </ul>

          <div className="hidden  md:flex items-center  gap-[30px] text-sm">
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
            <div className="fixed inset-y-0 right-0 z-50 w-[280px] bg-white p-6 shadow-lg md:hidden animate-slide-in-right">
              <div
                className="flex-1 bg-black bg-opacity-50"
                onClick={toggleMenu}
              />

              <div className="w-[280px] bg-white h-full p-6 shadow-lg flex flex-col justify-between animate-slide-in-right">
                <button
                  onClick={toggleMenu}
                  className="absolute top-4 right-4 text-gray-600 hover:text-black transition duration-200"
                >
                  <CloseIcon />
                </button>

                <ul className="flex flex-col gap-15  text-lg font-medium text-[#EC9105] mt-12">
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
                      className="cursor-pointer hover:text-gray-800 gap-6 flex items-center transition duration-200"
                    >
                      {icon}
                      {label}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col gap-4 text-[#EC9105] text-base mt-10">
                  <span
                    className="cursor-pointer hover:text-gray-800"
                    onClick={toggleMenu}
                  >
                    USD
                  </span>
                  <span
                    className="cursor-pointer hover:text-gray-800"
                    onClick={toggleMenu}
                  >
                    Sign Up
                  </span>
                  <button
                    className="bg-[#EC9105] text-white px-4 py-2 rounded-full shadow hover:bg-[#d47f04]"
                    onClick={toggleMenu}
                  >
                    Log in
                  </button>
                </div>
              </div>
            </div>
          )}
        </nav>

        <div className="mt-[250px] text-base/8 leading-8 tracking-wide  items-center justify-center px-4 text-center flex flex-col gap-[24px]">
          <p className="text-lg md:text-xl font-semibold opacity-75 ">
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
