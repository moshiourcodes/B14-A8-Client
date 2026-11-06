import Link from "next/link";

import Hero from "@/components/Hero";
import HowBorrowingWorks from "@/components/HowBorrowingWorks";
import TopCategories from "@/components/TopCategories";


export default function Home() {
  

  return (
    <div>
      <Hero />

      <section className="bg-[#08120d] px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-[#f4f1eb] sm:text-4xl">
              New Arrivals
            </h2>

            <p className="mt-2 text-sm text-[#aaa9a2] sm:text-base">
              The latest books added by our readers.
            </p>
          </div>


          <div className="mt-8 flex justify-center">
            <Link
              href="/all-books"
              className="rounded-lg border border-[#2a3931] px-5 py-2 text-sm text-[#f4f1eb] transition hover:bg-[#14211a]"
            >
              See All Books
            </Link>
          </div>
        </div>
      </section>

      <HowBorrowingWorks />
      <TopCategories />
    </div>
  );
}
