import React, { useState, useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoChevronDown, IoCheckmark, IoChevronBack } from "react-icons/io5";

export default function SaveProgressForm({ handleContinue, handleBack }) {
  const [formData, setFormData] = useState({
    fullName: "",
    countryCode: "+33",
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
    { code: "+33", label: "France" },
    { code: "+61", label: "Australia" },
    { code: "+1", label: "USA" },
    // Add more country codes as needed
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
      <h1 className="text-2xl md:text-3xl text-center font-semibold text-[#1e2c4f] mb-8">
        Save your progress
      </h1>
      <p className="text-gray-600 mb-8 text-center">
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
              className="peer w-full p-4 border border-gray-400/50 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-transparent"
            />
            <label
              onClick={() => handleLabelClick(fullNameRef)}
              className="absolute left-2 -top-2.5 bg-white px-2 text-sm text-gray-600 transition-all cursor-text
                peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-placeholder-shown:left-4
                peer-focus:-top-2.5 peer-focus:left-2 peer-focus:text-sm peer-focus:text-gray-600"
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
                  className="h-[56px] appearance-none border border-gray-400/50 rounded-lg px-3 pr-8 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                  className="peer w-full p-4 border border-gray-400/50 rounded-lg pr-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-transparent"
                />
                <label
                  onClick={() => handleLabelClick(phoneRef)}
                  className="absolute left-2 -top-2.5 bg-white px-2 text-sm text-gray-600 transition-all cursor-text
                    peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-placeholder-shown:left-4
                    peer-focus:-top-2.5 peer-focus:left-2 peer-focus:text-sm peer-focus:text-gray-600"
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
              className="peer w-full p-4 border border-gray-400/50 rounded-lg pr-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-transparent"
            />
            <label
              onClick={() => handleLabelClick(emailRef)}
              className="absolute left-2 -top-2.5 bg-white px-2 text-sm text-gray-600 transition-all cursor-text
                peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-placeholder-shown:left-4
                peer-focus:-top-2.5 peer-focus:left-2 peer-focus:text-sm peer-focus:text-gray-600"
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
