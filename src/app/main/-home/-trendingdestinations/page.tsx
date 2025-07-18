"use client";

import { BlackCrossRightArrow } from "@/assets/icon/page";
import React, { useRef } from "react";
import Title from "../commoncomponent/-title/title";
import Image from "next/image";

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

  return (
    <section className="w-full bg-[#FEF5E6] py-16 px-6 md:px-10 lg:px-24 ">
      <div className="max-w-[1320px] mx-auto  space-y-4  ">
      
        <div className="relative w-full block mt-[70px] sm:mt-[70px] md:mt-[55px]">
          <Title
            scrollRef={scrollRef}
            title="Trending Destinations"
            description="Immerse yourself in the vibrant culture of trending destinations. Discover hidden gems, delectable cuisine, and unforgettable experiences."
          />
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
                <div className="relative w-full h-full">
                  <Image
                    src={item.image}
                    alt={item.city}
                    fill
                    className="object-cover transition duration-300 group-hover:brightness-50"
                  />
                </div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <div className="w-10 h-10 rounded-full border border-[#FFFFFF] flex items-center justify-center">
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
    </section>
  );
}
