import React from "react";
import CardWithDetails from "../CardWithDetails";

const loansData = [
  {
    id: 1,
    title: "Personal Loan",
    description:
      "Select the best offer curated just for you from a wide choice of Banks & NBFC's",
    buttonText: "Check Eligibility",
    imageSrc: "/assets/personal-loan.png",
    imageAlt: "personal-loan",
    link: "/personal-loan",
  },
  {
    id: 2,
    title: "Business Loan",
    description: "Expand your business with loans at low interest rates",
    buttonText: "Check Eligibility",
    imageSrc: "/assets/business-loan.png",
    imageAlt: "business-loan",
    link: "/business-loan",
  },
];

const UnsecuredLoans = () => {
  return <CardWithDetails title={"Unsecured Loans"} data={loansData} />;
};

export default UnsecuredLoans;
