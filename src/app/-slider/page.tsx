import Link from "next/link";
import React from "react";
import Navbar from "./-navbar/page";

function Slider() {
  return (
    <div className="w-full h-[900px] relative overflow-hidden">
      <div className="absolute brightness-50 inset-0 scale-y-130 bg-[url('/images/3ce43c80fb00237c348c1fac0865ca7dda7999f2.jpg')] bg-cover bg-center z-0"></div>

      <div className="relative z-10 pt-[35px]">
        <Navbar />
      </div>
    </div>
  );
}

export default Slider;
