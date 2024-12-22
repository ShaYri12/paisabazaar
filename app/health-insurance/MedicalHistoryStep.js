import React, { useState } from "react";
import { IoChevronBack } from "react-icons/io5";

export default function MedicalHistory({ handleViewPlan, handleBack }) {
  const [selectedConditions, setSelectedConditions] = useState([]);
  const [whatsappUpdates, setWhatsappUpdates] = useState(false);

  const medicalConditions = [
    "Diabetes",
    "Blood Pressure",
    "Heart disease",
    "Any Surgery",
    "Thyroid",
    "Asthma",
    "Other disease",
    "None of these",
  ];

  const handleConditionToggle = (condition) => {
    setSelectedConditions((prev) => {
      if (condition === "None of these") {
        // If "None of these" is selected, clear all other selections
        return prev.includes(condition) ? [] : [condition];
      } else {
        // If any other condition is selected, remove "None of these"
        const newSelection = prev.includes(condition)
          ? prev.filter((item) => item !== condition)
          : [...prev.filter((item) => item !== "None of these"), condition];
        return newSelection;
      }
    });
  };

  return (
    <div className="w-full">
      <h1 className="text-[32px] font-[600] text-gray-900 mb-[14px] text-center">
        Medical history
      </h1>
      <p className="text-gray-600 mb-[24px] text-center">
        Do any member(s) have any existing illnesses for which they take regular
        medication?
      </p>
      <div className="max-w-md mx-auto">
        {/* Medical Conditions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {medicalConditions.map((condition) => (
            <div
              key={condition}
              onClick={() => handleConditionToggle(condition)}
              className={`relative border rounded-lg p-4 cursor-pointer hover:bg-gray-50 transition-colors ${
                selectedConditions.includes(condition)
                  ? "border-greenish bg-greenish/[4%]"
                  : "border-gray-300"
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-5 h-5 border-2 rounded flex items-center justify-center
                      ${
                        selectedConditions.includes(condition)
                          ? "border-greenish bg-greenish"
                          : "border-gray-300"
                      }`}
                >
                  {selectedConditions.includes(condition) && (
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      strokeWidth="2"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M5 13l4 4L19 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </div>
                <span className="text-[#1e2c4f]">{condition}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Custom WhatsApp Updates Toggle */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-green-800 text-sm">
            Get Updates on WhatsApp
          </span>
          <button
            onClick={() => setWhatsappUpdates(!whatsappUpdates)}
            className={`relative inline-flex h-[20px] w-9 items-center rounded-full transition-colors duration-200 ease-in-out focus:outline-none
                ${whatsappUpdates ? "bg-greenish" : "bg-gray-200"}`}
          >
            <span
              className={`inline-block h-[15px] w-[15px] transform rounded-full bg-white transition duration-200 ease-in-out
                  ${
                    whatsappUpdates ? "translate-x-[19px]" : "translate-x-[3px]"
                  }`}
            />
          </button>
        </div>

        {/* View Plans Button */}
        <div className="flex gap-2 justify-center mt-8">
          <button
            onClick={handleBack}
            className="md:hidden w-[48px] min-w-[48px] h-[48px] min-h-[48px] flex items-center justify-center rounded-full hover:bg-greenish/[3%] transition-colors shadow-lg border"
          >
            <IoChevronBack className="w-6 h-6 text-greenish" />
          </button>
          <button
            onClick={handleViewPlan}
            className="flex items-center justify-center shadow-lg gap-1 w-full sm:w-[320px] px-8 py-3 bg-greenish text-white rounded-lg font-[600] hover:bg-green-600 transition-colors block"
          >
            View Plans
          </button>
        </div>
      </div>
    </div>
  );
}
