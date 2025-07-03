import React from 'react'

const trending = [
  { city: "Tokyo", image: "/images/tokyo.jpg" },
  { city: "Paris", image: "/images/paris.jpg" },
  { city: "London", image: "/images/london.jpg" },
  { city: "Italy", image: "/images/italy.jpg" },
  { city: "New York", image: "/images/ny.jpg" },
  { city: "India", image: "/images/india.jpg" },
];

export default function Trendingdestinations() {
  return (
    <div className="bg-[#FCF5EF] py-16 px-6 md:px-20 mt-400px">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Trending Destinations</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Immerse yourself in the vibrant culture of trending destinations. Discover hidden gems,
          delectable cuisine, and unforgettable experiences.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-10">
        {trending.map((item) => (
          <div key={item.city} className="flex flex-col items-center">
            <div className="w-[140px] h-[140px] rounded-full overflow-hidden shadow-md">
              <img src={item.image} alt={item.city} className="w-full h-full object-cover" />
            </div>
            <p className="mt-4 font-medium text-lg">{item.city}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
