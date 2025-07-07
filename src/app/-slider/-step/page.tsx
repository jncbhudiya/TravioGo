import {
  Calender,
  CalenderWhiteIcon,
  FaceIcon,
  FaceWhiteIcon,
  LoactionIcon,
  SearchPinkIcon,
  WorldIcon,
  WorldWhiteIcon,
} from "@/app/icon/page";
import React from "react";

function Step() {
  return (
    <>
      <div className=" bg-white flex  py-16 px-6 md:px-54 mt-400px p-10">
        {/* Left Section: Steps */}
        <div className="lg:w-1/2 p-8 sm:p-12 flex flex-col ">
          <p className="text-base font-semibold text-[#464549] mb-2">
            Hassle-Free
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-8 leading-tight">
            3 Simple Steps to Your Next Adventure
          </h1>

          <div className="flex items-start mb-8">
            <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-[#FF487F] rounded-full flex items-center justify-center mr-4 shadow-md">
              <WorldWhiteIcon />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
                Search Destination
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Explore the vibrant culture or unwind on its stunning beaches.
              </p>
            </div>
          </div>

          <div className="flex items-start mb-8">
            <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-[#6344FE] rounded-full flex items-center justify-center mr-4 shadow-md">
              <CalenderWhiteIcon />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
                Choose Date
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Pick your perfect escape! Choose your travel dates and explore
                our amazing destinations.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-[#EFCB0D] rounded-full flex items-center justify-center mr-4 shadow-md">
              <FaceWhiteIcon />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
                Tour Type
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Discover extraordinary destinations, immerse yourself in new
                cultures, and create lifelong memories.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 relative p-8 sm:p-12 flex items-center justify-center rounded-b-3xl lg:rounded-l-none lg:rounded-r-3xl">
          <div className="relative w-full max-w-md lg:max-w-none">
            <img
              src="images/stepgirl.jpg"
              alt="Woman with luggage"
              className="w-[645px] h-[489px] top-[60px] rounded-3xl shadow-2xl object-cover"
            />

            <div className="absolute border-15 -top-10 w-48 h-32 sm:w-64 sm:h-40 rounded-3xl overflow-hidden shadow-xl border-4 border-white">
              <img
                src="images/hillstep.jpg"
                alt="Mountains"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>

            <div className="absolute flex-col -bottom-10 left-6 top-[330px] bg-white gap-[12px] p-[12px] rounded-2xl w-[140px] h-[140px] flex items-center space-x-2 transform ">
              <div className="w-[48px] h-[48px] p-[12px] bg-orange-100 rounded-full flex items-center justify-center">
                <LoactionIcon />
              </div>
              <div>
                <p className="text-xl items-center justify-center font-bold text-gray-900">72+</p>
                <p className="text-sm text-gray-600">Countries</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Step;
