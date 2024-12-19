"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { CiMenuFries } from "react-icons/ci";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const allProductsMenu = {
  LOANS: [
    { name: "Personal Loan", href: "/personal-loan" },
    { name: "Micro Loan (Under ₹50K)", href: "/micro-loan" },
    { name: "Business Loan", href: "/business-loan" },
    { name: "Home Loan", href: "/home-loan" },
    { name: "Loan Against Property", href: "/loan-against-property" },
  ],
  "OTHER PRODUCTS": [
    { name: "Credit Score", href: "/credit-score", badge: "FREE" },
    { name: "Credit Card", href: "/credit-card" },
    { name: "Step-Up Card", href: "/step-up-card" },
  ],
  "LOAN TRANSFER": [
    { name: "Personal Loan Balance Transfer", href: "/personal-loan-transfer" },
    { name: "Home Loan Balance Transfer", href: "/home-loan-transfer" },
  ],
};

const learnResourcesMenu = {
  "FINANCIAL KNOWLEDGE": [
    { name: "Articles", href: "/articles" },
    { name: "Guides", href: "/guides" },
    { name: "Calculator", href: "/calculator" },
  ],
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);

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

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown((prev) => (prev === dropdownName ? null : dropdownName));
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 bg-white z-50 transition-shadow duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      {/* Desktop Navbar */}
      <div className="w-full relative z-10 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-[54px]">
              <div className="flex items-center">
                <button
                  className="md:hidden -ml-2 p-2 z-50"
                  onClick={toggleMenu}
                >
                  <CiMenuFries className="h-6 w-6 transition-transform duration-300 text-black" />
                </button>
                <Link href="/" className="flex-shrink-0 flex items-center">
                  <Image
                    src="/assets/paisabazaar-logo.svg"
                    alt="paisa bazaar logo"
                    width={154}
                    height={31.26}
                  />
                </Link>
              </div>

              <div className="hidden md:flex md:items-center md:space-x-[10px]">
                <button
                  onClick={() => toggleDropdown("allProducts")}
                  className="text-gray-700 hover:text-[#0066FF] px-3 py-2 text-sm font-medium flex items-center"
                >
                  All Products
                  <MdOutlineKeyboardArrowDown className="ml-1 h-4 w-4" />
                </button>

                <button
                  onClick={() => toggleDropdown("learnResources")}
                  className="text-gray-700 hover:text-[#0066FF] px-3 py-2 text-sm font-medium flex items-center"
                >
                  Learn & Resources
                  <MdOutlineKeyboardArrowDown className="ml-1 h-4 w-4" />
                </button>

                <Link
                  href="/contact"
                  className="text-gray-700 hover:text-[#0066FF] px-3 py-2 text-sm font-medium"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <Link
              href="/signin"
              className="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md text-sm font-medium text-[#0066FF] bg-[#EEF4FF] hover:bg-blue-50"
            >
              Sign In
            </Link>

            <div className="flex md:hidden items-center">
              <Link
                href="/signin"
                className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md text-sm font-medium text-[#0066FF] bg-[#EEF4FF] hover:bg-blue-50"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Dropdowns */}
      {activeDropdown === "allProducts" && (
        <div
          className="hidden md:block absolute left-0 w-full bg-white shadow-lg"
          onMouseEnter={() => setActiveDropdown("allProducts")}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-3 gap-8">
              {Object.entries(allProductsMenu).map(([category, items]) => (
                <div key={category}>
                  <h3 className="text-[#0066FF] font-semibold mb-4">
                    {category}
                  </h3>
                  <ul className="space-y-3">
                    {items.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="text-gray-600 hover:text-[#0066FF] flex items-center"
                        >
                          {item.name}
                          {item.badge && (
                            <span className="ml-2 px-2 py-0.5 text-xs font-medium bg-green-100 text-green-600 rounded">
                              {item.badge}
                            </span>
                          )}
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

      {activeDropdown === "learnResources" && (
        <div
          className="hidden md:block absolute left-0 w-full bg-white shadow-lg"
          onMouseEnter={() => setActiveDropdown("learnResources")}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-3 gap-8">
              {Object.entries(learnResourcesMenu).map(([category, items]) => (
                <div key={category}>
                  <h3 className="text-[#0066FF] font-semibold mb-4">
                    {category}
                  </h3>
                  <ul className="space-y-3">
                    {items.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="text-gray-600 hover:text-[#0066FF]"
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
        className={`fixed inset-0 bg-white z-[9] transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="h-16 border-b" /> {/* Spacer for navbar */}
        <div className="overflow-y-auto h-full pb-20">
          <div className="px-4 py-2">
            <button
              onClick={() =>
                setMobileDropdown(
                  mobileDropdown === "allProducts" ? null : "allProducts"
                )
              }
              className="flex items-center justify-between w-full py-3 border-b"
            >
              <span className="text-base font-medium text-gray-900">
                All Products
              </span>
              <MdOutlineKeyboardArrowDown
                className={`h-5 w-5 transform transition-transform ${
                  mobileDropdown === "allProducts" ? "rotate-180" : ""
                }`}
              />
            </button>

            {mobileDropdown === "allProducts" && (
              <div className="py-2">
                {Object.entries(allProductsMenu).map(([category, items]) => (
                  <div key={category} className="mb-4">
                    <h3 className="text-[#0066FF] font-semibold mb-2">
                      {category}
                    </h3>
                    <ul className="space-y-2">
                      {items.map((item) => (
                        <li key={item.name}>
                          <Link
                            href={item.href}
                            className="text-gray-600 hover:text-[#0066FF] flex items-center py-1"
                          >
                            {item.name}
                            {item.badge && (
                              <span className="ml-2 px-2 py-0.5 text-xs font-medium bg-green-100 text-green-600 rounded">
                                {item.badge}
                              </span>
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            <button
              onClick={() =>
                setMobileDropdown(
                  mobileDropdown === "learnResources" ? null : "learnResources"
                )
              }
              className="flex items-center justify-between w-full py-3 border-b"
            >
              <span className="text-base font-medium text-gray-900">
                Learn & Resources
              </span>
              <MdOutlineKeyboardArrowDown
                className={`h-5 w-5 transform transition-transform ${
                  mobileDropdown === "learnResources" ? "rotate-180" : ""
                }`}
              />
            </button>

            {mobileDropdown === "learnResources" && (
              <div className="py-2">
                {Object.entries(learnResourcesMenu).map(([category, items]) => (
                  <div key={category} className="mb-4">
                    <h3 className="text-[#0066FF] font-semibold mb-2">
                      {category}
                    </h3>
                    <ul className="space-y-2">
                      {items.map((item) => (
                        <li key={item.name}>
                          <Link
                            href={item.href}
                            className="text-gray-600 hover:text-[#0066FF] py-1 block"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            <Link
              href="/contact"
              className="block py-3 text-base font-medium text-gray-900 border-b"
            >
              Contact Us
            </Link>

            <div className="mt-6">
              <h3 className="text-base font-medium text-gray-900 mb-4">
                Download App
              </h3>
              <div className="flex space-x-4">
                <Link href="https://play.google.com/store" className="w-36">
                  <Image
                    src="/placeholder.svg?height=40&width=135"
                    alt="Get it on Google Play"
                    width={135}
                    height={40}
                    className="h-10"
                  />
                </Link>
                <Link href="https://apps.apple.com" className="w-36">
                  <Image
                    src="/placeholder.svg?height=40&width=135"
                    alt="Download on the App Store"
                    width={135}
                    height={40}
                    className="h-10"
                  />
                </Link>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-base font-medium text-gray-900 mb-2">
                Need assistance?
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                Our customer care team is available from{" "}
                <span className="font-medium">Mon - Sat 9:30 am – 6:30 pm</span>{" "}
                to assist you with the best offers, or help resolve any queries.
                You can call us on:
              </p>
              <p className="text-lg font-medium text-[#0066FF]">
                1800 - 208 - 8877
              </p>
              <p className="text-sm text-gray-600">(toll-free)</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
