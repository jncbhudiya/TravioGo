"use client";
import { LeftArrow, RightArrow, RightBlackArrow } from "@/app/icon/page";
import React, { useRef } from "react";
import { blogPosts } from "./blogpost";

function Blog() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#FEF5E6] py-16 px-6 md:px-14 lg:px-[204px]">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row w-full max-w-[1320px] mx-auto justify-between items-start md:items-end mb-10 md:mb-12 gap-6">
        <div className="w-full md:max-w-[645px] space-y-2">
          <h2 className="text-2xl md:text-[40px] font-bold text-[#2D2C2F] font-ubuntu leading-[48px] tracking-normal">
            The Travel Blog
          </h2>
          <p className="text-[#464549] text-sm md:text-[16px] font-medium font-ubuntu leading-[24px]">
            Get inspired, informed, and entertained with our travel stories,
            tips, and guides.
          </p>
        </div>

        <div className="flex gap-4 mb-8 mr-2.5">
          <button
            onClick={scrollLeft}
            className="w-[38px] h-[38px] p-2 border border-[#202326] rounded-full flex items-center justify-center shadow-md"
          >
            <LeftArrow />
          </button>
          <button
            onClick={scrollRight}
            className="w-[38px] h-[38px] p-2 border border-[#202326] rounded-full flex items-center justify-center shadow-md"
          >
            <RightBlackArrow />
          </button>
        </div>
      </div>

      {/* Blog Cards Section */}
      <div
        ref={scrollRef}
        className="flex w-full max-w-[1320px] mx-auto h-[544px] overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar gap-6 pb-4"
      >
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="flex-none w-[420px] h-[450px] p-4 gap-4 bg-white rounded-[30px] shadow-sm snap-start"
          >
            <img
              className="w-[388px] h-[200px] object-cover rounded-xl"
              src={post.image}
              alt={post.title}
            />
            <div className="w-[388px] h-[125px] flex flex-col gap-[16px] pt-[16px]">
              <h1 className="text-[20px] h-[48px] font-bold leading-[24px] text-[#2D2C2F] font-ubuntu">
                {post.title}
              </h1>
              <p className="text-[16px] h-[48px] leading-[24px] text-[#464549] font-ubuntu line-clamp-2">
                {post.description}
              </p>
            </div>

            <button
              className="w-[131px] h-[46px] mt-10 rounded-full bg-transparent text-[#EC9105]
              flex items-center font-ubuntu text-[20px] leading-[30px] font-normal"
            >
              Read More
            </button>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <button className="px-8 py-3 bg-[#EC9105] text-white font-semibold rounded-full shadow-lg transition duration-300 ease-in-out flex items-center space-x-2">
          <span>View All Blogs</span> <RightArrow />
        </button>
      </div>
    </div>
  );
}

export default Blog;
