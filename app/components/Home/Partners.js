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
    logo: "/placeholder.svg?height=60&width=150",
    categories: ["unsecured-loans", "credit-card"],
  },
  {
    name: "American Express",
    logo: "/placeholder.svg?height=60&width=150",
    categories: ["credit-card"],
  },
  {
    name: "Axis Bank",
    logo: "/placeholder.svg?height=60&width=150",
    categories: ["unsecured-loans", "credit-card", "home-loan"],
  },
  {
    name: "Bank of Baroda",
    logo: "/placeholder.svg?height=60&width=150",
    categories: ["home-loan", "unsecured-loans"],
  },
  {
    name: "CashE",
    logo: "/placeholder.svg?height=60&width=150",
    categories: ["credit-improvement"],
  },
  {
    name: "Chola",
    logo: "/placeholder.svg?height=60&width=150",
    categories: ["unsecured-loans"],
  },
  {
    name: "CIBIL",
    logo: "/placeholder.svg?height=60&width=150",
    categories: ["credit-bureau"],
  },
  {
    name: "Kotak",
    logo: "/placeholder.svg?height=60&width=150",
    categories: ["credit-card", "home-loan"],
  },
  {
    name: "CLIX",
    logo: "/placeholder.svg?height=60&width=150",
    categories: ["unsecured-loans"],
  },
  {
    name: "Credit Saison",
    logo: "/placeholder.svg?height=60&width=150",
    categories: ["credit-card"],
  },
  {
    name: "CRIF",
    logo: "/placeholder.svg?height=60&width=150",
    categories: ["credit-bureau"],
  },
  {
    name: "DMI Finance",
    logo: "/placeholder.svg?height=60&width=150",
    categories: ["unsecured-loans"],
  },
  {
    name: "Early Salary",
    logo: "/placeholder.svg?height=60&width=150",
    categories: ["credit-improvement"],
  },
  {
    name: "Equifax",
    logo: "/placeholder.svg?height=60&width=150",
    categories: ["credit-bureau"],
  },
  {
    name: "Experian",
    logo: "/placeholder.svg?height=60&width=150",
    categories: ["credit-bureau"],
  },
  {
    name: "Federal Bank",
    logo: "/placeholder.svg?height=60&width=150",
    categories: ["home-loan"],
  },
  {
    name: "Flexi Loans",
    logo: "/placeholder.svg?height=60&width=150",
    categories: ["unsecured-loans"],
  },
  {
    name: "SMFG",
    logo: "/placeholder.svg?height=60&width=150",
    categories: ["credit-improvement"],
  },
  {
    name: "HDB Financial",
    logo: "/placeholder.svg?height=60&width=150",
    categories: ["unsecured-loans"],
  },
  {
    name: "HDFC Bank",
    logo: "/placeholder.svg?height=60&width=150",
    categories: ["credit-card", "home-loan"],
  },
  {
    name: "HDFC",
    logo: "/placeholder.svg?height=60&width=150",
    categories: ["home-loan"],
  },
];

export default function Partners() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredPartners = partners.filter(
    (partner) =>
      activeCategory === "all" || partner.categories.includes(activeCategory)
  );

  return (
    <div className="bg-[#F8F9FF] py-16">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-4xl font-bold text-blue-700 mb-2">
          Our partners from
        </h2>
        <h2 className="text-4xl font-bold text-blue-700 mb-12">
          across the industry
        </h2>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeCategory === category.id
                  ? "bg-blue-700 text-white"
                  : "bg-white text-blue-700 border border-blue-700 hover:bg-blue-50"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-6">
          {filteredPartners.map((partner) => (
            <div
              key={partner.name}
              className="bg-white rounded-lg shadow-sm p-6 flex items-center justify-center transition-all duration-300 hover:shadow-md"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
