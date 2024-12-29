import React from "react";
import CardWithDetails from "../CardWithDetails";

const insuranceData = [
  {
    id: 1,
    title: "Family Floater Insurance",
    description:
      "From 35+ options, choose a card matching your lifestyle & needs",
    buttonText: "Get Best Offers",
    imageSrc: "/assets/family-floater-insurance.png",
    imageAlt: "family-floater-insurance",
    link: "#",
  },
  {
    id: 2,
    title: "Individual Health Insurance",
    description:
      "Select the best offer curated just for you from a wide choice of Banks & NBFC's",
    buttonText: "Check Eligibility",
    imageSrc: "/assets/individual-health-insurance.png",
    imageAlt: "individual-health-insurance",
    link: "#",
  },
  {
    id: 3,
    title: "Senior Citizen Health Insurance",
    description:
      "Select the best offer curated just for you from a wide choice of Banks & NBFC's",
    buttonText: "Check Eligibility",
    imageSrc: "/assets/senior-citizen-health-insurance.png",
    imageAlt: "senior-citizen-health-insurance",
    link: "#",
  },
  {
    id: 4,
    title: "Critical Illness Cover",
    description:
      "Select the best offer curated just for you from a wide choice of Banks & NBFC's",
    buttonText: "Check Eligibility",
    imageSrc: "/assets/critical-illness-cover.png",
    imageAlt: "critical-illness-cover",
    link: "#",
  },
  {
    id: 5,
    title: "Maternity Health Insurance",
    description:
      "Select the best offer curated just for you from a wide choice of Banks & NBFC's",
    buttonText: "Check Eligibility",
    imageSrc: "/assets/maternity-health-insurance.png",
    imageAlt: "maternity-health-insurance",
    link: "#",
  },
  {
    id: 6,
    title: "Personal Accident Insurance",
    description:
      "Select the best offer curated just for you from a wide choice of Banks & NBFC's",
    buttonText: "Check Eligibility",
    imageSrc: "/assets/personal-accident-insurance.png",
    imageAlt: "personal-accident-insurance",
    link: "#",
  },
  {
    id: 7,
    title: "Group Health Insurance",
    description:
      "Select the best offer curated just for you from a wide choice of Banks & NBFC's",
    buttonText: "Check Eligibility",
    imageSrc: "/assets/group-health-insurance.png",
    imageAlt: "group-health-insurance",
    link: "#",
  },
];

const HealthInsurance = () => {
  return <CardWithDetails title={"Health Insurance"} data={insuranceData} />;
};

export default HealthInsurance;
