import React, { useRef, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoChevronBack, IoClose } from "react-icons/io5";

export default function CityStep({ handleContinue, handleBack }) {
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
  const fullNameRef = useRef(null);

  const handleLabelClick = (inputRef) => {
    inputRef.current.focus();
  };

  return (
    <div className="w-full">
      <h1 className="text-[32px] font-[600] text-gray-900 mb-[24px] text-center">
        Select age of covered member(s)
      </h1>
      <div className="max-w-md mx-auto">
        {/* City Input */}
        <div className="relative mb-6">
          <input
            type="text"
            ref={fullNameRef}
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            placeholder=" "
            className="peer w-full px-[15px] py-[12px] pe-12 border border-gray-400/50 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 placeholder-transparent"
          />
          <label
            onClick={() => handleLabelClick(fullNameRef)}
            className="absolute left-2 bg-white px-1 text-xs text-gray-600 transition-all cursor-text
      -top-2.5 peer-placeholder-shown:top-[13px] peer-placeholder-shown:left-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base 
      peer-focus:-top-2.5 peer-focus:left-2 peer-focus:text-xs peer-focus:text-greenish"
          >
            Enter City or PIN Code
          </label>
          {selectedCity && (
            <button
              onClick={clearSelection}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <IoClose className="w-5 h-5" />
            </button>
          )}
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
        <div className="flex gap-2 justify-center mt-8">
          <button
            onClick={handleBack}
            className="md:hidden w-[48px] min-w-[48px] h-[48px] min-h-[48px] flex items-center justify-center rounded-full hover:bg-greenish/[3%] transition-colors shadow-lg border"
          >
            <IoChevronBack className="w-6 h-6 text-greenish" />
          </button>
          <button
            onClick={handleContinue}
            className="flex items-center justify-center shadow-lg gap-1 w-full sm:w-[320px] px-8 py-3 bg-greenish text-white rounded-lg font-[600] hover:bg-green-600 transition-colors block"
          >
            Continue <IoIosArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
}
