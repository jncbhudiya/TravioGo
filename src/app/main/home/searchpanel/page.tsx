import { Calender, FaceIcon, SearchIcon, WorldIcon } from "@/assets/icon/page";
import React from "react";

function Searchpanel() {
  return (
    <div className="w-full">
      {/* Background container - positioned absolutely over the slider */}
      <div
        className="absolute w-[820px] max-w-[95%] left-1/2 transform -translate-x-1/2 px-4
        top-[750px] 
        sm:top-[850px] 
        md:top-[850px] 
        lg:top-[850px] 
        xl:top-[800px] 
        2xl:top-[850px]"
      >
        <div className="max-w-[1320px] mx-auto">
          {/* Search panel container */}
          <div
            className="bg-white text-black shadow-lg flex flex-col sm:flex-row items-center gap-4 p-4 w-full rounded-2xl
            lg:rounded-full 
            transition-all duration-300"
          >
            {/* Search fields container */}
            <div className="flex flex-col sm:flex-row w-full gap-4">
              {/* Where */}
              <div className="flex items-center gap-3 w-[224.34px]  ">
                <div className="w-12 h-12 rounded-full border border-[#D8E0E6] flex-shrink-0 flex items-center justify-center">
                  <WorldIcon />
                </div>
                <div className="flex flex-col w-full gap-1">
                  <p className="text-base font-bold font-[ubuntu] leading-4">
                    Where
                  </p>
                  <input
                    type="text"
                    placeholder="Search destinations"
                    className="outline-none text-sm w-full font-[ubuntu] bg-transparent"
                  />
                </div>
              </div>

              {/* Date */}
              <div className="flex items-center gap-3 w-[224.34px]">
                <div className="w-12 h-12 rounded-full border border-[#D8E0E6] flex-shrink-0 flex items-center justify-center">
                  <Calender />
                </div>
                <div className="flex flex-col w-full gap-1">
                  <p className="text-base font-bold font-[ubuntu] leading-4">
                    Date
                  </p>
                  <input
                    type="text"
                    placeholder="Choose Date"
                    className="outline-none text-sm w-full font-[ubuntu] bg-transparent"
                  />
                </div>
              </div>

              {/* Tour Type */}
              <div className="flex items-center gap-3 w-[224.34px]">
                <div className="w-12 h-12 rounded-full border border-[#D8E0E6] flex-shrink-0 flex items-center justify-center">
                  <FaceIcon />
                </div>
                <div className="flex flex-col w-full gap-1">
                  <div className="text-base font-bold font-[ubuntu] leading-4">
                    Tour Type
                  </div>
                  <input
                    type="text"
                    placeholder="All Tour"
                    className="outline-none text-sm w-full font-[ubuntu] bg-transparent"
                  />
                </div>
              </div>
              {/* Search Button - appears after fields on mobile */}
              <button className="flex items-center justify-center gap-2 bg-[#EC9105] text-white text-lg sm:text-xl font-medium font-[ubuntu] rounded-full w-full sm:w-[119px] h-[46px] px-4 py-2 flex-shrink-0">
                <SearchIcon />
                <span className="text-white font-[ubuntu]">Search</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Searchpanel;
