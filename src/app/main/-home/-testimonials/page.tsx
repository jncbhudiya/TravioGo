import {
  StarBalckFilledIcon,
  StarFilledWhiteIcon,
  StarWhiteIcon,
} from "@/assets/icon/page";
import React from "react";

function Testimonials() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-10 lg:px-24 ">
      <div className="max-w-[1320px] mx-auto  space-y-4 flex flex-col lg:flex-row items-stretch lg:items-start justify-between gap-8 ">
        {/* LEFT: Heading & Stats */}
        <div className="flex-1 max-w-full lg:max-w-[645px] flex flex-col ">
          {/* Heading */}
          <div className="flex flex-col gap-6 lg:gap-9">
            <h2 className="font-[ubuntu] font-bold text-[28px] md:text-[32px] lg:text-[36px] leading-[36px] md:leading-[44px] lg:leading-[48px] text-[#2D2C2F]">
              What our customers are saying us?
            </h2>
            <p className="font-[ubuntu] font-medium text-[#464549] text-base leading-[24px] opacity-80 max-w-full lg:max-w-[540px]">
              Don't just take our word for it. See what our travelers have to
              say about their incredible journeys with us.
            </p>
          </div>
          {/* Stats */}
          <div className="flex flex-wrap gap-[24px] pt-[40px]">
            {/* Happy Customers */}
            <div className="w-[163px] h-[98px] gap-2 bg-[#F2F5F7] rounded-[12px] border border-[#E0E0E0] p-[16px] flex flex-col justify-center">
              <p className="text-[28px] leading-[34px] font-bold text-[#2D2C2F] font-[ubuntu] w-[131px] h-[34px]">
                8.5M+
              </p>
              <p className="text-[16px] leading-[24px] font-medium text-[#464549] font-[ubuntu] w-[131px] h-[24px]">
                Happy Customers
              </p>
            </div>

            {/* Overall Rating */}
            <div className="w-[139px] h-[98px] gap-2 bg-[#F2F5F7] rounded-[12px] border border-[#E0E0E0] p-[16px] flex flex-col justify-center">
              <p className="text-[28px] leading-[34px] font-bold text-[#2D2C2F] font-[ubuntu] flex items-center gap-[4px] w-[107px] h-[34px]">
                4.8 <StarBalckFilledIcon />
              </p>
              <p className="text-[16px] leading-[24px] font-medium text-[#464549] font-[ubuntu] w-[107px] h-[24px]">
                Overall Rating
              </p>
            </div>
          </div>
        </div>
        {/* RIGHT: Testimonial Card */}
        <div className="w-full max-w-full lg:max-w-[645px] bg-[#FEF5E6] rounded-3xl p-6 md:p-10 flex flex-col justify-between">
          <div className="flex flex-col gap-4 h-full">
            {/* Header */}
            <div className="flex flex-row items-center justify-between mb-4">
              <div className="flex items-center gap-4 flex-1 min-w-0">
                <img
                  src="/images/people.png"
                  alt="User"
                  className="w-14 h-14 md:w-18 md:h-18 rounded-full object-cover flex-shrink-0"
                />
                <div className="flex flex-col min-w-0">
                  <p className="text-[#2D2C2F] text-[16px] leading-[24px] font-medium font-[ubuntu] truncate">
                    Esther Howard
                  </p>
                  <p className="text-[#464549] text-sm leading-[16px] font-normal font-[ubuntu] truncate">
                    New York, USA
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center w-[54px] h-[25px] gap-[2px] bg-[#EC9105] rounded-full px-[8px] py-[4px] shadow-sm">
                <StarFilledWhiteIcon />
                <span className="font-[ubuntu] font-normal text-[14px] leading-[17px] text-white">
                  4.7
                </span>
              </div>
            </div>
            {/* Message */}
            <p className="text-[#464549] text-[15px] md:text-[16px] font-medium font-[ubuntu] leading-[24px] mb-2">
              Our trip to Kerala with Travel was absolutely magical! The
              itinerary was perfectly planned, and our guide, Smith, was
              incredibly knowledgeable and friendly. The houseboat stay was a
              highlight, and the food was delicious. We highly recommend this
              company to anyone looking for a memorable experience.
            </p>
            {/* Pagination */}
            <div className="flex items-center justify-between text-sm font-medium text-gray-700 mt-auto">
              <span>01</span>
              <div className="flex-1 mx-2 h-[3px] bg-orange-200 rounded-full overflow-hidden">
                <div className="w-1/3 h-full bg-[#EC9105]"></div>
              </div>
              <span>03</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
