import Footer from "@/components/common layout/Footer";
import InsuranceForm from "@/components/forms/InsuranceForm";
import CarInsurance from "@/app/Index/CarInsurance";
import Carousel from "@/app/Index/Carousel";
import CarPolicy from "@/app/Index/CarPolicy";
import Details from "@/app/Index/Details";
import Faq from "@/app/Index/Faq";
import Hero from "@/app/Index/Hero";
import Inclusion from "@/app/Index/Inclusion";
import InsuraceTable from "@/app/Index/InsuraceTable";
import Policies from "@/app/Index/Policies";
import Premium from "@/app/Index/Premium";
import ProductTable from "@/app/Index/ProductTable";
import ReviewCarousel from "@/app/Index/ReviewCarousel";
import Searches from "@/app/Index/Searches";


export default function Home() {
  return (
    <div className="font-mulish ">
    <div className="flex  xl:flex-row  flex-col justify-center items-center lg:space-x-44 max-w-[89rem] mt-[6.5rem]  w-full mx-auto ">
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
