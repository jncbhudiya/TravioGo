import {
  CalenderWhiteIcon,
  FaceWhiteIcon,
  LoactionIcon,
  WorldWhiteIcon,
} from "@/app/icon/page";
import React from "react";

function Step() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-10 lg:px-24 ">
        <div className="max-w-[1320px] mx-auto  space-y-4 mb-10 ">
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 lg:gap-[40px]">
        {/* LEFT SECTION */}
        <div className="w-full lg:w-[645px] h-auto lg:h-[549px] flex flex-col justify-start gap-[32px]">
          {/* Heading */}
          <div className="w-full lg:w-[645px] h-auto flex flex-col gap-[8px]">
            <p className="text-[16px] font-medium leading-[24px] font-[Ubuntu] text-[#464549]">
              Hassle-Free
            </p>
            <h1 className="text-[32px] lg:text-[40px] font-bold leading-[40px] lg:leading-[48px] font-[Ubuntu] text-[#2D2C2F]">
              3 Simple Steps to Your Next Adventure
            </h1>
          </div>

          {/* Step Items */}
          {[
            {
              icon: <WorldWhiteIcon />,
              bg: "#FF487F",
              title: "Search Destination",
              text: "Explore the vibrant culture or unwind on its stunning beaches.",
            },
            {
              icon: <CalenderWhiteIcon />,
              bg: "#6344FE",
              title: "Choose Date",
              text: "Pick your perfect escape! Choose your travel dates and explore our amazing destinations.",
            },
            {
              icon: <FaceWhiteIcon />,
              bg: "#EFCB0D",
              title: "Tour Type",
              text: "Discover extraordinary destinations, immerse yourself in new cultures, and create lifelong memories.",
            },
          ].map((step, index) => (
            <div
              key={index}
              className="w-full lg:w-[645px] flex items-start gap-[16px]"
            >
              <div
                className="w-[72px] h-[72px] p-[20px] rounded-full flex items-center justify-center"
                style={{ backgroundColor: step.bg }}
              >
                {step.icon}
              </div>
              <div className="flex-1 flex flex-col gap-[8px]">
                <h3 className="text-[18px] lg:text-[20px] font-bold leading-[24px] font-[Ubuntu] text-[#1C1C1E]">
                  {step.title}
                </h3>
                <p className="text-[16px] lg:text-[20px] leading-[26px] lg:leading-[30px] font-normal font-[Ubuntu] text-[#464549]">
                  {step.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT SECTION */}
        <div className="w-full lg:w-[645px] h-auto lg:h-[549px] relative rounded-[30px] overflow-hidden">
          {/* Girl Image */}
          <img
            src="/images/stepgirl.jpg"
            alt="Woman with luggage"
            className="w-full h-[300px] sm:h-[400px] lg:h-[489px] object-cover rounded-[30px]"
          />

          {/* Hill View */}
          <div
            className="absolute top-4 left-1/2 -translate-x-1/2 lg:top-0 lg:left-0 lg:translate-x-0 
                       w-[200px] sm:w-[260px] lg:w-[345px] 
                       h-[120px] sm:h-[160px] lg:h-[205px] 
                       border-[10px] sm:border-[16px] lg:border-[20px] 
                       border-white rounded-[30px] overflow-hidden shadow-lg"
          >
            <img
              src="/images/hillstep.jpg"
              alt="Mountain view"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Country Card */}
          <div
            className="absolute 
                      top-[220px] sm:top-[270px] md:top-[290px] lg:top-[330px] 
                      left-1/2 lg:left-[20px] 
                      -translate-x-1/2 lg:translate-x-0
                      w-[110px] sm:w-[125px] md:w-[130px] lg:w-[140px] 
                      h-[110px] sm:h-[125px] md:h-[130px] lg:h-[140px] 
                      bg-white rounded-[16px] p-[12px] 
                      flex flex-col items-center justify-center gap-[12px] shadow-md"
          >
            <div className="w-[48px] h-[48px] bg-[#EC91051F] rounded-full flex items-center justify-center p-[12px]">
              <LoactionIcon />
            </div>
            <div className="flex flex-col items-center gap-[4px] text-center w-full">
              <p className="text-[20px] md:text-[24px] lg:text-[28px] font-bold leading-[28px] md:leading-[32px] lg:leading-[34px] font-[Ubuntu] text-[#1C1C1E]">
                72+
              </p>
              <p className="text-[11px] md:text-[13px] lg:text-[14px] font-normal leading-[16px] lg:leading-[17px] font-[Ubuntu] text-[#464549]">
                Countries
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

export default Step;
