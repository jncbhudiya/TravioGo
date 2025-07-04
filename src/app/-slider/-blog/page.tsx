import {
  ActivityIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  CarIcon,
  HeartIcon,
  HotelIcon,
  PlaneIcon,
  PlusCircleIcon,
  StarFilledIcon,
} from "@/app/icon/page";
import React from "react";
import { tourPackages } from "./tourPackages";

function Blog() {
  return (
    <div>
      {" "}
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-inter">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-2">
                Popular Tour Packages
              </h2>
              <p className="text-gray-600 text-lg max-w-xl">
                Immerse yourself in diverse cultures, breathtaking landscapes,
                and unforgettable experiences. Your global adventure awaits.
              </p>
            </div>
            <div className="flex space-x-4 mt-6 md:mt-0">
              <button className="p-3 rounded-full bg-white shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors">
                <ArrowLeftIcon />
              </button>
              <button className="p-3 rounded-full bg-white shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors">
                <ArrowRightIcon />
              </button>
            </div>
          </div>

          {/* Tour Packages Cards - Scrollable Container */}
          <div
            className="flex overflow-x-auto pb-6 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide"
            style={{ scrollSnapType: "x mandatory" }} // Enable scroll snapping
          >
            {tourPackages.map((pkg) => (
              <div
                key={pkg.id}
                className="flex-none w-80 sm:w-80 md:w-96 lg:w-80 xl:w-96 mr-6 last:mr-0 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                style={{ scrollSnapAlign: "start" }} // Snap to start of each card
              >
                <div className="relative w-full h-48">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover rounded-t-xl"
                  />
                  <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md text-gray-700 hover:text-red-500 hover:bg-gray-100 transition-colors">
                    <HeartIcon />
                  </button>
                </div>

                <div className="p-5">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {pkg.title}
                    </h3>
                    <div className="flex items-center text-yellow-500 text-sm font-medium">
                      <StarFilledIcon />
                      {pkg.rating}
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm mb-4">{pkg.duration}</p>

                  <div className="grid grid-cols-2 gap-y-3 gap-x-2 text-gray-700 text-sm mb-5">
                    <div className="flex items-center">
                      <PlaneIcon />
                      {pkg.flights} Flights
                    </div>
                    <div className="flex items-center">
                      <HotelIcon />
                      {pkg.hotels} Hotel
                    </div>
                    <div className="flex items-center">
                      <CarIcon />
                      {pkg.transfers} Transfers
                    </div>
                    <div className="flex items-center">
                      <ActivityIcon />
                      {pkg.activities} Activities
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                    <p className="text-gray-900 text-xl font-bold">
                      {pkg.price}{" "}
                      <span className="text-sm font-normal text-gray-500">
                        /Per person
                      </span>
                    </p>
                    <button className="p-2 bg-blue-100 rounded-full text-blue-600 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors">
                      <PlusCircleIcon />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
