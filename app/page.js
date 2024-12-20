import Navbar from "./components/Navbar";
import Hero from "./components/Home/Hero";
import Footer from "./components/Footer";
import Partners from "./components/Home/Partners";
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
