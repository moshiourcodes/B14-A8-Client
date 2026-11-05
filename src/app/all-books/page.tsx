import BookCard from "@/components/BookCard";
import { books } from "@/data/books";
import { Key } from "react";

export default function AllBooksPage() {
  return (
    <main className="min-h-screen bg-[#08120d] px-4 py-10 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-[#f4f1eb] sm:text-4xl md:text-5xl">
            All Books
          </h1>

          <p className="mt-3 text-[#aaa9a2]">
            Explore our complete book collection.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {books.map((book: { id: Key | null | undefined; image: string; title: string; author: string; category: string; }) => (
            <BookCard
              key={book.id}
              image={book.image}
              title={book.title}
              author={book.author}
              category={book.category}
            />
          ))}
        </div>
      </div>
    </main>
  );
}













