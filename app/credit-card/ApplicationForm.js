"use client";

import { useState } from "react";
import { ProgressBar } from "./ProgressBar";

export function ApplicationForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    employmentType: "salaried",
    monthlyIncome: "",
    pincode: "",
  });

  const handleEmploymentTypeChange = (type) => {
    setFormData({ ...formData, employmentType: type });
  };

  const handleContinue = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 3));
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  return (
    <div className="w-full max-w-md mx-auto p-6">
      <ProgressBar currentStep={currentStep} totalSteps={3} />

      {currentStep === 1 && (
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-bold text-blue-600 mb-2">
              Employment Type
            </h1>
            <p className="text-gray-600 text-sm mb-6">
              We require this information to recommend cards based on your
              profile
            </p>
          </div>

          <div className="space-y-4">
            <label
              className={`block p-4 rounded-lg border-2 cursor-pointer ${
                formData.employmentType === "salaried"
                  ? "border-blue-600 bg-blue-50"
                  : "border-gray-200 hover:border-blue-200"
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-gray-900">Salaried</div>
                  <div className="text-sm text-gray-500">
                    Receives fixed monthly income
                  </div>
                </div>
                <input
                  type="radio"
                  name="employmentType"
                  checked={formData.employmentType === "salaried"}
                  onChange={() => handleEmploymentTypeChange("salaried")}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                />
              </div>
            </label>

            <label
              className={`block p-4 rounded-lg border-2 cursor-pointer ${
                formData.employmentType === "self-employed"
                  ? "border-blue-600 bg-blue-50"
                  : "border-gray-200 hover:border-blue-200"
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-gray-900">Self-Employed</div>
                  <div className="text-sm text-gray-500">
                    Working professional (Doctor, CA, etc.)
                  </div>
                </div>
                <input
                  type="radio"
                  name="employmentType"
                  checked={formData.employmentType === "self-employed"}
                  onChange={() => handleEmploymentTypeChange("self-employed")}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                />
              </div>
            </label>

            <label
              className={`block p-4 rounded-lg border-2 cursor-pointer ${
                formData.employmentType === "business-owner"
                  ? "border-blue-600 bg-blue-50"
                  : "border-gray-200 hover:border-blue-200"
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-gray-900">
                    Business Owner
                  </div>
                  <div className="text-sm text-gray-500">Runs a business</div>
                </div>
                <input
                  type="radio"
                  name="employmentType"
                  checked={formData.employmentType === "business-owner"}
                  onChange={() => handleEmploymentTypeChange("business-owner")}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                />
              </div>
            </label>
          </div>
        </div>
      )}

      {currentStep === 2 && (
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-bold text-blue-600 mb-2">
              Your In-hand Salary
            </h1>
            <p className="text-gray-600 text-sm mb-6">
              We require this information to suggest best cards for you
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Monthly Income
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                  ₹
                </span>
                <input
                  type="text"
                  value={formData.monthlyIncome}
                  onChange={(e) =>
                    setFormData({ ...formData, monthlyIncome: e.target.value })
                  }
                  className="block w-full pl-8 pr-12 py-3 border-b border-gray-300 focus:border-blue-500 focus:ring-0 text-lg"
                  placeholder="30,000"
                />
              </div>
              <p className="mt-2 text-sm text-gray-500">Thirty Thousand Only</p>
            </div>
          </div>
        </div>
      )}

      {currentStep === 3 && (
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-bold text-blue-600 mb-2">
              Your Current
              <br />
              Residential PIN Code
            </h1>
            <p className="text-gray-600 text-sm mb-6">
              We require this information to identify banks which can serve you
              the best
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Current Residential Pincode
              </label>
              <input
                type="text"
                value={formData.pincode}
                onChange={(e) =>
                  setFormData({ ...formData, pincode: e.target.value })
                }
                className="block w-full py-3 border-b border-gray-300 focus:border-blue-500 focus:ring-0 text-lg"
                placeholder="110001"
                maxLength={6}
              />
              <div className="flex justify-between mt-2">
                <p className="text-sm text-gray-500">Delhi, Delhi-NCR</p>
                <p className="text-sm text-gray-500">
                  {formData.pincode.length}/6 Digits
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={handleContinue}
        className="w-full mt-8 px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Continue
      </button>
    </div>
  );
}
