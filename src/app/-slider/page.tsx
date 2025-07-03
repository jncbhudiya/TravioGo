import Link from "next/link";
import React from "react";
import Navbar from "./-navbar/page";
import Trendingdestinations from "./-trendingdestinations/page";
import Searchpanel from "./-searchpanel/page";
import Leftarrow from "../icon/-leftarrow/page";

function Slider() {
  return (
    <div className="w-full h-[900px] md:h-[900px] sm:h-[700px] relative overflow-auto">
      <Navbar />
      <Searchpanel />
      <Trendingdestinations />
    
    </div>
  );
}

export default Slider;
