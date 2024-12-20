import Card from "../Card";

export default function CarLoans() {
  const carLoans = [
    { title: "New Car & Auto Loan", icon: "/assets/new-car-loan.png" },
    { title: "Old Car Loan", icon: "/assets/old-car-loan.png" },
    { title: "Loan Against Car", icon: "/assets/loan-against-car.png" },
  ];

  return (
    <main className="max-w-[1200px] mx-auto w-full px-[15px] py-[20px]">
      <div className="flex items-center gap-2 mb-[16px]">
        <h2 className="text-[#60bb51] text-[14px] font-bold uppercase">
          Car Loans{" "}
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
