

import BookCard from "@/components/BookCard";
import Hero from "@/components/Hero";
import HowBorrowingWorks from "@/components/HowBorrowingWorks";
import TopCategories from "@/components/TopCategories";


export default function Home() {
  return (
    <div>
      <Hero />
      <BookCard image={""} title={""} author={""} category={""}/>
      <HowBorrowingWorks />
      <TopCategories />

      
    </div>
  );
}










