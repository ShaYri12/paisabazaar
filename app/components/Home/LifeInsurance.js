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
        <h2 className="text-greenish text-[14px] font-bold uppercase">
          Life Insurance{" "}
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
