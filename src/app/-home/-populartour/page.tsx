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
  StarIcon,
} from "@/app/icon/page";
import React, { useRef } from "react";
import { tourPackages } from "./tourPackages";

function Populartour() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="bg-[#FEF5E6] py-16 px-6 md:px-14 lg:px-[204px]">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row w-full max-w-[1320px] mx-auto justify-between items-start md:items-end mb-10 md:mb-12 gap-6">
          <div className="w-full md:max-w-[645px] space-y-2">
            <h2 className="text-2xl md:text-[40px] font-bold text-[#2D2C2F] font-ubuntu leading-[48px] tracking-normal">
              Popular Tour Packages
            </h2>
            <p className="text-[#464549] text-sm md:text-[16px] font-medium font-ubuntu leading-[24px]">
              Immerse yourself in diverse cultures, breathtaking landscapes, and
              unforgettable experiences. Your global adventure awaits.
            </p>
          </div>

          <div className="flex gap-4 mb-8 mr-2.5">
            <button
              onClick={scrollLeft}
              className="w-[38px] h-[38px] p-2 border border-[#202326] rounded-full flex items-center justify-center shadow-md"
            >
              <LeftArrow />
            </button>
            <button
              onClick={scrollRight}
              className="w-[38px] h-[38px] p-2 border border-[#202326] rounded-full flex items-center justify-center shadow-md"
            >
              <RightBlackArrow />
            </button>
          </div>
        </div>

        {/* Cards Scrollable Container */}
        <div
          className="flex w-full max-w-[1320px] mx-auto h-[544px] overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar gap-6 pb-4"
          ref={scrollRef}
        >
          <div className="flex gap-[30px] snap-x snap-mandatory w-max">
            {tourPackages.map((pkg) => (
              <div
                key={pkg.id}
                className="flex-none w-[90vw] sm:w-[340px] md:w-[380px] lg:w-[420px] h-auto bg-white rounded-[30px] p-[16px] snap-start transition-shadow duration-300"
              >
                {/* Image */}
                <div className="relative w-full aspect-[388/295] mb-[12px]">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover rounded-[14px]"
                  />
                  <button className="absolute h-[30px] w-[30px] top-4 right-4 p-1.5 bg-white rounded-full shadow-md text-gray-700 hover:text-red-500 hover:bg-gray-100 transition-colors">
                    <HeartIcon />
                  </button>
                </div>

                {/* Tour Info */}
                <div className="space-y-[12px] w-full border-b  border-[#D8E0E6]     pb-4">
                  <div className="flex justify-between items-start border-[#D8E0E6]  border-b pb-2.5 ">
                    <div className="flex flex-col gap-[4px]">
                      <h3 className="text-[20px] md:text-[24px] font-bold font-[Ubuntu] leading-[29px] text-gray-900">
                        {pkg.title}
                      </h3>
                      <p className="text-[14px] font-[Ubuntu] font-normal leading-[17px] text-[#464549]">
                        {pkg.duration}
                      </p>
                    </div>
                    <div className="flex w-[47px] h-[24px] items-center gap-[4px] shrink-0 mt-1">
                      <span className="w-[20px] h-[20px] flex items-center justify-center">
                        <StarIcon />
                      </span>
                      <span className="font-[Ubuntu] font-medium text-[16px] leading-[24px] text-[#464549]">
                        {pkg.rating}
                      </span>
                    </div>
                  </div>

                  {/* Icons Info */}
                  <div className="grid grid-cols-4 gap-y-3 text-center text-gray-700  text-[13px] sm:text-[14px] ">
                    <div className="flex flex-col items-center gap-[8px]">
                      <PlaneIcon />
                      <span>{pkg.flights} Flights</span>
                    </div>
                    <div className="flex flex-col items-center gap-[8px]">
                      <HotelIcon />
                      <span>{pkg.hotels} Hotel</span>
                    </div>
                    <div className="flex flex-col items-center gap-[8px]">
                      <CarIcon />
                      <span>{pkg.transfers} Transfers</span>
                    </div>
                    <div className="flex flex-col items-center gap-[8px]">
                      <ActivityIcon />
                      <span>{pkg.activities} Activities</span>
                    </div>
                  </div>
                </div>

                {/* Price Section */}
                <div className="flex justify-between items-center pt-4">
                  <p className="text-gray-900 text-[16px] font-bold font-[Ubuntu]">
                    {pkg.price}{" "}
                    <span className="text-sm font-normal text-gray-500 font-[Ubuntu]">
                      /Per person
                    </span>
                  </p>
                  <button className="w-[24px] h-[24px] rounded-full border border-[#5C788C] text-[#5C788C] flex items-center justify-center">
                    <RightBlackSmallArrow />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Populartour;
