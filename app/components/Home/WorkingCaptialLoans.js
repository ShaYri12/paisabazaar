import React from "react";
import CardWithDetails from "../CardWithDetails";

const loansData = [
  {
    id: 1,
    title: "OD (Overdraft)",
    description:
      "From 35+ options, choose a card matching your lifestyle & needs",
    buttonText: "Get Best Offers",
    imageSrc: "/assets/overdraft-icon.png",
    imageAlt: "Overdraft",
    link: "#",
  },
  {
    id: 2,
    title: "CC (Cash Credit)",
    description:
      "Select the best offer curated just for you from a wide choice of Banks & NBFC's",
    buttonText: "Check Eligibility",
    imageSrc: "/assets/cc.png",
    imageAlt: "cash-credit",
    link: "#",
  },
];

const WorkingCaptialLoans = () => {
  return (
    <CardWithDetails title={"SME & WORKING CAPITAL LOANS"} data={loansData} />
  );
};

export default WorkingCaptialLoans;
