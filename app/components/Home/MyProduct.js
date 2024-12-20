import React from 'react';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const products = [
    {
      id: 1,
      title: "Credit Cards",
      description: "From 35+ options, choose a card matching your lifestyle & needs",
      buttonText: "Get Best Offers",
      imageSrc: "/credit-card.png",
      imageAlt: "credit-card",
    },
    {
      id: 2,
      title: "Personal Loan",
      description: "Select the best offer curated just for you from a wide choice of Banks & NBFC's",
      buttonText: "Check Eligibility",
      imageSrc: "/credit-card.png",
      imageAlt: "personal-loan",
    },
    {
      id: 3,
      title: "Business Loan",
      description: "Expand your business with loans at low interest rates",
      buttonText: "Check Eligibility",
      imageSrc: "/credit-card.png",
      imageAlt: "business-loan",
    },
    {
      id: 4,
      title: "Home Loan",
      description: "Choose from lowest interest rates available for your dream home",
      buttonText: "Check Eligibility",
      imageSrc: "/credit-card.png",
      imageAlt: "home-loan",
    },
    {
      id: 5,
      title: "Loan Against Property",
      description: "Get liquidity against your property at best interest rates",
      buttonText: "Check Eligibility",
      imageSrc: "/credit-card.png",
      imageAlt: "loan-against-property",
    },
    {
      id: 6,
      title: "Car & Auto Loan",
      description: "Get better interest rates on your existing personal loan",
      buttonText: "Reduce Your EMI",
      imageSrc: "/credit-card.png",
      imageAlt: "car-auto-loan",
    },
    {
      id: 7,
      title: "General Insurance",
      description: "Instant small ticket loans to meet your immediate cash needs",
      buttonText: "Get Instant Loan",
      imageSrc: "/credit-card.png",
      imageAlt: "general-insurance",
    },
    {
      id: 8,
      title: "Health Insurance",
      description: "Protect yourself & your family against health expenses",
      buttonText: "Starting @ ₹200/month*",
      imageSrc: "/credit-card.png",
      imageAlt: "health-insurance",
    },
    {
      id: 9,
      title: "Life Insurance",
      description: "Get insurance for your loved ones & secure their future",
      buttonText: "Starting from ₹490/month*",
      imageSrc: "/credit-card.png",
      imageAlt: "life-insurance",
    },
  ];
  

const MyProduct = () => {
  return (
    <div className="max-w-[1200px] mx-auto w-full my-20">
      <div className="flex items-center gap-5">
        <h2 className="text-[#60bb51] text-[14px] font-bold">My Products</h2>
        <div className="w-[128px] h-[1.5px] bg-[#60bb51]"></div>
      </div>
      <div className="grid grid-cols-4 gap-6 mt-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative scale-100 hover:scale-110 overflow-hidden p-[14px] shadow-custom-green rounded-[8px] border border-green-border transition-all duration-300 hover:shadow-hover-blue"
          >
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-sm font-semibold mb-2 uppercase text-black">
                  {product.title}
                </h2>
                <p className="text-[#69829f] text-[12px] mb-[15px] w-[80%]">
                  {product.description}
                </p>
              </div>
              <div>
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  width={70}
                  height={70}
                />
              </div>
            </div>
            <button className="text-[#60bb51] text-[12px] font-semibold flex items-center gap-1">
              {product.buttonText} <MdKeyboardDoubleArrowRight />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProduct;
