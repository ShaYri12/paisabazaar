"use client";
import { useState } from "react";
import { ProgressBar } from "../components/ProgressBar";

export function ApplicationForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    homeLoanAmount: "",
    monthlyIncome: "",
    pincode: "",
  });

  const handleLoanChange = (value) => {
    setFormData({ ...formData, homeLoanAmount: value });
    setCurrentStep((prev) => Math.min(prev + 1, 3));
  };

  const loanRanges = [
    { value: "0-15", label: "Upto ₹15 Lacs" },
    { value: "15-20", label: "₹15 - ₹20 Lacs" },
    { value: "20-30", label: "₹20 - ₹30 Lacs" },
    { value: "30-50", label: "₹30 - ₹50 Lacs" },
    { value: "50-75", label: "₹50 - ₹75 Lacs" },
    { value: "75+", label: "₹75 Lacs +" },
  ];

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  return (
    <div className="w-full">
      <ProgressBar
        currentStep={currentStep}
        totalSteps={5}
        handleBack={handleBack}
      />

      {currentStep === 1 && (
        <div className="">
          <h2 className="text-2xl font-bold text-greenish">
            Select your desired <br /> Home Loan Amount
          </h2>
          <div className="w-[50px] h-[2px] bg-green-500 mt-1"></div>
          <div className="space-y-4 mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-8 md:gap-y-6 gap-y-4 gap-x-4">
              {loanRanges.map((range) => (
                <label
                  key={range.value}
                  htmlFor={range.value}
                  className="cursor-pointer"
                >
                  <div
                    className={`
                relative overflow-hidden rounded-lg border border-gray-200
                transition-colors hover:bg-greenish/[5%]
                ${
                  formData.homeLoanAmount === range.value
                    ? "border-greenish bg-greenish/[6%]"
                    : ""
                }
              `}
                  >
                    <div className="flex items-center justify-between p-4">
                      <span
                        className={`text-[14px] font-[500] ${
                          formData.homeLoanAmount === range.value
                            ? "text-greenish"
                            : "text-greenish"
                        }`}
                      >
                        {range.label}
                      </span>
                      <input
                        type="radio"
                        id={range.value}
                        name="loanRange"
                        value={range.value}
                        checked={formData.homeLoanAmount === range.value}
                        onChange={(e) => handleLoanChange(e.target.value)}
                        className="h-4 w-4 cursor-pointer accent-green-600 border-greenish text-greenish focus:ring-greenish"
                      />
                    </div>
                  </div>
                </label>
              ))}
            </div>

            <p className="mt-6 text-[10px] text-gray-500">
              I authorize Paisabazaar to share details of my Home Loan enquiry
              with Paisabazaar affiliated banks and lending partners
            </p>
          </div>
        </div>
      )}

      {currentStep === 2 && (
        <div className="">
          <h2 className="text-2xl font-bold text-greenish">
            Select your desired <br /> Home Loan Amount
          </h2>
          <div className="w-[50px] h-[2px] bg-green-500 mt-1"></div>
          <div className="space-y-4 mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-8 md:gap-y-6 gap-y-4 gap-x-4">
              {loanRanges.map((range) => (
                <label
                  key={range.value}
                  htmlFor={range.value}
                  className="cursor-pointer"
                >
                  <div
                    className={`
                relative overflow-hidden rounded-lg border border-gray-200
                transition-colors hover:bg-greenish/[5%]
                ${
                  formData.homeLoanAmount === range.value
                    ? "border-greenish bg-greenish/[6%]"
                    : ""
                }
              `}
                  >
                    <div className="flex items-center justify-between p-4">
                      <span
                        className={`text-[14px] font-[500] ${
                          formData.homeLoanAmount === range.value
                            ? "text-greenish"
                            : "text-greenish"
                        }`}
                      >
                        {range.label}
                      </span>
                      <input
                        type="radio"
                        id={range.value}
                        name="loanRange"
                        value={range.value}
                        checked={formData.homeLoanAmount === range.value}
                        onChange={(e) => handleLoanChange(e.target.value)}
                        className="h-4 w-4 cursor-pointer accent-green-600 border-greenish text-greenish focus:ring-greenish"
                      />
                    </div>
                  </div>
                </label>
              ))}
            </div>

            <p className="mt-6 text-[10px] text-gray-500">
              I authorize Paisabazaar to share details of my Home Loan enquiry
              with Paisabazaar affiliated banks and lending partners
            </p>
          </div>
        </div>
      )}

      {currentStep === 3 && (
        <div className="">
          <h2 className="text-2xl font-bold text-greenish">
            Select your desired <br /> Home Loan Amount
          </h2>
          <div className="w-[50px] h-[2px] bg-green-500 mt-1"></div>
          <div className="space-y-4 mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-8 md:gap-y-6 gap-y-4 gap-x-4">
              {loanRanges.map((range) => (
                <label
                  key={range.value}
                  htmlFor={range.value}
                  className="cursor-pointer"
                >
                  <div
                    className={`
                relative overflow-hidden rounded-lg border border-gray-200
                transition-colors hover:bg-greenish/[5%]
                ${
                  formData.homeLoanAmount === range.value
                    ? "border-greenish bg-greenish/[6%]"
                    : ""
                }
              `}
                  >
                    <div className="flex items-center justify-between p-4">
                      <span
                        className={`text-[14px] font-[500] ${
                          formData.homeLoanAmount === range.value
                            ? "text-greenish"
                            : "text-greenish"
                        }`}
                      >
                        {range.label}
                      </span>
                      <input
                        type="radio"
                        id={range.value}
                        name="loanRange"
                        value={range.value}
                        checked={formData.homeLoanAmount === range.value}
                        onChange={(e) => handleLoanChange(e.target.value)}
                        className="h-4 w-4 cursor-pointer accent-green-600 border-greenish text-greenish focus:ring-greenish"
                      />
                    </div>
                  </div>
                </label>
              ))}
            </div>

            <p className="mt-6 text-[10px] text-gray-500">
              I authorize Paisabazaar to share details of my Home Loan enquiry
              with Paisabazaar affiliated banks and lending partners
            </p>
          </div>
        </div>
      )}

      {currentStep === 4 && (
        <div className="">
          <h2 className="text-2xl font-bold text-greenish">
            Select your desired <br /> Home Loan Amount
          </h2>
          <div className="w-[50px] h-[2px] bg-green-500 mt-1"></div>
          <div className="space-y-4 mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-8 md:gap-y-6 gap-y-4 gap-x-4">
              {loanRanges.map((range) => (
                <label
                  key={range.value}
                  htmlFor={range.value}
                  className="cursor-pointer"
                >
                  <div
                    className={`
                relative overflow-hidden rounded-lg border border-gray-200
                transition-colors hover:bg-greenish/[5%]
                ${
                  formData.homeLoanAmount === range.value
                    ? "border-greenish bg-greenish/[6%]"
                    : ""
                }
              `}
                  >
                    <div className="flex items-center justify-between p-4">
                      <span
                        className={`text-[14px] font-[500] ${
                          formData.homeLoanAmount === range.value
                            ? "text-greenish"
                            : "text-greenish"
                        }`}
                      >
                        {range.label}
                      </span>
                      <input
                        type="radio"
                        id={range.value}
                        name="loanRange"
                        value={range.value}
                        checked={formData.homeLoanAmount === range.value}
                        onChange={(e) => handleLoanChange(e.target.value)}
                        className="h-4 w-4 cursor-pointer accent-green-600 border-greenish text-greenish focus:ring-greenish"
                      />
                    </div>
                  </div>
                </label>
              ))}
            </div>

            <p className="mt-6 text-[10px] text-gray-500">
              I authorize Paisabazaar to share details of my Home Loan enquiry
              with Paisabazaar affiliated banks and lending partners
            </p>
          </div>
        </div>
      )}

      {currentStep === 5 && (
        <div className="">
          <h2 className="text-2xl font-bold text-greenish">
            Select your desired <br /> Home Loan Amount
          </h2>
          <div className="w-[50px] h-[2px] bg-green-500 mt-1"></div>
          <div className="space-y-4 mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-8 md:gap-y-6 gap-y-4 gap-x-4">
              {loanRanges.map((range) => (
                <label
                  key={range.value}
                  htmlFor={range.value}
                  className="cursor-pointer"
                >
                  <div
                    className={`
                relative overflow-hidden rounded-lg border border-gray-200
                transition-colors hover:bg-greenish/[5%]
                ${
                  formData.homeLoanAmount === range.value
                    ? "border-greenish bg-greenish/[6%]"
                    : ""
                }
              `}
                  >
                    <div className="flex items-center justify-between p-4">
                      <span
                        className={`text-[14px] font-[500] ${
                          formData.homeLoanAmount === range.value
                            ? "text-greenish"
                            : "text-greenish"
                        }`}
                      >
                        {range.label}
                      </span>
                      <input
                        type="radio"
                        id={range.value}
                        name="loanRange"
                        value={range.value}
                        checked={formData.homeLoanAmount === range.value}
                        onChange={(e) => handleLoanChange(e.target.value)}
                        className="h-4 w-4 cursor-pointer accent-green-600 border-greenish text-greenish focus:ring-greenish"
                      />
                    </div>
                  </div>
                </label>
              ))}
            </div>

            <p className="mt-6 text-[10px] text-gray-500">
              I authorize Paisabazaar to share details of my Home Loan enquiry
              with Paisabazaar affiliated banks and lending partners
            </p>
          </div>
          <button className="w-full mt-8 px-6 py-3 text-white bg-greenish rounded-lg hover:bg-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-greenish/[5%] focus:ring-offset-2">
            Continue
          </button>
        </div>
      )}
    </div>
  );
}
