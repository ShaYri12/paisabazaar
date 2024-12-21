"use client";

import { useState, useMemo } from "react";
import { toWords } from "number-to-words";

export default function EMIInput() {
  const [formData, setFormData] = useState({
    currentEMI: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Remove any non-digit characters
    const numericValue = value.replace(/[^0-9]/g, "");
    setFormData((prevState) => ({
      ...prevState,
      [name]: numericValue,
    }));
  };

  const formattedEMI = useMemo(() => {
    if (!formData.currentEMI) return "";
    return new Intl.NumberFormat("en-IN").format(formData.currentEMI);
  }, [formData.currentEMI]);

  const emiInWords = useMemo(() => {
    if (!formData.currentEMI) return "";
    const words = toWords(parseInt(formData.currentEMI, 10));
    return words.charAt(0).toUpperCase() + words.slice(1) + " Only";
  }, [formData.currentEMI]);

  return (
    <div className="space-y-1">
      <label className="block text-gray-600 text-[14px] font-[600]">
        Total EMIs You Pay Currently
      </label>
      <input
        type="text"
        name="currentEMI"
        value={formattedEMI}
        onChange={handleChange}
        className="w-full px-[15px] py-[8px] border rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500"
        placeholder="1,000"
      />
      <p className="text-sm text-gray-500 capitalize">{emiInWords}</p>
    </div>
  );
}
