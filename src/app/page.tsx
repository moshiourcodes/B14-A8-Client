import Hero from "@/components/Hero";
import HowBorrowingWorks from "@/components/HowBorrowingWorks";
import TopCategories from "@/components/TopCategories";
import NewArrivals from "@/components/NewArrivals";

export default function Home() {
  return (
    <div>
      <Hero />

      <NewArrivals></NewArrivals>

      <HowBorrowingWorks />
      <TopCategories />
    </div>
  );
}
