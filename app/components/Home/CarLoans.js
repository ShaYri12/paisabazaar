import React from "react";
import CardWithDetails from "../CardWithDetails";

// Car Loans Data
const loansData = [
  {
    id: 1,
    title: "New Car & Auto Loan",
    description:
      "Choose from lowest interest rates available for your dream home",
    buttonText: "Check Eligibility",
    imageSrc: "/assets/new-car-loan.png",
    imageAlt: "new-car-loan",
    link: "#",
  },
  {
    id: 2,
    title: "Old Car Loan",
    description: "Get liquidity against your property at best interest rates",
    buttonText: "Check Eligibility",
    imageSrc: "/assets/old-car-loan.png",
    imageAlt: "old-car-loan",
    link: "#",
  },
  {
    id: 3,
    title: "Loan Against Car",
    description: "Get liquidity against your property at best interest rates",
    buttonText: "Check Eligibility",
    imageSrc: "/assets/loan-against-car.png",
    imageAlt: "loan-against-car",
    link: "#",
  },
];

const CarLoans = () => {
  return <CardWithDetails title={"Car Loan"} data={loansData} />;
};

export default CarLoans;
