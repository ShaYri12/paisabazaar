import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoChevronBack, IoChevronDown } from "react-icons/io5";
import { FaUser, FaUserTie, FaFemale, FaChild } from "react-icons/fa";

export default function AgeStep({ members, handleContinue, handleBack }) {
  const getIcon = (memberId) => {
    switch (memberId) {
      case "self":
        return FaUser;
      case "wife":
      case "mother":
      case "grandmother":
      case "motherInLaw":
        return FaFemale;
      case "son":
      case "daughter":
        return FaChild;
      case "father":
      case "grandfather":
      case "fatherInLaw":
        return FaUserTie;
      default:
        return FaUser;
    }
  };

  const getLabel = (memberId, index) => {
    const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
    if (memberId === "self") {
      return `Your Age`;
    } else if (memberId === "son" || memberId === "daughter") {
      return `${capitalize(memberId)} ${index + 1}'s Age`;
    }
    return `${capitalize(memberId)}'s Age`;
  };

  return (
    <div className="w-full">
      <h1 className="xl:text-[32px] md:text-[28px] text-[24px] font-[600] text-gray-900 mb-[24px] text-center">
        Select age of covered member(s)
      </h1>
      <div className="max-w-md mx-auto">
        {/* Age Selection Group */}
        <div className="space-y-6">
          {Object.entries(members).map(([id, value]) => {
            if (!value || (typeof value === "object" && !value.selected))
              return null;

            const quantity = typeof value === "object" ? value.quantity : 1;
            const Icon = getIcon(id);

            return Array(quantity)
              .fill()
              .map((_, index) => (
                <div key={`${id}-${index}`} className="relative">
                  <label className="block text-sm text-gray-600 mb-1">
                    {getLabel(id, index)}
                  </label>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-greenish/10 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-greenish" />
                    </div>
                    <div className="relative flex-1">
                      <select className="w-full px-[15px] py-[8px] pe-12 appearance-none border border-gray-400/50 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 cursor-pointer">
                        <option>Select Age</option>
                        {[...Array(100)].map((_, i) => (
                          <option key={i}>{i + 1} yr</option>
                        ))}
                      </select>
                      <IoChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                </div>
              ));
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
