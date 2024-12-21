"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoMdCheckmark } from "react-icons/io";
import { IoChevronDown } from "react-icons/io5";

export default function PersonalLoan() {
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
    residenceCity: "Lucknow",
    salaryBank: "",
    grossIncome: "",
    desiredLoanAmount: "",
    currentEMI: "",
    pledgeAssets: "",
  });
  const features = [
    "Compare & Choose the Best Offer",
    "Check Loan Amount Eligibility",
    "Know your Approval Chances",
  ];

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
    <main className="flex md:flex-row flex-col md:h-screen overflow-y-auto">
      {/* Left Section */}
      <div
        className="md:block hidden lg:w-[43%] md:w-[47%] w-full px-[24px] py-[10px] md:h-screen overflow-y-auto"
        style={{
          background:
            "linear-gradient(180deg,rgb(222, 254, 202), rgba(243, 244, 255, 0))",
        }}
      >
        <Link
          href="/"
          className="flex-shrink-0 flex md:w-[75px] w-[70px] items-center ms-[-9px] my-[10px]"
        >
          <Image src="/logo.png" alt="logo" width={75} height={32} />
        </Link>
        <div className="max-w-[390px] mx-auto">
          <div className="mb-12">
            <h1 className="text-[24px] font-bold text-green-800 py-[20px]">
              Personal Loan
            </h1>
            <div className="space-y-[30px]">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-[24px] h-[24px] min-w-[24px] min-h-[24px] rounded-full bg-white/40 flex items-center justify-center">
                    <div className="w-[16px] h-[16px] rounded-full bg-white flex items-center justify-center">
                      <IoMdCheckmark
                        size={15}
                        className="text-green-600 flex-shrink-0"
                      />
                    </div>
                  </div>
                  <span className="text-[13px] text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative flex items-center justify-center mt-8">
            <Image
              src="/assets/personal-loan.svg"
              alt="personal-loan"
              width={309}
              height={359}
            />
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="lg:w-[57%] md:w-[53%] w-full bg-white overflow-y-auto md:h-screen">
        <div className="md:hidden flex items-center justify-between px-[24px] py-[10px]">
          <Link
            href="/"
            className="flex-shrink-0 flex md:w-[75px] w-[70px] items-center ms-[-9px] my-[10px]"
          >
            <Image src="/logo.png" alt="logo" width={75} height={32} />
          </Link>
        </div>
        <div className="md:p-12 p-5">
          <div className="max-w-[420px] mx-auto">
            <div className="max-w-2xl mx-auto p-6">
              <h1 className="text-blue-600 text-2xl font-semibold mb-2">
                Welcome Back!
              </h1>
              <p className="text-gray-600 mb-6">
                This information is critical to get accurate offers from
                lenders.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="block text-gray-700">Employment Type</label>
                  <div className="relative">
                    <select
                      name="employmentType"
                      value={formData.employmentType}
                      onChange={handleChange}
                      className="w-full p-3 border rounded-lg appearance-none pr-10 text-gray-700"
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
                    <div className="space-y-2">
                      <label className="block text-gray-700">
                        Current Company
                      </label>
                      <input
                        type="text"
                        name="currentCompany"
                        placeholder="Enter Your Employer Name"
                        value={formData.currentCompany}
                        onChange={handleChange}
                        className="w-full p-3 border rounded-lg"
                      />
                      <p className="text-sm text-gray-500">
                        Type slowly to select your company
                      </p>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-gray-700">Salary Bank</label>
                      <div className="relative">
                        <select
                          name="salaryBank"
                          value={formData.salaryBank}
                          onChange={handleChange}
                          className="w-full p-3 border rounded-lg appearance-none pr-10"
                        >
                          <option value="Indusind Bank">Indusind Bank</option>
                          <option value="HDFC Bank">HDFC Bank</option>
                          <option value="ICICI Bank">ICICI Bank</option>
                        </select>
                        <IoChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      </div>
                    </div>
                  </>
                )}

                {formData.employmentType === "Self-Employed Professional" && (
                  <>
                    <div className="space-y-2">
                      <label className="block text-gray-700">
                        Professional Type
                      </label>
                      <div className="relative">
                        <select
                          name="professionalType"
                          value={formData.professionalType}
                          onChange={handleChange}
                          className="w-full p-3 border rounded-lg appearance-none pr-10"
                        >
                          <option value="">
                            Please Select Your Professional Type
                          </option>
                          <option value="Doctor">Doctor</option>
                          <option value="CA">CA</option>
                          <option value="Lawyer">Lawyer</option>
                        </select>
                        <IoChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-gray-700">
                        Professional Experience
                      </label>
                      <div className="relative">
                        <select
                          name="professionalExperience"
                          value={formData.professionalExperience}
                          onChange={handleChange}
                          className="w-full p-3 border rounded-lg appearance-none pr-10"
                        >
                          <option value="Over 5 Years">Over 5 Years</option>
                          <option value="3-5 Years">3-5 Years</option>
                          <option value="1-3 Years">1-3 Years</option>
                        </select>
                        <IoChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      </div>
                    </div>
                  </>
                )}

                {formData.employmentType === "Self-Employed Business" && (
                  <div className="space-y-2">
                    <label className="block text-gray-700">
                      Current Business Vintage
                    </label>
                    <div className="relative">
                      <select
                        name="businessVintage"
                        value={formData.businessVintage}
                        onChange={handleChange}
                        className="w-full p-3 border rounded-lg appearance-none pr-10"
                      >
                        <option value="Over 5 Years">Over 5 Years</option>
                        <option value="3-5 Years">3-5 Years</option>
                        <option value="1-3 Years">1-3 Years</option>
                      </select>
                      <IoChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    </div>
                  </div>
                )}

                {/* Common Fields */}
                <div className="space-y-2">
                  <label className="block text-gray-700">Residence City</label>
                  <div className="relative">
                    <select
                      name="residenceCity"
                      value={formData.residenceCity}
                      onChange={handleChange}
                      className="w-full p-3 border rounded-lg appearance-none pr-10"
                    >
                      <option value="Lucknow">Lucknow</option>
                      <option value="Delhi">Delhi</option>
                      <option value="Mumbai">Mumbai</option>
                    </select>
                    <IoChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-gray-700">
                    {formData.employmentType === "Self-Employed Business"
                      ? "Gross Annual Turnover"
                      : "Gross Annual Income"}
                  </label>
                  <input
                    type="text"
                    name="grossIncome"
                    value={formData.grossIncome}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg"
                    placeholder="Gross Annual Income"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-gray-700">
                    Desired Loan Amount
                  </label>
                  <input
                    type="text"
                    name="desiredLoanAmount"
                    value={formData.desiredLoanAmount}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg"
                    placeholder="0"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-gray-700">
                    Total EMIs You Pay Currently
                  </label>
                  <input
                    type="text"
                    name="currentEMI"
                    value={formData.currentEMI}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg"
                    placeholder="1,000"
                  />
                  <p className="text-sm text-gray-500">One Thousand Only</p>
                </div>

                {formData.employmentType !== "Salaried" && (
                  <div className="space-y-2">
                    <label className="block text-gray-700">
                      Would you like to have an option for additional financing
                      at a lower interest rate by pledging your assets
                      (Property, Gold, Car or Mutual Fund)?
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
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  View Best Offers
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
