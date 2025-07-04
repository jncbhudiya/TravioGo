"use client";

import {
  ActivityIcon,
  CarIcon,
  HeartIcon,
  HotelIcon,
  LeftArrow,
  PlaneIcon,
  RightBlackArrow,
  RightBlackSmallArrow,
} from "@/app/icon/page";
import React, { useRef } from "react";
import { tourPackages } from "./tourPackages";

function Populartour() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = 420 + 32;
      scrollContainerRef.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth", 
      });
    }
  };


  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = 420 + 32;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth", 
      });
    }
  };
 
  return (
    
    <div>

      <div className="min-h-screen  h-[830px] bg-[#FEF5E6] py-12 px-4 sm:px-6 lg:px-8 font-inter">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="flex flex-col w-[1320px] h-[104px] top-[2342px] left-[204px] md:flex-row justify-between items-start md:items-end mb-8 md:mb-12">
            <div className="w-[645px] h-[104px] gap-[8px]">
              <h2 className="text-4xl font-bold text-gray-900 mb-2 font-ubuntu leading-[48px] tracking-normal">
                Popular Tour Packages
              </h2>
              <p className="text-[#464549] font-medium font-ubuntu text-base/8 text-lg max-w-xl">
                Immerse yourself in diverse cultures, breathtaking landscapes,
                and unforgettable experiences. Your global adventure awaits.
              </p>
            </div>
            <div className="flex space-x-4 mt-6 md:mt-0">
              <button  onClick={scrollLeft}  className="p-3 rounded-full border-1 border-[#202326] shadow-md  focus:outline-none focus:ring-2  transition-colors">
                <LeftArrow />
              </button>
              <button   onClick={scrollRight} className="p-3 rounded-full border-1 border-[#202326] shadow-md  focus:outline-none focus:ring-2  transition-colors">
                <RightBlackArrow />
              </button>
            </div>
          </div>

          {/* Tour Packages Cards - Scrollable Container */}
          <div 
            className="flex  pb-6 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide gap-8"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {tourPackages.map((pkg) => (
              <div
                key={pkg.id}
                className="flex-none w-[420px] p-[16px] bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                style={{ scrollSnapAlign: "start" }}
              >
                <div className="relative w-full h-[295px]">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover rounded-xl"
                  />
                  <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md text-gray-700 hover:text-red-500 hover:bg-gray-100 transition-colors">
                    <HeartIcon />
                  </button>
                </div>

                <div className="p-4">
                  {" "}
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-semibold text-gray-900 leading-tight">
                      {pkg.title}
                    </h3>
                    <div className="flex items-center text-gray-700 text-sm font-medium">
                      {pkg.rating}
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm mb-4">{pkg.duration}</p>
                  <hr className="border-t border-gray-200 mb-4" />
                  <div className="grid grid-cols-4 gap-y-3 gap-x-2 text-gray-700 text-sm mb-5">
                    <div className="flex flex-col items-center text-center">
                      <PlaneIcon />
                      <span className="text-xs">{pkg.flights} Flights</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <HotelIcon />
                      <span className="text-xs">{pkg.hotels} Hotel</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <CarIcon />
                      <span className="text-xs">{pkg.transfers} Transfers</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <ActivityIcon />
                      <span className="text-xs">
                        {pkg.activities} Activities
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                    <p className="text-gray-900 text-xl font-bold font-ubuntu">
                      {pkg.price}{" "}
                      <span className="text-sm font-normal text-gray-500 font-inter">
                        /Per person
                      </span>
                    </p>
                    <button className=" h-[24px] w-[24px]  rounded-full text-[#5C788C] border-1 border-[#5C788C] focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors">
                      <RightBlackSmallArrow />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Populartour;
