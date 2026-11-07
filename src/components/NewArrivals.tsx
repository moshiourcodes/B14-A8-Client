"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface Book {
  _id: string;
  title: string;
  author: string;
  category: string;
  image: string;
  description: string;
  copies: number;
  createdAt?: string;
}

interface BooksResponse {
  success: boolean;
  totalBooks: number;
  books: Book[];
}

export default function NewArrivals() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("http://localhost:5000/books", {
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error("Failed to fetch books");
        }

        const data: BooksResponse = await response.json();

        const allBooks = data.books || [];

        // Latest 10 books
        setBooks(allBooks.slice(0, 10));
      } catch (error) {
        console.error("Error fetching new arrivals:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  return (
    <section className="bg-[#0d1711] px-4 py-12 text-[#f4f1eb] sm:px-6 lg:px-10">
      <div className="mx-auto max-w-302.5">
        {/* Section Header */}
        <div className="mb-8 text-center">
          <h2 className="font-serif text-2xl font-bold sm:text-3xl">
            New Arrivals
          </h2>

          <p className="mt-2 text-xs text-[#aaa9a2] sm:text-sm">
            The latest books added by our readers.
          </p>
        </div>

        {/* Loading */}
        {loading && (
          <div className="py-20 text-center text-[#92cba0]">
            Loading new arrivals...
          </div>
        )}

        {/* Books Grid */}
        {!loading && books.length > 0 && (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {books.map((book) => (
              <div
                key={book._id}
                className="group overflow-hidden rounded-md border border-[#303a33] bg-[#17231c] transition duration-300 hover:-translate-y-1 hover:border-[#92cba0]"
              >
                {/* Book Image */}
                <div className="relative h-55 overflow-hidden bg-[#202923] sm:h-65 md:h-70">
                  {book.image ? (
                    <Image
                      src={book.image}
                      alt={book.title}
                      width={500}
                      height={700}
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-xs text-[#aaa9a2]">
                      No Image Available
                    </div>
                  )}
                </div>

                {/* Book Details */}
                <div className="flex flex-col p-2.5">
                  {/* Category */}
                  <span className="mb-2 w-fit rounded-full bg-[#26342b] px-2 py-0.5 text-[9px] text-[#c5d6c8]">
                    {book.category}
                  </span>

                  {/* Title */}
                  <h3
                    title={book.title}
                    className="truncate font-serif text-xs font-semibold sm:text-sm"
                  >
                    {book.title}
                  </h3>

                  {/* Author */}
                  <p
                    title={book.author}
                    className="mt-2 truncate text-[10px] text-[#aaa9a2] sm:text-xs"
                  >
                    by {book.author}
                  </p>

                  {/* View Details */}
                  <Link
                    href={`/all-books/${book._id}`}
                    className="mt-2 flex h-7 items-center justify-center rounded bg-[#92cba0] text-[10px] font-medium text-[#10251a] transition hover:bg-[#a8d9b5] sm:text-xs"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* No Books */}
        {!loading && books.length === 0 && (
          <p className="py-12 text-center text-sm text-[#aaa9a2]">
            No books available yet.
          </p>
        )}

        {/* See All Books */}
        <div className="mt-8 flex justify-center">
          <Link
            href="/all-books"
            className="rounded-md border border-[#303a33] bg-[#17231c] px-4 py-2 text-xs font-medium text-[#f4f1eb] transition hover:border-[#92cba0] hover:bg-[#26342b]"
          >
            See All Books
          </Link>
        </div>
      </div>
    </section>
  );
}
