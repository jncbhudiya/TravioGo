"use client";

import React from "react";
import DestinationCard from "./destinationcard";
import { destinations } from "./topdestination";

export default function TopDestinations() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-10 lg:px-24 "> 
      <div className="max-w-[1320px] mx-auto text-center space-y-4 mb-10"> 
        <h2 className="text-4xl text-[#2D2C2F] font-bold font-ubuntu">
          Top Destination
        </h2>
        <p className="text-base font-medium font-ubuntu text-[#464549] max-w-[870px] mx-auto leading-6">
          The City of Love, where romance, art, and fashion intertwine. Immerse
          yourself in the enchanting atmosphere of the Eiffel Tower, explore the
          Louvre's masterpieces, and indulge in world-class cuisine.
        </p>
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

          <div className="flex gap-6 w-full ">
            <div className="w-full h-[307px] aspect-[226/307]"> 
              <DestinationCard {...destinations[4]} />
            </div>
            <div className="w-1/2 aspect-[277/307] w-[277px] h-[307px]"> 
              <DestinationCard {...destinations[5]} />
            </div>
          </div>
        </div>

      </div>
      <div className="mt-10 flex justify-center">
        <button className="bg-[#EC9105] text-white px-6 py-2 rounded-full text-sm font-medium transition hover:bg-[#d47b04]">
          All Destination →
        </button>
      </div>
    </section>
  );
}
