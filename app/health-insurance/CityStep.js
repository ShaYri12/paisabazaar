import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoClose } from "react-icons/io5";

export default function CityStep({ handleContinue }) {
  const [selectedCity, setSelectedCity] = useState("");

  const popularCities = [
    "Delhi",
    "Bengaluru",
    "Hyderabad",
    "Pune",
    "Mumbai",
    "Thane",
    "Gurgaon",
    "Ghaziabad",
    "Lucknow",
    "Ahmedabad",
  ];

  const handleCitySelect = (city) => {
    setSelectedCity(city);
  };

  const clearSelection = () => {
    setSelectedCity("");
  };

  return (
    <div className="w-full">
      <h1 className="text-[32px] font-[500] text-gray-900 mb-[24px] text-center">
        Select age of covered member(s)
      </h1>
      <div className="max-w-md mx-auto">
        {/* City Input */}
        <div className="relative mb-8">
          <label className="block text-sm text-gray-600 mb-2">
            Enter City or PIN Code
          </label>
          <div className="relative">
            <input
              type="text"
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="w-full px-[15px] md:py-[12px] py-[8px] pe-12 border border-gray-400/50 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500"
              placeholder="Enter your city"
            />
            {selectedCity && (
              <button
                onClick={clearSelection}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <IoClose className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>

        {/* Popular Cities */}
        <div className="space-y-4">
          <h2 className="text-sm font-medium text-gray-600">Popular cities</h2>
          <div className="flex flex-wrap gap-2">
            {popularCities.map((city) => (
              <button
                key={city}
                onClick={() => handleCitySelect(city)}
                className={`px-[16px] py-[4px] rounded-full text-sm transition-colors ${
                  selectedCity === city
                    ? "bg-greenish/[5%] text-greenish border border-greenish"
                    : "bg-gray-50 text-gray-600 border border-gray-300 hover:bg-gray-100"
                }`}
              >
                {city}
              </button>
            ))}
          </div>
        </div>

        {/* Continue Button */}
        <button
          onClick={handleContinue}
          className="flex items-center justify-center shadow-lg mt-8 gap-1 w-full sm:w-[320px] px-8 py-3 bg-greenish text-white rounded-lg font-[600] hover:bg-green-600 transition-colors mx-auto block"
        >
          Continue <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
}
