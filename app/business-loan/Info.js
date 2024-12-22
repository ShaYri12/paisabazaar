import React from "react";
import { BsCheckCircle } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";

const Info = () => {
  const features = [
    "Both secured & unsecured loans are available",
    "Loan amount: Unsecured loan - Up to Rs 1 crore; Secured loans - Up to Rs 5 crore",
    "Loan tenure: Unsecured loan – Up to 5 years; Secured loans - Up to 15 years",
    "Unsecured loan facilities include term loans & working capital loans",
    "Secured loan facilities include Cash Credit A/c & Working Capital Loans",
  ];
  return (
    <div className="pt-[80px]">
      <div className="mb-[40px]">
        <h2 className="text-[20px] font-[400] text-greenish">
          Features & Benefits
        </h2>
        <div className="w-[50px] h-[2px] flex bg-green-500 mt-1 mb-[22px]"></div>
        <div className="space-y-[16px]">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-[14px] font-[500] text-gray-600"
            >
              <BsCheckCircle
                size={16}
                className="min-w-[16px] text-green-600"
              />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
      <h2 className="text-[20px] font-[400] text-greenish">
        Business Loan Eligibility
      </h2>
      <div className="w-[50px] h-[2px] flex bg-green-500 mt-1 mb-[22px]"></div>
      <ul className="space-y-[12px] text-gray-700 text-[14px] list-disc ps-4 mb-[30px]">
        <li>
          <strong>Age:</strong> 21 - 60 years
        </li>
        <li>
          <strong>Business Vintage:</strong> 1 year & above
        </li>
        <li>
          <strong>Credit Score:</strong> A credit score of 675 & above increase
          the chances of loan approval and at lower interest rates
        </li>
      </ul>
      <p className="text-[12px] text-gray-500 mb-[30px]">
        <strong>Disclaimer:</strong> Paisabazaar is a loan aggregator and is
        authorized to provide services on behalf of its partners.
      </p>
      <div className="p-[24px] rounded-lg bg-greenish/10 mt-[40px] flex items-center space-x-[7px] text-greenish">
        <FaMapMarkerAlt size={18} className="min-w-[18px]" />
        <p className="text-sm">
          Paisabazaar Marketing & Consulting Pvt. Ltd. 135 P, Sector 44,
          Gurugram (HR) 122001
        </p>
      </div>
    </div>
  );
};

export default Info;
