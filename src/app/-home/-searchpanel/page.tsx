import { Calender, FaceIcon, SearchIcon, WorldIcon } from "@/app/icon/page";
import React from "react";

function Searchpanel() {
  return (
    <>
      <div className="absolute top-[950] w-[824px] h-[82px] left-[452px]  flex justify-center px-4 ">
        <div className="bg-white text-black rounded-lg md:rounded-full shadow-lg flex flex-col sm:flex-wrap lg:flex-nowrap sm:flex-row items-center justify-center gap-4 px-4 py-5 w-full max-w-[820px]">
          {/* Where */}
          <div className="flex items-center gap-3 w-full sm:w-auto px-2">
            <div className="w-12 h-12 rounded-lg md:rounded-full border border-[#D8E0E6] flex items-center justify-center">
              <WorldIcon />
            </div>
            <div className="flex flex-col w-full sm:w-[120px] gap-1">
              <p className="text-xs font-bold">Where</p>
              <input
                type="text"
                placeholder="Search destinations"
                className="outline-none text-sm w-full"
              />
            </div>
          </div>

          {/* Date */}
          <div className="flex items-center gap-3 w-full sm:w-auto px-2">
            <div className="w-12 h-12 rounded-lg md:rounded-full border border-[#D8E0E6] flex items-center justify-center">
              <Calender />
            </div>
            <div className="flex flex-col w-full sm:w-[120px] gap-1">
              <p className="text-xs font-bold">Date</p>
              <input
                type="text"
                placeholder="Choose Date"
                className="outline-none text-sm w-full"
              />
            </div>
          </div>

          {/* Tour Type */}
          <div className="flex items-center gap-3 w-full sm:w-auto px-2">
            <div className="w-12 h-12 rounded-lg md:rounded-full border border-[#D8E0E6] flex items-center justify-center">
              <FaceIcon />
            </div>
            <div className="flex flex-col w-full sm:w-[120px] gap-1">
              <p className="text-xs font-bold">Tour Type</p>
              <input
                type="text"
                placeholder="All Tour"
                className="outline-none text-sm w-full"
              />
            </div>
          </div>

          {/* Search Button */}
          <div className="w-full sm:w-auto px-2">
            <button className="flex items-center justify-center gap-2 bg-[#EC9105] text-white text-sm font-medium rounded-lg md:rounded-full w-full sm:w-[119px] h-[46px] px-4 py-2">
              <SearchIcon />
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Searchpanel;
