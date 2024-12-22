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
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h1 className="text-2xl md:text-3xl text-center font-semibold text-[#1e2c4f] mb-8">
          Select age of covered member(s)
        </h1>

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
              className="w-full p-4 border rounded-lg pr-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  selectedCity === city
                    ? "bg-blue-100 text-blue-600 border border-blue-200"
                    : "bg-gray-50 text-gray-600 border border-gray-200 hover:bg-gray-100"
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
