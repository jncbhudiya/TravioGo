"use client";
import React, { useRef } from "react";
import Header from "../-header/page";
import { LeftWhiteArrow, RightArrow } from "@/app/icon/page";

const backgroundImages = [
  "/images/3ce43c80fb00237c348c1fac0865ca7dda7999f2.jpg",
  "/images/slider3.jpg",
  "/images/Traveler-Tips-Nature-Seasons-Weather.jpg",
  "/images/top-nature-spots-near-manila.png",
];

function Slider() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -window.innerWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: window.innerWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full h-[900px] sm:h-[900px] relative overflow-hidden text-white">
      {/* SCROLLABLE SLIDE WRAPPER */}
      <div
        ref={scrollRef}
        className="flex w-full h-full overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar"
      >
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 h-full brightness-50 bg-cover bg-no-repeat  snap-start  bg-[center_70%] "
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
      </div>

      {/* ARROWS */}
      <button
        onClick={scrollLeft}
        className="absolute   top-1/2 left-10 z-20 -mt-[42px] transform -translate-y-1/2 border-2 rounded-full p-3 shadow-md    transition"
      >
        <LeftWhiteArrow />
      </button>
      <button
        onClick={scrollRight}
        className="absolute top-1/2 right-10 z-20 -mt-[42px] transform -translate-y-1/2 border-2 rounded-full p-3 shadow-md    transition"
      >
        <RightArrow />
      </button>

      {/* FOREGROUND CONTENT */}
      <div className="absolute inset-0 z-10">
        <Header />
      </div>
    </div>
  );
}

export default Slider;
