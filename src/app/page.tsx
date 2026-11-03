

// import BookCard from "@/components/BookCard";
// import Hero from "@/components/Hero";
// import HowBorrowingWorks from "@/components/HowBorrowingWorks";
// import TopCategories from "@/components/TopCategories";


// export default function Home() {
//   return (
//     <div>
//       <Hero />
//       <BookCard image={""} title={""} author={""} category={""}/>
//       <HowBorrowingWorks />
//       <TopCategories />

      
//     </div>
//   );
// }








import Link from "next/link";
import BookCard from "@/components/BookCard";
import Hero from "@/components/Hero";
import HowBorrowingWorks from "@/components/HowBorrowingWorks";
import TopCategories from "@/components/TopCategories";
import { books } from "@/data/books";

export default function Home() {
  // Home page-এ শুধু নতুন 10টি বই দেখাবে
  const newArrivals = books.slice(0, 10);

  return (
    <div>
      <Hero />

      {/* New Arrivals */}
      <section className="bg-[#08120d] px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Heading */}
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-[#f4f1eb] sm:text-4xl">
              New Arrivals
            </h2>

            <p className="mt-2 text-sm text-[#aaa9a2] sm:text-base">
              The latest books added by our readers.
            </p>
          </div>

          {/* Books Grid */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {newArrivals.map((book) => (
              <BookCard
                key={book.id}
                image={book.image}
                title={book.title}
                author={book.author}
                category={book.category}
              />
            ))}
          </div>

          {/* See All Books Button */}
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

