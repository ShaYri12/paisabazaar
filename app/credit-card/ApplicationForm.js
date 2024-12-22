"use client";

import { useMemo, useState } from "react";
import { toWords } from "number-to-words";
import { ProgressBar } from "../components/ProgressBar";

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Remove any non-digit characters
    const numericValue = value.replace(/[^0-9]/g, "");
    setFormData((prevState) => ({
      ...prevState,
      [name]: numericValue,
    }));
  };

  const formattedMI = useMemo(() => {
    if (!formData.monthlyIncome) return "";
    return new Intl.NumberFormat("en-IN").format(formData.monthlyIncome);
  }, [formData.monthlyIncome]);

  const miInWords = useMemo(() => {
    if (!formData.monthlyIncome) return "";
    const number = parseInt(formData.monthlyIncome, 10);

    // Convert to words with a custom implementation for "Lac"
    const crorePart = Math.floor(number / 10000000);
    const lacPart = Math.floor((number % 10000000) / 100000);
    const rest = number % 100000;

    const croreText = crorePart > 0 ? `${toWords(crorePart)} Crore` : "";
    const lacText = lacPart > 0 ? `${toWords(lacPart)} Lac` : "";
    const restText = rest > 0 ? `${toWords(rest)}` : "";

    const words = [croreText, lacText, restText].filter(Boolean).join(" ");
    return words.charAt(0).toUpperCase() + words.slice(1) + " Only";
  }, [formData.monthlyIncome]);

  return (
    <div className="w-full">
      <ProgressBar
        currentStep={currentStep}
        totalSteps={3}
        handleBack={handleBack}
      />

      {currentStep === 1 && (
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-bold text-greenish mb-2">
              Employment Type
            </h1>
            <p className="text-gray-600 text-[11px] mb-6">
              We require this information to recommend cards based on your
              profile
            </p>
          </div>

          <div className="space-y-4">
            <label
              className={`block p-4 rounded-lg border-2 cursor-pointer ${
                formData.employmentType === "salaried"
                  ? "border-greenish bg-greenish/[5%]"
                  : "border-gray-200 hover:border-greenish/40"
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-sm text-gray-900 mb-[4px]">
                    Salaried
                  </div>
                  <div className="text-xs text-gray-500">
                    Receives fixed monthly income
                  </div>
                </div>
                <input
                  type="radio"
                  name="employmentType"
                  checked={formData.employmentType === "salaried"}
                  onChange={() => handleEmploymentTypeChange("salaried")}
                  className="h-4 w-4 accent-green-600 hover:accent-green-600 text-greenish focus:ring-greenish/[5%]"
                />
              </div>
            </label>

            <label
              className={`block p-4 rounded-lg border-2 cursor-pointer ${
                formData.employmentType === "self-employed"
                  ? "border-greenish bg-greenish/[5%]"
                  : "border-gray-200 hover:border-greenish/40"
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-sm text-gray-900 mb-[4px]">
                    Self-Employed
                  </div>
                  <div className="text-xs text-gray-500">
                    Working professional (Doctor, CA, etc.)
                  </div>
                </div>
                <input
                  type="radio"
                  name="employmentType"
                  checked={formData.employmentType === "self-employed"}
                  onChange={() => handleEmploymentTypeChange("self-employed")}
                  className="h-4 w-4 accent-green-600 hover:accent-green-600 text-greenish focus:ring-greenish/[5%]"
                />
              </div>
            </label>

            <label
              className={`block p-4 rounded-lg border-2 cursor-pointer ${
                formData.employmentType === "business-owner"
                  ? "border-greenish bg-greenish/[5%]"
                  : "border-gray-200 hover:border-greenish/40"
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-sm text-gray-900 mb-[4px]">
                    Business Owner
                  </div>
                  <div className="text-xs text-gray-500">Runs a business</div>
                </div>
                <input
                  type="radio"
                  name="employmentType"
                  checked={formData.employmentType === "business-owner"}
                  onChange={() => handleEmploymentTypeChange("business-owner")}
                  className="h-4 w-4 accent-green-600 hover:accent-green-600 text-greenish focus:ring-greenish/[5%]"
                />
              </div>
            </label>
          </div>
        </div>
      )}

      {currentStep === 2 && (
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-bold text-greenish mb-2">
              Your In-hand Salary
            </h1>
            <p className="text-gray-600 text-[11px] mb-6">
              We require this information to suggest best cards for you
            </p>
          </div>

          <div className="space-y-2">
            <label className="block text-gray-400 text-[14px] font-[600]">
              Monthly Income
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500 font-[600]">
                ₹
              </span>
              <input
                type="text"
                name="monthlyIncome"
                value={formattedMI}
                onChange={handleChange}
                className="w-full pl-8 px-[15px] py-[8px] border rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500"
                placeholder="30,000"
              />
            </div>
            <p className="text-sm text-gray-500 capitalize">{miInWords}</p>
          </div>
        </div>
      )}

      {currentStep === 3 && (
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-bold text-greenish mb-2">
              Your Current
              <br />
              Residential PIN Code
            </h1>
            <p className="text-gray-600 text-[11px] mb-6">
              We require this information to identify banks which can serve you
              the best
            </p>
          </div>

          <div className="space-y-2">
            <label className="block text-gray-400 text-[14px] font-[600]">
              Current Residential Pincode
            </label>
            <input
              type="text"
              value={formData.pincode}
              onChange={(e) =>
                setFormData({ ...formData, pincode: e.target.value })
              }
              className="block w-full px-[15px] py-[8px] border rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500"
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
      )}

      <button
        onClick={handleContinue}
        className="w-full mt-8 px-6 py-3 text-white bg-greenish rounded-lg hover:bg-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-greenish/[5%] focus:ring-offset-2"
      >
        Continue
      </button>
    </div>
  );
}
