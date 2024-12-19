"use client";
import React, { useState } from "react";

const categories = [
  { id: "all", label: "All" },
  { id: "unsecured-loans", label: "Unsecured Loans" },
  { id: "credit-card", label: "Credit Card" },
  { id: "home-loan", label: "Home Loan" },
  { id: "credit-bureau", label: "Credit Bureau" },
  { id: "credit-improvement", label: "Credit Improvement" },
];

const partners = [
  {
    name: "Aditya Birla Capital",
    categories: ["unsecured-loans", "credit-card"],
    className: "sprite-aditya-birla",
  },
  {
    name: "American Express",
    categories: ["credit-card"],
    className: "sprite-american-express",
  },
  {
    name: "Axis Bank",
    categories: ["unsecured-loans", "credit-card", "home-loan"],
    className: "sprite-axis-bank",
  },
  {
    name: "Bank of Baroda",
    categories: ["home-loan", "unsecured-loans"],
    className: "sprite-bank-of-baroda",
  },
  {
    name: "CashE",
    categories: ["credit-improvement"],
    className: "sprite-cashe",
  },
  { name: "Chola", categories: ["unsecured-loans"], className: "sprite-chola" },
  { name: "CIBIL", categories: ["credit-bureau"], className: "sprite-cibil" },
  {
    name: "Kotak",
    categories: ["credit-card", "home-loan"],
    className: "sprite-kotak",
  },
  { name: "CLIX", categories: ["unsecured-loans"], className: "sprite-clix" },
  {
    name: "Credit Saison",
    categories: ["credit-card"],
    className: "sprite-credit-saison",
  },
  { name: "CRIF", categories: ["credit-bureau"], className: "sprite-crif" },
  {
    name: "DMI Finance",
    categories: ["unsecured-loans"],
    className: "sprite-dmi-finance",
  },
  {
    name: "Early Salary",
    categories: ["credit-improvement"],
    className: "sprite-early-salary",
  },
  {
    name: "Equifax",
    categories: ["credit-bureau"],
    className: "sprite-equifax",
  },
  {
    name: "Experian",
    categories: ["credit-bureau"],
    className: "sprite-experian",
  },
  {
    name: "Federal Bank",
    categories: ["home-loan"],
    className: "sprite-federal-bank",
  },
  {
    name: "Flexi Loans",
    categories: ["unsecured-loans"],
    className: "sprite-flexi-loans",
  },
  {
    name: "SMFG",
    categories: ["credit-improvement"],
    className: "sprite-smfg",
  },
  {
    name: "HDB Financial",
    categories: ["unsecured-loans"],
    className: "sprite-hdb-financial",
  },
  {
    name: "HDFC Bank",
    categories: ["credit-card", "home-loan"],
    className: "sprite-hdfc-bank",
  },
  { name: "HDFC", categories: ["home-loan"], className: "sprite-hdfc" },
];

export default function Partners() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredPartners = partners.filter(
    (partner) =>
      activeCategory === "all" || partner.categories.includes(activeCategory)
  );

  return (
    <div className="bg-[#f3f9ff] pt-[50px] pb-[60px] px-4">
      <div className="max-w-[1200px] mx-auto">
        <div className="min-w-[40px] min-h-[2px] w-[40px] h-[2px] bg-[#1b1dc7] mb-[16px]" />
        <h2 className="text-[#1b1dc7] text-[24px] font-bold text-blue-700 mb-[16px]">
          Our partners from
          <br />
          across the industry
        </h2>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-[16px] mb-[24px] mt-[32px]">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-[16px] py-[6px] rounded-[6px] font-[600] text-[14px] transition-all duration-200 border ${
                activeCategory === category.id
                  ? "bg-[#1b1dc7] text-white border-transparent"
                  : "bg-white text-[#1b1dc7] border-[#1b1dc7] hover:bg-blue-50"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Partners Grid */}
        <div className="flex flex-wrap gap-[30px]">
          {filteredPartners.map((partner) => (
            <div
              key={partner.name}
              className="relative flex min-h-[64px] min-w-[137px] h-[64px] w-[137px] bg-white rounded-[8px] flex items-center justify-center transition-all duration-300 hover:shadow-md"
              style={{
                boxShadow: "0 2px 10px 0 rgb(52 105 203 / 12%)",
              }}
            >
              <div
                className={`sprite ${partner.className} w-full h-full`}
                style={{
                  backgroundSize: "cover",
                  boxShadow: "0 2px 10px 0 rgb(52 105 203 / 12%)",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
