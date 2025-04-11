import Footer from "@/components/common layout/Footer";
import InsuranceForm from "@/components/forms/InsuranceForm";
import CarInsurance from "@/components/ui/CarInsurance";
import Carousel from "@/components/ui/Carousel";
import CarPolicy from "@/components/ui/CarPolicy";
import Details from "@/components/ui/Details";
import Faq from "@/components/ui/Faq";
import Hero from "@/components/ui/Hero";
import Inclusion from "@/components/ui/Inclusion";
import InsuraceTable from "@/components/ui/InsuraceTable";
import Policies from "@/components/ui/Policies";
import Premium from "@/components/ui/premium";
import ProductTable from "@/components/ui/ProductTable";
import ReviewCarousel from "@/components/ui/ReviewCarousel";
import Searches from "@/components/ui/Searches";


export default function Home() {
  return (
    <div>
    <div className="flex  xl:flex-row  flex-col">
      <Hero />
      <InsuranceForm/>
    </div>
      <Details />
      <Carousel />
      <InsuraceTable />
      <Faq />
    <div className="bg-[#F8F6F6]">
      <Inclusion />
      <CarPolicy />
    </div>
      <Premium />
      <Policies />
      <ReviewCarousel />
      <Searches />
      <CarInsurance />
      <ProductTable />
    </div>
    );
}
