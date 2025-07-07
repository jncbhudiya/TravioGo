"use client";

import { LeftArrow, RightArrow } from "@/app/icon/page";
import React, { useEffect, useRef, useState } from "react";

const trending = [
  { city: "Tokyo", image: "/images/tokyo.png" },
  { city: "Paris", image: "/images/paris.png" },
  { city: "London", image: "/images/london.jpg" },
  { city: "Italy", image: "/images/italy.png" },
  { city: "New York", image: "/images/newyork.png" },
  { city: "India", image: "/images/india.png" },
  { city: "India", image: "/images/temple.jpg" },
  { city: "India", image: "/images/templefront.jpg" },
  { city: "India", image: "/images/lakeview.jpg" },
  

];

export default function Trendingdestinations() {
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
    <div className="bg-[#FEF5E6] py-16 px-6 md:px-54 mt-400px p-10">
      <div className="text-left mb-12">
        <div className="flex  justify-between">
          <h2 className="text-[40px] leading-[48px] font-bold text-black font-[Ubuntu]">
            Trending Destinations
          </h2>
          <div className="flex gap-[16px]">
            <button
              onClick={scrollLeft}
              className="w-[50px] h-[50px] rounded-full border border-black flex items-center justify-center"
            >
              <LeftArrow />
            </button>
            <button
              onClick={scrollRight}
              className="w-[50px] h-[50px] bg-black rounded-full border border-black flex items-center justify-center"
            >
              <RightArrow />
            </button>
          </div>
        </div>
        <p className="text-[16px] leading-[24px] font-medium text-black font-[Ubuntu] max-w-2xl mt-2">
          Immerse yourself in the vibrant culture of trending destinations.
          Discover hidden gems, delectable cuisine, and unforgettable
          experiences.
        </p>
      </div>

      <div  ref={scrollRef}  className=" h-[300px] flex overflow-x-auto no-scrollbar space-x-10 gap-[35px]">
        {trending.map((item) => (
          <div
            key={item.city}
            className="w-[180px] h-[300px] flex flex-col items-center gap-4"
          >
            <div className="w-[180px] h-[260px] rounded-[8100px] overflow-hidden shadow-md">
              <img
                src={item.image}
                alt={item.city}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-center font-bold text-[20px] leading-[24px] text-black">
              {item.city}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
