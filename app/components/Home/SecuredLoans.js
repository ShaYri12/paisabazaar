import React from "react";
import CardWithDetails from "../CardWithDetails";

const loansData = [
  {
    id: 1,
    title: "Home Loan",
    description:
      "Choose from lowest interest rates available for your dream home",
    buttonText: "Check Eligibility",
    imageSrc: "/assets/home-loan.png",
    imageAlt: "home-loan",
    link: "/home-loan",
  },
  {
    id: 2,
    title: "Loan Against Property",
    description: "Get liquidity against your property at best interest rates",
    buttonText: "Check Eligibility",
    imageSrc: "/assets/loan-against-property.png",
    imageAlt: "loan-against-property",
    link: "/loan-against-property",
  },
];

const SecuredLoans = () => {
  return <CardWithDetails title={"Secured Loans"} data={loansData} />;
};

export default SecuredLoans;
