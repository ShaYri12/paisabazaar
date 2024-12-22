"use client";
import { useMemo, useState } from "react";
import { toWords } from "number-to-words";
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
    const words = toWords(parseInt(formData.monthlyIncome, 10));
    return words.charAt(0).toUpperCase() + words.slice(1) + " Only";
  }, [formData.monthlyIncome]);

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

      {/* <button
        onClick={handleContinue}
        className="w-full mt-8 px-6 py-3 text-white bg-greenish rounded-lg hover:bg-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-greenish/[5%] focus:ring-offset-2"
      >
        Continue
      </button>*/}
    </div>
  );
}
