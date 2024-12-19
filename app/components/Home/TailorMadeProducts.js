import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";

export default function TailorMadeProducts() {
  const benefits = [
    "3% Cashback on Online Spends",
    "1.5% Cashback on all Other Spends",
    "First Year Free",
  ];

  return (
    <div className="relative overflow-hidden bg-white py-20">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-700 mb-2">
            Tailor Made Products Exclusively
          </h2>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-700">
            for Paisabazaar Customers
          </h2>
          <div className="mt-4 w-24 h-1 bg-pink-600 mx-auto"></div>
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
          {/* Credit Card Image */}
          <div className="relative w-full md:w-1/3 max-w-sm">
            <img
              src="/placeholder.svg?height=400&width=250"
              alt="Yes Bank Paisabazaar PaisaSave Credit Card"
              className="w-full h-auto transform rotate-[-15deg] shadow-2xl rounded-2xl"
            />
          </div>

          {/* Benefits */}
          <div className="w-full md:w-1/3">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Yes Bank Paisabazaar PaisaSave Credit Card
            </h3>

            <ul className="space-y-6 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-4">
                  <BsCheckCircleFill className="w-6 h-6 text-pink-600 flex-shrink-0" />
                  <span className="text-lg text-gray-800">{benefit}</span>
                </li>
              ))}
            </ul>

            <a
              href="#"
              className="text-blue-700 font-semibold text-lg hover:text-blue-800 transition-colors"
            >
              Know More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
