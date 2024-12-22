"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { CiMenuFries } from "react-icons/ci";
import { IoMdArrowDropdown } from "react-icons/io";

const allProductsMenu = {
  "SME & Working Capital Loans": [
    { name: "OD (Overdraft)", href: "/od" },
    { name: "CC (Cash Credit)", href: "/cc" },
  ],
  "Unsecured Loans": [
    { name: "Personal Loan", href: "/personal-loan" },
    { name: "Business Loan", href: "/business-loan" },
  ],
  "Secured Loans": [
    { name: "Home Loan", href: "/home-loan" },
    { name: "Loan Against Property", href: "/loan-against-property" },
  ],
  "Car Loans": [
    { name: "New Car & Auto Loan", href: "/new-car-loan" },
    { name: "Old Car Loan", href: "/old-car-loan" },
    { name: "Loan Against Car", href: "/loan-against-car" },
  ],
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 bg-white z-50 transition-shadow duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      {/* Desktop Navbar */}
      <div className="w-full relative z-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-[25px]">
              <Link
                href="/"
                className="flex-shrink-0 flex md:w-[85px] w-[70px] items-center"
              >
                <Image src="/logo.png" alt="logo" width={85} height={32} />
              </Link>

              <div className="hidden md:flex md:items-center">
                <button
                  onMouseEnter={() => setActiveDropdown("allProducts")}
                  className="text-gray-500 px-3 py-2 text-base font-medium flex items-center tracking-tight"
                >
                  My Products
                  <IoMdArrowDropdown className="ml-1 h-4 w-4" />
                </button>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <input
                type="text"
                placeholder="Search"
                className="sm:block hidden md:w-[270px] w-[180px] md:h-10 h-[32px] border border-[#ccc] px-5 rounded-[40px] outline-none text-sm"
              />
              <button className="rounded-lg bg-greenish/10 md:px-[24px] px-[20px] py-2 py-1 md:text-base text-[14px] text-greenish hover:bg-greenish/20 transition-colors">
                Login
              </button>
              <button className="md:hidden z-50" onClick={toggleMenu}>
                <CiMenuFries
                  strokeWidth={0.6}
                  className="md:h-6 h-5 md:w-6 w-5 text-black transition-transform duration-300 text-black"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Mega Menu */}
      {activeDropdown === "allProducts" && (
        <div
          className={`hidden md:block absolute left-1/2 transform -translate-x-1/2 w-full max-w-[1230px] bg-white shadow-lg border z-50 transition-all duration-300 ease-in-out ${
            activeDropdown === "allProducts"
              ? "opacity-100 translate-y-0 top-[62px]"
              : "opacity-0 -translate-y-4 pointer-events-none top-[58px]"
          }`}
          onMouseEnter={() => setActiveDropdown("allProducts")}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 py-4 pt-8">
            <div className="grid grid-cols-4 gap-5">
              {Object.entries(allProductsMenu).map(([category, items]) => (
                <div key={category} className="">
                  <h3 className="text-[#5AA74D] font-semibold text-sm border-b pb-2 mb-3.5">
                    {category}
                  </h3>
                  <ul className="space-y-1">
                    {items.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="text-gray-600 text-sm tracking-tight"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-10 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-16 border-b" /> {/* Spacer for navbar */}
        <div className="overflow-y-auto h-[calc(100vh-64px)] pb-20">
          <div className="px-4 py-2">
            <input
              type="text"
              placeholder="Search"
              className="sm:hidden w-full md:h-10 h-[36px] border border-[#ccc] px-5 rounded-[40px] outline-none text-sm mt-2"
            />
            <div className="space-y-1">
              {Object.entries(allProductsMenu).map(([category, items]) => (
                <div key={category} className="border-b border-gray-200 py-4">
                  <button className="flex items-center justify-between w-full">
                    <span className="text-[#5AA74D] font-semibold text-sm">
                      {category}
                    </span>
                  </button>
                  <ul className="mt-2 ">
                    {items.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="block px-4 py-2 text-sm text-gray-600 hover:text-[#0066FF]"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
