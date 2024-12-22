"use client";
import { useState } from "react";
import { ProgressBar } from "../components/ProgressBar";

export function ApplicationForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    homeLoanAmount: "",
    city: "",
    days: "",
    employmentType: "",
  });
  const [showAll, setShowAll] = useState(false);

  const handleLoanChange = (value) => {
    setFormData({ ...formData, homeLoanAmount: value });
    setCurrentStep((prev) => Math.min(prev + 1, 4));
  };

  const handleCitySelection = (value) => {
    setFormData({ ...formData, city: value });
    setCurrentStep((prev) => Math.min(prev + 1, 4));
  };

  const handleDaysSelection = (value) => {
    setFormData({ ...formData, days: value });
    setCurrentStep((prev) => Math.min(prev + 1, 4));
  };

  const handleEmploymentTypeSelection = (type) => {
    setFormData({ ...formData, employmentType: type });
  };

  const loanRanges = [
    { value: "0-15", label: "Upto ₹15 Lacs" },
    { value: "15-20", label: "₹15 - ₹20 Lacs" },
    { value: "20-30", label: "₹20 - ₹30 Lacs" },
    { value: "30-50", label: "₹30 - ₹50 Lacs" },
    { value: "50-75", label: "₹50 - ₹75 Lacs" },
    { value: "75+", label: "₹75 Lacs +" },
  ];

  const cities = [
    { value: "Delhi", label: "Delhi" },
    { value: "Mumbai", label: "Mumbai" },
    { value: "Pune", label: "Pune" },
    { value: "Chennai", label: "Chennai" },
    { value: "Bengaluru", label: "Bengaluru" },
    { value: "Hyderabad", label: "Hyderabad" },
    { value: "Kolkata", label: "Kolkata" },
    { value: "Jaipur", label: "Jaipur" },
    { value: "Ahmedabad", label: "Ahmedabad" },
    { value: "Surat", label: "Surat" },
    { value: "Lucknow", label: "Lucknow" },
    { value: "Kanpur", label: "Kanpur" },
    { value: "Nagpur", label: "Nagpur" },
    { value: "Indore", label: "Indore" },
    { value: "Bhopal", label: "Bhopal" },
    { value: "Patna", label: "Patna" },
    { value: "Ludhiana", label: "Ludhiana" },
    { value: "Agra", label: "Agra" },
    { value: "Coimbatore", label: "Coimbatore" },
    { value: "Vadodara", label: "Vadodara" },
  ];

  const loanDays = [
    { value: "0-30", label: "Within 30 Days" },
    { value: "31-90", label: "31-90 Days" },
    { value: "91-180", label: "91-180 Days" },
    { value: "180+", label: "180+ Days" },
  ];

  const employmentOptions = [
    {
      label: "Salaried",
      description: "Receive fixed amount of income every month",
      value: "salaried",
    },
    {
      label: "Self-Employed Business",
      description: "Runs a business",
      value: "business-owner",
    },
    {
      label: "Self-Employed Professional",
      description: "Engage in a professiona (e.g. Doctor, C.A., Lawyer, etc)",
      value: "self-employed",
    },
  ];

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleToggleCities = () => {
    setShowAll(!showAll);
  };

  // Limit cities to 8 if showAll is false
  const visibleCities = showAll ? cities : cities.slice(0, 8);

  return (
    <div className="w-full">
      <ProgressBar
        currentStep={currentStep}
        totalSteps={4}
        handleBack={handleBack}
      />

      {currentStep === 1 && (
        <div className="">
          <h2 className="text-2xl font-bold text-greenish">
            Select your desired <br /> Home Loan Amount
          </h2>
          <div className="w-[50px] h-[2px] bg-green-500 mt-1"></div>
          <div className="space-y-4 mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-8 md:gap-y-5 gap-y-4 gap-x-4">
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
            Where are you looking to <br /> buy your property
          </h2>
          <div className="w-[50px] h-[2px] bg-green-500 mt-1"></div>
          <div className="space-y-4 mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-8 md:gap-y-5 gap-y-4 gap-x-4">
              {visibleCities.map((city) => (
                <label
                  key={city.value}
                  htmlFor={city.value}
                  className="cursor-pointer"
                >
                  <div
                    className={`
                relative overflow-hidden rounded-lg border border-gray-200
                transition-colors hover:bg-greenish/[5%]
                ${
                  formData.city === city.value
                    ? "border-greenish bg-greenish/[6%]"
                    : ""
                }
              `}
                  >
                    <div className="flex items-center justify-between p-4">
                      <span
                        className={`text-[14px] font-[500] ${
                          formData.city === city.value
                            ? "text-greenish"
                            : "text-greenish"
                        }`}
                      >
                        {city.label}
                      </span>
                      <input
                        type="radio"
                        id={city.value}
                        name="city"
                        value={city.value}
                        checked={formData.city === city.value}
                        onChange={(e) => handleCitySelection(e.target.value)}
                        className="h-4 w-4 cursor-pointer accent-green-600 border-greenish text-greenish focus:ring-greenish"
                      />
                    </div>
                  </div>
                </label>
              ))}
            </div>

            <button
              onClick={handleToggleCities}
              className="mt-6 flex text-[14px] font-[500] text-greenish underline w-fit mx-auto hover:text-green-700 transition-colors"
            >
              {showAll ? "Show Less Cities" : "View All Cities"}
            </button>
          </div>
        </div>
      )}

      {currentStep === 3 && (
        <div className="">
          <h2 className="text-2xl font-bold text-greenish">
            When are you planning to <br /> take the loan?
          </h2>
          <div className="w-[50px] h-[2px] bg-green-500 mt-1"></div>
          <div className="space-y-4 mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-8 md:gap-y-6 gap-y-4 gap-x-4">
              {loanDays.map((days) => (
                <label
                  key={days.value}
                  htmlFor={days.value}
                  className="cursor-pointer"
                >
                  <div
                    className={`
                relative overflow-hidden rounded-lg border border-gray-200
                transition-colors hover:bg-greenish/[5%]
                ${
                  formData.days === days.value
                    ? "border-greenish bg-greenish/[6%]"
                    : ""
                }
              `}
                  >
                    <div className="flex items-center justify-between p-4">
                      <span
                        className={`text-[14px] font-[500] ${
                          formData.days === days.value
                            ? "text-greenish"
                            : "text-greenish"
                        }`}
                      >
                        {days.label}
                      </span>
                      <input
                        type="radio"
                        id={days.value}
                        name="loanDays"
                        value={days.value}
                        checked={formData.days === days.value}
                        onChange={(e) => handleDaysSelection(e.target.value)}
                        className="h-4 w-4 cursor-pointer accent-green-600 border-greenish text-greenish focus:ring-greenish"
                      />
                    </div>
                  </div>
                </label>
              ))}
            </div>
          </div>
        </div>
      )}

      {currentStep === 4 && (
        <div className="">
          <h2 className="text-2xl font-bold text-greenish">Employment Type</h2>
          <div className="w-[50px] h-[2px] bg-green-500 mt-1"></div>
          <div className="space-y-4 mt-6">
            {employmentOptions.map((option) => (
              <label
                key={option.value}
                className={`block p-4 rounded-lg border-2 cursor-pointer ${
                  formData.employmentType === option.value
                    ? "border-greenish bg-greenish/[5%]"
                    : "border-gray-200 hover:border-greenish/40"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-sm text-gray-900 mb-[4px]">
                      {option.label}
                    </div>
                    <div className="text-xs text-gray-500">
                      {option.description}
                    </div>
                  </div>
                  <input
                    type="radio"
                    name="employmentType"
                    checked={formData.employmentType === option.value}
                    onChange={() => handleEmploymentTypeSelection(option.value)}
                    className="h-4 w-4 accent-green-600 hover:accent-green-600 text-greenish focus:ring-greenish/[5%]"
                  />
                </div>
              </label>
            ))}
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
