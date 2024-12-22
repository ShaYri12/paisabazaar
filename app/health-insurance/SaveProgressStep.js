import React, { useState, useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoChevronDown, IoCheckmark, IoChevronBack } from "react-icons/io5";

export default function SaveProgressForm({ handleContinue, handleBack }) {
  const [formData, setFormData] = useState({
    fullName: "",
    countryCode: "+91",
    phone: "",
    email: "",
  });

  const [validation, setValidation] = useState({
    phone: false,
    email: false,
  });

  const fullNameRef = useRef(null);
  const phoneRef = useRef(null);
  const emailRef = useRef(null);

  const countryCodes = [
    { code: "+91", label: "India" },
    { code: "+33", label: "France" },
    { code: "+61", label: "Australia" },
    { code: "+1", label: "USA" },
    { code: "+44", label: "United Kingdom" },
    { code: "+49", label: "Germany" },
    { code: "+81", label: "Japan" },
    { code: "+86", label: "China" },
    { code: "+7", label: "Russia" },
    { code: "+39", label: "Italy" },
    { code: "+34", label: "Spain" },
    { code: "+55", label: "Brazil" },
    { code: "+27", label: "South Africa" },
    { code: "+82", label: "South Korea" },
    { code: "+47", label: "Norway" },
    { code: "+31", label: "Netherlands" },
    { code: "+46", label: "Sweden" },
    { code: "+63", label: "Philippines" },
  ];

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = (phone) => {
    return phone.length >= 8 && /^\d+$/.test(phone);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "email") {
      setValidation((prev) => ({
        ...prev,
        email: validateEmail(value),
      }));
    }
    if (name === "phone") {
      setValidation((prev) => ({
        ...prev,
        phone: validatePhone(value),
      }));
    }
  };

  const handleLabelClick = (inputRef) => {
    inputRef.current.focus();
  };

  return (
    <div className="w-full">
      <h1 className="xl:text-[32px] md:text-[28px] text-[24px] font-[600] text-gray-900 mb-[24px] text-center">
        Save your progress
      </h1>
      <p className="text-gray-600 mb-[24px] text-center">
        Get to plans directly next time you visit us
      </p>
      <div className="max-w-md mx-auto">
        {/* Form Fields */}
        <form className="space-y-4">
          {/* Full Name */}
          <div className="relative">
            <input
              type="text"
              name="fullName"
              ref={fullNameRef}
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder=" "
              className="peer w-full px-[15px] py-[12px] pe-12 border border-gray-400/50 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 placeholder-transparent"
            />
            <label
              onClick={() => handleLabelClick(fullNameRef)}
              className="absolute left-2 bg-white px-1 text-xs text-gray-600 transition-all cursor-text
      -top-2.5 peer-placeholder-shown:top-[13px] peer-placeholder-shown:left-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base 
      peer-focus:-top-2.5 peer-focus:left-2 peer-focus:text-xs peer-focus:text-greenish"
            >
              Your full name
            </label>
          </div>

          {/* Phone Number */}
          <div className="relative">
            <div className="flex gap-2">
              <div className="relative">
                <select
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleInputChange}
                  className="appearance-none cursor-pointer w-full px-[15px] py-[12px] pe-8 border border-gray-400/50 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 placeholder-transparent"
                >
                  {countryCodes.map((country) => (
                    <option key={country.code} value={country.code}>
                      {country.code}
                    </option>
                  ))}
                </select>
                <IoChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
              <div className="relative flex-1">
                <input
                  type="tel"
                  name="phone"
                  ref={phoneRef}
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder=" "
                  className="peer w-full px-[15px] py-[12px] pe-12 border border-gray-400/50 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 placeholder-transparent"
                />
                <label
                  onClick={() => handleLabelClick(phoneRef)}
                  className="absolute left-2 bg-white px-1 text-xs text-gray-600 transition-all cursor-text
      -top-2.5 peer-placeholder-shown:top-[13px] peer-placeholder-shown:left-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base 
      peer-focus:-top-2.5 peer-focus:left-2 peer-focus:text-xs peer-focus:text-greenish"
                >
                  Enter mobile number
                </label>
                {validation.phone && (
                  <IoCheckmark className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500 w-5 h-5" />
                )}
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              name="email"
              ref={emailRef}
              value={formData.email}
              onChange={handleInputChange}
              placeholder=" "
              className="peer w-full px-[15px] py-[12px] pe-12 border border-gray-400/50 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 placeholder-transparent"
            />
            <label
              onClick={() => handleLabelClick(emailRef)}
              className="absolute left-2 bg-white px-1 text-xs text-gray-600 transition-all cursor-text
      -top-2.5 peer-placeholder-shown:top-[13px] peer-placeholder-shown:left-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base 
      peer-focus:-top-2.5 peer-focus:left-2 peer-focus:text-xs peer-focus:text-greenish"
            >
              Your email
            </label>
            {validation.email && (
              <IoCheckmark className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500 w-5 h-5" />
            )}
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
        </form>
      </div>
    </div>
  );
}
