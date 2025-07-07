import { StarIcon } from "@/app/icon/page";
import React from "react";

interface Props {
  city: string;
  image: string;
  rating: number;
}

export default function DestinationCard({ city, image, rating }: Props) {
  return (
    <div className="w-full h-full rounded-[30px] overflow-hidden relative shadow-lg group">
      <img
        src={image}
        alt={city}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
        <h3 className="text-white text-lg font-semibold">{city}</h3>
        <div className="flex items-center bg-white w-[54px] h-[25px] rounded-full pt-[4px] pr-[8px] pb-[4px] pl-[8px] text-[#EC9105] mt-1 text-sm font-medium">
          <StarIcon />

          <span className="ml-1">{rating.toFixed(1)}</span>
        </div>
      </div>
    </div>
  );
}
