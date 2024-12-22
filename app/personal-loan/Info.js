import React from "react";
import { BsCheckCircle } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";

const Info = () => {
  const features = [
    "No end-usage restriction",
    "Loan amount of up to Rs. 40 lakh, which can exceed depending on lenders' discretion",
    "Repayment tenure usually ranges between 1 year and 5 years, with some banks/NBFCs offering longer tenures",
    "Minimal documentation",
    "The interest rates usually start from 10.50% p.a. with some PSU banks offering lower interest rates",
    "Quick disbursals",
    "Applicants having excellent credit profiles may also qualify for preapproved/prequalified personal loans with instant disbursal",
  ];
  return (
    <div className="pt-[80px]">
      <div className="mb-[40px]">
        <h2 className="text-[20px] font-[400] text-greenish">
          Personal Loan Eligibility
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
        Personal Loan Eligibility
      </h2>
      <div className="w-[50px] h-[2px] flex bg-green-500 mt-1 mb-[22px]"></div>
      <ul className="space-y-[12px] text-gray-700 text-[14px] list-disc ps-4 mb-[30px]">
        <li>
          <strong>Age:</strong> 18 - 60 years
        </li>
        <li>
          <strong>Income:</strong> Minimum Rs 15,000/month for salaried
          applicants
        </li>
        <li>
          <strong>Credit Score:</strong> Preferably 750 and above as having
          higher credit scores increase the chances of your loan approval at
          lower interest rates
        </li>
        <li>
          <strong>Address:</strong> Paisabazaar, 135 P, Sector 44, Gurugram (HR)
          122001
        </li>
      </ul>
      <p className="text-[12px] text-gray-500 mb-[30px]">
        <strong>Disclaimer:</strong> Paisabazaar is a loan aggregator and is
        authorized to provide services on behalf of its partners
      </p>
      <p className="mt-4 text-gray-600 text-[12px] leading-[18px]">
        The APR (Annual Percentage Rate) of a personal loan is its annualised
        cost of borrowing, which includes the interest rate as well as the
        processing fees, documentation fees and other fees charged during the
        loan origination. The APR is expressed in the form of a percentage and
        thus, allows personal loan applicants to detect personal loan schemes
        offered at lower interest rates but with higher processing fees and/or
        other charges.
      </p>
      <p className="mt-4 text-gray-600 text-[12px] leading-[18px]">
        The APR of personal loans usually ranges between 11.29% to 35%. For
        example, assume that you have availed a personal loan of Rs. 5 lakhs @
        10.50% p.a. with a repayment tenure of 5 years. The processing fee
        charged for this loan is 1.5% of the loan amount, which amounts to Rs
        7,500. Therefore, the total borrowing cost of your personal loan will be
        Rs 1,52,317 and its APR will be 11.16%.
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
