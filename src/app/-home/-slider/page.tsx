"use client";
import React, { useRef, useState, useEffect } from "react";
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
  const [current, setCurrent] = useState(0);

  // Update current slide on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const scrollLeft = scrollRef.current.scrollLeft;
        const width = scrollRef.current.clientWidth;
        const idx = Math.round(scrollLeft / width);
        setCurrent(idx);
      }
    };
    const ref = scrollRef.current;
    if (ref) ref.addEventListener("scroll", handleScroll);
    return () => {
      if (ref) ref.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to slide when dot clicked
  const goToSlide = (idx: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: idx * scrollRef.current.clientWidth,
        behavior: "smooth",
      });
    }
    setCurrent(idx);
  };

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
            className="w-full flex-shrink-0 h-full brightness-50 bg-cover bg-no-repeat snap-start bg-[center_70%]"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
      </div>

      {/* ARROW CONTAINER */}
      <div className="absolute top-1/2 left-0 right-0 z-20 px-2 sm:px-4 md:px-6 lg:px-10 flex justify-between items-center -translate-y-1/2 hide-arrows-lg">
        <button
          onClick={scrollLeft}
          className="border border-white rounded-full p-2 sm:p-3 bg-black/30 hover:bg-black/50 transition shadow-md"
        >
          <LeftWhiteArrow />
        </button>
        <button
          onClick={scrollRight}
          className="border border-white rounded-full p-2 sm:p-3 bg-black/30 hover:bg-black/50 transition shadow-md"
        >
          <RightArrow />
        </button>
      </div>

      {/* DOTS - Only show on 992px–1199px */}
      <div className="show-dots-lg  left-0 right-0 bottom-20 z-20 justify-center   relative w-full block -mt-[100px] sm:-mt-[100px] md:-mt-[20px] ">
        <div className="flex gap-3 items-center justify-center">
          {backgroundImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-200
                ${
                  current === idx
                    ? "bg-yellow-600 opacity-100"
                    : "bg-yellow-600 opacity-30"
                }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* FOREGROUND CONTENT */}
      <div className="absolute inset-0 z-10">
        <Header />
      </div>
    </div>
  );
}

export default Slider;
