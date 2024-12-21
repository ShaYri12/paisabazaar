"use client";

import { useState } from "react";

export default function MobileInput() {
  const [digits, setDigits] = useState("");

  const handleChange = (e) => {
    const value = e.target.value.replace(/\D/g, ""); // Only allow digits
    if (value.length <= 10) {
      setDigits(value);
    }
  };

  return (
    <div>
      <div className="space-y-[4px]">
        <label className="block text-sm text-gray-700">Mobile Number</label>

        <div className="relative border-b">
          <div className="absolute inset-y-0 left-0 flex items-center pl-2">
            <img
              src="https://flagcdn.com/w320/in.png"
              alt="India flag"
              className="h-5 w-7 rounded-lg object-contain"
            />
            <span className="ml-1 text-gray-900">+91 -</span>
          </div>

          <input
            type="tel"
            value={digits}
            onChange={handleChange}
            className="w-full pl-24 pe-24 py-2 text-sm bg-transparent rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 transition-colors"
            placeholder="XXXXXXXXXX"
          />
          <div className="absolute inset-y-0 right-2 flex items-center">
            <span className="text-[10px]">{digits.length}/10 Digits</span>
          </div>
        </div>

        <div className="flex justify-between text-[10px] text-gray-500">
          <p>We will check Personalized Offers against your number</p>
        </div>
      </div>
    </div>
  );
}
