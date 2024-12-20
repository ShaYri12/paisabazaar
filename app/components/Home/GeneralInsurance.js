import Card from "../Card";

export default function GeneralInsurance() {
  const carLoans = [
    {
      title: "Car Insurance",
      icon: "/assets/old-car-loan.png",
    },
    {
      title: "Home Insurance",
      icon: "/assets/home-loan.png",
    },
    {
      title: "Fire Insurance",
      icon: "/assets/fire-insurance.png",
    },
    {
      title: "Travel Insurance",
      icon: "/assets/travel-insurance.png",
    },
    {
      title: "Building Insurance",
      icon: "/assets/building-insurance.png",
    },
    {
      title: "Infrastructure Insurance",
      icon: "/assets/infrastructure-insurance.png",
    },
  ];

  return (
    <main className="max-w-[1200px] mx-auto w-full px-[15px] py-[20px]">
      <div className="flex items-center gap-2 mb-[16px]">
        <h2 className="text-[#60bb51] text-[14px] font-bold uppercase">
          General Insurance{" "}
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
