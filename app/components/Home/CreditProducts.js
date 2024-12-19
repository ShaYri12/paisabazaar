"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoArrowForwardOutline } from "react-icons/io5";

const products = [
  {
    title: "CREDIT CARDS",
    description:
      "From 50+ Options, Choose a card matching your lifestyle & needs",
    icon: "/assets/credit-product1.png",
    action: "Get Best Offers",
  },
  {
    title: "PERSONAL LOAN",
    description:
      "Select the best offer curated just for you from a wide choice of Banks & NBFC's",
    icon: "/assets/credit-product2.png",
    action: "Check Eligibility",
  },
  {
    title: "MICRO LOANS",
    subtitle: "(UNDER ₹50K)",
    description: "Instant small ticket loans to meet your immediate cash needs",
    icon: "/assets/credit-product3.png",
    action: "Get Instant Loan",
  },
  {
    title: "BUSINESS LOAN",
    description: "Expand your business with loans at low interest rates",
    icon: "/assets/credit-product4.png",
    action: "Check Eligibility",
  },
  {
    title: "TRANSFER PERSONAL LOAN",
    description: "Get better interest rates on your existing personal loan",
    icon: "/assets/credit-product5.png",
    action: "Reduce Your EMI",
  },
  {
    title: "HOME LOAN",
    description:
      "Choose from lowest interest rates available for your dream home",
    icon: "/assets/credit-product6.png",
    action: "Check Eligibility",
  },
  {
    title: "LOAN AGAINST PROPERTY",
    description: "Get liquidity against your property at best interest rates",
    icon: "/assets/credit-product7.png",
    action: "Check Eligibility",
  },
  {
    title: "TRANSFER HOME LOAN",
    description: "Get better interest rates on your existing home loan",
    icon: "/assets/credit-product8.png",
    action: "Reduce Your EMI",
  },
  {
    title: "STEP UP CREDIT CARD",
    description: "A Credit Card for everyone, backed by a Fixed Deposit",
    icon: "/assets/credit-product9.svg",
    action: "Know More",
  },
  {
    title: "GOLD LOAN",
    description:
      "Get loan against your gold at best interest rates with our doorstep service",
    icon: "/assets/credit-product10.svg",
    action: "Know More",
  },
  {
    title: "LOAN AGAINST MUTUAL FUNDS",
    description: "Get best loan offer against your mutual fund portfolio",
    icon: "/assets/credit-product11.svg",
    action: "Apply Now",
  },
];

export default function CreditProducts() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-8">
      <h1 className="flex items-center gap-2 text-[#1b1dc7] text-[14px] font-bold mb-[16px]">
        CREDIT PRODUCTS{" "}
        <span className="w-[120px] h-[1px] bg-[#1b1dc7] rounded-[4px]"></span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 lg:gap-x-[30px] gap-y-[32px]">
        {products.map((product, index) => (
          <Link
            key={index}
            href="#"
            className={`bg-white rounded-[8px] border border-[#EBEFF7CC] px-[14px] py-[16px] transition-all duration-300 ${
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
                  <div className="h-full">
                    <h2 className="text-[#052f5f] font-bold text-[14px] mb-[8px] uppercase">
                      {product.title}
                      <br />
                      {product.subtitle && <span>{product.subtitle}</span>}
                    </h2>
                    <p className="text-[#69829f] text-[12px] flex-grow mb-[12px] font-[600]">
                      {product.description}
                    </p>
                  </div>
                  <a
                    href="#"
                    className="flex items-center gap-1 text-[#1b1dc7] mb-auto text-[12px] font-[600] hover:text-blue-800 inline-block"
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
