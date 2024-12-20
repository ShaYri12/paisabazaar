import Navbar from "./components/Navbar";
import Hero from "./components/Home/Hero";
import CreditProducts from "./components/Home/CreditProducts";
import FinancialSlider from "./components/Home/FinancialSlider";
import Footer from "./components/Footer";
import Partners from "./components/Home/Partners";
import TailorMadeProducts from "./components/Home/TailorMadeProducts";
import InsuranceInvestment from "./components/Home/InsuranceInvestment";
import MeriMudraWorks from "./components/Home/MeriMudraWorks";
import MyProduct from "./components/Home/MyProduct";
import LoanCategories from "./components/Home/LoanCategories";
import CarLoans from "./components/Home/CarLoans";
import CreditCards from "./components/Home/CreditCards";
import LifeInsurance from "./components/Home/LifeInsurance";
import HealthInsurance from "./components/Home/HealthInsurance";
import GeneralInsurance from "./components/Home/GeneralInsurance";

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <Hero />
      {/* <CreditP/>roducts /> */}
      {/* <InsuranceInvestment /> */}
      {/* <FinancialSlider /> */}
      {/* <TailorMadeProducts /> */}
      <MyProduct />
      <LoanCategories />
      <CarLoans />
      <CreditCards />
      <LifeInsurance />
      <HealthInsurance />
      <GeneralInsurance />
      <MeriMudraWorks />
      <Partners />
      <Footer />
    </main>
  );
}
