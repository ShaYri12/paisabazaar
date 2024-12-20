import Card from "../Card";

export default function LifeInsurance() {
  const carLoans = [
    { title: "Retirement & Pension Plans", icon: "/assets/pension-plans.png" },
    {
      title: "Guaranteed Income & Saving Plans",
      icon: "/assets/saving-plans.png",
    },
    {
      title: "Investment Plans (Endowment Plans)",
      icon: "/assets/investment-plans.png",
    },
    {
      title: "ULIP (Unit-Linked Insurance Plans)",
      icon: "/assets/ulip.png",
    },
    {
      title: "Child Education & Marriage Plans",
      icon: "/assets/education-plans.png",
    },
    { title: "Term Life Insurance", icon: "/assets/term-life-insurance.png" },
  ];

  return (
    <main className="max-w-[1200px] mx-auto w-full px-[15px] py-[20px]">
      <div className="flex items-center gap-2 mb-[16px]">
        <h2 className="text-[#60bb51] text-[14px] font-bold uppercase">
          Life Insurance{" "}
        </h2>
        <div className="w-[128px] h-[1.5px] bg-[#60bb51]"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
        {carLoans.map((loan, loanIndex) => (
          <Card key={loanIndex} title={loan.title} icon={loan.icon} />
        ))}
      </div>
    </main>
  );
}
