import React from "react";

function Navbar() {
  return (
    <div className="bg-cover bg-center min-h-screen text-white relative ">
      <nav className="w-[1320px] h-[80px]  mx-auto flex items-center justify-between px-4 rounded-md text-white">
        <div className="flex items-center">
          <img
            src="/images/Logo.png"
            alt="Logo"
            className="w-[138px] h-[40px]"
          />
        </div>

        <ul className="flex gap-[30px] text-sm font-medium h-[24px] items-center">
          <li className="text-orange-400 cursor-pointer">Home</li>
          <li className="cursor-pointer">About Us</li>
          <li className="cursor-pointer">Destinations</li>
          <li className="cursor-pointer">Tours</li>
          <li className="cursor-pointer">Contact Us</li>
        </ul>

        <div className="flex items-center gap-[30px] text-sm h-[46px]">
          <span className="cursor-pointer">USD</span>
          <button className="hover:underline">Sign up</button>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-1 rounded-full text-sm">
            Log in
          </button>
        </div>
      </nav>

      <div className="">
        <p className="text-sm md:text-base text-white font-medium "> Seamless Booking: 15,000+ Multi-Day Adventures Await</p>
      </div>




      {/* <div className="text-center mt-20 md:mt-75 px-4 w-[1017px] h-[204px] top-[348px] left-[355px] gap-[24px]">
        <p className="text-sm md:text-base text-white font-medium font-semibold">
          Seamless Booking: 15,000+ Multi-Day Adventures Await
        </p>
        <h1 className="w-[1632px] h-[57.68] text-3xl md:text-5xl font-bold leading-tight mt-2">
          Await Your Exploration with <br />
          <span className="text-white">Tailored Tours & Packages</span>
        </h1>
      </div> */}
    </div>
  );
}

export default Navbar;
