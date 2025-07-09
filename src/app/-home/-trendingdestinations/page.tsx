"use client";

import {
  BlackCrossRightArrow,
  LeftArrow,
  RightArrow,
  RightBlackSmallArrow,
} from "@/app/icon/page";
import React, { useEffect, useRef, useState } from "react";

const trending = [
  { city: "Tokyo", image: "/images/tokyo.png" },
  { city: "Paris", image: "/images/paris.png" },
  { city: "London", image: "/images/london.jpg" },
  { city: "Italy", image: "/images/italy.png" },
  { city: "New York", image: "/images/newyork.png" },
  { city: "India", image: "/images/india.png" },
  { city: "Japan", image: "/images/temple.jpg" },
  { city: "England", image: "/images/templefront.jpg" },
  { city: "China", image: "/images/lakeview.jpg" },
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
    <>
      <div className="bg-[#FEF5E6] h-[653px] w-full py-16 px-4 sm:px-6 lg:px-20 xl:px-48 ">
        <div className="mb-12">
          <div className="flex flex-col md:flex-row justify-between gap-6 md:items-center">
            <h2 className="text-[40px] leading-[48px] font-bold text-black font-[Ubuntu]">
              Trending Destinations
            </h2>
            <div className="flex gap-[16px] h-[38px] w-[92px]">
              <button
                onClick={scrollLeft}
                className="w-[38px] h-[38px] rounded-full border border-black flex items-center justify-center"
              >
                <LeftArrow />
              </button>
              <button
                onClick={scrollRight}
                className="w-[38px] h-[38px] p-2 bg-black rounded-full border border-black flex items-center justify-center"
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

        <div
          ref={scrollRef}
          className="h-[300px] flex overflow-hidden scrollbar-hide space-x-[48px]"
        >
          {trending.map((item) => (
            <div
              key={item.city}
              className="w-[180px] h-[300px] flex flex-col items-center gap-4 group flex-shrink-0"
            >
              <div className="w-[180px] h-[260px] rounded-[8100px] overflow-hidden shadow-md relative">
                <img
                  src={item.image}
                  alt={item.city}
                  className="w-full h-full object-cover transition duration-300 group-hover:brightness-50"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <div className="w-10 h-10 rounded-full bg-opacity-80 flex items-center justify-center">
                    <BlackCrossRightArrow />
                  </div>
                </div>
              </div>
              <p className="text-center font-bold text-[20px] leading-[24px] text-black">
                {item.city}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
