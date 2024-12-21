import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const products = [
  {
    id: 1,
    title: "Credit Cards",
    description:
      "From 35+ options, choose a card matching your lifestyle & needs",
    buttonText: "Get Best Offers",
    imageSrc: "/assets/credit-card.png",
    imageAlt: "credit-card",
    link: "/credit-card",
  },
  {
    id: 2,
    title: "Personal Loan",
    description:
      "Select the best offer curated just for you from a wide choice of Banks & NBFC's",
    buttonText: "Check Eligibility",
    imageSrc: "/assets/personal-loan.png",
    imageAlt: "personal-loan",
    link: "/personal-loan",
  },
  {
    id: 3,
    title: "Business Loan",
    description: "Expand your business with loans at low interest rates",
    buttonText: "Check Eligibility",
    imageSrc: "/assets/business-loan.png",
    imageAlt: "business-loan",
    link: "/credit-card",
  },
  {
    id: 4,
    title: "Home Loan",
    description:
      "Choose from lowest interest rates available for your dream home",
    buttonText: "Check Eligibility",
    imageSrc: "/assets/home-loan.png",
    imageAlt: "home-loan",
    link: "/credit-card",
  },
  {
    id: 5,
    title: "Loan Against Property",
    description: "Get liquidity against your property at best interest rates",
    buttonText: "Check Eligibility",
    imageSrc: "/assets/loan-against-property.png",
    imageAlt: "loan-against-property",
    link: "/credit-card",
  },
  {
    id: 6,
    title: "Car & Auto Loan",
    description: "Get better interest rates on your existing personal loan",
    buttonText: "Reduce Your EMI",
    imageSrc: "/assets/loan-against-car.png",
    imageAlt: "car-auto-loan",
    link: "/credit-card",
  },
  {
    id: 7,
    title: "General Insurance",
    description: "Instant small ticket loans to meet your immediate cash needs",
    buttonText: "Get Instant Loan",
    imageSrc: "/assets/general-insurance.png",
    imageAlt: "general-insurance",
    link: "/credit-card",
  },
  {
    id: 8,
    title: "Health Insurance",
    description: "Protect yourself & your family against health expenses",
    buttonText: "Starting @ ₹200/month*",
    imageSrc: "/assets/health-insurance.png",
    imageAlt: "health-insurance",
    link: "/credit-card",
  },
  {
    id: 9,
    title: "Life Insurance",
    description: "Get insurance for your loved ones & secure their future",
    buttonText: "Starting from ₹490/month*",
    imageSrc: "/assets/life-insurance.png",
    imageAlt: "life-insurance",
    link: "/credit-card",
  },
];

const MyProduct = () => {
  return (
    <div className="max-w-[1200px] mx-auto w-full px-[15px] mt-[50px] mb-[20px]">
      <div className="flex items-center gap-2">
        <h2 className="text-greenish text-[14px] font-bold">My Products</h2>
        <div className="lg:w-[128px] w-[20px] h-[1.5px] bg-greenish"></div>
      </div>
      <div className="grid grid-cols-3 lg:grid-cols-4 lg:gap-6 gap-[8px] mt-6">
        {products.map((product) => (
          <Link
            key={product.id}
            href={product.link}
            className="relative scale-100 hover:scale-110 overflow-hidden p-[14px] lg:shadow-custom-green rounded-[8px] lg:border lg:border-green-border transition-all duration-300 hover:shadow-hover-blue"
          >
            <div className="flex lg:flex-row flex-col-reverse lg:items-start items-center lg:justify-between justify-center lg:gap-1 gap-2">
              <div className="flex flex-col lg:justify-start justify-center lg:items-start items-center">
                <h2 className="text-[10px] lg:text-sm lg:font-[600] font-[400] mb-2 uppercase text-black lg:text-left- text-center">
                  {product.title}
                </h2>
                <p className="lg:block hidden text-[#69829f] text-[12px] mb-[15px] w-[80%]">
                  {product.description}
                </p>
              </div>
              <div className="min-w-[54px] min-h-[54px]">
                <Image
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  width={54}
                  height={54}
                />
              </div>
            </div>
            <button className="lg:flex items-center gap-1 hidden text-greenish text-[12px] font-semibold">
              {product.buttonText} <MdKeyboardDoubleArrowRight />
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MyProduct;
