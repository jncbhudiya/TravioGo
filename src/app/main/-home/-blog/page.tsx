"use client";
import { RightArrow } from "@/assets/icon/page";
import React, { useRef } from "react";
import { blogPosts } from "./blogpost";
import Title from "../commoncomponent/-title/title";
import Image from "next/image";

function Blog() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    // <section className="w-full bg-[#FEF5E6] py-16 px-6  md:px-10 lg:px-24 ">
    <section className="w-full bg-[#FEF5E6] py-16 sm:py-2 md:py-5 lg:py-12 px-6 md:px-10 lg:px-24">
      <div className="max-w-[1320px] mx-auto  space-y-4 mb-10  ">
        {/* Header */}

        <Title
          scrollRef={scrollRef}
          title=" The Travel Blog"
          description="  Get inspired, informed, and entertained with our travel stories,
            tips, and guides."
        />

        {/* Blog Cards */}
        <div
          ref={scrollRef}
          className="flex w-full max-w-[1320px] mx-auto overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar gap-6 pb-4"
        >
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="shrink-0 w-[85%] sm:w-[360px] md:w-[420px] md:h-[450px] p-4 bg-white rounded-[30px] shadow-sm snap-start"
            >
              <div className="w-full h-[180px] sm:h-[200px] relative rounded-xl overflow-hidden">
                <Image
                  src={post.image || "/images/fallback.jpg"}
                  alt={post.title}
                  fill
                  className="object-cover rounded-xl"
                  sizes="(max-width: 768px) 100vw, 360px"
                  priority
                />
              </div>

              <div className="w-full flex flex-col gap-[12px] pt-[16px]">
                <h1 className="text-[18px] sm:text-[20px] font-bold leading-[24px] text-[#2D2C2F] font-[ubuntu] line-clamp-2">
                  {post.title}
                </h1>
                <p className="text-[14px] sm:text-[16px] leading-[24px] text-[#464549] font-[ubuntu] line-clamp-2">
                  {post.description}
                </p>
              </div>

              <button className="mt-14 text-[#EC9105] text-[16px] sm:text-[20px] leading-[30px] font-normal font-[ubuntu] flex items-center gap-1">
                Read More
              </button>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-10">
          <button className="px-6 sm:px-8 py-3 bg-[#EC9105] text-white font-semibold font-[ubuntu] rounded-full shadow-[0_8px_24px_0_rgba(236,145,5,0.4)] transition duration-300 ease-in-out flex items-center space-x-2">
            <span>View All Blogs</span> <RightArrow />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Blog;
