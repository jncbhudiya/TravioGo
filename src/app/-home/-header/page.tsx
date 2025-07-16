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
              <button className=" font-[ubuntu] hover:underline  text-white hover:text-[#EC9105] transition-colors duration-200">
                Sign up
              </button>
              <button className="bg-[#EC9105] font-[ubuntu] text-white px-4 py-2 rounded-full shadow-md hover:bg-[#d47f04] transition-colors duration-200">
                Log in
              </button>
            </div>
            {/* Mobile Menu Overlay  */}
            {isMenuOpen && (
              <div className="fixed inset-y-0 right-0 z-50 w-[280px] bg-white p-6 shadow-lg  animate-slide-in-right">
                <div
                  className="flex-1 bg-black bg-opacity-50"
                  onClick={toggleMenu}
                />

                <div className="w-[280px] bg-white h-full p-6  flex flex-col justify-between animate-slide-in-right">
                  <button
                    onClick={toggleMenu}
                    className="absolute top-4 right-4 text-[#EC9105]  hover:text-black transition duration-200"
                  >
                    <CloseIcon />
                  </button>

                  <ul className="flex flex-col gap-10  text-lg font-medium text-[#EC9105] mt-12">
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

                  <div className="flex flex-col gap-4 text-[#EC9105] text-base mb-18">
                    <div className="flex  gap-12">
                      <span
                        className="cursor-pointer hover:text-gray-800"
                        onClick={toggleMenu}
                      >
                        USD
                      </span>
                      |
                      <span
                        className="cursor-pointer hover:text-gray-800"
                        onClick={toggleMenu}
                      >
                        Sign Up
                      </span>
                    </div>
                    <button
                      className="bg-[#EC9105] text-white px-4 py-2  mr-5 rounded-full shadow hover:bg-[#d47f04]"
                      onClick={toggleMenu}
                    >
                      Log in
                    </button>
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
