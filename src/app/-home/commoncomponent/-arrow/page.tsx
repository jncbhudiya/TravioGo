"use client";
import { LeftArrow, RightBlackArrow } from "@/app/icon/page";
import React from "react";

type ArrowProps = {
  scrollRef: React.RefObject<HTMLDivElement | null>;
};

function Arrow({ scrollRef }: ArrowProps) {
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
    <div className="flex gap-4  mr-2.5">
      <button
        onClick={scrollLeft}
        className="group w-[38px] h-[38px] p-2 border border-[#202326] rounded-full flex items-center justify-center shadow-md transition-colors duration-200 hover:bg-black"
      >
        <LeftArrow />
      </button>

      <button
        onClick={scrollRight}
        className="group w-[38px] h-[38px] p-2 border border-[#202326] rounded-full flex items-center justify-center shadow-md transition-colors duration-200 hover:bg-black"
      >
        <RightBlackArrow />
      </button>
    </div>
  );
}

export default Arrow;
