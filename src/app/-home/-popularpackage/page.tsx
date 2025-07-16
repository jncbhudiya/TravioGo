"use client";

import {
  ActivityIcon,
  CarIcon,
  HeartIcon,
  HotelIcon,
  PlaneIcon,
  RightBlackSmallArrow,
  StarIcon,
} from "@/app/icon/page";
import React, { useRef } from "react";
import { tourPackages } from "./tourPackages";
import Title from "../commoncomponent/-title/page";

function Populartour() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <section className="w-full bg-[#FEF5E6] py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-10 lg:px-24">
        <div className="max-w-[1320px] mx-auto space-y-4 mb-0  min-[409px]:mb-[20px] min-[638px]:mb-[20px]">
          {/* Header Section */}
          <Title
            scrollRef={scrollRef}
            title=" Popular Tour Packages"
            description=" Immerse yourself in diverse cultures, breathtaking landscapes, and
              unforgettable experiences. Your global adventure awaits."
          />
          {/* Cards Scrollable Container */}
          <div
            className="flex w-full max-w-[1320px] mx-auto h-[544px] overflow-x-auto snap-x snap-mandatory no-scrollbar gap-6 pb-2 sm:pb-4 md:pb-6 lg:pb-6"
            ref={scrollRef}
          >
            <div className="flex gap-[30px] snap-x snap-mandatory w-max h-max">
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
                      <div className="flex flex-col items-center gap-[8px] font-[Ubuntu]">
                        <PlaneIcon />
                        <span>{pkg.flights} Flights</span>
                      </div>
                      <div className="flex flex-col items-center gap-[8px] font-[Ubuntu]">
                        <HotelIcon />
                        <span>{pkg.hotels} Hotel</span>
                      </div>
                      <div className="flex flex-col items-center gap-[8px] font-[Ubuntu]">
                        <CarIcon />
                        <span>{pkg.transfers} Transfers</span>
                      </div>
                      <div className="flex flex-col items-center gap-[8px] font-[Ubuntu]">
                        <ActivityIcon />
                        <span>{pkg.activities} Activities</span>
                      </div>
                    </div>
                  </div>

                  {/* Price Section */}
                  <div className="flex justify-between items-center pt-4">
                    <p className="text-gray-900 text-[16px] font-bold font-[Ubuntu]">
                      {pkg.price}{" "}
                      <span className="text-sm font-normal text-[#464549] font-[Ubuntu]">
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
      </section>
    </>
  );
}

export default Populartour;
