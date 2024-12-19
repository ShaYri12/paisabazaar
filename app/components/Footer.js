import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

const investors = [
  { name: "Tiger Global", logo: "/placeholder.svg?height=40&width=120" },
  { name: "InfoEdge", logo: "/placeholder.svg?height=40&width=120" },
  { name: "TrueNorth", logo: "/placeholder.svg?height=40&width=120" },
  { name: "Steadview", logo: "/placeholder.svg?height=40&width=120" },
  { name: "ICP Inventus", logo: "/placeholder.svg?height=40&width=120" },
  { name: "SoftBank", logo: "/placeholder.svg?height=40&width=120" },
  { name: "PremjiInvest", logo: "/placeholder.svg?height=40&width=120" },
  { name: "Temasek", logo: "/placeholder.svg?height=40&width=120" },
];

const paymentMethods = [
  { name: "Visa", logo: "/placeholder.svg?height=30&width=60" },
  { name: "American Express", logo: "/placeholder.svg?height=30&width=60" },
  { name: "Mastercard", logo: "/placeholder.svg?height=30&width=60" },
  { name: "Diners Club", logo: "/placeholder.svg?height=30&width=60" },
  { name: "RuPay", logo: "/placeholder.svg?height=30&width=60" },
  { name: "Maestro", logo: "/placeholder.svg?height=30&width=60" },
];

const certifications = [
  { name: "Trend Micro", logo: "/placeholder.svg?height=40&width=120" },
  { name: "256 BIT", logo: "/placeholder.svg?height=40&width=120" },
  { name: "PCI DSS", logo: "/placeholder.svg?height=40&width=120" },
];

const paisabazaarLinks = [
  { name: "About", href: "#" },
  { name: "Careers", href: "#" },
  { name: "Awards", href: "#" },
  { name: "Contact Us", href: "#" },
  { name: "Grievance Redressal", href: "#" },
];

const groupBrands = [
  { name: "Policybazaar.com", href: "#" },
  { name: "Quickfixcars.com", href: "#" },
  { name: "Policybazaar.ae", href: "#" },
  { name: "Docprime.com", href: "#" },
  { name: "PB Partners", href: "#" },
  { name: "MoneyWide", href: "#" },
];

const bottomLinks = [
  { name: "Investor Relations", href: "#" },
  { name: "Privacy Policy", href: "#" },
  { name: "Terms of Use", href: "#" },
  { name: "Disclaimer", href: "#" },
  { name: "Intellectual Policy", href: "#" },
  { name: "Sitemap", href: "#" },
  { name: "Important Links", href: "#" },
];

const socialLinks = [
  { name: "Facebook", icon: FaFacebookF, href: "#" },
  { name: "LinkedIn", icon: FaLinkedinIn, href: "#" },
  { name: "Twitter", icon: FaTwitter, href: "#" },
  { name: "YouTube", icon: FaYoutube, href: "#" },
  { name: "Instagram", icon: FaInstagram, href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0A0C1B] text-white">
      {/* Investors Section */}
      <div className="max-w-[1200px] mx-auto px-4 py-8">
        <h2 className="text-lg font-bold mb-6">OUR INVESTORS</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 items-center">
          {investors.map((investor) => (
            <img
              key={investor.name}
              src={investor.logo}
              alt={investor.name}
              className="h-10 object-contain"
            />
          ))}
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-[1200px] mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Paisabazaar Links */}
        <div>
          <img
            src="/placeholder.svg?height=40&width=160"
            alt="Paisabazaar"
            className="h-10 mb-6"
          />
          <ul className="space-y-3">
            {paisabazaarLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Group Brands */}
        <div>
          <h3 className="text-lg font-bold mb-6">GROUP BRANDS</h3>
          <ul className="space-y-3">
            {groupBrands.map((brand) => (
              <li key={brand.name}>
                <a
                  href={brand.href}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {brand.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Download App */}
        <div>
          <h3 className="text-lg font-bold mb-6">DOWNLOAD APP</h3>
          <div className="flex flex-col space-y-4">
            <a href="#" className="w-40">
              <img
                src="/placeholder.svg?height=40&width=160"
                alt="Get it on Google Play"
                className="h-10"
              />
            </a>
            <a href="#" className="w-40">
              <img
                src="/placeholder.svg?height=40&width=160"
                alt="Download on the App Store"
                className="h-10"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Links and Social */}
      <div className="border-t border-gray-800">
        <div className="max-w-[1200px] mx-auto px-4 py-6 flex flex-wrap justify-between items-center gap-4">
          <div className="flex flex-wrap gap-6">
            {bottomLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <social.icon className="w-4 h-4" />
                <span className="sr-only">{social.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Payment Methods and Certifications */}
      <div className="border-t border-gray-800">
        <div className="max-w-[1200px] mx-auto px-4 py-6">
          <div className="flex flex-wrap justify-between items-center gap-8">
            <div>
              <p className="text-sm text-gray-400 mb-4">
                Supported Payment Methods
              </p>
              <div className="flex flex-wrap gap-4">
                {paymentMethods.map((method) => (
                  <img
                    key={method.name}
                    src={method.logo}
                    alt={method.name}
                    className="h-8 object-contain"
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col items-end">
              <p className="text-sm text-gray-400 mb-4">Secured By</p>
              <div className="flex gap-4">
                {certifications.map((cert) => (
                  <img
                    key={cert.name}
                    src={cert.logo}
                    alt={cert.name}
                    className="h-10 object-contain"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800">
        <div className="max-w-[1200px] mx-auto px-4 py-6">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              CIN No. U74900HR2011PTC044581 © Copyright 2014-2024
              Paisabazaar.com. All Rights Reserved.
            </p>
            <div className="flex items-center gap-2">
              <img
                src="/placeholder.svg?height=20&width=30"
                alt="Indian Flag"
                className="h-5"
              />
              <p className="text-sm text-gray-400">
                Built with Love
                <br />
                Made in India
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
