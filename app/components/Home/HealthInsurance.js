import Card from "../Card";

export default function HealthInsurance() {
  const carLoans = [
    {
      title: "Family Floater Insurance",
      icon: "/assets/family-floater-insurance.png",
    },
    {
      title: "Individual Health Insurance",
      icon: "/assets/individual-health-insurance.png",
    },
    {
      title: "Senior Citizen Health Insurance",
      icon: "/assets/senior-citizen-health-insurance.png",
    },
    {
      title: "Critical Illness Cover",
      icon: "/assets/critical-illness-cover.png",
    },
    {
      title: "Maternity Health Insurance",
      icon: "/assets/maternity-health-insurance.png",
    },
    {
      title: "Personal Accident Insurance",
      icon: "/assets/personal-accident-insurance.png",
    },
    {
      title: "Group Health Insurance",
      icon: "/assets/group-health-insurance.png",
    },
  ];

  return (
    <main className="max-w-[1200px] mx-auto w-full px-[15px] py-[20px]">
      <div className="flex items-center gap-2 mb-[16px]">
        <h2 className="text-greenish text-[14px] font-bold uppercase">
          Health Insurance{" "}
        </h2>
        <div className="lg:w-[128px] w-[20px] h-[1.5px] bg-greenish"></div>
      </div>
      <div className="grid grid-cols-3 lg:gap-[30px] gap-[8px]">
        {carLoans.map((loan, loanIndex) => (
          <Card key={loanIndex} title={loan.title} icon={loan.icon} />
        ))}
      </div>
    </main>
  );
}
