import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

export default function Footer() {
  const mainCategories = [
    {
      title: "Home Loan",
      links: ["SBI Home Loan", "HDFC Home Loan", "Axis Home Loan"],
    },
    {
      title: "Personal Loan",
      links: ["SBI Personal Loan", "HDFC Personal Loan", "Axis Personal Loan"],
    },
    {
      title: "Car Loan",
      links: ["SBI Car Loan", "Axis Car Loan", "HDFC Car Loan"],
    },
    {
      title: "Credit Card",
      links: [
        "HDFC Credit Card",
        "SBI Credit Card",
        "Citibank Credit Card",
        "Indusind Credit Card",
      ],
    },
    {
      title: "Fixed Deposit",
      links: ["SBI Fixed Deposit", "HDFC Fixed Deposit", "Axis Fixed Deposit"],
    },
    {
      title: "Calculator",
      links: [
        "EMI Calculator",
        "Home Loan Calculator",
        "Personal Loan EMI Calculator",
        "Car Loan EMI Calculator",
      ],
    },
  ];

  const otherLinks = [
    "CIBIL",
    "Tax",
    "Bank IFSC Code",
    "Indian Holidays",
    "Saving Schemes",
    "In The News",
  ];

  const socialLinks = [
    { label: "Twitter", icon: <FaTwitter /> },
    { label: "LinkedIn", icon: <FaLinkedinIn /> },
    { label: "Facebook", icon: <FaFacebookF /> },
    { label: "Instagram", icon: <AiFillInstagram /> },
  ];

  const bottomLinks = [
    "About",
    "Careers",
    "Contact Us",
    "Blog",
    "Terms",
    "Notice to customer",
  ];

  const learnMore = [
    "Loans",
    "Credit Cards",
    "Investments",
    "Money Management",
  ];

  return (
    <>
      <div className="p-[18px] bg-greenish">
        <div className="flex items-center flex-wrap justify-center gap-4 text-xs">
          <span className="text-[#fff] uppercase">Learn More:</span>
          {learnMore.map((link, index) => (
            <Link key={index} href="#" className="text-white ">
              {link}
            </Link>
          ))}
        </div>
      </div>
      {/* Top Section */}
      <footer className="bg-[#1f1f1f] text-gray-400 py-6">
        <div className="max-w-[1200px] xl:max-w-[1280px] mx-auto px-4">
          {/* Main Categories */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-[15px] pb-3">
            {mainCategories.map((category, index) => (
              <div key={index}>
                <h2 className="text-white mb-2.5 text-xs">{category.title}</h2>
                <ul className="space-y-0">
                  {category.links.map((link, linkIndex) => (
                    <li
                      key={linkIndex}
                      className="py-2 text-[#979797] hover:text-white text-xs"
                    >
                      <Link
                        href="#"
                        className="hover:border-b-[1.2px] hover:border-[white] pb-1 transition duration-300"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Others Section */}
          <div className="mt-6 pt-5 md:px-4 pb-[22px] border-y border-dotted border-[#777]">
            <div className="flex items-center flex-wrap  gap-4 text-xs">
              <span className="text-[#979797]">Others:</span>
              {otherLinks.map((link, index) => (
                <Link
                  key={index}
                  href="#"
                  className="hover:text-white pb-0.5 text-[#979797] hover:border-b-[1.2px] hover:border-white transition duration-300"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex lg:flex-row flex-col items-start lg:items-center justify-between">
            {/* Contact and Social Section */}
            <div className="mt-10 flex items-start lg:items-center lg:flex-row flex-col justify-between gap-5 md:gap-8 md:px-[15px]">
              <div className="">
                <h3 className="text-white text-xs md:mb-2.5">Contact Us</h3>
                <p className="py-2.5 text-xs text-[#979797] flex items-center gap-2">
                  <MdEmail className="bg-white p-[3px] text-xl rounded-full text-black" />
                  support[at]merimudra[dot]com
                </p>
              </div>

              <div className="">
                <h3 className="text-white md:mb-2.5 text-xs">Follow Us</h3>
                <div className="flex gap-4 py-2.5">
                  {socialLinks.map((social, index) => (
                    <Link
                      key={index}
                      href="#"
                      className="w-6 h-6 flex items-center justify-center bg-white text-base rounded-full text-black"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Links */}
            <div className="mt-8 flex justify-center items-center flex-wrap md:gap-0 gap-3 w-full lg:w-fit">
              {bottomLinks.map((link, index) => (
                <Link
                  key={index}
                  href="#"
                  className="px-[15px] text-xs text-[#979797]"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-10 text-center text-xs text-[#979797]">
            Copyright © 2022 MeriMudra.com Privacy Policy
          </div>
        </div>
      </footer>
    </>
  );
}
