import React from "react";
import Header from "../-header/page";
import { LeftWhiteArrow, RightArrow } from "@/app/icon/page";

function Slider() {
  return (
    <>
      <div className="w-full h-[900px] sm:h-[900px] relative overflow-hidden text-white">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full brightness-50 bg-cover bg-no-repeat bg-[center_90%] bg-[url('/images/3ce43c80fb00237c348c1fac0865ca7dda7999f2.jpg')]"></div>
        </div>
        
          <button className="absolute top-1/2 left-6 z-20 -mt-[42px] transform -translate-y-1/2  border-1 rounded-full p-3 shadow-md ">
            <LeftWhiteArrow />
          </button>
          <button className="absolute top-1/2 right-4 z-20  -mt-[42px] transform -translate-y-1/2 border-1 rounded-full p-3 shadow-md ">
            <RightArrow />
          </button>
      
        <Header />
      </div>
    </>
  );
}

export default Slider;
