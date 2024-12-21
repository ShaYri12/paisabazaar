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
        <h2 className="text-greenish text-[14px] font-bold uppercase">
          Car Loans{" "}
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
