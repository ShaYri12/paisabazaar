import Card from "../Card";

export default function LoanCategories() {
  const categories = [
    {
      title: "SME & WORKING CAPITAL LOANS",
      loans: [
        { title: "OD (Overdraft)", icon: "/assets/overdraft-icon.png" },
        { title: "CC (Cash Credit)", icon: "/assets/cc.png" },
      ],
    },
    {
      title: "UNSECURED LOANS",
      loans: [
        { title: "Personal Loan", icon: "/assets/personal-loan.png" },
        { title: "Business Loan", icon: "/assets/business-loan.png" },
      ],
    },
    {
      title: "SECURED LOANS",
      loans: [
        { title: "Home Loan", icon: "/assets/home-loan.png" },
        {
          title: "Loan Against Property",
          icon: "/assets/loan-against-property.png",
        },
      ],
    },
  ];

  return (
    <main className="max-w-[1200px] mx-auto w-full px-[15px] py-[20px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
        {categories.map((category, index) => (
          <div key={index} className="space-y-[16px]">
            <div className="flex items-center gap-2">
              <h2 className="text-[#60bb51] text-[14px] font-bold uppercase">
                {category.title}{" "}
              </h2>
              <div className="lg:w-[128px] w-[20px] h-[1.5px] bg-[#60bb51]"></div>
            </div>
            <div className="flex lg:flex-col flex-row lg:gap-0 gap-[30px] lg:space-y-[40px] w-full">
              {category.loans.map((loan, loanIndex) => (
                <Card key={loanIndex} title={loan.title} icon={loan.icon} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
