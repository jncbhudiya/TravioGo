"use client";

import React from "react";
import DestinationCard from "./destinationcard";
import { destinations } from "./topdestination";
import { RightArrow } from "@/app/icon/page";

export default function TopDestinations() {
  return (
    <>
      <section className="w-full bg-white py-16 px-6 md:px-10 lg:px-24 ">
        <div className="max-w-[1320px] mx-auto text-center space-y-4 mb-10 ">
          <div className="w-full flex justify-center px-4">
            <div className="w-[870px] h-[104px] flex flex-col gap-2 items-center text-center">
              <h2 className="w-full text-[40px] leading-[48px] font-bold font-[ubuntu] text-[#2D2C2F]">
                Top Destination
              </h2>
              <p className="text-[16px] leading-[24px] font-medium font-[ubuntu] text-[#464549]">
                The City of Love, where romance, art, and fashion intertwine.
                Immerse yourself in the enchanting atmosphere of the Eiffel
                Tower, explore the Louvre's masterpieces, and indulge in
                world-class cuisine.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap pb-6 gap-6 lg:gap-8 justify-center items-stretch max-w-[1320px] mx-auto">
          <div className="flex flex-col gap-6 w-full sm:w-[calc(50%-12px)] lg:w-[calc(24%-16px)]">
            <div className="w-full h-[307px] aspect-square">
              <DestinationCard {...destinations[0]} />
            </div>
            <div className="w-full h-[307px] aspect-square">
              <DestinationCard {...destinations[1]} />
            </div>
          </div>

          <div className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33%-16px)]">
            <div className="h-[644px] w-full  aspect-[420/644]">
              <DestinationCard {...destinations[2]} />
            </div>
          </div>

          <div className="flex flex-col gap-6 w-full lg:w-[calc(42%-16px)]">
            <div className="w-full  h-[307px]  aspect-[533/307]">
              <DestinationCard {...destinations[3]} />
            </div>

            <div className="flex  gap-6 w-full sm:w-[calc(50%-12px)] lg:w-[calc(24%-16px)]">
              <div className="w-[226px] h-[307px] aspect-[226/307]">
                <DestinationCard {...destinations[4]} />
              </div>
              <div className=" aspect-[277/307] w-[277px] h-[307px]">
                <DestinationCard {...destinations[5]} />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 flex justify-center">
          <button className="px-8 py-3 bg-[#EC9105] text-white font-semibold rounded-full shadow-lg  transition duration-300 ease-in-out flex items-center space-x-2">
            <span> All Destination</span> <RightArrow />
          </button>
        </div>
      </section>
    </>
  );
}
