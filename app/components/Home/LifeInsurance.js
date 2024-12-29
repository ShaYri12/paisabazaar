import React from "react";
import CardWithDetails from "../CardWithDetails";

const insuranceData = [
  {
    id: 1,
    title: "Retirement & Pension Plans",
    description:
      "From 35+ options, choose a card matching your lifestyle & needs",
    buttonText: "Get Best Offers",
    imageSrc: "/assets/pension-plans.png",
    imageAlt: "pension-plans",
    link: "#",
  },
  {
    id: 2,
    title: "Guaranteed Income & Saving Plans",
    description:
      "Select the best offer curated just for you from a wide choice of Banks & NBFC's",
    buttonText: "Check Eligibility",
    imageSrc: "/assets/saving-plans.png",
    imageAlt: "saving-plans",
    link: "#",
  },
  {
    id: 3,
    title: "Investment Plans (Endowment Plans)",
    description:
      "Select the best offer curated just for you from a wide choice of Banks & NBFC's",
    buttonText: "Check Eligibility",
    imageSrc: "/assets/investment-plans.png",
    imageAlt: "investment-plans",
    link: "#",
  },
  {
    id: 4,
    title: "ULIP (Unit-Linked Insurance Plans)",
    description:
      "Select the best offer curated just for you from a wide choice of Banks & NBFC's",
    buttonText: "Check Eligibility",
    imageSrc: "/assets/ulip.png",
    imageAlt: "ulip",
    link: "#",
  },
  {
    id: 5,
    title: "Child Education & Marriage Plans",
    description:
      "Select the best offer curated just for you from a wide choice of Banks & NBFC's",
    buttonText: "Check Eligibility",
    imageSrc: "/assets/education-plans.png",
    imageAlt: "education-plans",
    link: "#",
  },
  {
    id: 6,
    title: "Term Life Insurance",
    description:
      "Select the best offer curated just for you from a wide choice of Banks & NBFC's",
    buttonText: "Check Eligibility",
    imageSrc: "/assets/term-life-insurance.png",
    imageAlt: "term-life-insurance",
    link: "#",
  },
];

const LifeInsurance = () => {
  return <CardWithDetails title={"Life Insurance"} data={insuranceData} />;
};

export default LifeInsurance;
