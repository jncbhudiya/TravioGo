import Leftwhitearrow from "@/app/icon/-leftwhitearrow/page";
import Rightwhitearrow from "@/app/icon/rightwhitearrow/page";
import React from "react";


function Navbar() {
  return (
    <div className="w-full h-[900px] sm:h-[750px] relative overflow-hidden text-white">
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full brightness-50 bg-cover bg-center  bg-[url('/images/3ce43c80fb00237c348c1fac0865ca7dda7999f2.jpg')] "

        ></div>
      </div>

      <div className="relative z-10">
        <nav className="max-w-[1320px] h-[80px] mx-auto flex items-center justify-between px-4">
          <img
            src="/images/Logo.png"
            alt="Logo"
            className="w-[138px] h-[40px]"
          />
          <ul className="hidden md:flex gap-8 text-sm font-medium">
            <li className="text-[#EC9105] cursor-pointer">Home</li>
            <li className="cursor-pointer">About Us</li>
            <li className="cursor-pointer">Destinations</li>
            <li className="cursor-pointer">Tours</li>
            <li className="cursor-pointer">Contact Us</li>
          </ul>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <span className="cursor-pointer">USD</span>
            <button className="hover:underline">Sign up</button>
            <button className="bg-[#EC9105] text-white px-4 py-1 rounded-full">
              Log in
            </button>
          </div>
        </nav>

        <div className="mt-[260px]  px-4 text-center flex flex-col gap-6">
          <p className="text-lg md:text-xl font-semibold opacity-75">
            Seamless Booking: 15,000+ Multi-Day Adventures Await
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">

            Await Your Exploration with <br />
            <span className="text-white">Tailored Tours & Packages</span>
          </h1>


          
        </div>
      </div>
    </div>
  );
}

export default Navbar;
