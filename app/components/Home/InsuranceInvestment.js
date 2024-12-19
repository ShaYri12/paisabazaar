"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoArrowForwardOutline } from "react-icons/io5";

const products = [
  {
    badge: "Up to 10% Off",
    title: "Term Life Insurance",
    description: "Safeguard your loved ones from future uncertainties",
    icon: "/assets/credit-product1.png",
    action: "Starting from ₹ 473/month*",
  },
  {
    badge: "Tax Free Returns",
    title: "Investment Plan",
    description:
      "Plans starting from ₹1,000 with Inbuilt Life Cover & Tax Benefits",
    icon: "/assets/credit-product2.png",
    action: "View Plans",
  },
  {
    badge: "Pre-Approved",
    title: "Health Insurance",
    description:
      "Protect yourself and your family against medical expenses with up to 25% discount",
    icon: "/assets/credit-product3.png",
    action: "Starting @ ₹ 8/day*",
  },
  {
    title: "Direct Mutual Funds",
    description: "Get higher returns on your Mutual Fund investments",
    icon: "/assets/credit-product4.png",
    action: "Check Your Investment",
  },
  {
    badge: "New",
    title: "POCKET PROTECT",
    description:
      "Safeguard yourself against potential financial loss and frauds",
    icon: "/assets/credit-product5.png",
    action: "Know More",
  },
  {
    badge: "New",
    title: "Car Insurance",
    description:
      "Protect yourself & your Car from financial emergencies and save up to 85%*",
    icon: "/assets/credit-product6.png",
    action: "View Prices",
  },
];

export default function InsuranceInvestment() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-8">
      <h1 className="flex items-center gap-2 text-[#1b1dc7] text-[14px] font-bold mb-[16px]">
        Insurance & Investment{" "}
        <span className="w-[120px] h-[1px] bg-[#1b1dc7] rounded-[4px]"></span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 lg:gap-x-[30px] gap-y-[32px]">
        {products.map((product, index) => (
          <Link
            key={index}
            href="#"
            className={`bg-white rounded-[8px] border border-[#EBEFF7CC] px-[14px] py-[16px] transition-all duration-300 relative ${
              hoveredIndex !== null && hoveredIndex !== index
                ? "filter grayscale"
                : "shadow-lg"
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="flex flex-col h-full">
              <div className="flex items-start justify-between gap-1 h-full">
                <div className="flex flex-col justify-between min-h-full h-full">
                  {product.badge && (
                    <span className="absolute left-[12px] top-[-9px] px-[10px] py-[2px] text-white text-[10px] bg-[#19b24d] rounded-[4px] font-[600]">
                      {product.badge}
                    </span>
                  )}
                  <div className="h-full">
                    <h2 className="text-[#052f5f] font-bold text-[14px] mb-[8px] uppercase">
                      {product.title}
                    </h2>
                    <p className="text-[#69829f] text-[12px] flex-grow mb-[12px] font-[600]">
                      {product.description}
                    </p>
                  </div>
                  <a
                    href="#"
                    className="flex items-center gap-1 text-[#1b1dc7] mb-auto text-[11px] font-[600] hover:text-blue-800 inline-block"
                  >
                    {product.action} <IoArrowForwardOutline size={13} />
                  </a>
                </div>
                <Image
                  src={product.icon}
                  alt={product.title}
                  width={60} // Provide width for optimization
                  height={60} // Provide height for optimization
                  priority // Optional: Ensures these images load eagerly
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
