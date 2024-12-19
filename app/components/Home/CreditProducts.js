"use client";
import React, { useState } from "react";
import { BsCreditCard2Front } from "react-icons/bs";
import { BiMoney } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";
import { FaBriefcase } from "react-icons/fa";
import { RiExchangeFundsFill } from "react-icons/ri";
import { GiGoldBar } from "react-icons/gi";
import Link from "next/link";

const products = [
  {
    title: "CREDIT CARDS",
    description:
      "From 50+ Options, Choose a card matching your lifestyle & needs",
    icon: <BsCreditCard2Front className="w-8 h-8 text-blue-600" />,
    action: "Get Best Offers",
  },
  {
    title: "PERSONAL LOAN",
    description:
      "Select the best offer curated just for you from a wide choice of Banks & NBFC's",
    icon: <BiMoney className="w-8 h-8 text-green-600" />,
    action: "Check Eligibility",
  },
  {
    title: "MICRO LOANS",
    subtitle: "(UNDER ₹50K)",
    description: "Instant small ticket loans to meet your immediate cash needs",
    icon: <BiMoney className="w-8 h-8 text-yellow-600" />,
    action: "Get Instant Loan",
  },
  {
    title: "BUSINESS LOAN",
    description: "Expand your business with loans at low interest rates",
    icon: <FaBriefcase className="w-8 h-8 text-blue-600" />,
    action: "Check Eligibility",
  },
  {
    title: "TRANSFER PERSONAL LOAN",
    description: "Get better interest rates on your existing personal loan",
    icon: <BiMoney className="w-8 h-8 text-yellow-600" />,
    action: "Reduce Your EMI",
  },
  {
    title: "HOME LOAN",
    description:
      "Choose from lowest interest rates available for your dream home",
    icon: <AiOutlineHome className="w-8 h-8 text-blue-600" />,
    action: "Check Eligibility",
  },
  {
    title: "LOAN AGAINST PROPERTY",
    description: "Get liquidity against your property at best interest rates",
    icon: <AiOutlineHome className="w-8 h-8 text-yellow-600" />,
    action: "Check Eligibility",
  },
  {
    title: "TRANSFER HOME LOAN",
    description: "Get better interest rates on your existing home loan",
    icon: <AiOutlineHome className="w-8 h-8 text-blue-600" />,
    action: "Reduce Your EMI",
  },
  {
    title: "STEP UP CREDIT CARD",
    description: "A Credit Card for everyone, backed by a Fixed Deposit",
    icon: <BsCreditCard2Front className="w-8 h-8 text-purple-600" />,
    action: "Know More",
  },
  {
    title: "GOLD LOAN",
    description:
      "Get loan against your gold at best interest rates with our doorstep service",
    icon: <GiGoldBar className="w-8 h-8 text-yellow-600" />,
    action: "Know More",
  },
  {
    title: "LOAN AGAINST MUTUAL FUNDS",
    description: "Get best loan offer against your mutual fund portfolio",
    icon: <RiExchangeFundsFill className="w-8 h-8 text-blue-600" />,
    action: "Apply Now",
  },
];

export default function CreditProducts() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-8">
      <h1 className="text-blue-700 text-2xl font-bold mb-8 border-b-2 border-blue-700 pb-2">
        CREDIT PRODUCTS
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <Link
            key={index}
            href="#"
            className={`bg-white rounded-lg shadow p-6 transition-all duration-300 ${
              hoveredIndex !== null && hoveredIndex !== index
                ? "filter grayscale"
                : ""
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center mb-4">
                <div className="mr-4">{product.icon}</div>
                <h2 className="text-navy-800 font-bold text-lg">
                  {product.title}
                  {product.subtitle && (
                    <span className="block text-sm font-normal">
                      {product.subtitle}
                    </span>
                  )}
                </h2>
              </div>
              <p className="text-gray-600 text-sm flex-grow">
                {product.description}
              </p>
              <a
                href="#"
                className="text-blue-600 mt-4 text-sm font-medium hover:text-blue-800 inline-block"
              >
                {product.action} →
              </a>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
