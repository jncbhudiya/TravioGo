import Link from "next/link";
import React from "react";
import Navbar from "./-navbar/page";
import Trendingdestinations from "./-trendingdestinations/page";
import Searchpanel from "./-searchpanel/page";
import Footer from "./-footer/page";
import Populartour from "./-populartour/page";
import Blog from "./-blog/page";

function Slider() {
  return (
    <div className="w-full h-[900px] md:h-[900px] sm:h-[700px] relative ">
      <Navbar />
      <Searchpanel />
      <Trendingdestinations />
      <Blog />
      {/* <Populartour /> */}
      <Footer />
    </div>
  );
}

export default Slider;
