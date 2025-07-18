// Title.tsx
"use client";
import React from "react";
import Arrow from "../-arrow/arrow";

type TitleProps = {
  scrollRef: React.RefObject<HTMLDivElement | null>;
  title: string;
  description: string;
};

function Title({ scrollRef, title, description }: TitleProps) {
  return (
    <div className="mb-12">
      <div className="flex flex-col top-[1021px] md:flex-row justify-between gap-6 md:items-center">
        <h2 className="text-[40px] leading-[48px] font-bold text-black font-[Ubuntu]">
          {title}
        </h2>
        <Arrow scrollRef={scrollRef} />
      </div>
      <p className="text-[16px] leading-[24px] font-medium text-[#464549] font-[Ubuntu] max-w-2xl mt-2">
        {description}
      </p>
    </div>
  );
}

export default Title;
