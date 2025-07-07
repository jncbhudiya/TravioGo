"use client";

import React from "react";
import DestinationCard from "./destinationcard";
import { destinations } from "./topdestination";

export default function TopDestinations() {
  return (
    <section className="w-full  bg-white  py-16 px-6 md:px-54 mt-400px p-10 flex flex-col gap-10">
      <div className="max-w-[1320px] mx-auto text-center space-y-4">
        <h2 className="text-4xl text-[#2D2C2F] font-bold font-ubuntu">
          Top Destination
        </h2>
        <p className="text-base font-medium font-ubuntu text-[#464549] max-w-[870px] mx-auto leading-6">
          The City of Love, where romance, art, and fashion intertwine. Immerse
          yourself in the enchanting atmosphere of the Eiffel Tower, explore the
          Louvre's masterpieces, and indulge in world-class cuisine.
        </p>
      </div>
      <div className="flex pb-6 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide gap-8">
        <div className=" flex flex-col gap-6">
          <div className="top-[152px] left-0 w-[307px] h-[307px]">
            <DestinationCard {...destinations[0]} />
          </div>
          <div className="top-[489px] left-0 w-[307px] h-[307px]">
            <DestinationCard {...destinations[1]} />
          </div>
        </div>
        <div className="top-[152px] left-[337px] w-[420px] h-[644px]">
          <DestinationCard {...destinations[2]} />
        </div>
        <div className="flex flex-col gap-6">
          <div className=" top-[152px] left-[787px] w-[533px] h-[307px]">
            <DestinationCard {...destinations[3]} />
          </div>
          <div className="flex gap-6">
            <div className=" top-[489px] left-[787px] w-[226px] h-[307px]">
              <DestinationCard {...destinations[4]} />
            </div>

            <div className=" top-[489px] left-[1043px] w-[277px] h-[307px]">
              <DestinationCard {...destinations[5]} />
            </div>
          </div>
        </div>
      </div>
      <div className=" flex justify-center">
        <button className="bg-[#EC9105] text-white px-6 py-2 rounded-full text-sm font-medium  transition">
          All Destination →
        </button>
      </div>
    </section>
  );
}
