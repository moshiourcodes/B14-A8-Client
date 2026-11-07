
"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
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
  username?: string;
  email?: string;
  createdAt?: string;
}

interface BooksResponse {
  success?: boolean;
  totalBooks?: number;
  books?: Book[];
}

export default function BookDetailsPage() {
  const params = useParams<{ id: string }>();
  const bookId = params.id;

  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBook = async () => {
      try {
        setLoading(true);
        setError("");

        // Fetch all books using your existing API
        const response = await fetch(
          "http://localhost:5000/books",
          {
            cache: "no-store",
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch books");
        }

        const data: BooksResponse | Book[] =
          await response.json();

        // Support both array and object API responses
        const allBooks = Array.isArray(data)
          ? data
          : data.books || [];

        // Find selected book using MongoDB ID
        const selectedBook = allBooks.find(
          (item) => String(item._id) === String(bookId)
        );

        if (!selectedBook) {
          throw new Error("Book not found");
        }

        setBook(selectedBook);

      } catch (err) {
        console.error("Error fetching book:", err);

        setError(
          err instanceof Error
            ? err.message
            : "Something went wrong!"
        );
      } finally {
        setLoading(false);
      }
    };

    if (bookId) {
      fetchBook();
    }
  }, [bookId]);

  // Loading
  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#0d1711]">
        <p className="text-[#92cba0]">
          Loading book details...
        </p>
      </main>
    );
  }

  // Error
  if (error || !book) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-[#0d1711] px-4 text-center text-[#f4f1eb]">

        <h1 className="font-serif text-3xl font-bold">
          Book Not Found
        </h1>

        <p className="mt-3 text-[#aaa9a2]">
          {error || "This book is not available."}
        </p>

        <Link
          href="/all-books"
          className="mt-6 rounded-lg bg-[#92cba0] px-5 py-3 text-sm font-medium text-[#10251a] transition hover:bg-[#a8d9b5]"
        >
          Back to All Books
        </Link>

      </main>
    );
  }

  const available = Number(book.copies) > 0;

  return (
    <main className="min-h-screen bg-[#0d1711] px-4 py-10 text-[#f4f1eb] sm:px-6 lg:px-10">

      <div className="mx-auto max-w-[1410px]">

        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2 md:gap-10 lg:gap-12">

          {/* Book Image */}
          <div className="relative mx-auto aspect-[3/4] w-full max-w-[550px] overflow-hidden rounded-md border border-[#303a33] bg-[#17231c] md:mx-0">

            {book.image ? (
              <Image
                src={book.image}
                alt={book.title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            ) : (
              <div className="flex h-full items-center justify-center text-[#aaa9a2]">
                No Image Available
              </div>
            )}

          </div>

          {/* Book Information */}
          <div className="pt-1">

            {/* Category */}
            <span className="inline-block rounded-full bg-[#26342b] px-3 py-1 text-xs text-[#c5d6c8]">
              {book.category}
            </span>

            {/* Title */}
            <h1 className="mt-4 font-serif text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              {book.title}
            </h1>

            {/* Author */}
            <p className="mt-4 text-base text-[#aaa9a2] sm:text-lg">
              by {book.author}
            </p>

            {/* Description */}
            <p className="mt-5 text-sm leading-7 text-[#d0d0c9] sm:text-base">
              {book.description || "No description available."}
            </p>

            {/* Book Information */}
            <div className="mt-6 grid grid-cols-1 gap-5 rounded-lg border border-[#303a33] bg-[#17231c] p-5 sm:grid-cols-2">

              {/* Added By */}
              <div>
                <p className="text-sm text-[#aaa9a2]">
                  Added by
                </p>

                <p className="mt-1 text-sm font-medium">
                  {book.username || "Unknown"}
                </p>

                <p className="mt-1 break-all text-sm text-[#aaa9a2]">
                  {book.email || "No email available"}
                </p>
              </div>

              {/* Copies Left */}
              <div>
                <p className="text-sm text-[#aaa9a2]">
                  Copies left
                </p>

                <p className="mt-1 text-sm font-medium">
                  {book.copies ?? 0}
                </p>
              </div>

            </div>

            {/* Availability */}
            <div className="mt-5 flex flex-wrap items-center gap-3">

              <button
                disabled
                className={`rounded-lg px-4 py-2 text-sm font-medium ${
                  available
                    ? "bg-[#395d44] text-[#d0e8d5]"
                    : "cursor-not-allowed bg-[#395d44] text-[#d0d0c9]"
                }`}
              >
                {available ? "Available" : "Not Available"}
              </button>

              <Link
                href="/all-books"
                className="text-sm font-medium text-[#92cba0] transition hover:text-[#b5e3bd]"
              >
                Back to all books
              </Link>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}
