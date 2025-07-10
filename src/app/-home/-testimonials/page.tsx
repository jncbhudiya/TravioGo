import {
  StarBalckFilledIcon,
  StarWhiteIcon,
} from "@/app/icon/page";
import React from "react";

function Testmonials() {
  return (
    <>
      <section className="w-full bg-white py-16 px-4">
        <div className="max-w-[1320px] mx-auto flex flex-row items-start justify-between gap-7 overflow-x-auto scroll-smooth no-scrollbar">
          {/* LEFT: Heading & Stats */}
          <div className="flex-1 max-w-[645px]">
            <div className="w-[643px] h-[192px] flex flex-col gap-12">
              <h2 className="h-[96px] w-[643px] font-[Ubuntu] leading-[48px] text-[32px] md:text-[36px] font-bold text-[#2D2C2F]">
                What our customers are
                <br className="hidden sm:block" /> saying us?
              </h2>
              <p className="h-[48px] w-[643px] font-[ubuntu] font-medium text-[#464549] text-base leading-[24px]">
                Don’t just take our word for it. See what our travelers have to
                say about their incredible journeys with us.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-[24px] pt-[24px]">
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
          <div className="w-full max-w-[645px] h-[360px] bg-[#FEF5E6] rounded-[30px] p-[40px] ">
            <div className="w-[565px] h-[280px] flex flex-col justify-between gap-[10px] mx-auto">
              {/* Header */}
              <div className="flex justify-between items-center w-full h-[72px]">
                <div className="flex items-center gap-[16px] w-[511px]">
                  <img
                    src="/images/people.png"
                    alt="User"
                    className="w-[72px] h-[72px] rounded-full object-cover"
                  />
                  <div className="flex flex-col gap-[2px] w-[423px] h-[43px]">
                    <p className="text-[#2D2C2F] text-[16px] leading-[24px] font-medium font-[ubuntu]">
                      Esther Howard
                    </p>
                    <p className="text-[#464549] text-sm leading-[16px] font-normal font-[ubuntu]">
                      New York, USA
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-[4px] bg-[#EC9105] rounded-full px-[8px] py-[4px] h-[25px] w-[54px] justify-center shadow-sm">
                  <StarWhiteIcon />
                  <span className="text-white text-sm font-semibold font-[ubuntu]">
                    4.7
                  </span>
                </div>
              </div>

              {/* Message */}
              <p className="w-[565px] h-[120px] text-[#464549] text-[16px] font-medium font-[ubuntu] leading-[24px]">
                Our trip to Kerala with Travel was absolutely magical! The
                itinerary was perfectly planned, and our guide, Smith, was
                incredibly knowledgeable and friendly. The houseboat stay was a
                highlight, and the food was delicious. We highly recommend this
                company to anyone looking for a memorable experience.
              </p>

              {/* Pagination */}
              <div className="w-[565px] h-[24px] flex items-center justify-between text-sm font-medium text-gray-700">
                <span>01</span>
                <div className="w-full mx-[8px] h-[3px] bg-orange-200 rounded-full overflow-hidden">
                  <div className="w-1/3 h-full bg-[#EC9105]"></div>
                </div>
                <span>03</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testmonials;
