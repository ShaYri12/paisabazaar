import Navbar from "./components/Navbar";
import Hero from "./components/Home/Hero";
import CreditProducts from "./components/Home/CreditProducts";
import FinancialSlider from "./components/Home/FinancialSlider";
import Footer from "./components/Footer";
import Partners from "./components/Home/Partners";
import TailorMadeProducts from "./components/Home/TailorMadeProducts";

export default function Home() {
  return (
    <main className="min-h-screen bg-white pt-[64px] overflow-x-hidden">
      <Navbar />
      <Hero />
      <CreditProducts />
      <FinancialSlider />
      <TailorMadeProducts />
      <Partners />
      <Footer />
    </main>
  );
}
