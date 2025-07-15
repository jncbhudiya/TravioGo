"use client";

import React from "react";
import DestinationCard from "./destinationcard";
import { destinations } from "./topdestination";
import { RightArrow } from "@/app/icon/page";

export default function TopDestinations() {
  return (
    <section className="w-full bg-white px-4 sm:px-6 md:px-10 lg:px-24 ">
      <div className="max-w-[1320px] mx-auto text-center mb-10">
        <div className="flex justify-center">
          <div className="w-full max-w-[870px] h-auto flex flex-col gap-2 items-center text-center mt-22">
            <h2 className="text-[32px] sm:text-[36px] lg:text-[40px] leading-[40px] sm:leading-[44px] lg:leading-[48px] font-bold font-[ubuntu] text-[#2D2C2F]">
              Top Destination
            </h2>
            <p className="text-[14px] sm:text-[15px] lg:text-[16px] leading-[22px] sm:leading-[24px] font-medium font-[ubuntu] text-[#464549] px-2 sm:px-0">
              The City of Love, where romance, art, and fashion intertwine.
              Immerse yourself in the enchanting atmosphere of the Eiffel Tower,
              explore the Louvre's masterpieces, and indulge in world-class
              cuisine.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 max-w-[1320px] mx-auto lg:justify-between items-stretch">
        {/* First Column */}
        <div className="flex flex-col gap-6 w-full lg:flex-1 lg:min-w-[220px] lg:max-w-[340px]">
          <div className="w-full h-[220px] sm:h-[260px] md:h-[307px]">
            <DestinationCard {...destinations[0]} />
          </div>
          <div className="w-full h-[220px] sm:h-[260px] md:h-[307px]">
            <DestinationCard {...destinations[1]} />
          </div>
        </div>

        {/* Second Column (Tall Card) */}
        <div className="w-full lg:flex-1 lg:min-w-[220px] lg:max-w-[420px] flex flex-col">
          <div className="w-full h-[320px] sm:h-[400px] md:h-[644px]">
            <DestinationCard {...destinations[2]} />
          </div>
        </div>

        {/* Third Column */}
        <div className="flex flex-col gap-6 w-full lg:w-[500px]">
          <div className="w-full h-[307px]">
            <DestinationCard {...destinations[3]} />
          </div>

          <div className="flex flex-col sm:flex-row gap-6">
            <div className="w-full sm:w-[226px] h-[307px]">
              <DestinationCard {...destinations[4]} />
            </div>
            <div className="w-full sm:w-[255px] h-[307px]">
              <DestinationCard {...destinations[5]} />
            </div>
          </div>
        </div>
      </div>

      {/* Button */}

      <div className="flex justify-center mt-10">
        <button className="px-6 sm:px-8 py-3 bg-[#EC9105] text-white font-semibold font-[ubuntu] rounded-full shadow-[0_8px_24px_0_rgba(236,145,5,0.4)] transition duration-300 ease-in-out flex items-center space-x-2">
          <span>All Destination</span> <RightArrow />
        </button>
      </div>
    </section>
  );
}
