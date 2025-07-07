import { StarFilledIcon, StarIcon } from '@/app/icon/page';
import React from 'react'

function Testmonials() {
  return (
    <>
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-[1320px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-5">
        
        {/* LEFT: Heading & Stats */}
        <div className="flex-1 space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            What our customers are<br className="hidden sm:block" /> saying us?
          </h2>
          <p className="text-gray-600 text-base max-w-md">
            Don’t just take our word for it. See what our travelers have to say about their incredible journeys with us.
          </p>
          
         
          <div className="flex gap-6 pt-4">
            <div className="bg-gray-100 rounded-xl px-6 py-4 text-center shadow-sm">
              <p className="text-xl font-bold text-gray-900">8.5M+</p>
              <p className="text-gray-500 text-sm">Happy Customers</p>
            </div>
            <div className="bg-gray-100 rounded-xl px-6 py-4 text-center shadow-sm">
              <p className="text-xl font-bold text-gray-900 flex items-center justify-center gap-1">
             4.8  <StarFilledIcon />
              </p>
              <p className="text-gray-500 text-sm">Overall Rating</p>
            </div>
          </div>
        </div>

        {/* RIGHT: Testimonial Card */}
        <div className="flex-1 max-w-[520px] bg-orange-50 rounded-2xl p-6 shadow-md relative">
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-3">
              <img
                src="/images/people.png"
                alt="User"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-gray-800">Esther Howard</p>
                <p className="text-sm text-gray-500">New York, USA</p>
              </div>
            </div>
            <div className="flex items-center bg-white px-2 py-1 rounded-full gap-1 text-sm font-semibold shadow-sm">
             <StarIcon />
              <span className="text-gray-800">4.7</span>
            </div>
          </div>

          {/* Message */}
          <p className="text-gray-700 text-sm leading-relaxed mb-6">
            Our trip to Kerala with Travel was absolutely magical! The itinerary was perfectly planned, and our guide, Smith, was incredibly knowledgeable and friendly. The houseboat stay was a highlight, and the food was delicious. We highly recommend this company to anyone looking for a memorable experience.
          </p>

          {/* Pagination */}
          <div className="flex items-center justify-between text-sm font-medium text-gray-700 mt-auto">
            <span>01</span>
            <div className="w-full mx-3 h-[3px] bg-orange-200 rounded-full overflow-hidden">
              <div className="w-1/3 h-full bg-orange-500"></div>
            </div>
            <span>03</span>
          </div>
        </div>
      </div>
    </section></>
  )
}

export default Testmonials;