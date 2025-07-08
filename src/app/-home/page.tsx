import Link from "next/link";
import React from "react";
import Trendingdestinations from "./-trendingdestinations/page";
import Searchpanel from "./-searchpanel/page";
import Footer from "./-footer/page";
import Populartour from "./-populartour/page";
import Blog from "./-blog/page";
import Step from "./-step/page";
import Topdestination from "./-topdestination/page";
import Testmonials from "./-testimonials/page";
import Slider from "./-slider/page";

function Homepage() {
  return (
    <>
      <div className="w-full min-h-screen h-[900px] md:h-[900px] sm:h-[700px] relative ">
        <Slider />
        {/* <Searchpanel /> */}
        <Trendingdestinations />
        <Step />
        <Populartour />
        <Topdestination />
        <Testmonials />
        <Blog />
        <Footer />
      
      
      </div>
    </>
  );
}

export default Homepage;
