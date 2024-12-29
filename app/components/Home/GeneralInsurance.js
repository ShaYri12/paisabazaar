import React from "react";
import CardWithDetails from "../CardWithDetails";

const insuranceData = [
  {
    id: 1,
    title: "Car Insurance",
    description:
      "From 35+ options, choose a card matching your lifestyle & needs",
    buttonText: "Get Best Offers",
    imageSrc: "/assets/old-car-loan.png",
    imageAlt: "old-car-loan",
    link: "#",
  },
  {
    id: 2,
    title: "Home Insurance",
    description:
      "Select the best offer curated just for you from a wide choice of Banks & NBFC's",
    buttonText: "Check Eligibility",
    imageSrc: "/assets/home-loan.png",
    imageAlt: "home-loan",
    link: "#",
  },
  {
    id: 3,
    title: "Fire Insurance",
    description:
      "Select the best offer curated just for you from a wide choice of Banks & NBFC's",
    buttonText: "Check Eligibility",
    imageSrc: "/assets/fire-insurance.png",
    imageAlt: "fire-insurance",
    link: "#",
  },
  {
    id: 4,
    title: "Travel Insurance",
    description:
      "Select the best offer curated just for you from a wide choice of Banks & NBFC's",
    buttonText: "Check Eligibility",
    imageSrc: "/assets/travel-insurance.png",
    imageAlt: "travel-insurance",
    link: "#",
  },
  {
    id: 5,
    title: "Building Insurance",
    description:
      "Select the best offer curated just for you from a wide choice of Banks & NBFC's",
    buttonText: "Check Eligibility",
    imageSrc: "/assets/building-insurance.png",
    imageAlt: "building-insurance",
    link: "#",
  },
  {
    id: 6,
    title: "Infrastructure Insurance",
    description:
      "Select the best offer curated just for you from a wide choice of Banks & NBFC's",
    buttonText: "Check Eligibility",
    imageSrc: "/assets/infrastructure-insurance.png",
    imageAlt: "infrastructure-insurance",
    link: "#",
  },
];

const GeneralInsurance = () => {
  return <CardWithDetails title={"General Insurance"} data={insuranceData} />;
};

export default GeneralInsurance;
