import Calender from "@/app/icon/-calender/page";
import Face from "@/app/icon/-face/page";
import Search from "@/app/icon/-search/page";
import World from "@/app/icon/-world/page";
import React from "react";

function Searchpanel() {
  return (
    <div className="absolute bottom-8 w-full flex justify-center px-4 ">
      <div className="bg-white text-black rounded-full shadow-lg flex flex-wrap lg:flex-nowrap items-center justify-center gap-2 px-4 py-3 w-full max-w-[824px]">
        <div className="flex items-center gap-2 px-4 py-2 w-full sm:w-auto">
          <div className="w-[50px] h-[50px] rounded-full border border-[#D8E0E6] flex items-center justify-center">
            <World />
          </div>
          <div className="flex flex-col w-[120px] gap-1">
            <p className="text-xs font-bold">Where</p>
            <input
              type="text"
              placeholder="Search destinations"
              className="outline-none text-sm"
            />
          </div>
        </div>

        <div className="flex items-center gap-2 px-4 py-2 w-full sm:w-auto">
          <div className="w-[50px] h-[50px] rounded-full border border-[#D8E0E6] flex items-center justify-center">
            <Calender />
          </div>
          <div className="flex flex-col w-[120px] gap-1">
            <p className="text-xs font-bold">Date</p>
            <input
              type="text"
              placeholder="Choose Date"
              className="outline-none text-sm"
            />
          </div>
        </div>

        <div className="flex items-center gap-2 px-4 py-2 w-full sm:w-auto">
          <div className="w-[50px] h-[50px] rounded-full border border-[#D8E0E6] flex items-center justify-center">
            <Face />
          </div>
          <div className="flex flex-col w-[120px] gap-1">
            <p className="text-xs font-bold">Tour Type</p>
            <input
              type="text"
              placeholder="All Tour"
              className="outline-none text-sm"
            />
          </div>
        </div>

        <button className="flex items-center gap-1 bg-[#EC9105] text-white text-sm font-medium rounded-full w-[119px] h-[46px] px-4 py-2">
          <Search /> Search
        </button>
      </div>
    </div>
  );
}

export default Searchpanel;
