// import React from 'react';

// const AllBookPage = async() => {
//   const res = await fetch("http://localhost:5000/books")
//   const data = await res.json()
//   console.log(data)
//   return (
//     <div>
      
//     </div>
//   );
// };

// export default AllBookPage; 













"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface Book {
  _id: string;
  title: string;
  author: string;
  category: string;
  copies: number;
  image: string;
  description: string;
  username: string;
  email: string;
}

interface BooksResponse {
  success: boolean;
  totalBooks: number;
  books: Book[];
}

export default function AllBooksPage() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch("http://localhost:5000/books", {
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error("Failed to fetch books");
        }

        const data: BooksResponse = await response.json();

        setBooks(Array.isArray(data) ? data : data.books || []);
      } catch (error) {
        console.error("Error fetching books:", error);
        setError(
          error instanceof Error
            ? error.message
            : "Something went wrong!"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  return (
    <main className="min-h-screen bg-[#0d1711] px-4 py-10 text-[#f4f1eb] sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1600px]">

        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="font-serif text-3xl font-bold sm:text-4xl md:text-5xl">
            All Books
          </h1>

          <p className="mt-3 text-sm text-[#aaa9a2] sm:text-base">
            Explore our complete book collection.
          </p>
        </div>

        {/* Total Books */}
        {!loading && !error && (
          <p className="mb-5 text-sm text-[#aaa9a2]">
            Showing {books.length} books
          </p>
        )}

        {/* Loading */}
        {loading && (
          <div className="flex min-h-[300px] items-center justify-center">
            <p className="text-lg text-[#92cba0]">
              Loading books...
            </p>
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="flex min-h-[300px] flex-col items-center justify-center gap-4">
            <p className="text-center text-red-400">
              {error}
            </p>

            <button
              onClick={() => window.location.reload()}
              className="rounded-lg bg-[#92cba0] px-6 py-2 text-sm font-medium text-[#10251a] hover:bg-[#a8d9b5]"
            >
              Try Again
            </button>
          </div>
        )}

        {/* Empty Books */}
        {!loading && !error && books.length === 0 && (
          <div className="flex min-h-[300px] items-center justify-center">
            <p className="text-[#aaa9a2]">
              No books found.
            </p>
          </div>
        )}

        {/* Books Grid */}
        {!loading && !error && books.length > 0 && (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:gap-5">

            {books.map((book) => (
              <div
                key={book._id}
                className="group overflow-hidden rounded-md border border-[#303a33] bg-[#17231c] transition-all duration-300 hover:-translate-y-1 hover:border-[#92cba0]/60"
              >
                {/* Book Image */}
                <div className="h-[220px] w-full overflow-hidden bg-[#202923] sm:h-[250px] md:h-[280px]">
                  {book.image ? (
                    <img
                      src={book.image}
                      alt={book.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-sm text-[#aaa9a2]">
                      No Image Available
                    </div>
                  )}
                </div>

                {/* Book Information */}
                <div className="flex min-w-0 flex-col p-2.5">

                  {/* Category */}
                  <span className="mb-2 w-fit rounded-full bg-[#26342b] px-2 py-0.5 text-[9px] text-[#c5d6c8]">
                    {book.category}
                  </span>

                  {/* Title */}
                  <h2
                    title={book.title}
                    className="truncate font-serif text-xs font-semibold text-[#f4f1eb] sm:text-sm"
                  >
                    {book.title}
                  </h2>

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
                    className="mt-2 flex h-7 w-full items-center justify-center rounded bg-[#92cba0] text-[10px] font-medium text-[#10251a] transition hover:bg-[#a8d9b5] sm:text-xs"
                  >
                    View Details
                  </Link>

                </div>
              </div>
            ))}

          </div>
        )}

      </div>
    </main>
  );
}
