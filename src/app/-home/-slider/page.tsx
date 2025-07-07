"use client";

import { CloseIcon, HamburgerIocn } from "@/app/icon/page";
import React, { useState } from "react";
import Header from "../-header/page";

function Slider() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="w-full h-[900px] sm:h-[750px] relative overflow-hidden text-white">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full brightness-50 bg-cover bg-center  bg-[url('/images/3ce43c80fb00237c348c1fac0865ca7dda7999f2.jpg')] "></div>
        </div>

        <Header />
      </div>
    </>
  );
}

export default Slider;
