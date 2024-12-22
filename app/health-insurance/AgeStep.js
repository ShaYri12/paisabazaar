import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoChevronBack, IoChevronDown } from "react-icons/io5";

export default function AgeStep({ members, handleContinue, handleBack }) {
  return (
    <div className="w-full">
      <h1 className="text-[32px] font-[500] text-gray-900 mb-[24px] text-center">
        Select age of covered member(s)
      </h1>
      <div className="max-w-md mx-auto">
        {/* Age Selection Group */}
        <div className="space-y-6">
          {Object.entries(members).map(([id, value]) => {
            if (!value || (typeof value === "object" && !value.selected))
              return null;

            return (
              <div key={id} className="relative">
                <label className="block text-sm text-gray-600 mb-1">
                  {id.charAt(0).toUpperCase() + id.slice(1)} Age
                </label>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
                        fill="#4B84EA"
                      />
                      <path
                        d="M12 14c-6.1 0-11 4-11 9h22c0-5-4.9-9-11-9Z"
                        fill="#4B84EA"
                      />
                    </svg>
                  </div>
                  <div className="relative flex-1">
                    <select className="w-full px-[15px] py-[8px] pe-12 appearance-none border border-gray-400/50 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 cursor-pointer">
                      <option>Select Age</option>
                      {[...Array(81)].map((_, i) => (
                        <option key={i}>{i + 20} yr</option>
                      ))}
                    </select>
                    <IoChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                  </div>
                </div>
              </div>
            );
          })}
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
