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
    <>
      <div className=" bg-[#FEF5E6]  py-16 px-6 md:px-54 mt-400px p-10">
        {/* Header Section */}

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 w-full">
          <div className="w-full md:max-w-[645px] space-y-2">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 font-ubuntu leading-snug md:leading-[48px] tracking-normal">
              The Travel Blog
            </h2>
            <p className="text-[#464549] text-sm md:text-base font-medium font-ubuntu max-w-xl">
              Get inspired, informed, and entertained with our travel stories,
              tips, and guides.
            </p>
          </div>

          <div className="flex space-x-4 mt-6 md:mt-0">
            <button
              onClick={scrollLeft}
              className="p-3 rounded-full border border-[#202326] shadow-md focus:outline-none focus:ring-2 transition-colors"
            >
              <LeftArrow />
            </button>
            <button
              onClick={scrollRight}
              className="p-3 rounded-full border border-[#202326] shadow-md focus:outline-none focus:ring-2 transition-colors"
            >
              <RightBlackArrow />
            </button>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar gap-6 pb-4"
        >
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="flex-none w-[85%] sm:w-[420px] h-auto p-4 bg-white rounded-xl shadow-sm snap-start"
            >
              <img
                className="w-full h-[200px] object-cover rounded-xl"
                src={post.image}
                alt={post.title}
              />
              <div className="pt-4">
                <h1 className="text-lg md:text-xl font-bold text-[#2D2C2F] font-ubuntu mb-2 leading-tight">
                  {post.title}
                </h1>
                <p className="text-black font-medium text-sm md:text-base font-ubuntu mb-4 line-clamp-2">
                  {post.description}
                </p>
              </div>
              <button
                className="text-[#EC9105] mt-[50px]  w-[115px] h-[46px] rounded-full opacity-100 pt-[8px] pr-[16px] pb-[8px] gap-[4px]
"
              >
                <a href="#">Read More</a>
              </button>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
   
          <button className="px-8 py-3 bg-[#EC9105] text-white font-semibold rounded-full shadow-lg  transition duration-300 ease-in-out flex items-center space-x-2">
            <span>View All Blogs</span> <RightArrow />
          </button>
        </div>
      </div>
    </>
  );
}

export default Blog;
