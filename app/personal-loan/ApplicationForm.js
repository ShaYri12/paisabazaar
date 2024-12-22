import React from "react";
import { IoChevronDown } from "react-icons/io5";
import EMIInput from "../components/EMIInput";
import { useState } from "react";

export default function ApplicationForm() {
  const employmentTypes = [
    "Salaried",
    "Self-Employed Professional",
    "Self-Employed Business",
  ];
  const [formData, setFormData] = useState({
    employmentType: "Salaried",
    currentCompany: "",
    professionalType: "",
    professionalExperience: "",
    businessVintage: "",
    residenceCity: "",
    salaryBank: "",
    grossIncome: "",
    desiredLoanAmount: "",
    currentEMI: "",
    pledgeAssets: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div>
      <h1 className="text-[24px] text-greenish font-bold">Welcome Back!</h1>
      <div className="w-[50px] h-[2px] flex bg-green-500 mt-1"></div>
      <p className="text-gray-600 mt-[16px] text-[14px] font-[600]">
        Please verify your details!
      </p>
      <p className="text-gray-600 text-[14px] font-[500] mb-[10px]">
        This information is critical to get accurate offers from lenders.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-1">
          <label className="block text-gray-600 text-[14px] font-[600]">
            Employment Type
          </label>
          <div className="relative">
            <select
              name="employmentType"
              value={formData.employmentType}
              onChange={handleChange}
              className="w-full px-[15px] py-[8px] pe-12 appearance-none border rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 cursor-pointer"
            >
              {employmentTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            <IoChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        {/* Conditional Fields based on Employment Type */}
        {formData.employmentType === "Salaried" && (
          <>
            <div className="space-y-1">
              <label className="block text-gray-600 text-[14px] font-[600]">
                Current Company
              </label>
              <input
                type="text"
                name="currentCompany"
                placeholder="Enter Your Employer Name"
                value={formData.currentCompany}
                onChange={handleChange}
                className="w-full px-[15px] py-[8px] pe-12 border rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500"
              />
              <p className="text-sm text-gray-500">
                Type slowly to select your company
              </p>
            </div>
          </>
        )}

        {formData.employmentType === "Self-Employed Professional" && (
          <>
            <div className="space-y-1">
              <label className="block text-gray-600 text-[14px] font-[600]">
                Professional Type
              </label>
              <div className="relative">
                <select
                  name="professionalType"
                  value={formData.professionalType}
                  onChange={handleChange}
                  className="w-full px-[15px] py-[8px] border rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 appearance-none pr-10"
                >
                  <option value="" className="text-gray-300">
                    Please Select Your Professional Type
                  </option>
                  <option value="Doctor">Doctor</option>
                  <option value="CA">CA</option>
                  <option value="Lawyer">Lawyer</option>
                </select>
                <IoChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            <div className="space-y-1">
              <label className="block text-gray-600 text-[14px] font-[600]">
                Professional Experience
              </label>
              <input
                type="text"
                name="professionalExperience"
                value={formData.professionalExperience}
                onChange={handleChange}
                className="w-full px-[15px] py-[8px] border rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500"
                placeholder="e.g. Over 5 Years"
              />
            </div>
          </>
        )}

        {formData.employmentType === "Self-Employed Business" && (
          <div className="space-y-1">
            <label className="block text-gray-600 text-[14px] font-[600]">
              Current Business Vintage
            </label>
            <input
              type="text"
              name="businessVintage"
              value={formData.businessVintage}
              onChange={handleChange}
              className="w-full px-[15px] py-[8px] border rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500"
              placeholder="e.g. Over 5 Years"
            />
          </div>
        )}

        {/* Common Fields */}
        <div className="space-y-1">
          <label className="block text-gray-600 text-[14px] font-[600]">
            Residence City
          </label>
          <input
            type="text"
            name="residenceCity"
            value={formData.residenceCity}
            onChange={handleChange}
            className="w-full px-[15px] py-[8px] border rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500"
            placeholder="e.g. Lucknow"
          />
        </div>

        <div className="space-y-1">
          <label className="block text-gray-600 text-[14px] font-[600]">
            {formData.employmentType === "Self-Employed Business"
              ? "Gross Annual Turnover"
              : "Net Monthly  Income"}
          </label>
          <input
            type="text"
            name="grossIncome"
            value={formData.grossIncome}
            onChange={handleChange}
            className="w-full px-[15px] py-[8px] border rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500"
            placeholder="Gross Annual Income"
          />
        </div>

        <div className="space-y-1">
          <label className="block text-gray-600 text-[14px] font-[600]">
            Desired Loan Amount
          </label>
          <input
            type="text"
            name="desiredLoanAmount"
            value={formData.desiredLoanAmount}
            onChange={handleChange}
            className="w-full px-[15px] py-[8px] border rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500"
            placeholder="0"
          />
        </div>

        <EMIInput />

        {formData.employmentType !== "Salaried" && (
          <div className="space-y-1">
            <label className="block text-gray-600 text-[10px] font-[400]">
              Would you like to have an option for additional financing at a
              lower interest rate by pledging your assets (Property, Gold, Car
              or Mutual Fund)?
            </label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="pledgeAssets"
                  value="Yes"
                  checked={formData.pledgeAssets === "Yes"}
                  onChange={handleChange}
                  className="w-4 h-4 text-blue-600"
                />
                <span>Yes</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="pledgeAssets"
                  value="No"
                  checked={formData.pledgeAssets === "No"}
                  onChange={handleChange}
                  className="w-4 h-4 text-blue-600"
                />
                <span>No</span>
              </label>
            </div>
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-greenish text-white md:py-4 py-3 font-[600] rounded-lg hover:bg-green-600 transition-colors mt-[24px]"
        >
          View Best Offers
        </button>
      </form>
    </div>
  );
}
