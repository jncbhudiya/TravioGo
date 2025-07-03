"use client";

import Leftarrow from "@/app/icon/-leftarrow/page";
import Rightarrow from "@/app/icon/-rightarrow/page";
import React, { useEffect, useState } from "react";

const trending = [
  { city: "Tokyo", image: "/images/tokyo.png" },
  { city: "Paris", image: "/images/paris.png" },
  { city: "London", image: "/images/london.jpg" },
  { city: "Italy", image: "/images/italy.png" },
  { city: "New York", image: "/images/newyork.png" },
  { city: "India", image: "/images/india.png" },
];

export default function Trendingdestinations() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex === trending.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#FCF5EF] py-16 px-6 md:px-54 mt-400px p-10">
      <div className="text-left mb-12">
        <div className="flex gap-185">
          <h2 className="text-[40px] leading-[48px] font-bold text-black font-[Ubuntu]">
            Trending Destinations
          </h2>
          <div className="flex gap-[16px]">
            <div className="w-[50px] h-[50px] rounded-full border border-black flex items-center justify-center">
              <Leftarrow />
            </div>
            <div className="w-[50px] h-[50px] rounded-full border border-black  flex items-center justify-center">
              <Rightarrow />
            </div>
          </div>
        </div>
        <p className="text-[16px] leading-[24px] font-medium text-black font-[Ubuntu] max-w-2xl mt-2">
          Immerse yourself in the vibrant culture of trending destinations.
          Discover hidden gems, delectable cuisine, and unforgettable
          experiences.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-10">
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
