import Link from "next/link";
import React from "react";
import Navbar from "./-navbar/page";
import Trendingdestinations from "./-trendingdestinations/page";
import Searchpanel from "./-searchpanel/page";

function Slider() {
  return (
    <div className="w-full h-[900px] md:h-[900px] sm:h-[700px] relative overflow-hidden">
     
      {/* <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full brightness-50 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/images/3ce43c80fb00237c348c1fac0865ca7dda7999f2.jpg')",
          }}
        ></div>
      </div> */}

    
     
        <Navbar />
        <Searchpanel />
        <Trendingdestinations />
     
    </div>
  );
}

export default Slider;
