import { Calender, FaceIcon, SearchIcon, WorldIcon } from "@/app/icon/page";
import React from "react";

function Searchpanel() {
  return (
    <>
      <div className=" w-full ">
        {/* Background container */}
        <div className="absolute top-[700px] lg:top-[850px]  left-1/2 transform -translate-x-1/2 w-max-[824.02px] h-[82px] flex justify-center px-4">
          <div className="max-w-[1320px] mx-auto px-4 ">
            <div
              className=" bg-white text-black shadow-lg flex flex-wrap lg:flex-nowrap items-center gap-4 px-4 py-5 w-full rounded-[16px] sm:rounded-[20px] md:rounded-[24px] lg:rounded-full  transition-all duration-300"
            >
              {/* Where */}
              <div className="flex w-[224.34px]h-[50px] items-center gap-3   sm:w-auto px-2">
                <div className="w-12 h-12 rounded-full border border-[#D8E0E6] flex items-center justify-center">
                  <WorldIcon />
                </div>
                <div className="flex flex-col w-full h-[39px] sm:w-[128.36px] gap-1">
                  <p className="text-[16px] font-bold font-[ubuntu] size-4 leading-4">
                    Where
                  </p>
                  <input
                    type="text"
                    placeholder="Search destinations"
                    className="outline-none text-sm w-full"
                  />
                </div>
              </div>
              {/* Date */}
              <div className="flex w-[224.34px]h-[50px] items-center gap-3 w-full sm:w-auto px-2">
                <div className="w-12 h-12 rounded-full border border-[#D8E0E6] flex items-center justify-center">
                  <Calender />
                </div>
                <div className="flex flex-col w-full sm:w-[120px] gap-1">
                  <p className="text-[16px] font-bold font-[ubuntu] size-4 leading-4">
                    Date
                  </p>
                  <input
                    type="text"
                    placeholder="Choose Date"
                    className="outline-none text-sm w-full"
                  />
                </div>
              </div>
              {/* Tour Type */}
              <div className="flex w-[224.34px]h-[50px] items-center gap-3 w-full sm:w-auto px-2">
                <div className="w-12 h-12 rounded-full border border-[#D8E0E6] flex items-center justify-center">
                  <FaceIcon />
                </div>
                <div className="flex flex-col  w-full sm:w-[120px] gap-1">
                  <div className="w-[224.34px]  text-[16px] font-bold font-[ubuntu] size-4 leading-4 ">
                    Tour Type
                  </div>
                  <input
                    type="text"
                    placeholder="All Tour"
                    className="outline-none text-sm w-full"
                  />
                </div>
              </div>
              {/* Search Button */}
              <div className="w-full sm:w-auto px-2">
                <button className="flex items-center justify-center gap-2 bg-[#EC9105] text-white text-sm font-medium rounded-full w-full sm:w-[119px] h-[46px] px-4 py-2">
                  <SearchIcon />
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Searchpanel;
