import Navbar from "./components/Navbar";
import Hero from "./components/Home/Hero";
import Footer from "./components/Footer";
import Partners from "./components/Home/Partners";
import MeriMudraWorks from "./components/Home/MeriMudraWorks";
import MyProduct from "./components/Home/MyProduct";
import CarLoans from "./components/Home/CarLoans";
import Investments from "./components/Home/Investments";
import LifeInsurance from "./components/Home/LifeInsurance";
import HealthInsurance from "./components/Home/HealthInsurance";
import GeneralInsurance from "./components/Home/GeneralInsurance";
import WorkingCaptialLoans from "./components/Home/WorkingCaptialLoans";
import UnsecuredLoans from "./components/Home/UnsecuredLoans";
import SecuredLoans from "./components/Home/SecuredLoans";

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <MyProduct />
      <WorkingCaptialLoans />
      <UnsecuredLoans />
      <SecuredLoans />
      <CarLoans />
      <Investments />
      <LifeInsurance />
      <HealthInsurance />
      <GeneralInsurance />
      <MeriMudraWorks />
      <Partners />
      <Footer />
    </main>
  );
}
